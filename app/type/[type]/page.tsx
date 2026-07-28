import type { Metadata } from "next";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import AffiliateStrip from "@/components/AffiliateStrip";
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
    <main>
      <h1 className="mb-2 text-center text-2xl font-bold text-poke-ink">
        Random {t}-type Pokémon Generator
      </h1>
      <p className="mb-6 text-center text-sm text-poke-dim">
        Looking for a random {t}-type Pokémon? Here&apos;s one — tap Generate
        Again for another.
      </p>
      <FilteredGenerator query={`type=${type}`} initial={initial} />
      <SeoNav current={{ type: "type", value: type }} />
      <AffiliateStrip />
    </main>
  );
}
