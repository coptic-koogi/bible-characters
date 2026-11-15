'use client';

/** Sticky glass header: emblem, nav, language switcher, theme, GitHub, download. */

import { useEffect, useState } from 'react';
import { Check, Download, Github, Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGS, type Lang } from '@/lib/landing/i18n';
import { ANCHORS, GITHUB_URL } from '@/lib/landing/links';
import { APP_NAME } from '@/lib/landing/i18n';
import { useLanding } from './context';
import { CopticStar } from './star';
import { cn } from '@/lib/utils';

export function Header() {
  const { lang, copy, theme, setLang, toggleTheme } = useLanding();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 8 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const nav = [
    { href: ANCHORS.demo, label: copy.nav.demo },
    { href: ANCHORS.features, label: copy.nav.features },
    { href: ANCHORS.screenshots, label: copy.nav.screenshots },
    { href: ANCHORS.download, label: copy.nav.download },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gold-600/20 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* brand */}
        <a href="#top" className="group flex min-w-0 items-center gap-2.5" aria-label={APP_NAME[lang]}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-600/40 bg-gradient-to-b from-gold-500/15 to-transparent text-gold-600 transition-colors group-hover:border-gold-500/70 dark:text-gold-400">
            <CopticStar className="h-6 w-6" strokeWidth={8} />
          </span>
          <span className="hidden min-[420px]:block">
            <span className="block truncate font-display text-base font-bold leading-tight text-foreground">
              {APP_NAME[lang]}
            </span>
            <span className="block text-[11px] font-medium text-gold-600 dark:text-gold-400">
              3,026 · 4 Languages · Offline
            </span>
          </span>
        </a>

        <div className="flex-1" />

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-gold-500/10 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* language */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 border-gold-600/25 px-2.5" aria-label={copy.common.language}>
              <Languages className="h-4 w-4 text-gold-600 dark:text-gold-400" />
              <span className="text-xs font-bold">{LANGS.find((l) => l.code === lang)?.short}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-40">
            {LANGS.map((l) => (
              <DropdownMenuItem
                key={l.code}
                onClick={() => setLang(l.code as Lang)}
                className={cn('gap-2', l.code === lang && 'bg-gold-500/15')}
              >
                <span className="w-7 text-xs font-bold text-gold-700 dark:text-gold-400">{l.short}</span>
                <span className="flex-1">{l.native}</span>
                {l.code === lang ? <Check className="h-4 w-4 text-gold-600" /> : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* theme */}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gold-600/25"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? copy.common.themeToLight : copy.common.themeToDark}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4 text-gold-500" /> : <Moon className="h-4 w-4 text-gold-600" />}
        </Button>

        {/* github */}
        <Button
          variant="outline"
          size="icon"
          className="hidden h-9 w-9 border-gold-600/25 sm:inline-flex"
          asChild
        >
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label={copy.nav.github}>
            <Github className="h-4 w-4" />
          </a>
        </Button>

        {/* download */}
        <Button
          size="sm"
          className="hidden h-9 bg-gradient-to-b from-gold-400 to-gold-600 text-[13px] font-bold text-[#241b08] shadow-md shadow-gold-900/25 hover:from-gold-300 hover:to-gold-500 sm:inline-flex"
          asChild
        >
          <a href={ANCHORS.download}>
            <Download className="h-4 w-4" />
            {copy.nav.download}
          </a>
        </Button>

        {/* mobile menu */}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-gold-600/25 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={copy.common.menu}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* mobile drawer */}
      {open ? (
        <nav
          className="border-t border-gold-600/20 bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden"
          aria-label="mobile"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-gold-500/10"
            >
              {n.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-gold-500/10"
          >
            <Github className="h-4 w-4" /> {copy.footer.github}
          </a>
          <a
            href={ANCHORS.download}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-gold-400 to-gold-600 px-4 py-2.5 text-sm font-bold text-[#241b08]"
          >
            <Download className="h-4 w-4" /> {copy.nav.download}
          </a>
        </nav>
      ) : null}

      {/* reading progress */}
      <span
        aria-hidden
        className="progress-bar absolute bottom-0 start-0 h-px w-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
        style={{ transform: `scaleX(${progress})`, opacity: progress > 0.005 ? 1 : 0 }}
      />
    </header>
  );
}
