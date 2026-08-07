import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { LocaleLink } from "@/components/ui/LocaleLink";
import { getLegalDocs, legalSlugs } from "@/content/legal";
import { getLegalNav } from "@/content/site";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";
import { withLocale } from "@/lib/locale";

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Metadata {
  const doc = getLegalDocs(params.locale)[params.slug];
  if (!doc) return {};
  return buildMetadata({ title: doc.title, description: doc.intro, path: `/legal/${params.slug}`, locale: params.locale });
}

export default function LegalPage({ params }: { params: { locale: Locale; slug: string } }) {
  const en = params.locale === "en";
  const doc = getLegalDocs(params.locale)[params.slug];
  if (!doc) notFound();
  const legalNav = getLegalNav(params.locale);

  return (
    <>
      <PageHero eyebrow={en ? "Legal & compliance" : "Legal y cumplimiento"} title={doc.title} subtitle={doc.intro} />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs text-muted">{en ? "Last updated" : "Última actualización"}</p>
            <p className="text-sm font-medium text-ink">{doc.updated}</p>

            <nav className="mt-6 border-t border-line pt-6" aria-label={en ? "Legal documents" : "Documentos legales"}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                {en ? "Documents" : "Documentos"}
              </p>
              <ul className="space-y-1">
                {legalNav.map((item) => {
                  const active = item.href === `/legal/${doc.slug}`;
                  return (
                    <li key={item.href}>
                      <LocaleLink
                        href={item.href}
                        className={
                          "block rounded-lg px-3 py-2 text-sm transition " +
                          (active
                            ? "bg-brand-soft font-semibold text-brand-strong"
                            : "text-muted hover:bg-mist hover:text-ink")
                        }
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </LocaleLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">
            {en && (
              <div className="mb-8 rounded-2xl border border-line bg-mist p-4 text-sm text-muted">
                Courtesy English translation. The official version is in Spanish and prevails in the event of any
                discrepancy —{" "}
                <a href={withLocale(`/legal/${doc.slug}`, "es")} className="font-medium text-brand-strong hover:underline">
                  see Spanish version
                </a>
                .
              </div>
            )}

            <article className="space-y-8">
              {doc.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg font-semibold text-ink">{section.heading}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 text-[15px] leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>

            <div className="mt-10 rounded-2xl border border-line bg-mist p-5 text-sm text-muted">
              {en ? "Questions about privacy or how your data is handled? Reach us " : "¿Tienes dudas sobre privacidad o el tratamiento de tus datos? Escríbenos a "}
              <LocaleLink href="/contacto" className="font-medium text-brand-strong hover:underline">
                {en ? "via contact" : "través de contacto"}
              </LocaleLink>
              .
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
