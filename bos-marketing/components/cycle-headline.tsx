"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

const WORDS = ["Work"] as const;

const LONGEST = [...WORDS].reduce((a, b) => (b.length > a.length ? b : a));

const wordClass =
  "font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,9.25rem)] font-semibold leading-[1.4] tracking-tight";

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/**
 * Typewriter headline: holds, backspaces character-by-character, then types the next word.
 */
export function CycleHeadline() {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState<string>(WORDS[0]);
  const [cursorLit, setCursorLit] = useState(true);

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    let wordIndex = 0;

    const blink = window.setInterval(() => {
      setCursorLit((v) => !v);
    }, 520);

    const loop = async () => {
      await sleep(2200);
      while (!cancelled) {
        const current = WORDS[wordIndex];
        for (let n = current.length; n > 0 && !cancelled; n--) {
          setDisplay(current.slice(0, n - 1));
          await sleep(38 + Math.random() * 34);
        }
        wordIndex = (wordIndex + 1) % WORDS.length;
        const next = WORDS[wordIndex];
        for (let n = 1; n <= next.length && !cancelled; n++) {
          setDisplay(next.slice(0, n));
          await sleep(44 + Math.random() * 36);
        }
        await sleep(2000);
      }
    };

    void loop();

    return () => {
      cancelled = true;
      window.clearInterval(blink);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <span
        className={`${wordClass} text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]`}
      >
        {WORDS[0]}
      </span>
    );
  }

  return (
    <span className="relative inline-grid place-items-center">
      <span aria-hidden className={`${wordClass} invisible col-start-1 row-start-1`}>
        {LONGEST}
      </span>
      <span
        className={`${wordClass} col-start-1 row-start-1 text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]`}
        aria-live="polite"
        aria-atomic="true"
      >
        {display}
        <span
          className="ml-[0.06em] inline-block w-[0.07em] min-w-[3px] translate-y-[0.06em] bg-[var(--cyan)] align-middle transition-opacity duration-200"
          style={{
            height: "0.72em",
            opacity: cursorLit ? 1 : 0.2,
          }}
          aria-hidden
        />
      </span>
    </span>
  );
}
