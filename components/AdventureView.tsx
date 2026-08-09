"use client";

import { useEffect, useState } from "react";
import HeroCard from "@/components/HeroCard";
import { useTeam } from "@/components/useTeam";
import { useI18n } from "@/components/I18nProvider";
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
  const { dict, locale } = useI18n();
  const v = dict.adventureView;
  const [adventure, setAdventure] = useState<Adventure>(initial);
  const [difficulty, setDifficulty] = useState<string>(initial.difficulty);
  const [rolling, setRolling] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const a = adventure;

  // First visit without a seed: the server rolled with a fresh seed but the
  // URL has none, so a shared link would roll a different adventure. Sync the
  // seed (and difficulty) into the URL once on mount — same mechanism as
  // rollAgain, idempotent under Strict Mode.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("seed") !== initial.seed) {
      url.searchParams.set("seed", initial.seed);
      url.searchParams.set("difficulty", initial.difficulty);
      window.history.replaceState(null, "", url.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function flash(msg: string) {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2600);
  }

  async function rollAgain(nextDifficulty: string = difficulty) {
    if (rolling) return;
    setRolling(true);
    const seed = randomSeed();
    try {
      const params = new URLSearchParams({ seed, difficulty: nextDifficulty, locale });
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
      flash(
        v.teamFull
          .replace("{count}", String(team.length))
          .replace("{max}", String(max)),
      );
      return;
    }
    if (fresh.length === 0) {
      flash(v.alreadyInTeam);
      return;
    }
    // Only add up to the available slots — never overflow, which would
    // silently evict earlier team members via useTeam's slice(-max).
    const toAdd = fresh.slice(0, slots);
    toAdd.forEach((p) => add(p));
    const added = toAdd.length;
    if (added < fresh.length) {
      flash(
        v.addedFull
          .replace("{added}", String(added))
          .replace("{max}", String(max)),
      );
    } else {
      flash(
        v.addedToTeam
          .replace("{added}", String(added))
          .replace("{count}", String(team.length + added))
          .replace("{max}", String(max)),
      );
    }
  }

  return (
    <div>
      {/* Action bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-poke-dim">
          {v.seedLine.split("{seed}")[0]}
          <span className="font-mono">{a.seed}</span>
          {v.seedLine.split("{seed}")[1]}
        </p>
        <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
          <label className="flex items-center gap-2 text-sm text-poke-dim">
            {v.difficultyLabel}
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
            {v.addAllToTeam}
            <span className="ml-1.5 rounded-full bg-white/20 px-1.5 text-xs leading-5">
              {team.length}/{max}
            </span>
          </button>
          <button
            type="button"
            onClick={share}
            className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2 font-semibold text-poke-ink shadow-sm transition hover:border-poke-red hover:text-poke-red"
          >
            {copied ? dict.common.copied : v.shareAdventure}
          </button>
          <button
            type="button"
            onClick={() => rollAgain()}
            disabled={rolling}
            className="rounded-xl bg-poke-red px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {rolling ? dict.heroCard.rolling : v.rollAgain}
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
            {v.manifest}
          </span>
          <span>{v.manifestDifficulty.replace("{difficulty}", a.difficulty)}</span>
          <span>{v.manifestSeed.replace("{seed}", a.seed)}</span>
        </div>

        <div className="am-hero">
          <div className="am-kicker">{v.trainerProfile}</div>
          <h2 className="am-name">{a.trainer.name}</h2>
          <p className="am-role">
            <b>{a.trainer.role}</b>
            <span className="am-sep">/</span>
            <i>{a.trainer.style}</i>
          </p>
          <span className="am-style">{v.styleLine.replace("{style}", a.trainer.style)}</span>
        </div>

        <div className="am-grid">
          <div className="am-cell region">
            <div className="am-k">{dict.heroCard.region}</div>
            <div className="am-v">
              {titleCase(a.region)}
              <small>{REGION_GAME[a.region] ?? "—"}</small>
            </div>
          </div>
          <div className="am-cell">
            <div className="am-k">{v.challenge}</div>
            <div className="am-v">{a.challenge}</div>
          </div>
          <div className="am-cell">
            <div className="am-k">{v.goal}</div>
            <div className="am-v">{a.goal}</div>
          </div>
        </div>

        <div className="am-foot">
          <span>{v.teamCompanions.replace("{n}", String(a.team.length))}</span>
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
            {v.yourStarter}
          </h2>
          <div className="card-stage mx-auto flex max-w-[640px] justify-center">
            <HeroCard pokemon={a.starter} showActions variant="wide" favoritable />
          </div>
        </div>
      )}

      {/* Rival */}
      {a.rival && (
        <div className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            {v.yourRival}
          </h2>
          <div className="mx-auto mb-4 max-w-[640px] rounded-2xl border border-poke-border bg-poke-surface p-4 text-center shadow-sm">
            <p className="text-lg font-bold text-poke-ink">
              {a.rival.name} — {a.rival.title}
            </p>
            <p className="text-sm text-poke-dim">
              {v.rivalCounter
                .replace("{name}", a.rival.name)
                .replace("{type}", titleCase(a.rival.starter.types[0]))}
            </p>
          </div>
          <div className="card-stage mx-auto flex max-w-[640px] justify-center">
            <HeroCard
              pokemon={a.rival.starter}
              variant="wide"
                            favoritable
            />
          </div>
        </div>
      )}

      {/* Team */}
      {a.team.length > 0 && (
        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            {v.yourTeam.replace("{n}", String(a.team.length))}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {a.team.map((p) => (
              <HeroCard
                key={p.dexNumber}
                pokemon={p}
                variant="team"
                showActions={false}
                favoritable
              />
            ))}
          </div>
        </div>
      )}

      {/* Gym Journey */}
      {a.gymJourney && a.gymJourney.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            {v.gymJourney}
          </h2>
          <div className="rounded-2xl border border-poke-border bg-poke-surface p-4 shadow-sm">
            <ol className="grid grid-cols-4 gap-x-1 gap-y-6 sm:grid-cols-8 sm:gap-x-0">
              {a.gymJourney.map((g, i) => (
                <li
                  key={`${g.leader}-${i}`}
                  className="relative flex flex-col items-center text-center"
                  title={`${g.leader} — ${titleCase(g.type)} — ${g.badge}`}
                >
                  {/* connector from previous dot (breaks at each mobile row) */}
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className={`absolute -left-1/2 right-1/2 top-[7px] h-px bg-poke-border ${
                        i % 4 === 0 ? "hidden sm:block" : ""
                      }`}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative z-10 h-3.5 w-3.5 rounded-full ring-2 ring-poke-surface"
                    style={{
                      backgroundColor: TYPE_HEX[g.type] ?? "#a8a29e",
                    }}
                  />
                  <p className="mt-2 text-xs font-semibold leading-tight text-poke-ink">
                    {g.leader}
                  </p>
                  <p
                    className="text-[10px] font-medium uppercase tracking-wide"
                    style={{ color: TYPE_HEX[g.type] ?? "#a8a29e" }}
                  >
                    {g.type}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-poke-dim line-clamp-2">
                    {g.badge}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Legendary Encounter */}
      {a.legendary && (
        <div className="mt-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-poke-dim">
            {v.legendaryEncounter}
          </h2>
          <div className="mx-auto mb-4 max-w-[640px] rounded-2xl border border-poke-border bg-poke-surface p-4 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-poke-dim">
              {a.legendary.role}
            </p>
          </div>
          <div className="card-stage mx-auto flex max-w-[640px] justify-center">
            <HeroCard
              pokemon={a.legendary.pokemon}
              variant="wide"
              showActions={false}
              favoritable
            />
          </div>
        </div>
      )}
    </div>
  );
}
