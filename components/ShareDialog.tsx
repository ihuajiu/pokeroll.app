"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

/** Brand icon paths (Simple Icons + Font Awesome, MIT/CC-BY licensed). */
const ICONS: Record<string, { viewBox: string; d: string }> = {
  weibo: { viewBox: "0 0 512 512", d: "M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z" },
  wechat: { viewBox: "0 0 24 24", d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" },
  qq: { viewBox: "0 0 24 24", d: "M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673" },
  x: { viewBox: "0 0 24 24", d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  telegram: { viewBox: "0 0 24 24", d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
  facebook: { viewBox: "0 0 24 24", d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
};

const PLATFORMS = [
  { id: "weibo", label: "微博", color: "bg-[#e6162d] hover:bg-[#c50e1f]" },
  { id: "wechat", label: "微信", color: "bg-[#07c160] hover:bg-[#06ad56]" },
  { id: "qq", label: "QQ", color: "bg-[#12b7f5] hover:bg-[#0ea5e0]" },
  { id: "x", label: "X", color: "bg-neutral-900 hover:bg-neutral-700" },
  { id: "telegram", label: "Telegram", color: "bg-[#26a5e4] hover:bg-[#1f8fc7]" },
  { id: "facebook", label: "Facebook", color: "bg-[#1877f2] hover:bg-[#1264d1]" },
] as const;

type PlatformId = (typeof PLATFORMS)[number]["id"];

/** Direct share-intent URL per platform — opens the platform's own share
 *  page with the content prefilled (WeChat has no web intent; it uses QR). */
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
    case "qq":
      return `https://connect.qq.com/widget/shareqq/index.html?url=${u}&title=${ti}`;
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
 * Rich share component: a one-row row of brand icons (微博 / 微信 / QQ / X /
 * Telegram / Facebook) that jump straight to each platform's share page,
 * WeChat shows a QR to scan, and a one-tap copy link. On phones it prefers
 * the native share sheet.
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
        <div className="absolute bottom-full left-1/2 z-40 mb-2 w-auto -translate-x-1/2 rounded-2xl border border-poke-border bg-poke-surface px-4 py-3 shadow-xl">
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
              <div className="flex items-center justify-center gap-2.5">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    title={p.label}
                    aria-label={`Share to ${p.label}`}
                    onClick={() => jump(p.id)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition active:scale-95 ${p.color}`}
                  >
                    <svg
                      viewBox={ICONS[p.id].viewBox}
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d={ICONS[p.id].d} />
                    </svg>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={copy}
                className="mt-3 w-full rounded-xl border border-poke-border bg-poke-tint py-1.5 text-xs font-bold text-poke-ink transition hover:border-poke-red hover:text-poke-red"
              >
                {copied ? "Link copied!" : "Copy link"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
