import { cn } from "@/lib/cn";

/**
 * Visualización molecular abstracta: red de nodos y conexiones.
 * Decorativa (aria-hidden). Posiciones deterministas para evitar mismatch
 * de hidratación. Se usa como fondo sutil, no como hélice de ADN obvia.
 */
const nodes = [
  { x: 90, y: 120, r: 4 },
  { x: 210, y: 70, r: 5 },
  { x: 330, y: 150, r: 3.5 },
  { x: 150, y: 230, r: 6 },
  { x: 300, y: 280, r: 4 },
  { x: 430, y: 100, r: 4.5 },
  { x: 470, y: 240, r: 3 },
  { x: 60, y: 320, r: 3.5 },
  { x: 380, y: 340, r: 5 },
  { x: 520, y: 160, r: 4 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 5],
  [5, 9],
  [4, 8],
  [3, 7],
  [5, 6],
  [6, 9],
  [4, 6],
  [0, 3],
];

export function MoleculeField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      aria-hidden
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="mf-line" x1="0" y1="0" x2="560" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(20 121 190)" />
          <stop offset="1" stopColor="rgb(14 116 144)" />
        </linearGradient>
        <radialGradient id="mf-node" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="rgb(20 121 190)" />
          <stop offset="1" stopColor="rgb(14 116 144)" />
        </radialGradient>
      </defs>
      <g stroke="url(#mf-line)" strokeWidth="1" opacity="0.35">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
        ))}
      </g>
      <g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="url(#mf-node)"
            className="animate-float"
            style={{ animationDelay: `${(i % 5) * 0.6}s`, animationDuration: `${6 + (i % 4)}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
