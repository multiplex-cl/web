import { Reveal } from "@/components/ui/Reveal";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  org: string;
};

/**
 * Testimonios de clientes/partners. Componente listo para el futuro:
 * si no hay items, no renderiza nada. EDITABLE — poblar cuando existan.
 */
export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <Reveal as="figure" key={t.author} delay={(i % 3) * 70} className="card-surface flex flex-col p-6">
          <blockquote className="text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
          <figcaption className="mt-5 border-t border-line pt-4 text-sm">
            <span className="font-semibold text-ink">{t.author}</span>
            <span className="block text-muted">
              {t.role} · {t.org}
            </span>
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
