import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://pockroll.app"),
  title: "PokeField — Random Pokémon Generator",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.cn" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.cn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.cn/css2?family=Outfit:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=Space+Mono:wght@400;700&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('pokefield-theme')||'{}');var mode=s.mode||'dark';var skin=s.skin||'versus';var el=document.documentElement;el.setAttribute('data-mode',mode);el.setAttribute('data-skin',skin);el.classList.toggle('dark',mode==='dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="bg-decor" aria-hidden="true">
          <div className="dots" />
          <div className="scan" />
          <svg className="ball" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
            <path d="M2 50h96" stroke="currentColor" strokeWidth="4" />
            <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M2 50a48 48 0 0 1 96 0Z" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>
        <SiteNav />

        <div className="mx-auto max-w-[1240px] px-6 py-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
