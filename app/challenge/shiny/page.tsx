import type { Metadata } from "next";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import {
  getChallenge,
  type ChallengeConfig,
  type ChallengeDifficulty,
} from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";
import { getAllPokemon } from "@/lib/pokedex";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shiny Pokémon Generator — Shiny Hunt Challenge",
  description:
    "The shiny Pokémon generator with real hunt odds: click Encounter, find your shiny and share the card. Easy mode guarantees a shiny within 204 draws.",
  keywords: [
    "shiny pokemon generator",
    "random pokemon generator shiny",
    "random pokemon generator shiny odds",
    "random shiny pokemon",
    "shiny hunt",
    "shiny odds",
  ],
  alternates: { canonical: "/challenge/shiny" },
};

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function ShinyChallengePage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
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
          { label: "Home", href: "/" },
          { label: "Challenges", href: "/#browse" },
          { label: "Shiny Hunt" },
        ]}
      />
      <PageHeader
        compact
        title={challenge.title}
        description={
          difficulty === "Easy"
            ? "Easy mode — every click is a 1-in-204 draw and your shiny is guaranteed within 204 encounters. Share the link and compare with a friend."
            : "Click Encounter and see how long it takes to find your shiny — same 1/4096 odds as the games. Share the link and compare with a friend."
        }
      />
<GuideSteps
  className="mb-6"
  steps={[
    {
      n: "1",
      t: "Click Encounter",
      d: "Each click is one draw — 1-in-204 on Easy, 1-in-4096 otherwise, and Easy guarantees a shiny within 204 clicks.",
    },
    {
      n: "2",
      t: "Find your shiny",
      d: "When it sparkles, the found card unlocks Share and Download.",
    },
    {
      n: "3",
      t: "Share the hunt",
      d: "Share the card or the seeded link — friends see your result, then start their own hunt.",
    },
  ]}
/>
      <ChallengeGenerator
        challenge={challenge}
        wildPool={wildPool}
        startFound={reveal}
      />
      <FaqSection
        items={[
          {
            q: "What are the shiny odds?",
            a: "Normal, Hard and Extreme modes use the same 1-in-4096 rate as the mainline games. Easy mode raises it to 1-in-204 per click.",
          },
          {
            q: "What is Easy mode?",
            a: "A friendlier hunt: 1-in-204 odds per Encounter, and your shiny is guaranteed to appear within 204 draws — no endless dry streaks.",
          },
          {
            q: "What happens when I find a shiny?",
            a: "The found card unlocks Share and Download. The shared link opens straight on your found shiny, and the downloaded card image carries a QR code friends can scan to start their own hunt.",
          },
        ]}
      />
      <RelatedTools current="/challenge/shiny" />
    </main>
  );
}
