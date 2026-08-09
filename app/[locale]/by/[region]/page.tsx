import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByRegion, getRandomPokemon } from "@/lib/pokeapi";
import { REGION_GAME, REGION_GEN, REGIONS, REGION_EXTRA_KEYWORDS, titleCase } from "@/lib/seo";
import { notFound } from "next/navigation";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { genLabel } from "@/lib/i18n/names";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; region: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, region } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.region;
  // Reject unknown regions before anything renders — otherwise /by/nowhere
  // would serve a junk 200 page (soft 404).
  if (!(REGIONS as readonly string[]).includes(region)) notFound();
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  // Mention the third-version games that share these regions.
  const gameDesc =
    region === "hoenn"
      ? d.gameHoenn
      : region === "sinnoh"
        ? d.gameSinnoh
        : game;
  // Kalos titles ("X & Y") are short, so pad that variant with "instantly" to
  // keep every region's description inside the 140–160 char SEO window.
  const fill = gameDesc.length > 0 && gameDesc.length < 10 ? d.descFill : "";
  const path = `/by/${region}`;
  return {
    title: d.metaTitle
      .replace("{region}", r)
      .replace("{gameDesc}", gameDesc),
    description:
      d.descStart.replace("{region}", r) +
      fill +
      (gameDesc ? d.descFromGame.replace("{gameDesc}", gameDesc) : "") +
      d.descEnd,
    keywords: [
      ...d.keywords.map((k) => k.replace("{slug}", region)),
      // English keywords intentionally kept for all locales until translated.
      ...(REGION_EXTRA_KEYWORDS[region] ?? [
        d.keywordFallback.replace("{slug}", region),
      ]),
    ],
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ locale: string; region: string }>;
}) {
  const { locale: rawLocale, region } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.region;
  // Reject unknown regions before anything renders — otherwise /by/nowhere
  // would serve a junk 200 page (soft 404).
  if (!(REGIONS as readonly string[]).includes(region)) notFound();
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  const pool = await getPoolByRegion(region);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();
  const gen = REGION_GEN[region] ?? 1;
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.common.randomPokemon, href: pageHref(locale, "/random-pokemon-generator") },
          { label: d.breadcrumbRegion.replace("{region}", r) },
        ]}
      />
      <PageHeader
        title={d.headerTitle.replace("{region}", r)}
        description={
          d.headerDescStart.replace("{region}", r) +
          (game ? d.headerDescGame.replace("{game}", game) : "") +
          d.headerDescEnd
        }
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        {d.introS1.replace("{region}", r)}
        <Link
          className={linkCls}
          title={dict.common.genShort.replace("{n}", String(gen))}
          href={pageHref(locale, `/gen/${gen}`)}
        >
          {d.introGenLink.replace("{genLabel}", genLabel(gen, locale))}
        </Link>
        {game ? d.introGame.replace("{game}", game) : ""}
        {d.introS2}
        <Link
          className={linkCls}
          title={d.linkTitleRandom}
          href={pageHref(locale, "/random-pokemon-generator")}
        >
          {d.introRandomLink}
        </Link>
        {d.introS3}
      </p>
      <FilteredGenerator query={`region=${region}`} initial={initial} />
      <RelatedTools
        hrefs={["/random-pokemon-generator", "/type", "/team/random", "/adventure"]}
        locale={locale}
      />
    </main>
  );
}
