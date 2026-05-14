"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/mba", label: "MBA" },
  { href: "/pricing", label: "Pricing" },
] as const;

/**
 * Home: glass bar appears after scrolling past hero. Inner pages: use alwaysSolid.
 */
export function SiteNav({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrollBasedSolid, setScrollBasedSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const scrollToTop = useCallback(() => {
    if (lenis) lenis.scrollTo(0, { duration: 0.9 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lenis]);

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solidBar = alwaysSolid || scrollBasedSolid;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[200] flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 md:px-14 ${
        solidBar
          ? "border-b border-white/10 bg-[var(--surface-dark)]/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Link href="/" className="flex shrink-0 items-center drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
        <Image
          src="/BOS Branding/FullLogoNoBackground.svg"
          alt="BOS"
          width={80}
          height={26}
          priority
        />
      </Link>
      <nav className="flex items-center gap-6 md:gap-8" aria-label="Main">
        <button
          type="button"
          title="Back to top"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] transition-colors hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
            className="shrink-0"
          >
            <path
              d="M5 1L1 4.5V9h2.5V6.5h3V9H9V4.5L5 1Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-[family-name:var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] transition-colors hover:text-[var(--cyan)] md:text-[12px]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/get-started"
          className="inline-flex shrink-0 font-[family-name:var(--font-ui)] bg-[var(--cyan)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--surface-dark)] shadow-[0_0_20px_rgba(4,209,224,0.35)] transition hover:-translate-y-px hover:shadow-[0_0_32px_rgba(4,209,224,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)] sm:px-5 sm:text-[11px] sm:tracking-[0.12em]"
        >
          Get started
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orchid)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {menuOpen ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[72px] z-[199] border-b border-white/10 bg-[var(--surface-dark)]/98 px-6 py-6 shadow-xl backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile main">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-md px-3 py-3 font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-[0.12em] text-white/90 hover:bg-white/[0.06] hover:text-[var(--cyan)]"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="mt-4 inline-flex justify-center rounded-md bg-[var(--cyan)] px-4 py-3 font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-[0.12em] text-[var(--surface-dark)]"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
