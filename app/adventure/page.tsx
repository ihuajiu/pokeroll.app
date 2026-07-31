import type { Metadata } from "next";
import AdventureView from "@/components/AdventureView";
import PageHeader from "@/components/PageHeader";
import { rollAdventure } from "@/lib/adventure";
import { DIFFICULTIES, randomSeed } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string; difficulty?: string }>;
}): Promise<Metadata> {
  const { difficulty } = await searchParams;
  const diff = DIFFICULTIES.includes(difficulty as (typeof DIFFICULTIES)[number])
    ? difficulty
    : undefined;
  const diffLabel = diff ? ` — ${diff} Difficulty` : "";
  return {
    title: `Pokémon Adventure Generator${diffLabel}`,
    description:
      "Roll a full Pokémon adventure in one tap — trainer, rival, region, starter, team of six, difficulty, challenge, gym journey, legendary encounter and goal. Share your adventure or roll again.",
    alternates: { canonical: "/adventure" },
  };
}

export default async function AdventurePage({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string; difficulty?: string }>;
}) {
  const { seed: raw, difficulty: rawDiff } = await searchParams;
  const seed = raw && raw.length > 0 ? raw : randomSeed();
  const difficulty = DIFFICULTIES.includes(rawDiff as (typeof DIFFICULTIES)[number])
    ? rawDiff
    : undefined;
  const adventure = await rollAdventure(seed, difficulty);

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Roll Your Pokémon Adventure"
        description="One tap rolls your trainer, region, starter, team, challenge and goal — a full Pokémon adventure every time."
      />
      <div className="mx-auto max-w-5xl px-3">
        <AdventureView initial={adventure} />
      </div>
    </main>
  );
}
