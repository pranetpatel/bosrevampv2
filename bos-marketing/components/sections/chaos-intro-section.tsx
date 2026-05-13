import Image from "next/image";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion-reveal";

const chaosStats = [
  {
    n: "14",
    label: "Tools you're paying for",
    desc: "Each one good at one thing. None of them talking to each other.",
  },
  {
    n: "27",
    label: "Tabs open right now",
    desc: "The work is fine. The switching is killing you.",
  },
  {
    n: "∞",
    label: "Handoffs where context dies",
    desc: "A task born from a conversation that lives somewhere else.",
  },
  {
    n: "0",
    label: "Systems built to work together",
    desc: "Every platform promised simplicity. They gave you more software.",
  },
] as const;

export function ChaosIntroSection() {
  return (
    <section id="chaos" className="relative z-[1] bg-[var(--surface-dark)]">
      {/* Pull image under the strip above so the marquee bottom gradient can reveal it */}
      <div className="relative -mt-12 min-h-[72vh] overflow-hidden md:-mt-16">
        <Image
          src="/media/clutter.jpg"
          alt="Fragmented tools chaos"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Scrim: shell-tinted top so the photo reads as one field with the strip, not a third panel */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--surface-dark)_0%,rgb(10_10_10_/_0.78)_9%,rgb(10_10_10_/_0.32)_22%,rgba(0,0,0,0.5)_48%,var(--surface-dark)_100%)]" />

        {/* Headline */}
        <div className="relative z-[2] flex h-full min-h-[72vh] flex-col justify-end px-6 pb-16 md:px-14 md:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <MotionReveal>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[1.04] tracking-tight text-[#e8c84a]">
                How you currently
                <br />
                start your day.
              </h2>
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <p className="mt-4 font-[family-name:var(--font-sans)] text-[clamp(1rem,2vw,1.25rem)] font-semibold text-white/80">
                Work was never supposed to feel this complicated.
              </p>
            </MotionReveal>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="px-6 pb-16 pt-0 md:px-14 md:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <MotionStagger className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {chaosStats.map((s) => (
              <MotionStaggerItem key={s.label}>
                <div className="border-b border-white/10 bg-white/[0.03] px-8 py-10 transition-colors hover:bg-white/[0.05] md:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none text-white">
                    {s.n}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-base font-semibold text-white/90">
                    {s.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/50">
                    {s.desc}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
