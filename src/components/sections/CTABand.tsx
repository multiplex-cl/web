import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MoleculeField } from "./MoleculeField";

/** Banda de llamada a la acción, sobre fondo oscuro con acento molecular. */
export function CTABand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-night py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40" aria-hidden>
        <MoleculeField />
      </div>
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(14 116 144 / 0.5), transparent 70%)" }}
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">{body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} size="lg">
              {primary.label}
              <ArrowRight />
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="light">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
