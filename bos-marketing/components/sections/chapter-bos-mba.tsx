"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STOP_VIDEO_AT_S = 6;
const BLACK_HOLD_MS = 2000;

const interstitialFont =
  'ui-serif, Georgia, "Times New Roman", Times, "Noto Serif", serif';

type MbaVideoPhase = "play" | "black";

interface BosMbaSectionProps {
  videoSrc?: string;
}

export function BosMbaSection({ videoSrc }: BosMbaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stopTriggeredRef = useRef(false);
  const phaseRef = useRef<MbaVideoPhase>("play");
  const [phase, setPhase] = useState<MbaVideoPhase>("play");

  phaseRef.current = phase;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    function onTimeUpdate() {
      const el = videoRef.current;
      if (!el || stopTriggeredRef.current) return;
      if (el.currentTime < STOP_VIDEO_AT_S) return;
      stopTriggeredRef.current = true;
      el.pause();
      el.currentTime = STOP_VIDEO_AT_S;
      setPhase("black");
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [videoSrc]);

  useEffect(() => {
    if (phase !== "black") return;
    const id = window.setTimeout(() => {
      const el = videoRef.current;
      stopTriggeredRef.current = false;
      if (el) {
        el.currentTime = 0;
        void el.play().catch(() => {});
      }
      setPhase("play");
    }, BLACK_HOLD_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    const el = videoRef.current;
    const root = sectionRef.current;
    if (!el || !videoSrc || !root) return;

    const tryPlay = () => {
      if (phaseRef.current === "black") return;
      void el.play().catch(() => {});
    };

    el.addEventListener("canplay", tryPlay);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        tryPlay();
      },
      { threshold: 0.15 },
    );
    io.observe(root);
    tryPlay();

    return () => {
      el.removeEventListener("canplay", tryPlay);
      io.disconnect();
    };
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      id="bos-mba"
      className="chapter-rule-top relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Video background */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          playsInline
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden />
      )}

      {/* Dark cinematic overlay (hidden during black interstitial) */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30 transition-opacity duration-300 ${
          phase === "black" ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      />

      {/* Black full-screen + copy for 2s after video stops at 6s */}
      <div
        className={`absolute inset-0 z-[20] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
          phase === "black" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ fontFamily: interstitialFont }}
        aria-hidden={phase !== "black"}
      >
        <p className="select-none px-6 text-center text-[clamp(1.75rem,4.8vw,3.75rem)] font-normal leading-[1.2] tracking-normal text-white">
          Stop studying the past.
        </p>
        <p className="mt-3 select-none px-6 text-center text-[clamp(1.75rem,4.8vw,3.75rem)] font-normal leading-[1.2] tracking-normal text-white">
          Build in the future.
        </p>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-[var(--surface-dark)]"
        aria-hidden
      />

      {/* Gold left accent bar */}
      <div
        className="absolute bottom-0 left-0 top-0 z-[2] w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-80"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-[3] flex flex-1 flex-col justify-between px-10 pb-16 pt-12 md:px-16 md:pb-24 md:pt-16">
        {/* Eyebrow */}
        <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
          BOS MBA &mdash; NEW COHORT
        </p>

        {/* Main content row */}
        <div className="mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Heading block */}
          <div className="max-w-lg">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[1.0] tracking-tight text-white">
              The New
            </h2>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,9vw,7.5rem)] font-semibold italic leading-[1.0] tracking-tight text-[#C9A84C]">
              Playbook.
            </h2>

            {/* CTA button */}
            <div className="mt-10">
              <Link
                href="/mba"
                className="inline-flex rounded-sm border border-[#C9A84C] px-7 py-3 font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9A84C] transition duration-300 hover:bg-[#C9A84C]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A84C]"
              >
                Apply for Early Access
              </Link>
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="max-w-xs font-[family-name:var(--font-display)] text-lg font-semibold italic leading-[1.45] text-white/90 md:max-w-[22rem] md:text-xl">
            &ldquo;The world runs on systems now. For the first time, you can
            learn business by building and operating one in real time.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
