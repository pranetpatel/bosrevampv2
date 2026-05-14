"use client";

import { useEffect, useRef, useState } from "react";

const STOP_VIDEO_AT_S = 6;
const BLACK_HOLD_MS = 2000;

const interstitialFont =
  'ui-serif, Georgia, "Times New Roman", Times, "Noto Serif", serif';

type VideoPhase = "play" | "black";

export function MbaProblemVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stopTriggeredRef = useRef(false);
  const phaseRef = useRef<VideoPhase>("play");
  const [phase, setPhase] = useState<VideoPhase>("play");

  phaseRef.current = phase;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
  }, []);

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
    if (!el || !root) return;

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
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/video/BOSMBAHERO.mp4"
        muted
        playsInline
        aria-hidden
        style={{ filter: "saturate(0.88) brightness(0.65)" }}
      />

      {/* Cinematic gradient overlay (hidden during black) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          phase === "black" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.18) 35%, rgba(10,10,10,0.18) 65%, rgba(10,10,10,0.92) 100%)",
        }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          phase === "black" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0) 70%)",
        }}
        aria-hidden
      />

      {/* Black interstitial with text */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
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
    </div>
  );
}
