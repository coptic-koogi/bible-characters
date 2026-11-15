'use client';

/** Audience cards + privacy band. */

import { useLanding, useReveal } from './context';
import { FeatureIcon, SectionHead } from './bits';

export function AudiencePrivacy() {
  const { copy } = useLanding();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-16 md:py-24" aria-label={copy.audience.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* audience */}
        <SectionHead eyebrow={copy.audience.eyebrow} title={copy.audience.title} subtitle={copy.audience.subtitle} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.audience.items.map((a, i) => (
            <article
              key={a.title}
              className="reveal group rounded-2xl border border-gold-600/15 bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg hover:shadow-gold-900/10"
              style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold-600/30 bg-gold-500/10 text-gold-600 transition-transform group-hover:scale-110 dark:text-gold-400">
                <FeatureIcon name={a.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-3.5 font-display text-base font-bold leading-snug">{a.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>

        {/* privacy */}
        <div
          id="privacy"
          className="reveal mt-16 scroll-mt-24 overflow-hidden rounded-3xl border border-gold-600/20 bg-gradient-to-b from-gold-500/[0.08] to-transparent p-6 sm:p-9"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-700 dark:text-gold-300">
              {copy.privacy.eyebrow}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{copy.privacy.title}</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">{copy.privacy.subtitle}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {copy.privacy.points.map((p) => (
              <div key={p.title} className="rounded-2xl border border-gold-600/15 bg-card/70 p-5 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-gold-500/12 text-gold-600 dark:text-gold-400">
                  <FeatureIcon name={p.icon} className="h-5 w-5" />
                </span>
                <h4 className="mt-3 font-display text-base font-bold">{p.title}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
