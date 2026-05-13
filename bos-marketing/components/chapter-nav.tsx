"use client";

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

/** Only one horizontal rail is pinned at a time; TOC must not compare X across all sections globally. */
function getActivePinnedHorizontalRail(): HTMLElement | null {
  registerScrollTrigger();
  const rails = document.querySelectorAll<HTMLElement>("[data-horizontal-rail]");
  for (const rail of rails) {
    const st = ScrollTrigger.getAll().find(
      (s) => s.trigger === rail && Boolean((s.vars as { pin?: boolean }).pin),
    );
    if (st?.isActive) return rail;
  }
  return null;
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
  const [fillPct, setFillPct] = useState(0);
  const lenis = useLenis();

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  const updateActive = useCallback(() => {
    const pinnedRail = getActivePinnedHorizontalRail();
    if (pinnedRail) {
      const track = pinnedRail.querySelector<HTMLElement>("[data-horizontal-track]");
      const panels = track ? ([...track.children] as HTMLElement[]) : [];
      const focusX = window.innerWidth * 0.46;
      const firstPanelId = panels
        .map((p) => p.getAttribute("data-chapter-panel"))
        .find((id): id is string => Boolean(id));
      const firstChapter = firstPanelId ? CHAPTERS.find((c) => c.id === firstPanelId) : undefined;
      let best: (typeof CHAPTERS)[number]["id"] = firstChapter?.id ?? CHAPTERS[0].id;
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
      setActive(best);
      return;
    }

    const focusY = window.innerHeight * 0.38;
    let best: (typeof CHAPTERS)[number]["id"] = CHAPTERS[0].id;
    let bestDist = Infinity;

    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) continue;
      const mid = r.top + r.height / 2;
      const d = Math.abs(mid - focusY);
      if (d < bestDist) {
        bestDist = d;
        best = c.id;
      }
    }
    setActive(best);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const activeDot = dotRefs.current[activeIndex];
    if (!rail || !activeDot) return;

    const railRect = rail.getBoundingClientRect();
    const dotRect = activeDot.getBoundingClientRect();
    const dotCenter = dotRect.top + dotRect.height / 2 - railRect.top;
    setFillPct((dotCenter / railRect.height) * 100);
  }, [activeIndex]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateActive());
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  useEffect(() => {
    if (!lenis) return;
    const onLenisScroll = () => {
      updateActive();
    };
    lenis.on("scroll", onLenisScroll);
    return () => {
      lenis.off("scroll", onLenisScroll);
    };
  }, [lenis, updateActive]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      updateActive();
    }, 0);
    return () => window.clearTimeout(id);
  }, [updateActive]);

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
                    const railY = getScrollYForChapterInHorizontalRail(el);
                    if (railY !== null) {
                      if (lenis) {
                        lenis.scrollTo(railY, { duration: 1.35, easing: scrollEase });
                      } else {
                        window.scrollTo({ top: railY, behavior: "smooth" });
                      }
                      return;
                    }
                    if (lenis) {
                      lenis.scrollTo(el, {
                        duration: 1.35,
                        easing: scrollEase,
                      });
                    } else {
                      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
