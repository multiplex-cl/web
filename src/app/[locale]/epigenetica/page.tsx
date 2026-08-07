import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StatGrid } from "@/components/ui/Stat";
import { FeatureCard } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Icon, type IconName } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Epigenetics" : "Epigenética",
    description: en
      ? "Multiplex's next line: epigenetic panels in development, backed by a solid scientific thesis and the already-installed platform capacity. Not yet commercially available."
      : "La próxima línea de Multiplex: paneles epigenéticos en desarrollo, respaldados por una tesis científica sólida y la capacidad de plataforma ya instalada. Aún no disponibles comercialmente.",
    path: "/epigenetica",
    locale: params.locale,
    keywords: ["epigenética Chile", "medicina personalizada", "medicina de precisión Latinoamérica"],
  });
}

// Iconos por posición (orden estable entre idiomas).
const capIcons: IconName[] = ["Target", "Molecule", "Route", "Growth", "Shield", "Layers"];

export default function EpigeneticsPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const e = getContent(params.locale).epigenetics;

  return (
    <>
      <PageHero eyebrow={e.hero.eyebrow} title={e.hero.title} subtitle={e.hero.subtitle} />

      <Section tone="light" className="!py-14">
        <StatGrid columns={3} items={e.highlights.map((h) => ({ value: h.value, label: h.label }))} />
      </Section>

      <Section tone="mist">
        <SectionHeader eyebrow={en ? "Capabilities" : "Capacidades"} title={e.capabilities.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {e.capabilities.items.map((item, i) => {
            const IconCmp = Icon[capIcons[i] ?? "Molecule"];
            return (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <FeatureCard title={item.title} body={item.body} icon={<IconCmp className="h-5 w-5" />} className="h-full" />
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="light">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-accent/25 bg-accent/[0.04] p-7 sm:p-9">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon.Shield />
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{e.prudence.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{e.prudence.body}</p>
        </Reveal>
      </Section>

      <CTABand
        title={en ? "Let's collaborate on epigenetics development" : "Colaboremos en el desarrollo epigenético"}
        body={
          en
            ? "Interested in this line? Let's talk about collaborations and being among the first to access it when available."
            : "¿Te interesa esta línea? Conversemos para explorar colaboraciones y ser de los primeros en acceder cuando esté disponible."
        }
        primary={{ label: en ? "Let's talk epigenetics" : "Hablemos de epigenética", href: "/contacto" }}
        secondary={{ label: en ? "See genetics (available today)" : "Ver genética (disponible hoy)", href: "/genetica" }}
      />
    </>
  );
}
