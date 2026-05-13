# BOS Marketing Site — Handoff brief (for Claude / any coding agent)

## What this is

- **Product**: BOS (Business Orchestration System) — GenieAI positioning: one intelligent layer that **executes** instead of fragmenting work across tools.
- **Codebase**: Next.js App Router app in this folder (`bos-marketing`), React 19, **Tailwind CSS v4**, TypeScript.
- **North-star UX**: Immersive marketing narrative similar in **rhythm** to [Capsules by Moyra](https://capsules.moyra.co/) — **large type, sparse copy, scroll-driven reveals**, chapter-like sections, visual weight over paragraphs. Not a documentation page.

## Brand / visual tokens

- Defined in [`app/globals.css`](app/globals.css):
  - **Orchid Blue** `#1A53FD` (`--orchid`, legacy `--purple` maps here)
  - **Purple Pink** `#DA34F1` (`--magenta`)
  - **Cyan** `#04D1E0` (`--cyan`)
  - **Hot Pink** `#FE375E` (`--hot`, rare)
  - **Dark** `#0A0A0A` (`--surface-dark`, default **`--background`** site shell), **raised** `#111118` (`--surface-raised` for alternating sections). **Cream** `#F7F7F5` (`--color-bos-cream`) reserved for rare light-on-dark accents, not page chrome.
- **Gradients**: analogous only (magenta → orchid → cyan). No gold / no yellow–purple complements.
- **Typography** ([`app/layout.tsx`](app/layout.tsx)): **Jura** weight 600 for headlines (`--font-jura` / `--font-display`); **Plus Jakarta Sans** for UI and body (`--font-plus-jakarta` / `--font-sans`, `--font-ui`). Bebas / Space Grotesk / Inter removed from the default stack.
- **Hero video**: [`components/hero-video.tsx`](components/hero-video.tsx) → **`/video/hero.mp4`**, first **7s** loops as the background. **Full walkthrough**: [`components/flow-showcase-video.tsx`](components/flow-showcase-video.tsx) in the **How it works** section → **`/video/bos-web-hero-v1.mp4`**. **Poster**: [`lib/site-media.ts`](lib/site-media.ts) → **`/media/hero-poster.png`**.
- **Chapter panels**: [`ChapterMediaPanel`](components/chapter-media-panel.tsx) + paths in [`lib/site-media.ts`](lib/site-media.ts); filenames documented in [`public/media/README.md`](public/media/README.md).
- **Canonical brand PDF**: [`docs/brand.pdf`](docs/brand.pdf) (copy from design when it changes; see [`docs/README.md`](docs/README.md)).
- **Accessibility**: Respect `prefers-reduced-motion` (`components/use-prefers-reduced-motion.ts`). Optional custom cursor: `components/optional-cursor.tsx`. Keep text contrast ≥ WCAG AA on accent buttons; chapter nav uses visible focus rings (`outline-[var(--orchid)]`).

- **Site nav** ([`components/site-nav.tsx`](components/site-nav.tsx)): home uses transparent bar over hero, then solid dark glass; inner routes pass **`alwaysSolid`** for a consistent dark header.

## Motion stack

- **Framer Motion** for scroll reveals (`components/motion-reveal.tsx`). Do not add GSAP unless pinned-scroll needs it.

## Information architecture (homepage)

| Anchor ID     | Intent |
|--------------|--------|
| `welcome`    | Full-viewport hero + video |
| `tension`    | Friction (sprawl) + interactive field/cards + “The gap” panel + bridge stats |
| `system`     | What BOS is + panel image + pillars |
| `flow`       | How it works — three steps |
| `manifesto`  | Tenets |
| `tribe`      | Audience |
| `close`      | Final CTA |

**Inner routes** (all use [`InnerPageShell`](components/inner-page-shell.tsx) pattern: `SiteNav` + `SiteFooter`):

| Route | Purpose |
|-------|---------|
| `/product` | Product modules overview |
| `/how-it-works` | Execution flow |
| `/mba` | BOS MBA program |
| `/resources` | Hub / playbooks entry |
| `/pricing` | Editions + stack value |
| `/demo` | Demo / video |
| `/manifesto` | Public manifesto |
| `/projects` | Case studies |
| `/compare` | vs stack / categories |
| `/technology` | Invention / category story |
| `/industry` | ICP / vertical |
| `/investors` | Investor narrative |
| `/partners` | Partner program |
| `/story` | Founder story |

## Media pipeline

1. Prompts: [`media-generation-prompt.txt`](media-generation-prompt.txt) (official palette, people-forward options).
2. Export to **`public/media/`** using exact names in [`lib/site-media.ts`](lib/site-media.ts).
3. **OG**: `og-social-human-ai-network.png` — referenced in root layout `metadata.openGraph.images`.

## Repo-specific rules

- Read `AGENTS.md` before assuming Next.js APIs.
- Prefer extending existing components.
- Large binaries: consider Git LFS or CDN for production.

## Execution goals

- Immersion: grain (`.section-grain`), Framer reveals, chapter rail (`components/chapter-nav.tsx`).
- Copy: headline-led; depth on inner pages.
