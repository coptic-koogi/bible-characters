import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { BASE_PATH, asset } from "@/lib/landing/asset";

/** Self-hosted fonts — preloaded by next/font so text never flashes un-styled. */
const amiri = localFont({
  src: [
    { path: "./fonts/amiri-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/amiri-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-amiri",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const readex = localFont({
  src: [
    { path: "./fonts/readex-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/readex-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/readex-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-readex",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

/** Absolute origin used for Open Graph / Twitter cards. */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://good-man-developer.github.io${BASE_PATH || "/bible-characters"}`;

const TITLE = "Bible Characters Encyclopedia — 3,026 documented profiles, four languages, fully offline";
const DESCRIPTION =
  "Every person in the Bible, documented. 3,026 characters and symbols with identity, lineage, era, events, lessons and legacy — in English, Arabic, French and Spanish. Works completely offline. Try a real sample of the database right here.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Bible Characters Encyclopedia",
  authors: [{ name: "Beshoy Nabil", url: "https://github.com/good-man-developer" }],
  creator: "Beshoy Nabil",
  publisher: "Coptic Koogi",
  keywords: [
    "Bible Characters",
    "Bible Encyclopedia",
    "Bible characters encyclopedia",
    "every person in the Bible",
    "offline Bible app",
    "Bible study app",
    "family tree of the Bible",
    "شخصيات الكتاب المقدس",
    "موسوعة الكتاب المقدس",
    "Personnages de la Bible",
    "Personajes Bíblicos",
  ],
  category: "reference",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: asset("/icon-512.png"),
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Bible Characters Encyclopedia — every person in the Bible",
    description:
      "3,026 documented profiles in four languages, fully offline. Explore the live demo built on the app's real database.",
    url: SITE_URL,
    siteName: "Bible Characters Encyclopedia",
    locale: "en_US",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Characters Encyclopedia",
    description:
      "3,026 documented profiles · four languages · fully offline. Explore the live demo built on the app's real database.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#14110b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${amiri.variable} ${readex.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-background text-foreground">
        {/* Content must never stay invisible if JavaScript is blocked or slow. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}.no-js-hide{display:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
