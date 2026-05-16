"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

// Elements that should hide the cursor and restore native behavior
const TEXT_SEL = 'input, textarea, select, [contenteditable="true"]';

// Map of selectors → cursor state class
const STATE_RULES: Array<{ sel: string; cls: string; label?: true }> = [
  // Text inputs  -  hide custom cursor
  { sel: TEXT_SEL, cls: "bos-cursor-hidden" },
  // Explicit data-cursor attr (checked first for specificity)
  { sel: "[data-cursor]", cls: "bos-cursor-hover", label: true },
  // Primary CTA buttons (orchid background)
  { sel: 'a[href^="/get-started"], a[href*="get-started"], button[data-cta]', cls: "bos-cursor-cta" },
  // Video and media
  { sel: "video, [data-cursor-media]", cls: "bos-cursor-media" },
  // Plain links
  { sel: "a[href]", cls: "bos-cursor-link" },
  // Any remaining interactive (button, role=button, .cursor-pointer)
  { sel: 'button, [role="button"], .cursor-pointer, label[for], summary', cls: "bos-cursor-hover" },
];

const ALL_STATE_CLASSES = [
  "bos-cursor-hover",
  "bos-cursor-link",
  "bos-cursor-cta",
  "bos-cursor-media",
  "bos-cursor-hidden",
];

export function OptionalCursor() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    // Desktop only
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    document.body.classList.add("custom-cursor-root");

    const dot = document.createElement("div");
    dot.className = "bos-cursor-dot";
    dot.setAttribute("aria-hidden", "true");

    const labelEl = document.createElement("span");
    labelEl.className = "bos-cursor-label";
    dot.appendChild(labelEl);

    document.body.appendChild(dot);

    // RAF-based position  -  batches DOM writes to paint boundary
    let mouseX = -999;
    let mouseY = -999;
    let rafId = 0;

    const tick = () => {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    let currentStateClass = "";

    const applyState = (target: HTMLElement) => {
      for (const rule of STATE_RULES) {
        const match = target.closest<HTMLElement>(rule.sel);
        if (!match) continue;

        if (rule.cls === currentStateClass) {
          // Same state  -  only update label if needed
          if (rule.label) {
            const text = match.getAttribute("data-cursor") ?? "";
            if (labelEl.textContent !== text) {
              labelEl.textContent = text;
              labelEl.style.opacity = text ? "1" : "0";
            }
          }
          return;
        }

        // Transition to new state
        dot.classList.remove(...ALL_STATE_CLASSES);
        dot.classList.add(rule.cls);
        currentStateClass = rule.cls;

        if (rule.label) {
          const text = match.getAttribute("data-cursor") ?? "";
          labelEl.textContent = text;
          labelEl.style.opacity = text ? "1" : "0";
        } else {
          labelEl.textContent = "";
          labelEl.style.opacity = "0";
        }
        return;
      }

      // No match  -  default state
      if (currentStateClass !== "") {
        dot.classList.remove(...ALL_STATE_CLASSES);
        currentStateClass = "";
        labelEl.textContent = "";
        labelEl.style.opacity = "0";
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      applyState(e.target as HTMLElement);
    };

    const onDown = (e: MouseEvent) => {
      // Ripple squish: flatten slightly in the direction of movement
      dot.style.transform = "scale(0.8)";
      applyState(e.target as HTMLElement);
    };

    const onUp = () => {
      dot.style.transform = "scale(1)";
    };

    const onLeave = () => { dot.style.opacity = "0"; };
    const onEnter = () => { dot.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-root");
      if (document.body.contains(dot)) document.body.removeChild(dot);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [reduced]);

  return null;
}
