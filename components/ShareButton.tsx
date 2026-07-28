"use client";

import { useState } from "react";

export default function ShareButton({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = `${window.location.origin}/?p=${name}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // clipboard may be unavailable; fall back to no-op
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-label="Copy share link"
      className="game-btn game-btn-ghost px-5 py-2.5"
    >
      {copied ? "Link copied!" : "Share"}
    </button>
  );
}
