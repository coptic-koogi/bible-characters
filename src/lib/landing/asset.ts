/**
 * Public-asset helper.
 *
 * GitHub Pages serves this project from a sub-path
 * (https://<user>.github.io/<repo>/), so every hard-coded `/file.jpg`
 * reference needs the deployment prefix. `NEXT_PUBLIC_BASE_PATH` is inlined
 * at build time (see .github/workflows/deploy.yml) and is empty when the site
 * is served from the domain root (local dev, custom domain, user site).
 */

const RAW_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Normalised prefix, always either '' or '/some-path' (never ends with '/'). */
export const BASE_PATH = RAW_BASE_PATH.replace(/\/+$/, '');

/** Turn '/screenshots/ar/01.jpg' into '/<basePath>/screenshots/ar/01.jpg'. */
export function asset(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
