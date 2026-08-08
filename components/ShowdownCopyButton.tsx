"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

/** Crossed-swords battle icon (lucide "swords") for the Showdown export. */
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
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" y1="19" x2="19" y2="13" />
      <line x1="16" y1="16" x2="20" y2="20" />
      <line x1="19" y1="21" x2="21" y2="19" />
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <line x1="5" y1="14" x2="9" y2="18" />
      <line x1="7" y1="17" x2="11" y2="21" />
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
  label,
  copiedLabel,
  className = "",
  title,
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
  const { dict } = useI18n();
  const labelText = label ?? dict.common.copySet;
  const copiedText = copiedLabel ?? dict.common.copied;
  const titleText = title ?? dict.common.copyShowdownSet;

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
        aria-label={done ? dict.common.showdownSetCopied : titleText}
        title={done ? dict.common.showdownSetCopiedBang : titleText}
        onClick={handleCopy}
      >
        {done ? checkIcon() : showdownIcon()}
      </button>
    );
  }

  return (
    <button type="button" className={className} onClick={handleCopy}>
      {done ? checkIcon() : showdownIcon()}
      <span>{done ? copiedText : labelText}</span>
      {badge && !done && (
        <span className="rounded-full bg-current/15 px-1.5 py-0.5 text-[10px] font-bold leading-none">
          {badge}
        </span>
      )}
    </button>
  );
}
