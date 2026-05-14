import Image from "next/image";
import Link from "next/link";
import { HeroMicroCards } from "../hero-micro-cards";
import { HeroVideo } from "../hero-video";

export function HeroSection() {
  return (
    <section
      id="welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pb-24 pt-36 text-center"
    >
      <HeroVideo />
      <div
        className="animate-fade-up relative z-[2] mb-8"
        style={{ animationDelay: "0.2s" }}
      >
        <Image
          src="/BOS Branding/FullLogoNoBackground.svg"
          alt="BOS"
          width={220}
          height={72}
          priority
          className="mx-auto mb-8 h-10 w-auto max-w-[min(280px,85vw)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] md:h-14"
        />
      </div>
      <p
        className="animate-fade-up relative z-[2] mb-10 inline-flex items-center gap-2.5 font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.22em] text-violet-200/90"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)] shadow-[0_0_12px_rgba(147,51,234,0.65)]" />
        Business Orchestration System
      </p>
      <div
        className="animate-fade-up relative z-[2]"
        style={{ animationDelay: "0.45s" }}
      >
        <h1 className="flex flex-wrap items-end justify-center gap-x-[0.08em] text-center font-[family-name:var(--font-display)] text-[clamp(2.75rem,10vw,8.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.25)]">
          <span className="whitespace-nowrap">Work Made Simple</span>
          <span
            className="mb-[0.14em] inline-block h-[0.26em] min-h-[9px] w-[0.26em] min-w-[9px] rounded-[3px] bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)] shadow-[0_0_28px_rgba(147,51,234,0.55)] sm:mb-[0.2em]"
            aria-hidden
          />
        </h1>
      </div>
      <div
        className="animate-fade-up relative z-[2] mx-auto mt-9 max-w-2xl px-2"
        style={{ animationDelay: "0.75s" }}
      >
        <span className="font-[family-name:var(--font-sans)] block text-[clamp(1.05rem,2.5vw,1.35rem)] font-medium leading-[1.45] tracking-tight text-white/88">
          Built for teams who&apos;d rather do than manage.
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
          href="/get-started"
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--orchid)] px-6 py-3.5 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-white shadow-[0_12px_40px_var(--purple-glow)] transition hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--magenta)] sm:px-8 sm:py-4 md:px-10"
        >
          Request Trial Run +
        </Link>
        <Link
          href="/#introduce"
          className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-[family-name:var(--font-ui)] text-sm font-semibold text-white/90 transition hover:border-white hover:text-white sm:px-8 sm:py-4"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs">
            ▶
          </span>
          Watch Demo
        </Link>
      </div>
      {/* Long multi-stop ramp into the white chaos shell — see `.section-feather-hero-to-light` */}
      <div
        className="section-feather-hero-to-light pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[clamp(7.5rem,38vh,18rem)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 opacity-70">
        <span className="h-14 w-px bg-gradient-to-b from-neutral-500 to-[rgb(255_255_255_/_0)]" />
        <p className="font-[family-name:var(--font-sans)] text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          Scroll
        </p>
      </div>
    </section>
  );
}
