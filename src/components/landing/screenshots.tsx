'use client';

/** Screenshots carousel — real store screenshots, switching with the page language. */

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanding, useReveal } from './context';
import { SectionHead } from './bits';
import { asset } from '@/lib/landing/asset';
import { cn } from '@/lib/utils';

const SHOTS = [
  '01_encyclopedia', '02_illustrated_scenes', '03_complete_stories', '04_christ_section',
  '05_family_tree', '06_smart_search', '07_ai_assistant', '08_night_mode',
];

export function Screenshots() {
  const { lang, copy } = useLanding();
  const ref = useReveal<HTMLElement>();
  const railRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[i] as HTMLElement | undefined;
    if (card) {
      const rtl = document.documentElement.dir === 'rtl';
      const x = rtl
        ? card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2
        : card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
      rail.scrollTo({ left: x, behavior: 'smooth' });
    }
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = (idx + dir + SHOTS.length) % SHOTS.length;
      setIdx(next);
      scrollTo(next);
    },
    [idx, scrollTo],
  );

  // keep index in sync when the user scrolls manually
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rtl = document.documentElement.dir === 'rtl';
        const center = rail.scrollLeft + rail.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(rail.children).forEach((el, i) => {
          const c = el as HTMLElement;
          const mid = c.offsetLeft + c.clientWidth / 2;
          const dist = Math.abs(mid - center);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        if (best !== idx) setIdx(best);
        void rtl;
      });
    };
    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      rail.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [idx]);

  return (
    <section id="screenshots" ref={ref} className="scroll-mt-20 py-16 md:py-24" aria-label={copy.shots.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={copy.shots.eyebrow} title={copy.shots.title} subtitle={copy.shots.subtitle} />

        <div className="reveal relative">
          {/* arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={copy.shots.prev}
            className="absolute start-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold-600/30 bg-background/90 text-gold-700 shadow-lg backdrop-blur transition-all hover:border-gold-500 hover:bg-gold-500/10 md:grid dark:text-gold-300"
          >
            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={copy.shots.next}
            className="absolute end-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gold-600/30 bg-background/90 text-gold-700 shadow-lg backdrop-blur transition-all hover:border-gold-500 hover:bg-gold-500/10 md:grid dark:text-gold-300"
          >
            <ChevronRight className="h-5 w-5 rtl:rotate-180" />
          </button>

          {/* rail */}
          <div
            ref={railRef}
            className="shot-rail no-scrollbar -mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-1"
          >
            {SHOTS.map((s, i) => (
              <figure
                key={s}
                className={cn(
                  'group w-[220px] shrink-0 sm:w-[250px]',
                  i === idx ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-70 transition-all duration-300',
                )}
              >
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border shadow-md transition-all duration-300',
                    i === idx
                      ? 'border-gold-500/60 shadow-xl shadow-gold-900/20'
                      : 'border-gold-600/15 group-hover:border-gold-500/40',
                  )}
                >
                  <img
                    src={asset(`/screenshots/${lang}/${s}.jpg`)}
                    alt={copy.shots.captions[i]}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    width={640}
                    height={1138}
                    className="h-auto w-full select-none"
                    draggable={false}
                  />
                </div>
                <figcaption
                  className={cn(
                    'mt-2.5 text-center text-xs font-semibold',
                    i === idx ? 'text-gold-700 dark:text-gold-300' : 'text-muted-foreground',
                  )}
                >
                  {copy.shots.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* dots */}
          <div className="mt-2 flex items-center justify-center gap-1.5" role="tablist" aria-label={copy.shots.hint}>
            {SHOTS.map((s, i) => (
              <button
                key={s}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={copy.shots.captions[i]}
                onClick={() => {
                  setIdx(i);
                  scrollTo(i);
                }}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === idx ? 'w-6 bg-gold-500' : 'w-1.5 bg-gold-600/30 hover:bg-gold-600/60',
                )}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] text-muted-foreground/80">{copy.shots.hint}</p>
        </div>
      </div>
    </section>
  );
}
