"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ─── Logo definitions  -  mirrored from genieai-revamp Vision.tsx ──────── */

const SPONSORS = [
  {
    key: "google",
    logo: (
      <div className="flex flex-col items-center opacity-60 grayscale mix-blend-multiply">
        <Image src="/media/google-logo.svg" alt="Google" width={120} height={40} className="h-9 w-auto object-contain" />
        <span className="mt-1 text-[14px] font-medium leading-none tracking-wide text-black">Startups</span>
      </div>
    ),
  },
  {
    key: "microsoft",
    logo: (
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-[3px]">
          <div className="h-4 w-4 bg-black/60" />
          <div className="h-4 w-4 bg-black/60" />
          <div className="h-4 w-4 bg-black/60" />
          <div className="h-4 w-4 bg-black/60" />
        </div>
        <div className="flex flex-col text-left text-black/60">
          <span className="text-[26px] font-semibold leading-none tracking-tight">Microsoft</span>
          <span className="mt-1 text-[13px] font-medium leading-none">Startup</span>
        </div>
      </div>
    ),
  },
  {
    key: "nvidia",
    logo: (
      <div className="flex items-center gap-4 opacity-60 grayscale mix-blend-multiply">
        <Image src="/media/nvidia-logo.svg" alt="NVIDIA" width={160} height={30} className="h-[26px] w-auto object-contain" />
        <div className="h-10 w-px bg-black/30" />
        <span className="text-left text-[11px] uppercase leading-tight tracking-widest text-black">
          Inception<br />Program
        </span>
      </div>
    ),
  },
  {
    key: "atlassian",
    logo: (
      <div className="flex items-center gap-2.5 text-black/60">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M11.51 2c-.14 0-.28.05-.39.15L.31 11.51a.57.57 0 0 0-.15.39v.11a.57.57 0 0 0 .15.39l10.8 10.81c.11.1.25.15.39.15h11.93a.57.57 0 0 0 .57-.57V11.51a.57.57 0 0 0-.15-.39L13.06 2.31A.57.57 0 0 0 12.67 2h-1.16zm-5.76 11.5L12 7.76l6.25 6.25h-4.32l-1.93-1.94-1.94 1.94H5.75zm12.5 5.5l-6.25-6.25h4.32l1.93 1.93 1.94-1.93h4.31l-6.25 6.25z" />
        </svg>
        <span className="text-[26px] font-bold uppercase tracking-tight">Atlassian</span>
      </div>
    ),
  },
  {
    key: "aws",
    logo: (
      <div className="flex items-end gap-2 text-black/60">
        <span className="text-[32px] font-bold lowercase leading-none tracking-tighter">aws</span>
        <span className="mb-1 text-[16px] font-medium lowercase leading-none tracking-wide">startups</span>
      </div>
    ),
  },
];

/* ─── Marquee ─────────────────────────────────────────────────────────── */

const ROW_A = SPONSORS.slice(0, 3); // google, microsoft, nvidia  → left
const ROW_B = SPONSORS.slice(2);    // nvidia, atlassian, aws     → right

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof SPONSORS;
  direction: "left" | "right";
  duration: number;
}) {
  const from = direction === "left" ? 0 : "-50%";
  const to   = direction === "left" ? "-50%" : 0;
  return (
    <div className="flex w-max overflow-hidden">
      <motion.div
        className="flex items-center"
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex shrink-0 items-center">
            {items.map((s) => (
              <div key={s.key} className="flex w-[280px] shrink-0 items-center justify-center">
                {s.logo}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function PartnerProgramMarquee() {
  return (
    <div className="w-full overflow-hidden border-t border-black/5 bg-white py-10 mt-8">
      <MarqueeRow items={SPONSORS} direction="right" duration={40} />
    </div>
  );
}
