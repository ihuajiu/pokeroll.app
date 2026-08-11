"use client";

import { useEffect, useRef, useState } from "react";
import {
  downloadWinnerCard,
  renderWinnerCard,
  type WinnerCardData,
} from "@/lib/shareCard";
import { useI18n } from "@/components/I18nProvider";

function shareUrl(kind: string, url: string, text: string): string | null {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);
  switch (kind) {
    case "x":
      return `https://twitter.com/intent/tweet?text=${t}&url=${u}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case "reddit":
      return `https://www.reddit.com/submit?url=${u}&title=${t}`;
    case "telegram":
      return `https://t.me/share/url?url=${u}&text=${t}`;
    case "whatsapp":
      return `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`;
    case "tumblr":
      return `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${u}&title=${t}`;
    default:
      return null;
  }
}

/** Full-screen celebratory confetti — golden/red bursts from the bottom,
 *  gravity fall + spin, three staggered volleys. Rendered above the modal. */
function CelebrationConfetti() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const box = canvas.parentElement;
    const W = box ? box.clientWidth : window.innerWidth;
    const H = box ? box.clientHeight : window.innerHeight;
    canvas.width = Math.max(1, W * DPR);
    canvas.height = Math.max(1, H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(DPR, DPR);

    const COLORS = [
      "#fbbf24",
      "#fde68a",
      "#ee3b3b",
      "#ffffff",
      "#22c55e",
      "#3b82f6",
      "#ec4899",
      "#f97316",
    ];
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rot: number;
      vr: number;
      life: number;
      decay: number;
    }[] = [];

    const volleys = [
      [W * 0.5, 0],
      [W * 0.18, 300],
      [W * 0.82, 600],
    ] as const;
    for (const [originX, delay] of volleys) {
      window.setTimeout(() => {
        for (let i = 0; i < 48; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.15;
          const speed = 7 + Math.random() * 10;
          particles.push({
            x: originX,
            y: H + 12,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 5 + Math.random() * 6,
            color: COLORS[(Math.random() * COLORS.length) | 0],
            rot: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.3,
            life: 1,
            decay: 0.006 + Math.random() * 0.009,
          });
        }
      }, delay);
    }

    let raf = 0;
    const start = performance.now();
    let prev = start;
    const tick = (t: number) => {
      const dt = Math.min(1.4, (t - prev) / 16.7);
      prev = t;
      ctx.clearRect(0, 0, W, H);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.26 * dt; // gravity
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.99;
        p.rot += p.vr * dt;
        p.life -= p.decay * dt;
        if (p.life <= 0 || p.y > H + 40) {
          particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (particles.length > 0 || t - start < 2400) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, W, H);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}

/** WINNER share modal: preview + Roll Again / Copy Image / Download / TCG
 *  Download + one-tap share links for overseas platforms. */
export default function WinnerPopup({
  data,
  open,
  onClose,
  cardPreview,
  onDownloadCard,
  onRollAgain,
  celebrate = true,
}: {
  data: WinnerCardData | null;
  open: boolean;
  onClose: () => void;
  /** Pre-rendered original (TCG) card image so users see what "Save card" gets. */
  cardPreview?: string | null;
  /** Downloads the original TCG card (needs the live card element). */
  onDownloadCard?: () => void;
  /** Re-rolls and closes the popup. */
  onRollAgain?: () => void;
  /** Fire the celebration confetti on open (roll flow only — the Share button
   *  opens the same popup but should stay quiet). */
  celebrate?: boolean;
}) {
  const { dict } = useI18n();
  const h = dict.heroCard;
  const [img, setImg] = useState<string | null>(null);
  const [renderedUrl, setRenderedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [imgCopied, setImgCopied] = useState(false);
  // WINNER card defaults to the light (day) style; users opt into dark via
  // the sun/moon toggle.
  const [dark, setDark] = useState(false);
  const [darkImg, setDarkImg] = useState<string | null>(null);
  const [showCardPreview, setShowCardPreview] = useState(false);

  useEffect(() => {
    if (!open || !data || data.preview) return; // preview pre-rendered
    let cancelled = false;
    if (renderedUrl !== data.url) {
      setImg(null);
      setRenderedUrl(data.url);
    }
    renderWinnerCard(data)
      .then((blob) => {
        if (cancelled) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (!cancelled) setImg(String(reader.result));
        };
        reader.readAsDataURL(blob);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [open, data, renderedUrl]);

  // Celebration confetti — re-randomized each time the popup opens.
  // Render the dark (night) variant on demand.
  useEffect(() => {
    if (!open || !data || !dark) return;
    let cancelled = false;
    setDarkImg(null);
    renderWinnerCard({ ...data, dark: true })
      .then((blob) => {
        if (cancelled) return;
        const reader = new FileReader();
        reader.onload = () => {
          if (!cancelled) setDarkImg(String(reader.result));
        };
        reader.readAsDataURL(blob);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [open, data, dark]);

  // Lock page scroll while the modal is open (hides the background
  // scrollbar behind the fixed overlay).
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !data) return null;
  const d = data; // narrowed const for closures

  const previewSrc = dark ? (darkImg ?? undefined) : (img ?? data.preview ?? undefined);
  const shareText = h.winnerShareText.replace("{name}", data.name);

  async function copyLink() {
    try {
      await navigator.clipboard?.writeText(d.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  }

  async function copyImage() {
    const src = previewSrc;
    if (!src) return;
    try {
      const blob = await (await fetch(src)).blob();
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      setImgCopied(true);
      setTimeout(() => setImgCopied(false), 1600);
    } catch {
      // ClipboardItem unsupported — fall back to downloading the image.
      await downloadWinnerCard(d);
    }
  }

  function openShare(kind: string) {
    const u = shareUrl(kind, d.url, shareText);
    if (u) window.open(u, "_blank", "noopener,noreferrer");
    else void copyLink(); // Instagram has no web share intent
  }

  const btnCls =
    "game-btn inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold";
  // Theme-consistent chrome: the popup follows its own day/night toggle.
  const chromeCls = dark
    ? "text-[#9aa3b5] hover:bg-white/10 hover:text-[#e8eaf0]"
    : "text-poke-dim hover:bg-poke-chip hover:text-poke-red";
  const ghostBtnCls = dark
    ? "border-[#3a4356] bg-white/5 text-[#e8eaf0] hover:bg-white/10"
    : "text-poke-ink hover:bg-poke-chip";
  const modalCls = dark
    ? "border border-[#2b3242] bg-[#161b28] text-[#e8eaf0]"
    : "bg-poke-surface text-poke-ink";
  // White circular badge so brand-colored icons (incl. dark X / Tumblr)
  // stay visible on the modal background.
  const iconCls =
    "flex h-9 w-9 items-center justify-center rounded-full transition hover:shadow " +
    (dark
      ? "border border-white/15 bg-[#232838]"
      : "border border-black/10 bg-white");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={h.winnerPopupTitle}
    >
      <div
        className={"relative max-h-[94vh] w-full max-w-4xl overflow-auto rounded-2xl p-4 shadow-2xl " + modalCls}
        onClick={(e) => e.stopPropagation()}
      >
        {celebrate ? <CelebrationConfetti /> : null}
        <button
          type="button"
          onClick={() => setDark((v) => !v)}
          aria-label={dark ? h.winnerLightMode : h.winnerDarkMode}
          title={dark ? h.winnerLightMode : h.winnerDarkMode}
          className={"absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg transition " + chromeCls}
        >
          {dark ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label={h.winnerClose}
          title={h.winnerClose}
          className={"absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg transition " + chromeCls}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {previewSrc ? (
          <img src={previewSrc} alt={data.name} className="w-full rounded-xl" />
        ) : (
          <div className="flex h-64 items-center justify-center text-poke-dim">
            {h.loading}
          </div>
        )}

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {onRollAgain ? (
            <button type="button" onClick={onRollAgain} className={btnCls + " game-btn-primary"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              {h.winnerRollAgain}
            </button>
          ) : null}
          <button type="button" onClick={() => void copyImage()} className={btnCls + " " + ghostBtnCls}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            {imgCopied ? h.winnerImageCopied : h.winnerCopyImage}
          </button>
          <button type="button" onClick={() => void downloadWinnerCard(dark ? { ...d, dark: true } : d)} className={btnCls + " " + ghostBtnCls}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            {h.winnerDownload}
          </button>
          {onDownloadCard ? (
            <div
              className="relative"
              onMouseEnter={() => setShowCardPreview(true)}
              onMouseLeave={() => setShowCardPreview(false)}
            >
              <button type="button" onClick={onDownloadCard} className={btnCls + " " + ghostBtnCls}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                {h.winnerTcgDownload}
              </button>
              {showCardPreview && cardPreview ? (
                <div className="absolute bottom-full right-0 z-10 mb-2 w-72">
                  <img
                    src={cardPreview}
                    alt={h.winnerOriginalCard}
                    className="w-full rounded-md shadow-xl"
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={"mt-4 border-t pt-3 " + (dark ? "border-[#2b3242]" : "border-poke-border")}>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <button type="button" aria-label="X" title="X" onClick={() => openShare("x")} className={iconCls} style={{ color: dark ? "#e8eaf0" : "#000000" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Z" /></svg>
            </button>
            <button type="button" aria-label="Facebook" title="Facebook" onClick={() => openShare("facebook")} className={iconCls} style={{ color: dark ? "#7aa7f5" : "#1877F2" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </button>
            <button type="button" aria-label="Reddit" title="Reddit" onClick={() => openShare("reddit")} className={iconCls} style={{ color: dark ? "#ff8a5c" : "#FF4500" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484 1.047 3.448 1.047.963 0 2.596-.19 3.446-1.047a.33.33 0 0 0 0-.462.331.331 0 0 0-.463 0c-.686.685-2.033.957-2.983.957-.951 0-2.297-.258-2.983-.958a.326.326 0 0 0-.234-.094z" /></svg>
            </button>
            <button type="button" aria-label="Telegram" title="Telegram" onClick={() => openShare("telegram")} className={iconCls} style={{ color: dark ? "#6ec8e8" : "#229ED9" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </button>
            <button type="button" aria-label="WhatsApp" title="WhatsApp" onClick={() => openShare("whatsapp")} className={iconCls} style={{ color: dark ? "#7de3a5" : "#25D366" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            </button>
            <button type="button" aria-label="LinkedIn" title="LinkedIn" onClick={() => openShare("linkedin")} className={iconCls} style={{ color: dark ? "#7ba7e0" : "#0A66C2" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
            </button>
            <button type="button" aria-label="Instagram" title="Instagram" onClick={() => void copyLink()} className={iconCls} style={{ color: dark ? "#f78ca8" : "#E4405F" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
            </button>
            <button type="button" aria-label="Tumblr" title="Tumblr" onClick={() => openShare("tumblr")} className={iconCls} style={{ color: dark ? "#93a4c0" : "#36465D" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0c.077 0 .133.034.133.106v6.103h5.875v3.538H10.13v7.658c0 1.483.629 3.586 3.518 3.586.953 0 2.166-.343 2.744-.704l.629 3.118c-.585.443-2.177 1.103-4.458 1.103z" /></svg>
            </button>
            <button
              type="button"
              aria-label={h.shareCopyLink}
              title={h.shareCopyLink}
              onClick={() => void copyLink()}
              className={iconCls + (dark ? " text-[#9aa3b5]" : " text-poke-dim")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </button>
          </div>
          {copied ? (
            <p className="mt-2 text-center text-xs font-semibold text-poke-red">
              {h.linkCopied}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
