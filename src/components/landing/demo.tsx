'use client';

/**
 * The live demo — a mini version of the app's encyclopedia browser:
 * real-time search, testament + category filters, and full profile
 * dialogs, all powered by real data from the app's database.
 */

import { useMemo, useState } from 'react';
import {
  BookOpen, CalendarClock, Clock3, Download,
  MapPin, Quote, Search, Sparkles, Users, X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanding, useReveal } from './context';
import {
  CHARACTERS, DATA, DEMO_CATEGORY_IDS, PERIOD_TITLE, fill, fmt, matches, scenePalette,
  type MiniCharacter, type Quad,
} from '@/lib/landing/data';
import { SectionHead } from './bits';
import { CopticStar } from './star';
import { cn } from '@/lib/utils';

type TestFilter = 'all' | 'old_testament' | 'new_testament';

/* ------------------------------------------------------------------ */
/* Scene card header — gradient from the app's real scene palettes     */
/* ------------------------------------------------------------------ */

function SceneArt({ c, tall = false }: { c: MiniCharacter; tall?: boolean }) {
  const [deep, mid, light] = scenePalette(c.scene.bg);
  const divine = c.scene.mood === 'divine';
  return (
    <div
      className={cn('relative overflow-hidden', tall ? 'h-32' : 'h-24')}
      style={{ background: `linear-gradient(135deg, ${deep} 0%, ${mid} 100%)` }}
      aria-hidden
    >
      {/* light rays for divine scenes */}
      {divine ? (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'conic-gradient(from 200deg at 80% -10%, transparent 0deg, rgba(255,244,214,.28) 12deg, transparent 24deg, transparent 40deg, rgba(255,244,214,.2) 52deg, transparent 64deg)',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: `radial-gradient(120% 90% at 85% -20%, ${light}33, transparent 60%)` }}
        />
      )}
      <div className="star-lattice absolute inset-0 opacity-40" />
      {/* emblem */}
      <CopticStar
        className={cn('absolute text-[#f3e2b3] opacity-80 drop-shadow', tall ? 'end-5 top-4 h-14 w-14' : 'end-4 top-3 h-11 w-11')}
        strokeWidth={6}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Character card                                                      */
/* ------------------------------------------------------------------ */

function CharacterCard({ c, onOpen, delay }: { c: MiniCharacter; onOpen: () => void; delay: number }) {
  const { lang, copy } = useLanding();
  const cat0 = c.categories[0] ? DATA.categories[c.categories[0]] : null;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-gold-600/15 bg-card text-start shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-xl hover:shadow-gold-900/15 focus-visible:border-gold-500"
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      <SceneArt c={c} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-gold-700 dark:group-hover:text-gold-300">
          {c.name[lang]}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-[10px] font-bold',
              c.testament === 'old_testament'
                ? 'bg-gold-500/15 text-gold-700 dark:text-gold-300'
                : 'bg-emerald-800/15 text-emerald-700 dark:text-emerald-300',
            )}
          >
            {c.testament === 'old_testament' ? copy.demo.detail.ot : copy.demo.detail.nt}
          </span>
          {cat0 ? (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {cat0.title[lang]}
            </span>
          ) : null}
        </div>
        <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          {c.summary[lang]}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3.5">
          <span className="text-[11px] font-medium text-muted-foreground/80">
            {fill(copy.demo.refsCount, { n: c.refsCount })}
          </span>
          <span className="text-[11px] font-bold text-gold-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gold-400">
            {copy.demo.openProfile} →
          </span>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Profile dialog                                                      */
/* ------------------------------------------------------------------ */

function Field({ icon: Icon, label, children }: { icon: typeof BookOpen; label: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-gold-700 dark:text-gold-400">
        <Icon className="h-4 w-4" strokeWidth={2} />
        {label}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

function NameList({ items, label }: { items: Quad[]; label: string }) {
  const { lang } = useLanding();
  if (!items.length) return null;
  return (
    <div>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
      <p className="text-sm font-medium">{items.map((n) => n[lang]).join(' · ')}</p>
    </div>
  );
}

function ProfileDialog({ c, open, onOpenChange }: { c: MiniCharacter | null; open: boolean; onOpenChange: (v: boolean) => void }) {
  const { lang, copy } = useLanding();
  if (!c) return null;
  const d = copy.demo.detail;
  const period = PERIOD_TITLE(c.period);
  const fam = c.family;
  const hasFamily = fam.father || fam.mother || fam.spouse.length || fam.children.length || fam.siblings.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className="max-h-[88vh] gap-0 overflow-y-auto scroll-thin rounded-2xl border-gold-600/25 bg-card p-0 sm:max-w-2xl"
      >
        {/* header scene */}
        <div className="relative">
          <SceneArt c={c} tall />
          <DialogHeader className="absolute inset-x-0 bottom-0 p-5">
            <DialogTitle className="font-display text-2xl font-bold text-[#f7ecd0] drop-shadow sm:text-3xl">
              {c.name[lang]}
            </DialogTitle>
            <p className="text-xs font-medium text-[#f0dfae]/90">
              {c.date[lang] || (period ? period[lang] : '')}
            </p>
          </DialogHeader>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          {/* badges */}
          <div className="flex flex-wrap gap-1.5">
            <span className={cn(
              'rounded-full px-2.5 py-1 text-[11px] font-bold',
              c.testament === 'old_testament'
                ? 'bg-gold-500/15 text-gold-700 dark:text-gold-300'
                : 'bg-emerald-800/15 text-emerald-700 dark:text-emerald-300',
            )}>
              {c.testament === 'old_testament' ? d.ot : d.nt}
            </span>
            {c.categories.slice(0, 4).map((id) =>
              DATA.categories[id] ? (
                <span key={id} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {DATA.categories[id].title[lang]}
                </span>
              ) : null,
            )}
          </div>

          {/* overview */}
          <Field icon={BookOpen} label={d.about}>
            <p>{c.summary[lang]}</p>
          </Field>

          {c.meaning[lang] ? (
            <Field icon={Sparkles} label={d.meaning}>
              <p>{c.meaning[lang]}</p>
            </Field>
          ) : null}

          {/* era + first mention */}
          <div className="grid gap-4 sm:grid-cols-2">
            {period || c.date[lang] ? (
              <Field icon={CalendarClock} label={d.era}>
                <p>{c.date[lang] || period?.[lang]}</p>
                {period && c.date[lang] ? <p className="mt-1 text-xs text-muted-foreground">{period[lang]}</p> : null}
              </Field>
            ) : null}
            {c.firstRef && typeof c.firstRef === 'object' && c.firstRef[lang] ? (
              <Field icon={MapPin} label={d.firstMention}>
                <p className="font-semibold text-gold-700 dark:text-gold-300">{c.firstRef[lang]}</p>
              </Field>
            ) : null}
          </div>

          {/* featured scene */}
          {c.scene.caption[lang] ? (
            <Field icon={Quote} label={d.scene}>
              <div
                className="flex items-center justify-between gap-3 rounded-xl border border-gold-600/20 px-4 py-3"
                style={{ background: `linear-gradient(120deg, ${scenePalette(c.scene.bg)[0]}, ${scenePalette(c.scene.bg)[1]})` }}
              >
                <span className="font-display text-base font-bold text-[#f3e2b3]">{c.scene.caption[lang]}</span>
                <span className="shrink-0 rounded-lg bg-black/25 px-2.5 py-1 text-xs font-bold text-[#f0dfae]">
                  {c.scene.reference[lang]}
                </span>
              </div>
            </Field>
          ) : null}

          {/* events */}
          {c.events.length ? (
            <Field icon={Clock3} label={d.events}>
              <ol className="relative space-y-4 border-s-2 border-gold-600/25 ps-4">
                {c.events.map((ev, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -start-[21.5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-card" aria-hidden />
                    <p className="text-sm font-bold">{ev.t[lang]}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{ev.d[lang]}</p>
                    {ev.r && typeof ev.r === 'object' && ev.r[lang] ? (
                      <span className="mt-1 inline-block rounded-md bg-gold-500/10 px-2 py-0.5 text-[11px] font-bold text-gold-700 dark:text-gold-300">
                        {ev.r[lang]}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Field>
          ) : null}

          {/* lessons */}
          {c.lessons.length ? (
            <Field icon={BookOpen} label={d.lessons}>
              <div className="space-y-3">
                {c.lessons.map((ls, i) => (
                  <div key={i} className="rounded-xl border border-gold-600/15 bg-gold-500/[0.06] p-3.5">
                    <p className="text-sm font-bold text-gold-800 dark:text-gold-200">{ls.t[lang]}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-foreground/85">{ls.x[lang]}</p>
                  </div>
                ))}
              </div>
            </Field>
          ) : null}

          {/* family */}
          {hasFamily ? (
            <Field icon={Users} label={d.family}>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {fam.father && fam.father[lang] ? <NameList items={[fam.father]} label={d.father} /> : null}
                {fam.mother && fam.mother[lang] ? <NameList items={[fam.mother]} label={d.mother} /> : null}
                <NameList items={fam.spouse} label={d.spouse} />
                <NameList items={fam.children} label={d.children} />
                <NameList items={fam.siblings} label={d.siblings} />
              </div>
            </Field>
          ) : null}

          {/* legacy */}
          {c.legacy[lang] ? (
            <Field icon={Quote} label={d.legacy}>
              <p className="font-display text-[15px] leading-relaxed">{c.legacy[lang]}</p>
            </Field>
          ) : null}

          {/* refs note + CTA */}
          <div className="rounded-2xl border border-gold-600/25 bg-gradient-to-b from-gold-500/10 to-transparent p-4">
            <p className="text-center text-xs font-medium text-muted-foreground">
              {fill(d.refsNote, { refs: c.refsCount, books: c.booksCount })}
            </p>
            <Button
              className="mt-3 w-full bg-gradient-to-b from-gold-400 to-gold-600 font-bold text-[#241b08] hover:from-gold-300 hover:to-gold-500"
              asChild
            >
              <a href="#download" onClick={() => onOpenChange(false)}>
                <Download className="h-4 w-4" />
                {d.ctaFull}
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/* Demo section                                                        */
/* ------------------------------------------------------------------ */

export function Demo() {
  const { lang, copy } = useLanding();
  const ref = useReveal<HTMLElement>();
  const [q, setQ] = useState('');
  const [test, setTest] = useState<TestFilter>('all');
  const [cat, setCat] = useState<string | null>(null);
  const [active, setActive] = useState<MiniCharacter | null>(null);

  const results = useMemo(
    () =>
      CHARACTERS.filter(
        (c) =>
          matches(c, q, lang) &&
          (test === 'all' || c.testament === test) &&
          (!cat || c.categories.includes(cat)),
      ),
    [q, test, cat, lang],
  );

  const pills: { id: TestFilter; label: string }[] = [
    { id: 'all', label: copy.demo.filterAll },
    { id: 'old_testament', label: copy.demo.filterOT },
    { id: 'new_testament', label: copy.demo.filterNT },
  ];

  return (
    <section id="demo" ref={ref} className="relative scroll-mt-20 py-16 md:py-24" aria-label={copy.demo.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={copy.demo.eyebrow} title={copy.demo.title} subtitle={copy.demo.subtitle} />

        {/* controls */}
        <div className="reveal space-y-4">
          <div className="relative mx-auto max-w-xl">
            <Search className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-600/70 dark:text-gold-400/70" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={copy.demo.searchPlaceholder}
              aria-label={copy.demo.searchPlaceholder}
              className="h-14 w-full rounded-2xl border border-gold-600/25 bg-card ps-12 pe-12 text-sm shadow-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-gold-500 focus:shadow-lg focus:shadow-gold-900/10"
            />
            {q ? (
              <button
                type="button"
                onClick={() => setQ('')}
                aria-label={copy.demo.clearSearch}
                className="absolute end-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {pills.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setTest(p.id)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-bold transition-all',
                  test === p.id
                    ? 'border-gold-500 bg-gold-500/20 text-gold-700 dark:text-gold-300'
                    : 'border-gold-600/20 text-muted-foreground hover:border-gold-500/50 hover:text-foreground',
                )}
              >
                {p.label}
              </button>
            ))}
            <span className="mx-1 hidden h-5 w-px bg-gold-600/20 sm:block" aria-hidden />
            <span className="text-xs font-medium text-muted-foreground">
              {fill(copy.demo.results, { n: results.length })}
            </span>
          </div>

          {/* categories */}
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            <button
              type="button"
              onClick={() => setCat(null)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold transition-all',
                cat === null
                  ? 'border-gold-500 bg-gold-500/20 text-gold-700 dark:text-gold-300'
                  : 'border-gold-600/20 text-muted-foreground hover:border-gold-500/50 hover:text-foreground',
              )}
            >
              {copy.demo.filterAll}
            </button>
            {DEMO_CATEGORY_IDS.map((id) => {
              const c = DATA.categories[id];
              if (!c) return null;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCat(cat === id ? null : id)}
                  className={cn(
                    'shrink-0 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold transition-all',
                    cat === id
                      ? 'border-gold-500 bg-gold-500/20 text-gold-700 dark:text-gold-300'
                      : 'border-gold-600/20 text-muted-foreground hover:border-gold-500/50 hover:text-foreground',
                  )}
                >
                  {c.title[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* grid */}
        {results.length ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.slice(0, 24).map((c, i) => (
              <CharacterCard key={c.id} c={c} delay={Math.min(i, 8) * 45} onOpen={() => setActive(c)} />
            ))}
          </div>
        ) : (
          <div className="reveal mx-auto mt-12 max-w-md rounded-2xl border border-dashed border-gold-600/30 p-10 text-center">
            <Search className="mx-auto h-8 w-8 text-gold-600/50" />
            <p className="mt-3 font-display text-lg font-bold">{copy.demo.noResults}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{copy.demo.noResultsHint}</p>
          </div>
        )}

        {/* footnote */}
        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          {copy.demo.footnote}
        </p>
      </div>

      <ProfileDialog c={active} open={!!active} onOpenChange={(v) => !v && setActive(null)} />
    </section>
  );
}
