import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Generator",
  description:
    "Roll a random Pokémon in one tap — every pull comes with a name, type, ability, base stats, generation and official artwork. Free fan-made tool.",
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
