import type { Metadata } from "next";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import ToolsNav from "@/components/ToolsNav";
import PageHeader from "@/components/PageHeader";
import {
  getChallenge,
  type ChallengeConfig,
  type ChallengeMode,
  type ChallengeDifficulty,
} from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Challenge Generator — Guess, Collect & Team Build",
  description:
    "Create a shareable Pokémon challenge: guess hidden names, collect a type, or build a random team. Fan-made tool.",
};

const MODES: ChallengeMode[] = ["guess", "collect", "team", "shiny"];

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function ChallengePage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
  const modeRaw = get(sp, "mode") as ChallengeMode | undefined;
  const mode: ChallengeMode = modeRaw && MODES.includes(modeRaw) ? modeRaw : "guess";
  const countRaw = Number(get(sp, "count"));
  const count = mode === "shiny" ? 1 : Math.min(12, Math.max(1, countRaw || 5));
  const type = get(sp, "type") || undefined;
  const region = get(sp, "region") || undefined;
  const genRaw = get(sp, "gen");
  const gen = genRaw ? Number(genRaw) : undefined;
  const seed = get(sp, "seed") || Math.random().toString(36).slice(2, 10);
  const difficultyRaw = get(sp, "difficulty") as ChallengeDifficulty | undefined;
  const difficulty =
    difficultyRaw && DIFFICULTIES.includes(difficultyRaw) ? difficultyRaw : "Normal";

  const config: ChallengeConfig = { mode, count, type, region, gen, seed, difficulty };
  const challenge = await getChallenge(config);

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Pokémon Challenge Generator"
        description="Build a custom, shareable challenge from our random generator. Tweak the mode and filters, then copy the link to challenge a friend."
      />
      <ChallengeGenerator challenge={challenge} />
      <ToolsNav current="/challenge" />
    </main>
  );
}
