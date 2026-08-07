import type { Metadata } from "next";

// Synonym landing page for "pokemon randomizer" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Randomizer | PokeRoll",
  description:
    "Randomize a Pokémon in one tap — every roll comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "random pokemon",
    "generate random pokemon",
    "get random pokemon",
  ],
  alternates: { canonical: "/random-pokemon-generator" },
};

export { default } from "../random-pokemon-generator/page";
