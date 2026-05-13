import Link from "next/link";
import { CycleHeadline } from "../cycle-headline";
import { HeroMicroCards } from "../hero-micro-cards";
import { HeroVideo } from "../hero-video";

export function HeroSection() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pb-24 pt-36 text-center"
    >
      <HeroVideo />
      <p
        className="animate-fade-up relative z-[2] mb-10 inline-flex items-center gap-2.5 font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.22em] text-white/65"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)]" />
        Business Orchestration System
      </p>
      <div
        className="animate-fade-up relative z-[2]"
        style={{ animationDelay: "0.45s" }}
      >
        <div className="flex items-center justify-center overflow-hidden">
          <CycleHeadline />
        </div>
        <span className="font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,9.25rem)] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_60px_rgba(0,0,0,0.4)]">
          Made Simple<span className="text-[var(--cyan)]">.</span>
        </span>
      </div>
      <div
        className="animate-fade-up relative z-[2] mx-auto mt-9 max-w-2xl px-2"
        style={{ animationDelay: "0.75s" }}
      >
        <span className="font-[family-name:var(--font-sans)] block text-[clamp(1.05rem,2.5vw,1.35rem)] font-semibold leading-[1.4] tracking-tight text-white/90">
          Fragmented ops → work made simple by execution
        </span>
      </div>
      <div
        className="animate-fade-up relative z-[2] mx-auto mt-5 px-2 sm:mt-6"
        style={{ animationDelay: "0.9s" }}
      >
        <HeroMicroCards />
      </div>
      <div
        className="animate-fade-up relative z-[2] mt-8 flex flex-wrap items-center justify-center gap-5 sm:mt-10"
        style={{ animationDelay: "1.05s" }}
      >
        <Link
          href="/demo"
          className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--orchid)] px-10 py-4 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-white shadow-[0_12px_40px_var(--purple-glow)] transition hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cyan)]"
        >
          Get started
        </Link>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-[family-name:var(--font-ui)] text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs">
            ▶
          </span>
          Watch demo
        </Link>
      </div>
      {/* Feather hero video into the strip below — avoids a hard horizontal seam */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(5.5rem,18vh,10rem)] bg-gradient-to-b from-[var(--surface-dark-clear)] via-[var(--surface-dark)]/82 to-[var(--surface-dark)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 opacity-70">
        <span className="h-14 w-px bg-gradient-to-b from-neutral-500 to-[rgb(10_10_10_/_0)]" />
        <p className="font-[family-name:var(--font-sans)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          Scroll
        </p>
      </div>
    </section>
  );
}
