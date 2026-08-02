import type { Metadata } from "next";
import FusionGenerator from "@/components/FusionGenerator";
import RelatedTools from "@/components/RelatedTools";
import SeoNav from "@/components/SeoNav";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Fusion Generator — Fan-made Tool",
  description:
    "Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats.",
  keywords: [
    "pokemon fusion generator",
    "random pokemon fusion generator",
    "pokemon fusion maker",
    "pokemon fusion creator",
    "pokemon fusion randomizer",
  ],
  alternates: { canonical: "/fusion" },
};

export default async function FusionPage() {
  const [a, b] = await Promise.all([getRandomPokemon(), getRandomPokemon()]);
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/#browse" },
          { label: "Fusion Tool" },
        ]}
      />
      <PageHeader
        title="Pokémon Fusion Generator"
        description="Fuse two random Pokémon into a brand-new hybrid with a combined name, type and stats."
      />
      <FusionGenerator initial={{ a, b }} />
      <RelatedTools current="/fusion" />
      <SeoNav />
    </main>
  );
}
