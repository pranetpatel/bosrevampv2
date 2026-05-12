import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-[1] border-t border-white/10 bg-[var(--surface-dark)] px-6 py-16 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--orchid)]" />
            BOS
          </Link>
          <p className="mt-4 max-w-sm font-[family-name:var(--font-sans)] text-sm text-white/60">
            Business Orchestration System — one intelligent layer for work, data,
            teams, and agents.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white">Product</span>
            <Link href="/how-it-works" className="text-white/60 hover:text-white">
              How it works
            </Link>
            <Link href="/demo" className="text-white/60 hover:text-white">
              Demo
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white">Programs</span>
            <Link href="/mba" className="text-white/60 hover:text-white">
              BOS MBA
            </Link>
            <Link href="/resources" className="text-white/60 hover:text-white">
              Resources
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-6xl text-center text-xs text-white/45">
        © {new Date().getFullYear()} GenieAI. All rights reserved.
      </p>
    </footer>
  );
}
