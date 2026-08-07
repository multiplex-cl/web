"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button, ArrowRight } from "@/components/ui/Button";
import { getPrimaryNav } from "@/content/site";
import { localeFromPathname, withLocale } from "@/lib/locale";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const primaryNav = getPrimaryNav(locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaLabel = locale === "en" ? "Develop a panel" : "Desarrolla un panel";
  const ctaLabelLong = locale === "en" ? "Develop a panel with us" : "Desarrolla un panel con nosotros";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled ? "border-b border-line bg-surface/85 backdrop-blur-md" : "border-b border-transparent bg-surface/0",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-[72px]" aria-label="Principal">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const href = withLocale(item.href, locale);
            const active = pathname === href;
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition",
                  active ? "text-brand-strong" : "text-muted hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {item.soon && (
                  <span className="rounded-full bg-mist px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                    {locale === "en" ? "Soon" : "Pronto"}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <Button href="/contacto" size="md">
            {ctaLabel}
            <ArrowRight />
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      <div id="mobile-menu" className={cn("lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 origin-top border-b border-line bg-surface transition duration-200",
            open ? "opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <div className="container-x max-h-[calc(100vh-4rem)] overflow-y-auto py-5">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => {
                const href = withLocale(item.href, locale);
                const active = pathname === href;
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className={cn(
                        "flex flex-col rounded-xl px-4 py-3 transition",
                        active ? "bg-brand-soft" : "hover:bg-mist",
                      )}
                    >
                      <span className={cn("inline-flex items-center gap-2 text-base font-semibold", active ? "text-brand-strong" : "text-ink")}>
                        {item.label}
                        {item.soon && (
                          <span className="rounded-full bg-mist px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                            {locale === "en" ? "Soon" : "Pronto"}
                          </span>
                        )}
                      </span>
                      {item.description && <span className="mt-0.5 text-sm text-muted">{item.description}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button href="/contacto" size="lg" className="flex-1">
                {ctaLabelLong}
                <ArrowRight />
              </Button>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
