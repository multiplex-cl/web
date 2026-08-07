import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { MoleculeField } from "./MoleculeField";
import { getContent, type Locale } from "@/content";

/** Hero principal del sitio (Inicio). Alto impacto, moderno y corporativo. */
export function Hero({ locale }: { locale: Locale }) {
  const h = getContent(locale).home.hero;
  return (
    <section className="relative overflow-hidden bg-night text-white">
      {/* Fondo: grid + campo molecular + resplandor */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute right-[-10%] top-[-10%] h-[560px] w-[560px] max-w-full">
          <MoleculeField />
        </div>
      </div>
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(20 121 190 / 0.5), transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl py-24 sm:py-28 lg:py-36">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">
            {h.eyebrow}
          </span>

          <h1 className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {h.titleLead}{" "}
            <span className="text-gradient">{h.titleAccent}</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl" style={{ animationDelay: "80ms" }}>
            {h.subtitle}
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "160ms" }}>
            <Button href={h.primaryCta.href} size="lg">
              {h.primaryCta.label}
              <ArrowRight />
            </Button>
            <Button href={h.secondaryCta.href} size="lg" variant="light">
              {h.secondaryCta.label}
            </Button>
          </div>

          <div className="animate-fade-up mt-10 border-t border-white/10 pt-6" style={{ animationDelay: "240ms" }}>
            <p className="text-base font-medium text-white/90">{h.support}</p>
            <p className="mt-1 text-sm text-white/50">{h.supportNote}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Hero secundario reutilizable para páginas internas. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-50"
        aria-hidden
      >
        <MoleculeField className="opacity-40" />
      </div>
      <Container className="relative">
        <div className="max-w-3xl py-16 sm:py-20 lg:py-24">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-50" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
