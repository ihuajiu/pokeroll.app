"use client";

import { useState } from "react";

/** Clipboard/copy icon for the Showdown set export action. */
export function showdownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function checkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function copyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the textarea fallback */
  }
  try {
    if (typeof document === "undefined") return false;
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * One-click "Copy Showdown" button. Accepts a ready `text` string or a lazy
 * `getText` loader (dynamic import) so the moves dataset stays out of the
 * initial bundle. Shows a checkmark + "Copied!" after a successful copy.
 */
export default function ShowdownCopyButton({
  text,
  getText,
  iconOnly = false,
  label = "Copy Set",
  copiedLabel = "Copied!",
  className = "",
  title = "Copy Showdown set",
  badge,
}: {
  text?: string;
  getText?: () => Promise<string> | string;
  iconOnly?: boolean;
  label?: string;
  copiedLabel?: string;
  className?: string;
  title?: string;
  /** Small tag shown after the label, e.g. "Showdown". */
  badge?: string;
}) {
  const [done, setDone] = useState(false);

  async function handleCopy() {
    const resolved = text ?? (await getText?.());
    if (!resolved) return;
    const ok = await copyText(resolved);
    if (ok) {
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    }
  }

  if (iconOnly) {
    return (
      <button
        type="button"
        className={className}
        aria-label={done ? "Showdown set copied" : title}
        title={done ? "Showdown set copied!" : title}
        onClick={handleCopy}
      >
        {done ? checkIcon() : showdownIcon()}
      </button>
    );
  }

  return (
    <button type="button" className={className} onClick={handleCopy}>
      {done ? checkIcon() : copyIcon()}
      <span>{done ? copiedLabel : label}</span>
      {badge && !done && (
        <span className="rounded-full bg-current/15 px-1.5 py-0.5 text-[10px] font-bold leading-none">
          {badge}
        </span>
      )}
    </button>
  );
}
