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
    
    const label = document.createElement("span");
    label.className = "bos-cursor-label";
    dot.appendChild(label);
    
    document.body.appendChild(dot);

    const onMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], .cursor-pointer, input, select, textarea, [data-cursor]');
      
      if (interactive) {
        dot.classList.add("bos-cursor-big");
        const cursorText = (interactive as HTMLElement).getAttribute("data-cursor");
        if (cursorText) {
          label.textContent = cursorText;
          label.style.opacity = "1";
        } else {
          label.style.opacity = "0";
        }
      } else {
        dot.classList.remove("bos-cursor-big");
        label.style.opacity = "0";
      }
    };

    const onDown = () => {
      dot.style.transform = "scale(0.85)";
    };
    const onUp = () => {
      dot.style.transform = "scale(1)";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor-root");
      if (document.body.contains(dot)) {
        document.body.removeChild(dot);
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [reduced]);

  return null;
}
