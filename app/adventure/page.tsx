import type { Metadata } from "next";
import AdventureView from "@/components/AdventureView";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
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
      "Roll a full Pokémon adventure in one tap — trainer, rival, region, starter, team of six, challenge, legendary encounter and goal. Share it or roll again.",
    keywords: [
      "pokemon adventure generator",
      "random pokemon adventure generator",
      "pokemon journey generator",
    ],
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
        <GuideSteps
          className="mt-10"
          steps={[
            {
              n: "1",
              t: "Roll your adventure",
              d: "One tap rolls your trainer, rival, region, starter, team of six, challenge, legendary and goal.",
            },
            {
              n: "2",
              t: "Pick a difficulty",
              d: "Easy, Normal, Hard or Extreme — the higher it goes, the wilder the journey.",
            },
            {
              n: "3",
              t: "Share it",
              d: "Copy the seeded link so friends replay the exact same adventure — or add the team to yours.",
            },
          ]}
        />
        <FaqSection
          items={[
            {
              q: "What does one adventure include?",
              a: "A trainer name, role and style, a rival, a region, your starter, a team of six, a challenge, a gym journey, a legendary encounter and a final goal — all rolled in one tap.",
            },
            {
              q: "What is the seed in the link?",
              a: "An 8-character code that drives the roll. The same seed and difficulty always produce the exact same adventure, so every link is reproducible.",
            },
            {
              q: "What does difficulty change?",
              a: "Difficulty scales the adventure from Easy to Extreme — it shapes the challenges you face, like shiny odds and encounter rules.",
            },
            {
              q: "Can I share my adventure?",
              a: "Yes — copy the page link. It carries the seed and difficulty, so friends open the identical adventure manifest.",
            },
          ]}
        />
        <RelatedTools current="/adventure" />
      </div>
    </main>
  );
}
