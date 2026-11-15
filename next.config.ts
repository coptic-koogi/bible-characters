import type { NextConfig } from "next";

/**
 * Static-export config.
 *
 * The landing page is a pure static site, so it always builds to ./out:
 *  - `npm run dev`   → dev server (http://localhost:3000)
 *  - `npm run build` → static export into ./out (GitHub Pages, Netlify, any CDN)
 *
 * Deploying under a sub-path (https://<user>.github.io/<repo>/) requires the
 * prefix at build time, e.g.:
 *   NEXT_PUBLIC_BASE_PATH=/bible-characters npm run build
 * The GitHub Actions workflow sets it automatically from the repository name.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  reactStrictMode: false,
};

export default nextConfig;
