import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import type { ReactNode } from "react";

/** Inner marketing routes: solid nav + your content + footer. */
export function InnerPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav alwaysSolid />
      {children}
      <SiteFooter />
    </>
  );
}
