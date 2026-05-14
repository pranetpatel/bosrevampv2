import type { Metadata } from "next";
import {
  Bebas_Neue,
  DM_Mono,
  DM_Sans,
  Inter,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { AmbientSiteCanvas } from "@/components/ambient-site-canvas";
import { OptionalCursor } from "@/components/optional-cursor";
import { SITE_MEDIA } from "@/lib/site-media";

/** Large marketing headlines — matches legacy `index.html` `--display`. */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${inter.variable} ${bebasNeue.variable} ${dmMono.variable} ${dmSans.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <OptionalCursor />
        <AmbientSiteCanvas />
        {children}
      </body>
    </html>
  );
}
