import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import type { UseCase } from "@/content/data";

/** Grilla de casos de uso destacados. Icono y color vienen del dato (estables entre idiomas). */
export function UseCaseGrid({ items }: { items: UseCase[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((uc, i) => {
        const IconCmp = Icon[uc.icon] ?? Icon.Sparkles;
        return (
          <Reveal
            as="article"
            key={uc.title}
            delay={(i % 3) * 70}
            className="card-surface group flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <IconCmp className="h-5 w-5" />
              </div>
              <Badge tone={uc.tone}>{uc.category}</Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{uc.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{uc.body}</p>
          </Reveal>
        );
      })}
    </div>
  );
}
