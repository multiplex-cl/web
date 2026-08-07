"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, withLocale } from "@/lib/locale";

type Props = { href: string } & Omit<React.ComponentProps<typeof Link>, "href">;

/** <Link> que prefija automáticamente los enlaces internos con el idioma activo. */
export function LocaleLink({ href, ...rest }: Props) {
  const locale = localeFromPathname(usePathname());
  return <Link href={withLocale(href, locale)} {...rest} />;
}
