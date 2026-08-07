/**
 * Une clases condicionales sin dependencias externas.
 * Uso: cn("base", condición && "extra", otra)
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
