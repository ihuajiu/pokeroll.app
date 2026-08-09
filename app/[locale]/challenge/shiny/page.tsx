import type { Metadata } from "next";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import PlayGuide from "@/components/PlayGuide";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import {
  getChallenge,
  type ChallengeConfig,
  type ChallengeDifficulty,
} from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";
import { getAllPokemon } from "@/lib/pokedex";
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

const PATH = "/challenge/shiny";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.shiny;
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

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function ShinyChallengePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SP>;
}) {
  const [{ locale: rawLocale }, sp] = await Promise.all([params, searchParams]);
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.shiny;
  const seed = get(sp, "seed") || Math.random().toString(36).slice(2, 10);
  // reveal=1: a shared result link — open straight on the found shiny card
  // (the friend sees the reveal first, then can start their own hunt).
  const reveal = get(sp, "reveal") === "1";
  const difficultyRaw = get(sp, "difficulty") as ChallengeDifficulty | undefined;
  // Shiny defaults to Easy (guaranteed pity draw) so a first visit always
  // lands on the friendly hunt; other difficulties come from the URL.
  const difficulty: ChallengeDifficulty =
    difficultyRaw && DIFFICULTIES.includes(difficultyRaw) ? difficultyRaw : "Easy";

  // Shiny is always a single encounter prediction.
  const config: ChallengeConfig = { mode: "shiny", count: 1, seed, difficulty };
  const challenge = await getChallenge(config);
  challenge.pokemon = challenge.pokemon.map((p) =>
    withLocalizedFlavor(p, locale),
  );

  // Slim dex pool for the client-side click simulator (artwork + name only).
  const wildPool = getAllPokemon().map((p) => ({
    dexNumber: p.dexNumber,
    displayName: p.displayName,
    img: p.artwork,
  }));

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: dict.common.home, href: pageHref(locale, "/") },
          {
            label: dict.tools.groups.challenge.title,
            href: pageHref(locale, "/#browse"),
          },
          { label: d.breadcrumbLabel },
        ]}
      />
      <PageHeader
        compact
        title={d.headerTitle}
        description={
          difficulty === "Easy" ? d.headerDescEasy : d.headerDescDefault
        }
      />
<GuideSteps
  className="mb-6"
  title={d.guideTitle}
  steps={d.steps.map((s, i) => ({ n: String(i + 1), ...s }))}
/>
      <ChallengeGenerator
        challenge={challenge}
        wildPool={wildPool}
        startFound={reveal}
      />
      <PlayGuide guide={d.guide} />
      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/challenge/shiny" locale={locale} />
    </main>
  );
}
