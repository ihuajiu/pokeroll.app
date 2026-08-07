import type { Metadata } from "next";
import Link from "next/link";
import FilteredGenerator from "@/components/FilteredGenerator";
import RelatedTools from "@/components/RelatedTools";
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
    title: `Random Pokémon Generator Gen ${gen} | PokeRoll`,
    description: `Generate a random Generation ${gen} Pokémon from the ${GEN_REGION[gen]} region: name, type, ability, base stats and sprite — copy it to Showdown. Fan-made tool.`,
    keywords: [
      `random pokemon generator gen ${gen}`,
      `gen ${gen} pokemon generator`,
    ],
    alternates: { canonical: `/gen/${gen}` },
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
          { label: "Random Pokémon", href: "/random-pokemon-generator" },
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
            <Link className={linkCls} title={`Browse ${region} region`} href={`/by/${region}`}>
              {titleCase(region)} region
            </Link>
            {game ? ` and Pokémon ${game}` : ""}
          </>
        ) : null}
        . Roll one above, browse by{" "}
        <Link className={linkCls} title="Type generator" href="/type">
          type
        </Link>
        , or go{" "}
        <Link className={linkCls} title="Random Pokémon Generator" href="/random-pokemon-generator">
          fully random
        </Link>
        .
      </p>
      <FilteredGenerator query={`gen=${gen}`} initial={initial} />
      <RelatedTools hrefs={["/random-pokemon-generator", "/starter", "/type", "/adventure"]} />
    </main>
  );
}
