"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/resources", label: "Resources" },
  { href: "/mba", label: "MBA" },
  { href: "/demo", label: "Demo" },
] as const;

/**
 * Home: glass bar appears after scrolling past hero. Inner pages: use alwaysSolid.
 */
export function SiteNav({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrollBasedSolid, setScrollBasedSolid] = useState(false);

  useEffect(() => {
    if (alwaysSolid) return;

    const tick = () => {
      const hero = document.getElementById("welcome");
      setScrollBasedSolid(!hero || window.scrollY > hero.offsetHeight * 0.88);
    };

    const raf = requestAnimationFrame(() => tick());
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [alwaysSolid]);

  const solidBar = alwaysSolid || scrollBasedSolid;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[200] flex items-center justify-between px-6 py-5 transition-colors duration-300 md:px-14 ${
        solidBar
          ? "border-b border-white/10 bg-[var(--surface-dark)]/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
      >
        BOS
      </Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-[family-name:var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-opacity hover:opacity-80"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/demo"
        className="font-[family-name:var(--font-ui)] bg-[var(--cyan)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--surface-dark)] shadow-[0_0_20px_rgba(4,209,224,0.35)] transition hover:-translate-y-px hover:shadow-[0_0_32px_rgba(4,209,224,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
      >
        Get started
      </Link>
    </header>
  );
}
