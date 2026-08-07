import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Icon } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Platform" : "Plataforma",
    description: en
      ? "Multiplex controls the entire process: from the clinical question to a genetic or epigenetic product ready to scale. Ten integrated stages."
      : "Multiplex controla el proceso completo: desde la pregunta clínica hasta un producto genético o epigenético listo para escalar. Diez etapas integradas.",
    path: "/plataforma",
    locale: params.locale,
    keywords: ["desarrollo de paneles moleculares", "medicina de precisión Latinoamérica"],
  });
}

const benefitIcons = [<Icon.Clock key="c" />, <Icon.Route key="r" />, <Icon.Growth key="g" />, <Icon.Layers key="l" />];

export default function PlatformPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const p = getContent(params.locale).platform;

  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} subtitle={p.hero.subtitle} />

      <Section tone="light">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-brand/20 bg-brand-soft/40 px-6 py-5 text-center">
          <p className="font-display text-xl font-semibold text-ink sm:text-2xl">“{p.statement}”</p>
        </Reveal>

        <div className="mt-14">
          <SectionHeader
            eyebrow={en ? "The process" : "El proceso"}
            title={en ? "Ten stages, one platform" : "Diez etapas, una sola plataforma"}
            body={
              en
                ? "Each stage runs with consistent standards and end-to-end traceability."
                : "Cada etapa se ejecuta con estándares consistentes y trazabilidad de extremo a extremo."
            }
          />
          <div className="mt-10">
            <ProcessFlow steps={p.steps} />
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow={en ? "Advantages" : "Ventajas"} title={p.benefits.title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.benefits.items.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 70}>
              <Card className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  {benefitIcons[i]}
                </div>
                <h3 className="text-base font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title={en ? "Let's design your next molecular product" : "Diseñemos tu próximo producto molecular"}
        body={
          en
            ? "Tell us your clinical or commercial goal and we'll prepare a tailored proposal."
            : "Cuéntanos tu objetivo clínico o comercial y preparamos una propuesta a la medida."
        }
        primary={{ label: en ? "Develop a panel with us" : "Desarrolla un panel con nosotros", href: "/contacto" }}
        secondary={{ label: en ? "Explore our technology" : "Conoce nuestra tecnología", href: "/tecnologia" }}
      />
    </>
  );
}
