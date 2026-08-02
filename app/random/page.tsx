import type { Metadata } from "next";
import RandomGenerator from "@/components/RandomGenerator";
import RelatedTools from "@/components/RelatedTools";
import SeoNav from "@/components/SeoNav";
import PageHeader from "@/components/PageHeader";
import { getPokemonById, getRandomPokemon } from "@/lib/pokeapi";

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

export default async function RandomGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const { p } = await searchParams;
  // ?p=<name> makes a shared link reproduce the exact same Pokémon; anything
  // unknown falls back to a fresh random roll.
  let initial;
  if (p) {
    try {
      initial = await getPokemonById(p);
    } catch {
      initial = await getRandomPokemon();
    }
  } else {
    initial = await getRandomPokemon();
  }

  return (
    <main className="pt-4 pb-10">
      <div className="mx-auto max-w-[1080px] px-6">
        <PageHeader
          title="Random Pokémon Generator"
          description="Roll a random Pokémon in one tap — every pull comes with its name, type, ability, stats and an official sprite."
          compact
        />
      </div>
      <RandomGenerator initial={initial} />
      <div className="mx-auto max-w-[1080px] px-6">
        <RelatedTools current="/random" />
        <SeoNav />
      </div>
    </main>
  );
}
