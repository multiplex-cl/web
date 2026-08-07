"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, swapLocaleInPath } from "@/lib/locale";
import { cn } from "@/lib/cn";

/** Selector de idioma ES / EN. Cambia de idioma conservando la misma página. */
export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);

  return (
    <div
      className={cn("inline-flex items-center rounded-full border border-line p-0.5 text-xs font-semibold", className)}
      role="group"
      aria-label="Idioma / Language"
    >
      {(["es", "en"] as const).map((loc) => {
        const active = loc === current;
        return (
          <Link
            key={loc}
            href={swapLocaleInPath(pathname || `/${loc}`, loc)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase transition",
              active ? "bg-brand text-white" : "text-muted hover:text-ink",
            )}
          >
            {loc}
          </Link>
        );
      })}
    </div>
  );
}
