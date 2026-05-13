"use client";

import { getPrefersReducedMotion } from "@/lib/prefers-reduced-motion";
import { registerScrollTrigger, ScrollTrigger } from "@/lib/gsap-client";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";

const scrollEase = (t: number) => 1 - Math.pow(1 - t, 2.2);

/**
 * Lenis `scrollTo(element)` uses `getBoundingClientRect().top`, which is almost identical
 * for chapters laid out side-by-side in a horizontal rail — vertical scroll cannot reach
 * later panels. Map those targets to the ScrollTrigger scrub range for the owning rail.
 */
function getScrollYForChapterInHorizontalRail(target: HTMLElement): number | null {
  registerScrollTrigger();
  const rail = target.closest<HTMLElement>("[data-horizontal-rail]");
  if (!rail) return null;
  const track = rail.querySelector<HTMLElement>("[data-horizontal-track]");
  if (!track) return null;
  const panels = [...track.children] as HTMLElement[];
  const idx = panels.findIndex((p) => p.contains(target));
  if (idx < 0) return null;
  const st = ScrollTrigger.getAll().find((s) => s.trigger === rail && s.vars?.pin);
  if (!st) return null;
  const span = st.end - st.start;
  if (!(span > 0)) return null;
  const n = panels.length;
  const progress = n <= 1 ? 0 : idx / (n - 1);
  return st.start + progress * span;
}

/**
 * Which horizontal rail is "current" for TOC. `isActive` can overlap across rails for a frame or
 * when ranges abut; pick by scroll position instead of first match in DOM.
 */
function getActivePinnedHorizontalRail(): HTMLElement | null {
  registerScrollTrigger();
  const y = window.scrollY || document.documentElement.scrollTop;
  const rails = [...document.querySelectorAll<HTMLElement>("[data-horizontal-rail]")];
  const actives: { rail: HTMLElement; st: ScrollTrigger; start: number; end: number }[] = [];

  for (const rail of rails) {
    const st = ScrollTrigger.getAll().find(
      (s) => s.trigger === rail && Boolean((s.vars as { pin?: boolean }).pin),
    );
    if (!st?.isActive) continue;
    actives.push({ rail, st, start: st.start, end: st.end });
  }
  if (actives.length === 0) return null;
  if (actives.length === 1) return actives[0].rail;

  const inRange = actives.filter((a) => y >= a.start && y <= a.end);
  if (inRange.length === 1) return inRange[0].rail;
  if (inRange.length > 1) {
    return inRange.reduce((a, b) => (a.start >= b.start ? a : b)).rail;
  }
  return actives.reduce((a, b) => (a.start >= b.start ? a : b)).rail;
}

/** Order matches scroll order on the homepage (not “importance” rank — use step numbers for that). */
const CHAPTERS = [
  { id: "welcome", step: 1, label: "Welcome" },
  { id: "tension", step: 2, label: "Gap" },
  { id: "system", step: 3, label: "System" },
  { id: "flow", step: 4, label: "Flow" },
  { id: "conviction", step: 5, label: "Why" },
  { id: "manifesto", step: 6, label: "Principles" },
  { id: "tribe", step: 7, label: "Who" },
  { id: "stack", step: 8, label: "Layers" },
  { id: "close", step: 9, label: "Start" },
] as const;

export function ChapterNav() {
  const [active, setActive] = useState<string>("welcome");
  const railRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rafRef = useRef(0);
  const [fillPct, setFillPct] = useState(0);
  const lenis = useLenis();

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  const updateActive = useCallback(() => {
    const pinnedRail = getActivePinnedHorizontalRail();
    if (pinnedRail) {
      const track = pinnedRail.querySelector<HTMLElement>("[data-horizontal-track]");
      const panels = track ? ([...track.children] as HTMLElement[]) : [];
      const focusX = window.innerWidth * 0.46;
      let best: (typeof CHAPTERS)[number]["id"] | null = null;
      let bestDist = Infinity;

      for (const panel of panels) {
        const id = panel.getAttribute("data-chapter-panel");
        if (!id) continue;
        const r = panel.getBoundingClientRect();
        const visibleW = Math.min(r.right, window.innerWidth) - Math.max(r.left, 0);
        if (visibleW < 48) continue;
        const midX = r.left + r.width / 2;
        const d = Math.abs(midX - focusX);
        if (d < bestDist) {
          const hit = CHAPTERS.find((c) => c.id === id);
          if (hit) {
            bestDist = d;
            best = hit.id;
          }
        }
      }

      if (best === null && panels.length > 0) {
        const st = ScrollTrigger.getAll().find(
          (s) => s.trigger === pinnedRail && Boolean((s.vars as { pin?: boolean }).pin),
        );
        const y = window.scrollY || document.documentElement.scrollTop;
        if (st && st.end > st.start) {
          const t = Math.min(1, Math.max(0, (y - st.start) / (st.end - st.start)));
          const idx = Math.min(panels.length - 1, Math.round(t * Math.max(panels.length - 1, 0)));
          const id = panels[idx]?.getAttribute("data-chapter-panel");
          const hit = id ? CHAPTERS.find((c) => c.id === id) : undefined;
          if (hit) best = hit.id;
        }
      }

      if (best !== null) {
        setActive((prev) => (prev === best ? prev : best));
      }
      return;
    }

    const focusY = window.innerHeight * 0.38;
    let best: (typeof CHAPTERS)[number]["id"] | null = null;
    let bestDist = Infinity;

    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (!el) continue;
      // Sections inside horizontal panels still span the viewport vertically while translated
      // off-screen; excluding them here prevents false "Gap" / "Principles" hits between rails.
      if (el.closest("[data-horizontal-track]")) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) continue;
      const mid = r.top + r.height / 2;
      const d = Math.abs(mid - focusY);
      if (d < bestDist) {
        bestDist = d;
        best = c.id;
      }
    }

    if (best !== null) {
      setActive((prev) => (prev === best ? prev : best));
    }
  }, []);

  const scheduleActiveUpdate = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      updateActive();
    });
  }, [updateActive]);

  useEffect(() => {
    const rail = railRef.current;
    const activeDot = dotRefs.current[activeIndex];
    if (!rail || !activeDot) return;

    const railRect = rail.getBoundingClientRect();
    const dotRect = activeDot.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - railRect.top;
    const next = railRect.height > 0 ? (dotCenter / railRect.height) * 100 : 0;
    setFillPct((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
  }, [activeIndex]);

  useEffect(() => {
    if (lenis) {
      lenis.on("scroll", scheduleActiveUpdate);
    } else {
      window.addEventListener("scroll", scheduleActiveUpdate, { passive: true });
    }
    window.addEventListener("resize", scheduleActiveUpdate, { passive: true });
    scheduleActiveUpdate();
    return () => {
      if (lenis) lenis.off("scroll", scheduleActiveUpdate);
      else window.removeEventListener("scroll", scheduleActiveUpdate);
      window.removeEventListener("resize", scheduleActiveUpdate);
      const id = rafRef.current;
      if (id) cancelAnimationFrame(id);
      rafRef.current = 0;
    };
  }, [lenis, scheduleActiveUpdate]);

  return (
    <nav
      className="pointer-events-none fixed right-4 top-1/2 z-[190] hidden w-[min(9.5rem,calc(100vw-1.25rem))] -translate-y-1/2 opacity-[0.72] transition-opacity duration-300 hover:opacity-100 lg:block"
      aria-label="On this page"
    >
      <div className="pointer-events-auto rounded-lg border border-white/[0.05] bg-black/25 py-2 pl-2 pr-1.5 backdrop-blur-sm supports-[backdrop-filter]:bg-black/20">
        <div className="relative pr-0.5">
          <div
            ref={railRef}
            className="pointer-events-none absolute right-[11px] top-0 bottom-0 w-px -translate-x-1/2"
            aria-hidden
          >
            <div className="absolute inset-0 bg-white/[0.08]" />
            <div
              className="absolute left-0 top-0 w-full bg-white/[0.14] transition-all duration-500 ease-out"
              style={{ height: `${fillPct}%` }}
            />
          </div>

          <div className="flex flex-col gap-1">
            {CHAPTERS.map((c, i) => {
              const isOn = active === c.id;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  type="button"
                  title={`${c.step}. ${c.label}`}
                  className="group flex w-full items-center gap-1.5 rounded-md py-1 pl-0.5 pr-0.5 text-left transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/30"
                  onClick={() => {
                    const el = document.getElementById(c.id);
                    if (!el) return;
                    const reduced = getPrefersReducedMotion();
                    const railY = getScrollYForChapterInHorizontalRail(el);
                    if (railY !== null) {
                      if (lenis) {
                        if (reduced) lenis.scrollTo(railY, { immediate: true });
                        else lenis.scrollTo(railY, { duration: 0.85, easing: scrollEase });
                      } else {
                        window.scrollTo({ top: railY, behavior: reduced ? "auto" : "smooth" });
                      }
                      return;
                    }
                    if (lenis) {
                      if (reduced) lenis.scrollTo(el, { immediate: true });
                      else
                        lenis.scrollTo(el, {
                          duration: 0.85,
                          easing: scrollEase,
                        });
                    } else {
                      el.scrollIntoView({
                        behavior: reduced ? "auto" : "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }
                  }}
                  aria-current={isOn ? "location" : undefined}
                >
                  <span
                    className={`w-4 shrink-0 text-right font-[family-name:var(--font-ui)] text-[9px] font-medium tabular-nums ${
                      isOn ? "text-zinc-300" : "text-zinc-600 group-hover:text-zinc-500"
                    }`}
                  >
                    {c.step}
                  </span>
                  <span
                    className={`min-w-0 flex-1 font-[family-name:var(--font-ui)] text-[9px] font-medium uppercase leading-tight tracking-[0.1em] ${
                      isOn ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-400"
                    }`}
                  >
                    {c.label}
                  </span>
                  <span
                    className={`relative flex h-1.5 w-1.5 shrink-0 rounded-full border transition-colors duration-300 ${
                      isOn
                        ? "border-white/50 bg-white/90"
                        : "border-white/15 bg-transparent group-hover:border-white/25"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
