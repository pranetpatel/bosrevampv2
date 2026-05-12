"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

const WORDS = ["People", "Work", "Teams", "Business"] as const;

export function CycleHeadline() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => {
      setI((n) => (n + 1) % WORDS.length);
    }, 2800);
    return () => window.clearInterval(t);
  }, [reduced]);

  const word = WORDS[reduced ? 0 : i];

  return (
    <span className="hero-cycle-word font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,9.25rem)] font-semibold leading-[1.4] tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.2)]">
      {word}
    </span>
  );
}
