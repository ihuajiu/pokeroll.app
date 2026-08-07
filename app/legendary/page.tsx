import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getAllPokemon, getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Legendary Pokémon Generator | PokeRoll",
  description:
    "Generate a random Legendary Pokémon instantly: name, type, ability, base stats and official artwork — copy the set to Showdown. Fan-made tool.",
  keywords: [
    "random legendary pokemon generator",
    "legendary pokemon generator",
    "random legendary pokemon",
  ],
  alternates: { canonical: "/legendary" },
};

export default async function LegendaryPage() {
  const pool = getAllPokemon()
    .filter((p) => p.isLegendary)
    .map((p) => p.dexNumber);
  const initial = await getRandomPokemon(pool);

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Generators", href: "/#browse" },
          { label: "Legendary Generator" },
        ]}
      />
      <PageHeader
        title="Random Legendary Pokémon Generator"
        description="Only Legendary Pokémon in this pool — tap Generate Again for another legendary roll."
      />
      <p className="mb-6 text-sm text-poke-dim">
        Tap Generate Again to roll another Legendary — Add to Team keeps it in your squad.
      </p>
      <FilteredGenerator query="legendary=1" initial={initial} />
    </main>
  );
}
