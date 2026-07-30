import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";
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
  const headersList = await headers();
  const currentPath = headersList.get("x-invoke-path") || "";

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
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('pokefield-theme')||'{}');var mode=s.mode||'light';var skin=s.skin||'versus';var el=document.documentElement;el.setAttribute('data-mode',mode);el.setAttribute('data-skin',skin);el.classList.toggle('dark',mode==='dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="bg-decor" aria-hidden="true">
          <div className="dots" />
          <div className="scan" />
        </div>
        <SiteNav currentPath={currentPath} />

        <div className="mx-auto max-w-[1240px] px-6 pb-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
