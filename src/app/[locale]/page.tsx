import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StatGrid } from "@/components/ui/Stat";
import { Card } from "@/components/ui/Card";
import { LocaleLink } from "@/components/ui/LocaleLink";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button, ArrowRight } from "@/components/ui/Button";
import { ProcessPhases } from "@/components/sections/ProcessFlow";
import { UseCaseGrid } from "@/components/sections/UseCaseGrid";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { Icon } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { getMetrics } from "@/content/site";
import { getUseCases, getFaqs } from "@/content/data";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const desc =
    params.locale === "en"
      ? "Multiplex turns scientific evidence into genetic products with clinical and commercial applications, with an epigenetics line in development. Custom panels in under three months."
      : "Multiplex transforma evidencia científica en productos genéticos con aplicaciones clínicas y comerciales, con una línea epigenética en desarrollo. Paneles personalizados en menos de tres meses.";
  return buildMetadata({ title: "Inicio", description: desc, path: "/", locale: params.locale });
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const content = getContent(locale);
  const c = content.home;

  return (
    <>
      <Hero locale={locale} />

      {/* Métricas / capacidades */}
      <Section tone="light" className="!py-14">
        <StatGrid items={getMetrics(locale)} />
      </Section>

      {/* Intro plataforma */}
      <Section tone="mist">
        <SectionHeader eyebrow={c.intro.eyebrow} title={c.intro.title} body={c.intro.body} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.intro.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  {[<Icon.Target key="t" />, <Icon.Beaker key="b" />, <Icon.Api key="a" />][i]}
                </div>
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capacidades genética / epigenética */}
      <Section tone="light">
        <SectionHeader eyebrow={c.capabilities.eyebrow} title={c.capabilities.title} body={c.capabilities.body} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {c.capabilities.cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 90}>
              <div className="card-surface flex h-full flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={i === 0 ? "brand" : "accent"}>{card.tag}</Badge>
                  {card.badge && <Badge tone="neutral">{card.badge}</Badge>}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{card.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink/80">
                      <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-soft text-brand-strong">
                        <Icon.Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <LocaleLink
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong hover:gap-2.5"
                  >
                    {card.cta}
                    <ArrowRight />
                  </LocaleLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Proceso de desarrollo (fases) */}
      <Section tone="dark">
        <SectionHeader eyebrow={c.process.eyebrow} title={c.process.title} body={c.process.body} tone="dark" />
        <div className="mt-12">
          <ProcessPhases steps={content.platform.steps} phases={content.platform.phases} tone="dark" />
        </div>
        <div className="mt-10">
          <Button href={c.process.cta.href} variant="light" size="lg">
            {c.process.cta.label}
            <ArrowRight />
          </Button>
        </div>
      </Section>

      {/* Casos de uso */}
      <Section tone="light">
        <SectionHeader eyebrow={c.useCases.eyebrow} title={c.useCases.title} body={c.useCases.body} />
        <div className="mt-12">
          <UseCaseGrid items={getUseCases(locale)} />
        </div>
      </Section>

      {/* Productos propios */}
      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-50" aria-hidden />
              {c.products.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{c.products.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.products.body}</p>
            <div className="mt-7">
              <Button href={c.products.cta.href} size="lg">
                {c.products.cta.label}
                <ArrowRight />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="flex flex-col">
                <Badge tone="brand">Mynu</Badge>
                <h3 className="mt-3 text-lg font-semibold">{content.products.mynu.tagline}</h3>
                <p className="mt-2 text-sm text-muted">{content.products.mynu.valueProp}</p>
              </Card>
              <Card className="flex flex-col">
                <Badge tone="accent">Mynu Baby</Badge>
                <h3 className="mt-3 text-lg font-semibold">{content.products.mynuBaby.tagline}</h3>
                <p className="mt-2 text-sm text-muted">{content.products.mynuBaby.valueProp}</p>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Propuesta para empresas */}
      <Section tone="light">
        <div className="rounded-3xl border border-line bg-gradient-to-br from-brand-soft/60 to-accent/5 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <span className="eyebrow">{c.forBusiness.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{c.forBusiness.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{c.forBusiness.body}</p>
              <div className="mt-6">
                <Button href={c.forBusiness.cta.href} size="lg">
                  {c.forBusiness.cta.label}
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid grid-cols-2 gap-3">
                {c.forBusiness.chips.map((x) => (
                  <li
                    key={x}
                    className="flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-ink shadow-soft"
                  >
                    <Icon.Building className="h-4 w-4 text-brand-strong" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="mist">
        <SectionHeader eyebrow={c.faq.eyebrow} title={c.faq.title} align="center" />
        <div className="mt-12">
          <FAQ items={getFaqs(locale)} />
        </div>
      </Section>

      {/* Cierre */}
      <CTABand
        title={c.closing.title}
        body={c.closing.body}
        primary={c.closing.primaryCta}
        secondary={c.closing.secondaryCta}
      />
    </>
  );
}
