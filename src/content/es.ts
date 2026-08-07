/**
 * Contenido del sitio en ESPAÑOL.
 *
 * Todo el copy vive aquí, en objetos estructurados por página, para:
 *  1. Mantener los componentes libres de texto (i18n-ready).
 *  2. Permitir una versión en inglés replicando este archivo como `en.ts`
 *     (ver `src/content/index.ts`).
 *
 * Las cadenas marcadas con `EDITABLE` son placeholders que Multiplex debe
 * confirmar. Búscalas con: grep -rn "EDITABLE" src/
 */

export const es = {
  // ---------------------------------------------------------------- INICIO
  home: {
    hero: {
      eyebrow: "Medicina personalizada · Genética · Epigenética",
      title: "Creamos la próxima generación de productos genéticos y epigenéticos",
      titleLead: "Creamos la próxima generación de",
      titleAccent: "productos genéticos y epigenéticos",
      subtitle:
        "Multiplex permite diseñar, desarrollar e implementar paneles personalizados en menos de tres meses, desde la evidencia científica hasta el reporte final.",
      primaryCta: { label: "Desarrolla un panel con nosotros", href: "/contacto" },
      secondaryCta: { label: "Conoce nuestra tecnología", href: "/tecnologia" },
      support: "Elaboramos, procesamos y secuenciamos el kit completo de extremo a extremo, a una fracción del costo del mercado.",
      supportNote: "Un costo por muestra hasta 4 veces menor que el de las alternativas convencionales.",
    },
    intro: {
      eyebrow: "La plataforma",
      title: "Una fábrica de productos de medicina personalizada",
      body: "Multiplex transforma evidencia científica en nuevos productos genéticos y epigenéticos con aplicaciones clínicas y comerciales. No somos solo un laboratorio: somos la infraestructura tecnológica que permite a empresas de salud diseñar, validar y escalar sus propios productos moleculares.",
      pillars: [
        {
          title: "Diseñamos",
          body: "Paneles genéticos y epigenéticos a medida del objetivo clínico o comercial de cada organización.",
        },
        {
          title: "Desarrollamos",
          body: "Selección de biomarcadores, validación analítica y bioinformática, en menos de tres meses.",
        },
        {
          title: "Implementamos",
          body: "Interpretación, reportes personalizados e integración white label vía API.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capacidades",
      title: "Genética disponible hoy, epigenética en desarrollo",
      body: "Nuestra línea genética ya está operativa. La epigenética es la próxima, sobre la misma infraestructura de desarrollo, procesamiento e interpretación.",
      cards: [
        {
          tag: "Genética",
          badge: "Disponible",
          title: "Paneles de SNPs de alta densidad",
          body: "Diseño y análisis de paneles de más de 140 SNPs para farmacogenética, riesgo cardiometabólico, nutrición y salud preventiva.",
          points: ["+140 SNPs por panel", "Costo por muestra hasta 4× menor que el mercado", "Desarrollo white label"],
          href: "/genetica",
          cta: "Explorar genética",
        },
        {
          tag: "Epigenética",
          badge: "En desarrollo",
          title: "Paneles epigenéticos y seguimiento",
          body: "Nuestra próxima línea. Respaldada por una tesis científica sólida y por la capacidad de plataforma ya instalada; aún no disponible comercialmente.",
          points: ["Respaldada por una tesis científica sólida", "Aprovecha la capacidad de plataforma instalada", "En desarrollo — próximamente"],
          href: "/epigenetica",
          cta: "Conoce la línea",
        },
      ],
    },
    process: {
      eyebrow: "Proceso de desarrollo",
      title: "Desde la pregunta clínica hasta un producto listo para escalar",
      body: "Controlamos cada etapa del ciclo de vida del producto molecular. Esto reduce el tiempo de desarrollo y asegura consistencia entre la evidencia y el reporte final.",
      cta: { label: "Conoce la plataforma", href: "/plataforma" },
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Una plataforma de diseño para múltiples productos",
      body: "Más que un catálogo cerrado, Multiplex es una plataforma de diseño: seleccionamos biomarcadores, definimos la arquitectura del panel y construimos la interpretación según cada objetivo. Eso nos permite desarrollar paneles genéticos aplicables a distintos dominios clínicos y comerciales. Estos son algunos de los casos de uso que ya habilita.",
    },
    products: {
      eyebrow: "Productos propios",
      title: "Nuestros productos son la prueba de la plataforma",
      body: "Mynu y Mynu Baby demuestran cómo Multiplex convierte evidencia científica en productos terminados, de la muestra al reporte.",
      cta: { label: "Conoce Mynu", href: "/productos" },
    },
    forBusiness: {
      eyebrow: "Para empresas",
      title: "Tu próximo producto genético, bajo tu propia marca",
      body: "Clínicas, laboratorios, aseguradoras, farmacias y empresas de bienestar utilizan Multiplex como su motor de desarrollo de productos moleculares white label.",
      cta: { label: "Ver soluciones", href: "/soluciones" },
      chips: ["Clínicas", "Laboratorios", "Aseguradoras", "Farmacias", "Bienestar", "Salud digital"],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo esencial sobre Multiplex",
    },
    closing: {
      title: "Conversemos sobre el próximo producto de medicina personalizada de tu organización",
      body: "Cuéntanos qué quieres desarrollar. Diseñamos una propuesta técnica y comercial a la medida.",
      primaryCta: { label: "Desarrolla un panel con nosotros", href: "/contacto" },
      secondaryCta: { label: "Solicita una propuesta", href: "/contacto" },
    },
  },

  // ------------------------------------------------------------ PLATAFORMA
  platform: {
    hero: {
      eyebrow: "La plataforma",
      title: "Controlamos el proceso completo, extremo a extremo",
      subtitle:
        "Una sola plataforma que integra ciencia, laboratorio, bioinformática y producto. Así reducimos el tiempo de desarrollo y garantizamos trazabilidad entre la evidencia y el reporte.",
    },
    statement: "Desde la pregunta clínica hasta un producto listo para escalar.",
    steps: [
      { n: 1, title: "Definición del objetivo", body: "Precisamos el objetivo clínico o comercial y el público destino del producto." },
      { n: 2, title: "Revisión de evidencia", body: "Analizamos la literatura científica disponible y su nivel de respaldo." },
      { n: 3, title: "Selección de biomarcadores", body: "Escogemos SNPs o marcadores epigenéticos con criterios explícitos y documentados." },
      { n: 4, title: "Diseño del panel", body: "Definimos composición, cobertura y arquitectura analítica del panel." },
      { n: 5, title: "Desarrollo y validación", body: "Validamos el desempeño analítico antes de procesar muestras reales." },
      { n: 6, title: "Procesamiento de muestras", body: "Ejecutamos el panel con costos optimizados y control de calidad." },
      { n: 7, title: "Bioinformática", body: "Procesamos los datos con pipelines y algoritmos propios." },
      { n: 8, title: "Interpretación", body: "Traducimos los resultados a información accionable según la evidencia." },
      { n: 9, title: "Generación del reporte", body: "Producimos reportes personalizados y automatizados, listos para el usuario final." },
      { n: 10, title: "Integración clínica o comercial", body: "Entregamos el producto vía API o white label, listo para escalar." },
    ],
    // Agrupación de las 10 etapas en 4 fases (vista resumida del home).
    phases: [
      { fase: "Fase 1", name: "Definición", steps: [1, 2, 3] },
      { fase: "Fase 2", name: "Diseño y validación", steps: [4, 5] },
      { fase: "Fase 3", name: "Laboratorio y análisis", steps: [6, 7, 8] },
      { fase: "Fase 4", name: "Entrega e integración", steps: [9, 10] },
    ],
    benefits: {
      title: "Por qué una plataforma integrada",
      items: [
        { title: "Velocidad", body: "Un flujo único acorta el desarrollo de un panel a menos de tres meses." },
        { title: "Trazabilidad", body: "Cada resultado es rastreable hasta la evidencia y el biomarcador que lo sustenta." },
        { title: "Escalabilidad", body: "Arquitectura modular pensada para crecer en volumen y en catálogo de productos." },
        { title: "Consistencia", body: "Los mismos estándares aplican desde la muestra hasta el reporte final." },
      ],
    },
  },

  // -------------------------------------------------------------- GENÉTICA
  genetics: {
    hero: {
      eyebrow: "Genética",
      title: "Paneles genéticos de alta densidad, diseñados a medida",
      subtitle:
        "Diseñamos, desarrollamos y procesamos paneles de SNPs para múltiples aplicaciones clínicas y comerciales, con opción de desarrollo white label.",
    },
    highlights: [
      { value: "+140 SNPs", label: "por panel genético" },
      { value: "< 3 meses", label: "para desarrollar un panel nuevo" },
      { value: "hasta 4×", label: "más económico por muestra que el mercado" },
    ],
    applications: {
      title: "Aplicaciones",
      body: "Adaptamos cada panel a la necesidad clínica o comercial de tu organización.",
      items: [
        { title: "Farmacogenética", body: "Variantes asociadas a la respuesta y metabolización de fármacos." },
        { title: "Riesgo cardiometabólico", body: "Marcadores relacionados con perfiles metabólicos y cardiovasculares." },
        { title: "Nutrición personalizada", body: "Variantes asociadas a metabolismo, micronutrientes y hábitos alimentarios." },
        { title: "Predisposición genética", body: "Paneles orientados a predisposiciones según la evidencia disponible." },
        { title: "Salud preventiva", body: "Información genética como insumo para programas de prevención." },
        { title: "Salud materno-infantil", body: "Paneles orientados al ciclo materno-infantil, con prudencia científica." },
        { title: "Paneles personalizados", body: "Composición a medida del objetivo de cada cliente." },
        { title: "Desarrollo white label", body: "Productos genéticos listos para lanzarse bajo tu propia marca." },
      ],
    },
    method: {
      title: "Cómo trabajamos un panel genético",
      items: [
        "Definimos el objetivo y la población destino.",
        "Seleccionamos SNPs con criterios documentados y basados en evidencia.",
        "Validamos el desempeño analítico del panel.",
        "Procesamos muestras con control de calidad y costos optimizados.",
        "Interpretamos y generamos reportes personalizados.",
      ],
    },
    disclaimer:
      "La información genética es un insumo de apoyo y no reemplaza el criterio ni el diagnóstico de un profesional de la salud. Multiplex evita afirmaciones médicas absolutas.",
  },

  // ---------------------------------------------------------- EPIGENÉTICA
  epigenetics: {
    hero: {
      eyebrow: "Epigenética · Línea en desarrollo",
      title: "Epigenética: nuestra próxima línea de productos",
      subtitle:
        "Es la siguiente línea que estamos desarrollando. Contamos con la capacidad de plataforma instalada y una tesis científica sólida; los paneles epigenéticos aún no están disponibles comercialmente.",
    },
    highlights: [
      { value: "Tesis sólida", label: "base científica que respalda la línea" },
      { value: "Capacidad instalada", label: "la misma plataforma de genética" },
      { value: "En desarrollo", label: "próximamente disponible" },
    ],
    capabilities: {
      title: "Qué estamos desarrollando",
      items: [
        { title: "Paneles epigenéticos a medida", body: "Diseño de paneles según el objetivo del programa o producto." },
        { title: "Biomarcadores biológicos y ambientales", body: "Marcadores relacionados con cambios asociados al entorno y al estilo de vida." },
        { title: "Seguimiento longitudinal", body: "Evaluación en el tiempo para observar tendencias a nivel poblacional o individual." },
        { title: "Evaluación de intervenciones", body: "Medición antes y después de programas de nutrición, bienestar o salud metabólica." },
        { title: "Programas preventivos", body: "Insumos para iniciativas de prevención y bienestar corporativo." },
        { title: "Paneles personalizados", body: "Composición adaptada a cada cliente o línea de investigación." },
      ],
    },
    prudence: {
      title: "Prudencia científica",
      body: "La epigenética es un campo en evolución. Multiplex no afirma diagnosticar enfermedades ni medir con certeza absoluta la edad biológica. Cada panel se comunica según su nivel de validación y evidencia disponible, y se orienta a seguimiento e investigación aplicada más que a conclusiones definitivas.",
    },
  },

  // --------------------------------------------------------- SOLUCIONES
  solutions: {
    hero: {
      eyebrow: "Soluciones para empresas",
      title: "Tu socio de innovación en medicina personalizada",
      subtitle:
        "Multiplex desarrolla productos genéticos —y próximamente epigenéticos— para organizaciones de salud, listos para integrarse a su operación o lanzarse bajo su propia marca.",
    },
    segments: [
      {
        id: "clinicas",
        name: "Clínicas y redes de salud",
        body: "Desarrollo de paneles preventivos, farmacogenéticos y cardiometabólicos integrados con la atención médica.",
      },
      {
        id: "laboratorios",
        name: "Laboratorios",
        body: "Incorporación rápida de nuevas líneas de diagnóstico molecular y productos white label.",
      },
      {
        id: "aseguradoras",
        name: "Aseguradoras",
        body: "Programas preventivos y de medicina personalizada, con manejo responsable de datos sensibles.",
      },
      {
        id: "farmacias",
        name: "Farmacias",
        body: "Servicios genéticos de valor agregado para acompañar la dispensación y la adherencia.",
      },
      {
        id: "bienestar",
        name: "Empresas de bienestar",
        body: "Programas genéticos (y epigenéticos en desarrollo) para nutrición, salud metabólica y seguimiento.",
      },
      {
        id: "investigacion",
        name: "Investigación",
        body: "Paneles a medida y capacidad de procesamiento para estudios y cohortes.",
      },
      {
        id: "salud-digital",
        name: "Empresas de salud digital",
        body: "Integración vía API de resultados y reportes en plataformas y apps propias.",
      },
      {
        id: "nutricion-longevidad",
        name: "Marcas de nutrición o longevidad",
        body: "Productos genéticos white label —con epigenética en desarrollo— para diferenciar tu propuesta.",
      },
    ],
    closing: {
      title: "Diseñemos tu producto white label",
      body: "Cuéntanos tu objetivo y volumen estimado. Preparamos una propuesta técnica y comercial.",
      cta: { label: "Solicita una propuesta", href: "/contacto" },
    },
  },

  // ---------------------------------------------------------- PRODUCTOS
  products: {
    hero: {
      eyebrow: "Productos propios",
      title: "Productos que demuestran la plataforma",
      subtitle:
        "Mynu y Mynu Baby son ejemplos de cómo Multiplex transforma evidencia científica en productos terminados de medicina personalizada.",
    },
    mynu: {
      name: "Mynu",
      tagline: "Test de genética nutricional y medicina personalizada",
      valueProp: "Costo accesible, hasta 4× más económico que alternativas del mercado.",
      markers: "+150 SNPs",
      description:
        "Mynu analiza más de 150 SNPs relacionados con nutrición y metabolismo, integra la genética con información personal y entrega recomendaciones personalizadas.",
      points: [
        "Analiza más de 150 SNPs relacionados con nutrición y metabolismo.",
        "Integra la información genética con datos personales del usuario.",
        "Entrega recomendaciones personalizadas y accionables.",
        "Demuestra la capacidad de Multiplex de llevar la evidencia a un producto terminado.",
      ],
      cta: { label: "Conoce Mynu", href: "https://mynu.ai/" },
    },
    mynuBaby: {
      name: "Mynu Baby",
      tagline: "Test genético para la salud y el crecimiento del bebé",
      valueProp: "Producto desarrollado y disponible: analiza predisposiciones genéticas del bebé desde un hisopado bucal.",
      // Datos tomados del sitio público mynubaby.cl.
      description:
        "Mynu Baby analiza predisposiciones genéticas en las primeras etapas de vida para apoyar decisiones sobre la salud, la alimentación y el cuidado del bebé. La toma de muestra es por hisopado bucal, indolora y no invasiva.",
      editableFields: [
        { label: "Objetivo del test", value: "Detectar predisposiciones genéticas del bebé" },
        { label: "Edad de aplicación", value: "0 a 24 meses" },
        { label: "Tipo de muestra", value: "Hisopado bucal (no invasivo)" },
        { label: "Marcadores (SNPs)", value: "~100 analizados" },
        { label: "Predisposiciones", value: "+20 detectadas" },
        { label: "Resultados", value: "Informe digital + guías de sueño y alimentación" },
        { label: "Tiempo de entrega", value: "4 a 6 semanas" },
      ],
      categories: [
        "Alergias",
        "Integridad de la piel",
        "Intolerancias",
        "Composición corporal",
        "Condiciones digestivas",
        "Sueño",
        "Gustos y preferencias",
      ],
      note: "Conoce todos los detalles y el respaldo profesional en mynubaby.cl.",
      cta: { label: "Conoce Mynu Baby", href: "https://mynubaby.cl/" },
    },
  },

  // ---------------------------------------------------------- TECNOLOGÍA
  technology: {
    hero: {
      eyebrow: "Tecnología",
      title: "Infraestructura molecular, modular y escalable",
      subtitle:
        "Nuestra arquitectura integra laboratorio, bioinformática e interpretación en un sistema modular que se conecta con la operación de nuestros clientes.",
    },
    stack: {
      title: "Arquitectura de la plataforma",
      items: [
        { title: "Procesamiento de muestras", body: "Flujos de laboratorio con control de calidad y costos optimizados." },
        { title: "Desarrollo de paneles", body: "Metodología para diseñar y validar paneles genéticos y epigenéticos." },
        { title: "Bioinformática", body: "Pipelines de análisis y algoritmos propios para procesar datos moleculares." },
        { title: "Motor de interpretación", body: "Traducción de resultados a información accionable según la evidencia." },
        { title: "Generación de reportes", body: "Reportes personalizados y automatizados, listos para el usuario final." },
        { title: "Bases de evidencia", body: "Fuentes científicas que respaldan la selección de biomarcadores." },
        { title: "Integración vía API", body: "Conexión con plataformas, apps y sistemas clínicos de nuestros clientes." },
        { title: "Modularidad", body: "Componentes reutilizables que aceleran el desarrollo de nuevos productos." },
        { title: "Escalabilidad", body: "Preparada para crecer en volumen de muestras y catálogo de productos." },
      ],
    },
    security: {
      title: "Seguridad de datos por diseño",
      body: "Tratamos datos genéticos como información altamente sensible. Aplicamos separación de contextos entre pacientes, empresas y profesionales, y principios de minimización y confidencialidad.",
      note: "",
    },
  },

  // ---------------------------------------------------------- CIENCIA
  science: {
    hero: {
      eyebrow: "Ciencia y evidencia",
      title: "Decisiones basadas en evidencia, no en promesas",
      subtitle:
        "Cada panel se construye sobre criterios explícitos de selección de biomarcadores y validación analítica. La evidencia se actualiza de forma continua.",
    },
    method: {
      title: "Metodología",
      items: [
        { title: "Revisión de evidencia", body: "Análisis de la literatura y su nivel de respaldo antes de incluir un biomarcador." },
        { title: "Criterios de selección", body: "Reglas explícitas y documentadas para escoger SNPs y marcadores epigenéticos." },
        { title: "Validación analítica", body: "Verificación del desempeño del panel antes de su uso en muestras reales." },
        { title: "Actualización de evidencia", body: "Revisión periódica para mantener los paneles alineados con la ciencia vigente." },
      ],
    },
    team: {
      title: "Comité científico y equipo técnico",
      body: "Multiplex combina biología molecular, genética, epigenética y bioinformática. El detalle del comité científico y sus integrantes se publicará próximamente.",
      note: "",
    },
    publications: {
      title: "Publicaciones y referencias",
      body: "Este espacio está preparado para incorporar publicaciones, papers y documentos de respaldo a medida que estén disponibles.",
      empty: "Aún no hay publicaciones cargadas. EDITABLE — agregar referencias en src/content/es.ts.",
      // EDITABLE — agregar publicaciones aquí (title, source, year, url).
      items: [] as { title: string; source: string; year: string; url?: string }[],
    },
  },

  // ---------------------------------------------------------- NOSOTROS
  about: {
    hero: {
      eyebrow: "Nosotros",
      title: "Convertimos la ciencia en productos de medicina personalizada",
      subtitle:
        "Multiplex reúne biología molecular, genética, epigenética, bioinformática y desarrollo de producto en una sola plataforma tecnológica orientada a la innovación clínica.",
    },
    story: {
      title: "Nuestra historia",
      body: "Multiplex nace para cerrar la brecha entre la evidencia científica y los productos que llegan a las personas. Creemos que la medicina personalizada debe ser desarrollable, escalable y accesible para las organizaciones de salud de Latinoamérica.",
    },
    disciplines: {
      title: "Lo que combinamos",
      items: [
        "Biología molecular",
        "Genética",
        "Epigenética",
        "Bioinformática",
        "Desarrollo de producto",
        "Tecnología",
        "Medicina personalizada",
      ],
    },
    // Vacío = la sección se oculta. Al agregar items (Fundadores, Equipo,
    // Advisors, Hitos, Alianzas) la sección reaparece automáticamente.
    editableSections: [] as { title: string; body: string }[],
  },

  // ---------------------------------------------------------- CONTACTO
  contact: {
    hero: {
      eyebrow: "Contacto",
      title: "Conversemos sobre el próximo producto de medicina personalizada de tu organización",
      subtitle:
        "Cuéntanos qué quieres desarrollar y en qué plazo. Preparamos una propuesta técnica y comercial a la medida.",
    },
    form: {
      submit: "Enviar solicitud",
      success: "¡Gracias! Recibimos tu solicitud. Te contactaremos a la brevedad.",
      error: "Ocurrió un problema al enviar el formulario. Inténtalo nuevamente.",
      sending: "Enviando…",
      sendAnother: "Enviar otra solicitud",
      privacy:
        "Tus datos se tratan de forma confidencial y solo se utilizan para responder tu solicitud. Consulta nuestra política de privacidad.",
      fields: {
        nombre: "Nombre",
        empresa: "Empresa",
        cargo: "Cargo",
        correo: "Correo",
        pais: "País",
        tipoOrganizacion: "Tipo de organización",
        objetivo: "¿Qué quieres desarrollar?",
        volumen: "Volumen estimado de muestras",
        plazo: "Plazo esperado",
        mensaje: "Mensaje",
      },
      placeholders: {
        select: "Selecciona…",
        objetivo: "Ej: panel farmacogenético white label",
        volumen: "Ej: 5.000 / año",
        plazo: "Ej: Q4 2026",
      },
      validation: {
        nombre: "Ingresa tu nombre.",
        empresa: "Ingresa tu empresa u organización.",
        correoRequired: "Ingresa tu correo.",
        correoInvalid: "Ingresa un correo válido.",
        pais: "Indica tu país.",
        tipoOrganizacion: "Selecciona un tipo de organización.",
        objetivo: "Cuéntanos qué quieres desarrollar.",
      },
      aside: {
        title: "Hablemos de tu producto",
        body: "Completa el formulario y nuestro equipo te contactará para explorar cómo desarrollar tu panel genético o epigenético.",
        perks: [
          { title: "Respuesta ágil", body: "Revisamos cada solicitud y respondemos a la brevedad." },
          { title: "Confidencialidad", body: "Tratamos tu información de forma responsable y segura." },
          { title: "Propuesta a medida", body: "Diseñamos una propuesta técnica y comercial según tu objetivo." },
        ],
      },
    },
  },
};

export type SiteContent = typeof es;
