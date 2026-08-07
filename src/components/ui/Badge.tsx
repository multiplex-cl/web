import { cn } from "@/lib/cn";

type Tone = "brand" | "accent" | "neutral" | "dark";

const tones: Record<Tone, string> = {
  brand: "bg-brand-soft text-brand-strong",
  accent: "bg-accent/10 text-accent",
  neutral: "bg-mist text-muted",
  dark: "bg-white/10 text-white ring-1 ring-white/15",
};

/** Etiqueta compacta para categorías y tags. */
export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
