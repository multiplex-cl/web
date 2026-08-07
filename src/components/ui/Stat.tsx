import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export type StatItem = {
  value: string;
  label: string;
  detail?: string;
};

/** Grilla de estadísticas/capacidades destacadas. */
export function StatGrid({
  items,
  tone = "light",
  columns = 4,
  className,
}: {
  items: readonly StatItem[];
  tone?: "light" | "dark";
  columns?: 3 | 4;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-2xl",
        dark ? "bg-white/10 ring-1 ring-white/10" : "bg-line ring-1 ring-line",
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={i * 70}
          className={cn("p-6 sm:p-7", dark ? "bg-night" : "bg-surface")}
        >
          <div className={cn("font-display text-3xl font-semibold sm:text-4xl", dark ? "text-white" : "text-gradient")}>
            {item.value}
          </div>
          <div className={cn("mt-2 text-sm font-medium", dark ? "text-white/90" : "text-ink")}>
            {item.label}
          </div>
          {item.detail && (
            <div className={cn("mt-1 text-xs leading-relaxed", dark ? "text-white/55" : "text-muted")}>
              {item.detail}
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
