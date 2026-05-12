"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE_MEDIA } from "@/lib/site-media";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export function HeroVideo() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle Ken-Burns zoom as the hero scrolls away; opacity fades the video out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.42]);

  if (reduced) {
    return (
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a1528] via-[#120a1f] to-[#0a0a0a]"
        aria-hidden
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="hero-video-scrim absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ scale, opacity }}>
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "saturate(0.82) brightness(0.68)" }}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={SITE_MEDIA.heroPoster}
        >
          <source src="/video/bos-web-hero-v1.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
