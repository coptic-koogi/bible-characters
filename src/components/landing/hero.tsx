'use client';

/** Hero: headline, CTAs, verified stats with count-up, live phone mockup. */

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play, Sparkles, WifiOff, Languages, Database } from 'lucide-react';
import { useCountUp, useLanding, useReveal } from './context';
import { CopticStar, CopticStarGlow } from './star';
import { GhostButton, GoldButton, StoreBadges } from './bits';
import { STATS, fmt } from '@/lib/landing/data';
import { asset } from '@/lib/landing/asset';
import { ANCHORS } from '@/lib/landing/links';

/** Deterministic constellation — no randomness, so SSR and client always agree. */
const STARS = [
  { x: 8, y: 16, s: 2, d: 0, t: 5.2 },
  { x: 17, y: 42, s: 1, d: 1.4, t: 4.1 },
  { x: 24, y: 8, s: 1.5, d: 2.6, t: 6.3 },
  { x: 32, y: 27, s: 1, d: 0.7, t: 4.8 },
  { x: 41, y: 12, s: 2, d: 3.1, t: 5.7 },
  { x: 49, y: 36, s: 1, d: 1.9, t: 4.4 },
  { x: 58, y: 6, s: 1.5, d: 0.3, t: 6.8 },
  { x: 64, y: 24, s: 1, d: 2.2, t: 5.1 },
  { x: 71, y: 44, s: 2, d: 1.1, t: 4.6 },
  { x: 79, y: 15, s: 1, d: 3.4, t: 5.9 },
  { x: 86, y: 33, s: 1.5, d: 0.9, t: 4.2 },
  { x: 93, y: 10, s: 2, d: 2.8, t: 6.1 },
  { x: 12, y: 62, s: 1, d: 2, t: 5.4 },
  { x: 28, y: 72, s: 1.5, d: 3.6, t: 4.9 },
  { x: 46, y: 60, s: 1, d: 1.2, t: 6.4 },
  { x: 66, y: 68, s: 2, d: 0.5, t: 5.3 },
  { x: 83, y: 58, s: 1, d: 2.4, t: 4.7 },
  { x: 95, y: 74, s: 1.5, d: 1.7, t: 6.6 },
];

function HeroAtmosphere() {
  return (
    <div aria-hidden className="grain pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="absolute inset-0">
        {STARS.map((st) => (
          <span
            key={`${st.x}-${st.y}`}
            className="twinkle absolute rounded-full bg-gold-200"
            style={{
              left: `${st.x}%`,
              top: `${st.y}%`,
              width: st.s * 2,
              height: st.s * 2,
              ['--delay' as string]: `${st.d}s`,
              ['--dur' as string]: `${st.t}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  const ref = useCountUp(value);
  return (
    <div className="reveal group/stat relative overflow-hidden rounded-xl border border-gold-600/20 bg-gradient-to-b from-white/[0.05] to-transparent px-3 py-3 text-center transition-colors hover:border-gold-500/45">
      <span
        ref={ref}
        className="block font-display text-2xl font-bold tabular-nums text-gold-600 dark:text-gold-400 sm:text-[1.7rem]"
      >
        0
      </span>
      <span className="mt-0.5 block text-[11px] font-medium leading-tight text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const { lang, copy } = useLanding();
  const ref = useReveal<HTMLElement>();
  const [shotIdx, setShotIdx] = useState(0);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const shots = ['01_encyclopedia', '03_complete_stories', '07_ai_assistant', '08_night_mode'];

  // slow, elegant screenshot rotation inside the phone
  useEffect(() => {
    const t = setInterval(() => setShotIdx((i) => (i + 1) % shots.length), 4200);
    return () => clearInterval(t);
  }, [shots.length]);

  // subtle pointer-follow tilt (desktop / fine pointers only)
  useEffect(() => {
    const scene = sceneRef.current;
    const card = tiltRef.current;
    if (!scene || !card) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
      });
    };
    const reset = () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
    };
    scene.addEventListener('pointermove', onMove);
    scene.addEventListener('pointerleave', reset);
    return () => {
      scene.removeEventListener('pointermove', onMove);
      scene.removeEventListener('pointerleave', reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-16" aria-label="hero">
      {/* backdrop */}
      <div className="night-glow pointer-events-none absolute inset-0" aria-hidden />
      <HeroAtmosphere />
      {/* oversized ghost star — fills the upper corner void with quiet ornament */}
      <CopticStar
        className="pointer-events-none absolute -top-10 -end-24 hidden h-[26rem] w-[26rem] text-gold-500/[0.05] lg:block"
        strokeWidth={2}
      />
      <CopticStar
        className="pointer-events-none absolute -bottom-16 -start-20 hidden h-80 w-80 text-gold-500/[0.04] lg:block"
        strokeWidth={2}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,167,91,.5), transparent)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-20">
        {/* copy column */}
        <div className="text-center lg:text-start">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-gold-600/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-700 dark:text-gold-300">
            <Sparkles className="h-3.5 w-3.5" />
            {copy.hero.chip}
          </span>

          <h1 className="reveal mt-5 font-display text-4xl font-bold leading-[1.2] sm:text-5xl lg:text-[3.4rem]" style={{ ['--reveal-delay' as string]: '60ms' }}>
            <span className="text-gold-grad animate-sheen">{copy.hero.title}</span>
          </h1>

          <p className="reveal mt-4 font-display text-xl font-semibold leading-relaxed text-foreground/90 sm:text-2xl" style={{ ['--reveal-delay' as string]: '120ms' }}>
            {copy.hero.tagline}
          </p>

          <p className="reveal mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0" style={{ ['--reveal-delay' as string]: '180ms' }}>
            {copy.hero.sub}
          </p>

          {/* CTAs */}
          <div className="reveal mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={{ ['--reveal-delay' as string]: '240ms' }}>
            <GoldButton href={ANCHORS.demo}>
              <Play className="h-4 w-4" />
              {copy.hero.ctaDemo}
            </GoldButton>
            <GhostButton href={ANCHORS.download}>{copy.nav.download}</GhostButton>
          </div>

          <div className="reveal mt-6 flex justify-center lg:justify-start" style={{ ['--reveal-delay' as string]: '300ms' }}>
            <StoreBadges compact />
          </div>

          {/* stats */}
          <div
            className="reveal mt-9 grid grid-cols-2 gap-2.5 border-t border-gold-600/15 pt-6 sm:grid-cols-4"
            style={{ ['--reveal-delay' as string]: '360ms' }}
          >
            <Stat value={STATS.profiles} label={copy.hero.stats.profiles} />
            <Stat value={STATS.books} label={copy.hero.stats.books} />
            <Stat value={STATS.categories} label={copy.hero.stats.categories} />
            <Stat value={STATS.symbols} label={copy.hero.stats.symbols} />
          </div>

          <p className="reveal mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/80 lg:justify-start" style={{ ['--reveal-delay' as string]: '420ms' }}>
            <Database className="h-3 w-3 shrink-0" />
            {copy.hero.verifiedNote}
          </p>
        </div>

        {/* phone column */}
        <div
          ref={sceneRef}
          className="reveal relative mx-auto w-full max-w-[340px] sm:max-w-[380px]"
          style={{ ['--reveal-delay' as string]: '200ms' }}
        >
          {/* halo behind the phone */}
          <CopticStarGlow className="pointer-events-none absolute -top-8 left-1/2 z-0 h-52 w-52 -translate-x-1/2 opacity-80 sm:-top-10 sm:h-60 sm:w-60" />
          <div
            className="pointer-events-none absolute inset-x-6 top-4 bottom-8 z-0 rounded-[2.6rem] opacity-60 blur-2xl"
            style={{ background: 'radial-gradient(60% 50% at 50% 40%, rgba(201,167,91,.35), transparent 75%)' }}
            aria-hidden
          />

          <div ref={tiltRef} className="tilt relative z-10">
            {/* device */}
            <div className="relative z-10 mx-auto aspect-[9/19] w-full overflow-hidden rounded-[2.4rem] border border-gold-500/35 bg-[#0c0a07] shadow-2xl shadow-black/50 ring-1 ring-black/60">
              {/* notch */}
              <div className="absolute inset-x-0 top-0 z-20 flex h-6 items-center justify-center bg-black/90" aria-hidden>
                <span className="h-1.5 w-16 rounded-full bg-white/15" />
              </div>
              {/* screen: rotating real screenshots */}
              <div className="absolute inset-0 pt-6">
                {shots.map((s, i) => (
                  <img
                    key={s}
                    src={asset(`/screenshots/${lang}/${s}.jpg`)}
                    alt={`${copy.hero.phoneCaption} — ${copy.shots.captions[i]}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                      i === shotIdx ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* readability vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" aria-hidden />
              </div>
            </div>

            {/* floating chips — hug the device, z above halo */}
            <div className="animate-floaty absolute -start-4 top-6 z-20 hidden items-center gap-2 rounded-xl border border-gold-600/30 bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:flex">
              <WifiOff className="h-4 w-4 text-gold-600 dark:text-gold-400" />
              <span className="text-[11px] font-semibold">{copy.hero.chips.offline}</span>
            </div>
            <div className="animate-floaty-slow absolute -end-4 top-[56%] z-20 hidden items-center gap-2 rounded-xl border border-gold-600/30 bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:flex">
              <Languages className="h-4 w-4 text-gold-600 dark:text-gold-400" />
              <span className="text-[11px] font-semibold">{copy.hero.chips.langs}</span>
            </div>
            <div
              className="animate-floaty absolute -start-3 bottom-16 z-20 hidden items-center gap-2 rounded-xl border border-gold-600/30 bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:flex"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="font-display text-sm font-bold text-gold-600 dark:text-gold-400">{fmt(STATS.profiles)}</span>
              <span className="text-[11px] font-semibold text-muted-foreground">{copy.hero.stats.profiles}</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="relative flex justify-center pb-8">
        <a
          href={ANCHORS.demo}
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-gold-600 dark:hover:text-gold-400"
        >
          <span className="text-[11px] font-medium">{copy.hero.scroll}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
