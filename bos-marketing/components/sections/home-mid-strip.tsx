import Image from "next/image";

import { HomeIconMarquee } from "@/components/sections/home-icon-marquee";
import { PartnerProgramMarquee } from "@/components/sections/partner-program-marquee";

const partnerLogos = [
  { src: "/logos/cohere.svg", alt: "Cohere", w: 88, h: 22 },
  { src: "/logos/tesla.svg", alt: "Tesla", w: 72, h: 22 },
  { src: "/logos/linkedin.svg", alt: "LinkedIn", w: 96, h: 24 },
  { src: "/logos/miracleplus.svg", alt: "Miracle Plus", w: 100, h: 22 },
  { src: "/logos/lark.svg", alt: "Lark", w: 64, h: 22 },
  { src: "/logos/tinder.svg", alt: "Tinder", w: 72, h: 22 },
] as const;

/** Connector marquee + partner strip  -  light band between hero and chaos. */
export function HomeMidStrip() {
  return (
    <section
      aria-label="Product surfaces and partners"
      className="relative z-[1] border-b border-black/[0.06] bg-white px-0 py-10 md:py-14"
    >
      <HomeIconMarquee />
      <PartnerProgramMarquee />

      <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-[0.72] grayscale md:mt-14 md:gap-x-14">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-5 w-auto object-contain md:h-6"
          />
        ))}
      </div>
    </section>
  );
}
