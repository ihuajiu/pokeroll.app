"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

/** Brand icon paths (Simple Icons + Font Awesome, MIT/CC licensed). */
const ICONS: Record<string, { viewBox: string; d: string }> = {
  x: { viewBox: "0 0 24 24", d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  reddit: { viewBox: "0 0 24 24", d: "M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" },
  tumblr: { viewBox: "0 0 24 24", d: "M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z" },
  facebook: { viewBox: "0 0 24 24", d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
  telegram: { viewBox: "0 0 24 24", d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" },
  whatsapp: { viewBox: "0 0 24 24", d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" },
  pinterest: { viewBox: "0 0 24 24", d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" },
  linkedin: { viewBox: "0 0 24 24", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  email: {
    viewBox: "0 0 24 24",
    d: "M4 4h16a2 2 0 0 1 2 2v.6L12 13 2 6.6V6a2 2 0 0 1 2-2zm-2 5.1V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.1L12 15.5 2 9.1z",
  },
  weibo: { viewBox: "0 0 512 512", d: "M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z" },
  wechat: { viewBox: "0 0 24 24", d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" },
  qq: { viewBox: "0 0 24 24", d: "M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673" },
};

/** International-first, Chinese platforms at the back. */
const PLATFORMS: {
  id: string;
  label: string;
  color: string;
  scale?: number;
}[] = [
  { id: "x", label: "X", color: "bg-neutral-900 hover:bg-neutral-700" },
  { id: "reddit", label: "Reddit", color: "bg-[#ff4500] hover:bg-[#e03e00]" },
  { id: "tumblr", label: "Tumblr", color: "bg-[#36465d] hover:bg-[#2b3749]" },
  { id: "facebook", label: "Facebook", color: "bg-[#1877f2] hover:bg-[#1264d1]", scale: 1.35 },
  { id: "telegram", label: "Telegram", color: "bg-[#26a5e4] hover:bg-[#1f8fc7]", scale: 1.35 },
  { id: "whatsapp", label: "WhatsApp", color: "bg-[#25d366] hover:bg-[#1fbe59]" },
  { id: "pinterest", label: "Pinterest", color: "bg-[#bd081c] hover:bg-[#a30718]" },
  { id: "linkedin", label: "LinkedIn", color: "bg-[#0a66c2] hover:bg-[#0958a8]" },
  { id: "email", label: "Email", color: "bg-slate-500 hover:bg-slate-600" },
  { id: "weibo", label: "微博", color: "bg-[#e6162d] hover:bg-[#c50e1f]" },
  { id: "wechat", label: "微信", color: "bg-[#07c160] hover:bg-[#06ad56]" },
  { id: "qq", label: "QQ", color: "bg-[#12b7f5] hover:bg-[#0ea5e0]" },
];

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
    case "x":
      return `https://twitter.com/intent/tweet?text=${t}&url=${u}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${u}&title=${ti}`;
    case "tumblr":
      return `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${ti}&caption=${t}&content=${u}&canonicalUrl=${u}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case "telegram":
      return `https://t.me/share/url?url=${u}&text=${t}`;
    case "whatsapp":
      return `https://api.whatsapp.com/send?text=${t}%20${u}`;
    case "pinterest":
      return `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
    case "email":
      return `mailto:?subject=${ti}&body=${t}%0A${u}`;
    case "weibo":
      return `https://service.weibo.com/share/share.php?url=${u}&title=${t}`;
    case "qq":
      return `https://connect.qq.com/widget/shareqq/index.html?url=${u}&title=${ti}`;
    default:
      return null;
  }
}

/**
 * Rich share component: a one-row row of brand icons (international first,
 * Chinese at the back) that jump straight to each platform's share page;
 * WeChat shows a QR to scan, plus a one-tap copy link. On phones it prefers
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
        <div className="absolute bottom-full left-1/2 z-40 mb-2 -translate-x-1/2 rounded-2xl border border-poke-border bg-poke-surface px-3 py-3 shadow-xl"
          style={{ width: "max-content", maxWidth: "calc(100vw - 1.5rem)" }}>
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
              <div className="flex flex-wrap items-center justify-center gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    title={p.label}
                    aria-label={`Share to ${p.label}`}
                    onClick={() => jump(p.id)}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm transition active:scale-95 ${p.color}`}
                  >
                    <svg
                      viewBox={ICONS[p.id].viewBox}
                      fill="currentColor"
                      className="h-[18px] w-[18px]"
                      style={
                        p.scale
                          ? { transform: `scale(${p.scale})` }
                          : undefined
                      }
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
