import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Generator",
  description:
    "Roll a random Pokémon in one tap. Every pull comes with a name, type, ability, base stats, generation and an official sprite.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "random pokemon",
    "pokeball",
    "pokedex",
  ],
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <main className="pt-1 pb-10">
      <HomeTool />
    </main>
  );
}
