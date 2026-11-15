'use client';

/**
 * Landing page — a lightweight, multilingual (ar · en · fr · es) demo of
 * "Bible Characters Encyclopedia", powered by a real sample of the app's
 * database (43 curated characters, real categories, books, symbols groups).
 */

import { LandingProvider } from '@/components/landing/context';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { BooksMarquee } from '@/components/landing/marquee';
import { Demo } from '@/components/landing/demo';
import { Features } from '@/components/landing/features';
import { Screenshots } from '@/components/landing/screenshots';
import { ChristSymbols } from '@/components/landing/christ-symbols';
import { AudiencePrivacy } from '@/components/landing/audience-privacy';
import { DownloadCta, Footer } from '@/components/landing/closing';
import { SkipLink } from '@/components/landing/bits';

export default function Page() {
  return (
    <LandingProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SkipLink />
        <Header />
        <main className="flex-1">
          <Hero />
          <BooksMarquee />
          <Demo />
          <Features />
          <Screenshots />
          <ChristSymbols />
          <AudiencePrivacy />
          <DownloadCta />
        </main>
        <Footer />
      </div>
    </LandingProvider>
  );
}
