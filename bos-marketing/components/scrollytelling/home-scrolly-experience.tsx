"use client";

import { ChapterNav } from "@/components/chapter-nav";
import { MouseParticleField } from "@/components/mouse-particle-field";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ChapterAudienceSection } from "@/components/sections/chapter-audience";
import { ChapterFlowPillarsSection } from "@/components/sections/chapter-flow-pillars";
import { ChapterIntroduceSection } from "@/components/sections/chapter-introduce";
import { ChapterManifestoSection } from "@/components/sections/chapter-manifesto";
import { ChapterSystemSection } from "@/components/sections/chapter-system";
import { ChapterTensionSection } from "@/components/sections/chapter-tension";
import { ChaosIntroSection } from "@/components/sections/chaos-intro-section";
import { BosMbaSection } from "@/components/sections/chapter-bos-mba";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { HomeMidStrip } from "@/components/sections/home-mid-strip";

/**
 * Homepage scroll is primarily vertical: chapters stack in document order.
 * The audience chapter (`ChapterAudienceSection`) is the lone exception — it pins
 * itself and translates vertical scroll into horizontal pan of its card track.
 */
export function HomeScrollyExperience() {
  return (
    <>
      <MouseParticleField />
      <SiteNav />
      <ChapterNav />
      <main className="relative z-[1] text-[var(--foreground)] md:pr-28">
        <HeroSection />
        <HomeMidStrip />
        <ChaosIntroSection />
        <ChapterTensionSection />
        <ChapterManifestoSection />
        <ChapterIntroduceSection />
        <ChapterSystemSection />
        <ChapterFlowPillarsSection />
        <ChapterAudienceSection />
        <BosMbaSection videoSrc="/video/BOSMBAHERO.mp4" />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
