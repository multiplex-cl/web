/**
 * Datos reutilizables (casos de uso, FAQ, tipos de organización), localizados.
 * El `icon` y el `tone` de cada caso de uso son estables entre idiomas para que
 * no dependan del texto traducido.
 */
import type { IconName } from "@/components/ui/icons";
import type { Locale } from "./index";

export type UseCase = {
  title: string;
  body: string;
  category: string;
  icon: IconName;
  tone: "brand" | "accent" | "neutral";
};

const useCases: Record<Locale, UseCase[]> = {
  es: [
    { title: "Farmacogenética", body: "Paneles que apoyan decisiones sobre respuesta y metabolización de fármacos.", category: "Genética", icon: "Pill", tone: "brand" },
    { title: "Nutrición personalizada", body: "Variantes asociadas a metabolismo y micronutrientes para programas de nutrición.", category: "Genética", icon: "Heart", tone: "brand" },
    { title: "Riesgo cardiometabólico", body: "Marcadores relacionados con perfiles metabólicos y cardiovasculares.", category: "Genética", icon: "Growth", tone: "brand" },
    { title: "Salud preventiva", body: "Información molecular como insumo para iniciativas de prevención.", category: "Programas", icon: "Shield", tone: "neutral" },
    { title: "Salud materno-infantil", body: "Paneles orientados al ciclo materno-infantil, con prudencia científica.", category: "Genética", icon: "Baby", tone: "brand" },
    { title: "Programas corporativos", body: "Bienestar y salud metabólica para poblaciones de colaboradores.", category: "Programas", icon: "Building", tone: "neutral" },
    { title: "Seguimiento epigenético", body: "Línea en desarrollo: evaluación antes y después de intervenciones a nivel poblacional.", category: "Epigenética", icon: "Route", tone: "accent" },
    { title: "White label", body: "Productos genéticos —y próximamente epigenéticos— listos para lanzarse bajo tu marca.", category: "White label", icon: "Layers", tone: "neutral" },
    { title: "Investigación aplicada", body: "Paneles a medida y procesamiento para estudios y cohortes.", category: "Programas", icon: "Beaker", tone: "neutral" },
    { title: "Paneles poblacionales LatAm", body: "Paneles adaptados a las características de poblaciones de Latinoamérica.", category: "Genética", icon: "Molecule", tone: "brand" },
  ],
  en: [
    { title: "Pharmacogenetics", body: "Panels that support decisions on drug response and metabolism.", category: "Genetics", icon: "Pill", tone: "brand" },
    { title: "Personalized nutrition", body: "Variants linked to metabolism and micronutrients for nutrition programs.", category: "Genetics", icon: "Heart", tone: "brand" },
    { title: "Cardiometabolic risk", body: "Markers related to metabolic and cardiovascular profiles.", category: "Genetics", icon: "Growth", tone: "brand" },
    { title: "Preventive health", body: "Molecular information as input for prevention initiatives.", category: "Programs", icon: "Shield", tone: "neutral" },
    { title: "Maternal and child health", body: "Panels focused on the maternal-child cycle, with scientific prudence.", category: "Genetics", icon: "Baby", tone: "brand" },
    { title: "Corporate programs", body: "Wellness and metabolic health for employee populations.", category: "Programs", icon: "Building", tone: "neutral" },
    { title: "Epigenetic monitoring", body: "Line in development: assessment before and after interventions at the population level.", category: "Epigenetics", icon: "Route", tone: "accent" },
    { title: "White label", body: "Genetic products —and soon epigenetic ones— ready to launch under your brand.", category: "White label", icon: "Layers", tone: "neutral" },
    { title: "Applied research", body: "Custom panels and processing for studies and cohorts.", category: "Programs", icon: "Beaker", tone: "neutral" },
    { title: "LatAm population panels", body: "Panels adapted to the characteristics of Latin American populations.", category: "Genetics", icon: "Molecule", tone: "brand" },
  ],
};

export type FaqItem = { q: string; a: string };

const faqs: Record<Locale, FaqItem[]> = {
  es: [
    {
      q: "¿Multiplex es un laboratorio o una plataforma?",
      a: "Somos una plataforma tecnológica de medicina personalizada. Diseñamos, desarrollamos e implementamos productos genéticos de extremo a extremo —con una línea epigenética en desarrollo— e incluimos capacidad de laboratorio como parte del proceso.",
    },
    {
      q: "¿Cuánto tarda desarrollar un panel nuevo?",
      a: "Nuestra capacidad de plataforma permite desarrollar un panel nuevo en menos de tres meses, desde la definición del objetivo hasta un producto validado.",
    },
    {
      q: "¿Por qué Multiplex es más económico que otras alternativas?",
      a: "Al controlar internamente la elaboración del kit, el procesamiento y la secuenciación, nuestro costo por muestra puede ser hasta 4 veces menor que el de las alternativas convencionales del mercado. La comparación es referencial; el precio final de cada producto depende de su alcance, volumen e integración.",
    },
    {
      q: "¿Qué es un producto white label?",
      a: "Es un producto genético o epigenético desarrollado por Multiplex que tu organización lanza bajo su propia marca, integrado a tu operación clínica o comercial.",
    },
    {
      q: "¿Cómo se integran los resultados a nuestros sistemas?",
      a: "La plataforma está preparada para integrarse vía API, entregando resultados y reportes personalizados a plataformas, apps o sistemas clínicos de nuestros clientes.",
    },
    {
      q: "¿Cómo protegen los datos genéticos?",
      a: "Tratamos los datos genéticos como información altamente sensible, con separación de contextos entre pacientes, empresas y profesionales, y principios de confidencialidad y minimización de datos.",
    },
  ],
  en: [
    {
      q: "Is Multiplex a lab or a platform?",
      a: "We are a technology platform for personalized medicine. We design, develop and deploy genetic products end to end —with an epigenetics line in development— and include lab capacity as part of the process.",
    },
    {
      q: "How long does it take to develop a new panel?",
      a: "Our platform capacity allows a new panel to be developed in under three months, from goal definition to a validated product.",
    },
    {
      q: "Why is Multiplex more affordable than other alternatives?",
      a: "By handling kit build, processing and sequencing in house, our cost per sample can be up to 4× lower than conventional market alternatives. The comparison is indicative; the final price of each product depends on its scope, volume and integration.",
    },
    {
      q: "What is a white-label product?",
      a: "It is a genetic or epigenetic product developed by Multiplex that your organization launches under its own brand, integrated into your clinical or commercial operation.",
    },
    {
      q: "How are results integrated into our systems?",
      a: "The platform is ready to integrate via API, delivering results and custom reports to our clients' platforms, apps or clinical systems.",
    },
    {
      q: "How do you protect genetic data?",
      a: "We treat genetic data as highly sensitive information, with separation of contexts between patients, companies and professionals, and principles of confidentiality and data minimization.",
    },
  ],
};

const organizationTypes: Record<Locale, string[]> = {
  es: ["Clínica", "Laboratorio", "Aseguradora", "Farmacia", "Empresa de bienestar", "Investigación", "Inversionista", "Otro"],
  en: ["Clinic", "Laboratory", "Insurer", "Pharmacy", "Wellness company", "Research", "Investor", "Other"],
};

export const getUseCases = (locale: Locale): UseCase[] => useCases[locale] ?? useCases.es;
export const getFaqs = (locale: Locale): FaqItem[] => faqs[locale] ?? faqs.es;
export const getOrganizationTypes = (locale: Locale): string[] => organizationTypes[locale] ?? organizationTypes.es;
