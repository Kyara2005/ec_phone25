import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { ProductGrid } from "@/components/ProductGrid";
import { RepairSection } from "@/components/RepairSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid
          id="iphones"
          category="iphone"
          title="iPhones disponibles"
          subtitle="Precios estimados desde. Agrega al carrito y compra por WhatsApp."
          showCatalogLink
          limit={6}
          animatedBackdrop
        />
        <ProductGrid
          id="accesorios-home"
          category="accesorio"
          title="Accesorios Apple"
          subtitle="AirPods, cases, carga y más. Revisa el catálogo completo."
          showCatalogLink
          limit={3}
        />
        <RepairSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
