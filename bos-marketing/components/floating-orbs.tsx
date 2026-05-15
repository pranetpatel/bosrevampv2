"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { useEffect } from "react";

const ORBS = [
  { top: 7,  left: 5,   w: 6,  h: 6,  color: "rgba(26,83,253,0.55)",   speed: 0.05 },
  { top: 18, left: 87,  w: 4,  h: 4,  color: "rgba(218,52,241,0.50)",  speed: 0.08 },
  { top: 42, left: 2,   w: 5,  h: 5,  color: "rgba(4,209,224,0.45)",   speed: 0.03 },
  { top: 58, left: 93,  w: 6,  h: 6,  color: "rgba(26,83,253,0.48)",   speed: 0.06 },
  { top: 75, left: 12,  w: 4,  h: 4,  color: "rgba(218,52,241,0.42)",  speed: 0.04 },
  { top: 30, left: 48,  w: 3,  h: 3,  color: "rgba(4,209,224,0.38)",   speed: 0.07 },
  { top: 85, left: 70,  w: 5,  h: 5,  color: "rgba(26,83,253,0.45)",   speed: 0.05 },
  { top: 12, left: 38,  w: 3,  h: 3,  color: "rgba(218,52,241,0.40)",  speed: 0.09 },
  { top: 50, left: 75,  w: 4,  h: 4,  color: "rgba(4,209,224,0.40)",   speed: 0.06 },
  { top: 65, left: 55,  w: 3,  h: 3,  color: "rgba(26,83,253,0.38)",   speed: 0.10 },
];

export function FloatingOrbs() {
  const reduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (reduced) return null;

  return (
    <>
      {ORBS.map((orb, i) => {
        // Scroll parallax
        const yParallax = useTransform(scrollY, [0, 2000], [0, -200 * orb.speed * 10]);
        
        // Mouse reaction (subtle)
        const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 120 });
        const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 120 });
        
        // Offset relative to mouse
        const xOffset = useTransform(mouseXSpring, (v) => (v - (window.innerWidth / 2)) * orb.speed * 0.5);
        const yOffset = useTransform(mouseYSpring, (v) => (v - (window.innerHeight / 2)) * orb.speed * 0.5);

        return (
          <motion.div
            key={i}
            aria-hidden
            style={{
              position: "fixed",
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              width: `${orb.w}px`,
              height: `${orb.h}px`,
              borderRadius: "9999px",
              background: orb.color,
              pointerEvents: "none",
              zIndex: 2,
              y: yParallax,
              x: xOffset,
              translateY: yOffset,
              boxShadow: `0 0 12px ${orb.color}`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}
