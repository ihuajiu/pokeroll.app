import type { Metadata } from "next";
import WheelGenerator from "@/components/WheelGenerator";
import GuideSteps from "@/components/GuideSteps";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Wheel Generator — Fan-made Tool",
  description:
    "Spin the wheel for a random Pokémon — a fun game-of-chance picker across the Pokédex.",
  keywords: [
    "pokemon wheel generator",
    "random pokemon wheel",
    "pokemon spinner",
    "pokemon picker wheel",
  ],
  alternates: { canonical: "/wheel" },
};

export default async function WheelPage({
  searchParams,
}: {
  searchParams: Promise<{ result?: string; players?: string; dex?: string }>;
}) {
  const sp = await searchParams;
  const resultView = sp.result === "1";
  const players = Number(sp.players);
  const dexes = (sp.dex || "")
    .split(",")
    .map((d) => Number(d.trim()))
    .filter((n) => !Number.isNaN(n) && n > 0);
  // result=1 & players & dex → a shared round: show the PK results,
  // not a fresh wheel to spin.
  const shared =
    resultView && players > 0 && dexes.length > 0
      ? { players, dexes: dexes.slice(0, 6) }
      : null;
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
      {!shared && (
  <GuideSteps
    className="mx-auto mb-6 max-w-[1100px] px-4"
    steps={[
      {
        n: "1",
        t: "Pick your players",
        d: "Choose 2-6 players — each one takes a turn spinning the wheel.",
      },
      {
        n: "2",
        t: "Spin & land",
        d: "Every spin lands on a Pokémon and stacks into the round results below.",
      },
      {
        n: "3",
        t: "Battle & share",
        d: "Highest BST wins the round — share the result to challenge friends.",
      },
    ]}
  />
)}
<WheelGenerator initial={{ items }} shared={shared} />
      <RelatedTools current="/wheel" />
    </main>
  );
}
