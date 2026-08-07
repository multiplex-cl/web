import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container className="text-center">
        <LogoMark className="mx-auto h-12 w-12 text-brand" />
        <p className="mt-6 font-display text-6xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Página no encontrada</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          La página que buscas no existe o fue movida. Vuelve al inicio o explora nuestra plataforma.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">
            Volver al inicio
            <ArrowRight />
          </Button>
          <Button href="/plataforma" variant="secondary">
            Ver la plataforma
          </Button>
        </div>
      </Container>
    </section>
  );
}
