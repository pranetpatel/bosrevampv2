"use client";

import "lenis/dist/lenis.css";

import { gsap, registerScrollTrigger, ScrollTrigger } from "@/lib/gsap-client";
import { ReactLenis, useLenis, type LenisProps } from "lenis/react";
import { useEffect, type ReactNode } from "react";

function LenisScrollTriggerBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", onResize);
    };
  }, [lenis]);

  return null;
}

const lenisOptions: NonNullable<LenisProps["options"]> = {
  autoRaf: false,
  duration: 1.15,
  easing: (t) => 1 - Math.pow(1 - t, 2.5),
  smoothWheel: true,
};

/**
 * Root smooth scroll + GSAP ticker sync (Lenis docs pattern).
 */
export function LenisGsapRoot({ children }: { children: ReactNode }) {
  useEffect(() => {
    registerScrollTrigger();
  }, []);

  return (
    <ReactLenis root className="min-h-full" options={lenisOptions}>
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
