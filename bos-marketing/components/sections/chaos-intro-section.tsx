"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function ChaosIntroSection() {
  return (
    <section id="chaos" className="relative z-[1] bg-white">
      <div className="relative -mt-10 pt-6 md:-mt-14 md:pt-10">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="mt-[clamp(1rem,3vw,2.5rem)] overflow-hidden rounded-t-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.08),0_24px_80px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]">
            {/* Purple glow frame — mockup product panel */}
            <div className="rounded-t-[20px] bg-gradient-to-br from-[var(--orchid)] via-[#9333ea] to-[var(--magenta)] p-[3px] shadow-[0_0_52px_rgba(124,58,237,0.42),0_0_100px_rgba(26,83,253,0.18)]">
              <div className="relative min-h-[min(64vh,680px)] w-full overflow-hidden rounded-[17px] bg-neutral-950">
                <Image
                  src="/media/clutter.jpg"
                  alt="Fragmented tools chaos"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)`,
                  }}
                />

                <div className="absolute inset-0 z-[2] flex min-h-[min(64vh,680px)] flex-col justify-end items-start px-6 pb-10 text-left sm:px-10 sm:pb-12 md:px-12 md:pb-14 lg:px-14 lg:pb-16">
                  <div className="w-full max-w-[min(520px,90vw)]">
                    <motion.h2
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="font-[family-name:var(--font-display)] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#d4a853]"
                      style={{
                        fontSize: "clamp(1.65rem, 3.6vw, 3rem)",
                        textShadow:
                          "0 0 24px rgba(212,168,83,0.4), 0 2px 8px rgba(0,0,0,0.8), 0 4px 18px rgba(0,0,0,0.55)",
                      }}
                    >
                      How you currently
                      <br />
                      start your day.
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 overflow-hidden rounded-b-2xl border-t border-black/[0.07] bg-white md:grid-cols-2 lg:grid-cols-4"
            >
              {chaosStats.map((s) => (
                <motion.div key={s.label} variants={statVariants}>
                  <div className="border-b border-black/[0.07] bg-white px-8 py-10 transition-colors hover:bg-neutral-50 md:border-b-0 md:border-r md:border-black/[0.07] md:last:border-r-0 lg:border-b-0">
                    <p className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none tracking-[-0.01em] text-neutral-900">
                      {s.n}
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-display)] text-[15px] font-bold tracking-[-0.01em] text-neutral-900">
                      {s.label}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-sans)] text-[13px] font-normal leading-relaxed text-neutral-600">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Clean 40px white buffer — dark chapter stack slides over from here */}
        <div className="h-10 bg-white" aria-hidden />
      </div>
    </section>
  );
}
