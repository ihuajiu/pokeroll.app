import type { Metadata } from "next";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import ToolsNav from "@/components/ToolsNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import { getChallenge, type ChallengeConfig, type ChallengeMode } from "@/lib/challenge";

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

  const config: ChallengeConfig = { mode, count, type, region, gen, seed };
  const challenge = await getChallenge(config);

  return (
    <main>
      <h1 className="mb-2 text-center text-2xl font-bold text-poke-ink">
        Pokémon Challenge Generator
      </h1>
      <p className="mb-6 text-center text-sm text-poke-dim">
        Build a custom, shareable challenge from our random generator. Tweak the
        mode and filters, then copy the link to challenge a friend.
      </p>
      <ChallengeGenerator challenge={challenge} />
      <ToolsNav current="/challenge" />
      <AffiliateStrip />
    </main>
  );
}
