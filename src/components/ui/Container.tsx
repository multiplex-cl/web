import { cn } from "@/lib/cn";

/** Contenedor centrado con ancho máximo y padding horizontal consistente. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-x", className)}>{children}</div>;
}
