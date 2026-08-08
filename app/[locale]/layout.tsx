import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ogImageUrl } from "@/lib/og-meta";
import { isLocale, OG_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Analytics from "@/components/Analytics";
import I18nProvider from "@/components/I18nProvider";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "en") as Locale;
  return {
    metadataBase: new URL(process.env.SITE_URL ?? "https://pokeroll.app"),
    title: "PokeRoll — Random Pokémon Generator",
    description:
      "Free fan-made Pokémon toolbox — roll a random Pokémon, build teams, export sets to Showdown and take challenges. Not affiliated with Nintendo.",
    keywords: [
      "random pokemon generator",
      "pokemon randomizer",
      "random pokemon",
      "random pokemon team generator",
    ],
    openGraph: {
      type: "website",
      siteName: "PokeRoll",
      locale: OG_LOCALE[l],
      url: "/",
      images: [{ url: ogImageUrl(), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@JoeyChou2024",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
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
        <link
          rel="preload"
          href="/fonts/space-mono-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:"Outfit";font-style:normal;font-weight:100 900;font-display:optional;src:url("/fonts/outfit-var.woff2") format("woff2")}
@font-face{font-family:"Sora";font-style:normal;font-weight:100 800;font-display:optional;src:url("/fonts/sora-var.woff2") format("woff2")}
@font-face{font-family:"Space Mono";font-style:normal;font-weight:400;font-display:optional;src:url("/fonts/space-mono-400.woff2") format("woff2")}
@font-face{font-family:"Space Mono";font-style:normal;font-weight:700;font-display:optional;src:url("/fonts/space-mono-700.woff2") format("woff2")}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('pokefield-theme')||'{}');var mode=s.mode||'light';var skin=s.skin||'versus';var el=document.documentElement;el.setAttribute('data-mode',mode);el.setAttribute('data-skin',skin);el.classList.toggle('dark',mode==='dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://pokeroll.app/#website",
                  name: "PokeRoll",
                  url: "https://pokeroll.app",
                  description:
                    "Free fan-made Pokémon tools — random generator, team builder, Showdown export, challenges, wheel and more.",
                  inLanguage: locale,
                  publisher: { "@id": "https://pokeroll.app/#org" },
                },
                {
                  "@type": "Organization",
                  "@id": "https://pokeroll.app/#org",
                  name: "PokeRoll",
                  url: "https://pokeroll.app",
                  sameAs: [
                    "https://github.com/ihuajiu/pokeroll.app",
                    "https://x.com/JoeyChou2024",
                  ],
                },
              ],
            }),
          }}
        />
        {/* Google Analytics 4 — client component, only fires on production domains. */}
        <Analytics />
        <div className="bg-decor" aria-hidden="true">
          <div className="dots" />
          <div className="scan" />
        </div>
        <I18nProvider locale={locale} dict={dict}>
          <SiteNav />

          <div className="mx-auto max-w-[1240px] px-6 pb-10">
            {children}
          </div>
          <Footer locale={locale} />
        </I18nProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
