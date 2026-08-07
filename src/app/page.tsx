"use client";

import { useEffect } from "react";

/**
 * Raíz del sitio: redirige al idioma por defecto (español).
 * En export estático no existe redirect de servidor, así que se hace en el
 * cliente + enlaces de respaldo para no-JS y crawlers.
 */
export default function RootPage() {
  useEffect(() => {
    window.location.replace("/es/");
  }, []);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 p-8 text-center">
      <p className="text-sm text-muted">Redirigiendo… / Redirecting…</p>
      <p className="text-sm">
        <a href="/es/" className="font-medium text-brand-strong hover:underline">
          Español
        </a>{" "}
        ·{" "}
        <a href="/en/" className="font-medium text-brand-strong hover:underline">
          English
        </a>
      </p>
    </div>
  );
}
