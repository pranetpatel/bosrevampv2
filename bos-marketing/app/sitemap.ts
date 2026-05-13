import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bos.genieai.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/product",
    "/how-it-works",
    "/mba",
    "/resources",
    "/pricing",
    "/demo",
    "/manifesto",
    "/projects",
    "/compare",
    "/technology",
    "/industry",
    "/investors",
    "/partners",
    "/story",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
