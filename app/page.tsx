import type { Metadata } from "next";
import HomeTool from "@/components/HomeTool";

export const metadata: Metadata = {
  title: "PokeRoll — Random Pokémon Tools, Teams & Adventures",
  description:
    "PokeRoll is a free fan-made Pokémon toolbox — roll random Pokémon, build a random team of six, take on challenges or roll a full adventure in one tap.",
  keywords: [
    "pokemon generator",
    "pokemon randomizer",
    "pokemon tools",
    "pokemon team generator",
    "pokemon adventure",
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
