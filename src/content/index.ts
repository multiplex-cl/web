/**
 * Capa de internacionalización (i18n).
 *
 * El sitio se publica en español (por defecto) e inglés. Cada idioma tiene su
 * diccionario (`es.ts`, `en.ts`) con la misma forma. Las rutas usan el prefijo
 * de idioma: `/es/...` y `/en/...`.
 */
import { es, type SiteContent } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

const dictionaries: Record<Locale, SiteContent> = { es, en };

/** ¿Es un string un locale válido? (type guard para params de ruta). */
export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

/** Devuelve el diccionario del locale (español por defecto). */
export function getContent(locale: string = defaultLocale): SiteContent {
  return dictionaries[(isLocale(locale) ? locale : defaultLocale)];
}

/** Contenido por defecto (español) para usos no localizados. */
export const content: SiteContent = es;

export type { SiteContent };
