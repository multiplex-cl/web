import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Tone = "light" | "mist" | "dark";

const toneClasses: Record<Tone, string> = {
  light: "bg-surface text-ink",
  mist: "bg-mist text-ink",
  dark: "bg-night text-white",
};

/** Sección de página con tono de fondo, padding vertical y contenedor. */
export function Section({
  children,
  tone = "light",
  className,
  id,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-28",
        toneClasses[tone],
        tone === "dark" && "overflow-hidden",
        className,
      )}
    >
      {tone === "dark" && <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" />}
      <Container className="relative">{children}</Container>
    </section>
  );
}

/** Encabezado de sección: eyebrow + título + descripción, con alineación. */
export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", dark && "text-brand")}>
          <span className="h-px w-6 bg-current opacity-50" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/70" : "text-muted")}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
