import type { NextConfig } from "next";

/**
 * Static-export aware config.
 *  - `npm run dev`        → normal dev server
 *  - `npm run build`      → normal production build (self-hosting)
 *  - `npm run build:static` → `output: export` into ./out (GitHub Pages & any static host)
 *
 * When deploying under a sub-path (e.g. https://user.github.io/bible-characters-landing)
 * set NEXT_PUBLIC_BASE_PATH=/bible-characters-landing at build time.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1"
    ? { output: "export", images: { unoptimized: true } }
    : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  reactStrictMode: false,
};

export default nextConfig;
