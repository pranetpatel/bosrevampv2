"use client";

import type { ReactNode } from "react";
import { MotionReveal } from "@/components/motion-reveal";

export function MotionSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <MotionReveal className={className} delay={delay}>
      {children}
    </MotionReveal>
  );
}
