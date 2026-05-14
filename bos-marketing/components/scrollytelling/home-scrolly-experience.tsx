"use client";

import { AmbientSiteCanvas } from "@/components/ambient-site-canvas";
import { ChapterNav } from "@/components/chapter-nav";
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
import { stripIconsHeroMarquee } from "@/components/icons/bos-strip-icons";
import { HomeMarqueeStrips } from "@/components/sections/home-marquee-strips";

/**
 * Homepage scroll is primarily vertical: chapters stack in document order.
 * The audience chapter (`ChapterAudienceSection`) is the lone exception — it pins
 * itself and translates vertical scroll into horizontal pan of its card track.
 */
export function HomeScrollyExperience() {
  return (
    <>
      <AmbientSiteCanvas />
      <SiteNav />
      <ChapterNav />
      <main className="relative z-[1] pr-20 text-[var(--foreground)] sm:pr-24 md:pr-28">
        <HeroSection />
        <HomeMarqueeStrips
          entries={stripIconsHeroMarquee}
          sectionId="strips"
          mode="marquee"
          eyebrow="BOS — every surface"
        />
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
