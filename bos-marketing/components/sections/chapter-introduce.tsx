import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";

export function ChapterIntroduceSection() {
  return (
    <section id="introduce" className="relative z-[1] overflow-hidden bg-[var(--surface-dark)] px-6 py-20 md:px-14 md:py-28">
      {/* Section Background Image */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <Image
          src="/media/BOSProduct-background.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-dark)] via-transparent to-[var(--surface-dark)]" />
      </div>
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

        {/* Replaced with new banner image as requested */}
        <MotionReveal delay={0.14} className="relative mt-14 overflow-hidden rounded-2xl border border-white/10">
          <Link href="/get-started" className="block cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/media/BOSChatxbanner.png"
              alt="Request a Trial"
              width={1280}
              height={720}
              className="w-full object-cover"
              priority
            />
          </Link>
        </MotionReveal>
      </div>
    </section>
  );
}
