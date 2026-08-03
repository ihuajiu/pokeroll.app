import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://pokeroll.app"),
  title: "PokeRoll — Random Pokémon Generator",
  description:
    "Roll a random Pokémon in one tap. Every pull comes with a name, type, ability, base stats, generation and an official sprite. Fan-made, not affiliated with Nintendo.",
  keywords: [
    "random pokemon generator",
    "pokemon randomizer",
    "random pokemon",
  ],
  openGraph: {
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 预加载首屏两个字体,避免 swap 造成的布局偏移(CLS) */}
        <link
          rel="preload"
          href="/fonts/outfit-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/sora-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-mono-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('pokefield-theme')||'{}');var mode=s.mode||'light';var skin=s.skin||'versus';var el=document.documentElement;el.setAttribute('data-mode',mode);el.setAttribute('data-skin',skin);el.classList.toggle('dark',mode==='dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {/* Google Analytics 4 — loads after hydration so it never blocks first paint. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M74KET4Y45"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M74KET4Y45');`}
        </Script>
        <div className="bg-decor" aria-hidden="true">
          <div className="dots" />
          <div className="scan" />
        </div>
        <SiteNav />

        <div className="mx-auto max-w-[1240px] px-6 pb-10">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
