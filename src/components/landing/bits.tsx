'use client';

/** Shared landing pieces: section headers, store badges, icon map. */

import type { ComponentType } from 'react';
import {
  Bot, Volume2, Palette, Network, Zap, Library, Cross, Flame, CalendarDays,
  Smartphone, FolderTree, MoonStar, GraduationCap, BookOpen, Users, Search,
  ShieldCheck, WifiOff, BadgeCheck,
} from 'lucide-react';
import { useLanding } from './context';
import { APPSTORE_URL, PLAY_URL } from '@/lib/landing/links';

/* ------------------------------------------------------------------ */
/* Skip link (localized)                                               */
/* ------------------------------------------------------------------ */

export function SkipLink() {
  const { copy } = useLanding();
  return (
    <a
      href="#demo"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#241b08]"
    >
      {copy.common.skip}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Icon registry                                                       */
/* ------------------------------------------------------------------ */

const ICONS: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  bot: Bot, volume: Volume2, palette: Palette, tree: Network, zap: Zap,
  library: Library, cross: Cross, flame: Flame, calendar: CalendarDays,
  phone: Smartphone, organize: FolderTree, moon: MoonStar,
  cap: GraduationCap, book: BookOpen, users: Users, search: Search,
  shield: ShieldCheck, wifi: WifiOff, badge: BadgeCheck,
};

export function FeatureIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Library;
  return <Cmp className={className} strokeWidth={1.75} />;
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function SectionHead({
  eyebrow, title, subtitle, dark = false, align = 'center',
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'center' | 'start';
}) {
  return (
    <div className={`reveal max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-start'} mb-10 md:mb-14`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide ${
          dark
            ? 'border-gold-600/40 bg-gold-500/10 text-gold-300'
            : 'border-gold-600/30 bg-gold-500/10 text-gold-700 dark:text-gold-300'
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-gold-100' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-gold-200/70' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Store badges (drawn inline — no external images)                    */
/* ------------------------------------------------------------------ */

function PlayLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M3.6 2.3 13.7 12 3.6 21.7c-.37-.2-.6-.6-.6-1.1V3.4c0-.5.23-.9.6-1.1Z" />
      <path fill="#FBBC04" d="m17.4 8.9-3.7 3.1-10-9.7c.2-.05.5 0 .7.1l13 7.5Z" />
      <path fill="#4285F4" d="m21.8 12c0 .6-.35 1.2-.9 1.5l-3.5 2-3.7-3.5 3.7-3.1 3.5 2c.55.3.9.9.9 1.5Z" />
      <path fill="#34A853" d="m3.8 22c-.25-.05-.45-.15-.6-.3L13.7 12l3.7 3.5-13 7.5c-.2.1-.4.15-.6.1Z" />
    </svg>
  );
}

function AppleLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.36 12.76c-.02-2.13 1.74-3.15 1.82-3.2-.99-1.45-2.53-1.65-3.08-1.67-1.31-.13-2.56.77-3.22.77-.66 0-1.69-.75-2.78-.73-1.43.02-2.75.83-3.49 2.11-1.49 2.58-.38 6.4 1.07 8.5.71 1.03 1.55 2.18 2.66 2.14 1.07-.04 1.47-.69 2.76-.69s1.65.69 2.78.67c1.15-.02 1.87-1.04 2.57-2.07.81-1.19 1.14-2.34 1.16-2.4-.03-.01-2.23-.86-2.25-3.43ZM14.24 5.7c.59-.71.98-1.7.87-2.68-.84.03-1.86.56-2.47 1.27-.54.63-1.02 1.63-.89 2.6.94.07 1.9-.48 2.49-1.19Z" />
    </svg>
  );
}

export function StoreBadges({ compact = false }: { compact?: boolean }) {
  const { copy } = useLanding();
  const base =
    'group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-[#0d0c0a] px-4 py-2.5 text-white shadow-lg shadow-black/20 transition-all';
  const live = 'hover:-translate-y-0.5 hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-900/20';
  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? '' : 'gap-4'}`}>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${live}`}
        aria-label={copy.common.playStore}
      >
        <PlayLogo className="h-7 w-7 shrink-0" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-white/60">{copy.common.free} · Android</span>
          <span className="text-sm font-bold">Google Play</span>
        </span>
      </a>

      {APPSTORE_URL ? (
        <a
          href={APPSTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${live}`}
          aria-label={copy.common.appStore}
        >
          <AppleLogo className="h-7 w-7 shrink-0 text-white" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-white/60">{copy.common.free} · iOS</span>
            <span className="text-sm font-bold">App Store</span>
          </span>
        </a>
      ) : (
        <div
          className={`${base} cursor-default opacity-75`}
          title={copy.common.appStoreSoon}
          aria-label={copy.common.appStoreSoon}
          aria-disabled="true"
        >
          <AppleLogo className="h-7 w-7 shrink-0 text-white/80" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase tracking-wider text-white/60">{copy.common.soon} · iOS</span>
            <span className="text-sm font-bold">App Store</span>
          </span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

export function GoldButton({
  href, children, onClick, className = '',
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const cls =
    `inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-gold-400 to-gold-600 px-6 py-3 text-sm font-bold text-[#241b08] shadow-lg shadow-gold-900/30 transition-all hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-500 hover:shadow-xl hover:shadow-gold-800/40 active:translate-y-0 ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function GhostButton({
  href, children, dark = false, className = '',
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const cls =
    `inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
      dark
        ? 'border-gold-500/30 bg-transparent text-gold-200 hover:border-gold-400/60 hover:bg-gold-500/10'
        : 'border-gold-600/30 bg-transparent text-gold-700 hover:border-gold-500/60 hover:bg-gold-500/10 dark:text-gold-300'
    } ${className}`;
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
