import type { Metadata } from "next";
import TeamChallenge from "@/components/TeamChallenge";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomTeam } from "@/lib/team";
import { localizeTools } from "@/lib/tools";
import {
  isLocale,
  languageAlternates,
  localePath,
  pageHref,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamChallenge;
  const path = "/team/challenge";
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function TeamChallengePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    seed?: string | string[];
    mine?: string | string[];
    count?: string | string[];
    result?: string | string[];
    owner?: string | string[];
  }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.teamChallenge;
  const sp = await searchParams;
  const seed = typeof sp.seed === "string" ? sp.seed : undefined;
  const mine = typeof sp.mine === "string" ? sp.mine : undefined;
  const resultView = sp.result === "1";
  // owner=1 marks the challenge creator's own view — they may re-roll the
  // challenge team but must not "roll my team" against their own challenge.
  const isOwner = sp.owner === "1";
  const countRaw = Number(sp.count);
  const count = countRaw ? Math.min(12, Math.max(3, countRaw)) : 6;
  // No seed = idle state: nothing is generated until the user clicks.
  const challenger = seed
    ? (await getRandomTeam({ seed, count })).pokemon
    : null;
  const yours = seed && mine ? (await getRandomTeam({ seed: mine, count })).pokemon : null;

  const tool = localizeTools(dict).find((t) => t.href === "/team/challenge");

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          { label: tool?.label ?? d.breadcrumbLabel },
        ]}
      />
      <PageHeader
        title={d.headerTitle}
        description={d.headerDesc}
      />
      <TeamChallenge
        challenger={challenger}
        yours={yours}
        seed={seed}
        count={count}
        resultView={resultView}
        isOwner={isOwner}
      />
      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/team/challenge" locale={locale} />
    </main>
  );
}
