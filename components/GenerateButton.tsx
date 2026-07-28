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
      className="game-btn game-btn-primary px-5 py-2.5 disabled:cursor-not-allowed"
    >
      {loading ? "Generating…" : "Generate Again"}
    </button>
  );
}
