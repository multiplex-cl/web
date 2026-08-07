import { NextResponse } from "next/server";

/**
 * Endpoint de contacto (simulado).
 *
 * Hoy valida el payload y responde OK sin persistir datos. Está preparado
 * para conectarse a un CRM (HubSpot, Salesforce) o a un servicio de correo:
 * reemplaza la sección marcada con `TODO: integración CRM`.
 *
 * No registra datos personales en logs por defecto (privacidad).
 */

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  cargo?: string;
  correo?: string;
  pais?: string;
  tipoOrganizacion?: string;
  objetivo?: string;
  volumen?: string;
  plazo?: string;
  mensaje?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  // Validación server-side (defensa en profundidad además del cliente).
  const missing: string[] = [];
  if (!data.nombre?.trim()) missing.push("nombre");
  if (!data.empresa?.trim()) missing.push("empresa");
  if (!data.correo?.trim() || !emailRe.test(data.correo)) missing.push("correo");
  if (!data.pais?.trim()) missing.push("pais");
  if (!data.tipoOrganizacion?.trim()) missing.push("tipoOrganizacion");
  if (!data.objetivo?.trim()) missing.push("objetivo");

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Campos requeridos incompletos.", fields: missing },
      { status: 422 },
    );
  }

  // TODO: integración CRM — enviar `data` a HubSpot / Salesforce / correo.
  // Ejemplo (pseudo):
  //   await fetch(process.env.CRM_WEBHOOK_URL!, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.CRM_TOKEN}` },
  //     body: JSON.stringify(mapToCrm(data)),
  //   });

  return NextResponse.json({ ok: true, message: "Solicitud recibida." }, { status: 200 });
}

export function GET() {
  return NextResponse.json({ ok: true, service: "contact", status: "ready" });
}
