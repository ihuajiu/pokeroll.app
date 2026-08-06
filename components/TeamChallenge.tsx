"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "./useTeam";
import type { Pokemon } from "@/lib/types";
import { downloadTeamResult, type TeamResultCardData } from "@/lib/shareCard";
import TeamShowdownExport from "./TeamShowdownExport";
import ShowdownCopyButton from "./ShowdownCopyButton";


function bstTotal(list: Pokemon[]) {
  return list.reduce((s, p) => s + (p.bst || 0), 0);
}

function DetailedHowTo() {
  return (
    <div className="mt-12 rounded-2xl border border-poke-border bg-poke-surface p-6">
      <h2 className="text-base font-extrabold text-poke-ink">How to use the Team Challenge</h2>
      <ol className="mt-3 space-y-2 text-sm leading-relaxed text-poke-dim">
        <li>
          <strong className="text-poke-ink">1. The challenge team.</strong>{" "}
          This page always shows a seeded 6-Pokémon squad — everyone who opens the
          same link sees the exact same lineup (that's the "challenge").
        </li>
        <li>
          <strong className="text-poke-ink">2. Roll yours.</strong> Tap{" "}
          <em>Roll my team</em> to generate your own 6-Pokémon squad — one roll
          per challenge, so no retrying until you win.
        </li>
        <li>
          <strong className="text-poke-ink">3. Compare.</strong> Both teams are
          shown with their total base stats (BST) — the higher total wins, and
          ties are possible.
        </li>
        <li>
          <strong className="text-poke-ink">4. Share.</strong>{" "}
          <em>Challenge a friend</em> copies a link with the same challenge team,
          so a friend gets the identical lineup to try to beat.
        </li>
        <li>
          <strong className="text-poke-ink">5. Export the result.</strong>{" "}
          <em>Share the result card</em> or <em>Download card</em> creates an
          image of the matchup (with a QR code) — great for posting in your
          community.
        </li>
        <li>
          <strong className="text-poke-ink">6. Start your own.</strong>{" "}
          <em>Start your own challenge</em> makes you the host — you re-roll the
          challenge team and share it with a friend, instead of rolling against
          your own squad again.
        </li>
      </ol>
    </div>
  );
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
  isOwner = false,
}: {
  challenger: Pokemon[] | null;
  yours: Pokemon[] | null;
  seed?: string;
  count: number;
  /** True when this page was opened as a shared result (label the mine team
   *  as "their team" instead of "your team" to avoid perspective ambiguity). */
  resultView?: boolean;
  /** owner=1: the challenge creator's view — re-roll/share only, no self-PK. */
  isOwner?: boolean;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);
  const [cardBusy, setCardBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const { add, team: savedTeam, max } = useTeam();

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  /** Bulk-add a whole squad (skips ones already saved), like /team/random. */
  function addAll(squad: Pokemon[]) {
    const inTeam = new Set(savedTeam.map((p) => p.dexNumber));
    const fresh = squad.filter((p) => !inTeam.has(p.dexNumber));
    const slots = max - savedTeam.length;
    if (slots <= 0) {
      flash(`Team is full (${savedTeam.length}/${max}). Remove some first.`);
      return;
    }
    if (fresh.length === 0) {
      flash("All these Pokémon are already in your team.");
      return;
    }
    fresh.slice(0, slots).forEach((p) => add(p));
    flash(`Added ${Math.min(fresh.length, slots)} to your team.`);
  }

  // No seed yet = idle state: nothing is generated until the user clicks.
  if (!challenger) {
    const startParams = count !== 6 ? `&count=${count}` : "";
    return (
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface px-6 py-14 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-poke-chip text-4xl">
            ⚔️
          </div>
          <h2 className="mt-4 text-2xl font-extrabold text-poke-ink">
            Ready to start a Team Challenge?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-poke-dim">
            Click below to generate a random 6-Pokémon challenge team — then roll
            your own squad and see whose total base stats are higher.
          </p>
          <button
            onClick={() =>
              router.push(
                `/team/challenge?seed=${Math.random().toString(36).slice(2, 10)}&owner=1${startParams}`,
              )
            }
            className="game-btn game-btn-primary mt-6 px-8 py-4 text-base font-extrabold active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <g fill="currentColor" stroke="none">
                <circle cx="8.5" cy="8.5" r="1.4" />
                <circle cx="15.5" cy="8.5" r="1.4" />
                <circle cx="12" cy="12" r="1.4" />
                <circle cx="8.5" cy="15.5" r="1.4" />
                <circle cx="15.5" cy="15.5" r="1.4" />
              </g>
            </svg>
            Generate the challenge
          </button>
        </div>
        <DetailedHowTo />
      </div>
    );
  }

  const team = challenger;
  const chBst = bstTotal(team);
  // Lazy Showdown export for "Copy Both" — loads the moves dataset on demand.
  function loadBothText() {
    return import("@/lib/showdown").then((m) => {
      if (yours && yours.length) {
        return `${m.buildShowdownTeam(yours)}\n\n=== The challenge ===\n\n${m.buildShowdownTeam(team)}`;
      }
      return m.buildShowdownTeam(team);
    });
  }
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
    const url = `${window.location.origin}/team/challenge?seed=${seed ?? ""}${params}`;
    const text = `I rolled this team of ${team.length} with PokeRoll — can you beat it?`;
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

  // The result link carries both seeds + result=1, so it reproduces this
  // exact matchup and winner for whoever opens it.
  function resultHref(): string {
    const u = new URL(window.location.href);
    u.searchParams.set("result", "1");
    return u.toString();
  }

  function resultCardData(): TeamResultCardData | null {
    if (yours == null || myBst == null) return null;
    return {
      challenger: yours.map((p) => ({ name: p.displayName, img: p.artwork || p.sprite, bst: p.bst || 0 })),
      challenge: team.map((p) => ({ name: p.displayName, img: p.artwork || p.sprite, bst: p.bst || 0 })),
      chBst,
      myBst,
      result:
        myBst > chBst
          ? "THE CHALLENGER WINS!"
          : myBst < chBst
            ? "THE CHALLENGE WINS!"
            : "IT'S A TIE!",
      url: resultHref(),
    };
  }

  async function shareResult() {
    if (yours == null || myBst == null) return;
    const url = resultHref();
    const text =
      myBst > chBst
        ? `I beat the challenge team ${myBst}-${chBst} BST on PokeRoll Team Challenge — can you?`
        : myBst < chBst
          ? `The challenge team beat me ${chBst}-${myBst} BST on PokeRoll Team Challenge — think you can do better?`
          : `It's a tie — ${myBst} BST each on PokeRoll Team Challenge!`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Team Challenge Result", text, url });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard?.writeText(`${text}\n${url}`);
      setResultCopied(true);
      setTimeout(() => setResultCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function downloadResult() {
    if (cardBusy) return;
    const data = resultCardData();
    if (!data) return;
    setCardBusy(true);
    await downloadTeamResult(data);
    setCardBusy(false);
  }

  function rollMine() {
    router.push(
      `/team/challenge?seed=${seed ?? ""}&mine=${Math.random().toString(36).slice(2, 10)}${params}`,
    );
  }

  function rerollChallenge() {
    router.push(
      `/team/challenge?seed=${Math.random().toString(36).slice(2, 10)}&owner=1${params}`,
    );
  }

  // The responder gets one roll per challenge; to try again they start a
  // fresh challenge instead of re-rolling the same one until they win.
  function startNewChallenge() {
    router.push(`/team/challenge?seed=${Math.random().toString(36).slice(2, 10)}&owner=1${params}`);
  }

  const steps = [
    { n: "1", t: "Roll a team", d: "That's the lineup you'll challenge with." },
    { n: "2", t: "Share the link", d: "A friend opens the exact same team." },
    { n: "3", t: "They roll & compare", d: "Total BST decides who wins — export either team to Showdown." },
  ];

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4">
      {notice && (
        <p role="status" className="mb-3 text-center text-sm font-medium text-poke-ink">
          {notice}
        </p>
      )}
      {/* Take the challenge — primary action first */}
      <div className="mb-6 rounded-2xl border border-poke-border bg-poke-surface px-6 py-6 text-center shadow-sm">
        <h2 className="text-xl font-extrabold text-poke-ink">
          {isOwner
            ? "Your challenge team is ready"
            : yours
              ? "Here's your shot — try to beat it!"
              : "Take the challenge — roll your team"}
        </h2>
        <p className="mt-1 text-sm text-poke-dim">
          {isOwner
            ? "Share the link — a friend rolls their own team to try to beat this one."
            : yours
              ? "One roll per challenge — start your own challenge to share with a friend."
              : "You get 6 random Pokémon — higher total base stats than the challenge team wins."}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={isOwner ? rerollChallenge : yours ? startNewChallenge : rollMine}
            className="game-btn game-btn-primary px-8 py-3.5 text-base font-extrabold active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <g fill="currentColor" stroke="none">
                <circle cx="8.5" cy="8.5" r="1.4" />
                <circle cx="15.5" cy="8.5" r="1.4" />
                <circle cx="12" cy="12" r="1.4" />
                <circle cx="8.5" cy="15.5" r="1.4" />
                <circle cx="15.5" cy="15.5" r="1.4" />
              </g>
            </svg>
            {isOwner
              ? "Re-roll challenge"
              : yours
                ? "Start your own challenge"
                : "Roll my team"}
          </button>
          <button
            onClick={challenge}
            className="game-btn game-btn-ghost px-6 py-3.5 text-sm font-bold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            {copied ? "Link copied!" : "Challenge a friend"}
          </button>
        </div>
      </div>

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

      {/* Challenge team */}
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
          {isOwner ? "🫵 Your challenge team" : "🏳️ The challenge"} · {chBst} BST
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((p) => (
            <HeroCard key={p.dexNumber} pokemon={p} showActions={false} variant="team" />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
          <TeamShowdownExport team={team} />
          <button
            type="button"
            onClick={() => addAll(team)}
            className="game-btn game-btn-primary px-4 py-2 text-sm font-semibold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add all to Team
          </button>
        </div>
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
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={shareResult}
            className="game-btn game-btn-primary px-5 py-2.5 text-sm font-bold"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            {cardBusy
              ? "Rendering…"
              : resultCopied
                ? "Link copied!"
                : "Share result"}
          </button>
          <button
            onClick={downloadResult}
            disabled={cardBusy}
            className="game-btn game-btn-ghost px-5 py-2.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download card
          </button>
          <ShowdownCopyButton
            getText={loadBothText}
            label="Copy Both Sets"
            badge="Showdown"
            copiedLabel="Both copied!"
            title="Copy both teams as Showdown sets"
            className="game-btn game-btn-ghost px-5 py-2.5 text-sm font-bold"
          />
          </div>
        </div>
      )}

      {/* Your team */}
      {yours && myBst != null && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            🫵 {mineLabel} · {myBst} BST
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {yours.map((p) => (
              <HeroCard key={p.dexNumber} pokemon={p} showActions={false} variant="team" />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
            <TeamShowdownExport team={yours} />
            <button
              type="button"
              onClick={() => addAll(yours)}
              className="game-btn game-btn-primary px-4 py-2 text-sm font-semibold"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add all to Team
            </button>
          </div>
        </div>
      )}

      {/* Detailed how-to */}
      <DetailedHowTo />
    </div>
  );
}
