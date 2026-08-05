"use client";

import { useState } from "react";

/**
 * One-tap share button.
 * - Phones/tablets: opens the native share sheet (navigator.share).
 * - Desktop: copies the link straight to the clipboard — no popup dialog —
 *   and flips the label to "Link copied!" so the user can paste it anywhere.
 */
export default function ShareButton({
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
  /** Optional caption — prepended to the link when copying. */
  text?: string;
  title?: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const href = url
      ? new URL(url, window.location.origin).toString()
      : window.location.href;
    // Primary pointer coarse = phone/tablet (native sheet); fine = desktop
    // (one-tap copy, no popup dialog).
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(pointer: coarse)").matches ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    // Native share sheet only where it's actually helpful (phones/tablets).
    // On desktop it opens a clunky system dialog, so copy directly instead.
    if (isMobile && typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: href });
        return;
      } catch {
        /* user dismissed the sheet — fall through to one-tap copy */
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
