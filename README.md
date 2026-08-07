# Multiplex — Sitio corporativo

Sitio web corporativo de **Multiplex**, plataforma chilena de biotecnología para el
desarrollo de **productos genéticos y epigenéticos** de medicina personalizada.

El sitio posiciona a Multiplex como una **plataforma tecnológica** (una "fábrica de
productos de medicina personalizada"), no como un simple laboratorio ni como un test
de venta directa.

---

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Lenguaje | TypeScript (modo estricto) |
| Estilos | Tailwind CSS 3 (design tokens vía variables CSS) |
| Fuentes | `next/font` — Inter (texto) + Sora (display) |
| Animación | IntersectionObserver + CSS (con fallback sin JS y respeto a `prefers-reduced-motion`) |
| Formularios | Componente controlado + API route (`/api/contact`) simulada, lista para CRM |

Sin dependencias de UI externas: los iconos, el logo y las visualizaciones
moleculares son SVG propios.

---

## Requisitos

- Node.js `>= 18.18`
- npm `>= 9`

## Instalación y desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint (next lint)
npm run typecheck  # TypeScript sin emitir
```

Estado actual: `lint`, `typecheck` y `build` pasan sin errores ni advertencias.

---

## Estructura del proyecto

```
src/
├── app/                    # Rutas (App Router)
│   ├── layout.tsx          # Layout raíz: fuentes, metadata global, JSON-LD, Navbar/Footer
│   ├── page.tsx            # Inicio
│   ├── plataforma/         # /plataforma
│   ├── genetica/           # /genetica
│   ├── epigenetica/        # /epigenetica
│   ├── soluciones/         # /soluciones (con anclas por segmento)
│   ├── productos/          # /productos (Mynu, Mynu Baby)
│   ├── tecnologia/         # /tecnologia
│   ├── ciencia/            # /ciencia (metodología + publicaciones)
│   ├── nosotros/           # /nosotros
│   ├── contacto/           # /contacto (formulario)
│   ├── legal/[slug]/       # /legal/privacidad|terminos|consentimiento|datos (placeholders)
│   ├── api/contact/        # Endpoint del formulario (simulado, listo para CRM)
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   ├── not-found.tsx       # 404
│   └── globals.css         # Design tokens + utilidades
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Button, Card, Section, Stat, Badge, Logo, icons, Reveal, Container
│   └── sections/           # Hero, ProcessFlow, UseCaseGrid, CTABand, FAQ,
│                           # Publications, Testimonials, ContactForm, MoleculeField
├── content/
│   ├── es.ts               # ⭐ TODO el copy en español (por página)
│   ├── data.ts             # Casos de uso, FAQ, tipos de organización
│   ├── site.ts             # Navegación, métricas, datos de la empresa
│   └── index.ts            # Capa i18n (getContent) — preparada para inglés
└── lib/
    ├── seo.ts              # Helper de metadata + keywords globales
    └── cn.ts               # Utilidad de clases
```

---

## Contenido y edición

Casi todo el texto vive en **`src/content/`**. Para cambiar copy no hace falta tocar
componentes:

- **`es.ts`** — textos por página.
- **`data.ts`** — casos de uso, preguntas frecuentes, opciones del formulario.
- **`site.ts`** — nombre, email, dirección, navegación y métricas.

### Placeholders pendientes

Todo el contenido que Multiplex debe confirmar está marcado con `EDITABLE` en el
código. Para listarlos:

```bash
grep -rn "EDITABLE" src/
```

Ver también [`INFORMACION-PENDIENTE.md`](./INFORMACION-PENDIENTE.md).

---

## Internacionalización (español + inglés)

El sitio es **bilingüe** con rutas por idioma: `/es/...` y `/en/...` (la raíz `/`
redirige a `/es`). Hay un **selector ES/EN** en la barra de navegación.

- Contenido: `src/content/es.ts` (oficial) y `src/content/en.ts` (misma forma).
  Resolución vía `getContent(locale)` en `src/content/index.ts`.
- Navegación/métricas/footer/legal: getters `getPrimaryNav`, `getFooterNav`,
  `getMetrics`, `getLegalNav`, `getUseCases`, `getFaqs`, `getLegalDocs`.
- Enlaces internos: `LocaleLink` / `withLocale` prefijan el idioma activo.
- Rutas: `src/app/[locale]/...` con `generateStaticParams` (es, en).
- Legales: el español es la versión oficial; el inglés es traducción de
  referencia (con nota de que el español prevalece).

Para agregar un idioma nuevo: crear `xx.ts`, registrarlo en `index.ts`
(`locales` y `dictionaries`) y añadir sus variantes en `site.ts` / `data.ts` /
`legal.ts`.

---

## Formulario de contacto → CRM

`POST /api/contact` valida el payload (cliente **y** servidor) y hoy responde OK sin
persistir datos. Para conectarlo a HubSpot / Salesforce / email, completar el bloque
`TODO: integración CRM` en [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts)
(por ejemplo, usando una variable de entorno `CRM_WEBHOOK_URL`).

---

## SEO y analítica

- `metadata` por página (title, description, canonical, Open Graph, Twitter).
- `sitemap.xml` y `robots.txt` generados.
- JSON-LD `Organization` en el layout.
- Imagen Open Graph en `public/og.svg`.
- **Antes de publicar:** ajustar `site.url` en `src/content/site.ts` al dominio real.
- Analítica: el layout es el punto único para insertar el script del proveedor
  (GA4, Plausible, etc.).

---

## Despliegue

El proyecto es un app estándar de Next.js y despliega sin configuración especial.

### Vercel (recomendado)
1. Importar el repositorio en Vercel.
2. Framework detectado automáticamente (Next.js). Build: `npm run build`.
3. Definir variables de entorno del CRM cuando se integre.

### Node / contenedor
```bash
npm run build
npm run start   # sirve en el puerto 3000 (o $PORT)
```

Recordar configurar el dominio en `site.url` para que `sitemap`, `robots` y las URLs
canónicas apunten correctamente.

---

## Notas de cumplimiento

- No se afirman certificaciones, autorizaciones sanitarias ni acreditaciones no
  confirmadas.
- Los valores por muestra (~US$10 genética, ~US$15 epigenética) se presentan como
  **costos directos de procesamiento estimados**, no como precios comerciales.
- Las páginas legales (`/legal/*`) son placeholders y deben redactarse por el equipo
  legal antes de publicar.
- El contenido de epigenética evita afirmaciones diagnósticas o de "edad biológica"
  no validadas.
