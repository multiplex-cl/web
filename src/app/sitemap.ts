import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/content";
import { legalSlugs } from "@/content/legal";

const paths = [
  "",
  "/plataforma",
  "/genetica",
  "/epigenetica",
  "/soluciones",
  "/productos",
  "/tecnologia",
  "/ciencia",
  "/nosotros",
  "/contacto",
  ...legalSlugs.map((s) => `/legal/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-23");
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = new URL(`/${l}${path}`, site.url).toString();
      }
      entries.push({
        url: new URL(`/${locale}${path}`, site.url).toString(),
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
