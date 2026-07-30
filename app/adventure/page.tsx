import type { Metadata } from "next";
import AdventureView from "@/components/AdventureView";
import ToolsNav from "@/components/ToolsNav";
import PageHeader from "@/components/PageHeader";
import { rollAdventure, randomSeed } from "@/lib/adventure";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Adventure Generator — Roll Your Adventure",
  description:
    "Roll a full Pokémon adventure in one tap — trainer, region, starter, team of six, challenge and goal. Share your adventure or roll again.",
  alternates: { canonical: "/adventure" },
};

export default async function AdventurePage({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string }>;
}) {
  const { seed: raw } = await searchParams;
  const seed = raw && raw.length > 0 ? raw : randomSeed();
  const adventure = await rollAdventure(seed);

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Roll Your Pokémon Adventure"
        description="One tap rolls your trainer, region, starter, team, challenge and goal — a full Pokémon adventure every time."
      />
      <div className="mx-auto max-w-5xl px-6">
        <AdventureView initial={adventure} />
      </div>
      <ToolsNav current="/adventure" />
    </main>
  );
}
