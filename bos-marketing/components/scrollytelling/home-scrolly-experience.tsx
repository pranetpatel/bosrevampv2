"use client";

import { ChapterNav } from "@/components/chapter-nav";
import { MouseParticleField } from "@/components/mouse-particle-field";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ScrollLogo } from "@/components/scroll-logo";
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
 * Homepage scroll experience.
 * Chapters 1–4 (Tension → System) form a sticky card deck.
 * FlowPillars, Audience, and beyond resume normal flow.
 */
export function HomeScrollyExperience() {
  return (
    <>
      <MouseParticleField />
      <SiteNav noLogo />
      <ScrollLogo />
      <ChapterNav />
      <main className="relative z-[1] text-[var(--foreground)] md:pr-28">
        <HeroSection />
        <HomeMidStrip />
        <ChaosIntroSection />

        {/* Sticky stacked chapter deck — Tension through System */}
        <div className="relative" data-chapter-stack>
          <div className="sticky top-0 z-[10]" data-chapter-stack-item="tension">
            <div className="sticky-chapter-card">
              <ChapterTensionSection />
            </div>
          </div>
          <div className="sticky top-0 z-[11]" data-chapter-stack-item="manifesto">
            <div className="sticky-chapter-card">
              <ChapterManifestoSection />
            </div>
          </div>
          <div className="sticky top-0 z-[12]" data-chapter-stack-item="introduce">
            <div className="sticky-chapter-card">
              <ChapterIntroduceSection />
            </div>
          </div>
          <div className="sticky top-0 z-[13]" data-chapter-stack-item="system">
            <div className="sticky-chapter-card">
              <ChapterSystemSection />
            </div>
          </div>
        </div>

        {/* Normal flow resumes here */}
        <ChapterFlowPillarsSection />
        <ChapterAudienceSection />
        <BosMbaSection videoSrc="/video/BOSMBAHERO.mp4" />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
