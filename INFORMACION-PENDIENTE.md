# Información que Multiplex debe proporcionar

Lista de contenidos y definiciones pendientes para completar el sitio antes de
publicar. Todos están marcados con `EDITABLE` en el código
(`grep -rn "EDITABLE" src/`).

---

## 1. Identidad y datos de la empresa
_(archivo: `src/content/site.ts`)_

- [x] Razón social: Multiplex SpA.
- [x] RUT: 76.701.556-9.
- [x] Dirección: Avenida del Valle Norte 725, piso 3, Huechuraba, Santiago.
- [x] Correo de contacto oficial: contacto@multiplex.bio.
- [x] Dominio de producción: https://www.multiplex.bio.
- [x] LinkedIn: https://cl.linkedin.com/company/multiplexbio.
- [n/a] Teléfono — la empresa decidió no publicar teléfono.

## 2. Producto Mynu Baby
_(archivo: `src/content/es.ts` → `products.mynuBaby`)_

Ficha completada con datos de mynubaby.cl + Multiplex:
- [x] Objetivo del test.
- [x] Edad de aplicación (0 a 24 meses).
- [x] Tipo de muestra (hisopado bucal, no invasivo).
- [x] Marcadores (~100 SNPs) y predisposiciones (+20).
- [x] Resultados entregados.
- [x] Tiempo de entrega (4 a 6 semanas).
- [x] Precio (≈ US$50).
- [n/a] Profesional responsable — se deja en mynubaby.cl por decisión de negocio.

## 3. Producto Mynu

- [ ] Confirmar que el precio **$50.000 CLP** está vigente.
- [x] Enlace al sitio de Mynu → https://mynu.ai/ (agregado en /productos).
- [x] Enlace al sitio de Mynu Baby → https://mynubaby.cl/ (agregado en /productos).

## 4. Ciencia y evidencia
_(archivo: `src/content/es.ts` → `science`)_

- [ ] Integrantes del comité científico y equipo técnico.
- [ ] Publicaciones / papers / referencias (cargar en
      `science.publications.items`: `{ title, source, year, url }`).

## 5. Nosotros
_(archivo: `src/content/es.ts` → `about`)_

- [ ] Historia real de la empresa.
- [ ] Fundadores.
- [ ] Equipo y roles.
- [ ] Advisors.
- [ ] Hitos (línea de tiempo).
- [ ] Alianzas estratégicas.

## 6. Legal, privacidad y cumplimiento
_(archivo: `src/app/legal/[slug]/page.tsx`)_

Textos definitivos, redactados por el equipo legal:
- [ ] Política de privacidad.
- [ ] Términos y condiciones.
- [ ] Consentimiento informado.
- [ ] Protección de datos genéticos.
- [ ] Responsable del tratamiento de datos.
- [ ] Certificaciones y autorizaciones sanitarias (solo si están confirmadas).

## 7. Métricas y capacidades
_(archivo: `src/content/site.ts` → `metrics`)_

- [ ] Confirmar que las cifras son correctas y comunicables:
      `< 3 meses`, `+140 SNPs`, `~US$10` (genética), `~US$15` (epigenética).
- [ ] Confirmar el encuadre "costos directos estimados, no precios finales".

## 8. Tecnología
_(archivo: `src/content/es.ts` → `technology.security`)_

- [ ] Certificaciones / estándares de seguridad reales (solo si están confirmados).

## 9. Integraciones y analítica

- [ ] CRM de destino del formulario (HubSpot / Salesforce / otro) y credenciales
      → completar `TODO: integración CRM` en `src/app/api/contact/route.ts`.
- [ ] Proveedor de analítica (GA4 / Plausible) → insertar script en `layout.tsx`.

## 10. Marca / assets

- [x] Color de marca aplicado: azul `#1479BE` (confirmar hex oficial exacto si lo tienen).
- [x] Símbolo "X de cromosoma" recreado en SVG (`src/components/ui/Logo.tsx`).
- [ ] Logotipo oficial en vector (SVG/AI) por si quieren reemplazar la recreación.
- [ ] Imagen Open Graph definitiva (hoy `public/og.svg` generada).
- [ ] Favicon definitivo (hoy `public/favicon.svg`).
- [ ] Fotografías / imágenes de equipo si se desean incorporar.

## 11. Contenido futuro (componentes ya listos)

- [ ] Testimonios de clientes / partners (componente `Testimonials` listo, sin datos).
