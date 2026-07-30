"use client";

import Link from "next/link";

/**
 * Hero teaser card for the Adventure platform pivot. Renders an *unwritten*
 * Adventure Manifest — dashed blanks, ??? values and six empty team dots —
 * so landing on /adventure feels like filling in this very form. Reuses the
 * .adventure-manifest style system (globals.css) for a consistent
 * teaser → manifest narrative across all four theme states.
 */
export default function HeroAdventureTeaser() {
  return (
    <div
      className="adventure-manifest adventure-teaser"
      style={{ ["--cc" as string]: "#ee3b3b" }}
    >
      <span className="am-ghost" aria-hidden="true">
        ?
      </span>
      <span className="at-stamp" aria-hidden="true">
        ?
      </span>

      <div className="am-meta">
        <span>
          <span className="am-dot" />
          Adventure Manifest
        </span>
        <span>Vol. ??</span>
      </div>

      <div className="am-hero">
        <div className="am-kicker">Trainer Profile</div>
        <div className="at-blank at-blank-lg" aria-hidden="true" />
        <div className="at-blank at-blank-sm" aria-hidden="true" />
      </div>

      <div className="am-grid">
        <div className="am-cell">
          <div className="am-k">Region</div>
          <div className="am-v">???</div>
        </div>
        <div className="am-cell">
          <div className="am-k">Challenge</div>
          <div className="am-v">???</div>
        </div>
        <div className="am-cell">
          <div className="am-k">Goal</div>
          <div className="am-v">???</div>
        </div>
      </div>

      <div className="am-foot">
        <span>Team · 6 unknown companions</span>
        <span className="am-team-dots" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} />
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
