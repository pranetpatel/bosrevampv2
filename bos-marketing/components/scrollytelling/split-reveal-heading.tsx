"use client";

import { gsap, registerScrollTrigger } from "@/lib/gsap-client";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

type Props = {
  text: string;
  className?: string;
};

/**
 * Line-by-line reveal (SplitType) scrubbed to scroll  -  premium, minimal motion.
 */
export function SplitRevealHeading({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerScrollTrigger();

    const split = new SplitType(el, {
      types: "lines",
      tagName: "span",
    });

    const lines = split.lines;
    if (!lines?.length) {
      split.revert();
      return;
    }

    gsap.set(lines, { overflow: "hidden" });
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 105,
        opacity: 0.05,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}
