import type { Metadata } from "next";
import HeroCard from "@/components/HeroCard";
import HeroActions from "@/components/HeroActions";
import PageHeader from "@/components/PageHeader";
import ToolsNav from "@/components/ToolsNav";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Generator — Fan-made Tool",
  description:
    "Roll a random Pokémon in one tap — every pull comes with its name, type, ability, stats and an official sprite.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "random pokemon",
    "pokeball",
    "pokedex",
  ],
  alternates: { canonical: "/random" },
};

export default async function RandomGeneratorPage() {
  const initial = await getRandomPokemon();

  return (
    <main className="pt-6 pb-10">
      <div className="mx-auto max-w-[640px] px-6">
        <PageHeader
          title="Random Pokémon Generator"
          description="Roll a random Pokémon in one tap — every pull comes with its name, type, ability, stats and an official sprite."
          compact
        />
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold text-poke-ink">Welcome Trainer!</p>
          <p className="text-sm text-poke-dim">Your random Pokémon is…</p>
        </div>
        <HeroCard pokemon={initial} basePath="/random" />
        <HeroActions />
      </div>
      <ToolsNav current="/random" />
    </main>
  );
}
