"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function ScrollLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const anchor = document.getElementById("hero-logo-anchor");
    const hero = document.getElementById("welcome");
    if (!container || !anchor || !hero) return;

    const r = anchor.getBoundingClientRect();
    let startDocLeft = r.left + window.scrollX;
    let startDocTop = r.top + window.scrollY;
    let startWidth = r.width;

    const getNavTarget = () => {
      const target = document.getElementById("nav-logo-target");
      if (target) {
        const tr = target.getBoundingClientRect();
        return { left: tr.left + window.scrollX, top: 20 };
      }
      // Fallback: pad past the home button
      return { left: window.innerWidth >= 768 ? 104 : 72, top: 20 };
    };

    const tick = () => {
      const threshold = hero.offsetHeight * 0.6;
      const raw = Math.min(1, Math.max(0, window.scrollY / threshold));
      const p = easeInOut(raw);
      const { left: navLeft, top: navTop } = getNavTarget();

      container.style.top = `${startDocTop + (navTop - startDocTop) * p}px`;
      container.style.left = `${startDocLeft + (navLeft - startDocLeft) * p}px`;
      container.style.width = `${startWidth + (80 - startWidth) * p}px`;
    };

    tick();
    container.style.transition = "opacity 0.5s ease 0.2s";
    container.style.opacity = "1";

    const onResize = () => {
      const rr = anchor.getBoundingClientRect();
      startDocLeft = rr.left + window.scrollX;
      startDocTop = rr.top + window.scrollY;
      startWidth = rr.width;
      tick();
    };

    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed z-[201]"
      style={{ opacity: 0, top: 0, left: 0, width: 0 }}
    >
      <Image
        src="/BOS Branding/FullLogoNoBackground.svg"
        alt="BOS"
        width={220}
        height={72}
        priority
        className="h-auto w-full drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]"
      />
    </div>
  );
}
