// Prepare landing-page assets: screenshots (4 langs), app icon, OG image.
// Usage: node scripts/prep_assets.mjs
import { mkdirSync } from 'node:fs';
import sharp from '/home/z/.npm-global/lib/node_modules/sharp/dist/index.cjs';

const ROOT = new URL('..', import.meta.url).pathname;
const SHOTS = `${ROOT}store_package/02_google_play/screenshots/phone_1080x1920`;
const ICONS = `${ROOT}store_package/01_app_icons`;
const PUB = `${ROOT}public`;

const langs = ['ar', 'en', 'fr', 'es'];
const shots = [
  '01_encyclopedia', '02_illustrated_scenes', '03_complete_stories',
  '04_christ_section', '05_family_tree', '06_smart_search',
  '07_ai_assistant', '08_night_mode',
];

mkdirSync(`${PUB}/screenshots`, { recursive: true });

for (const lg of langs) {
  mkdirSync(`${PUB}/screenshots/${lg}`, { recursive: true });
  for (const s of shots) {
    const src = `${SHOTS}/${lg}/${s}.jpg`;
    const dst = `${PUB}/screenshots/${lg}/${s}.jpg`;
    await sharp(src).resize({ width: 640 }).jpeg({ quality: 76, mozjpeg: true }).toFile(dst);
  }
}

// app icon: favicon (src/app/icon.png) + large icon + apple touch
await sharp(`${ICONS}/appstore_icon_1024x1024_noalpha.png`).resize(512).png({ compressionLevel: 9 }).toFile(`${PUB}/icon-512.png`);
await sharp(`${ICONS}/appstore_icon_1024x1024_noalpha.png`).resize(128).png({ compressionLevel: 9 }).toFile(`${ROOT}src/app/icon.png`);
await sharp(`${ICONS}/appstore_icon_1024x1024_noalpha.png`).resize(180).png({ compressionLevel: 9 }).toFile(`${PUB}/apple-touch-icon.png`);

// OG image from the English feature graphic
await sharp(`${ROOT}store_package/02_google_play/feature_graphic_1024x500/en/feature_graphic.png`).jpeg({ quality: 86, mozjpeg: true }).toFile(`${PUB}/og.jpg`);

console.log('assets done');
