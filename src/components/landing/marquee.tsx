'use client';

/** Books ticker — the 79 documented books of the database, infinitely scrolling. */

import { useLanding } from './context';
import { DATA } from '@/lib/landing/data';

export function BooksMarquee() {
  const { lang, copy } = useLanding();
  const books = DATA.books.map((b) => b.name[lang]).filter(Boolean);
  const row = [...books, ...books]; // duplicated for the seamless loop

  return (
    <section
      className="relative overflow-hidden border-y border-gold-600/20 bg-gradient-to-b from-[#17130c] to-[#1d1810] py-5"
      aria-label={copy.marquee.label}
    >
      <div className="star-lattice pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <p className="sr-only">{copy.marquee.label}: {books.join(' · ')}</p>
      <div className="marquee relative" dir="ltr">
        <div className="marquee-track items-center gap-10 px-5">
          {row.map((name, i) => (
            <span key={`${name}-${i}`} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
              <span className="h-1 w-1 rotate-45 bg-gold-500/70" aria-hidden />
              <span className="font-display text-sm font-semibold tracking-wide text-gold-200/85">{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
