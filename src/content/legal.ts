/**
 * Documentos legales de Multiplex (bilingüe).
 *
 * La versión en ESPAÑOL es la oficial (revisada y aprobada por el área legal).
 * La versión en INGLÉS es una traducción de referencia (cortesía) y no
 * reemplaza a la española, que prevalece ante cualquier discrepancia.
 */
import type { Locale } from "./index";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const UPDATED_ES = "23 de julio de 2026";
const UPDATED_EN = "July 23, 2026";

const es: Record<string, LegalDoc> = {
  privacidad: {
    slug: "privacidad",
    title: "Política de Privacidad",
    updated: UPDATED_ES,
    intro:
      "Esta Política describe cómo Multiplex trata los datos personales, incluidos los datos sensibles y genéticos, conforme a la Ley N° 19.628, la Ley N° 21.719 y la demás normativa chilena aplicable.",
    sections: [
      { heading: "1. Responsable del tratamiento", paragraphs: ["El responsable del tratamiento de los datos personales es Multiplex SpA, RUT 76.701.556-9, con domicilio en Avenida del Valle Norte 725, piso 3, Huechuraba, Santiago, Chile.", "Para el ejercicio de derechos o consultas sobre esta Política, puede contactar a nuestro encargado de protección de datos en contacto@multiplex.bio."] },
      { heading: "2. Marco legal aplicable", paragraphs: ["Tratamos los datos personales conforme al artículo 19 N°4 de la Constitución Política de la República, la Ley N° 19.628 sobre Protección de la Vida Privada, la Ley N° 21.719, la Ley N° 20.120 respecto de la información genética y, cuando corresponda, la Ley N° 20.584 y la Ley N° 19.496."] },
      { heading: "3. Datos que tratamos", paragraphs: ["Según el contexto de la relación, podemos tratar las siguientes categorías de datos:"], list: ["Datos de identificación y contacto (nombre, correo, teléfono, empresa y cargo).", "Datos de salud y datos genéticos, que la ley califica como datos sensibles.", "Datos derivados del análisis de muestras (resultados, reportes e interpretaciones).", "Datos de navegación y uso del sitio (por ejemplo, mediante cookies técnicas y analíticas)."] },
      { heading: "4. Finalidades del tratamiento", list: ["Responder solicitudes de contacto y elaborar propuestas técnicas y comerciales.", "Desarrollar, procesar e interpretar paneles genéticos y epigenéticos.", "Generar y entregar reportes personalizados a quien corresponda.", "Cumplir obligaciones legales, contractuales y de calidad.", "Mejorar nuestros servicios y, con base de licitud adecuada, realizar analítica agregada."] },
      { heading: "5. Base de licitud", paragraphs: ["El tratamiento se funda en el consentimiento libre, informado y específico del titular; en la ejecución de un contrato o medidas precontractuales; en el cumplimiento de obligaciones legales; y, cuando corresponda, en el interés legítimo, siempre que no prevalezcan los derechos del titular.", "El tratamiento de datos sensibles y genéticos requiere consentimiento expreso, salvo las excepciones que establece la ley."] },
      { heading: "6. Datos sensibles y datos genéticos", paragraphs: ["Los datos genéticos reciben protección reforzada. Su tratamiento se rige, además, por la Ley N° 20.120, que consagra su confidencialidad y prohíbe la discriminación fundada en el patrimonio genético.", "Aplicamos separación de contextos entre la información de pacientes, empresas y profesionales, y principios de minimización y confidencialidad. El detalle se encuentra en nuestra política de Protección de Datos Genéticos."] },
      { heading: "7. Uso de información anonimizada", paragraphs: ["Multiplex podrá utilizar la información de forma anonimizada —esto es, disociada de la identidad del titular de manera que no permita reidentificarlo— con fines de investigación, desarrollo y mejora de sus productos y servicios.", "Si el titular no desea que su información sea utilizada de esta forma, puede comunicarlo en cualquier momento a contacto@multiplex.bio y su solicitud será atendida."] },
      { heading: "8. Encargados y terceros", paragraphs: ["Podemos recurrir a encargados de tratamiento (por ejemplo, proveedores de laboratorio, alojamiento en la nube o CRM) que actúan bajo instrucciones documentadas y obligaciones de confidencialidad y seguridad.", "No vendemos datos personales."] },
      { heading: "9. Transferencias internacionales", paragraphs: ["Cuando una transferencia internacional sea necesaria, se realizará conforme a la ley, adoptando garantías adecuadas de protección."] },
      { heading: "10. Plazo de conservación", paragraphs: ["Conservamos los datos solo por el tiempo necesario para las finalidades descritas y para cumplir obligaciones legales. Vencidos dichos plazos, los datos se suprimen o anonimizan de forma segura."] },
      { heading: "11. Medidas de seguridad", paragraphs: ["Adoptamos medidas técnicas y organizativas orientadas a proteger los datos frente a acceso no autorizado, pérdida o alteración, incluyendo control de accesos, cifrado y seudonimización cuando corresponde."] },
      { heading: "12. Derechos del titular", paragraphs: ["El titular puede ejercer sus derechos de acceso, rectificación, cancelación o supresión, oposición, portabilidad y bloqueo, escribiendo a contacto@multiplex.bio, acreditando su identidad.", "Si estima que sus derechos no han sido debidamente atendidos, podrá reclamar ante la autoridad de control competente conforme a la Ley N° 21.719."] },
      { heading: "13. Cookies", paragraphs: ["Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, con su consentimiento, cookies analíticas. Puede gestionar sus preferencias desde su navegador."] },
      { heading: "14. Menores de edad", paragraphs: ["El tratamiento de datos de menores de edad se realiza con la autorización de su representante legal, conforme a la normativa aplicable."] },
      { heading: "15. Cambios a esta Política", paragraphs: ["Podremos actualizar esta Política. La versión vigente será siempre la publicada en este sitio, indicando su fecha de última actualización."] },
    ],
  },
  terminos: {
    slug: "terminos",
    title: "Términos y Condiciones",
    updated: UPDATED_ES,
    intro: "Estos Términos regulan el acceso y uso del sitio web y de los servicios de Multiplex. Al utilizarlos, usted declara conocerlos y aceptarlos.",
    sections: [
      { heading: "1. Identificación del prestador", paragraphs: ["El sitio y los servicios son provistos por Multiplex SpA, RUT 76.701.556-9, domicilio en Avenida del Valle Norte 725, piso 3, Huechuraba, Santiago, Chile, correo de contacto contacto@multiplex.bio."] },
      { heading: "2. Objeto y aceptación", paragraphs: ["Multiplex es una plataforma de desarrollo de productos genéticos y epigenéticos. Estos Términos rigen el uso del sitio y la relación con quienes contratan o utilizan sus servicios.", "El uso del sitio implica la aceptación de estos Términos. Si no está de acuerdo, debe abstenerse de utilizarlo."] },
      { heading: "3. Naturaleza de la información", paragraphs: ["La información publicada tiene carácter informativo y no constituye consejo médico. Los resultados de análisis genéticos o epigenéticos son un insumo de apoyo y no reemplazan la evaluación, el diagnóstico ni el tratamiento de un profesional de la salud habilitado.", "Los valores de costo por muestra que se mencionan corresponden a costos directos de procesamiento estimados y no a precios comerciales finales."] },
      { heading: "4. Obligaciones del usuario", list: ["Proporcionar información veraz y mantenerla actualizada.", "Usar el sitio y los servicios conforme a la ley, la buena fe y estos Términos.", "No realizar acciones que afecten la seguridad o disponibilidad del sitio."] },
      { heading: "5. Propiedad intelectual", paragraphs: ["Los contenidos, marcas, software, metodologías y materiales del sitio son de propiedad de Multiplex o de sus licenciantes y están protegidos por la legislación aplicable. No se concede licencia alguna salvo autorización expresa y por escrito."] },
      { heading: "6. Servicios, precios y pagos", paragraphs: ["Las condiciones específicas de cada servicio o producto (incluidos alcance, precios y forma de pago) se acordarán por escrito o se informarán en el punto de venta correspondiente."] },
      { heading: "7. Derechos del consumidor", paragraphs: ["Cuando el usuario tenga la calidad de consumidor, se aplicará la Ley N° 19.496, incluyendo, cuando corresponda, el derecho de retracto y los mecanismos de protección ante el SERNAC."] },
      { heading: "8. Responsabilidad", paragraphs: ["Multiplex adopta medidas razonables para mantener el sitio operativo y seguro, pero no garantiza disponibilidad ininterrumpida. En la máxima medida permitida por la ley, no responde por daños derivados del uso indebido de la información. Nada en estos Términos limita responsabilidades que la ley declare indisponibles."] },
      { heading: "9. Protección de datos", paragraphs: ["El tratamiento de datos personales se rige por nuestra Política de Privacidad y, tratándose de información genética, por la política de Protección de Datos Genéticos."] },
      { heading: "10. Modificaciones", paragraphs: ["Multiplex podrá modificar estos Términos. La versión vigente será la publicada en el sitio, con su fecha de actualización."] },
      { heading: "11. Legislación aplicable y jurisdicción", paragraphs: ["Estos Términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a los tribunales ordinarios de justicia con asiento en la ciudad de Santiago, sin perjuicio de los derechos irrenunciables del consumidor."] },
    ],
  },
  consentimiento: {
    slug: "consentimiento",
    title: "Consentimiento Informado",
    updated: UPDATED_ES,
    intro: "Este documento informa el alcance del análisis genético o epigenético y recoge el consentimiento libre, informado y específico del titular, conforme a la Ley N° 20.120 y la Ley N° 20.584.",
    sections: [
      { heading: "1. Objeto del consentimiento", paragraphs: ["Autorizo a Multiplex a obtener, procesar y analizar mi muestra biológica con el fin de realizar el estudio genético o epigenético descrito y a elaborar el reporte correspondiente."] },
      { heading: "2. Naturaleza y alcance del análisis", paragraphs: ["Comprendo que el análisis evalúa variantes o marcadores según la evidencia científica disponible, y que sus resultados indican predisposiciones o tendencias, no certezas ni diagnósticos.", "Comprendo que la interpretación puede actualizarse conforme avance el conocimiento científico."] },
      { heading: "3. Carácter voluntario y derecho a revocar", paragraphs: ["Mi participación es voluntaria. Puedo revocar este consentimiento en cualquier momento, sin expresión de causa, comunicándolo a contacto@multiplex.bio. La revocación no afecta la licitud del tratamiento realizado antes de ella."] },
      { heading: "4. Muestra biológica", paragraphs: ["Autorizo el uso de mi muestra exclusivamente para las finalidades aquí descritas. La muestra será conservada o eliminada conforme a los protocolos de Multiplex y a la normativa aplicable."] },
      { heading: "5. Confidencialidad de la información genética", paragraphs: ["Comprendo que mi información genética es confidencial conforme al artículo 12 de la Ley N° 20.120 y que su tratamiento se sujeta a medidas de seguridad y a la Política de Protección de Datos Genéticos de Multiplex."] },
      { heading: "6. No discriminación", paragraphs: ["Comprendo que la ley prohíbe cualquier discriminación arbitraria fundada en mi información o patrimonio genético."] },
      { heading: "7. Limitaciones de los resultados", paragraphs: ["Comprendo que los resultados son un insumo de apoyo y no reemplazan la consulta ni el criterio de un profesional de la salud, y que Multiplex no realiza afirmaciones médicas absolutas."] },
      { heading: "8. Uso en investigación (opcional)", paragraphs: ["El uso de mis datos o muestra en investigación científica requiere un consentimiento adicional y específico, que otorgo o rechazo de forma separada."] },
      { heading: "9. Titulares menores de edad", paragraphs: ["Tratándose de un menor de edad, el consentimiento es otorgado por su representante legal, quien declara actuar en su interés superior."] },
      { heading: "10. Declaración", paragraphs: ["Declaro haber sido informado(a) en lenguaje comprensible, haber podido realizar consultas y haber recibido respuestas satisfactorias, y otorgo mi consentimiento en forma libre e informada."] },
    ],
  },
  datos: {
    slug: "datos",
    title: "Protección de Datos Genéticos",
    updated: UPDATED_ES,
    intro: "Esta política detalla cómo Multiplex protege los datos genéticos, considerados datos sensibles bajo la Ley N° 21.719 y sujetos a la Ley N° 20.120.",
    sections: [
      { heading: "1. Los datos genéticos como datos sensibles", paragraphs: ["Los datos genéticos son datos personales sensibles y reciben protección reforzada. Su tratamiento exige consentimiento expreso del titular, salvo las excepciones legales."] },
      { heading: "2. Principios", list: ["Finalidad: se tratan solo para fines explícitos, legítimos y previamente informados.", "Proporcionalidad y minimización: se limitan a los datos necesarios.", "Calidad: se procura su exactitud y actualización.", "Seguridad y confidencialidad: se protegen con medidas técnicas y organizativas.", "Responsabilidad: mantenemos trazabilidad del tratamiento."] },
      { heading: "3. Consentimiento reforzado", paragraphs: ["El tratamiento de datos genéticos se sustenta en el consentimiento expreso, libre, informado y específico del titular, documentado mediante el Consentimiento Informado correspondiente."] },
      { heading: "4. Separación de contextos", paragraphs: ["Aplicamos separación entre la información de pacientes, empresas y profesionales, controlando el acceso según el rol y la necesidad de conocer."] },
      { heading: "5. Medidas técnicas y organizativas", list: ["Control de accesos basado en roles y necesidad de conocer.", "Cifrado y seudonimización cuando corresponde.", "Registros de actividad y trazabilidad.", "Acuerdos de confidencialidad con el personal y con encargados."] },
      { heading: "6. Encargados y transferencias", paragraphs: ["Los encargados que traten datos genéticos lo harán bajo instrucciones documentadas y obligaciones de seguridad. Las transferencias, incluidas las internacionales, se realizarán con garantías adecuadas conforme a la ley."] },
      { heading: "7. Conservación y supresión", paragraphs: ["Los datos genéticos se conservan solo por el tiempo necesario para las finalidades informadas y las obligaciones legales, y luego se suprimen o anonimizan de forma segura."] },
      { heading: "8. No discriminación", paragraphs: ["Conforme a la Ley N° 20.120, se prohíbe toda discriminación arbitraria basada en el patrimonio genético de las personas."] },
      { heading: "9. Derechos y ejercicio", paragraphs: ["El titular puede ejercer sus derechos de acceso, rectificación, cancelación o supresión, oposición, portabilidad y bloqueo, escribiendo a contacto@multiplex.bio."] },
      { heading: "10. Incidentes de seguridad", paragraphs: ["Ante una vulneración que afecte datos genéticos, adoptaremos medidas de contención y efectuaremos las comunicaciones que la ley exija a la autoridad y, cuando corresponda, a los titulares."] },
    ],
  },
};

const en: Record<string, LegalDoc> = {
  privacidad: {
    slug: "privacidad",
    title: "Privacy Policy",
    updated: UPDATED_EN,
    intro:
      "This Policy describes how Multiplex processes personal data, including sensitive and genetic data, in accordance with Law No. 19,628, Law No. 21,719 and other applicable Chilean regulations.",
    sections: [
      { heading: "1. Data controller", paragraphs: ["The controller of personal data is Multiplex SpA, Tax ID (RUT) 76.701.556-9, domiciled at Avenida del Valle Norte 725, floor 3, Huechuraba, Santiago, Chile.", "To exercise your rights or for questions about this Policy, you can contact our data protection officer at contacto@multiplex.bio."] },
      { heading: "2. Applicable legal framework", paragraphs: ["We process personal data in accordance with Article 19 No. 4 of the Constitution, Law No. 19,628 on the Protection of Private Life, Law No. 21,719, Law No. 20,120 regarding genetic information and, where applicable, Law No. 20,584 and Law No. 19,496."] },
      { heading: "3. Data we process", paragraphs: ["Depending on the context of the relationship, we may process the following categories of data:"], list: ["Identification and contact data (name, email, phone, company and role).", "Health data and genetic data, which the law classifies as sensitive data.", "Data derived from sample analysis (results, reports and interpretations).", "Browsing and site-usage data (for example, via technical and analytics cookies)."] },
      { heading: "4. Purposes of processing", list: ["Respond to contact requests and prepare technical and commercial proposals.", "Develop, process and interpret genetic and epigenetic panels.", "Generate and deliver custom reports to the relevant party.", "Comply with legal, contractual and quality obligations.", "Improve our services and, with an appropriate legal basis, perform aggregate analytics."] },
      { heading: "5. Legal basis", paragraphs: ["Processing is based on the free, informed and specific consent of the data subject; on the performance of a contract or pre-contractual measures; on compliance with legal obligations; and, where applicable, on legitimate interest, provided the data subject's rights do not prevail.", "Processing of sensitive and genetic data requires express consent, except for the exceptions established by law."] },
      { heading: "6. Sensitive data and genetic data", paragraphs: ["Genetic data receives reinforced protection. Its processing is also governed by Law No. 20,120, which enshrines its confidentiality and prohibits discrimination based on genetic heritage.", "We apply separation of contexts between information of patients, companies and professionals, and principles of minimization and confidentiality. Details are in our Genetic Data Protection policy."] },
      { heading: "7. Use of anonymized information", paragraphs: ["Multiplex may use information in an anonymized form —that is, dissociated from the data subject's identity so that re-identification is not possible— for research, development and improvement of its products and services.", "If the data subject does not wish their information to be used in this way, they may communicate this at any time to contacto@multiplex.bio and their request will be addressed."] },
      { heading: "8. Processors and third parties", paragraphs: ["We may rely on data processors (for example, laboratory providers, cloud hosting or CRM) that act under documented instructions and confidentiality and security obligations.", "We do not sell personal data."] },
      { heading: "9. International transfers", paragraphs: ["When an international transfer is necessary, it will be carried out in accordance with the law, adopting adequate protection safeguards."] },
      { heading: "10. Retention period", paragraphs: ["We keep data only for as long as necessary for the described purposes and to comply with legal obligations. Once those periods expire, data is securely deleted or anonymized."] },
      { heading: "11. Security measures", paragraphs: ["We adopt technical and organizational measures to protect data against unauthorized access, loss or alteration, including access control, encryption and pseudonymization where appropriate."] },
      { heading: "12. Data subject rights", paragraphs: ["The data subject may exercise their rights of access, rectification, cancellation or erasure, objection, portability and blocking by writing to contacto@multiplex.bio, proving their identity.", "If you believe your rights have not been duly addressed, you may file a complaint with the competent supervisory authority under Law No. 21,719."] },
      { heading: "13. Cookies", paragraphs: ["We use technical cookies necessary for the site to function and, with your consent, analytics cookies. You can manage your preferences from your browser."] },
      { heading: "14. Minors", paragraphs: ["Processing of minors' data is carried out with the authorization of their legal representative, in accordance with applicable regulations."] },
      { heading: "15. Changes to this Policy", paragraphs: ["We may update this Policy. The current version will always be the one published on this site, indicating its last-updated date."] },
    ],
  },
  terminos: {
    slug: "terminos",
    title: "Terms and Conditions",
    updated: UPDATED_EN,
    intro: "These Terms govern access to and use of the Multiplex website and services. By using them, you declare that you know and accept them.",
    sections: [
      { heading: "1. Provider identification", paragraphs: ["The site and services are provided by Multiplex SpA, Tax ID (RUT) 76.701.556-9, domiciled at Avenida del Valle Norte 725, floor 3, Huechuraba, Santiago, Chile, contact email contacto@multiplex.bio."] },
      { heading: "2. Purpose and acceptance", paragraphs: ["Multiplex is a platform for developing genetic and epigenetic products. These Terms govern the use of the site and the relationship with those who contract or use its services.", "Use of the site implies acceptance of these Terms. If you do not agree, you must refrain from using it."] },
      { heading: "3. Nature of the information", paragraphs: ["The published information is informational and does not constitute medical advice. Results of genetic or epigenetic analyses are a supporting input and do not replace the evaluation, diagnosis or treatment by a licensed health professional.", "The per-sample cost values mentioned correspond to estimated direct processing costs, not final commercial prices."] },
      { heading: "4. User obligations", list: ["Provide truthful information and keep it up to date.", "Use the site and services in accordance with the law, good faith and these Terms.", "Not carry out actions that affect the security or availability of the site."] },
      { heading: "5. Intellectual property", paragraphs: ["The content, trademarks, software, methodologies and materials of the site are the property of Multiplex or its licensors and are protected by applicable law. No license is granted except with express written authorization."] },
      { heading: "6. Services, prices and payments", paragraphs: ["The specific conditions of each service or product (including scope, prices and payment method) will be agreed in writing or reported at the corresponding point of sale."] },
      { heading: "7. Consumer rights", paragraphs: ["When the user is a consumer, Law No. 19,496 will apply, including, where appropriate, the right of withdrawal and the protection mechanisms before SERNAC (the Chilean consumer authority)."] },
      { heading: "8. Liability", paragraphs: ["Multiplex adopts reasonable measures to keep the site operational and secure, but does not guarantee uninterrupted availability. To the maximum extent permitted by law, it is not liable for damages arising from improper use of the information. Nothing in these Terms limits liabilities that the law declares non-waivable."] },
      { heading: "9. Data protection", paragraphs: ["The processing of personal data is governed by our Privacy Policy and, for genetic information, by the Genetic Data Protection policy."] },
      { heading: "10. Modifications", paragraphs: ["Multiplex may modify these Terms. The current version will be the one published on the site, with its update date."] },
      { heading: "11. Governing law and jurisdiction", paragraphs: ["These Terms are governed by the laws of the Republic of Chile. Any dispute will be submitted to the ordinary courts of justice seated in the city of Santiago, without prejudice to the consumer's non-waivable rights."] },
    ],
  },
  consentimiento: {
    slug: "consentimiento",
    title: "Informed Consent",
    updated: UPDATED_EN,
    intro: "This document informs the scope of the genetic or epigenetic analysis and records the free, informed and specific consent of the data subject, in accordance with Law No. 20,120 and Law No. 20,584.",
    sections: [
      { heading: "1. Purpose of consent", paragraphs: ["I authorize Multiplex to obtain, process and analyze my biological sample in order to carry out the genetic or epigenetic study described and to prepare the corresponding report."] },
      { heading: "2. Nature and scope of the analysis", paragraphs: ["I understand that the analysis evaluates variants or markers according to available scientific evidence, and that its results indicate predispositions or tendencies, not certainties or diagnoses.", "I understand that the interpretation may be updated as scientific knowledge advances."] },
      { heading: "3. Voluntary nature and right to revoke", paragraphs: ["My participation is voluntary. I may revoke this consent at any time, without stating a reason, by notifying contacto@multiplex.bio. Revocation does not affect the lawfulness of processing carried out before it."] },
      { heading: "4. Biological sample", paragraphs: ["I authorize the use of my sample exclusively for the purposes described here. The sample will be kept or destroyed in accordance with Multiplex's protocols and applicable regulations."] },
      { heading: "5. Confidentiality of genetic information", paragraphs: ["I understand that my genetic information is confidential under Article 12 of Law No. 20,120 and that its processing is subject to security measures and to Multiplex's Genetic Data Protection Policy."] },
      { heading: "6. Non-discrimination", paragraphs: ["I understand that the law prohibits any arbitrary discrimination based on my genetic information or heritage."] },
      { heading: "7. Limitations of results", paragraphs: ["I understand that the results are a supporting input and do not replace the consultation or judgment of a health professional, and that Multiplex does not make absolute medical claims."] },
      { heading: "8. Use in research (optional)", paragraphs: ["The use of my data or sample in scientific research requires additional and specific consent, which I grant or refuse separately."] },
      { heading: "9. Minor data subjects", paragraphs: ["In the case of a minor, consent is granted by their legal representative, who declares to act in the minor's best interest."] },
      { heading: "10. Declaration", paragraphs: ["I declare that I have been informed in understandable language, that I was able to ask questions and received satisfactory answers, and I give my consent freely and informedly."] },
    ],
  },
  datos: {
    slug: "datos",
    title: "Genetic Data Protection",
    updated: UPDATED_EN,
    intro: "This policy details how Multiplex protects genetic data, considered sensitive data under Law No. 21,719 and subject to Law No. 20,120.",
    sections: [
      { heading: "1. Genetic data as sensitive data", paragraphs: ["Genetic data is sensitive personal data and receives reinforced protection. Its processing requires the express consent of the data subject, except for legal exceptions."] },
      { heading: "2. Principles", list: ["Purpose: processed only for explicit, legitimate and previously informed purposes.", "Proportionality and minimization: limited to the necessary data.", "Quality: we seek its accuracy and updating.", "Security and confidentiality: protected with technical and organizational measures.", "Accountability: we maintain traceability of processing."] },
      { heading: "3. Reinforced consent", paragraphs: ["The processing of genetic data is based on the express, free, informed and specific consent of the data subject, documented through the corresponding Informed Consent."] },
      { heading: "4. Separation of contexts", paragraphs: ["We apply separation between information of patients, companies and professionals, controlling access according to role and need to know."] },
      { heading: "5. Technical and organizational measures", list: ["Role-based access control on a need-to-know basis.", "Encryption and pseudonymization where appropriate.", "Activity logs and traceability.", "Confidentiality agreements with staff and processors."] },
      { heading: "6. Processors and transfers", paragraphs: ["Processors handling genetic data will do so under documented instructions and security obligations. Transfers, including international ones, will be carried out with adequate safeguards in accordance with the law."] },
      { heading: "7. Retention and deletion", paragraphs: ["Genetic data is kept only for as long as necessary for the informed purposes and legal obligations, and is then securely deleted or anonymized."] },
      { heading: "8. Non-discrimination", paragraphs: ["In accordance with Law No. 20,120, any arbitrary discrimination based on people's genetic heritage is prohibited."] },
      { heading: "9. Rights and how to exercise them", paragraphs: ["The data subject may exercise their rights of access, rectification, cancellation or erasure, objection, portability and blocking by writing to contacto@multiplex.bio."] },
      { heading: "10. Security incidents", paragraphs: ["In the event of a breach affecting genetic data, we will adopt containment measures and make the communications required by law to the authority and, where appropriate, to the data subjects."] },
    ],
  },
};

const dict: Record<Locale, Record<string, LegalDoc>> = { es, en };

export const legalSlugs = Object.keys(es);

export function getLegalDocs(locale: Locale): Record<string, LegalDoc> {
  return dict[locale] ?? es;
}
