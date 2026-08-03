import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChallengeIdeaRoller, {
  type ChallengeIdea,
} from "@/components/ChallengeIdeaRoller";
import PageHeader from "@/components/PageHeader";
import RelatedTools from "@/components/RelatedTools";
import { CHALLENGES } from "@/lib/adventure-types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pokémon Challenge Generator — Random Challenge Ideas",
  description:
    "Roll a random Pokémon challenge idea — Nuzlocke, Monotype, Wonder Locke and more, each with rules and a difficulty rating in one tap. Free fan-made tool.",
  keywords: [
    "pokemon challenge generator",
    "pokemon challenge ideas",
    "pokemon nuzlocke generator",
  ],
  alternates: { canonical: "/challenge" },
};

// Rules + difficulty for every challenge idea (names come from the shared
// CHALLENGES pool in adventure-types).
const CHALLENGE_INFO: Record<string, { desc: string; difficulty: string }> = {
  "Nuzlocke Challenge": {
    desc: "Catch only the first Pokémon you meet on each route — anything that faints is gone for good.",
    difficulty: "Hard",
  },
  "Hardcore Nuzlocke": {
    desc: "Nuzlocke rules, plus level caps and no items in battle. The classic gauntlet.",
    difficulty: "Extreme",
  },
  "Mono-Type Run": {
    desc: "Build your entire team from a single type — weaknesses and all.",
    difficulty: "Normal",
  },
  "No Healing Items": {
    desc: "Potions and status heals are banned. Pokémon Centers are your only lifeline.",
    difficulty: "Hard",
  },
  "Set Mode Only": {
    desc: "Battle strictly on Set mode — no free switch after every knockout.",
    difficulty: "Easy",
  },
  "Scramble Challenge": {
    desc: "Your party is re-rolled at every milestone. Adapt or perish.",
    difficulty: "Normal",
  },
  "Wonder Locke": {
    desc: "Every catch must be Wonder Traded away — you play whatever comes back.",
    difficulty: "Hard",
  },
  Egglocke: {
    desc: "Your team hatches from eggs instead of the wild. Surprise teammates only.",
    difficulty: "Normal",
  },
};

const IDEAS: ChallengeIdea[] = CHALLENGES.map((name) => ({
  name,
  desc: CHALLENGE_INFO[name]?.desc ?? "A fan-made ruleset to spice up your run.",
  difficulty: CHALLENGE_INFO[name]?.difficulty ?? "Normal",
}));

// The playable challenges live on their own pages (/challenge/guess and
// /challenge/shiny). A bare /challenge visit gets the idea generator below;
// legacy /challenge?mode=... links are 307-redirected in middleware.ts.
export default function ChallengeIndex() {
  const initialIndex = Math.floor(Math.random() * IDEAS.length);

  return (
    <main className="pt-6 pb-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Challenges", href: "/#browse" },
          { label: "Challenge Generator" },
        ]}
      />
      <PageHeader
        title="Pokémon Challenge Generator"
        description="One tap rolls a fan-made challenge ruleset — take it into your next playthrough, or play one of our instant challenges below."
      />

      <div className="mx-auto max-w-2xl">
        <ChallengeIdeaRoller ideas={IDEAS} initialIndex={initialIndex} />
      </div>

      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-poke-dim">
          Play a challenge now
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Link
            href="/challenge/guess"
            className="group flex flex-col gap-1 rounded-xl border border-poke-border bg-poke-surface p-4 transition hover:border-poke-violet"
          >
            <span className="text-lg" aria-hidden="true">
              🎯
            </span>
            <span className="text-sm font-semibold text-poke-ink group-hover:text-poke-violet">
              Guess the Pokémon
            </span>
            <span className="text-xs leading-snug text-poke-dim">
              Names hidden — guess from the silhouette, reveal to check.
            </span>
          </Link>
          <Link
            href="/challenge/shiny"
            className="group flex flex-col gap-1 rounded-xl border border-poke-border bg-poke-surface p-4 transition hover:border-poke-violet"
          >
            <span className="text-lg" aria-hidden="true">
              ✨
            </span>
            <span className="text-sm font-semibold text-poke-ink group-hover:text-poke-violet">
              Shiny Hunt
            </span>
            <span className="text-xs leading-snug text-poke-dim">
              How many encounters until your next shiny?
            </span>
          </Link>
        </div>
      </section>

      <RelatedTools current="/challenge" />
    </main>
  );
}
