import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VariantGenerator from "@/components/VariantGenerator";
import RelatedTools from "@/components/RelatedTools";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import { getVariant, getRandomPokemon, getStarters } from "@/lib/pokeapi";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";

export const dynamic = "force-dynamic";

type VariantKey =
  | "type"
  | "ability"
  | "move"
  | "bst"
  | "number"
  | "starter"
  | "no-names"
  | "cute"
  | "mythical"
  | "mega"
  | "nickname";

const META: Record<
  VariantKey,
  { title: string; description: string; keywords: string[] }
> = {
  type: {
    title: "Random Pokémon Type Generator | PokeRoll",
    description:
      "Get a random Pokémon type and a matching Pokémon instantly — Fire, Water, Electric and all 18 types. Roll again for another, or copy your match to Showdown.",
    keywords: [
      "random pokemon type generator",
      "pokemon type generator",
      "random pokemon single type generator",
    ],
  },
  ability: {
    title: "Random Pokémon Ability Generator | PokeRoll",
    description:
      "Roll a random Pokémon ability like Static or Blaze and see a Pokémon that has it — check its full stats and typing, then copy the set to Showdown.",
    keywords: [
      "pokemon ability generator",
      "random pokemon ability generator",
      "generate random pokemon ability",
    ],
  },
  move: {
    title: "Random Pokémon Move Generator | PokeRoll",
    description:
      "Discover a random Pokémon move and a Pokémon that can learn it — check its power, accuracy and typing, then copy the set to Showdown. Fan-made tool.",
    keywords: ["random pokemon move generator", "pokemon move generator"],
  },
  bst: {
    title: "Random Pokémon Stats Generator (BST) | PokeRoll",
    description:
      "Generate a random Base Stat Total and reveal the Pokémon it belongs to — compare its six stats, roll again, then copy it to Showdown. Fan-made tool.",
    keywords: [
      "random pokemon stats generator",
      "random pokemon generator with stats",
      "pokemon random generator stats",
    ],
  },
  number: {
    title: "Random Pokémon Number Generator | PokeRoll",
    description: "Roll a random Pokédex number from 1 to 1025 and reveal which Pokémon it is — see its full card, then copy it to Showdown. Free fan-made tool.",
    keywords: [
      "pokemon number generator",
      "random pokemon number generator",
    ],
  },
  starter: {
    title: "Random Starter Pokémon Generator | PokeRoll",
    description:
      "Pick a random starter Pokémon from the first partners of every generation, from Kanto to Paldea — then copy it to Showdown. Free fan-made tool.",
    keywords: [
      "random starter pokemon generator",
      "pokemon starter generator",
      "random starter pokemon picker",
    ],
  },
  "no-names": {
    title: "Random Pokémon Generator Without Names — Guessing Game",
    description:
      "A mystery Pokémon with its name hidden — can you guess which one it is from its artwork and stats? Flip the card to reveal the Showdown set.",
    keywords: [
      "pokemon without names",
      "guess the pokemon",
      "pokemon mystery quiz",
      "random pokemon generator without names",
    ],
  },
  cute: {
    title: "Random Cute Pokémon Generator | PokeRoll",
    description:
      "Get a random cute Pokémon — soft, fluffy and adorable picks from across the whole Pokédex. Roll again for another cutie, or copy it to Showdown.",
    keywords: ["cute pokemon generator", "random cute pokemon generator"],
  },
  mythical: {
    title: "Random Mythical Pokémon Generator | PokeRoll",
    description:
      "Reveal a random Mythical Pokémon like Mew, Celebi or Jirachi — rare picks from across every generation, ready to copy to Showdown. Fan-made tool.",
    keywords: [
      "random mythical pokemon generator",
      "mythical pokemon generator",
    ],
  },
  mega: {
    title: "Random Mega Pokémon Generator | PokeRoll",
    description: "Spin a random Mega Evolution or Primal Reversion Pokémon — see its boosted stats and ability, then copy the set to Showdown. Free fan-made tool.",
    keywords: ["random mega pokemon generator", "mega pokemon generator"],
  },
  nickname: {
    title: "Random Pokémon Name & Nickname Generator | PokeRoll",
    description: "Generate a random Pokémon paired with a fun, cute nickname — perfect for your next playthrough or Nuzlocke. Copy the set to Showdown. Fan-made tool.",
    keywords: [
      "pokemon nickname generator",
      "random pokemon nickname generator",
      "generate random pokemon name",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  const m = META[variant as VariantKey] ?? META.type;
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: { canonical: `/${variant}` },
  };
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  if (!(variant in META)) notFound();

  const m = META[variant as VariantKey];
  const headerTitle = m.title.replace(/ \| PokeRoll$/, "");

  const tool = TOOLS.find((t) => t.href === `/${variant}`);
  const group = TOOL_GROUPS.find((g) => g.id === tool?.group);
  const crumbs = [
    { label: "Home", href: "/" },
    ...(group ? [{ label: group.title, href: "/#browse" }] : []),
    { label: tool?.label ?? headerTitle },
  ];

  if (variant === "starter") {
    const pokemon = await getRandomPokemon(getStarters());
    return (
      <main className="pt-6 pb-10">
        <Breadcrumbs items={crumbs} />
        <PageHeader title={headerTitle} description={m.description} />
        <VariantGenerator
          kind="starter"
          initial={{ kind: "starter", pokemon }}
        />
        <RelatedTools current={`/${variant}`} />
      </main>
    );
  }

  if (variant === "no-names") {
    const pokemon = await getRandomPokemon();
    return (
      <main className="pt-6 pb-10">
        <Breadcrumbs items={crumbs} />
        <PageHeader title={headerTitle} description={m.description} />
        <p className="mb-6 text-sm text-poke-dim">
          Want a seeded multi-card quiz to share?{" "}
          <Link
            href="/challenge/guess"
            title="Guess the Pokémon"
            className="font-semibold text-[#ee3b3b] underline underline-offset-2"
          >
            Try the Silhouette Challenge →
          </Link>
        </p>
        <VariantGenerator
          kind="no-names"
          initial={{ kind: "no-names", pokemon }}
          mode="no-names"
        />
        <RelatedTools current={`/${variant}`} />
      </main>
    );
  }

  const initial = await getVariant(variant);
  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs items={crumbs} />
      <PageHeader title={headerTitle} description={m.description} />
      <VariantGenerator kind={variant} initial={initial} />
      <RelatedTools current={`/${variant}`} />
    </main>
  );
}
