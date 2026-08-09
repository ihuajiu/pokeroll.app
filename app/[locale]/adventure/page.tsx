import type { Metadata } from "next";
import AdventureView from "@/components/AdventureView";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import { rollAdventure } from "@/lib/adventure";
import { DIFFICULTIES, randomSeed } from "@/lib/adventure-types";
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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ seed?: string; difficulty?: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.adventure;
  const { difficulty } = await searchParams;
  const diff = DIFFICULTIES.includes(difficulty as (typeof DIFFICULTIES)[number])
    ? difficulty
    : undefined;
  return {
    title: diff ? d.metaTitleDiff.replace("{diff}", diff) : d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/adventure"),
      languages: languageAlternates("/adventure"),
    },
  };
}

export default async function AdventurePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ seed?: string; difficulty?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.adventure;
  const { seed: raw, difficulty: rawDiff } = await searchParams;
  const seed = raw && raw.length > 0 ? raw : randomSeed();
  const difficulty = DIFFICULTIES.includes(rawDiff as (typeof DIFFICULTIES)[number])
    ? rawDiff
    : undefined;
  const adventure = await rollAdventure(seed, difficulty);

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />
      <div className="mx-auto max-w-5xl px-3">

        <GuideSteps
          className="mb-6"
          title={d.guideTitle}
          steps={d.steps}
        />
        <AdventureView initial={adventure} />
        <FaqSection
          items={d.faqs}
          locale={locale}
        />
        <RelatedTools current="/adventure" locale={locale} />
      </div>
    </main>
  );
}
