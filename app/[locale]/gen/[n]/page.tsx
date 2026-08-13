import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import PlayGuide, { fillGuide } from "@/components/PlayGuide";
import PageFeedback from "@/components/PageFeedback";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByGeneration, getRandomPokemon } from "@/lib/pokeapi";
import { GEN_REGION, GENS, REGION_GAME, titleCase } from "@/lib/seo";
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
import { withLocalizedFlavor } from "@/lib/i18n/flavor";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; n: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, n } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  // Reject non-canonical gens (99, 01, abc…) before anything renders —
  // otherwise they'd serve junk 200 pages (soft 404).
  const gen = Number(n);
  if (!Number.isInteger(gen) || String(gen) !== n || !(GENS as readonly number[]).includes(gen))
    notFound();
  const dict = await getDictionary(locale);
  const d = dict.pages.gen;
  const path = `/gen/${gen}`;
  return {
    title: d.metaTitle.replace("{gen}", String(gen)),
    description: d.metaDescription
      .replace("{gen}", String(gen))
      .replace("{region}", GEN_REGION[gen]),
    keywords: d.keywords.map((k) => k.replace("{gen}", String(gen))),
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function GenPage({
  params,
}: {
  params: Promise<{ locale: string; n: string }>;
}) {
  const { locale: rawLocale, n } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const gen = Number(n);
  if (!Number.isInteger(gen) || String(gen) !== n || !(GENS as readonly number[]).includes(gen))
    notFound();
  const dict = await getDictionary(locale);
  const d = dict.pages.gen;
  const gl = genLabel(gen, locale);
  const pool = await getPoolByGeneration(gen);
  const initial = withLocalizedFlavor(
    pool.length ? await getRandomPokemon(pool) : await getRandomPokemon(),
    locale,
  );
  const region = GEN_REGION[gen];
  const game = region ? REGION_GAME[region] : undefined;
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.common.randomPokemon, href: pageHref(locale, "/random-pokemon-generator") },
          { label: gl },
        ]}
      />
      <PageHeader
        title={d.headerTitle.replace("{genLabel}", gl)}
        description={d.headerDesc.replace("{genLabel}", gl)}
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        {gl}
        {region ? (
          <>
            {d.introRegionPre}
            <Link
              className={linkCls}
              title={d.linkTitleBrowseRegion.replace("{region}", region)}
              href={pageHref(locale, `/by/${region}`)}
            >
              {d.introRegionLink.replace("{region}", titleCase(region))}
            </Link>
            {game ? d.introGame.replace("{game}", game) : ""}
          </>
        ) : null}
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
      <FilteredGenerator query={`gen=${gen}`} initial={initial} />
      <PageFeedback pageKey={`/gen/${gen}`} />
      <PlayGuide
        guide={fillGuide(d.guide, {
          genLabel: gl,
          region: titleCase(region),
          regionSlug: region,
        })}
      />
      <RelatedTools
        hrefs={["/random-pokemon-generator", "/starter", "/type", "/adventure"]}
        locale={locale}
      />
    </main>
  );
}
