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

export default function HomePage() {
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
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
