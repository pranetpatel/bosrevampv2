"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AsteroidOrb } from "@/components/asteroid-orb";
import { MeetBosSection } from "@/components/sections/meet-bos-section";
import { SiteNav } from "@/components/site-nav";

function useScrollSectionProgress(
  ref: React.RefObject<HTMLElement | null>,
  factor = 0.8
): number {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const h = el.offsetHeight;
      setProgress(Math.max(0, Math.min(1, -top / (h * factor))));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, factor]);
  return progress;
}

function SpinningRings({
  progress,
  orbSize,
  color = "rgba(255,255,255,0.065)",
}: {
  progress: number;
  orbSize: number;
  color?: string;
}) {
  // Vertical coin-spin: rings stand upright, rotate around Y-axis (Z in screen space)
  const rings = [
    { scale: 1.6, phase: 0, speed: 1.0 },
    { scale: 2.1, phase: 55, speed: -0.7 },
    { scale: 2.65, phase: 110, speed: 0.9 },
  ];
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {rings.map((ring, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orbSize * ring.scale,
            height: orbSize * ring.scale,
            border: `1px solid ${color}`,
            transform: `perspective(900px) rotateY(${ring.phase + progress * 360 * ring.speed}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function OrbHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollSectionProgress(sectionRef, 0.75);

  const beamOpacity = Math.max(0, 1 - progress * 2.8);
  const beamScaleY = Math.max(0.08, 1 - progress * 0.92);
  const ORB_SIZE = 148;

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-[72px]"
      style={{ background: "#0c0b1a" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(100,60,220,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_55%,rgba(140,80,255,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_20%_80%,rgba(30,20,100,0.5),transparent_60%)]" />

      {/* Energy beam – shrinks into orb as user scrolls */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 origin-top"
        style={{
          opacity: beamOpacity,
          transform: `translateX(-50%) scaleY(${beamScaleY})`,
          transformOrigin: "top center",
        }}
        aria-hidden
      >
        <div
          style={{
            width: 18,
            height: 480,
            borderRadius: 9999,
            background:
              "linear-gradient(to bottom, rgba(230,190,255,1) 0%, rgba(180,110,255,0.85) 30%, rgba(130,70,240,0.35) 65%, transparent 100%)",
            boxShadow:
              "0 0 40px 20px rgba(170,100,255,0.7), 0 0 100px 50px rgba(130,70,230,0.4), 0 0 180px 80px rgba(100,50,200,0.2)",
            filter: "blur(1px)",
          }}
        />
      </div>

      {/* Orb + rings container */}
      <div className="relative flex items-center justify-center" style={{ width: ORB_SIZE * 2.8, height: ORB_SIZE * 2.8 }}>
        <SpinningRings progress={progress} orbSize={ORB_SIZE} />
        <div className="relative z-10">
          <AsteroidOrb size={ORB_SIZE} scrollSpin energyLevel={progress} />
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center -mt-8">
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
          Get Started <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080814] to-transparent" />
    </section>
  );
}


/** Pill labels for the “infrastructure layer” band (replaces placeholder SEO copy). */
const infrastructureTags = [
  "Authentication",
  "Authorization",
  "Database",
  "Edge functions",
  "Event bus",
  "Webhooks",
  "API gateway",
  "Observability",
  "Distributed tracing",
  "Message queues",
  "Cache layer",
  "Object storage",
  "Secrets management",
  "KMS",
  "IdP & SSO",
  "RBAC",
  "Audit logs",
  "Data pipeline",
  "Vector store",
  "Embeddings",
  "LLM routing",
  "Agent runtime",
  "Workflow engine",
  "Real-time sync",
  "Multi-tenant",
  "Usage metering",
  "Notifications",
  "Search indexing",
  "CDN",
  "WAF",
  "IaC",
  "Containers",
  "Service mesh",
  "Cron & jobs",
  "Rate limiting",
  "Idempotency",
  "Schema registry",
  "Feature flags",
  "Backups",
  "DR failover",
];

const PILL_GRID_ROWS = 8;
const PILL_GRID_COLS = 18;

function LegacyProductFooter() {
  const year = new Date().getFullYear();
  const col = (title: string, items: { href: string; label: string }[]) => (
    <div className="flex flex-col gap-2 text-sm">
      <span className="font-semibold text-white">{title}</span>
      {items.map((item) => (
        <Link key={item.label} href={item.href} className="text-white/60 hover:text-white">
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="relative z-[1] border-t border-white/10 bg-[var(--surface-dark)] px-6 py-16 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/BOS Branding/FullLogoNoBackground.svg"
              alt="BOS"
              width={96}
              height={31}
            />
          </Link>
          <p className="mt-4 font-[family-name:var(--font-sans)] text-sm text-white/60">
            Business Orchestration System — the infrastructure layer for intent, execution, and
            continuous context across teams and agents.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-12">
          {col("Product", [
            { href: "/how-it-works", label: "Features" },
            { href: "/technology", label: "Roadmap" },
            { href: "/resources", label: "Docs" },
            { href: "/pricing", label: "Pricing" },
          ])}
          {col("Company", [
            { href: "/story", label: "About" },
            { href: "/partners", label: "Careers" },
            { href: "/resources", label: "Blog" },
            { href: "/get-started", label: "Contact" },
          ])}
          {col("Resources", [
            { href: "/get-started", label: "Community" },
            { href: "/get-started", label: "Support" },
            { href: "/technology", label: "Security" },
            { href: "/manifesto", label: "Terms" },
          ])}
          {col("Social", [
            { href: "https://discord.com", label: "Discord" },
            { href: "https://twitter.com", label: "Twitter" },
            { href: "https://github.com", label: "GitHub" },
            { href: "https://youtube.com", label: "YouTube" },
          ])}
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl text-center text-xs text-white/45">
        © 2023–{year} BOS. All rights reserved.
      </p>
    </footer>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.481 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 11.969C22 6.463 17.522 2 12 2z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52 4.51 4.51 0 0 1-4.505 4.505 4.475 4.475 0 0 1-2.8-.984 4.475 4.475 0 0 1-5.6 0 4.51 4.51 0 0 1-6.305-6.305 4.475 4.475 0 0 1 5.6-5.6 4.475 4.475 0 0 1 2.8.984 4.51 4.51 0 0 1 4.505-4.505c.698 0 1.355.16 1.943.444l.895-4.183c.034-.17.172-.295.337-.295.068 0 .134.02.191.056l2.66 1.11c.16.067.273.219.295.395a.42.42 0 0 1-.045.251l-1.123 2.385zm-.971 9.942a1.145 1.145 0 1 0 0-2.29 1.145 1.145 0 0 0 0 2.29zm-7.402 0a1.145 1.145 0 1 0-.001-2.29 1.145 1.145 0 0 0 .001 2.29z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function GitBookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M10.802 17.394a.731.731 0 01-.713-.567l-3.114-14.2a.695.695 0 01.713-.832h6.628a.7.7 0 01.674.515l4.114 13.99a.712.712 0 01-.444.832l-7.562 2.272zM19.371 18.713l-2.267-8.053a.713.713 0 00-.686-.515H7.11a.7.7 0 00-.674.515L2.322 18.713a.712.712 0 00.444.832l7.562 2.272a.731.731 0 00.713-.567l1.84-8.4a.695.695 0 01.686-.567h4.804a.7.7 0 01.674.515l1.84 8.4a.712.712 0 00.444.832l.713-.832z" />
    </svg>
  );
}

const integrationTiles = [
  { key: "discord", label: "Discord", href: "https://discord.com", icon: <DiscordIcon /> },
  { key: "x", label: "Twitter", href: "https://twitter.com", icon: <XIcon /> },
  { key: "github", label: "GitHub", href: "https://github.com", icon: <GitHubIcon /> },
  { key: "youtube", label: "YouTube", href: "https://youtube.com", icon: <YouTubeIcon /> },
  { key: "reddit", label: "Reddit", href: "https://reddit.com", icon: <RedditIcon /> },
  { key: "telegram", label: "Telegram", href: "https://telegram.org", icon: <TelegramIcon /> },
  { key: "medium", label: "Medium", href: "https://medium.com", icon: <MediumIcon /> },
  { key: "gitbook", label: "GitBook", href: "https://gitbook.com", icon: <GitBookIcon /> },
] as const;

function AssistiveHeroGraphic({ scrollProgress }: { scrollProgress: number }) {
  const ORB_SIZE = 200;
  return (
    <div
      className="relative mx-auto flex h-[min(340px,55vw)] w-full max-w-[520px] items-center justify-end md:h-[min(440px,48vw)] md:max-w-none"
      aria-hidden
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: ORB_SIZE * 2.8, height: ORB_SIZE * 2.8, marginRight: "-10%" }}
      >
        <SpinningRings
          progress={scrollProgress}
          orbSize={ORB_SIZE}
          color="rgba(255,255,255,0.055)"
        />
        <div className="relative z-10">
          <AsteroidOrb size={ORB_SIZE} scrollSpin silver />
        </div>
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
              const label = infrastructureTags[(row + i) % infrastructureTags.length];
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

export default function ProductPage() {
  const [email, setEmail] = useState("");
  const assistiveSectionRef = useRef<HTMLElement>(null);
  const assistiveProgress = useScrollSectionProgress(assistiveSectionRef, 0.6);

  return (
    <>
      <SiteNav alwaysSolid />

      {/* ── HERO ── */}
      <OrbHeroSection />

      {/* ── COMMUNITY GRID ── */}
      <section className="bg-[#080814] py-16 px-6">
        <p
          className="mb-8 text-center text-sm text-white/40"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Join the community on
        </p>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {integrationTiles.map((tile) => (
            <a
              key={tile.key}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#13131f] px-4 py-5 text-white transition hover:bg-[#1a1a28]"
            >
              {tile.icon}
              <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-ui)" }}>
                {tile.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      <MeetBosSection />

      {/* ── Assistive Intelligence + infrastructure layer ── */}
      <section ref={assistiveSectionRef} className="relative overflow-hidden bg-[#0d0d1a] px-6 pb-4 pt-20 md:px-14 md:pt-28">
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
            <AssistiveHeroGraphic scrollProgress={assistiveProgress} />
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
              href="/technology"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/22 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/38 hover:bg-white/[0.1]"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <Image
              src="/media/productpagehero.png"
              alt="BOS in action"
              width={1920}
              height={1080}
              className="w-full object-cover"
            />
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
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-24 text-center"
        style={{ background: "#0d0b1e" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(100,60,200,0.22),transparent_70%)]" />

        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
          <div
            style={{
              width: 18,
              height: 520,
              borderRadius: 9999,
              background:
                "linear-gradient(to bottom, rgba(230,190,255,1) 0%, rgba(180,110,255,0.85) 30%, rgba(130,70,240,0.35) 65%, transparent 100%)",
              boxShadow:
                "0 0 40px 20px rgba(170,100,255,0.7), 0 0 100px 50px rgba(130,70,230,0.4), 0 0 180px 80px rgba(100,50,200,0.2)",
              filter: "blur(1px)",
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
            Join the waitlist for the latest updates and news.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 sm:rounded-full sm:border sm:border-white/15 sm:bg-white/5 sm:p-2 sm:pl-5 sm:backdrop-blur-md">
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 pl-5 backdrop-blur-md sm:contents">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5" />
                  <path
                    d="M4.5 7l2 2 3-3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder-white/35 outline-none"
                style={{ fontFamily: "var(--font-ui)" }}
              />
            </div>
            <Link
              href={`/get-started${email ? `?email=${encodeURIComponent(email)}` : ""}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:py-2.5 text-sm font-bold text-[#0d0b1e] transition hover:bg-white/90"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              Join the waitlist <span aria-hidden>→</span>
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

      <LegacyProductFooter />
    </>
  );
}
