/**
 * Set de iconos de línea propios (sin dependencias externas).
 * Todos heredan `currentColor` y aceptan className.
 */
import { cn } from "@/lib/cn";

type IconProps = { className?: string };

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
    >
      {children}
    </svg>
  );
}

export const Icon = {
  Dna: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M7 4c0 5 10 7 10 12M17 4c0 5-10 7-10 12M7 20c0-1 10-3 10-8M17 20c0-1-10-3-10-8" />
    </Svg>
  ),
  Molecule: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="6" r="2" />
      <path d="M7.5 16.5 11 8m2 0 3.5 8.5M8 18h8" />
    </Svg>
  ),
  Beaker: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3" />
      <path d="M7 15h10" />
    </Svg>
  ),
  Chip: ({ className }: IconProps) => (
    <Svg className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v2m4-2v2m-4 14v2m4-2v2M3 10h2m-2 4h2m14-4h2m-2 4h2" />
    </Svg>
  ),
  Report: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M13 3v5h5M8 13h8M8 17h5" />
    </Svg>
  ),
  Api: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M9 8 5 12l4 4m6-8 4 4-4 4M13 6l-2 12" />
    </Svg>
  ),
  Shield: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  Layers: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v5m18-5v5" />
    </Svg>
  ),
  Growth: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M4 19h16M6 16l4-5 3 3 5-7" />
      <path d="M18 7h2v2" />
    </Svg>
  ),
  Clock: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </Svg>
  ),
  Target: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </Svg>
  ),
  Route: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H15a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5" />
    </Svg>
  ),
  Heart: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.5 12 20 12 20Z" />
    </Svg>
  ),
  Pill: ({ className }: IconProps) => (
    <Svg className={className}>
      <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(45 12 12)" />
      <path d="M9 9l6 6" />
    </Svg>
  ),
  Baby: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="12" cy="6" r="2.5" />
      <path d="M6 20c0-3 3-5 6-5s6 2 6 5M9 12c1 1 5 1 6 0" />
    </Svg>
  ),
  Building: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21V9h4a1 1 0 0 1 1 1v11M4 21h17" />
      <path d="M7 8h2m-2 4h2m-2 4h2" />
    </Svg>
  ),
  Users: ({ className }: IconProps) => (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 5.5a3 3 0 0 1 0 5.5m5 9c0-2.5-1.8-4.3-4-4.8" />
    </Svg>
  ),
  Mail: ({ className }: IconProps) => (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  ),
  Check: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Svg>
  ),
  Sparkles: ({ className }: IconProps) => (
    <Svg className={className}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Svg>
  ),
} as const;

export type IconName = keyof typeof Icon;
