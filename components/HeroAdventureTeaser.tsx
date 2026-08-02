"use client";

import Link from "next/link";

/**
 * Hero teaser card for the Adventure platform pivot. Renders a *filled*
 * sample Adventure Manifest — real-looking trainer, region, challenge, goal
 * and a full six-dot team — so visitors instantly see what one roll produces.
 * Reuses the .adventure-manifest style system (globals.css) for a consistent
 * teaser → manifest narrative across all four theme states.
 */
export default function HeroAdventureTeaser() {
  return (
    <div
      className="adventure-manifest adventure-teaser"
      style={{ ["--cc" as string]: "#ee3b3b" }}
    >
      <span className="am-ghost" aria-hidden="true">
        J
      </span>
      <span className="at-stamp" aria-hidden="true">
        SAMPLE
      </span>

      <div className="am-meta">
        <span>
          <span className="am-dot" />
          Adventure Manifest
        </span>
        <span>Difficulty · Normal</span>
      </div>

      <div className="am-hero">
        <div className="am-kicker">Trainer Profile</div>
        <h2 className="am-name">Mira</h2>
        <p className="am-role">
          <b>Ace Trainer</b>
          <span className="am-sep">/</span>
          <i>Tactical</i>
        </p>
        <span className="am-style">Style · Tactical</span>
      </div>

      <div className="am-grid">
        <div className="am-cell region">
          <div className="am-k">Region</div>
          <div className="am-v">
            Johto
            <small>Gold &amp; Silver</small>
          </div>
        </div>
        <div className="am-cell">
          <div className="am-k">Challenge</div>
          <div className="am-v">Nuzlocke Challenge</div>
        </div>
        <div className="am-cell">
          <div className="am-k">Goal</div>
          <div className="am-v">Become Champion</div>
        </div>
      </div>

      <div className="am-foot">
        <span>Team · 6 unknown companions</span>
        <span className="am-team-dots" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} className="on" />
          ))}
        </span>
      </div>

      <Link
        href="/adventure"
        className="btn-primary relative z-10 mt-5 w-full justify-center"
      >
        Roll Adventure
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
