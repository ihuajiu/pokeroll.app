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
    title: "Random Pokémon Type Generator — Fan-made Tool",
    description:
      "Get a random Pokémon type and a matching Pokémon instantly. Fire, Water, Electric and all 18 types — copy your match to Showdown.",
    keywords: [
      "random pokemon type generator",
      "pokemon type generator",
      "random pokemon generator by type",
    ],
  },
  ability: {
    title: "Random Pokémon Ability Generator — Fan-made Tool",
    description:
      "Roll a random Pokémon ability (like Static or Blaze) and see a Pokémon that has it — then copy it to Showdown.",
    keywords: [
      "pokemon ability generator",
      "random pokemon ability generator",
    ],
  },
  move: {
    title: "Random Pokémon Move Generator — Fan-made Tool",
    description:
      "Discover a random Pokémon move and a Pokémon that can learn it — then copy the set to Showdown.",
    keywords: ["random pokemon move generator", "pokemon move generator"],
  },
  bst: {
    title: "Random Pokémon BST Generator — Fan-made Tool",
    description:
      "Generate a random Base Stat Total and the Pokémon it belongs to — then copy it to Showdown.",
    keywords: ["pokemon bst generator", "random pokemon stats generator"],
  },
  number: {
    title: "Random Pokémon Number Generator — Fan-made Tool",
    description: "Roll a random Pokédex number and reveal which Pokémon it is — then copy it to Showdown.",
    keywords: [
      "pokemon number generator",
      "random pokemon number generator",
    ],
  },
  starter: {
    title: "Random Starter Pokémon Generator — Fan-made Tool",
    description:
      "Pick a random starter Pokémon from the first partners of every generation — then copy it to Showdown.",
    keywords: [
      "random starter pokemon generator",
      "pokemon starter generator",
      "random starter pokemon picker",
    ],
  },
  "no-names": {
    title: "Pokémon Without Names — Guess the Pokémon",
    description:
      "A mystery Pokémon with its name hidden. Can you guess which one it is? Flip it for the Showdown set.",
    keywords: [
      "pokemon without names",
      "guess the pokemon",
      "pokemon mystery quiz",
    ],
  },
  cute: {
    title: "Random Cute Pokémon Generator — Fan-made Tool",
    description:
      "Get a random cute Pokémon — soft, fluffy and adorable picks from across the Pokédex — copy it to Showdown.",
    keywords: ["cute pokemon generator", "random cute pokemon generator"],
  },
  mythical: {
    title: "Random Mythical Pokémon Generator — Fan-made Tool",
    description:
      "Reveal a random Mythical Pokémon like Mew, Celebi, Jirachi and more — copy it to Showdown.",
    keywords: [
      "random mythical pokemon generator",
      "mythical pokemon generator",
    ],
  },
  mega: {
    title: "Random Mega Pokémon Generator — Fan-made Tool",
    description: "Spin a random Mega Evolution or Primal Reversion Pokémon — copy it to Showdown.",
    keywords: ["random mega pokemon generator", "mega pokemon generator"],
  },
  nickname: {
    title: "Pokémon Nickname Generator — Fan-made Tool",
    description: "Generate a random Pokémon paired with a fun, cute nickname — copy it to Showdown.",
    keywords: [
      "pokemon nickname generator",
      "random pokemon nickname generator",
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
  const headerTitle = m.title.replace(/ — Fan-made Tool$/, "");

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
