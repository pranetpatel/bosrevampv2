"use client";

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export default function PartnersPage() {
  const options = [
    {
      title: "Option 1 — Referral Partner",
      involvement: "Low involvement",
      whatYouDo: "Introduce BOS to clients",
      earnings: "20% recurring (12 months)",
      bestFor: "Passive income, simple referrals",
    },
    {
      title: "Option 2 — Co-Sell Partner",
      involvement: "Moderate involvement",
      whatYouDo: "Position BOS in your program, join calls if needed",
      earnings: "30% recurring (12–18 months)",
      bestFor: "Trainers and consultants integrating BOS",
    },
    {
      title: "Option 3 — Program Partner",
      involvement: "High involvement",
      whatYouDo: "Embed BOS into your program or offer",
      earnings: "30–40% recurring or wholesale pricing + your margin",
      bestFor: "Full program integration and highest upside",
    },
  ];

  return (
    <>
      <SiteNav alwaysSolid />

      <main className="bg-[var(--surface-dark)] text-white">
        {/* HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-20 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(100,60,200,0.15),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-4 block font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)]">
              BOS Ambassador Program
            </span>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight">
              Turn Your Clients Into Execution Machines
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-[clamp(1.1rem,2vw,1.25rem)] text-white/60">
              Most trainers and consultants teach strategy. BOS allows you to implement it.
              Don't just tell clients what to do — run execution inside their business and share in the revenue.
            </p>
            <div className="mt-10">
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--cyan)] px-8 font-[family-name:var(--font-ui)] text-sm font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT IT MEANS */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                  What This Means for You
                </h2>
                <ul className="space-y-4 font-[family-name:var(--font-sans)] text-lg text-white/80">
                  <li className="flex gap-4"><span className="text-[var(--orchid)]">→</span> Deliver real, measurable results for your clients</li>
                  <li className="flex gap-4"><span className="text-[var(--orchid)]">→</span> Increase retention and program value</li>
                  <li className="flex gap-4"><span className="text-[var(--orchid)]">→</span> Add a recurring revenue stream</li>
                  <li className="flex gap-4"><span className="text-[var(--orchid)]">→</span> Differentiate your offering with execution, not just advice</li>
                </ul>
              </div>
              
              <div className="rounded-2xl border border-white/10 bg-[#080814] p-8 space-y-8">
                <div>
                  <h3 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-[var(--cyan)] mb-4">How It Works</h3>
                  <ol className="space-y-3 font-[family-name:var(--font-sans)] text-sm text-white/70">
                    <li>1. You introduce BOS within your program or advisory</li>
                    <li>2. We handle setup, onboarding, and support</li>
                    <li>3. Your client runs on BOS and sees results</li>
                    <li>4. You earn recurring revenue as they scale</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-widest text-white/50 mb-4">What BOS Handles</h3>
                  <ul className="grid grid-cols-2 gap-3 font-[family-name:var(--font-sans)] text-sm text-white/70">
                    <li>✓ Product & infrastructure</li>
                    <li>✓ Full system setup</li>
                    <li>✓ Onboarding & support</li>
                    <li>✓ Continuous optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDEAL PARTNERS */}
        <section className="bg-white/5 py-24 text-center border-y border-white/10 px-6">
           <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-bold text-white">
                Ideal Partners
              </h2>
              <div className="flex flex-wrap justify-center gap-6 font-[family-name:var(--font-sans)] text-lg text-white/80 font-medium">
                 <span className="rounded-full border border-white/20 bg-[var(--surface-dark)] px-6 py-3">Sales Trainers</span>
                 <span className="rounded-full border border-white/20 bg-[var(--surface-dark)] px-6 py-3">Business Consultants</span>
                 <span className="rounded-full border border-white/20 bg-[var(--surface-dark)] px-6 py-3">Agencies</span>
                 <span className="rounded-full border border-white/20 bg-[var(--surface-dark)] px-6 py-3">Program & Cohort Operators</span>
              </div>
           </div>
        </section>

        {/* PARTNERSHIP OPTIONS */}
        <section className="bg-[#080814] px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                Partnership Options
              </h2>
              <p className="font-[family-name:var(--font-sans)] text-lg text-white/60">
                Choose the model that fits how you work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {options.map((opt, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-[var(--cyan)]/20 bg-[var(--surface-dark)] p-8 shadow-xl">
                  <h3 className="mb-6 font-[family-name:var(--font-sans)] text-xl font-bold text-white border-b border-white/10 pb-4">
                    {opt.title}
                  </h3>
                  <div className="space-y-6 flex-1 text-sm font-[family-name:var(--font-sans)]">
                    <div>
                      <span className="block text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">Involvement</span>
                      <p className="text-white/90">{opt.involvement}</p>
                    </div>
                    <div>
                      <span className="block text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">What You Do</span>
                      <p className="text-white/90">{opt.whatYouDo}</p>
                    </div>
                    <div>
                      <span className="block text-[var(--cyan)] uppercase tracking-widest text-[10px] font-bold mb-1">Earnings</span>
                      <p className="text-[var(--cyan)] font-bold text-base">{opt.earnings}</p>
                    </div>
                  </div>
                  <div className="mt-8 rounded-xl bg-white/5 p-4 border border-white/5">
                     <span className="block text-white/40 uppercase tracking-widest text-[10px] font-bold mb-1">Best For</span>
                     <p className="text-white/80 text-sm">{opt.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM LINE */}
        <section className="px-6 py-24 text-center">
           <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white">
                You're no longer just teaching.<br />
                <span className="text-[var(--orchid)]">You're implementing.</span>
              </h2>
              <p className="font-[family-name:var(--font-sans)] text-xl text-white/60 mb-12">
                And sharing in the upside.
              </p>
              <Link
                href="/demo"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--cyan)] px-10 font-[family-name:var(--font-ui)] text-base font-bold tracking-wide text-[#0d0b1e] transition hover:bg-white hover:scale-105"
              >
                Book a Call to Get Started
              </Link>
           </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
