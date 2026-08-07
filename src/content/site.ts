/**
 * Configuración global del sitio: identidad y datos de contacto (independientes
 * del idioma) + navegación, métricas y enlaces localizados por idioma.
 */
import type { Locale } from "./index";

export const site = {
  name: "Multiplex",
  legalName: "Multiplex SpA",
  rut: "76.701.556-9",
  tagline: "Plataforma de desarrollo de productos genéticos y epigenéticos",
  url: "https://www.multiplex.bio",
  locale: "es-CL",
  country: "Chile",
  email: "contacto@multiplex.bio",
  phone: "",
  address: "Avenida del Valle Norte 725, piso 3, Huechuraba, Santiago, Chile",
  social: {
    linkedin: "https://cl.linkedin.com/company/multiplexbio",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  soon?: boolean;
};

export type Metric = { value: string; label: string; detail: string };
export type FooterGroup = { title: string; items: NavItem[] };

// --------------------------------------------------------------- NAVEGACIÓN
const primaryNav: Record<Locale, NavItem[]> = {
  es: [
    { label: "Plataforma", href: "/plataforma", description: "El proceso completo, extremo a extremo" },
    { label: "Genética", href: "/genetica", description: "Paneles de SNPs y desarrollo white label" },
    { label: "Epigenética", href: "/epigenetica", description: "Próxima línea en desarrollo", soon: true },
    { label: "Soluciones", href: "/soluciones", description: "Para clínicas, laboratorios y aseguradoras" },
    { label: "Productos", href: "/productos", description: "Mynu y Mynu Baby" },
    { label: "Tecnología", href: "/tecnologia", description: "Arquitectura, bioinformática e integración" },
    { label: "Ciencia", href: "/ciencia", description: "Metodología y evidencia" },
    { label: "Nosotros", href: "/nosotros", description: "Equipo y visión" },
  ],
  en: [
    { label: "Platform", href: "/plataforma", description: "The full process, end to end" },
    { label: "Genetics", href: "/genetica", description: "SNP panels and white-label development" },
    { label: "Epigenetics", href: "/epigenetica", description: "Next line in development", soon: true },
    { label: "Solutions", href: "/soluciones", description: "For clinics, labs and insurers" },
    { label: "Products", href: "/productos", description: "Mynu and Mynu Baby" },
    { label: "Technology", href: "/tecnologia", description: "Architecture, bioinformatics and integration" },
    { label: "Science", href: "/ciencia", description: "Methodology and evidence" },
    { label: "About", href: "/nosotros", description: "Team and vision" },
  ],
};

// ------------------------------------------------------------------ FOOTER
const footerNav: Record<Locale, FooterGroup[]> = {
  es: [
    {
      title: "Plataforma",
      items: [
        { label: "Cómo funciona", href: "/plataforma" },
        { label: "Genética", href: "/genetica" },
        { label: "Epigenética", href: "/epigenetica" },
        { label: "Tecnología", href: "/tecnologia" },
      ],
    },
    {
      title: "Soluciones",
      items: [
        { label: "Clínicas y redes de salud", href: "/soluciones#clinicas" },
        { label: "Laboratorios", href: "/soluciones#laboratorios" },
        { label: "Aseguradoras", href: "/soluciones#aseguradoras" },
        { label: "Empresas de bienestar", href: "/soluciones#bienestar" },
      ],
    },
    {
      title: "Compañía",
      items: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Ciencia y evidencia", href: "/ciencia" },
        { label: "Productos", href: "/productos" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ],
  en: [
    {
      title: "Platform",
      items: [
        { label: "How it works", href: "/plataforma" },
        { label: "Genetics", href: "/genetica" },
        { label: "Epigenetics", href: "/epigenetica" },
        { label: "Technology", href: "/tecnologia" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Clinics and health networks", href: "/soluciones#clinicas" },
        { label: "Laboratories", href: "/soluciones#laboratorios" },
        { label: "Insurers", href: "/soluciones#aseguradoras" },
        { label: "Wellness companies", href: "/soluciones#bienestar" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/nosotros" },
        { label: "Science and evidence", href: "/ciencia" },
        { label: "Products", href: "/productos" },
        { label: "Contact", href: "/contacto" },
      ],
    },
  ],
};

// ----------------------------------------------------------------- MÉTRICAS
const metrics: Record<Locale, Metric[]> = {
  es: [
    { value: "< 3 meses", label: "Desarrollo de un panel nuevo", detail: "Desde la pregunta clínica hasta un producto validado." },
    { value: "+140 SNPs", label: "Por panel genético", detail: "Capacidad de análisis multiplexado de alta densidad." },
    { value: "hasta 4×", label: "Más económico por muestra", detail: "Frente al costo de las alternativas convencionales del mercado." },
    { value: "Extremo a extremo", label: "Elaboración del kit, procesamiento y secuenciación", detail: "Todo el flujo integrado en una sola plataforma." },
  ],
  en: [
    { value: "< 3 months", label: "New panel development", detail: "From the clinical question to a validated product." },
    { value: "140+ SNPs", label: "Per genetic panel", detail: "High-density multiplexed analysis capacity." },
    { value: "up to 4×", label: "Cheaper per sample", detail: "Versus the cost of conventional market alternatives." },
    { value: "End to end", label: "Kit build, processing and sequencing", detail: "The whole flow integrated in a single platform." },
  ],
};

// -------------------------------------------------------------------- LEGAL
const legalNav: Record<Locale, NavItem[]> = {
  es: [
    { label: "Política de privacidad", href: "/legal/privacidad" },
    { label: "Términos y condiciones", href: "/legal/terminos" },
    { label: "Consentimiento informado", href: "/legal/consentimiento" },
    { label: "Protección de datos genéticos", href: "/legal/datos" },
  ],
  en: [
    { label: "Privacy Policy", href: "/legal/privacidad" },
    { label: "Terms and Conditions", href: "/legal/terminos" },
    { label: "Informed Consent", href: "/legal/consentimiento" },
    { label: "Genetic Data Protection", href: "/legal/datos" },
  ],
};

// ------------------------------------------------------------------ GETTERS
export const getPrimaryNav = (locale: Locale): NavItem[] => primaryNav[locale] ?? primaryNav.es;
export const getFooterNav = (locale: Locale): FooterGroup[] => footerNav[locale] ?? footerNav.es;
export const getMetrics = (locale: Locale): Metric[] => metrics[locale] ?? metrics.es;
export const getLegalNav = (locale: Locale): NavItem[] => legalNav[locale] ?? legalNav.es;
