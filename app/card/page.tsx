import type { Metadata } from "next";
import CardGenerator from "@/components/CardGenerator";
import ToolsNav from "@/components/ToolsNav";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Card Generator — Fan-made Tool",
  description:
    "Draw a random Pokémon as a stylized trading card with type energy, HP and CP.",
};

export default async function CardPage() {
  const pokemon = await getRandomPokemon();
  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Pokémon Card Generator"
        description="Draw a random Pokémon as a stylized trading card with type energy, HP and CP."
      />
      <CardGenerator initial={pokemon} />
      <ToolsNav current="/card" />
    </main>
  );
}
