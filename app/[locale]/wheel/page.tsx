import type { Metadata } from "next";
import WheelGenerator from "@/components/WheelGenerator";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";
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

const PATH = "/wheel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.wheel;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, PATH),
      languages: languageAlternates(PATH),
    },
  };
}

export default async function WheelPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ result?: string; players?: string; dex?: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.wheel;
  const sp = await searchParams;
  const resultView = sp.result === "1";
  const players = Number(sp.players);
  const dexes = (sp.dex || "")
    .split(",")
    .map((d2) => Number(d2.trim()))
    .filter((n) => !Number.isNaN(n) && n > 0);
  // result=1 & players & dex → a shared round: show the PK results,
  // not a fresh wheel to spin.
  const shared =
    resultView && players > 0 && dexes.length > 0
      ? { players, dexes: dexes.slice(0, 6) }
      : null;
  const items = await Promise.all(
    Array.from({ length: 8 }, () => getRandomPokemon()),
  ).then((ps) => ps.map((p) => withLocalizedFlavor(p, locale)));
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.tools.groups.generator.title, href: pageHref(locale, "/#browse") },
          { label: d.breadcrumbLabel },
        ]}
      />
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />
      {!shared && (
  <GuideSteps
    className="mx-auto mb-6 max-w-[1100px] px-4"
    title={d.guideTitle}
    steps={d.steps}
  />
)}
<WheelGenerator initial={{ items }} shared={shared} />
      <RelatedTools current="/wheel" locale={locale} />
    </main>
  );
}
