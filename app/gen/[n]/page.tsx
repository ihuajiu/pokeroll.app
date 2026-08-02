import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import SeoNav from "@/components/SeoNav";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getPoolByGeneration, getRandomPokemon } from "@/lib/pokeapi";
import { GEN_REGION, REGION_GAME, titleCase } from "@/lib/seo";

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
  const region = GEN_REGION[gen];
  const game = region ? REGION_GAME[region] : undefined;
  const linkCls =
    "font-medium text-poke-violet underline underline-offset-2";

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Random Pokémon", href: "/random" },
          { label: `Generation ${gen}` },
        ]}
      />
      <PageHeader
        title={`Random Generation ${gen} Pokémon Generator`}
        description={`Generation ${gen} introduced many fan-favorite Pokémon. Here's a random one — tap Generate Again for more.`}
      />
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-poke-dim">
        Generation {gen}
        {region ? (
          <>
            {" "}
            introduced the{" "}
            <Link className={linkCls} href={`/by/${region}`}>
              {titleCase(region)} region
            </Link>
            {game ? ` and Pokémon ${game}` : ""}
          </>
        ) : null}
        . Roll one above, browse by{" "}
        <Link className={linkCls} href="/type">
          type
        </Link>
        , or go{" "}
        <Link className={linkCls} href="/random">
          fully random
        </Link>
        .
      </p>
      <FilteredGenerator query={`gen=${gen}`} initial={initial} />
      <SeoNav current={{ type: "gen", value: String(gen) }} />
    </main>
  );
}
