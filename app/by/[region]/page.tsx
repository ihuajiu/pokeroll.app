import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import { getPoolByRegion, getRandomPokemon } from "@/lib/pokeapi";
import { REGION_GAME, titleCase } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  return {
    title: `${r} Pokémon Generator — Random ${r} Pokémon`,
    description: `Generate a random ${r} Pokémon${
      game ? ` from Pokémon ${game}` : ""
    } instantly: name, type, ability, base stats, generation and sprite. Fan-made tool.`,
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const r = titleCase(region);
  const game = REGION_GAME[region] ?? "";
  const pool = await getPoolByRegion(region);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();

  return (
    <main>
      <h1 className="mb-2 text-center text-2xl font-bold text-poke-ink">
        Random {r} Pokémon Generator
      </h1>
      <p className="mb-6 text-center text-sm text-poke-dim">
        Explore the Pokémon of {r}
        {game ? `, featured in Pokémon ${game}` : ""}. Here&apos;s one for you —
        tap Generate Again for another.
      </p>
      <FilteredGenerator query={`region=${region}`} initial={initial} />
      <SeoNav current={{ type: "region", value: region }} />
      <AffiliateStrip />
    </main>
  );
}
