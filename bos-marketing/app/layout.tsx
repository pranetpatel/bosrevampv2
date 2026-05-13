import type { Metadata } from "next";
import { Jura, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { OptionalCursor } from "@/components/optional-cursor";
import { SITE_MEDIA } from "@/lib/site-media";

const jura = Jura({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-jura",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bos.genieai.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BOS — Work Made Simple | GenieAI",
    template: "%s | BOS",
  },
  description:
    "Business Orchestration System — work made simple by connecting work, data, teams, and agents in an execution layer.",
  openGraph: {
    title: "BOS — Work Made Simple",
    description:
      "Work made simple for outcomes — not dashboards, workflows, or tool sprawl.",
    url: siteUrl,
    siteName: "BOS",
    locale: "en_US",
    type: "website",
    images: [{ url: SITE_MEDIA.og, width: 1200, height: 630, alt: "BOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOS — Work Made Simple",
    description:
      "Business Orchestration System by GenieAI. Execution, not overhead.",
    images: [SITE_MEDIA.og],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jura.variable} ${plusJakarta.variable} h-full`}>
      <body className="min-h-full antialiased">
        <OptionalCursor />
        {children}
      </body>
    </html>
  );
}
