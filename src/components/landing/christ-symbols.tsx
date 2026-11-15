'use client';

/** Christ section + symbols module teaser — real group data from the database. */

import { ArrowDown } from 'lucide-react';
import { useLanding, useReveal } from './context';
import { DATA } from '@/lib/landing/data';
import { CopticStar } from './star';

export function ChristSymbols() {
  const { lang, copy } = useLanding();
  const ref = useReveal<HTMLElement>();
  const groups = DATA.symbolGroups;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#17130c] py-16 md:py-24"
      aria-label={`${copy.christ.title} — ${copy.symbols.title}`}
    >
      <div className="star-lattice pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,167,91,.5), transparent)' }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Christ */}
        <article className="reveal relative overflow-hidden rounded-3xl border border-gold-600/20 bg-gradient-to-b from-[#221c11] to-[#1a150d] p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -top-16 end-0 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl"
            aria-hidden
          />
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/40 bg-gold-500/10 text-gold-300">
              <CopticStar className="h-7 w-7" strokeWidth={7} />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-500/80">{copy.christ.eyebrow}</p>
              <h3 className="font-display text-2xl font-bold text-gold-100">{copy.christ.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gold-200/70">{copy.christ.text}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {copy.christ.chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-gold-600/25 bg-gold-500/[0.07] px-3 py-1 text-xs font-semibold text-gold-200/90"
              >
                {c}
              </span>
            ))}
          </div>
          <a
            href="#download"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
          >
            {copy.christ.cta}
            <ArrowDown className="h-4 w-4" />
          </a>
        </article>

        {/* Symbols */}
        <article className="reveal relative overflow-hidden rounded-3xl border border-gold-600/20 bg-gradient-to-b from-[#1c1810] to-[#17130c] p-6 sm:p-8" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div
            className="pointer-events-none absolute -bottom-16 start-0 h-56 w-56 rounded-full bg-gold-500/[0.07] blur-3xl"
            aria-hidden
          />
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold-500/80">{copy.symbols.eyebrow}</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-gold-100">{copy.symbols.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-gold-200/70">{copy.symbols.text}</p>

          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {groups.map((g) => (
              <li
                key={g.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-gold-600/15 bg-black/20 px-3.5 py-2.5 transition-colors hover:border-gold-500/35"
              >
                <span className="min-w-0 truncate text-[13px] font-semibold text-gold-100/90">{g.title[lang]}</span>
                <span className="shrink-0 rounded-lg bg-gold-500/15 px-2 py-0.5 text-[11px] font-bold text-gold-300 tabular-nums">
                  {g.count}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
          >
            {copy.symbols.cta}
            <ArrowDown className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
