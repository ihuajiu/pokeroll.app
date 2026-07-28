"use client";

export default function GenerateButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-label="Generate another random Pokémon"
      className="rounded-xl bg-poke-btn px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-poke-btnHover disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Generating…" : "Generate Again"}
    </button>
  );
}
