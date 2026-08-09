import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import PlayGuide from "@/components/PlayGuide";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getAllPokemon, getRandomPokemon } from "@/lib/pokeapi";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
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
  const d = dict.pages.legendary;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/legendary"),
      languages: languageAlternates("/legendary"),
    },
  };
}

export default async function LegendaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.legendary;
  const pool = getAllPokemon()
    .filter((p) => p.isLegendary)
    .map((p) => p.dexNumber);
  const initial = withLocalizedFlavor(await getRandomPokemon(pool), locale);

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.tools.groups.generator.title, href: pageHref(locale, "/#browse") },
          { label: d.breadcrumbLabel },
        ]}
      />
      <PageHeader title={d.headerTitle} description={d.headerDesc} />
      <p className="mb-6 text-sm text-poke-dim">{d.note}</p>
      <FilteredGenerator query="legendary=1" initial={initial} />
      <PlayGuide guide={d.guide} />
    </main>
  );
}
