import type { Metadata } from "next";
import RandomTeam from "@/components/RandomTeam";
import ToolsNav from "@/components/ToolsNav";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Team — Fan-made Tool",
  description:
    "Generate a random team of 6 Pokémon in one tap — roll again for a brand-new squad.",
};

export default async function RandomTeamPage() {
  const initial = await Promise.all(
    Array.from({ length: 6 }, () => getRandomPokemon()),
  );
  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Random Pokémon Team"
        description="Roll a ready-made squad of six random Pokémon — then send your favourites to your Team."
      />
      <div className="mx-auto max-w-5xl px-6">
        <RandomTeam initial={initial} />
      </div>
      <ToolsNav current="/team/random" />
    </main>
  );
}
