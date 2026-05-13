"use client";

import { ChapterNav } from "@/components/chapter-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ChapterAudienceSection } from "@/components/sections/chapter-audience";
import { ChapterConvictionSection } from "@/components/sections/chapter-conviction";
import { ChapterFlowSection } from "@/components/sections/chapter-flow";
import { ChapterManifestoSection } from "@/components/sections/chapter-manifesto";
import { ChapterSystemSection } from "@/components/sections/chapter-system";
import { ChapterTensionSection } from "@/components/sections/chapter-tension";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { CapsuleStackSection } from "./capsule-stack-section";
import { HorizontalPanel, HorizontalRail } from "./horizontal-rail";
import { LenisGsapRoot } from "./lenis-gsap-root";
import { ScrollyModeProvider } from "./scrolly-mode-context";

/**
 * Flow: vertical hero → horizontal (gap + system) → vertical (flow + conviction) →
 * horizontal (manifesto + tribe) → vertical stack + CTA.
 */
function HomeVerticalFallback() {
  return (
    <>
      <SiteNav />
      <ChapterNav />
      <main className="text-[var(--foreground)]">
        <HeroSection />
        <ChapterTensionSection />
        <ChapterSystemSection />
        <ChapterFlowSection />
        <ChapterConvictionSection />
        <ChapterManifestoSection />
        <ChapterAudienceSection />
        <CapsuleStackSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

export function HomeScrollyExperience() {
  const reduced = usePrefersReducedMotion();
  if (reduced) {
    return <HomeVerticalFallback />;
  }

  return (
    <ScrollyModeProvider>
      <LenisGsapRoot>
        <SiteNav />
        <ChapterNav />
        <main className="text-[var(--foreground)]">
          <HeroSection />

          <HorizontalRail railId="rail-arc">
            <HorizontalPanel chapterId="tension">
              <ChapterTensionSection />
            </HorizontalPanel>
            <HorizontalPanel chapterId="system">
              <ChapterSystemSection />
            </HorizontalPanel>
          </HorizontalRail>

          <ChapterFlowSection />
          <ChapterConvictionSection />

          <HorizontalRail railId="rail-principles">
            <HorizontalPanel chapterId="manifesto">
              <ChapterManifestoSection />
            </HorizontalPanel>
            <HorizontalPanel chapterId="tribe">
              <ChapterAudienceSection />
            </HorizontalPanel>
          </HorizontalRail>

          <CapsuleStackSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </LenisGsapRoot>
    </ScrollyModeProvider>
  );
}
