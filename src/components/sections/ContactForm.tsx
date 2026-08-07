"use client";

import { useState } from "react";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { getOrganizationTypes } from "@/content/data";
import { web3formsKey } from "@/content/site";
import { getContent, type Locale } from "@/content";
import { cn } from "@/lib/cn";

type FieldErrors = Record<string, string>;

const initial = {
  nombre: "",
  empresa: "",
  cargo: "",
  correo: "",
  pais: "",
  tipoOrganizacion: "",
  objetivo: "",
  volumen: "",
  plazo: "",
  mensaje: "",
};

type FormState = typeof initial;
type FormCopy = ReturnType<typeof getContent>["contact"]["form"];

function validate(values: FormState, v: FormCopy["validation"]): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.nombre.trim()) errors.nombre = v.nombre;
  if (!values.empresa.trim()) errors.empresa = v.empresa;
  if (!values.correo.trim()) {
    errors.correo = v.correoRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = v.correoInvalid;
  }
  if (!values.pais.trim()) errors.pais = v.pais;
  if (!values.tipoOrganizacion) errors.tipoOrganizacion = v.tipoOrganizacion;
  if (!values.objetivo.trim()) errors.objetivo = v.objetivo;
  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-ink shadow-sm transition placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/40";

export function ContactForm({ locale }: { locale: Locale }) {
  const c = getContent(locale).contact.form;
  const orgTypes = getOrganizationTypes(locale);
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [botcheck, setBotcheck] = useState(""); // honeypot anti-spam (Web3Forms)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values, c.validation);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Nuevo contacto — Multiplex (${values.empresa || values.nombre})`,
          from_name: "Sitio web Multiplex",
          // Web3Forms usa el campo `email` como reply-to.
          email: values.correo,
          Nombre: values.nombre,
          Empresa: values.empresa,
          Cargo: values.cargo,
          Correo: values.correo,
          País: values.pais,
          "Tipo de organización": values.tipoOrganizacion,
          "Qué quiere desarrollar": values.objetivo,
          "Volumen estimado de muestras": values.volumen,
          "Plazo esperado": values.plazo,
          Mensaje: values.mensaje,
          Idioma: locale,
          botcheck,
        }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !data.success) throw new Error("bad response");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-soft/60 p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <Icon.Check className="h-6 w-6" />
        </div>
        <p className="text-lg font-semibold text-ink">{c.success}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-brand-strong hover:underline"
        >
          {c.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam: oculto para usuarios, los bots lo llenan. */}
      <input
        type="text"
        name="botcheck"
        value={botcheck}
        onChange={(e) => setBotcheck(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label={c.fields.nombre} error={errors.nombre} required>
          <input
            id="field-nombre"
            type="text"
            autoComplete="name"
            className={cn(fieldBase, errors.nombre ? "border-red-400" : "border-line")}
            value={values.nombre}
            onChange={(e) => update("nombre", e.target.value)}
          />
        </Field>
        <Field id="empresa" label={c.fields.empresa} error={errors.empresa} required>
          <input
            id="field-empresa"
            type="text"
            autoComplete="organization"
            className={cn(fieldBase, errors.empresa ? "border-red-400" : "border-line")}
            value={values.empresa}
            onChange={(e) => update("empresa", e.target.value)}
          />
        </Field>
        <Field id="cargo" label={c.fields.cargo}>
          <input
            id="field-cargo"
            type="text"
            autoComplete="organization-title"
            className={cn(fieldBase, "border-line")}
            value={values.cargo}
            onChange={(e) => update("cargo", e.target.value)}
          />
        </Field>
        <Field id="correo" label={c.fields.correo} error={errors.correo} required>
          <input
            id="field-correo"
            type="email"
            autoComplete="email"
            className={cn(fieldBase, errors.correo ? "border-red-400" : "border-line")}
            value={values.correo}
            onChange={(e) => update("correo", e.target.value)}
          />
        </Field>
        <Field id="pais" label={c.fields.pais} error={errors.pais} required>
          <input
            id="field-pais"
            type="text"
            autoComplete="country-name"
            className={cn(fieldBase, errors.pais ? "border-red-400" : "border-line")}
            value={values.pais}
            onChange={(e) => update("pais", e.target.value)}
          />
        </Field>
        <Field id="tipoOrganizacion" label={c.fields.tipoOrganizacion} error={errors.tipoOrganizacion} required>
          <select
            id="field-tipoOrganizacion"
            className={cn(fieldBase, "appearance-none bg-[right_1rem_center] pr-10", errors.tipoOrganizacion ? "border-red-400" : "border-line")}
            value={values.tipoOrganizacion}
            onChange={(e) => update("tipoOrganizacion", e.target.value)}
          >
            <option value="">{c.placeholders.select}</option>
            {orgTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="objetivo" label={c.fields.objetivo} error={errors.objetivo} required>
        <input
          id="field-objetivo"
          type="text"
          placeholder={c.placeholders.objetivo}
          className={cn(fieldBase, errors.objetivo ? "border-red-400" : "border-line")}
          value={values.objetivo}
          onChange={(e) => update("objetivo", e.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="volumen" label={c.fields.volumen}>
          <input
            id="field-volumen"
            type="text"
            placeholder={c.placeholders.volumen}
            className={cn(fieldBase, "border-line")}
            value={values.volumen}
            onChange={(e) => update("volumen", e.target.value)}
          />
        </Field>
        <Field id="plazo" label={c.fields.plazo}>
          <input
            id="field-plazo"
            type="text"
            placeholder={c.placeholders.plazo}
            className={cn(fieldBase, "border-line")}
            value={values.plazo}
            onChange={(e) => update("plazo", e.target.value)}
          />
        </Field>
      </div>

      <Field id="mensaje" label={c.fields.mensaje}>
        <textarea
          id="field-mensaje"
          rows={4}
          className={cn(fieldBase, "resize-y border-line")}
          value={values.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {c.error}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-muted">{c.privacy}</p>
        <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
          {status === "sending" ? c.sending : c.submit}
          {status !== "sending" && <ArrowRight />}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-strong">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
