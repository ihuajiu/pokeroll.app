import type { Metadata } from "next";
import WheelGenerator from "@/components/WheelGenerator";
import RelatedTools from "@/components/RelatedTools";
import SeoNav from "@/components/SeoNav";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Wheel Generator — Fan-made Tool",
  description:
    "Spin the wheel for a random Pokémon — a fun game-of-chance picker across the Pokédex.",
};

export default async function WheelPage() {
  const items = await Promise.all(
    Array.from({ length: 8 }, () => getRandomPokemon()),
  );
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Generators", href: "/#browse" },
          { label: "Spin the Wheel" },
        ]}
      />
      <PageHeader
        title="Pokémon Wheel Generator"
        description="Spin the wheel for a random Pokémon — a fun game-of-chance picker across the Pokédex."
      />
      <WheelGenerator initial={{ items }} />
      <RelatedTools current="/wheel" />
      <SeoNav />
    </main>
  );
}
