import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Publications } from "@/components/sections/Publications";
import { Icon } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Science and evidence" : "Ciencia y evidencia",
    description: en
      ? "Multiplex's methodology: biomarker-selection criteria, analytical validation and continuous evidence updates. Scientific committee and publications."
      : "Metodología de Multiplex: criterios de selección de biomarcadores, validación analítica y actualización continua de evidencia. Comité científico y publicaciones.",
    path: "/ciencia",
    locale: params.locale,
    keywords: ["genética personalizada", "medicina personalizada"],
  });
}

const methodIcons = [<Icon.Layers key="l" />, <Icon.Target key="t" />, <Icon.Beaker key="b" />, <Icon.Growth key="g" />];

export default function SciencePage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const sci = getContent(params.locale).science;
  const disciplines = en
    ? ["Molecular biology", "Genetics", "Epigenetics", "Bioinformatics"]
    : ["Biología molecular", "Genética", "Epigenética", "Bioinformática"];

  return (
    <>
      <PageHero eyebrow={sci.hero.eyebrow} title={sci.hero.title} subtitle={sci.hero.subtitle} />

      <Section tone="light">
        <SectionHeader eyebrow={en ? "Methodology" : "Metodología"} title={sci.method.title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sci.method.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <Card className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  {methodIcons[i]}
                </div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{en ? "Team" : "Equipo"}</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{sci.team.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{sci.team.body}</p>
            {sci.team.note && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-soft px-3 py-2 text-sm font-medium text-brand-strong">
                <Icon.Users className="h-4 w-4" />
                {sci.team.note}
              </p>
            )}
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {disciplines.map((d) => (
                <div key={d} className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
                  <Icon.Molecule className="h-5 w-5 text-brand-strong" />
                  <p className="mt-3 text-sm font-semibold text-ink">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {sci.publications.items.length > 0 && (
        <Section tone="light">
          <SectionHeader eyebrow={en ? "Publications" : "Publicaciones"} title={sci.publications.title} body={sci.publications.body} />
          <div className="mt-10">
            <Publications items={[...sci.publications.items]} empty={sci.publications.empty} />
          </div>
        </Section>
      )}

      <CTABand
        title={en ? "Let's build evidence together" : "Construyamos evidencia juntos"}
        body={
          en
            ? "We collaborate with research teams to develop panels tailored to their studies."
            : "Colaboramos con equipos de investigación para desarrollar paneles a medida de sus estudios."
        }
        primary={{ label: en ? "Let's talk" : "Conversemos", href: "/contacto" }}
        secondary={{ label: en ? "See the platform" : "Ver la plataforma", href: "/plataforma" }}
      />
    </>
  );
}
