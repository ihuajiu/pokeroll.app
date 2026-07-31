import type { Metadata } from "next";
import RandomGenerator from "@/components/RandomGenerator";
import PageHeader from "@/components/PageHeader";
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
      </div>
      <RandomGenerator initial={initial} />
    </main>
  );
}
