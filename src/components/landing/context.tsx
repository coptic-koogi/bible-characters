'use client';

/**
 * Landing context: language (ar/en/fr/es with RTL flip), theme (dark default),
 * persistence, and shared reveal/count-up hooks.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { COPY, LANGS, type LandingCopy, type Lang } from '@/lib/landing/i18n';

type Theme = 'dark' | 'light';

interface LandingCtx {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  copy: LandingCopy;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
}

const Ctx = createContext<LandingCtx | null>(null);

const LANG_KEY = 'bce.lang';
const THEME_KEY = 'bce.theme';

export function LandingProvider({ children }: { children: ReactNode }) {
  // English-first: the landing page speaks to an international audience by
  // default; Arabic (RTL) and the other languages are one tap away and the
  // visitor's choice is remembered.
  const [lang, setLangState] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('dark');

  // restore persisted preferences (client only — must run after hydration to
  // avoid an SSR/client mismatch, so setState-in-effect is intentional here)
  useEffect(() => {
    try {
      const l = localStorage.getItem(LANG_KEY) as Lang | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration restore of persisted prefs
      if (l && LANGS.some((x) => x.code === l)) setLangState(l);
      const t = localStorage.getItem(THEME_KEY) as Theme | null;
      if (t === 'light' || t === 'dark') setTheme(t);
    } catch {
      /* private mode */
    }
  }, []);

  // reflect on <html>
  useEffect(() => {
    const el = document.documentElement;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    el.lang = lang;
    el.dir = dir;
    el.classList.toggle('dark', theme === 'dark');
    el.style.colorScheme = theme;
  }, [lang, theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<LandingCtx>(
    () => ({
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      copy: COPY[lang],
      theme,
      setLang,
      toggleTheme,
    }),
    [lang, theme, setLang, toggleTheme],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLanding(): LandingCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLanding must be used inside <LandingProvider>');
  return v;
}

/** Attach an IntersectionObserver-driven reveal to a section element.
 *  Mutation-aware: newly mounted .reveal nodes (e.g. filtered demo cards)
 *  are observed automatically.
 *
 *  Progressive enhancement, never a blank page: if the observer cannot fire
 *  (background tab, occluded window, very slow JS) the elements already in
 *  the viewport are revealed after a short grace period, and everything is
 *  revealed at once whenever the document is not visible. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const settle = (node: Element) => {
      node.classList.remove('is-hidden');
      node.classList.add('is-visible');
    };
    const revealAll = () => el.querySelectorAll('.reveal').forEach(settle);

    // A hidden document paints nothing, so skip the choreography entirely.
    if (document.visibilityState === 'hidden') {
      revealAll();
      return;
    }

    const vh = () => window.innerHeight || document.documentElement.clientHeight;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            settle(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    // Only elements that are genuinely below the fold are hidden, and only
    // after JS is running — everything on screen is visible from first paint.
    const observeAll = () => {
      el.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((n) => {
        if (!n.classList.contains('is-hidden')) {
          const r = n.getBoundingClientRect();
          const onScreen = r.top < vh() * 1.15 && r.bottom > 0;
          if (onScreen) {
            n.classList.add('is-visible');
            return;
          }
          n.classList.add('is-hidden');
        }
        io.observe(n);
      });
    };
    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(el, { childList: true, subtree: true });

    // Safety net: nothing may stay hidden if the observer never fires.
    const grace = window.setTimeout(() => {
      const top = vh();
      el.querySelectorAll<HTMLElement>('.reveal.is-hidden').forEach((n) => {
        if (n.getBoundingClientRect().top < top) settle(n);
      });
    }, 1200);
    const onVisible = () => {
      if (document.visibilityState === 'visible') revealAll();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      window.clearTimeout(grace);
      document.removeEventListener('visibilitychange', onVisible);
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return ref;
}

/** Count-up when the element scrolls into view (once). */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-US');
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          started = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    // guarantee the final value even if the element never intersects
    const fallback = window.setTimeout(() => {
      if (!started) {
        started = true;
        run();
        io.disconnect();
      }
    }, 2200);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  return ref;
}
