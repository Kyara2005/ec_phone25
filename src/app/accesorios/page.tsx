import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { products, SECTION_BACKGROUNDS } from "@/data/products";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Catálogo EcPhone | iPhone, cases y AirPods",
  description:
    "Catálogo completo de iPhones, AirPods, cases y accesorios Apple en Quito. Agrega al carrito y compra por WhatsApp.",
};

export default function AccesoriosPage() {
  const iphones = products.filter((p) => p.category === "iphone");
  const cases = products.filter(
    (p) => p.category === "accesorio" && (p.tag === "Case" || p.id.includes("case") || p.id.includes("glass"))
  );
  const audio = products.filter(
    (p) => p.category === "accesorio" && (p.id.includes("airpods") || p.tag === "Audio" || p.tag === "Premium")
  );
  const otros = products.filter(
    (p) =>
      p.category === "accesorio" &&
      !cases.includes(p) &&
      !audio.includes(p)
  );

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden border-b border-border py-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{
                backgroundImage: `url(${withBasePath(SECTION_BACKGROUNDS.hero)})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/90 to-bg" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-bright">
              Catálogo EcPhone
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-syne)] text-4xl font-extrabold text-text sm:text-5xl">
              iPhones, cases y AirPods
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Precios estimados en USD. Agrega productos al carrito y al comprar
              te redirigimos a WhatsApp con tu pedido listo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#catalogo-iphones"
                className="rounded-xl bg-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-bright"
              >
                Ver iPhones
              </a>
              <a
                href="#catalogo-airpods"
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text hover:border-blue-bright/50"
              >
                AirPods
              </a>
              <a
                href="#catalogo-cases"
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text hover:border-blue-bright/50"
              >
                Cases
              </a>
              <Link
                href="/"
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted hover:text-text"
              >
                ← Inicio
              </Link>
            </div>
          </div>
        </section>

        <ProductGrid
          id="catalogo-iphones"
          title="iPhones"
          subtitle="17 Pro, 15 series y 14 Pro con precios desde. Capacidad y color se confirman por WhatsApp."
          items={iphones}
          backgroundImage={SECTION_BACKGROUNDS.iphone}
          animatedBackdrop
        />

        <ProductGrid
          id="catalogo-airpods"
          title="AirPods"
          subtitle="Audio Apple para acompañar tu iPhone."
          items={audio}
          backgroundImage={SECTION_BACKGROUNDS.accesorio}
        />

        <ProductGrid
          id="catalogo-cases"
          title="Cases y protectores"
          subtitle="Protección MagSafe, silicona, cuero y vidrio templado."
          items={cases}
          backgroundImage={SECTION_BACKGROUNDS.accesorio}
        />

        {otros.length > 0 && (
          <ProductGrid
            id="catalogo-otros"
            title="Más accesorios"
            subtitle="Carga, cables y wearables."
            items={otros}
            backgroundImage={SECTION_BACKGROUNDS.accesorio}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
