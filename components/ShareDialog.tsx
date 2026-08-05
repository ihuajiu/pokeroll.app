"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const PLATFORMS = [
  { id: "weibo", label: "微博", color: "bg-red-500 hover:bg-red-600" },
  { id: "qzone", label: "QQ空间", color: "bg-sky-500 hover:bg-sky-600" },
  { id: "wechat", label: "微信", color: "bg-green-500 hover:bg-green-600" },
  { id: "x", label: "X", color: "bg-neutral-900 hover:bg-neutral-700" },
  { id: "telegram", label: "Telegram", color: "bg-sky-600 hover:bg-sky-700" },
  { id: "facebook", label: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
] as const;

type PlatformId = (typeof PLATFORMS)[number]["id"];

/** Direct share-intent URL per platform — opens the site's own share page
 *  with the content prefilled (WeChat has no web intent; it uses QR). */
function platformHref(
  id: PlatformId,
  url: string,
  text: string,
  title: string,
): string | null {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text || title);
  const ti = encodeURIComponent(title);
  switch (id) {
    case "weibo":
      return `https://service.weibo.com/share/share.php?url=${u}&title=${t}`;
    case "qzone":
      return `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${u}&title=${ti}`;
    case "x":
      return `https://twitter.com/intent/tweet?text=${t}&url=${u}`;
    case "telegram":
      return `https://t.me/share/url?url=${u}&text=${t}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    default:
      return null;
  }
}

/**
 * Rich share component: opens a panel with per-platform buttons that jump
 * straight to that platform's share page (微博 / QQ空间 / 微信 QR / X /
 * Telegram / Facebook) plus one-tap copy. On phones it prefers the native
 * share sheet instead.
 */
export default function ShareDialog({
  url,
  text,
  title = "PokeRoll",
  label = "Share",
  className = "",
}: {
  /** URL to share; relative paths are resolved against the origin.
   *  Defaults to the current page URL. */
  url?: string;
  /** Optional caption for the shared text. */
  text?: string;
  title?: string;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [qr, setQr] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const href =
    typeof window === "undefined"
      ? ""
      : url
        ? new URL(url, window.location.origin).toString()
        : window.location.href;

  // Close the panel on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function openPanelOrNative() {
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(pointer: coarse)").matches ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    if (isMobile && typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url: href });
        return;
      } catch {
        /* user dismissed the native sheet — fall back to the panel */
      }
    }
    setQr(null);
    setOpen(true);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text ? `${text}\n${href}` : href);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function showQr() {
    try {
      setQr(await QRCode.toDataURL(href, { margin: 1, width: 180 }));
    } catch {
      setQr(null);
    }
  }

  function jump(id: PlatformId) {
    if (id === "wechat") {
      showQr();
      return;
    }
    const h = platformHref(id, href, text ?? "", title);
    if (h) window.open(h, "_blank", "noopener");
    setOpen(false);
  }

  return (
    <div className="relative inline-block" ref={ref}>
      <button type="button" onClick={openPanelOrNative} className={className}>
        {label}
      </button>

      {open && (
        <div className="absolute bottom-full left-1/2 z-40 mb-2 w-72 -translate-x-1/2 rounded-2xl border border-poke-border bg-poke-surface p-4 shadow-xl">
          {qr ? (
            <div className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qr}
                alt="WeChat QR code"
                width={180}
                height={180}
                className="mx-auto rounded-lg"
              />
              <p className="mt-2 text-xs text-poke-dim">
                Scan with WeChat to share
              </p>
              <button
                type="button"
                onClick={() => setQr(null)}
                className="mt-2 text-xs font-semibold text-poke-red hover:underline"
              >
                ← Back
              </button>
            </div>
          ) : (
            <>
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-poke-dim">
                Share to
              </p>
              <div className="grid grid-cols-3 gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => jump(p.id)}
                    className={`rounded-xl py-2 text-xs font-bold text-white transition ${p.color}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            type="button"
            onClick={copy}
            className="mt-3 w-full rounded-xl border border-poke-border bg-poke-tint py-2 text-xs font-bold text-poke-ink transition hover:border-poke-red hover:text-poke-red"
          >
            {copied ? "Link copied!" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
