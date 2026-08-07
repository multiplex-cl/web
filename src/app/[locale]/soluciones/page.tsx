import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { LocaleLink } from "@/components/ui/LocaleLink";
import { Icon, type IconName } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Solutions for companies" : "Soluciones para empresas",
    description: en
      ? "Multiplex develops white-label genetic and epigenetic products for clinics, laboratories, insurers, pharmacies, wellness companies and research."
      : "Multiplex desarrolla productos genéticos y epigenéticos white label para clínicas, laboratorios, aseguradoras, farmacias, empresas de bienestar e investigación.",
    path: "/soluciones",
    locale: params.locale,
    keywords: ["paneles genéticos white label", "laboratorio genético", "medicina personalizada"],
  });
}

const segIcons: Record<string, IconName> = {
  clinicas: "Heart",
  laboratorios: "Beaker",
  aseguradoras: "Shield",
  farmacias: "Pill",
  bienestar: "Users",
  investigacion: "Molecule",
  "salud-digital": "Api",
  "nutricion-longevidad": "Growth",
};

export default function SolutionsPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const s = getContent(params.locale).solutions;

  return (
    <>
      <PageHero eyebrow={s.hero.eyebrow} title={s.hero.title} subtitle={s.hero.subtitle} />

      <Section tone="light">
        <SectionHeader
          eyebrow={en ? "Segments" : "Segmentos"}
          title={en ? "What your organization can develop" : "Qué puede desarrollar tu organización"}
          body={
            en
              ? "Each segment has different needs. Multiplex adapts development, interpretation and integration to your context."
              : "Cada segmento tiene necesidades distintas. Multiplex adapta el desarrollo, la interpretación y la integración a tu contexto."
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.segments.map((seg, i) => {
            const IconCmp = Icon[segIcons[seg.id] ?? "Building"];
            return (
              <Reveal
                as="article"
                key={seg.id}
                delay={(i % 3) * 60}
                className="card-surface flex scroll-mt-24 flex-col p-6"
                id={seg.id}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <IconCmp className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{seg.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{seg.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="mist">
        <div className="rounded-3xl border border-line bg-surface p-8 text-center shadow-soft sm:p-12">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{s.closing.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{s.closing.body}</p>
            <div className="mt-8 flex justify-center">
              <LocaleLink
                href={s.closing.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-brand-strong"
              >
                {s.closing.cta.label}
                <Icon.Sparkles className="h-4 w-4" />
              </LocaleLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title={en ? "Let's talk about your white-label product" : "Conversemos sobre tu producto white label"}
        body={
          en
            ? "We'll prepare a technical and commercial proposal based on your goal, volume and timeline."
            : "Preparamos una propuesta técnica y comercial según tu objetivo, volumen y plazo."
        }
        primary={{ label: en ? "Request a proposal" : "Solicita una propuesta", href: "/contacto" }}
        secondary={{ label: en ? "Explore the platform" : "Conoce la plataforma", href: "/plataforma" }}
      />
    </>
  );
}
