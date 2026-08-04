import Link from "next/link";

export function RepairSection() {
  return (
    <section id="reparacion" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-elevated via-surface to-bg-elevated px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-blue-deep/30 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-bright">
                Servicio técnico
              </p>
              <h2 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold text-text sm:text-4xl">
                Reparación con repuestos originales
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Pantallas, baterías, cámaras y más. Trabajamos con{" "}
                <span className="font-semibold text-blue-bright">@ctec_phone</span>{" "}
                para devolverle la vida a tu equipo Apple con calidad garantizada.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                  Diagnóstico rápido y transparente
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                  Repuestos originales
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                  Atención en Quito
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:items-start lg:items-end">
              <div className="w-full max-w-sm rounded-2xl border border-border bg-bg/60 p-6 backdrop-blur">
                <p className="text-sm text-muted">Agenda tu revisión</p>
                <p className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-bold text-text">
                  ¿Tu iPhone necesita ayuda?
                </p>
                <Link
                  href="https://wa.me/593999023369?text=Hola%20EcPhone%2C%20necesito%20reparaci%C3%B3n%20de%20mi%20equipo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-bright"
                >
                  Solicitar reparación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
