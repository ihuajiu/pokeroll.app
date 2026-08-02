import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

// Keyword landing page — same content as the home hub, so it canonically
// defers to "/" to avoid duplicate-content dilution.
export const metadata: Metadata = {
  title: "Random Pokémon Generator — PokeRoll",
  description:
    "Roll a random Pokémon in one tap. Every pull comes with a name, type, ability, base stats, generation and an official sprite.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <main className="pt-1 pb-10">
      <HomeTool />
    </main>
  );
}
