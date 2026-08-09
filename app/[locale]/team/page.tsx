import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import {
  isLocale,
  languageAlternates,
  localePath,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.team;
  const path = "/team";
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function TeamPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ team?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.team;
  const sp = await searchParams;
  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />

      <TeamClient sharedNames={sp.team ?? null} />

      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/team" locale={locale} />
    </main>
  );
}
