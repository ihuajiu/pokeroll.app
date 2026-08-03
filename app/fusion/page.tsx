import type { Metadata } from "next";
import FusionGenerator from "@/components/FusionGenerator";
import RelatedTools from "@/components/RelatedTools";
import FaqSection from "@/components/FaqSection";
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
      <FaqSection
        items={[
          {
            q: "How does the fusion generator work?",
            a: "Each roll picks two random Pokémon and fuses them into one hybrid — a blended name plus combined types and stats from both parents.",
          },
          {
            q: "Can I share or keep a fusion?",
            a: "Yes. The Share button copies a link that reproduces the exact same fusion, and Download saves the fusion card as an image.",
          },
          {
            q: "Is this an official Pokémon tool?",
            a: "No — PokeRoll is a fan-made project. Pokémon data comes from PokéAPI; fusion results are generated for fun and are not official designs.",
          },
        ]}
      />
      <RelatedTools current="/fusion" />
      <SeoNav />
    </main>
  );
}
