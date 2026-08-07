import type { Metadata } from "next";

// Synonym landing page for "random pokemon picker" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Random Pokémon Picker | PokeRoll",
  description:
    "Pick a random Pokémon in one tap — every pick comes with name, type, ability, base stats and official artwork, ready to copy to Showdown. Free fan-made tool.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "random pokemon",
  ],
  alternates: { canonical: "/random-pokemon-generator" },
};

export { default } from "../random-pokemon-generator/page";
