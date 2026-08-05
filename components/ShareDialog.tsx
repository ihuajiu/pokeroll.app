"use client";

import { useState } from "react";

/**
 * Share button that always uses the OS-native share sheet (navigator.share)
 * — mobile and desktop alike. When the browser has no native share (e.g.
 * Firefox desktop) it falls back to one-tap clipboard copy with inline
 * feedback. No custom popup panel.
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

  async function share() {
    const href =
      typeof window === "undefined"
        ? ""
        : url
          ? new URL(url, window.location.origin).toString()
          : window.location.href;
    // Native share sheet whenever the platform exposes it.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: href });
        return;
      } catch {
        /* user dismissed the sheet — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(text ? `${text}\n${href}` : href);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button type="button" onClick={share} className={className}>
      {copied ? copiedLabel : label}
    </button>
  );
}
