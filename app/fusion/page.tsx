import type { Metadata } from "next";
import FusionGenerator from "@/components/FusionGenerator";
import RelatedTools from "@/components/RelatedTools";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Fusion Generator — Fan-made Tool",
  description:
    "Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats.",
};

export default async function FusionPage() {
  const [a, b] = await Promise.all([getRandomPokemon(), getRandomPokemon()]);
  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title="Pokémon Fusion Generator"
        description="Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats."
      />
      <FusionGenerator initial={{ a, b }} />
      <RelatedTools current="/fusion" />
    </main>
  );
}
