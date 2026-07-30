import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import PageHeader from "@/components/PageHeader";
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
    <main className="pt-6 pb-10">
      <PageHeader
        title={`Random ${r} Pokémon Generator`}
        description={`Explore the Pokémon of ${r}${game ? `, featured in Pokémon ${game}` : ""}. Here's one for you — tap Generate Again for another.`}
      />
      <FilteredGenerator query={`region=${region}`} initial={initial} />
      <SeoNav current={{ type: "region", value: region }} />
    </main>
  );
}
