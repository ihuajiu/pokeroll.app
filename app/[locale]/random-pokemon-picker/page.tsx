import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// Synonym landing page for "random pokemon picker" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const d = (await getDictionary(locale)).pages.randomPokemonPicker;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: { canonical: "/random-pokemon-generator" },
  };
}

export { default } from "../random-pokemon-generator/page";
