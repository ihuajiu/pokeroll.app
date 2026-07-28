import Link from "next/link";
import { getPokemonById, getRandomPokemon } from "@/lib/pokeapi";
import PokemonGenerator from "@/components/PokemonGenerator";
import ToolsNav from "@/components/ToolsNav";
import SeoNav from "@/components/SeoNav";
import AffiliateStrip from "@/components/AffiliateStrip";
import { GroupIcon, JumpIcon } from "@/components/ToolIcons";
import { TOOLS, TOOL_GROUPS } from "@/lib/tools";

const FEATURED = [
  {
    href: "/fusion",
    label: "Fusion Tool",
    desc: "Fuse two Pokémon into a brand-new creature with combined stats.",
    cta: "Fuse now",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
  {
    href: "/challenge",
    label: "Challenge Maker",
    desc: "Build a shareable guess, collect or team challenge for a friend.",
    cta: "Make a challenge",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "/wheel",
    label: "Spin the Wheel",
    desc: "Let the spin of the wheel decide your next Pokémon.",
    cta: "Spin it",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l6 4" />
      </svg>
    ),
  },
];

const JUMP_TOOLS = [
  { href: "/", label: "Random", icon: "random" },
  { href: "/type", label: "By Type", icon: "type" },
  { href: "/fusion", label: "Fusion", icon: "fusion" },
  { href: "/wheel", label: "Wheel", icon: "wheel" },
  { href: "/challenge", label: "Challenge", icon: "challenge" },
  { href: "/card", label: "Card", icon: "card" },
];

export default async function HomeTool({ p }: { p?: string }) {
  const initial = p
    ? await getPokemonById(p).catch(() => getRandomPokemon())
    : await getRandomPokemon();

  return (
    <main>
      {/* Hero: two-column, with the live generator embedded */}
      <section className="mb-16">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-poke-btn to-poke-orange px-6 py-10 shadow-xl ring-1 ring-black/5 sm:px-10 lg:grid-cols-2 lg:py-14">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-poke-yellow/95">
              Welcome, Trainer!
            </p>
            <h1 className="mb-3 text-3xl font-extrabold text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
              Random Pokémon Generator
            </h1>
            <p className="mb-6 text-sm text-white/90 sm:text-base">
              Spin up a fully random Pokémon — name, type, ability, base stats
              and sprite — in a single tap.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="#tools"
                className="rounded-xl bg-white px-5 py-2.5 font-semibold text-poke-red shadow-sm transition hover:bg-white/90"
              >
                Browse all tools
              </Link>
              <Link
                href="#featured"
                className="rounded-xl border border-white/40 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                Featured play &rarr;
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <PokemonGenerator initial={initial} />
          </div>
        </div>
      </section>

      {/* Jump straight in: compact icon cards */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-poke-ink">Jump straight in</h2>
          <p className="mt-1 text-sm text-poke-dim">
            The most popular ways to roll a Pokémon.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {JUMP_TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group poke-card flex flex-col items-center gap-2 p-4 text-center transition duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-poke-red/10 text-poke-red">
                <JumpIcon name={t.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-poke-ink group-hover:text-poke-red">
                {t.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by category */}
      <section id="tools" className="mb-16 scroll-mt-24">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-poke-ink">
            Browse by category
          </h2>
          <p className="mt-1 text-sm text-poke-dim">
            17 ways to roll, fuse and challenge your squad.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_GROUPS.map((g) => {
            const count = TOOLS.filter((t) => t.group === g.id).length;
            const first = TOOLS.find((t) => t.group === g.id);
            return (
              <div
                key={g.id}
                className="flex flex-col rounded-2xl border border-poke-border bg-poke-surface p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-poke-red hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-poke-red/10 text-poke-red">
                    <GroupIcon group={g.id} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-poke-chip px-2.5 py-0.5 text-xs font-semibold text-poke-dim">
                    {count} tools
                  </span>
                </div>
                <h3 className="text-lg font-bold text-poke-ink">{g.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-poke-dim">
                  {g.desc}
                </p>
                <Link
                  href={first?.href ?? "/"}
                  className="mt-4 inline-block font-semibold text-poke-red hover:underline"
                >
                  Explore &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured play */}
      <section id="featured" className="mb-16 scroll-mt-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-poke-ink">
          Featured Play
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURED.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group flex flex-col poke-card p-6 transition duration-200 hover:-translate-y-0.5"
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-poke-red/10 text-poke-red">
                {f.icon}
              </span>
              <h3 className="text-lg font-bold text-poke-ink">{f.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-poke-dim">
                {f.desc}
              </p>
              <span className="mt-4 inline-block font-semibold text-poke-red group-hover:underline">
                {f.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SeoNav />
      <ToolsNav />
      <AffiliateStrip />
    </main>
  );
}
