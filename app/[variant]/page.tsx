import type { Metadata } from "next";
import VariantGenerator from "@/components/VariantGenerator";
import ToolsNav from "@/components/ToolsNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import { getVariant, getRandomPokemon, getStarters } from "@/lib/pokeapi";

export const dynamic = "force-dynamic";

type VariantKey =
  | "type"
  | "ability"
  | "move"
  | "bst"
  | "number"
  | "starter"
  | "shiny"
  | "no-names"
  | "cute"
  | "mythical"
  | "mega"
  | "nickname";

const META: Record<VariantKey, { title: string; description: string }> = {
  type: {
    title: "Random Pokémon Type Generator — Fan-made Tool",
    description:
      "Get a random Pokémon type and a matching Pokémon instantly. Fire, Water, Electric and all 18 types.",
  },
  ability: {
    title: "Random Pokémon Ability Generator — Fan-made Tool",
    description:
      "Roll a random Pokémon ability (like Static or Blaze) and see a Pokémon that has it.",
  },
  move: {
    title: "Random Pokémon Move Generator — Fan-made Tool",
    description:
      "Discover a random Pokémon move and a Pokémon that can learn it.",
  },
  bst: {
    title: "Random Pokémon BST Generator — Fan-made Tool",
    description:
      "Generate a random Base Stat Total and the Pokémon it belongs to.",
  },
  number: {
    title: "Random Pokémon Number Generator — Fan-made Tool",
    description: "Roll a random Pokédex number and reveal which Pokémon it is.",
  },
  starter: {
    title: "Random Starter Pokémon Generator — Fan-made Tool",
    description:
      "Pick a random starter Pokémon from the first partners of every generation.",
  },
  shiny: {
    title: "Random Shiny Pokémon Generator — Fan-made Tool",
    description: "Reveal a random shiny Pokémon with its alternate coloration.",
  },
  "no-names": {
    title: "Pokémon Without Names — Guess the Pokémon",
    description:
      "A mystery Pokémon with its name hidden. Can you guess which one it is?",
  },
  cute: {
    title: "Random Cute Pokémon Generator — Fan-made Tool",
    description:
      "Get a random cute Pokémon — soft, fluffy and adorable picks from across the Pokédex.",
  },
  mythical: {
    title: "Random Mythical Pokémon Generator — Fan-made Tool",
    description:
      "Reveal a random Mythical Pokémon like Mew, Celebi, Jirachi and more.",
  },
  mega: {
    title: "Random Mega Pokémon Generator — Fan-made Tool",
    description: "Spin a random Mega Evolution or Primal Reversion Pokémon.",
  },
  nickname: {
    title: "Pokémon Nickname Generator — Fan-made Tool",
    description: "Generate a random Pokémon paired with a fun, cute nickname.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  const m = META[variant as VariantKey] ?? META.type;
  return { title: m.title, description: m.description };
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  if (variant === "starter") {
    const pokemon = await getRandomPokemon(getStarters());
    return (
      <main>
        <VariantGenerator
          kind="starter"
          initial={{ kind: "starter", pokemon }}
        />
        <ToolsNav current={`/${variant}`} />
        <AffiliateStrip />
      </main>
    );
  }

  if (variant === "shiny" || variant === "no-names") {
    const pokemon = await getRandomPokemon();
    return (
      <main>
        <VariantGenerator
          kind={variant}
          initial={{ kind: variant, pokemon }}
          mode={variant === "shiny" ? "shiny" : "no-names"}
        />
        <ToolsNav current={`/${variant}`} />
        <AffiliateStrip />
      </main>
    );
  }

  const initial = await getVariant(variant);
  return (
    <main>
      <VariantGenerator kind={variant} initial={initial} />
      <ToolsNav current={`/${variant}`} />
      <AffiliateStrip />
    </main>
  );
}
