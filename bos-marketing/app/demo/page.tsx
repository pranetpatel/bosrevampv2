"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function DemoPage() {
  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight">
              See BOS in Action
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              Watch how work moves from conversation to execution. No tool-switching. No manual updates. Just outcomes.
            </p>
          </div>
        </section>

        {/* VIDEO PLACEHOLDER SECTION */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-[#080814] overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer hover:border-white/20 transition">
              {/* Play Button */}
              <div className="h-20 w-20 rounded-full bg-[var(--cyan)]/20 flex items-center justify-center group-hover:scale-110 transition duration-300">
                <div className="h-16 w-16 rounded-full bg-[var(--cyan)] flex items-center justify-center text-[#080814] pl-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white/40 font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest">
                <span>00:00 / 03:45</span>
                <span>Demo Video Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="px-6 py-24 border-b border-white/10">
          <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8 text-center">
            <div className="rounded-2xl bg-white/[0.02] p-8 border border-white/5">
              <h3 className="font-[family-name:var(--font-sans)] text-lg font-bold text-white mb-3">Chat → Execution</h3>
              <p className="font-[family-name:var(--font-sans)] text-sm text-white/60">Watch agents pick up instructions directly from your conversations.</p>
            </div>
            <div className="rounded-2xl bg-white/[0.02] p-8 border border-white/5">
              <h3 className="font-[family-name:var(--font-sans)] text-lg font-bold text-white mb-3">Instant Updates</h3>
              <p className="font-[family-name:var(--font-sans)] text-sm text-white/60">See CRM and project trackers update in real time without manual entry.</p>
            </div>
            <div className="rounded-2xl bg-white/[0.02] p-8 border border-white/5">
              <h3 className="font-[family-name:var(--font-sans)] text-lg font-bold text-white mb-3">One Unified View</h3>
              <p className="font-[family-name:var(--font-sans)] text-sm text-white/60">No tab switching. Everything you need to run your business in one interface.</p>
            </div>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="px-6 py-32 bg-[#080814]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
              Want a personalized walkthrough?
            </h2>
            <p className="mb-10 font-[family-name:var(--font-sans)] text-lg text-white/60">
              Book a call with our team to see how BOS can replace your specific tech stack.
            </p>
            
            {/* Calendar Placeholder */}
            <div className="w-full max-w-2xl mx-auto h-[500px] rounded-2xl border border-white/10 bg-[var(--surface-dark)] flex flex-col items-center justify-center p-8">
              <div className="mb-4 text-4xl">📅</div>
              <h3 className="font-[family-name:var(--font-sans)] text-xl font-bold text-white/80 mb-2">Calendar Booking Integration</h3>
              <p className="font-[family-name:var(--font-sans)] text-sm text-white/40">Embed your Calendly or SavvyCal widget here.</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
