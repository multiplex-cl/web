import { Fragment } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export type ProcessStep = { n: number; title: string; body: string };

export type ProcessPhase = { fase: string; name: string; steps: readonly number[] };

/**
 * Vista por FASES del proceso: agrupa las etapas en bloques conectados por
 * flechas (horizontal en desktop, vertical en móvil). Resume el recorrido de
 * un vistazo. Soporta fondos claros (tone="light") y oscuros ("dark").
 */
export function ProcessPhases({
  steps,
  phases,
  tone = "light",
}: {
  steps: readonly ProcessStep[];
  phases: readonly ProcessPhase[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const byN = new Map(steps.map((s) => [s.n, s]));
  const last = phases.length - 1;

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
      {phases.map((ph, i) => (
        <Fragment key={ph.name}>
          <Reveal delay={i * 90} className="lg:flex-1">
            <div
              className={cn(
                "group flex h-full flex-col rounded-2xl border p-5 transition sm:p-6",
                dark
                  ? "border-white/10 bg-white/[0.03] hover:border-brand/40"
                  : "border-line bg-surface shadow-soft hover:shadow-lift",
                "lg:mx-1.5 lg:first:ml-0 lg:last:mr-0",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {ph.fase}
              </span>
              <h3 className={cn("mt-1.5 text-lg font-semibold", dark ? "text-white" : "text-ink")}>
                {ph.name}
              </h3>
              <ul className="mt-4 space-y-3">
                {ph.steps.map((n) => {
                  const step = byN.get(n);
                  if (!step) return null;
                  return (
                    <li key={n} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "grid h-6 w-6 flex-none place-items-center rounded-md font-display text-[11px] font-semibold",
                          dark ? "bg-brand/20 text-brand" : "bg-brand-soft text-brand-strong",
                        )}
                      >
                        {String(n).padStart(2, "0")}
                      </span>
                      <span className={cn("text-sm leading-snug", dark ? "text-white/85" : "text-ink/85")}>
                        {step.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {i < last && (
            <div className="flex items-center justify-center py-1 lg:px-1.5" aria-hidden>
              <PhaseArrow className={cn("h-5 w-5 rotate-90 lg:rotate-0", dark ? "text-brand" : "text-brand-strong")} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function PhaseArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Flujo de desarrollo: timeline vertical conectado. Los pasos se leen como un
 * recorrido secuencial (1 → n), unidos por una línea continua entre nodos.
 * Responsive y con soporte para fondos claros (tone="light") y oscuros ("dark").
 */
export function ProcessFlow({
  steps,
  tone = "light",
}: {
  steps: readonly ProcessStep[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const last = steps.length - 1;
  return (
    <ol className="relative mx-auto max-w-3xl">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.n} delay={(i % 3) * 70} className="group flex gap-5 sm:gap-6">
          {/* Rail: nodo numerado + conector hacia el siguiente paso */}
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "grid h-11 w-11 flex-none place-items-center rounded-full font-display text-sm font-semibold shadow-soft transition duration-300 group-hover:scale-110",
                dark
                  ? "bg-brand/20 text-brand ring-1 ring-brand/40"
                  : "bg-brand-soft text-brand-strong ring-1 ring-brand/20",
              )}
            >
              {String(step.n).padStart(2, "0")}
            </span>
            {i < last && (
              <span
                className={cn(
                  "my-1.5 w-0.5 flex-1 rounded-full",
                  dark
                    ? "bg-gradient-to-b from-brand/50 to-brand/15"
                    : "bg-gradient-to-b from-brand/40 to-brand/15",
                )}
              />
            )}
          </div>

          {/* Contenido del paso */}
          <div className={cn("pb-9", i === last ? "pb-1" : undefined)}>
            <h3 className={cn("text-base font-semibold sm:text-lg", dark ? "text-white" : "text-ink")}>
              {step.title}
            </h3>
            <p className={cn("mt-1.5 max-w-lg text-sm leading-relaxed", dark ? "text-white/60" : "text-muted")}>
              {step.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Versión compacta horizontal (pasos como pills conectadas). */
export function ProcessStrip({ steps }: { steps: readonly Pick<ProcessStep, "n" | "title">[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <div key={step.n} className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink shadow-soft">
            <span className="text-xs font-semibold text-brand-strong">
              {String(step.n).padStart(2, "0")}
            </span>
            {step.title}
          </span>
          {i < steps.length - 1 && (
            <span className="text-line" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
