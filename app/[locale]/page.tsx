import type { Metadata } from "next";
import Link from "next/link";
import HomeTool from "@/components/HomeTool";
import HomeFacts from "@/components/HomeFacts";
import FaqSection, { type Faq } from "@/components/FaqSection";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const p = dict.pages.home;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languageAlternates("/"),
    },
  };
}

// ISR:首页从 CDN 缓存直接返回(TTFB 从 ~2.25s 降到 ~100ms),
// 每小时重新生成一次,Hero 展示卡随之换一只。
export const revalidate = 3600;

// 仓库首次提交日期(git log --reverse),作为 datePublished。
const DATE_PUBLISHED = "2026-07-28";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const p = dict.pages.home;
  const dateModified = new Date().toISOString().slice(0, 10);

  const linkCls = "underline text-poke-red";
  const HOME_FAQS: Faq[] = [
    {
      q: p.faq1.q,
      a: (
        <>
          {p.faq1.s1}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            {p.faq1.l1}
          </a>
          {p.faq1.s2}
        </>
      ),
      aText: p.faq1.aText,
    },
    {
      q: p.faq2.q,
      a: (
        <>
          {p.faq2.s1}
          <a
            href="https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            {p.faq2.l1}
          </a>
          {p.faq2.s2}
          <Link href={pageHref(locale, "/challenge/shiny")} className={linkCls}>
            {p.faq2.l2}
          </Link>
          {p.faq2.s3}
        </>
      ),
      aText: p.faq2.aText,
    },
    {
      q: p.faq3.q,
      a: (
        <>
          {p.faq3.s1}
          <Link href={pageHref(locale, "/team/random")} className={linkCls}>
            {p.faq3.l1}
          </Link>
          {p.faq3.s2}
          <Link href={pageHref(locale, "/team/coach")} className={linkCls}>
            {p.faq3.l2}
          </Link>
          {p.faq3.s3}
        </>
      ),
      aText: p.faq3.aText,
    },
    {
      q: p.faq4.q,
      a: p.faq4.s1,
    },
    {
      q: p.faq5.q,
      a: (
        <>
          {p.faq5.s1}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            {p.faq5.l1}
          </a>
          {p.faq5.s2}
        </>
      ),
      aText: p.faq5.aText,
    },
    {
      q: p.faq6.q,
      a: (
        <>
          {p.faq6.s1}
          <Link href={pageHref(locale, "/disclaimer")} className={linkCls}>
            {p.faq6.l1}
          </Link>
          {p.faq6.s2}
        </>
      ),
      aText: p.faq6.aText,
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pokeroll.app/#webpage",
    url: "https://pokeroll.app/",
    name: p.metaTitle,
    description: p.metaDescription,
    isPartOf: { "@id": "https://pokeroll.app/#website" },
    author: { "@id": "https://pokeroll.app/#org" },
    datePublished: DATE_PUBLISHED,
    dateModified,
    inLanguage: locale,
  };

  return (
    <main className="pt-1 pb-10">
      <HomeTool locale={locale} />
      <HomeFacts locale={locale} />
      <FaqSection items={HOME_FAQS} locale={locale} />
      <p className="mt-6 text-xs text-poke-dim">
        {p.updatedBy.replace("{date}", dateModified)}
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
    </main>
  );
}
