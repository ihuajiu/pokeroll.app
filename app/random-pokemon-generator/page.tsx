import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

// Keyword landing page — same content as the home hub, so it canonically
// defers to "/" to avoid duplicate-content dilution.
export const metadata: Metadata = {
  title: "Random Pokémon Generator — PokeRoll",
  description:
    "Roll a random Pokémon in one tap — every pull comes with a name, type, ability, base stats, generation and official artwork. Free fan-made tool.",
  keywords: [
    "random pokemon generator",
    "pokemon generator",
    "pokemon random generator",
    "random pokemon",
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
