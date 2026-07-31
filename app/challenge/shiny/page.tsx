import type { Metadata } from "next";
import ChallengeGenerator from "@/components/ChallengeGenerator";
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
  title: "Shiny Hunt Challenge — Predict Your Next Shiny",
  description:
    "How many random encounters until your next shiny Pokémon? Roll a seeded prediction and share it with a friend. Fan-made tool.",
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
      <PageHeader
        compact
        title={challenge.title}
        description={
          difficulty === "Easy"
            ? "Easy mode — every click is a 1-in-204 draw and your shiny is guaranteed within 204 encounters. Share the link and compare with a friend."
            : "Click Encounter and see how long it takes to find your shiny — same 1/4096 odds as the games. Share the link and compare with a friend."
        }
      />
      <ChallengeGenerator
        challenge={challenge}
        wildPool={wildPool}
        startFound={reveal}
      />
    </main>
  );
}
