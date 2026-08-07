import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Icon, type IconName } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Technology" : "Tecnología",
    description: en
      ? "Multiplex's technology architecture: sample processing, bioinformatics, interpretation engine, automated reports and API integration. Modular, scalable and secure."
      : "Arquitectura tecnológica de Multiplex: procesamiento de muestras, bioinformática, motor de interpretación, reportes automatizados e integración vía API. Modular, escalable y segura.",
    path: "/tecnologia",
    locale: params.locale,
    keywords: ["desarrollo de paneles moleculares", "medicina de precisión Latinoamérica"],
  });
}

// Iconos por posición (orden estable entre idiomas).
const stackIcons: IconName[] = ["Beaker", "Target", "Chip", "Sparkles", "Report", "Layers", "Api", "Layers", "Growth"];

export default function TechnologyPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const t = getContent(params.locale).technology;

  const securityTiles: { icon: IconName; t: string }[] = en
    ? [
        { icon: "Shield", t: "Sensitive data by design" },
        { icon: "Users", t: "Separation of contexts" },
        { icon: "Api", t: "Controlled integration" },
        { icon: "Layers", t: "Data minimization" },
      ]
    : [
        { icon: "Shield", t: "Datos sensibles por diseño" },
        { icon: "Users", t: "Separación de contextos" },
        { icon: "Api", t: "Integración controlada" },
        { icon: "Layers", t: "Minimización de datos" },
      ];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      <Section tone="light">
        <SectionHeader
          eyebrow={en ? "Architecture" : "Arquitectura"}
          title={t.stack.title}
          body={
            en
              ? "Components that work together to speed up developing new products, without exposing confidential protocols."
              : "Componentes que trabajan juntos para acelerar el desarrollo de nuevos productos, sin exponer protocolos confidenciales."
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.stack.items.map((item, i) => {
            const IconCmp = Icon[stackIcons[i] ?? "Chip"];
            return (
              <Reveal key={item.title} delay={(i % 3) * 60}>
                <FeatureCard title={item.title} body={item.body} icon={<IconCmp className="h-5 w-5" />} className="h-full" />
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brand">{en ? "Security" : "Seguridad"}</span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{t.security.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">{t.security.body}</p>
            {t.security.note && (
              <p className="mt-5 rounded-xl bg-white/[0.06] p-4 text-sm text-white/60 ring-1 ring-white/10">
                {t.security.note}
              </p>
            )}
          </div>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {securityTiles.map((x) => {
                const IconCmp = Icon[x.icon];
                return (
                  <div key={x.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand">
                      <IconCmp className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">{x.t}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title={en ? "Integrate Multiplex into your operation" : "Integra Multiplex en tu operación"}
        body={
          en
            ? "Our platform connects via API with your clinical systems, apps and health platforms."
            : "Nuestra plataforma se conecta vía API con tus sistemas clínicos, apps y plataformas de salud."
        }
        primary={{ label: en ? "Schedule a meeting" : "Agenda una reunión", href: "/contacto" }}
        secondary={{ label: en ? "See science and evidence" : "Ver ciencia y evidencia", href: "/ciencia" }}
      />
    </>
  );
}
