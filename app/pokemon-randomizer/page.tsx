import type { Metadata } from "next";

// Synonym landing page for "pokemon randomizer" — same tool as /random,
// canonical defers there so ranking signals consolidate.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Randomizer — Fan-made Tool",
  description:
    "Randomize a Pokémon in one tap — every roll comes with its name, type, ability, base stats, generation and official artwork. Free fan-made tool.",
  keywords: [
    "pokemon randomizer",
    "random pokemon generator",
    "pokemon randomiser",
    "random pokemon",
  ],
  alternates: { canonical: "/random-pokemon-generator" },
};

export { default } from "../random-pokemon-generator/page";
