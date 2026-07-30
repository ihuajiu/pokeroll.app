import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import PageHeader from "@/components/PageHeader";
import { getPoolByType, getRandomPokemon } from "@/lib/pokeapi";
import { titleCase } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const t = titleCase(type);
  return {
    title: `${t} Pokémon Generator — Random ${t}-type Pokémon`,
    description: `Generate a random ${t}-type Pokémon instantly: name, abilities, base stats, generation and sprite. Fan-made tool.`,
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const t = titleCase(type);
  const pool = await getPoolByType(type);
  const initial = pool.length ? await getRandomPokemon(pool) : await getRandomPokemon();

  return (
    <main className="pt-6 pb-10">
      <PageHeader
        title={`Random ${t}-type Pokémon Generator`}
        description={`Looking for a random ${t}-type Pokémon? Here's one — tap Generate Again for another.`}
      />
      <FilteredGenerator query={`type=${type}`} initial={initial} />
      <SeoNav current={{ type: "type", value: type }} />
    </main>
  );
}
