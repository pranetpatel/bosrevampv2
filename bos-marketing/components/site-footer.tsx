import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-[1] border-t border-white/10 bg-[var(--surface-dark)] px-6 py-16 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/BOS Branding/FullLogoNoBackground.svg"
              alt="BOS"
              width={96}
              height={31}
            />
          </Link>
          <p className="mt-4 font-[family-name:var(--font-sans)] text-sm text-white/60">
            Business Orchestration System — work made simple across work, data,
            teams, and agents.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-white">Product</span>
            <Link href="/product" className="text-white/60 hover:text-white">
              Product
            </Link>
            <Link href="/how-it-works" className="text-white/60 hover:text-white">
              How it works
            </Link>
            <Link href="/demo" className="text-white/60 hover:text-white">
              Demo
            </Link>
            <Link href="/pricing" className="text-white/60 hover:text-white">
              Pricing
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-white">Programs</span>
            <Link href="/mba" className="text-white/60 hover:text-white">
              BOS MBA
            </Link>
            <Link href="/community/resources" className="text-white/60 hover:text-white">
              Resources
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-white">Company</span>
            <Link href="/manifesto" className="text-white/60 hover:text-white">
              Manifesto
            </Link>
            <Link href="/story" className="text-white/60 hover:text-white">
              Story
            </Link>
            <Link href="/investors" className="text-white/60 hover:text-white">
              Investors
            </Link>
            <Link href="/partners" className="text-white/60 hover:text-white">
              Partners
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-white">Proof</span>
            <Link href="/projects" className="text-white/60 hover:text-white">
              Projects
            </Link>
            <Link href="/compare" className="text-white/60 hover:text-white">
              Compare
            </Link>
            <Link href="/technology" className="text-white/60 hover:text-white">
              Technology
            </Link>
            <Link href="/industry" className="text-white/60 hover:text-white">
              Industry
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
