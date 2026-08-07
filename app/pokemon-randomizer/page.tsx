import type { Metadata } from "next";

// Synonym landing page for "pokemon randomizer" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Randomizer — Fan-made Tool",
  description:
    "Randomize a Pokémon in one tap — every roll comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
  keywords: [
    "pokemon randomizer",
    "random pokemon generator",
    "pokemon randomiser",
    "random pokemon",
    "generate a random pokemon",
    "generate random pokemon",
    "generate me a random pokemon",
    "create a random pokemon",
    "creating a random pokemon for you",
    "get a random pokemon",
    "get random pokemon",
    "random generator pokemon",
    "pokemon random pokemon generator",
  ],
  alternates: { canonical: "/random-pokemon-generator" },
};

export { default } from "../random-pokemon-generator/page";
