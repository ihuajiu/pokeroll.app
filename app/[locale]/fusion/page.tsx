import type { Metadata } from "next";
import FusionGenerator from "@/components/FusionGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
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

const PATH = "/fusion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.fusion;
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

export default async function FusionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.fusion;
  const [a, b] = await Promise.all([getRandomPokemon(), getRandomPokemon()]).then(
    (ps) => ps.map((p) => withLocalizedFlavor(p, locale)),
  );
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: dict.tools.groups.tool.title, href: pageHref(locale, "/#browse") },
          { label: d.breadcrumbLabel },
        ]}
      />
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />
      <FusionGenerator initial={{ a, b }} />
      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/fusion" locale={locale} />
    </main>
  );
}
