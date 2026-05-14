import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";

export function ChapterIntroduceSection() {
  return (
    <section id="introduce" className="relative z-[1] bg-[var(--surface-dark)] px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Text block */}
        <MotionReveal>
          <p className="mb-4 flex items-center gap-3 font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--cyan)]">
            <span className="h-px w-5 bg-[var(--cyan)]/80" aria-hidden />
            Introducing BOS
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[1.04] tracking-tight text-white">
            One Space.
            <br />
            <span className="bg-gradient-to-r from-[var(--magenta)] via-[var(--orchid)] to-[var(--cyan)] bg-clip-text text-transparent">
              Infinite Flow.
            </span>
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <p className="mt-5 font-[family-name:var(--font-sans)] text-[clamp(1rem,2vw,1.25rem)] font-semibold text-white/70">
            Your team thinks once. BOS handles the rest.
          </p>
        </MotionReveal>

        {/* Image card with button overlay */}
        <MotionReveal delay={0.14} className="relative mt-14 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/media/BOSTrial.png"
            alt="BOS — one unified workspace in action"
            width={1280}
            height={720}
            className="w-full object-cover"
            priority={false}
          />
          {/* Only a thin bottom fade so the image stays crisp */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.45)_100%)]" />

          {/* Centered CTA */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-4 rounded-full bg-[var(--orchid)] px-10 py-5 font-[family-name:var(--font-ui)] text-base font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_48px_rgba(124,58,237,0.65)] transition-all duration-200 hover:scale-[1.03] hover:bg-[var(--magenta)] hover:shadow-[0_12px_56px_rgba(218,52,241,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
            >
              Request Trial Run
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
