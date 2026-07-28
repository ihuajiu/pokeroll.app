import type { Metadata } from "next";
import FusionGenerator from "@/components/FusionGenerator";
import ToolsNav from "@/components/ToolsNav";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Fusion Generator — Fan-made Tool",
  description:
    "Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats.",
};

export default async function FusionPage() {
  const [a, b] = await Promise.all([getRandomPokemon(), getRandomPokemon()]);
  return (
    <main>
      <FusionGenerator initial={{ a, b }} />
      <ToolsNav current="/fusion" />
    </main>
  );
}
