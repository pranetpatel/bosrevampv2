"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AsteroidOrb } from "@/components/asteroid-orb";
import { MeetBosSection } from "@/components/sections/meet-bos-section";

const featureTags = [
  "User-friendly dashboard",
  "Visual reports",
  "Smart Keyword Generator",
  "Content evaluation",
  "SEO goal setting",
  "Automated alerts",
  "Actionable SEO Tips",
  "Regular SEO Goal Setting",
  "Link Optimization Wizard",
];

const PILL_GRID_ROWS = 8;
const PILL_GRID_COLS = 18;

function WireframeRockGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      fill="none"
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeOpacity={0.92}
        strokeWidth={1}
        strokeLinejoin="round"
        className="text-white"
        style={{ filter: "drop-shadow(0 0 20px rgba(200, 130, 255, 0.55))" }}
      >
        <path d="M100 18 158 52 172 118 138 188 62 198 28 128 44 58Z" />
        <path d="M100 18 138 188M158 52 62 198M172 118 28 128M44 58 172 118M28 128 158 52M62 198 44 58" />
        <path d="M100 18 44 58M100 18 28 128M100 18 138 188" opacity={0.45} />
        <path d="M100 92 172 118M100 92 44 58M100 92 138 188M100 92 62 198" opacity={0.55} />
        <path d="M115 48 62 198M85 165 158 52" opacity={0.4} />
      </g>
    </svg>
  );
}

function AssistiveHeroGraphic() {
  return (
    <div
      className="relative mx-auto flex h-[min(340px,55vw)] w-full max-w-[520px] items-center justify-end md:h-[min(440px,48vw)] md:max-w-none"
      aria-hidden
    >
      <div className="absolute right-[-8%] top-1/2 w-[min(520px,90vw)] -translate-y-1/2">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 rounded-full border border-white/[0.06]"
            style={{
              width: `${(i + 1) * 68}px`,
              height: `${(i + 1) * 68}px`,
              right: 0,
              transform: "translate(35%, -50%)",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 drop-shadow-[0_0_40px_rgba(150,90,255,0.55)]">
        <AsteroidOrb size={200} scrollSpin />
      </div>
    </div>
  );
}

function FeaturePillGrid() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-6xl px-3 sm:mt-20 sm:px-6">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(120vw,720px)] w-[min(120vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(240, 130, 255, 0.38) 0%, rgba(180, 90, 220, 0.22) 22%, rgba(100, 50, 140, 0.1) 42%, transparent 62%)",
        }}
        aria-hidden
      />
      <div className="relative z-[1] space-y-2 py-10 sm:space-y-2.5 sm:py-12">
        {Array.from({ length: PILL_GRID_ROWS }, (_, row) => (
          <div
            key={row}
            className={`flex flex-nowrap justify-center gap-2 overflow-visible sm:gap-2.5 ${
              row % 2 === 1
                ? "translate-x-3 sm:translate-x-8 md:translate-x-14"
                : "-translate-x-2 sm:-translate-x-5 md:-translate-x-10"
            }`}
          >
            {Array.from({ length: PILL_GRID_COLS }, (_, i) => {
              const label = featureTags[(row + i) % featureTags.length];
              return (
                <span
                  key={`${row}-${i}`}
                  className="shrink-0 rounded-full border border-white/14 bg-[#16161f]/90 px-3 py-1.5 text-[10px] font-medium tracking-tight text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-3.5 sm:text-[11px] md:text-xs"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
        <div
          className="flex h-[68px] w-[68px] items-center justify-center rounded-xl border border-white/16 bg-[#12121c]/95 shadow-[0_0_64px_rgba(236,120,255,0.42),0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[2px] sm:h-[76px] sm:w-[76px]"
          aria-hidden
        >
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 text-white/90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden
          >
            <path
              strokeLinejoin="round"
              d="M9 7h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 21 21h-5.2L11 25v-4H9A2.5 2.5 0 0 1 6.5 18.5v-9A2.5 2.5 0 0 1 9 7z"
            />
            <path strokeLinecap="round" d="M11 13.5h8M11 17h5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TeslaLogo() {
  return (
    <svg viewBox="0 0 342 35" fill="currentColor" className="h-5 w-auto">
      <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.5v27h6.8V7.6l.5-.5h11a9.7 9.7 0 0 0 7-7H0z" />
      <path d="M188.4 0c-16 0-25.6 10.4-25.6 17.5 0 7 9.6 17.5 25.6 17.5s25.6-10.5 25.6-17.5S204.4 0 188.4 0zm0 28.8c-9.8 0-18.8-7-18.8-11.3s9-11.3 18.8-11.3 18.8 7 18.8 11.3-9 11.3-18.8 11.3z" />
      <path d="M84.3 7.8V0H57.5a9.7 9.7 0 0 0-7 7l16.7.1 12.3 12.3-12.3 12.3-16.7.1a9.7 9.7 0 0 0 7 7h26.8v-7.8H70.6l7.7-7.8h-.1l7.7-7.7 7.7 7.7-.1.1 7.7 7.7H87.5v7.8h26.8a9.7 9.7 0 0 0 7-7l-16.7-.1-12.3-12.3 12.3-12.3 16.7-.1a9.7 9.7 0 0 0-7-7H87.5v7.8h13.6L93.4 15.6h.1l-7.7 7.7-7.7-7.7.1-.1-7.7-7.7h13.8z" />
      <path d="M241 .1a9.7 9.7 0 0 0-7 7H255v27.8h6.8V7.1h21a9.7 9.7 0 0 0-7-7H241z" />
      <path d="M316.2 0c-16 0-25.6 10.4-25.6 17.5 0 9.6 13 17.5 25.6 17.5l4.4-.3c11.6-.9 21.2-8.8 21.2-17.2C341.8 10.4 332.2 0 316.2 0zm12.7 25.2a19.4 19.4 0 0 1-12.7 3.6c-9.8 0-18.8-7-18.8-11.3s9-11.3 18.8-11.3a19.4 19.4 0 0 1 12.7 3.6L336 15.5l-7.1 9.7z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 84 21" fill="currentColor" className="h-5 w-auto">
      <rect x="0" y="0" width="16" height="16" rx="3" />
      <rect x="2" y="6" width="3" height="10" fill="#13131f" />
      <rect x="7" y="8" width="3" height="8" fill="#13131f" />
      <circle cx="3.5" cy="3.5" r="1.8" fill="#13131f" />
      <rect x="10" y="6" width="3" height="2" rx="1" fill="#13131f" />
      <text x="22" y="13" fontSize="11" fontWeight="700" fontFamily="system-ui" fill="currentColor">LinkedIn</text>
    </svg>
  );
}

function TinderLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M8.21 10.08c-.02 0-.04 0-.06.01C8.07 8.68 7.78 6.41 7.2 5.2c-1.66 3.36-3.3 5.8-3.3 8.11C3.9 17.09 7.14 20 12 20c3.86 0 7.5-2.87 7.5-7.05 0-4.5-2.87-8.7-7.5-12 .48 3.55-1.1 7.57-3.79 9.13z" />
      </svg>
      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>Tinder</span>
    </div>
  );
}

function MiraclePlusLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 30 24" fill="currentColor" className="h-5 w-auto">
        <rect x="0" y="12" width="4" height="12" rx="1" />
        <rect x="5.5" y="7" width="4" height="17" rx="1" />
        <rect x="11" y="2" width="4" height="22" rx="1" />
        <rect x="16.5" y="5" width="4" height="19" rx="1" />
        <rect x="22" y="0" width="4" height="24" rx="1" />
      </svg>
      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>Miracleplus</span>
    </div>
  );
}

function CohereLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 28 20" fill="currentColor" className="h-4 w-auto">
        <rect x="0" y="0" width="18" height="12" rx="6" />
        <rect x="8" y="8" width="18" height="10" rx="5" opacity="0.45" />
      </svg>
      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>Cohere</span>
    </div>
  );
}

function LarkLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 3c-1.4 2.5-2.2 4.8-2.2 7 0 1.3.3 2.4.9 3.3.6-1.4 1.6-2.7 2.8-3.8C13 7.8 12.4 5.6 12 3zM7 13.5c0 2.8 2.2 5 5 5s5-2.2 5-5c0-.5-.1-1-.2-1.4-1.3 1.1-2.2 2.4-2.7 3.8-.1.2-.4.3-.6.1-.6-.9-.9-2-.9-3.2 0-1.1.3-2.3.7-3.4C11 10.2 7 11.7 7 13.5z" />
      </svg>
      <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>Lark</span>
    </div>
  );
}

const logoTiles = [
  {
    key: "tesla",
    content: (
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 shrink-0"
          aria-hidden
        >
          <path d="M12 5.362l-.636 2.033C9.337 7.737 7.8 8.33 6.165 8.462L5.33 7.17A12.64 12.64 0 0 0 12 5.362zm0 0l.636 2.033c2.027.342 3.564.935 5.199 1.067l.835-1.292A12.64 12.64 0 0 0 12 5.362zm-.69 2.29L12 18.638l.69-10.986a16.52 16.52 0 0 0-1.38 0zm-4.99-.358l.847 13.573c1.22.693 2.575 1.01 4.833 1.01s3.613-.317 4.833-1.01l.847-13.573c-1.681.855-3.54 1.18-5.68 1.18s-3.999-.325-5.68-1.18z" />
        </svg>
        <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>Tesla</span>
      </div>
    ),
  },
  {
    key: "linkedin",
    content: (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>LinkedIn</span>
      </div>
    ),
  },
  {
    key: "tinder",
    content: <TinderLogo />,
  },
  {
    key: "dcode",
    content: (
      <span
        className="text-sm font-bold tracking-wide"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
      >
        D/.CODE
      </span>
    ),
  },
  {
    key: "lark",
    content: <LarkLogo />,
  },
  {
    key: "miracleplus",
    content: <MiraclePlusLogo />,
  },
  {
    key: "cohere",
    content: <CohereLogo />,
  },
  {
    key: "jambo",
    content: (
      <span
        className="text-sm font-black tracking-widest"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.12em" }}
      >
        𝐉AMBO
      </span>
    ),
  },
];

export default function ProductPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      <SiteNav />

      {/* ── HERO ── */}
      <section
        id="welcome"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
        style={{ background: "#0c0b1a" }}
      >
        {/* Ominous ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(100,60,220,0.28),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_55%,rgba(140,80,255,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_20%_80%,rgba(30,20,100,0.5),transparent_60%)]" />

        {/* Purple beam from top */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
          <div
            style={{
              width: 4,
              height: 440,
              borderRadius: 9999,
              background:
                "linear-gradient(to bottom, rgba(210,170,255,1) 0%, rgba(160,100,255,0.7) 35%, rgba(120,70,220,0.2) 70%, transparent 100%)",
              boxShadow: "0 0 70px 22px rgba(150,90,255,0.35)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          <div className="drop-shadow-[0_0_50px_rgba(150,90,255,0.65)]">
            <AsteroidOrb size={148} scrollSpin />
          </div>

          <h1
            className="text-[clamp(3.5rem,9vw,7rem)] font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BOS
          </h1>

          <p
            className="text-xl text-white/60"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Welcome
          </p>

          <Link
            href="/get-started"
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/10"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Get Started
            <span aria-hidden className="text-base">→</span>
          </Link>
        </div>

        {/* Bottom fade to next section */}
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080814] to-transparent" />
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-[#080814] py-16 px-6">
        <p
          className="mb-8 text-center text-sm text-white/40"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Trusted by individuals and teams from
        </p>
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-3">
          {logoTiles.map((tile) => (
            <div
              key={tile.key}
              className="flex items-center justify-center rounded-xl bg-[#13131f] px-5 py-5 text-white"
            >
              {tile.content}
            </div>
          ))}
        </div>
      </section>

      {/* ── MEET BOS ── */}
      <MeetBosSection />

      {/* ── Assistive Intelligence + pill grid + infrastructure (reference layout) ── */}
      <section className="relative overflow-hidden bg-[#0d0d1a] px-6 pb-4 pt-20 md:px-14 md:pt-28">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-14 lg:gap-20">
          <div className="max-w-xl flex-1">
            <h2
              className="text-[clamp(2rem,4.8vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Assistive Intelligence
              <br />
              designed to{" "}
              <span className="relative inline-block align-baseline font-bold tracking-wide">
                BE
                <span
                  className="absolute -bottom-1 left-[-0.14em] right-[-0.14em] h-[5px] rounded-[1px] bg-white"
                  aria-hidden
                />
              </span>{" "}
              different.
            </h2>
          </div>
          <div className="relative min-h-[200px] flex-1 md:min-h-[320px]">
            <AssistiveHeroGraphic />
          </div>
        </div>

        <FeaturePillGrid />

        <div className="px-6 pb-6 pt-4 text-center md:pb-10 md:pt-2">
          <h2
            className="text-[clamp(1.65rem,4vw,2.75rem)] font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            The infrastructure layer.
          </h2>
          <div className="mt-7 md:mt-9">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/38 hover:bg-white/[0.1]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Launch BOS
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/28 text-[12px] font-light leading-none text-white/95">
                +
              </span>
            </Link>
          </div>
        </div>

        {/* Hero image with ellipse fade */}
        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <Image
              src="/media/productpagehero.png"
              alt="BOS in action"
              width={1920}
              height={1080}
              className="w-full object-cover"
            />
            {/* Blurred duplicate of image for elliptical blur effect */}
            <div
              className="absolute inset-x-0 bottom-0 overflow-hidden"
              style={{
                height: "80%",
                maskImage: "radial-gradient(ellipse 85% 95% at 50% 100%, black 0%, black 40%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 95% at 50% 100%, black 0%, black 40%, transparent 78%)",
              }}
            >
              <Image
                src="/media/productpagehero.png"
                alt=""
                fill
                aria-hidden
                className="object-cover object-bottom"
                style={{ filter: "blur(22px)", transform: "scale(1.06)" }}
              />
              {/* Dark gradient at the very bottom */}
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  height: "45%",
                  background: "linear-gradient(to top, rgba(13,13,26,0.9) 0%, rgba(13,13,26,0.42) 60%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center" style={{ background: "#0d0b1e" }}>
        {/* Ominous ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(100,60,200,0.22),transparent_70%)]" />

        {/* Purple beam */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
          <div
            style={{
              width: 4,
              height: 520,
              borderRadius: 9999,
              background:
                "linear-gradient(to bottom, rgba(210,170,255,1) 0%, rgba(160,100,255,0.65) 40%, transparent 100%)",
              boxShadow: "0 0 80px 28px rgba(150,90,255,0.32)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          <h2
            className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[1] text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Early Access
          </h2>

          <p
            className="mt-6 text-lg text-white/65"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <strong className="font-semibold text-white">This is the new playbook.</strong>{" "}
            Get Early Access.
          </p>

          {/* Email form */}
          <div className="mt-10 flex items-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 pl-5 backdrop-blur-md">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5" />
                <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder-white/35 outline-none"
              style={{ fontFamily: "var(--font-ui)" }}
            />
            <Link
              href={`/get-started${email ? `?email=${encodeURIComponent(email)}` : ""}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0d0b1e] transition hover:bg-white/90"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Get Started <span aria-hidden>→</span>
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/30" style={{ fontFamily: "var(--font-ui)" }}>
            This site is protected by reCAPTCHA and the{" "}
            <a href="https://policies.google.com/privacy" className="underline hover:text-white/50">
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" className="underline hover:text-white/50">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
