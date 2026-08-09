import type { Metadata } from "next";
import RandomGenerator from "@/components/RandomGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPokemonById, getRandomPokemon } from "@/lib/pokeapi";
import { ogImageUrl } from "@/lib/og-meta";
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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ p?: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.randomGenerator;
  const { p } = await searchParams;
  // Shared ?p= links: show the actual Pokémon in the preview.
  let name: string | undefined;
  if (p) {
    try {
      const mon = await getPokemonById(p);
      name = mon.displayName;
    } catch {
      /* fall through to the generic preview */
    }
  }
  const ogImage = ogImageUrl(name);
  return {
    title: name
      ? d.sharedTitle.replace("{name}", name)
      : d.metaTitle,
    description: name
      ? // Shared links: keep the meta description inside the 140–160 char SEO
        // window whatever the Pokémon name length (3–32 chars).
        name.length <= 16
        ? d.sharedDescLong.replace("{name}", name)
        : d.sharedDescShort.replace("{name}", name)
      : d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, "/random-pokemon-generator"),
      languages: languageAlternates("/random-pokemon-generator"),
    },
    openGraph: {
      title: name ? d.ogSharedTitle.replace("{name}", name) : undefined,
      description: name ? d.ogSharedDesc.replace("{name}", name) : undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function RandomGeneratorPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ p?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.randomGenerator;
  const { p } = await searchParams;
  // ?p=<name> makes a shared link reproduce the exact same Pokémon; anything
  // unknown falls back to a fresh random roll.
  let initial;
  if (p) {
    try {
      initial = await getPokemonById(p);
    } catch {
      initial = await getRandomPokemon();
    }
  } else {
    initial = await getRandomPokemon();
  }
  initial = withLocalizedFlavor(initial, locale);

  return (
    <main className="pt-4 pb-10">
      <div className="mx-auto max-w-[1080px] px-0 lg:px-6">
        <Breadcrumbs
          items={[
            { label: dict.common.home, href: pageHref(locale, "/") },
            { label: dict.common.randomPokemon },
          ]}
        />
        <PageHeader
          title={d.headerTitle}
          description={d.headerDesc}
          compact
        />
      </div>
      <RandomGenerator initial={initial} />
      <div className="mx-auto max-w-[1080px] px-0 lg:px-6">
        <FaqSection items={d.faqs} locale={locale} />
        <RelatedTools current="/random-pokemon-generator" locale={locale} />
      </div>
    </main>
  );
}
