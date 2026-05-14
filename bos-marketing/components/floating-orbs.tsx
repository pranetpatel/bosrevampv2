"use client";

import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";

const ORBS = [
  { top: "7%",  left: "5%",   w: 6,  h: 6,  color: "rgba(26,83,253,0.55)",   dur: "8s",  delay: "0s"   },
  { top: "18%", left: "87%",  w: 4,  h: 4,  color: "rgba(218,52,241,0.50)",  dur: "11s", delay: "1.6s" },
  { top: "42%", left: "2%",   w: 5,  h: 5,  color: "rgba(4,209,224,0.45)",   dur: "13s", delay: "3s"   },
  { top: "58%", left: "93%",  w: 6,  h: 6,  color: "rgba(26,83,253,0.48)",   dur: "10s", delay: "0.4s" },
  { top: "75%", left: "12%",  w: 4,  h: 4,  color: "rgba(218,52,241,0.42)",  dur: "15s", delay: "5.5s" },
  { top: "30%", left: "48%",  w: 3,  h: 3,  color: "rgba(4,209,224,0.38)",   dur: "17s", delay: "2.2s" },
  { top: "85%", left: "70%",  w: 5,  h: 5,  color: "rgba(26,83,253,0.45)",   dur: "12s", delay: "4s"   },
  { top: "12%", left: "38%",  w: 3,  h: 3,  color: "rgba(218,52,241,0.40)",  dur: "19s", delay: "7s"   },
  { top: "50%", left: "75%",  w: 4,  h: 4,  color: "rgba(4,209,224,0.40)",   dur: "14s", delay: "9s"   },
  { top: "65%", left: "55%",  w: 3,  h: 3,  color: "rgba(26,83,253,0.38)",   dur: "22s", delay: "1s"   },
] as const;

export function FloatingOrbs() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <>
      {ORBS.map((orb, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "fixed",
            top: orb.top,
            left: orb.left,
            width: `${orb.w}px`,
            height: `${orb.h}px`,
            borderRadius: "9999px",
            background: orb.color,
            pointerEvents: "none",
            zIndex: 2,
            animation: `bos-float ${orb.dur} ease-in-out ${orb.delay} infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </>
  );
}
