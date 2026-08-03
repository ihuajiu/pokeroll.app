import type { Metadata } from "next";
import RandomGenerator from "@/components/RandomGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPokemonById, getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Generator — PokeRoll",
  description:
    "Roll a random Pokémon in one tap — every pull comes with its name, type, ability, base stats, generation and official artwork. Free fan-made tool.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "pokemon random generator",
    "random pokemon",
  ],
  alternates: { canonical: "/random-pokemon-generator" },
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
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Random Pokémon" }]}
        />
        <PageHeader
          title="Random Pokémon Generator"
          description="Roll a random Pokémon in one tap — every pull comes with its name, type, ability, stats and an official sprite."
          compact
        />
      </div>
      <RandomGenerator initial={initial} />
      <div className="mx-auto max-w-[1080px] px-6">
        <FaqSection
          items={[
            {
              q: "How does the random Pokémon generator work?",
              a: "Every roll picks one Pokémon at random from the full National Pokédex — over 1,000 species across all nine generations — and shows its name, types, ability, base stats, height, weight and official artwork.",
            },
            {
              q: "Can I reproduce or share a specific result?",
              a: "Yes. Use the Share button on the card — the link carries the exact Pokémon, so anyone opening it sees the same pull. You can also download the card as an image.",
            },
            {
              q: "Can I narrow the results down?",
              a: "Open the advanced filters to roll within a specific generation, region, type or category — or use the dedicated Gen, Region and Type generator pages linked below.",
            },
            {
              q: "Where does the Pokémon data come from?",
              a: "All species data comes from PokéAPI and is bundled locally with the site, so every roll is instant.",
            },
          ]}
        />
        <RelatedTools current="/random-pokemon-generator" />
      </div>
    </main>
  );
}
