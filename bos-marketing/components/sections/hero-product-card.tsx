"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroProductCard() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.96, 1]);

  return (
    <section
      ref={ref}
      className="relative z-[1] flex justify-center px-4 pb-10 sm:px-8 sm:pb-16"
      aria-label="BOS product preview"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="w-full max-w-[980px]"
      >
        {/* Card shell */}
        <div className="rounded-2xl border border-white/10 bg-[#0d0d14]/80 p-2.5 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm sm:rounded-3xl sm:p-3">

          {/* Mac-style traffic lights */}
          <div className="mb-2.5 flex items-center gap-1.5 px-1.5 sm:mb-3 sm:px-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          {/* Screenshot */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/media/BOSTrial.png"
              alt="BOS product interface  -  GENIE AI workspace"
              width={1920}
              height={1080}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
