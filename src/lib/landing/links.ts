/**
 * Central links — the single place to update store links.
 */

/** Android application id (from the Flutter project / Play Console). */
const ANDROID_ID = 'com.coptickoogi.shakhsyat_elketab_elmokadaas';

/** GitHub repository that hosts this landing page. */
export const GITHUB_URL = 'https://github.com/coptic-koogi/bible-characters';

export const PLAY_URL = `https://play.google.com/store/apps/details?id=${ANDROID_ID}`;

/**
 * App Store link. Leave empty while the iOS version is not published yet —
 * the badge then shows a "coming soon" state instead of a dead link.
 * Once live, set it to the real id, e.g.
 * 'https://apps.apple.com/app/id1234567890'.
 */
export const APPSTORE_URL = '';

/** In-page anchors */
export const ANCHORS = {
  demo: '#demo',
  features: '#features',
  screenshots: '#screenshots',
  download: '#download',
  privacy: '#privacy',
} as const;
