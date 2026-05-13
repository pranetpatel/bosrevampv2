# Site imagery

Files in this folder are wired through [`lib/site-media.ts`](../../lib/site-media.ts).

| File | Use |
|------|-----|
| `hero-poster.png` | Hero video poster (first paint) |
| `chapter-gap-fragmentation-unity.png` | Tension / “The gap” chapter; also **hero micro-card** still (CSS crop) |
| `chapter-system-coordination.png` | System / “What BOS is” chapter; **hero micro-card** still |
| `chapter-velocity-momentum.png` | Conviction / “Why it matters” chapter; **hero micro-card** still |
| `og-social-human-ai-network.png` | Open Graph + Twitter (`app/layout.tsx` metadata) |

Next.js Image optimization (`/_next/image`) automatically converts and serves images in WebP/AVIF based on browser support — no manual `.webp` copies needed.

### Sharpness

- **Source resolution:** Chapter panels should be **~2400px wide or larger** so wide layouts + `object-cover` are not upscaling a small PNG (upscaling always looks soft).
- **App config:** [`next.config.ts`](../../next.config.ts) allows higher `quality` values; [`ChapterMediaPanel`](../../components/chapter-media-panel.tsx) uses `quality={92}` and `sizes` tuned for retina. If you need **no** recompression for one asset, use a plain `<img>` or `next/image` with `unoptimized` (bigger downloads).
