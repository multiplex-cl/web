import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/sections/CTABand";
import { Icon } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "About us" : "Nosotros",
    description: en
      ? "Multiplex combines molecular biology, genetics, epigenetics, bioinformatics and product development in a technology platform focused on clinical innovation."
      : "Multiplex combina biología molecular, genética, epigenética, bioinformática y desarrollo de producto en una plataforma tecnológica orientada a la innovación clínica.",
    path: "/nosotros",
    locale: params.locale,
  });
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const a = getContent(params.locale).about;

  return (
    <>
      <PageHero eyebrow={a.hero.eyebrow} title={a.hero.title} subtitle={a.hero.subtitle} />

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <span className="eyebrow">{en ? "Our story" : "Nuestra historia"}</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{a.story.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{a.story.body}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-mist p-7">
              <h3 className="text-sm font-semibold text-ink">{a.disciplines.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.disciplines.items.map((d) => (
                  <li key={d}>
                    <Badge tone="neutral">{d}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {a.editableSections.length > 0 && (
        <Section tone="mist">
          <SectionHeader
            eyebrow={en ? "Company" : "Compañía"}
            title={en ? "Our team and track record" : "Nuestro equipo y trayectoria"}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {a.editableSections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                    <Icon.Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABand
        title={en ? "Let's build the next generation of personalized medicine" : "Construyamos la próxima generación de medicina personalizada"}
        body={
          en
            ? "If you share our vision as a client, partner or investor, let's talk."
            : "Si compartes nuestra visión como cliente, socio o inversionista, conversemos."
        }
        primary={{ label: en ? "Contact us" : "Contáctanos", href: "/contacto" }}
        secondary={{ label: en ? "Explore the platform" : "Conoce la plataforma", href: "/plataforma" }}
      />
    </>
  );
}
