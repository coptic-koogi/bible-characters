/**
 * Typed access layer over the compact real-data bundle
 * (src/data/landing-data.json — generated from the app's actual database).
 */
import raw from '@/data/landing-data.json';

export type Lang = 'ar' | 'en' | 'fr' | 'es';
export type Quad = Record<Lang, string>;

export interface MiniEvent { t: Quad; d: Quad; r: Quad | string }
export interface MiniLesson { t: Quad; x: Quad }

export interface MiniCharacter {
  id: string;
  name: Quad;
  aliases: Record<Lang, string[]>;
  meaning: Quad;
  summary: Quad;
  legacy: Quad;
  testament: string;
  gender: string;
  categories: string[];
  period: string;
  date: Quad;
  firstRef: Quad | string;
  scene: { bg: string; mood: string; caption: Quad; reference: Quad };
  family: {
    father: Quad | null;
    mother: Quad | null;
    spouse: Quad[];
    children: Quad[];
    siblings: Quad[];
  };
  events: MiniEvent[];
  lessons: MiniLesson[];
  refsCount: number;
  booksCount: number;
}

export interface LandingData {
  version: string;
  stats: Record<string, number>;
  categories: Record<string, { title: Quad; count: number }>;
  periods: { id: string; title: Quad }[];
  books: { id: string; name: Quad; testament: string }[];
  symbolGroups: { id: string; title: Quad; count: number }[];
  characters: MiniCharacter[];
}

export const DATA = raw as unknown as LandingData;
export const CHARACTERS = DATA.characters;
export const STATS = DATA.stats;

/** Categories actually used by the demo subset, in first-seen order. */
export const DEMO_CATEGORY_IDS: string[] = (() => {
  const seen: string[] = [];
  for (const c of CHARACTERS) for (const id of c.categories) if (!seen.includes(id)) seen.push(id);
  // promote the flagship categories first
  const priority = ['patriarch', 'prophet', 'prophetess', 'king', 'queen', 'judge', 'apostle', 'disciple_twelve', 'evangelist', 'martyr', 'woman', 'mother', 'high_priest', 'priest'];
  return [...priority.filter((p) => seen.includes(p)), ...seen.filter((s) => !priority.includes(s))];
})();

export const PERIOD_TITLE = (id: string): Quad | null =>
  DATA.periods.find((p) => p.id === id)?.title ?? null;

/* ------------------------------------------------------------------ */
/* Scene palettes — mapped from the app's real scene backgrounds       */
/* ------------------------------------------------------------------ */

/** [deep, mid, light] warm palettes per scene background. */
export const SCENE_BG: Record<string, [string, string, string]> = {
  sea: ['#0D3336', '#145257', '#2A7B7E'],
  egypt: ['#43301B', '#6E5122', '#B5904E'],
  wilderness: ['#38301F', '#5F5136', '#8F7F55'],
  partedSea: ['#0B2A33', '#114651', '#1E7076'],
  sinai: ['#3C2D1B', '#634924', '#9C7F45'],
  plains: ['#423A25', '#6C5F3A', '#9C8C58'],
  temple: ['#42291A', '#6F4520', '#B3873B'],
  village: ['#453423', '#6F5A32', '#A28A54'],
  hills: ['#343D2B', '#545F41', '#7F8F5F'],
  seaStorm: ['#1E2B33', '#324954', '#58737F'],
  jerusalem: ['#41291F', '#683F2B', '#9E6844'],
  holyMount: ['#352A1B', '#5B4A28', '#967F49'],
  babylon: ['#391F29', '#5F3440', '#96606A'],
  persianCourt: ['#3E2636', '#633E56', '#9A7088'],
  galilee: ['#2A3D32', '#476150', '#718F76'],
  palace: ['#382626', '#5E3D3D', '#916868'],
  cave: ['#292622', '#443E36', '#6B6459'],
  bethlehem: ['#332C21', '#554A31', '#827552'],
  garden: ['#2A3A25', '#46603C', '#708C5D'],
  jordan: ['#2E3B2A', '#4D6443', '#7B9469'],
};

export const scenePalette = (bg: string): [string, string, string] =>
  SCENE_BG[bg] ?? ['#33291B', '#5B4A28', '#967F49'];

/** Search across names + aliases in the active language (and all languages). */
export function matches(c: MiniCharacter, q: string, lang: Lang): boolean {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  if (c.name[lang].toLowerCase().includes(needle)) return true;
  for (const lg of ['ar', 'en', 'fr', 'es'] as Lang[]) {
    if (c.name[lg]?.toLowerCase().includes(needle)) return true;
    if ((c.aliases[lg] || []).some((a) => a.toLowerCase().includes(needle))) return true;
  }
  return false;
}

/** Format a number with thousands separators (Latin digits — app convention). */
export const fmt = (n: number): string => n.toLocaleString('en-US');

/** Simple template fill: '{n} results' -> '12 results'. */
export const fill = (tpl: string, vars: Record<string, string | number>): string =>
  tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
