"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function CommunityPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[var(--surface-dark)] px-6 pt-32 pb-24 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(100,60,220,0.15),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight">
            Learn from others<br />using BOS.
          </h1>
          <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/60">
            Join a community of founders, operators, and builders who are replacing their fragmented tools with a system that actually executes.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--cyan)] px-8 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white hover:scale-105"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bg-[#080814] px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Founder Stories",
              desc: "Read how operators transformed their companies from manual coordination to automated execution.",
              icon: "📚",
            },
            {
              title: "Team Workflows",
              desc: "Discover real setups and agent configurations used by top teams to scale without adding headcount.",
              icon: "⚙️",
            },
            {
              title: "Real-world Use Cases",
              desc: "Explore how BOS is applied across sales, operations, and support to drive measurable outcomes.",
              icon: "🚀",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col rounded-2xl border border-white/10 bg-[var(--surface-dark)] p-8 transition hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-2xl">
                {item.icon}
              </div>
              <h3 className="mb-4 font-[family-name:var(--font-sans)] text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-base text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/community/resources"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-[family-name:var(--font-ui)] text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Resources →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
