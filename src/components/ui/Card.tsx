import { cn } from "@/lib/cn";
import { ArrowRight } from "./Button";
import { LocaleLink } from "./LocaleLink";

/** Tarjeta genérica con profundidad suave. */
export function Card({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const Tag = as as any;
  return <Tag className={cn("card-surface p-6 sm:p-7", className)}>{children}</Tag>;
}

/**
 * Tarjeta de característica: icono opcional, título, cuerpo y enlace.
 * `icon` recibe un nodo (SVG) para mantener flexibilidad.
 */
export function FeatureCard({
  title,
  body,
  icon,
  href,
  cta,
  points,
  className,
}: {
  title: string;
  body: string;
  icon?: React.ReactNode;
  href?: string;
  cta?: string;
  points?: readonly string[];
  className?: string;
}) {
  const content = (
    <>
      {icon && (
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{body}</p>
      {points && points.length > 0 && (
        <ul className="mt-4 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-ink/80">
              <CheckDot />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
      {href && cta && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
          {cta}
          <ArrowRight className="transition group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <LocaleLink
        href={href}
        className={cn(
          "card-surface group flex flex-col p-6 sm:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          className,
        )}
      >
        {content}
      </LocaleLink>
    );
  }

  return <Card className={cn("flex flex-col", className)}>{content}</Card>;
}

export function CheckDot() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-brand-soft text-brand-strong">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden>
        <path
          d="M2.5 6.2 5 8.5 9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
