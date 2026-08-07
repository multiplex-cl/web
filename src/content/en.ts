/**
 * Site content in ENGLISH.
 *
 * Mirrors the exact structure of `es.ts` so both locales share the same
 * component code. See `src/content/index.ts` for the locale resolver.
 */
import type { SiteContent } from "./es";

export const en: SiteContent = {
  // ---------------------------------------------------------------- HOME
  home: {
    hero: {
      eyebrow: "Personalized medicine · Genetics · Epigenetics",
      title: "We create the next generation of genetic and epigenetic products",
      titleLead: "We create the next generation of",
      titleAccent: "genetic and epigenetic products",
      subtitle:
        "Multiplex lets you design, develop and deploy custom panels in under three months — from scientific evidence to the final report.",
      primaryCta: { label: "Develop a panel with us", href: "/contacto" },
      secondaryCta: { label: "Explore our technology", href: "/tecnologia" },
      support:
        "We build, process and sequence the complete kit end to end, at a fraction of the market cost.",
      supportNote: "A cost per sample up to 4× lower than conventional alternatives.",
    },
    intro: {
      eyebrow: "The platform",
      title: "A factory for personalized-medicine products",
      body: "Multiplex turns scientific evidence into new genetic and epigenetic products with clinical and commercial applications. We are not just a lab: we are the technological infrastructure that lets health organizations design, validate and scale their own molecular products.",
      pillars: [
        {
          title: "We design",
          body: "Genetic and epigenetic panels tailored to each organization's clinical or commercial goal.",
        },
        {
          title: "We develop",
          body: "Biomarker selection, analytical validation and bioinformatics, in under three months.",
        },
        {
          title: "We deploy",
          body: "Interpretation, custom reports and white-label integration via API.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Genetics available today, epigenetics in development",
      body: "Our genetics line is already operational. Epigenetics is next, on the same development, processing and interpretation infrastructure.",
      cards: [
        {
          tag: "Genetics",
          badge: "Available",
          title: "High-density SNP panels",
          body: "Design and analysis of panels with 140+ SNPs for pharmacogenetics, cardiometabolic risk, nutrition and preventive health.",
          points: ["140+ SNPs per panel", "Cost per sample up to 4× lower than market", "White-label development"],
          href: "/genetica",
          cta: "Explore genetics",
        },
        {
          tag: "Epigenetics",
          badge: "In development",
          title: "Epigenetic panels and monitoring",
          body: "Our next line. Backed by a solid scientific thesis and our already-installed platform capacity; not yet commercially available.",
          points: ["Backed by a solid scientific thesis", "Leverages the installed platform capacity", "In development — coming soon"],
          href: "/epigenetica",
          cta: "See the line",
        },
      ],
    },
    process: {
      eyebrow: "Development process",
      title: "From the clinical question to a product ready to scale",
      body: "We control every stage of the molecular product's life cycle. This shortens development time and ensures consistency between the evidence and the final report.",
      cta: { label: "Explore the platform", href: "/plataforma" },
    },
    useCases: {
      eyebrow: "Use cases",
      title: "One design platform, many possible products",
      body: "More than a closed catalog, Multiplex is a design platform: we select biomarkers, define the panel architecture and build the interpretation for each goal. That lets us develop genetic panels for a range of clinical and commercial domains. These are some of the use cases it already enables.",
    },
    products: {
      eyebrow: "Own products",
      title: "Our products are proof of the platform",
      body: "Mynu and Mynu Baby show how Multiplex turns scientific evidence into finished products, from sample to report.",
      cta: { label: "Discover Mynu", href: "/productos" },
    },
    forBusiness: {
      eyebrow: "For companies",
      title: "Your next genetic product, under your own brand",
      body: "Clinics, laboratories, insurers, pharmacies and wellness companies use Multiplex as their engine for developing white-label molecular products.",
      cta: { label: "See solutions", href: "/soluciones" },
      chips: ["Clinics", "Laboratories", "Insurers", "Pharmacies", "Wellness", "Digital health"],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "The essentials about Multiplex",
    },
    closing: {
      title: "Let's talk about your organization's next personalized-medicine product",
      body: "Tell us what you want to develop. We design a tailored technical and commercial proposal.",
      primaryCta: { label: "Develop a panel with us", href: "/contacto" },
      secondaryCta: { label: "Request a proposal", href: "/contacto" },
    },
  },

  // ------------------------------------------------------------ PLATFORM
  platform: {
    hero: {
      eyebrow: "The platform",
      title: "We control the entire process, end to end",
      subtitle:
        "A single platform that integrates science, lab, bioinformatics and product. That's how we cut development time and guarantee traceability between evidence and report.",
    },
    statement: "From the clinical question to a product ready to scale.",
    steps: [
      { n: 1, title: "Goal definition", body: "We pin down the clinical or commercial goal and the product's target audience." },
      { n: 2, title: "Evidence review", body: "We analyze the available scientific literature and its level of support." },
      { n: 3, title: "Biomarker selection", body: "We pick SNPs or epigenetic markers using explicit, documented criteria." },
      { n: 4, title: "Panel design", body: "We define the panel's composition, coverage and analytical architecture." },
      { n: 5, title: "Development and validation", body: "We validate analytical performance before processing real samples." },
      { n: 6, title: "Sample processing", body: "We run the panel with optimized costs and quality control." },
      { n: 7, title: "Bioinformatics", body: "We process the data with our own pipelines and algorithms." },
      { n: 8, title: "Interpretation", body: "We translate results into actionable information based on the evidence." },
      { n: 9, title: "Report generation", body: "We produce custom, automated reports ready for the end user." },
      { n: 10, title: "Clinical or commercial integration", body: "We deliver the product via API or white label, ready to scale." },
    ],
    phases: [
      { fase: "Phase 1", name: "Definition", steps: [1, 2, 3] },
      { fase: "Phase 2", name: "Design and validation", steps: [4, 5] },
      { fase: "Phase 3", name: "Lab and analysis", steps: [6, 7, 8] },
      { fase: "Phase 4", name: "Delivery and integration", steps: [9, 10] },
    ],
    benefits: {
      title: "Why an integrated platform",
      items: [
        { title: "Speed", body: "A single flow shortens new-panel development to under three months." },
        { title: "Traceability", body: "Every result is traceable back to the evidence and the biomarker behind it." },
        { title: "Scalability", body: "Modular architecture built to grow in volume and product catalog." },
        { title: "Consistency", body: "The same standards apply from sample to final report." },
      ],
    },
  },

  // -------------------------------------------------------------- GENETICS
  genetics: {
    hero: {
      eyebrow: "Genetics",
      title: "High-density genetic panels, built to measure",
      subtitle:
        "We design, develop and process SNP panels for a range of clinical and commercial applications, with white-label development available.",
    },
    highlights: [
      { value: "140+ SNPs", label: "per genetic panel" },
      { value: "< 3 months", label: "to develop a new panel" },
      { value: "up to 4×", label: "lower cost per sample than the market" },
    ],
    applications: {
      title: "Applications",
      body: "We adapt each panel to your organization's clinical or commercial need.",
      items: [
        { title: "Pharmacogenetics", body: "Variants associated with drug response and metabolism." },
        { title: "Cardiometabolic risk", body: "Markers related to metabolic and cardiovascular profiles." },
        { title: "Personalized nutrition", body: "Variants linked to metabolism, micronutrients and dietary habits." },
        { title: "Genetic predisposition", body: "Panels focused on predispositions according to available evidence." },
        { title: "Preventive health", body: "Genetic information as input for prevention programs." },
        { title: "Maternal and child health", body: "Panels focused on the maternal-child cycle, with scientific prudence." },
        { title: "Custom panels", body: "Composition tailored to each client's goal." },
        { title: "White-label development", body: "Genetic products ready to launch under your own brand." },
      ],
    },
    method: {
      title: "How we build a genetic panel",
      items: [
        "We define the goal and the target population.",
        "We select SNPs with documented, evidence-based criteria.",
        "We validate the panel's analytical performance.",
        "We process samples with quality control and optimized costs.",
        "We interpret and generate custom reports.",
      ],
    },
    disclaimer:
      "Genetic information is a supporting input and does not replace the judgment or diagnosis of a health professional. Multiplex avoids absolute medical claims.",
  },

  // ---------------------------------------------------------- EPIGENETICS
  epigenetics: {
    hero: {
      eyebrow: "Epigenetics · Line in development",
      title: "Epigenetics: our next product line",
      subtitle:
        "This is the next line we're developing. We have the installed platform capacity and a solid scientific thesis; the epigenetic panels are not yet commercially available.",
    },
    highlights: [
      { value: "Solid thesis", label: "scientific basis backing the line" },
      { value: "Installed capacity", label: "the same genetics platform" },
      { value: "In development", label: "available soon" },
    ],
    capabilities: {
      title: "What we're developing",
      items: [
        { title: "Custom epigenetic panels", body: "Panel design according to the program's or product's goal." },
        { title: "Biological and environmental biomarkers", body: "Markers related to changes tied to environment and lifestyle." },
        { title: "Longitudinal monitoring", body: "Assessment over time to observe trends at the population or individual level." },
        { title: "Intervention assessment", body: "Measurement before and after nutrition, wellness or metabolic-health programs." },
        { title: "Preventive programs", body: "Input for prevention and corporate-wellness initiatives." },
        { title: "Custom panels", body: "Composition adapted to each client or research line." },
      ],
    },
    prudence: {
      title: "Scientific prudence",
      body: "Epigenetics is an evolving field. Multiplex does not claim to diagnose diseases or to measure biological age with absolute certainty. Each panel is communicated according to its level of validation and available evidence, and is oriented toward monitoring and applied research rather than definitive conclusions.",
    },
  },

  // --------------------------------------------------------- SOLUTIONS
  solutions: {
    hero: {
      eyebrow: "Solutions for companies",
      title: "Your innovation partner in personalized medicine",
      subtitle:
        "Multiplex develops genetic products —and soon epigenetic ones— for health organizations, ready to integrate into their operation or launch under their own brand.",
    },
    segments: [
      {
        id: "clinicas",
        name: "Clinics and health networks",
        body: "Development of preventive, pharmacogenetic and cardiometabolic panels integrated with medical care.",
      },
      {
        id: "laboratorios",
        name: "Laboratories",
        body: "Fast addition of new molecular-diagnostics lines and white-label products.",
      },
      {
        id: "aseguradoras",
        name: "Insurers",
        body: "Preventive and personalized-medicine programs, with responsible handling of sensitive data.",
      },
      {
        id: "farmacias",
        name: "Pharmacies",
        body: "Value-added genetic services to support dispensing and adherence.",
      },
      {
        id: "bienestar",
        name: "Wellness companies",
        body: "Genetic programs (and epigenetic ones in development) for nutrition, metabolic health and monitoring.",
      },
      {
        id: "investigacion",
        name: "Research",
        body: "Custom panels and processing capacity for studies and cohorts.",
      },
      {
        id: "salud-digital",
        name: "Digital health companies",
        body: "API integration of results and reports into your own platforms and apps.",
      },
      {
        id: "nutricion-longevidad",
        name: "Nutrition or longevity brands",
        body: "White-label genetic products —with epigenetics in development— to differentiate your offering.",
      },
    ],
    closing: {
      title: "Let's design your white-label product",
      body: "Tell us your goal and estimated volume. We'll prepare a technical and commercial proposal.",
      cta: { label: "Request a proposal", href: "/contacto" },
    },
  },

  // ---------------------------------------------------------- PRODUCTS
  products: {
    hero: {
      eyebrow: "Own products",
      title: "Products that prove the platform",
      subtitle:
        "Mynu and Mynu Baby are examples of how Multiplex turns scientific evidence into finished personalized-medicine products.",
    },
    mynu: {
      name: "Mynu",
      tagline: "Nutritional genetics and personalized-medicine test",
      valueProp: "Accessible pricing, up to 4× cheaper than market alternatives.",
      markers: "+150 SNPs",
      description:
        "Mynu analyzes more than 150 SNPs related to nutrition and metabolism, integrates genetics with personal information and delivers personalized recommendations.",
      points: [
        "Analyzes more than 150 SNPs related to nutrition and metabolism.",
        "Integrates genetic information with the user's personal data.",
        "Delivers personalized, actionable recommendations.",
        "Demonstrates Multiplex's ability to take evidence to a finished product.",
      ],
      cta: { label: "Discover Mynu", href: "https://mynu.ai/" },
    },
    mynuBaby: {
      name: "Mynu Baby",
      tagline: "Genetic test for the baby's health and growth",
      valueProp: "Developed and available: analyzes the baby's genetic predispositions from a buccal swab.",
      description:
        "Mynu Baby analyzes genetic predispositions in the earliest stages of life to support decisions about the baby's health, nutrition and care. The sample is taken via a painless, non-invasive buccal swab.",
      editableFields: [
        { label: "Test goal", value: "Detect the baby's genetic predispositions" },
        { label: "Age range", value: "0 to 24 months" },
        { label: "Sample type", value: "Buccal swab (non-invasive)" },
        { label: "Markers (SNPs)", value: "~100 analyzed" },
        { label: "Predispositions", value: "20+ detected" },
        { label: "Results", value: "Digital report + sleep and feeding guides" },
        { label: "Turnaround time", value: "4 to 6 weeks" },
      ],
      categories: [
        "Allergies",
        "Skin integrity",
        "Intolerances",
        "Body composition",
        "Digestive conditions",
        "Sleep",
        "Tastes and preferences",
      ],
      note: "Find all the details and professional backing at mynubaby.cl.",
      cta: { label: "Discover Mynu Baby", href: "https://mynubaby.cl/" },
    },
  },

  // ---------------------------------------------------------- TECHNOLOGY
  technology: {
    hero: {
      eyebrow: "Technology",
      title: "Molecular infrastructure — modular and scalable",
      subtitle:
        "Our architecture integrates lab, bioinformatics and interpretation in a modular system that connects to our clients' operations.",
    },
    stack: {
      title: "Platform architecture",
      items: [
        { title: "Sample processing", body: "Lab workflows with quality control and optimized costs." },
        { title: "Panel development", body: "Methodology to design and validate genetic and epigenetic panels." },
        { title: "Bioinformatics", body: "Analysis pipelines and proprietary algorithms to process molecular data." },
        { title: "Interpretation engine", body: "Translation of results into actionable information based on evidence." },
        { title: "Report generation", body: "Custom, automated reports ready for the end user." },
        { title: "Evidence bases", body: "Scientific sources that back biomarker selection." },
        { title: "API integration", body: "Connection with our clients' platforms, apps and clinical systems." },
        { title: "Modularity", body: "Reusable components that speed up developing new products." },
        { title: "Scalability", body: "Built to grow in sample volume and product catalog." },
      ],
    },
    security: {
      title: "Data security by design",
      body: "We treat genetic data as highly sensitive information. We apply separation of contexts between patients, companies and professionals, and principles of minimization and confidentiality.",
      note: "",
    },
  },

  // ---------------------------------------------------------- SCIENCE
  science: {
    hero: {
      eyebrow: "Science and evidence",
      title: "Decisions based on evidence, not on promises",
      subtitle:
        "Every panel is built on explicit biomarker-selection criteria and analytical validation. The evidence is updated continuously.",
    },
    method: {
      title: "Methodology",
      items: [
        { title: "Evidence review", body: "Analysis of the literature and its level of support before including a biomarker." },
        { title: "Selection criteria", body: "Explicit, documented rules for choosing SNPs and epigenetic markers." },
        { title: "Analytical validation", body: "Verification of panel performance before use on real samples." },
        { title: "Evidence updates", body: "Periodic review to keep panels aligned with current science." },
      ],
    },
    team: {
      title: "Scientific committee and technical team",
      body: "Multiplex combines molecular biology, genetics, epigenetics and bioinformatics. Details of the scientific committee and its members will be published soon.",
      note: "",
    },
    publications: {
      title: "Publications and references",
      body: "This space is ready to incorporate publications, papers and supporting documents as they become available.",
      empty: "No publications loaded yet.",
      items: [] as { title: string; source: string; year: string; url?: string }[],
    },
  },

  // ---------------------------------------------------------- ABOUT
  about: {
    hero: {
      eyebrow: "About us",
      title: "We turn science into personalized-medicine products",
      subtitle:
        "Multiplex brings together molecular biology, genetics, epigenetics, bioinformatics and product development in a single technology platform focused on clinical innovation.",
    },
    story: {
      title: "Our story",
      body: "Multiplex was born to close the gap between scientific evidence and the products that reach people. We believe personalized medicine should be developable, scalable and accessible for Latin America's health organizations.",
    },
    disciplines: {
      title: "What we combine",
      items: [
        "Molecular biology",
        "Genetics",
        "Epigenetics",
        "Bioinformatics",
        "Product development",
        "Technology",
        "Personalized medicine",
      ],
    },
    editableSections: [],
  },

  // ---------------------------------------------------------- CONTACT
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about your organization's next personalized-medicine product",
      subtitle:
        "Tell us what you want to develop and on what timeline. We'll prepare a tailored technical and commercial proposal.",
    },
    form: {
      submit: "Send request",
      success: "Thank you! We received your request. We'll be in touch shortly.",
      error: "Something went wrong submitting the form. Please try again.",
      sending: "Sending…",
      sendAnother: "Send another request",
      privacy:
        "Your data is treated confidentially and used only to respond to your request. See our privacy policy.",
      fields: {
        nombre: "Name",
        empresa: "Company",
        cargo: "Role",
        correo: "Email",
        pais: "Country",
        tipoOrganizacion: "Organization type",
        objetivo: "What do you want to develop?",
        volumen: "Estimated sample volume",
        plazo: "Expected timeline",
        mensaje: "Message",
      },
      placeholders: {
        select: "Select…",
        objetivo: "e.g. white-label pharmacogenetics panel",
        volumen: "e.g. 5,000 / year",
        plazo: "e.g. Q4 2026",
      },
      validation: {
        nombre: "Enter your name.",
        empresa: "Enter your company or organization.",
        correoRequired: "Enter your email.",
        correoInvalid: "Enter a valid email.",
        pais: "Enter your country.",
        tipoOrganizacion: "Select an organization type.",
        objetivo: "Tell us what you want to develop.",
      },
      aside: {
        title: "Let's talk about your product",
        body: "Fill out the form and our team will contact you to explore how to develop your genetic or epigenetic panel.",
        perks: [
          { title: "Fast response", body: "We review every request and reply promptly." },
          { title: "Confidentiality", body: "We handle your information responsibly and securely." },
          { title: "Tailored proposal", body: "We design a technical and commercial proposal for your goal." },
        ],
      },
    },
  },
};
