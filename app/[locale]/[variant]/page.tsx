import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VariantGenerator from "@/components/VariantGenerator";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getVariant, getRandomPokemon, getStarters } from "@/lib/pokeapi";
import { localizeToolGroups, localizeTools } from "@/lib/tools";
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

type VariantKey =
  | "type"
  | "ability"
  | "move"
  | "bst"
  | "number"
  | "starter"
  | "no-names"
  | "cute"
  | "mythical"
  | "mega"
  | "nickname";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; variant: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, variant } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const META = dict.pages.variants;
  // Validate here too: notFound() from generateMetadata runs before streaming
  // starts, so it yields a real 404 status — thrown mid-render under
  // loading.tsx it would stream a 200 (soft 404).
  if (!(variant in META) || variant === "noNamesPromo") notFound();
  const m = META[variant as VariantKey];
  const path = `/${variant}`;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ locale: string; variant: string }>;
}) {
  const { locale: rawLocale, variant } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const META = dict.pages.variants;

  if (!(variant in META) || variant === "noNamesPromo") notFound();

  const m = META[variant as VariantKey];
  const headerTitle = m.title.replace(/ \| PokeRoll$/, "");

  const TOOLS = localizeTools(dict);
  const TOOL_GROUPS = localizeToolGroups(dict);
  const tool = TOOLS.find((t) => t.href === `/${variant}`);
  const group = TOOL_GROUPS.find((g) => g.id === tool?.group);
  const crumbs = [
    { label: dict.common.home, href: pageHref(locale, "/") },
    ...(group ? [{ label: group.title, href: pageHref(locale, "/#browse") }] : []),
    { label: tool?.label ?? headerTitle },
  ];

  if (variant === "starter") {
    const pokemon = withLocalizedFlavor(await getRandomPokemon(getStarters()), locale);
    return (
      <main className="pt-6 pb-10">
        <Breadcrumbs items={crumbs} />
        <PageHeader title={headerTitle} description={m.description} />
        <VariantGenerator
          kind="starter"
          initial={{ kind: "starter", pokemon }}
        />
        <RelatedTools current={`/${variant}`} locale={locale} />
      </main>
    );
  }

  if (variant === "no-names") {
    const pokemon = withLocalizedFlavor(await getRandomPokemon(), locale);
    const promo = META.noNamesPromo;
    return (
      <main className="pt-6 pb-10">
        <Breadcrumbs items={crumbs} />
        <PageHeader title={headerTitle} description={m.description} />
        <p className="mb-6 text-sm text-poke-dim">
          {promo.s1}
          <Link
            href={pageHref(locale, "/challenge/guess")}
            title={promo.linkTitle}
            className="font-semibold text-[#ee3b3b] underline underline-offset-2"
          >
            {promo.link}
          </Link>
        </p>
        <VariantGenerator
          kind="no-names"
          initial={{ kind: "no-names", pokemon }}
          mode="no-names"
        />
        <RelatedTools current={`/${variant}`} locale={locale} />
      </main>
    );
  }

  const initial = await getVariant(variant);
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs items={crumbs} />
      <PageHeader title={headerTitle} description={m.description} />
      <VariantGenerator kind={variant} initial={initial} />
      <RelatedTools current={`/${variant}`} locale={locale} />
    </main>
  );
}
