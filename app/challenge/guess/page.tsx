import type { Metadata } from "next";
import Link from "next/link";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    "Guess hidden Pokémon from their silhouettes, reveal them one by one to check, then share the seeded link to challenge a friend. Free fan-made tool.",
  keywords: [
    "guess the pokemon",
    "pokemon guessing game",
    "pokemon quiz",
    "who's that pokemon",
  ],
  alternates: { canonical: "/challenge/guess" },
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

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Challenges", href: "/#browse" },
          { label: "Guess the Pokémon" },
        ]}
      />
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

      <GuideSteps
        className="mb-6"
        steps={[
          {
            n: "1",
            t: "Study the silhouettes",
            d: "Shape, size and the Easy type hint are all you've got — lock in your guess.",
          },
          {
            n: "2",
            t: "Flip to reveal",
            d: "Click a card to flip it and see if you named the Pokémon right.",
          },
          {
            n: "3",
            t: "Share & compare",
            d: "The seed in the link recreates the same lineup — share it and race a friend.",
          },
        ]}
      />
      <ChallengeGenerator challenge={challenge} />
      <RelatedTools current="/challenge/guess" />
    </main>
  );
}
