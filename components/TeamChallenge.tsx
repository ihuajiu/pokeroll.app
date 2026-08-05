"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "@/components/HeroCard";
import type { Pokemon } from "@/lib/types";

function bstTotal(list: Pokemon[]) {
  return list.reduce((s, p) => s + (p.bst || 0), 0);
}

/**
 * Seeded Team Challenge. The seed in the URL always reproduces the exact
 * "challenge team" — share it and a friend sees the same lineup. The friend
 * (or anyone) can then roll their own team (?mine=), and the two squads are
 * compared by total BST to pick a winner.
 */
export default function TeamChallenge({
  challenger,
  yours,
  seed,
  count,
  resultView = false,
}: {
  challenger: Pokemon[];
  yours: Pokemon[] | null;
  seed: string;
  count: number;
  /** True when this page was opened as a shared result (label the mine team
   *  as "their team" instead of "your team" to avoid perspective ambiguity). */
  resultView?: boolean;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);

  const chBst = bstTotal(challenger);
  const myBst = yours ? bstTotal(yours) : null;
  // Neutral labels so the winner is clear in every context: the "challenge"
  // is the team in the shared link, the "challenger" is the one that rolled
  // against it (whoever is viewing, the wording stays the same).
  const mineLabel = resultView ? "Their team" : "Your team";
  const result =
    yours && myBst != null
      ? myBst > chBst
        ? resultView
          ? "Their team wins!"
          : "You win!"
        : myBst < chBst
          ? "The challenge wins!"
          : "It's a tie!"
      : null;

  const params = count !== 6 ? `&count=${count}` : "";

  async function challenge() {
    const url = `${window.location.origin}/team/challenge?seed=${seed}${params}`;
    const text = `I rolled this team of ${challenger.length} with PokeRoll — can you beat it?`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Team Challenge", text, url });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard?.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function shareResult() {
    if (yours == null || myBst == null) return;
    // The URL carries both seeds, so the link reproduces this exact matchup
    // and the same winner for whoever opens it.
    const url = new URL(window.location.href);
    url.searchParams.set("result", "1");
    const href = url.toString();
    const text =
      myBst > chBst
        ? `My team (${myBst} BST) beat the challenge team (${chBst} BST) on PokeRoll — can you beat mine?`
        : myBst < chBst
          ? `The challenge team (${chBst} BST) beat my team (${myBst} BST) on PokeRoll — think you can do better?`
          : `It's a tie — ${myBst} BST each on PokeRoll Team Challenge!`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Team Challenge Result", text, url: href });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard?.writeText(`${text}\n${href}`);
      setResultCopied(true);
      setTimeout(() => setResultCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  function rollMine() {
    router.push(
      `/team/challenge?seed=${seed}&mine=${Math.random().toString(36).slice(2, 10)}${params}`,
    );
  }

  const steps = [
    { n: "1", t: "Roll a team", d: "That's the lineup you'll challenge with." },
    { n: "2", t: "Share the link", d: "A friend opens the exact same team." },
    { n: "3", t: "They roll & compare", d: "Total BST decides who wins." },
  ];

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      {/* How to play */}
      <div className="mb-6 grid gap-3 rounded-2xl border border-poke-border bg-poke-surface p-5 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-poke-btn text-sm font-extrabold text-white">
              {s.n}
            </span>
            <div>
              <div className="text-sm font-bold text-poke-ink">{s.t}</div>
              <div className="text-xs text-poke-dim">{s.d}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Result banner */}
      {yours && myBst != null && result && (
        <div className="mb-6 rounded-2xl border border-poke-red/40 bg-poke-surface px-6 py-5 text-center shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold">
            <span className="text-poke-ink">
              {mineLabel} <span className="text-poke-red">{myBst} BST</span>
            </span>
            <span className="text-poke-dim">vs</span>
            <span className="text-poke-ink">
              The challenge <span className="text-poke-red">{chBst} BST</span>
            </span>
          </div>
          <p className="mt-2 text-lg font-extrabold text-poke-red">{result}</p>
          <p className="mt-1 text-xs text-poke-dim">Higher total base stats wins.</p>
          <button
            onClick={shareResult}
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-poke-btn px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            {resultCopied ? "Link copied!" : "Share the result"}
          </button>
        </div>
      )}

      {/* Challenge team */}
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
          🏳️ The challenge · {chBst} BST
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {challenger.map((p) => (
            <HeroCard key={p.dexNumber} pokemon={p} showActions={false} variant="team" />
          ))}
        </div>
      </div>

      {/* Your team */}
      {yours && myBst != null && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            🫵 {mineLabel} · {myBst} BST
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {yours.map((p) => (
              <HeroCard key={p.dexNumber} pokemon={p} showActions={false} variant="team" />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={challenge}
          className="rounded-xl bg-poke-btn px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-poke-btnHover"
        >
          {copied ? "Link copied!" : "Challenge a friend"}
        </button>
        <button
          onClick={rollMine}
          className="rounded-xl border border-poke-border bg-poke-surface px-6 py-3 text-sm font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
        >
          {yours ? "Re-roll my team" : "Roll my team"}
        </button>
      </div>
    </div>
  );
}
