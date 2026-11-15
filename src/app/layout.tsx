import type { Metadata, Viewport } from "next";
import "./globals.css";

import { BASE_PATH, asset } from "@/lib/landing/asset";

/** Absolute origin used for Open Graph / Twitter cards. */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://good-man-developer.github.io${BASE_PATH || "/bible-characters"}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "موسوعة شخصيات الكتاب المقدس — 3,026 شخصية بأربع لغات",
  description:
    "أضخم موسوعة كتابية تفاعلية تعمل دون اتصال: 3,026 شخصية ورمزاً بسِيَر كاملة موثَّقة، بأربع لغات (العربية · English · Français · Español). جرّب عيّنة حقيقية من قاعدة البيانات.",
  keywords: [
    "شخصيات الكتاب المقدس",
    "موسوعة الكتاب المقدس",
    "قصص الكتاب المقدس",
    "Bible Characters",
    "Bible Encyclopedia",
    "Personnages de la Bible",
    "Personajes Bíblicos",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: asset("/icon-512.png"),
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: "موسوعة شخصيات الكتاب المقدس — Bible Characters Encyclopedia",
    description:
      "3,026 شخصية ورمزاً بسِيَر كاملة موثَّقة — بأربع لغات، وتعمل دون اتصال. جرّب الديمو الحي بعيّنة حقيقية من قاعدة البيانات.",
    url: SITE_URL,
    siteName: "Bible Characters Encyclopedia",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "موسوعة شخصيات الكتاب المقدس",
    description:
      "3,026 شخصية ورمزاً — أربع لغات — دون اتصال. الديمو الحي: عيّنة حقيقية من قاعدة البيانات.",
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
    <html lang="ar" dir="rtl" className="dark" suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
