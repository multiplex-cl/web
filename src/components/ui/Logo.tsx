import { cn } from "@/lib/cn";
import { LocaleLink } from "./LocaleLink";

/**
 * Marca Multiplex.
 *
 * Símbolo: la "X" de cromosoma del logo original, construida con segmentos
 * (dashes) que forman las cuatro ramas de una X — evoca cromosoma / ADN y el
 * concepto de "multiplexado" sin recurrir a la hélice obvia.
 *
 * El wordmark usa la fuente display (Sora) en versalitas con tracking para
 * acercarse al carácter del logotipo impreso.
 */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-ink";
  const mark = variant === "light" ? "text-white" : "text-brand";
  return (
    <LocaleLink
      href="/"
      aria-label="Multiplex"
      className={cn("inline-flex items-center gap-2.5 font-display", className)}
    >
      <LogoMark className={cn("h-8 w-8", mark)} />
      <span className={cn("text-[1.3rem] font-bold uppercase tracking-[0.02em]", text)}>
        Multiplex
      </span>
    </LocaleLink>
  );
}

// Centros de cada segmento horizontal que compone las cuatro ramas de la X.
// viewBox 40×40, centro (20,20); tres segmentos por rama.
const BARS: [number, number][] = [
  // rama superior derecha
  [24.5, 15.5],
  [28.1, 11.9],
  [31.8, 8.2],
  // rama superior izquierda
  [15.5, 15.5],
  [11.9, 11.9],
  [8.2, 8.2],
  // rama inferior derecha
  [24.5, 24.5],
  [28.1, 28.1],
  [31.8, 31.8],
  // rama inferior izquierda
  [15.5, 24.5],
  [11.9, 28.1],
  [8.2, 31.8],
];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      {BARS.map(([cx, cy], i) => (
        <rect
          key={i}
          x={cx - 3.6}
          y={cy - 1.45}
          width={7.2}
          height={2.9}
          rx={1.45}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/**
 * Variante del símbolo con relleno en degradado (para fondos claros donde se
 * quiera un acento cromático). Usa colores de marca fijos.
 */
export function LogoMarkGradient({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="mx-mark" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(20 121 190)" />
          <stop offset="1" stopColor="rgb(14 116 144)" />
        </linearGradient>
      </defs>
      {BARS.map(([cx, cy], i) => (
        <rect
          key={i}
          x={cx - 3.6}
          y={cy - 1.45}
          width={7.2}
          height={2.9}
          rx={1.45}
          fill="url(#mx-mark)"
        />
      ))}
    </svg>
  );
}
