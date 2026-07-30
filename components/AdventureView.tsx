"use client";

import { useState } from "react";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
import { titleCase, REGION_GAME } from "@/lib/seo";
import { TYPE_HEX } from "@/lib/typeColors";
import {
  DIFFICULTIES,
  randomSeed,
  shareText,
  type Adventure,
} from "@/lib/adventure-types";

export default function AdventureView({
  initial,
}: {
  initial: Adventure;
}) {
  const { add, team, max } = useTeam();
  const [adventure, setAdventure] = useState<Adventure>(initial);
  const [difficulty, setDifficulty] = useState<string>(initial.difficulty);
  const [rolling, setRolling] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const a = adventure;

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  async function rollAgain(nextDifficulty: string = difficulty) {
    if (rolling) return;
    setRolling(true);
    const seed = randomSeed();
    try {
      const params = new URLSearchParams({ seed, difficulty: nextDifficulty });
      const res = await fetch(`/api/adventure?${params.toString()}`);
      if (!res.ok) throw new Error("roll failed");
      const next = (await res.json()) as Adventure;
      setAdventure(next);
      setDifficulty(next.difficulty);
      // Update URL without a full RSC navigation so [Share] stays correct.
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("seed", seed);
        url.searchParams.set("difficulty", next.difficulty);
        window.history.replaceState(null, "", url.toString());
      }
    } catch {
      /* keep current adventure on failure */
    } finally {
      setRolling(false);
    }
  }

  async function share() {
    const url =
      typeof window !== "undefined" ? window.location.href : "/adventure";
    const text = `${shareText(a)}\n${url}`;
    // Prefer the native social share sheet (mobile + supported desktops).
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "My Pokémon Adventure",
          text: shareText(a),
          url,
        });
        return;
      } catch {
        /* user dismissed the share sheet — fall through to clipboard */
      }
    }
    // Fallback: copy the full text + link to the clipboard.
    try {
      await navigator.clipboard?.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  function addAll() {
    const candidates = [a.starter, ...a.team].filter(Boolean);
    const inTeam = new Set(team.map((p) => p.dexNumber));
    const fresh = candidates.filter((p) => !inTeam.has(p.dexNumber));
    const slots = max - team.length;

    if (slots <= 0) {
      flash(`Team is full (${team.length}/${max}). Remove some to add new Pokémon.`);
      return;
    }
    if (fresh.length === 0) {
      flash("All these Pokémon are already in your team.");
      return;
    }
    // Only add up to the available slots — never overflow, which would
    // silently evict earlier team members via useTeam's slice(-max).
    const toAdd = fresh.slice(0, slots);
    toAdd.forEach((p) => add(p));
    const added = toAdd.length;
    if (added < fresh.length) {
      flash(`Added ${added} — team is now full (${max}/${max}).`);
    } else {
      flash(`Added ${added} to your team (${team.length + added}/${max}).`);
    }
  }

  return (
    <div>
      {/* Action bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-poke-dim">
          Seed <span className="font-mono">{a.seed}</span> — share this link to
          replay the exact same adventure.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-poke-dim">
            Difficulty
            <select
              value={difficulty}
              onChange={(e) => {
                const next = e.target.value;
                setDifficulty(next);
                // Roll immediately when difficulty changes to keep UI reactive.
                rollAgain(next);
              }}
              disabled={rolling}
              className="rounded-lg border border-poke-border bg-poke-surface px-2 py-1 text-sm font-medium text-poke-ink focus:border-poke-red focus:outline-none"
            >
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={addAll}
            className="rounded-xl bg-poke-btn px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover"
          >
            Add all to Team
            <span className="ml-1.5 rounded-full bg-white/20 px-1.5 text-xs leading-5">
              {team.length}/{max}
            </span>
          </button>
          <button
            type="button"
            onClick={share}
            className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            {copied ? "Copied!" : "Share Adventure"}
          </button>
          <button
            type="button"
            onClick={() => rollAgain()}
            disabled={rolling}
            className="rounded-xl bg-poke-red px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {rolling ? "Rolling…" : "Roll Again"}
          </button>
        </div>
      </div>

      {notice && (
        <div
          role="status"
          className="mb-4 rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5 text-sm font-medium text-poke-ink shadow-sm"
        >
          {notice}
        </div>
      )}

      {/* Adventure Manifest banner */}
      <div
        className="adventure-manifest mb-6"
        style={{ ["--cc" as string]: TYPE_HEX[a.starter.types[0]] ?? "#ee3b3b" }}
      >
        <span className="am-ghost" aria-hidden="true">
          {a.region.charAt(0).toUpperCase()}
        </span>

        <div className="am-meta">
          <span>
            <span className="am-dot" />
            Adventure Manifest
          </span>
          <span>Difficulty · {a.difficulty}</span>
          <span>Seed · {a.seed}</span>
        </div>

        <div className="am-hero">
          <div className="am-kicker">Trainer Profile</div>
          <h2 className="am-name">{a.trainer.name}</h2>
          <p className="am-role">
            <b>{a.trainer.role}</b>
            <span className="am-sep">/</span>
            <i>{a.trainer.style}</i>
          </p>
          <span className="am-style">Style · {a.trainer.style}</span>
        </div>

        <div className="am-grid">
          <div className="am-cell region">
            <div className="am-k">Region</div>
            <div className="am-v">
              {titleCase(a.region)}
              <small>{REGION_GAME[a.region] ?? "—"}</small>
            </div>
          </div>
          <div className="am-cell">
            <div className="am-k">Difficulty</div>
            <div className="am-v">{a.difficulty}</div>
          </div>
          <div className="am-cell">
            <div className="am-k">Challenge</div>
            <div className="am-v">{a.challenge}</div>
          </div>
          <div className="am-cell">
            <div className="am-k">Goal</div>
            <div className="am-v">{a.goal}</div>
          </div>
        </div>

        <div className="am-foot">
          <span>Team · {a.team.length} unknown companions</span>
          <span className="am-team-dots" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <i key={i} className={i < a.team.length ? "on" : ""} />
            ))}
          </span>
        </div>
      </div>

      {/* Starter */}
      {a.starter && (
        <div className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            Your Starter
          </h2>
          <div className="mx-auto max-w-[640px]">
            <HeroCard pokemon={a.starter} showActions />
          </div>
        </div>
      )}

      {/* Team */}
      {a.team.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            Your Team ({a.team.length})
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: "4px" }}
          >
            {a.team.map((p) => (
              <HeroCard
                key={p.dexNumber}
                pokemon={p}
                variant="team"
                showActions={false}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
