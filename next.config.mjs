/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /shiny (simple generator variant) merged into the Shiny Hunt
      // challenge — the two pages read as duplicates.
      { source: "/shiny", destination: "/challenge/shiny", permanent: true },
    ];
  },
};

export default nextConfig;
