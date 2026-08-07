import type { Metadata } from "next";
import { site } from "@/content/site";
import { defaultLocale, locales, type Locale } from "@/content";

const baseUrl = site.url;

const ogLocale: Record<Locale, string> = { es: "es_CL", en: "en_US" };

/**
 * Genera metadata coherente por página (title, description, canonical, Open
 * Graph, Twitter y alternates hreflang por idioma). Buenas prácticas de SEO.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  locale = defaultLocale,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  locale?: Locale;
}): Metadata {
  const cleanPath = path === "/" ? "" : path;
  const url = new URL(`/${locale}${cleanPath}`, baseUrl).toString();
  const fullTitle = path === "/" ? `${site.name} — ${site.tagline}` : `${title} · ${site.name}`;

  // hreflang: una entrada por idioma apuntando a la misma página traducida.
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = new URL(`/${l}${cleanPath}`, baseUrl).toString();
  }

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.svg"],
    },
  };
}

/** Palabras clave globales orientadas a SEO (medicina de precisión LatAm). */
export const globalKeywords = [
  "paneles genéticos Chile",
  "desarrollo de test genéticos",
  "genética personalizada",
  "epigenética Chile",
  "medicina personalizada",
  "farmacogenética",
  "paneles genéticos white label",
  "laboratorio genético",
  "test genético nutricional",
  "desarrollo de paneles moleculares",
  "medicina de precisión Latinoamérica",
];
