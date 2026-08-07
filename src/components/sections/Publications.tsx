import { Icon } from "@/components/ui/icons";

export type Publication = { title: string; source: string; year: string; url?: string };

/**
 * Lista de publicaciones científicas. Preparada para poblarse desde
 * `content.science.publications.items`. Muestra estado vacío editable.
 */
export function Publications({ items, empty }: { items: Publication[]; empty: string }) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-mist/60 p-8 text-center">
        <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
          <Icon.Report />
        </div>
        <p className="mx-auto max-w-md text-sm text-muted">{empty}</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((pub) => (
        <li key={pub.title} className="flex items-start gap-4 p-5 sm:p-6">
          <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
            <Icon.Report className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-ink">{pub.title}</p>
            <p className="mt-1 text-sm text-muted">
              {pub.source} · {pub.year}
            </p>
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-brand-strong hover:underline"
              >
                Ver publicación →
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
