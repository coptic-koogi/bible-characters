'use client';

/** Twelve flagship features on the signature night band. */

import { useLanding, useReveal } from './context';
import { FeatureIcon, SectionHead } from './bits';

export function Features() {
  const { copy } = useLanding();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="features"
      ref={ref}
      className="relative scroll-mt-20 overflow-hidden bg-[#17130c] py-16 md:py-24"
      aria-label={copy.features.title}
    >
      <div className="star-lattice pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,167,91,.5), transparent)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,167,91,.5), transparent)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead dark eyebrow={copy.features.eyebrow} title={copy.features.title} subtitle={copy.features.subtitle} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.items.map((f, i) => (
            <article
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-gold-600/15 bg-[#1f1a11]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-[#241e13]"
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}
            >
              <div
                className="pointer-events-none absolute -end-10 -top-10 h-28 w-28 rounded-full bg-gold-500/10 blur-2xl transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-600/30 bg-gradient-to-b from-gold-500/15 to-transparent text-gold-400 transition-transform group-hover:scale-105">
                  <FeatureIcon name={f.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-gold-100">{f.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-gold-200/65">{f.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
