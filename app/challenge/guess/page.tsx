import type { Metadata } from "next";
import Link from "next/link";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";
import {
  getChallenge,
  type ChallengeConfig,
  type ChallengeDifficulty,
} from "@/lib/challenge";
import { DIFFICULTIES } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Guess the Pokémon — Silhouette Challenge",
  description:
    "Guess hidden Pokémon from their silhouettes, reveal them one by one to check, then share the link to challenge a friend. Fan-made tool.",
};

type SP = Record<string, string | string[] | undefined>;
const get = (sp: SP, k: string) =>
  Array.isArray(sp[k]) ? (sp[k] as string[])[0] : (sp[k] as string | undefined);

export default async function GuessChallengePage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
  const countRaw = Number(get(sp, "count"));
  // No count param = "Random" in the UI; the server falls back to 5 until
  // the user rolls a concrete pick.
  const count = countRaw ? Math.min(12, Math.max(1, countRaw)) : undefined;
  const type = get(sp, "type") || undefined;
  const region = get(sp, "region") || undefined;
  const genRaw = get(sp, "gen");
  const gen = genRaw ? Number(genRaw) : undefined;
  const seed = get(sp, "seed") || Math.random().toString(36).slice(2, 10);
  const difficultyRaw = get(sp, "difficulty") as ChallengeDifficulty | undefined;
  // No difficulty param = "Random" in the UI; undefined behaves like Normal
  // server-side until the user rolls a concrete pick.
  const difficulty =
    difficultyRaw && DIFFICULTIES.includes(difficultyRaw) ? difficultyRaw : undefined;

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

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        compact
        title={challenge.title}
        description={challenge.description}
      />
      <p className="mb-6 text-sm text-poke-dim">
        Prefer one quick mystery card instead?{" "}
        <Link
          href="/no-names"
          className="font-semibold text-[#ee3b3b] underline underline-offset-2"
        >
          Mystery Pokémon →
        </Link>
      </p>
      <ChallengeGenerator challenge={challenge} />
      <RelatedTools current="/challenge/guess" />
    </main>
  );
}
