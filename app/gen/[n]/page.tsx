import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import PageHeader from "@/components/PageHeader";
import { getPoolByGeneration, getRandomPokemon } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const gen = Number((await params).n);
  return {
    title: `Generation ${gen} Pokémon Generator — Random Gen ${gen} Pokémon`,
    description: `Generate a random Generation ${gen} Pokémon instantly: name, type, ability, base stats and sprite. Fan-made tool.`,
  };
}

export default async function GenPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const gen = Number(n);
  const pool = await getPoolByGeneration(gen);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title={`Random Generation ${gen} Pokémon Generator`}
        description={`Generation ${gen} introduced many fan-favorite Pokémon. Here's a random one — tap Generate Again for more.`}
      />
      <FilteredGenerator query={`gen=${gen}`} initial={initial} />
      <SeoNav current={{ type: "gen", value: String(gen) }} />
    </main>
  );
}
