"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

/**
 * Desktop-only decorative cursor; skipped when reduced motion is requested.
 */
export function OptionalCursor() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    document.body.classList.add("custom-cursor-root");

    const dot = document.createElement("div");
    dot.className = "bos-cursor-dot";
    dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);

    const onMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const onDown = () => dot.classList.add("bos-cursor-big");
    const onUp = () => dot.classList.remove("bos-cursor-big");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-root");
      dot.remove();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [reduced]);

  return null;
}
