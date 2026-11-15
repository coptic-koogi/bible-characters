#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate the compact, real-data bundle for the demo landing page.

Reads the REAL app database (3,026 character files, indexes, scenes,
symbols) and emits a single compact JSON consumed by the Next.js page:
  src/data/landing-data.json
"""
import json
import os
import re

# Source root = the Flutter app's `assets/` folder.
# Regenerating the bundle is OPTIONAL — the repo already ships a generated copy.
# Point BCE_APP_ASSETS at the app's assets dir, e.g.:
#   BCE_APP_ASSETS=/path/to/flutter_app/assets python3 scripts/gen_landing_data.py
_env = os.environ.get('BCE_APP_ASSETS')
BASE = _env if _env else os.path.join(os.path.dirname(__file__), '..', 'public', 'flutter', 'assets', 'assets')
if not os.path.isdir(os.path.join(BASE, 'data')):
    raise SystemExit(
        'Data source not found.\n'
        'This repo already ships a generated src/data/landing-data.json.\n'
        'To regenerate from the full app database, set BCE_APP_ASSETS to the\n'
        "Flutter app's assets/ directory and re-run this script."
    )
DATA = os.path.join(BASE, 'data')
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'landing-data.json')

LANGS = ('ar', 'en', 'fr', 'es')

# The 43 hand-curated characters that ship with visual scenes in the app.
SCENE_IDS = [
    'aaron', 'abraham', 'daniel', 'david', 'deborah', 'elijah', 'esther',
    'ezekiel', 'gideon', 'hannah', 'herod_the_great', 'hoshea_prophet',
    'isaiah', 'jeremiah', 'job', 'john_apostle', 'john_the_baptist', 'jonah',
    'joseph_carpenter', 'joseph_jacob', 'joshua', 'judas_iscariot',
    'lazarus_bethany', 'luke', 'mark_john', 'mary_magdalene',
    'mary_mother_of_jesus', 'miriam', 'moses', 'nicodemus', 'noah', 'paul',
    'peter', 'pontius_pilate', 'ruth', 'samson', 'samuel', 'saul_king',
    'solomon', 'stephen', 'thomas', 'timothy', 'zacchaeus',
]


def clamp(text, limit):
    """Truncate at a word boundary, keeping sentences when possible."""
    if not text:
        return ''
    text = re.sub(r'\s+', ' ', text).strip()
    if len(text) <= limit:
        return text
    cut = text[:limit]
    # prefer ending at sentence punctuation
    for sep in ('. ', '، ', '؛ ', '; ', ' '):
        idx = cut.rfind(sep)
        if idx > limit * 0.55:
            return cut[:idx].rstrip(' .،؛,;')
    return cut.rstrip(' .،؛,;') + '…'


def quad(d, limit=None):
    """Return a 4-language dict, optionally clamped."""
    out = {}
    for lg in LANGS:
        v = (d or {}).get(lg) or ''
        out[lg] = clamp(v, limit) if limit and v else v
    return out


def load(path):
    with open(os.path.join(DATA, path), encoding='utf-8') as f:
        return json.load(f)


def main():
    scenes = load('visual/scenes.json')['characters']
    by_cat = load('indexes/by_category.json')
    chrono = load('indexes/chronological.json')
    by_book = load('indexes/by_book.json')
    symbols = load('symbols/symbols_index.json')

    # ---- id -> canonical name map (covers every indexed character) ----
    name_of = {}

    def index_chars(entries):
        for c in entries or []:
            name_of[c['id']] = c.get('canonical_name') or {}

    for g in by_cat['groups']:
        index_chars(g.get('characters'))

    # ---- books map ----
    books = {}
    for b in by_book['books']:
        books[b['book']] = b.get('book_names') or {}

    # ---- chronological order ----
    order = {}
    for pi, p in enumerate(chrono['periods']):
        for ci, c in enumerate(p.get('characters') or []):
            order[c['id']] = (pi, ci)
    periods = [{'id': p['id'], 'title': p['title']} for p in chrono['periods']]

    # ---- symbols groups ----
    symbol_groups = [
        {'id': g['id'], 'title': g['title'], 'count': g.get('count', 0)}
        for g in symbols['groups']
    ]

    # ---- books list (for the marquee) ----
    books_list = [
        {'id': b['book'], 'name': b.get('book_names') or {}, 'testament': b.get('testament', '')}
        for b in by_book['books']
    ]

    # ---- characters ----
    characters = []
    for cid in SCENE_IDS:
        path = os.path.join(DATA, 'characters', cid + '.json')
        if not os.path.exists(path):
            print('  !! missing', cid)
            continue
        with open(path, encoding='utf-8') as f:
            d = json.load(f)

        ident = d.get('identity', {})
        cls = d.get('classification', {})
        scene = scenes.get(cid, {})
        sr = d.get('scripture_references') or []

        # first mention reference, formatted per language
        first_ref = {}
        if sr:
            b = books.get(sr[0].get('book'), {})
            ch, vs = sr[0].get('chapter', ''), sr[0].get('verses', '')
            for lg in LANGS:
                bn = b.get(lg, sr[0].get('book', ''))
                first_ref[lg] = f'{bn} {ch}:{vs}'.strip()

        # family display names
        fam = d.get('family', {}) or {}

        def names_of(ids):
            out = []
            for x in ids or []:
                if isinstance(x, dict):
                    x = x.get('id') or x.get('person_id')
                n = name_of.get(x)
                if n:
                    out.append({lg: n.get(lg, x) for lg in LANGS})
            return out

        father = name_of.get(fam.get('father'))
        mother = name_of.get(fam.get('mother'))

        # aliases for search (search aliases only, capped)
        aliases = {}
        for lg in LANGS:
            vals = sorted(set(ident.get('search_aliases', {}).get(lg) or []))[:4]
            aliases[lg] = vals

        events = []
        for ev in (d.get('life_events') or [])[:3]:
            ev_ref = ''
            if ev.get('references'):
                r = ev['references'][0]
                b = books.get(r.get('book'), {})
                ch, vs = r.get('chapter', ''), r.get('verses', '')
                ev_ref = {lg: f"{b.get(lg, r.get('book', ''))} {ch}:{vs}".strip() for lg in LANGS}
            events.append({
                't': quad(ev.get('title'), 70),
                'd': quad(ev.get('description'), 185),
                'r': ev_ref,
            })

        lessons = []
        for ls in (d.get('lessons') or [])[:2]:
            lessons.append({
                't': quad(ls.get('title'), 70),
                'x': quad(ls.get('text'), 170),
            })

        characters.append({
            'id': cid,
            'name': ident.get('canonical_name') or {},
            'aliases': aliases,
            'meaning': quad(ident.get('name_meaning'), 160),
            'summary': quad(d.get('summary'), 280),
            'legacy': quad(d.get('legacy'), 200),
            'testament': cls.get('testament', ''),
            'gender': cls.get('gender', ''),
            'categories': cls.get('categories') or [],
            'period': (d.get('timeline') or {}).get('period', ''),
            'date': quad((d.get('timeline') or {}).get('approximate_date'), 90),
            'firstRef': first_ref,
            'scene': {
                'bg': scene.get('background', ''),
                'mood': scene.get('mood', ''),
                'caption': quad(scene.get('caption'), 90),
                'reference': quad(scene.get('reference'), 40),
            },
            'family': {
                'father': {lg: father.get(lg, '') for lg in LANGS} if father else None,
                'mother': {lg: mother.get(lg, '') for lg in LANGS} if mother else None,
                'spouse': names_of(fam.get('spouse')),
                'children': names_of(fam.get('children')),
                'siblings': names_of(fam.get('siblings')),
            },
            'events': events,
            'lessons': lessons,
            'refsCount': len(sr),
            'booksCount': len(d.get('books') or []),
        })

    # sort chronologically
    characters.sort(key=lambda c: order.get(c['id'], (99, 99)))

    # ---- categories: only those used by the demo subset ----
    used_cats = set()
    for c in characters:
        used_cats.update(c['categories'])
    categories = {
        g['id']: {'title': g['title'], 'count': g['count']}
        for g in by_cat['groups'] if g['id'] in used_cats
    }

    bundle = {
        'version': '14.4.0',
        'stats': {
            'profiles': 3026,
            'books': 82,
            'categories': 65,
            'periods': 15,
            'languages': 4,
            'symbols': 103,
            'symbolGroups': 8,
            'familyHouses': 15,
            'familyMembers': 307,
            'generations': 9,
            'christSections': 23,
            'searchEntries': 83000,
            'fonts': 10,
            'themes': 11,
            'tests': 644,
        },
        'categories': categories,
        'periods': periods,
        'books': books_list,
        'symbolGroups': symbol_groups,
        'characters': characters,
    }

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as f:
        json.dump(bundle, f, ensure_ascii=False, separators=(',', ':'))

    size = os.path.getsize(OUT)
    print(f'OK  {len(characters)} characters -> {OUT}')
    print(f'size: {size/1024:.1f} KiB')
    # sanity: every character must have non-empty 4-lang name + summary
    for c in characters:
        for lg in LANGS:
            assert c['name'].get(lg), (c['id'], 'name', lg)
            assert c['summary'].get(lg), (c['id'], 'summary', lg)
    print('sanity: all names + summaries present in 4 languages')


if __name__ == '__main__':
    main()
