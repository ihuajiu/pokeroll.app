import type { Metadata } from "next";
import WheelGenerator from "@/components/WheelGenerator";
import ToolsNav from "@/components/ToolsNav";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Wheel Generator — Fan-made Tool",
  description:
    "Spin the wheel for a random Pokémon — a fun game-of-chance picker across the Pokédex.",
};

export default async function WheelPage() {
  const items = await Promise.all(
    Array.from({ length: 8 }, () => getRandomPokemon()),
  );
  return (
    <main>
      <WheelGenerator initial={{ items }} />
      <ToolsNav current="/wheel" />
    </main>
  );
}
