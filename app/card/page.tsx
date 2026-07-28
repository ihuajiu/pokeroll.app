import type { Metadata } from "next";
import CardGenerator from "@/components/CardGenerator";
import ToolsNav from "@/components/ToolsNav";
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
    <main>
      <CardGenerator initial={pokemon} />
      <ToolsNav current="/card" />
    </main>
  );
}
