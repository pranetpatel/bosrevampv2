import Image from "next/image";
import { HeroMicroCards } from "../hero-micro-cards";
import { HeroVideo } from "../hero-video";
import { SmartButton } from "../smart-button";
import { TypewriterHeading } from "./typewriter-heading";

export function HeroSection() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pb-24 pt-36 text-center"
    >
      <HeroVideo />

      <div className="relative z-[2] flex flex-col items-center justify-center">
        <div id="hero-logo-anchor" className="mb-8">
          <Image
            src="/BOS Branding/FullLogoNoBackground.svg"
            alt=""
            aria-hidden
            width={220}
            height={72}
            priority
            className="mx-auto mb-8 h-10 w-auto max-w-[min(280px,85vw)] md:h-14"
          />
        </div>
        <p
          className="animate-fade-up mb-10 inline-flex items-center gap-2.5 font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.22em] text-violet-200/90"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)] shadow-[0_0_12px_rgba(147,51,234,0.65)]" />
          Business Orchestration System
        </p>
        <div
          className="animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <TypewriterHeading />
        </div>
        <div
          className="animate-fade-up mx-auto mt-9 max-w-2xl px-2"
          style={{ animationDelay: "0.75s" }}
        >
          <span className="font-[family-name:var(--font-sans)] block text-[clamp(1.05rem,2.5vw,1.35rem)] font-medium leading-[1.45] tracking-tight text-white/88">
            Built for teams who&apos;d rather do than manage.
          </span>
        </div>
        <div
          className="animate-fade-up mx-auto mt-5 px-2 sm:mt-6"
          style={{ animationDelay: "0.9s" }}
        >
          <HeroMicroCards />
        </div>
        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-5 sm:mt-10"
          style={{ animationDelay: "1.05s" }}
        >
          <SmartButton
            href="/get-started"
            cursorLabel="get started"
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--orchid)] px-6 py-3.5 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-white shadow-[0_12px_40px_var(--purple-glow)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--magenta)] sm:px-8 sm:py-4 md:px-10"
          >
            Request Trial Run +
          </SmartButton>
          <SmartButton
            href="/#introduce"
            cursorLabel="watch"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-[family-name:var(--font-ui)] text-sm font-semibold text-white/90 transition hover:border-white hover:text-white sm:px-8 sm:py-4"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs">
              ▶
            </span>
            Watch Demo
          </SmartButton>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 opacity-70">
        <span className="h-14 w-px bg-gradient-to-b from-neutral-500 to-[rgb(255_255_255_/_0)]" />
        <p className="font-[family-name:var(--font-sans)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          Scroll
        </p>
      </div>
    </section>
  );
}
