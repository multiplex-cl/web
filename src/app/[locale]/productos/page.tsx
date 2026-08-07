import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CheckDot } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";
import { Icon } from "@/components/ui/icons";
import { getContent, type Locale } from "@/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const en = params.locale === "en";
  return buildMetadata({
    title: en ? "Products" : "Productos",
    description: en
      ? "Mynu and Mynu Baby: Multiplex's own products that show how the platform turns scientific evidence into finished personalized-medicine products."
      : "Mynu y Mynu Baby: productos propios de Multiplex que demuestran cómo la plataforma transforma evidencia científica en productos terminados de medicina personalizada.",
    path: "/productos",
    locale: params.locale,
    keywords: ["test genético nutricional", "genética personalizada"],
  });
}

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  const pr = getContent(params.locale).products;

  return (
    <>
      <PageHero eyebrow={pr.hero.eyebrow} title={pr.hero.title} subtitle={pr.hero.subtitle} />

      {/* Mynu */}
      <Section tone="light">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge tone="brand">{pr.mynu.name}</Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{pr.mynu.tagline}</h2>
            <p className="mt-4 font-display text-xl font-semibold text-gradient">{pr.mynu.valueProp}</p>
            <div className="mt-3">
              <Badge tone="brand">{pr.mynu.markers}</Badge>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-muted">{pr.mynu.description}</p>
            <div className="mt-7">
              <Button href={pr.mynu.cta.href} size="lg">
                {pr.mynu.cta.label}
                <ArrowRight />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface p-7 sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                <Icon.Dna />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{en ? "What Mynu does" : "Qué hace Mynu"}</h3>
              <ul className="mt-5 space-y-3">
                {pr.mynu.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink/85">
                    <CheckDot />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mynu Baby — producto desarrollado y disponible */}
      <Section tone="mist">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge tone="accent">{pr.mynuBaby.name}</Badge>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{pr.mynuBaby.tagline}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{pr.mynuBaby.description}</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink">{en ? "Categories it assesses" : "Categorías que evalúa"}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {pr.mynuBaby.categories.map((cat) => (
                  <li key={cat}>
                    <Badge tone="neutral">{cat}</Badge>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-sm font-medium text-accent">
              <Icon.Baby className="h-4 w-4" />
              {pr.mynuBaby.note}
            </p>
            <div className="mt-7">
              <Button href={pr.mynuBaby.cta.href} size="lg" variant="secondary">
                {pr.mynuBaby.cta.label}
                <ArrowRight />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface overflow-hidden p-0">
              <div className="border-b border-line bg-surface px-6 py-4">
                <h3 className="text-sm font-semibold text-ink">{en ? "Product sheet" : "Ficha del producto"}</h3>
                <p className="text-xs text-muted">{en ? "Test information." : "Información del test."}</p>
              </div>
              <dl className="divide-y divide-line">
                {pr.mynuBaby.editableFields.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
                    <dt className="text-sm font-medium text-ink">{f.label}</dt>
                    <dd className="text-right text-xs font-medium text-accent">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* La plataforma detrás */}
      <Section tone="light">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-line bg-mist p-7 text-center sm:p-9">
          <Icon.Sparkles className="mx-auto h-6 w-6 text-brand-strong" />
          <h2 className="mt-3 text-2xl font-semibold">
            {en ? "These products are just the beginning" : "Estos productos son solo el comienzo"}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {en
              ? "Mynu and Mynu Baby show Multiplex's ability to take evidence to a finished product. The same platform can create your organization's next product."
              : "Mynu y Mynu Baby demuestran la capacidad de Multiplex de llevar la evidencia a un producto terminado. La misma plataforma puede crear el próximo producto de tu organización."}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/soluciones" size="lg" variant="secondary">
              {en ? "Create a product with Multiplex" : "Crea un producto con Multiplex"}
              <ArrowRight />
            </Button>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title={en ? "Want your own genetic product?" : "¿Quieres tu propio producto genético?"}
        body={
          en
            ? "We design white-label products ready to launch under your brand."
            : "Diseñamos productos white label listos para lanzarse bajo tu marca."
        }
        primary={{ label: en ? "Develop a panel with us" : "Desarrolla un panel con nosotros", href: "/contacto" }}
      />
    </>
  );
}
