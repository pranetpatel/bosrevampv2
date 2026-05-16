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

      {/* Energy beam  -  shrinks into orb as user scrolls */}
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
            Business Orchestration System  -  the infrastructure layer for intent, execution, and
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
        © 2023 - {year} BOS. All rights reserved.
      </p>
    </footer>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function StripeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933z" />
    </svg>
  );
}

function SalesforceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M10.012 4.7a4.66 4.66 0 0 1 3.35-1.42 4.7 4.7 0 0 1 4.238 2.658 3.888 3.888 0 0 1 1.422-.268 3.934 3.934 0 0 1 3.932 3.935 3.934 3.934 0 0 1-3.932 3.933H5.572a3.572 3.572 0 0 1 0-7.144 3.55 3.55 0 0 1 1.098.174A4.66 4.66 0 0 1 10.012 4.7z" />
    </svg>
  );
}

function HubSpotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M18.164 7.93V5.084a1.56 1.56 0 0 0 .898-1.407V3.64a1.56 1.56 0 0 0-1.56-1.56h-.027a1.56 1.56 0 0 0-1.56 1.56v.037a1.56 1.56 0 0 0 .898 1.407V7.93a4.43 4.43 0 0 0-2.1.918L7.197 4.21a1.72 1.72 0 0 0 .05-.4 1.73 1.73 0 1 0-1.73 1.73c.32 0 .616-.094.868-.252l7.2 4.574a4.44 4.44 0 0 0-.581 2.175 4.44 4.44 0 0 0 .698 2.39l-2.182 2.182a1.45 1.45 0 0 0-.42-.065 1.47 1.47 0 1 0 1.47 1.47 1.45 1.45 0 0 0-.065-.42l2.155-2.155a4.46 4.46 0 0 0 2.644.862 4.47 4.47 0 0 0 4.47-4.47 4.47 4.47 0 0 0-3.61-4.4zm-.694 6.81a2.12 2.12 0 1 1 0-4.24 2.12 2.12 0 0 1 0 4.24z" />
    </svg>
  );
}

function ShopifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M15.337.009S15.094 0 14.986 0c-.108 0-.31.027-.31.027s-.148.04-.4.121C13.94.04 13.416 0 12.954 0c-3.41 0-5.062 2.384-5.062 4.742 0 .27.027.527.067.77-.364.148-.648.256-.742.283-.621.175-.648.202-.729.783C6.42 6.984 5 17.946 5 17.946L15.84 20l4.88-1.054S15.337.009 15.337.009zM11.968 1.294c.35 0 .66.04.93.108-.013.054-.027.108-.04.162-.485 1.6-1.415 3.037-2.694 4.07a8.7 8.7 0 0 1-.175-1.697c0-1.348.755-2.643 1.979-2.643zm-.526 9.576c-.27.148-.512.256-.715.337-.31-.985-.877-2.36-1.818-3.2.958-.5 1.71-1.268 2.263-2.128.31.674.567 1.456.7 2.317-.189.216-.35.445-.43.674zm1.56-6.55c-.904.85-1.724 2.02-2.182 3.37-.783-.53-1.4-1.268-1.79-2.17.553-.904 1.415-1.54 2.452-1.54.514 0 1.013.134 1.52.34zm2.533 13.604l-5.466-1.186s.216-1.537.202-1.56c0-.027.054-.04.054-.04.77.202 1.818.31 2.964.31.985 0 1.96-.094 2.867-.283l-.621 2.759z" />
    </svg>
  );
}

function ZapierIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M14.924 9.1v-.006l3.682-3.682A8.979 8.979 0 0 0 17.062 4l-3.682 3.682H13.374V7.676L9.694 4a8.9 8.9 0 0 0-1.409 1.41l3.682 3.682v.007H11.96V9.1l-3.69 3.683a9.03 9.03 0 0 0 1.41 1.41l3.683-3.682h.007v.007l.001 5.213a9.08 9.08 0 0 0 1.997 0l.001-5.213h.007L18.059 14.2a8.9 8.9 0 0 0 1.409-1.41L15.783 9.1h-.859zM12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 1.8a10.2 10.2 0 1 1 0 20.4A10.2 10.2 0 0 1 12 1.8z" />
    </svg>
  );
}

function QuickBooksIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 16.8V7.2c0-.662.538-1.2 1.2-1.2h2.4c1.985 0 3.6 1.615 3.6 3.6s-1.615 3.6-3.6 3.6H12v3.6H9.6zm2.4-6h1.2a1.2 1.2 0 1 0 0-2.4H12v2.4z" />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M11.4 0H0v11.4h11.4V0zm12.6 0H12.6v11.4H24V0zM11.4 12.6H0V24h11.4V12.6zm12.6 0H12.6V24H24V12.6z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215l2.234-.001V19.9c0 1.71 1.351 3.087 3.105 3.087V12.518a1.003 1.003 0 0 0-1.005-1.005zm5.021-5.025H5.135a5.215 5.215 0 0 0 5.215 5.215h2.248v3.172a3.096 3.096 0 0 0 3.096 3.096V7.503a.99.99 0 0 0-.102-.015zm5.07-5.019H10.209a5.215 5.215 0 0 0 5.215 5.215h2.248v3.172A3.096 3.096 0 0 0 20.768 12.953V2.474a.99.99 0 0 0-.106-.005z" />
    </svg>
  );
}

function ZendeskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
      <path d="M11.183 6.032V20H.05L11.183 6.032zM11.183 4C11.183 1.794 9.37 0 7.13 0S3.077 1.794 3.077 4h8.106zm1.634 16c0 2.206 1.813 4 4.053 4s4.053-1.794 4.053-4h-8.106zm0-2.032L23.95 4H12.817v13.968z" />
    </svg>
  );
}

const integrationTiles = [
  { key: "slack", label: "Slack", icon: <SlackIcon /> },
  { key: "stripe", label: "Stripe", icon: <StripeIcon /> },
  { key: "notion", label: "Notion", icon: <NotionIcon /> },
  { key: "salesforce", label: "Salesforce", icon: <SalesforceIcon /> },
  { key: "hubspot", label: "HubSpot", icon: <HubSpotIcon /> },
  { key: "shopify", label: "Shopify", icon: <ShopifyIcon /> },
  { key: "zapier", label: "Zapier", icon: <ZapierIcon /> },
  { key: "quickbooks", label: "QuickBooks", icon: <QuickBooksIcon /> },
  { key: "microsoft", label: "Microsoft 365", icon: <MicrosoftIcon /> },
  { key: "google", label: "Google Workspace", icon: <GoogleIcon /> },
  { key: "jira", label: "Jira", icon: <JiraIcon /> },
  { key: "zendesk", label: "Zendesk", icon: <ZendeskIcon /> },
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
    <div 
      className="relative mx-auto mt-14 w-full px-3 sm:mt-20 sm:px-6"
      style={{
        maskImage: "linear-gradient(to right, transparent calc(50% - 400px), black calc(50% - 200px), black calc(50% + 200px), transparent calc(50% + 400px))",
        WebkitMaskImage: "linear-gradient(to right, transparent calc(50% - 400px), black calc(50% - 200px), black calc(50% + 200px), transparent calc(50% + 400px))",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(240, 130, 255, 0.3) 0%, rgba(180, 90, 220, 0.15) 30%, rgba(100, 50, 140, 0.05) 50%, transparent 70%)",
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

      {/* ── INTEGRATIONS GRID ── */}
      <section className="bg-[#080814] py-16 px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-white/30"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          Integrations
        </p>
        <h2
          className="mb-10 text-center text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Works with the tools you already use
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {integrationTiles.map((tile) => (
            <div
              key={tile.key}
              className="flex flex-col items-center justify-center gap-2.5 rounded-xl bg-[#13131f] px-3 py-5 text-white/80 transition hover:bg-[#1a1a28] hover:text-white"
            >
              {tile.icon}
              <span className="text-[11px] font-medium text-center leading-tight" style={{ fontFamily: "var(--font-ui)" }}>
                {tile.label}
              </span>
            </div>
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
