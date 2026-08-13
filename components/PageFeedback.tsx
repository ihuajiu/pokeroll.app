"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/components/Analytics";
import { useI18n } from "@/components/I18nProvider";

type Rating = "like" | "dislike";

// Per-session dedupe: one vote per page per visit — the prompt resets on a
// new session so every service usage can be rated again. (v1 used
// localStorage with a permanent lock; s1 keeps old votes from leaking.)
const STORAGE_PREFIX = "pokeFeedback:s1:";

/** One-tap like/dislike satisfaction widget for tool pages. A visitor can
 *  rate the tool on every usage: one vote per page per browsing session
 *  (sessionStorage — a new session can vote again). Votes are reported to
 *  GA4 as page_feedback events (production host only — see trackEvent). */
export default function PageFeedback({ pageKey }: { pageKey: string }) {
  const { dict } = useI18n();
  const t = dict.pageFeedback;
  const [rating, setRating] = useState<Rating | null>(null);

  // Restore this session's vote for the page (resets on a new session so the
  // tool can be re-rated on every visit).
  useEffect(() => {
    try {
      const v = sessionStorage.getItem(STORAGE_PREFIX + pageKey);
      if (v === "like" || v === "dislike") setRating(v);
    } catch {
      // private mode / storage blocked — just skip persistence
    }
  }, [pageKey]);

  function vote(next: Rating) {
    if (rating) return;
    setRating(next);
    try {
      sessionStorage.setItem(STORAGE_PREFIX + pageKey, next);
    } catch {
      // ignore storage errors; the GA4 event still fires
    }
    trackEvent("page_feedback", { page_path: pageKey, rating: next });
  }

  const btnCls =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition " +
    (rating
      ? "border-poke-red/40 text-poke-red"
      : "border-poke-border text-poke-dim hover:border-poke-red hover:text-poke-red");

  return (
    <section
      aria-label={t.prompt}
      className="mx-auto w-full max-w-[1080px] px-4 pt-8 pb-10 text-center"
    >
      {rating ? (
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-poke-ink">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-poke-red"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {t.thanks}
        </div>
      ) : (
        <div>
          <p className="text-sm font-semibold text-poke-ink">{t.prompt}</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => vote("like")}
              aria-label={t.like}
              title={t.like}
              className={btnCls}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => vote("dislike")}
              aria-label={t.dislike}
              title={t.dislike}
              className={btnCls}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M17 14V2" />
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
