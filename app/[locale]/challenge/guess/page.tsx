import type { Metadata } from "next";
import Link from "next/link";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import GuideSteps from "@/components/GuideSteps";
import PlayGuide from "@/components/PlayGuide";
import FaqSection from "@/components/FaqSection";
import PageFeedback from "@/components/PageFeedback";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import {
  getChallenge,
  type ChallengeConfig,
  type ChallengeDifficulty,
} from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";
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

const PATH = "/challenge/guess";

// Mirrors maxCountForDifficulty in lib/challenge.ts so the header copy shows
// the same clamped count the challenge actually rolls.
const MAX_BY_DIFFICULTY: Record<string, number> = {
  Easy: 12,
  Normal: 10,
  Hard: 8,
  Extreme: 6,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.guess;
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

export default async function GuessChallengePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SP>;
}) {
  const [{ locale: rawLocale }, sp] = await Promise.all([params, searchParams]);
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);
  const d = dict.pages.guess;
  const countRaw = Number(get(sp, "count"));
  // No count param = default of 4 until the user picks another value.
  const count = countRaw ? Math.min(12, Math.max(1, countRaw)) : 4;
  const type = get(sp, "type") || undefined;
  const region = get(sp, "region") || undefined;
  const genRaw = get(sp, "gen");
  const gen = genRaw ? Number(genRaw) : undefined;
  const seed = get(sp, "seed") || Math.random().toString(36).slice(2, 10);
  const difficultyRaw = get(sp, "difficulty") as ChallengeDifficulty | undefined;
  // No difficulty param = default of Easy (type hint, no zoom) until the
  // user picks another value.
  const difficulty: ChallengeDifficulty =
    difficultyRaw && DIFFICULTIES.includes(difficultyRaw) ? difficultyRaw : "Easy";

  const config: ChallengeConfig = {
    mode: "guess",
    count,
    type,
    region,
    gen,
    seed,
    difficulty,
  };
  const challenge = await getChallenge(config);
  challenge.pokemon = challenge.pokemon.map((p) =>
    withLocalizedFlavor(p, locale),
  );
  // getChallenge clamps the count to the difficulty cap — mirror that here so
  // the header copy matches the rolled lineup.
  const clamped = Math.max(
    1,
    Math.min(count, MAX_BY_DIFFICULTY[difficulty] ?? 12),
  );

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
        description={d.headerDesc.replace("{count}", String(clamped))}
      />
      <p className="mb-6 text-sm text-poke-dim">
        {d.promoS1}
        <Link
          href={pageHref(locale, "/no-names")}
          title={dict.tools.items.mystery.label}
          className="font-semibold text-[#ee3b3b] underline underline-offset-2"
        >
          {d.promoLink}
        </Link>
      </p>

      <GuideSteps
        className="mb-6"
        title={d.guideTitle}
        steps={d.steps.map((s, i) => ({ n: String(i + 1), ...s }))}
      />
      <ChallengeGenerator challenge={challenge} />
      <PageFeedback pageKey={"/challenge/guess"} />
      <PlayGuide guide={d.guide} />
      <FaqSection items={d.faqs} locale={locale} />
      <RelatedTools current="/challenge/guess" locale={locale} />
    </main>
  );
}
