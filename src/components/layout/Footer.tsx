"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { site, getFooterNav, getLegalNav } from "@/content/site";
import { localeFromPathname, withLocale } from "@/lib/locale";

const t = {
  es: {
    pitch:
      "Plataforma de desarrollo de productos genéticos y epigenéticos. Transformamos evidencia científica en productos de medicina personalizada listos para escalar.",
    aviso:
      "La información de este sitio tiene fines informativos y no constituye consejo médico ni reemplaza la evaluación de un profesional de la salud. Los valores por muestra indicados corresponden a costos directos de procesamiento estimados, no a precios comerciales finales.",
    avisoLabel: "Aviso.",
    rights: "Todos los derechos reservados.",
  },
  en: {
    pitch:
      "Platform for developing genetic and epigenetic products. We turn scientific evidence into personalized-medicine products ready to scale.",
    aviso:
      "The information on this site is for informational purposes and does not constitute medical advice or replace the evaluation of a health professional. The per-sample values shown are estimated direct processing costs, not final commercial prices.",
    avisoLabel: "Notice.",
    rights: "All rights reserved.",
  },
} as const;

export function Footer() {
  const locale = localeFromPathname(usePathname());
  const copy = t[locale];
  const footerNav = getFooterNav(locale);
  const legalNav = getLegalNav(locale);
  const year = 2026;

  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{copy.pitch}</p>
            <p className="mt-4 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="font-medium text-ink hover:text-brand-strong">
                {site.email}
              </a>
              <br />
              {site.address}
            </p>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Multiplex en LinkedIn"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink transition hover:border-brand/40 hover:text-brand-strong"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={withLocale(item.href, locale)} className="text-sm text-muted transition hover:text-brand-strong">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface p-5 text-xs leading-relaxed text-muted">
          <strong className="text-ink">{copy.avisoLabel}</strong> {copy.aviso}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {site.legalName}. {copy.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={withLocale(item.href, locale)} className="text-xs text-muted transition hover:text-brand-strong">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
    </svg>
  );
}
