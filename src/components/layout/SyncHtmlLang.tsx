"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/locale";

/** Sincroniza el atributo `lang` del <html> con el idioma de la URL. */
export function SyncHtmlLang() {
  const locale = localeFromPathname(usePathname());
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
