import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon, type IconName } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Contact" : "Contacto",
    description: en
      ? "Let's talk about your organization's next personalized-medicine product. Tell us what you want to develop and on what timeline."
      : "Conversemos sobre el próximo producto de medicina personalizada de tu organización. Cuéntanos qué quieres desarrollar y en qué plazo.",
    path: "/contacto",
    locale: params.locale,
  });
}

const perkIcons: IconName[] = ["Clock", "Shield", "Target"];

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const co = getContent(locale).contact;
  const aside = co.form.aside;

  return (
    <>
      <PageHero eyebrow={co.hero.eyebrow} title={co.hero.title} subtitle={co.hero.subtitle} />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Columna informativa */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-2xl font-semibold">{aside.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{aside.body}</p>
            <ul className="mt-8 space-y-5">
              {aside.perks.map((p, i) => {
                const IconCmp = Icon[perkIcons[i] ?? "Sparkles"];
                return (
                  <li key={p.title} className="flex gap-4">
                    <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                      <IconCmp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{p.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{p.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 rounded-2xl border border-line bg-mist p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-ink">
                <Icon.Mail className="h-4 w-4 text-brand-strong" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-strong">
                  {site.email}
                </a>
              </p>
              <p className="mt-1 text-sm text-muted">{site.address}</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="card-surface p-6 sm:p-8">
            <ContactForm locale={locale} />
          </div>
        </div>
      </Section>
    </>
  );
}
