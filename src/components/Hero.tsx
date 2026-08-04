import Image from "next/image";
import Link from "next/link";
import { SECTION_BACKGROUNDS } from "@/data/products";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={SECTION_BACKGROUNDS.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="text-center lg:text-left">
          <Image
            src="/logo.png"
            alt="EcPhone"
            width={320}
            height={120}
            className="animate-fade-up mx-auto h-20 w-auto object-contain sm:h-28 lg:mx-0 lg:h-32"
            priority
          />

          <h1 className="animate-fade-up-delay mt-6 font-[family-name:var(--font-syne)] text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Tu iPhone nuevo,
            <span className="brand-gradient-text"> hoy en Quito</span>
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg lg:mx-0">
            Venta de equipos y accesorios Apple. Reparación con repuestos
            originales en{" "}
            <span className="font-semibold text-blue-bright">@ctec_phone</span>.
          </p>

          <div className="animate-fade-up-delay-2 mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 lg:mx-0">
            <Link
              href="/accesorios"
              className="rounded-xl bg-blue px-6 py-4 text-center text-base font-bold text-white shadow-[0_12px_40px_-12px_rgba(0,136,255,0.7)] transition hover:bg-blue-bright hover:scale-[1.02]"
            >
              Comprar
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/accesorios"
                className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-center text-sm font-semibold text-text transition hover:border-blue-bright/50 hover:bg-surface"
              >
                Ver catálogo
              </Link>
              <Link
                href="#iphones"
                className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-center text-sm font-semibold text-text transition hover:border-blue-bright/50 hover:bg-surface"
              >
                Ver iPhones
              </Link>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted">
            República del Salvador y NNUU · Quito, Ecuador
          </p>
        </div>
      </div>
    </section>
  );
}
