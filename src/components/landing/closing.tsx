'use client';

/** Final download CTA + sticky footer. */

import { Github, Globe, Smartphone, WifiOff } from 'lucide-react';
import { useLanding, useReveal } from './context';
import { GoldButton, StoreBadges } from './bits';
import { CopticStar } from './star';
import { ANCHORS, GITHUB_URL } from '@/lib/landing/links';
import { APP_NAME } from '@/lib/landing/i18n';

export function DownloadCta() {
  const { copy } = useLanding();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="download" ref={ref} className="scroll-mt-20 pb-16 md:pb-24 pt-4" aria-label={copy.download.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#241d10] to-[#171208] px-6 py-12 text-center shadow-2xl shadow-black/30 sm:px-10 md:py-16">
          <div className="star-lattice pointer-events-none absolute inset-0" aria-hidden />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-gold-500/40 bg-gold-500/10 text-gold-300 shadow-inner">
              <CopticStar className="h-9 w-9" strokeWidth={6} />
            </span>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-500/90">{copy.download.eyebrow}</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-snug text-gold-100 sm:text-4xl">
              {copy.download.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gold-200/75 sm:text-base">
              {copy.download.subtitle}
            </p>

            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gold-200/70">
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5" /> {copy.download.platforms}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <WifiOff className="h-3.5 w-3.5" /> {copy.hero.chips.offline}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" /> {copy.download.note}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, copy } = useLanding();

  return (
    <footer className="mt-auto border-t border-gold-600/20 bg-[#12100a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-600/40 bg-gold-500/10 text-gold-400">
                <CopticStar className="h-6 w-6" strokeWidth={8} />
              </span>
              <span className="font-display text-lg font-bold text-gold-100">{APP_NAME[lang]}</span>
            </div>
            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-gold-200/60">{copy.footer.tagline}</p>
            <p className="mt-4 text-xs text-gold-200/40">{copy.footer.crafted}</p>
          </div>

          {/* page links */}
          <nav aria-label={copy.footer.appCol}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-500/80">{copy.footer.appCol}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a className="text-gold-200/70 transition-colors hover:text-gold-300" href={ANCHORS.demo}>{copy.footer.links.demo}</a></li>
              <li><a className="text-gold-200/70 transition-colors hover:text-gold-300" href={ANCHORS.features}>{copy.footer.links.features}</a></li>
              <li><a className="text-gold-200/70 transition-colors hover:text-gold-300" href={ANCHORS.screenshots}>{copy.footer.links.screenshots}</a></li>
              <li><a className="text-gold-200/70 transition-colors hover:text-gold-300" href={ANCHORS.download}>{copy.footer.links.download}</a></li>
            </ul>
          </nav>

          {/* resources */}
          <nav aria-label={copy.footer.resources}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-500/80">{copy.footer.resources}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-1.5 text-gold-200/70 transition-colors hover:text-gold-300"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3.5 w-3.5" /> {copy.footer.github}
                </a>
              </li>
              <li>
                <a className="text-gold-200/70 transition-colors hover:text-gold-300" href={ANCHORS.privacy}>
                  {copy.footer.privacy}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold-600/15 pt-6 text-xs text-gold-200/50 sm:flex-row">
          <span>{copy.footer.rights}</span>
          <span className="rounded-full border border-gold-600/25 px-3 py-1 font-semibold text-gold-300/80">
            {copy.footer.version}
          </span>
        </div>
      </div>
    </footer>
  );
}
