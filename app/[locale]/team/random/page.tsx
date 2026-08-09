import type { Metadata } from "next";
import TeamGenerator from "@/components/TeamGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import PlayGuide from "@/components/PlayGuide";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam, type TeamRandomParams } from "@/lib/team";
import {
  isLocale,
  languageAlternates,
  localePath,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamRandom;
  const path = "/team/random";
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

export default async function RandomTeamPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<TeamRandomParams>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamRandom;
  const sp = await searchParams;
  const { pokemon } = await getRandomTeam(sp);
  const localized = pokemon.map((p) => withLocalizedFlavor(p, locale));

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />

      <TeamGenerator initial={localized} />

      <PlayGuide guide={d.guide} />
      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/team/random" locale={locale} />
    </main>
  );
}
