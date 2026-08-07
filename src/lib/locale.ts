import { defaultLocale, isLocale, type Locale } from "@/content";

/** Extrae el locale del primer segmento del pathname (por defecto, español). */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return defaultLocale;
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : defaultLocale;
}

/** Prefija un href interno con el locale. Deja intactos externos/mailto/anclas. */
export function withLocale(href: string, locale: Locale): string {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  if (href.startsWith("/")) {
    const seg = href.split("/")[1];
    if (isLocale(seg)) return href; // ya está prefijado
    return `/${locale}${href === "/" ? "" : href}`;
  }
  return href;
}

/** Devuelve el otro idioma. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/** Reemplaza el locale en un pathname para el selector de idioma. */
export function swapLocaleInPath(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}${pathname === "/" ? "" : pathname}`;
}
