import type { Metadata } from "next";
import FavoritesClient from "@/components/FavoritesClient";
import PageFeedback from "@/components/PageFeedback";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";
import { getPokemonByIdLocal } from "@/lib/pokedex";
import type { Pokemon } from "@/lib/types";
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
  const d = dict.pages.favorites;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/favorites"),
      languages: languageAlternates("/favorites"),
    },
  };
}

export default async function FavoritesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ m?: string }>;
}) {
  const [{ locale: rawLocale }, sp] = await Promise.all([params, searchParams]);
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.favorites;

  // Snapshot mode: decode the dex list from `?m=` and resolve each entry
  // from the local pokedex. Invalid/unknown ids are skipped.
  let shared: Pokemon[] | null = null;
  let sharedInvalid = false;
  if (sp.m !== undefined) {
    const ids = sp.m
      .split(",")
      .map((s) => Number.parseInt(s.trim(), 10))
      .filter((n) => Number.isFinite(n) && n > 0);
    shared = ids
      .map((id) => getPokemonByIdLocal(id))
      .filter((p): p is Pokemon => !!p)
      .map((p) => withLocalizedFlavor(p, locale));
    sharedInvalid = shared.length === 0;
  }

  return (
    <main className="pt-6 pb-10">
      <PageHeader title={d.headerTitle} description={d.headerDesc} />
      <FavoritesClient shared={shared} sharedInvalid={sharedInvalid} />
      <PageFeedback pageKey={"/favorites"} />
      <RelatedTools current="/favorites" locale={locale} />
    </main>
  );
}
