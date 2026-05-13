import { InnerPageShell } from "@/components/inner-page-shell";
import { MotionSection } from "@/components/motion-section";
import { commandCards } from "@/lib/legacy-parity-content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description: "BOS Chat, Project fx, Data Drive, Agent Builder, execution engine, integrations, and more.",
};

export default function ProductPage() {
  return (
    <InnerPageShell>
      <main
        id="modules"
        className="bg-[var(--background)] px-6 pb-24 pt-28 text-[var(--foreground)] md:px-14"
      >
        <div className="mx-auto max-w-4xl">
          <MotionSection>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-tight text-white">
              Product
            </h1>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-lg text-white/65">
              Conversation, execution, and system layers — one continuous loop. No workflow
              builders bolted on; behavior emerges from orchestration.
            </p>
            <p className="mt-6">
              <Link
                href="/"
                className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-[0.14em] text-[var(--cyan)] hover:underline"
              >
                ← Home
              </Link>
            </p>
          </MotionSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {commandCards.map((m, i) => (
              <MotionSection key={m.title} delay={i * 0.04}>
                <article
                  id={`module-${i}`}
                  className="h-full scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="font-[family-name:var(--font-ui)] text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--magenta)]">
                    {m.label}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--cyan)]">
                    {m.title}
                  </h2>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-relaxed text-white/70">
                    {m.desc}
                  </p>
                  {m.terminal ? (
                    <div className="mt-4 rounded-lg border border-white/10 bg-black/35 p-3 font-mono text-[11px] text-white/55">
                      {m.terminal.map((line) => (
                        <div key={line.out}>
                          <span className="text-[var(--cyan)]">{line.prompt}</span> {line.out}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              </MotionSection>
            ))}
          </div>

          <MotionSection className="mt-14" delay={0.12}>
            <p className="rounded-2xl border border-white/10 bg-[var(--surface-raised)]/40 p-6 font-[family-name:var(--font-sans)] text-sm text-white/65">
              Messages → tasks → actions → updates → notifications. Conversations create context;
              context triggers execution; execution updates systems — continuously.
            </p>
          </MotionSection>
        </div>
      </main>
    </InnerPageShell>
  );
}
