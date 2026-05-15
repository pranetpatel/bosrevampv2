"use client";

import { getPrefersReducedMotion } from "@/lib/prefers-reduced-motion";
import { registerScrollTrigger, ScrollTrigger } from "@/lib/gsap-client";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";

const scrollEase = (t: number) => 1 - Math.pow(1 - t, 2.2);

/** Order matches actual scroll order on the homepage. */
const CHAPTERS = [
  { id: "welcome",  step: 1, label: "Welcome"    },
  { id: "chaos",    step: 2, label: "Chaos"       },
  { id: "tension",  step: 3, label: "Friction"    },
  { id: "manifesto",step: 4, label: "Principles"  },
  { id: "introduce",step: 5, label: "BOS"         },
  { id: "system",   step: 6, label: "System"      },
  { id: "flow",     step: 7, label: "Flow"        },
  { id: "tribe",    step: 8, label: "Who"         },
  { id: "bos-mba",  step: 9, label: "BOS MBA"    },
  { id: "close",    step: 10, label: "Start"      },
] as const;

type ChapterId = (typeof CHAPTERS)[number]["id"];

/**
 * For sections inside [data-chapter-stack], getBoundingClientRect().top is always
 * ~0 while any card is stuck, so we can't use visual position to detect which card
 * is active. Instead, we read the stack container's document offset and the natural
 * height of each wrapper to compute which section's scroll-zone we're in.
 */
function getActiveStackSection(): ChapterId | null {
  const container = document.querySelector<HTMLElement>("[data-chapter-stack]");
  if (!container) return null;

  const containerDocTop =
    container.getBoundingClientRect().top + window.scrollY;
  const scrollY = window.scrollY;

  // If we haven't reached the stack yet, or we've scrolled past it, bail
  if (scrollY < containerDocTop || scrollY >= containerDocTop + container.offsetHeight) {
    return null;
  }

  const offsetInStack = scrollY - containerDocTop;

  // Walk each stack item in DOM order; find which zone offsetInStack falls in
  const items = container.querySelectorAll<HTMLElement>("[data-chapter-stack-item]");
  let accumulated = 0;
  for (const item of items) {
    const h = item.offsetHeight;
    if (offsetInStack < accumulated + h) {
      return (item.getAttribute("data-chapter-stack-item") as ChapterId) ?? null;
    }
    accumulated += h;
  }

  // Fell off the end — last item
  const last = items[items.length - 1];
  return last
    ? ((last.getAttribute("data-chapter-stack-item") as ChapterId) ?? null)
    : null;
}

/**
 * Returns the document scrollY needed to reach a given section inside the stack.
 */
function getScrollYForStackSection(sectionId: string): number | null {
  const container = document.querySelector<HTMLElement>("[data-chapter-stack]");
  if (!container) return null;

  const containerDocTop =
    container.getBoundingClientRect().top + window.scrollY;

  const items = container.querySelectorAll<HTMLElement>("[data-chapter-stack-item]");
  let accumulated = 0;
  for (const item of items) {
    const id = item.getAttribute("data-chapter-stack-item");
    if (id === sectionId) return containerDocTop + accumulated;
    accumulated += item.offsetHeight;
  }
  return null;
}

/**
 * Lenis `scrollTo(element)` uses `getBoundingClientRect().top`, which is almost identical
 * for chapters laid out side-by-side in a horizontal rail. Map those targets to the
 * ScrollTrigger scrub range for the owning rail.
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

export function ChapterNav() {
  const [active, setActive] = useState<ChapterId>("welcome");
  const trackRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rafRef = useRef(0);
  const [fillPct, setFillPct] = useState(0);
  const lenis = useLenis();

  const activeIndex = CHAPTERS.findIndex((c) => c.id === active);

  const updateActive = useCallback(() => {
    // 1. Horizontal rail pinned section (legacy fallback)
    const pinnedRail = getActivePinnedHorizontalRail();
    if (pinnedRail) {
      const track = pinnedRail.querySelector<HTMLElement>("[data-horizontal-track]");
      const panels = track ? ([...track.children] as HTMLElement[]) : [];
      const focusX = window.innerWidth * 0.46;
      let best: ChapterId | null = null;
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
          if (hit) { bestDist = d; best = hit.id; }
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
        setActive((prev) => (prev === best ? prev : best!));
        return;
      }
    }

    // 2. Sticky stack — use scroll-zone detection
    const stackActive = getActiveStackSection();
    if (stackActive !== null) {
      setActive((prev) => (prev === stackActive ? prev : stackActive));
      return;
    }

    // 3. Normal vertical sections (outside the stack)
    const focusY = window.innerHeight * 0.38;
    let best: ChapterId | null = null;
    let bestDist = Infinity;

    for (const c of CHAPTERS) {
      const el = document.getElementById(c.id);
      if (!el) continue;
      // Skip sections that live inside the stack or a horizontal track
      if (el.closest("[data-chapter-stack]")) continue;
      if (el.closest("[data-horizontal-track]")) continue;
      const r = el.getBoundingClientRect();
      if (r.bottom < 80 || r.top > window.innerHeight - 80) continue;
      const mid = r.top + r.height / 2;
      const d = Math.abs(mid - focusY);
      if (d < bestDist) { bestDist = d; best = c.id; }
    }

    if (best !== null) {
      setActive((prev) => (prev === best ? prev : best!));
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
    const track = trackRef.current;
    const activeBtn = dotRefs.current[activeIndex];
    if (!track || !activeBtn) return;

    const trackRect = track.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const btnCenterY = btnRect.top + btnRect.height / 2;
    const centerInContent = btnCenterY - trackRect.top + track.scrollTop;
    const denom = track.scrollHeight || trackRect.height;
    const next = denom > 0 ? (centerInContent / denom) * 100 : 0;
    setFillPct(Math.min(100, Math.max(0, next)));
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

  const scrollToChapter = useCallback(
    (c: (typeof CHAPTERS)[number]) => {
      const el = document.getElementById(c.id);
      if (!el) return;
      const reduced = getPrefersReducedMotion();

      // Horizontal rail
      const railY = getScrollYForChapterInHorizontalRail(el);
      if (railY !== null) {
        if (lenis) {
          reduced ? lenis.scrollTo(railY, { immediate: true }) : lenis.scrollTo(railY, { duration: 0.85, easing: scrollEase });
        } else {
          window.scrollTo({ top: railY, behavior: reduced ? "auto" : "smooth" });
        }
        return;
      }

      // Sticky stack — scroll to the computed document offset, not the element's visual position
      const stackY = getScrollYForStackSection(c.id);
      if (stackY !== null) {
        if (lenis) {
          reduced ? lenis.scrollTo(stackY, { immediate: true }) : lenis.scrollTo(stackY, { duration: 0.85, easing: scrollEase });
        } else {
          window.scrollTo({ top: stackY, behavior: reduced ? "auto" : "smooth" });
        }
        return;
      }

      // Normal section
      if (lenis) {
        reduced ? lenis.scrollTo(el, { immediate: true }) : lenis.scrollTo(el, { duration: 0.85, easing: scrollEase });
      } else {
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      }
    },
    [lenis],
  );

  return (
    <nav
      className="pointer-events-none fixed right-0 top-1/2 z-[190] -translate-y-1/2 pr-[max(0.35rem,env(safe-area-inset-right))] pl-2 hidden md:block"
      aria-label="On this page"
    >
      <div className="pointer-events-auto max-h-[min(88vh,52rem)] w-[min(6.25rem,calc(100vw-1.25rem))] overflow-hidden rounded-l-lg border border-white/[0.08] border-r-0 bg-black/35 py-2 shadow-[-12px_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-black/25">
        {/* Home button */}
        <button
          type="button"
          title="Back to top"
          className="group flex w-full items-center justify-end px-2 pb-1.5 pt-1 transition-colors hover:bg-white/[0.06]"
          onClick={() => {
            if (lenis) lenis.scrollTo(0, { duration: 0.9 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="font-[family-name:var(--font-ui)] text-[7px] font-medium uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-300 sm:text-[8px]">
            Home
          </span>
        </button>
        <div className="mx-2 mb-1 h-px bg-white/[0.06]" />
        <div
          ref={trackRef}
          className="relative flex max-h-[min(88vh,52rem)] overflow-y-auto overflow-x-hidden py-1 pl-1 pr-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.12)_transparent]"
        >
          <div className="relative w-4 shrink-0 self-stretch py-1" aria-hidden>
            <div className="pointer-events-none absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 overflow-hidden rounded-full bg-white/[0.08]" />
            <div
              className="pointer-events-none absolute bottom-2 left-1/2 top-2 w-px origin-top overflow-hidden rounded-full bg-gradient-to-b from-[var(--orchid)]/45 via-white/35 to-[var(--cyan)]/40 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-50%) scaleY(${Math.max(0.04, fillPct / 100)})` }}
            />
          </div>

          <div className="relative z-[1] flex min-w-0 flex-1 flex-col gap-y-0.5 pr-0.5 pt-0.5">
            {CHAPTERS.map((c, i) => {
              const isOn = active === c.id;
              return (
                <button
                  key={c.id}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  type="button"
                  title={`${c.step}. ${c.label}`}
                  className="group flex w-full items-center justify-end gap-2 rounded-md py-1.5 pl-1 pr-1.5 text-right transition-colors hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/35"
                  onClick={() => scrollToChapter(c)}
                  aria-current={isOn ? "location" : undefined}
                >
                  <div className="flex min-w-0 flex-col items-end gap-0.5">
                    <span
                      className={`font-[family-name:var(--font-ui)] text-[8px] font-medium tabular-nums leading-none ${
                        isOn ? "text-zinc-300" : "text-zinc-600 group-hover:text-zinc-500"
                      }`}
                    >
                      {c.step}
                    </span>
                    <span
                      className={`max-w-[4.5rem] font-[family-name:var(--font-ui)] text-[7px] font-medium uppercase leading-tight tracking-[0.08em] sm:max-w-[5rem] sm:text-[8px] sm:tracking-[0.1em] ${
                        isOn ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-400"
                      }`}
                    >
                      {c.label}
                    </span>
                  </div>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full border transition-colors duration-300 ${
                      isOn
                        ? "border-white/50 bg-white/90"
                        : "border-white/12 bg-transparent group-hover:border-white/25"
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
