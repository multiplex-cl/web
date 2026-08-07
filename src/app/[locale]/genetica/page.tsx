import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StatGrid } from "@/components/ui/Stat";
import { FeatureCard, CheckDot } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Icon, type IconName } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Genetics" : "Genética",
    description: en
      ? "Custom genetic panels with 140+ SNPs: pharmacogenetics, cardiometabolic risk, nutrition and preventive health. White-label development in under three months."
      : "Paneles genéticos de más de 140 SNPs, diseñados a medida: farmacogenética, riesgo cardiometabólico, nutrición y salud preventiva. Desarrollo white label en menos de tres meses.",
    path: "/genetica",
    locale: params.locale,
    keywords: ["paneles genéticos Chile", "farmacogenética", "test genético nutricional", "paneles genéticos white label"],
  });
}

// Iconos por posición (el orden de applications.items es estable entre idiomas).
const appIcons: IconName[] = ["Pill", "Growth", "Heart", "Dna", "Shield", "Baby", "Target", "Layers"];

export default function GeneticsPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const g = getContent(params.locale).genetics;

  return (
    <>
      <PageHero eyebrow={g.hero.eyebrow} title={g.hero.title} subtitle={g.hero.subtitle} />

      <Section tone="light" className="!py-14">
        <StatGrid columns={3} items={g.highlights.map((h) => ({ value: h.value, label: h.label }))} />
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow={en ? "Applications" : "Aplicaciones"} title={g.applications.title} body={g.applications.body} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {g.applications.items.map((item, i) => {
            const IconCmp = Icon[appIcons[i] ?? "Molecule"];
            return (
              <Reveal key={item.title} delay={(i % 4) * 60}>
                <FeatureCard title={item.title} body={item.body} icon={<IconCmp className="h-5 w-5" />} className="h-full" />
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={en ? "Methodology" : "Metodología"} title={g.method.title} />
            <ul className="mt-8 space-y-4">
              {g.method.items.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 60} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-soft font-display text-sm font-semibold text-brand-strong">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-[15px] leading-relaxed text-ink/85">{step}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-mist p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Icon.Dna />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {en ? "Panels adapted to Latin America" : "Paneles adaptados a Latinoamérica"}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {en
                  ? "We design panels considering the characteristics of the region's populations, to maximize the relevance of the selected biomarkers."
                  : "Diseñamos paneles considerando las características de las poblaciones de la región, para maximizar la relevancia de los biomarcadores seleccionados."}
              </p>
              <ul className="mt-5 space-y-2.5">
                {(en
                  ? ["Composition tailored to the goal", "Documented analytical validation", "Scalable to high volume"]
                  : ["Composición a medida del objetivo", "Validación analítica documentada", "Escalable a alto volumen"]
                ).map((x) => (
                  <li key={x} className="flex items-start gap-2.5 text-sm text-ink/80">
                    <CheckDot />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed text-muted">
          <strong className="text-ink">{en ? "Scientific note." : "Nota científica."}</strong> {g.disclaimer}
        </Reveal>
      </Section>

      <CTABand
        title={en ? "Develop your white-label genetic panel" : "Desarrolla tu panel genético white label"}
        body={
          en
            ? "We design, validate and process your SNP panel, ready to launch under your brand."
            : "Diseñamos, validamos y procesamos tu panel de SNPs, listo para lanzarse bajo tu marca."
        }
        primary={{ label: en ? "Develop a panel with us" : "Desarrolla un panel con nosotros", href: "/contacto" }}
        secondary={{ label: en ? "See epigenetics" : "Ver epigenética", href: "/epigenetica" }}
      />
    </>
  );
}
