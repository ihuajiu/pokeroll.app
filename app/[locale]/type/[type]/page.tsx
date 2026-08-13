import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import PlayGuide, { fillGuide } from "@/components/PlayGuide";
import PageFeedback from "@/components/PageFeedback";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByType, getRandomPokemon } from "@/lib/pokeapi";
import { GEN_REGION, TYPES, TYPE_GEN, titleCase } from "@/lib/seo";
import { notFound } from "next/navigation";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { genLabel, typeName } from "@/lib/i18n/names";
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, type } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  // Reject unknown types before anything renders — otherwise /type/notatype
  // would serve a junk 200 page (soft 404).
  if (!(TYPES as readonly string[]).includes(type)) notFound();
  const dict = await getDictionary(locale);
  const d = dict.pages.type;
  const t = typeName(type, locale);
  const path = `/type/${type}`;
  return {
    title: d.metaTitle.replace("{type}", t),
    description: d.metaDescription.replace("{type}", t),
    keywords: d.keywords.map((k) =>
      k.replace("{slug}", t.toLowerCase()),
    ),
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale: rawLocale, type } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  if (!(TYPES as readonly string[]).includes(type)) notFound();
  const dict = await getDictionary(locale);
  const d = dict.pages.type;
  const t = typeName(type, locale);
  const pool = await getPoolByType(type);
  const initial = withLocalizedFlavor(
    pool.length ? await getRandomPokemon(pool) : await getRandomPokemon(),
    locale,
  );
  const gen = TYPE_GEN[type] ?? 1;
  const region = GEN_REGION[gen];
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.common.randomPokemon, href: pageHref(locale, "/random-pokemon-generator") },
          { label: d.breadcrumbType.replace("{type}", t) },
        ]}
      />
      <PageHeader
        title={d.headerTitle.replace("{type}", t)}
        description={d.headerDesc.replace("{type}", t)}
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        {d.introS1.replace("{type}", t)}
        <Link
          className={linkCls}
          title={dict.common.genShort.replace("{n}", String(gen))}
          href={pageHref(locale, `/gen/${gen}`)}
        >
          {genLabel(gen, locale)}
        </Link>
        {d.introS2}
        <Link
          className={linkCls}
          title={d.linkTitleBrowseRegion.replace("{region}", region)}
          href={pageHref(locale, `/by/${region}`)}
        >
          {d.introRegionLink.replace("{region}", titleCase(region))}
        </Link>
        {d.introS3}
        <Link className={linkCls} title={d.linkTitleType} href={pageHref(locale, "/type")}>
          {d.introTypeLink}
        </Link>
        {d.introS4}
        <Link
          className={linkCls}
          title={d.linkTitleRandom}
          href={pageHref(locale, "/random-pokemon-generator")}
        >
          {d.introRandomLink}
        </Link>
        {d.introS5}
      </p>
      <FilteredGenerator query={`type=${type}`} initial={initial} />
      <PageFeedback pageKey={`/type/${type}`} />
      <PlayGuide guide={fillGuide(d.guide, { type: t })} />
      <RelatedTools
        hrefs={["/type", "/random-pokemon-generator", "/starter", "/legendary"]}
        locale={locale}
      />
    </main>
  );
}
