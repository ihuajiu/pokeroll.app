"use client";

import { useState } from "react";

/**
 * Share button. Uses the OS-native share sheet when the platform exposes
 * it (mobile + desktop). If native share is unavailable or fails (e.g.
 * in-app browsers like WeChat), a small fallback sheet pops up with a
 * one-tap copy link — so sharing always gives visible feedback.
 */
export default function ShareDialog({
  url,
  text,
  title = "PokeRoll",
  label = "Share",
  copiedLabel = "Link copied!",
  className = "",
}: {
  /** URL to share; relative paths are resolved against the origin.
   *  Defaults to the current page URL. */
  url?: string;
  /** Optional caption for the shared text. */
  text?: string;
  title?: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  function href() {
    if (typeof window === "undefined") return "";
    return url
      ? new URL(url, window.location.origin).toString()
      : window.location.href;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(text ? `${text}\n${href()}` : href());
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: href() });
        return;
      } catch (e) {
        // User dismissed the native sheet — don't bother them with a popup.
        if (e instanceof DOMException && e.name === "AbortError") return;
        // Any other failure → show the fallback sheet below.
      }
    }
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={share}
        className={"inline-flex items-center gap-1.5 " + (className || "")}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        )}
        <span>{copied ? copiedLabel : label}</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-poke-border bg-poke-surface p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-center text-sm font-extrabold text-poke-ink">Share</h3>
            <p className="mt-3 truncate rounded-lg border border-poke-border bg-poke-tint px-3 py-2 font-mono text-xs text-poke-dim">
              {href()}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  copyLink();
                  setTimeout(() => setOpen(false), 500);
                }}
                className="flex-1 rounded-xl bg-poke-btn px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-poke-btnHover"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-poke-border bg-poke-surface px-4 py-2.5 text-sm font-semibold text-poke-ink transition hover:border-poke-red hover:text-poke-red"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
