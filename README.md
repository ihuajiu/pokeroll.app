# PokeRoll — Random Pokémon Generator & Adventure Platform

**Live site: [pokeroll.app](https://pokeroll.app)**

PokeRoll is a fan-made Pokémon toolbox. One tap rolls a random Pokémon with full
stats and official artwork — or a whole team of six, a challenge run, even an
entire adventure. Free, instant and shareable: every roll carries a seed or
`?p=` link, so sharing a result reproduces it exactly.

## Features

- **Random Pokémon Generator** (`/random-pokemon-generator`) — one-tap rolls
  from 1,000+ species with name, types, ability, base stats and artwork.
  Advanced filters: generation, region, type, legendary, starter.
- **Random Team Generator** (`/team/random`) — a ready-made squad of six with
  the same filter controls; save members to Your Team.
- **Pokémon Adventure** (`/adventure`) — rolls a full adventure: trainer class,
  region, starter, team, difficulty, challenge, gym journey, legendary
  encounter and goal. Seeded, reproducible, shareable.
- **Challenges** — Guess the Pokémon (`/challenge/guess`, silhouette quiz) and
  Shiny Hunt (`/challenge/shiny`, seeded 1-in-N encounter counter), both
  shareable with friends via seed links.
- **Generator catalog** — 36 programmatic SEO pages by type (`/type/fire`),
  region (`/by/kanto`) and generation (`/gen/1`), plus niche generators
  (ability, move, BST, starter, legendary, mega, mythical, nickname and more).
- **Share cards** — download any result as a PNG card with a QR code that
  links back to the exact roll.
- **SEO-first** — per-page metadata, canonical URLs, FAQPage JSON-LD,
  programmatic sitemap, single-hop 308 redirects for every legacy URL.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS 3 + a hand-rolled design system (`app/globals.css`)
- Local data layer: the full Pokédex is bundled as `data/pokedex.json`
  (~1.5 MB, sourced from [PokéAPI](https://pokeapi.co/)) — zero runtime
  network calls
- Canvas share-card rendering with `html-to-image` + `qrcode`
- Google Analytics 4

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Data Scripts

The Pokédex is committed to the repo (`data/pokedex.json`) and loaded from
disk at runtime, so no fetch is needed to run the site. To rebuild or extend
the dataset:

```bash
npm run fetch:pokedex                 # rebuild data/pokedex.json from PokéAPI
node scripts/fetch-shiny-artwork.mjs  # download shiny artwork into public/
node scripts/augment-size.mjs         # add height/weight fields to the dex
```

## Project Structure

```
app/                  # routes (App Router)
  random-pokemon-generator/
  team/random/        # random team of six
  adventure/          # seeded adventure generator
  challenge/          # guess + shiny hunt challenges
  gen/[n]/ by/[region]/ type/[type]/
                      # programmatic SEO pages
  api/                # roll endpoints (server-side seeded RNG)
components/           # UI (31 components)
lib/                  # data layer, RNG, share cards, SEO helpers
data/pokedex.json     # bundled Pokédex (runtime dependency)
scripts/              # one-time data fetchers
docs/                 # design docs and plans
```

## Environment Variables

| Variable   | Default                  | Purpose                     |
| ---------- | ------------------------ | --------------------------- |
| `SITE_URL` | `https://pokeroll.app`   | Canonical/OG/sitemap/robots |

## Deployment

Deployed on Vercel behind Cloudflare:

1. Import the repo into Vercel — no build settings needed.
2. Point the domain (CNAME to `cname.vercel-dns.com`, Cloudflare proxied).
3. Cloudflare SSL/TLS mode **Full (Strict)** + *Always Use HTTPS*.

Legacy URLs are handled at the edge: `/random` → 308
`/random-pokemon-generator`, `/shiny` → 301 `/challenge/shiny`,
`/challenge[?mode=…]` → 308 routed by `middleware.ts`.

## Disclaimer

Fan-made, unofficial project. Not affiliated with, endorsed by, or sponsored
by Nintendo, Game Freak or The Pokémon Company. Pokémon names, characters and
artwork are trademarks of their respective owners. Data from
[PokéAPI](https://pokeapi.co/).
