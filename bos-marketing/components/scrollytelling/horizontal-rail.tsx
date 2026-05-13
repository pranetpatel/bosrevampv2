"use client";

import { gsap, registerScrollTrigger, ScrollTrigger } from "@/lib/gsap-client";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useScrollyMode } from "./scrolly-mode-context";

type HorizontalRailProps = {
  /** Unique id for chapter-nav / multi-rail pin tracking */
  railId: string;
  children: ReactNode;
};

/**
 * Vertical scroll drives horizontal translation of `trackRef` (Capsules-style "horizontal fake").
 * Uses scrubbed timeline + pin. Refresh on resize via global listener in LenisGsapRoot + here.
 */
export function HorizontalRail({ railId, children }: HorizontalRailProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const report = useScrollyMode()?.reportHorizontalPin;

  useLayoutEffect(() => {
    registerScrollTrigger();
    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (!trigger || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            report?.(railId, self.isActive);
          },
        },
      });
    }, trigger);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    void document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("load", onLoad);
      report?.(railId, false);
      ctx.revert();
    };
  }, [railId, report]);

  return (
    <div
      ref={triggerRef}
      data-horizontal-rail={railId}
      className="relative h-screen w-full overflow-hidden bg-[var(--surface-dark)]"
    >
      <div
        ref={trackRef}
        data-horizontal-track
        className="flex h-full w-max will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}

/** One horizontal viewport column; inner content can scroll vertically if taller than the viewport. */
export function HorizontalPanel({
  chapterId,
  children,
}: {
  /** Matches `id` on the chapter section inside (for TOC / scroll mapping). */
  chapterId: string;
  children: ReactNode;
}) {
  return (
    <div
      data-chapter-panel={chapterId}
      className="flex h-[100dvh] w-screen shrink-0 flex-col overflow-hidden border-r border-white/[0.04]"
    >
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain [scrollbar-gutter:stable]">
        {children}
      </div>
    </div>
  );
}
