"use client";

import { SITE_MEDIA } from "@/lib/site-media";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

const SHOWCASE_SRC = "/video/bos-web-hero-v1.mp4";

/**
 * Full-length looped product video for below-the-fold sections (hero uses a short hero.mp4 clip).
 */
export function FlowShowcaseVideo() {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#0a1528] via-[#120a1f] to-[#0a0a0a] shadow-[0_24px_80px_rgba(26,83,253,0.18)]"
        role="img"
        aria-label="BOS interface preview (motion reduced)"
      />
    );
  }

  return (
    <figure className="mx-auto w-full max-w-5xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_24px_80px_rgba(26,83,253,0.22)]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "saturate(0.88) brightness(0.72)" }}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={SITE_MEDIA.heroPoster}
          aria-label="BOS web experience walkthrough"
        >
          <source src={SHOWCASE_SRC} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-4 text-center font-[family-name:var(--font-ui)] text-xs font-medium text-white/45">
        The web layer  -  intent in, execution out.
      </figcaption>
    </figure>
  );
}
