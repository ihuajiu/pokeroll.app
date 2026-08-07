import type { Metadata } from "next";

// Synonym landing page for "random pokemon" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon — Roll One Now, Free Fan-made Tool",
  description:
    "Get a random Pokémon in one tap — every roll comes with its name, type, ability, base stats, generation and official artwork, ready to copy to Showdown. Free fan-made tool.",
  keywords: [
    "random pokemon",
    "random pokemon generator",
    "pokemon random",
    "roll a random pokemon",
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
