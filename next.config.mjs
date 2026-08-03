/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /shiny (simple generator variant) merged into the Shiny Hunt
      // challenge — the two pages read as duplicates.
      { source: "/shiny", destination: "/challenge/shiny", permanent: true },
      // The random generator tool moved to its canonical keyword URL;
      // query strings (?p= shared links) are preserved automatically.
      {
        source: "/random",
        destination: "/random-pokemon-generator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
