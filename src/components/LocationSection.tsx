import Link from "next/link";

export function LocationSection() {
  return (
    <section id="ubicacion" className="section-mesh scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold text-text sm:text-4xl">
              Visítanos en Quito
            </h2>
            <p className="mt-4 text-lg text-muted">
              República del Salvador y NNUU · Quito, Ecuador
            </p>
            <p className="mt-3 max-w-md text-sm text-muted">
              Equipos Apple, accesorios y asesoría personalizada. Escríbenos
              antes de venir para confirmar stock.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://maps.app.goo.gl/D5HYF9XEmfpgWxR96"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-bright"
              >
                Abrir en Maps
              </Link>
              <Link
                href="/tree"
                className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-blue-bright/50"
              >
                Ver todas las redes
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-[0_20px_60px_-30px_rgba(0,136,255,0.4)]">
            <iframe
              title="Ubicación EcPhone en Google Maps"
              src="https://www.google.com/maps?q=Rep%C3%BAblica%20del%20Salvador%20y%20NNUU%2C%20Quito&output=embed"
              className="h-72 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
