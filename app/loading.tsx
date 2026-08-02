// Route-level loading UI shared by every page (Next wraps each route in
// Suspense with this fallback) — one consistent spinner instead of blank
// waits while server pages fetch their Pokémon.
export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-poke-border border-t-[#ee3b3b]" />
    </div>
  );
}
