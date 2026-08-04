import Image from "next/image";
import Link from "next/link";
import {
  products,
  SECTION_BACKGROUNDS,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { FloatingPhonesBackdrop } from "./FloatingPhonesBackdrop";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  category?: ProductCategory;
  id: string;
  title: string;
  subtitle: string;
  items?: Product[];
  backgroundImage?: string;
  showCatalogLink?: boolean;
  limit?: number;
  animatedBackdrop?: boolean;
};

export function ProductGrid({
  category,
  id,
  title,
  subtitle,
  items,
  backgroundImage,
  showCatalogLink = false,
  limit,
  animatedBackdrop = false,
}: ProductGridProps) {
  let list =
    items ??
    (category ? products.filter((p) => p.category === category) : products);

  if (typeof limit === "number") {
    list = list.slice(0, limit);
  }

  const bg =
    backgroundImage ??
    (category ? SECTION_BACKGROUNDS[category] : undefined);

  return (
    <section id={id} className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20">
      {bg && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={bg}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,136,255,0.18),transparent_55%)]" />
        </div>
      )}

      {animatedBackdrop && <FloatingPhonesBackdrop />}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-muted">{subtitle}</p>
          </div>
          {showCatalogLink && (
            <Link
              href="/accesorios"
              className="shrink-0 rounded-xl border border-border bg-surface/60 px-4 py-2.5 text-sm font-semibold text-text backdrop-blur transition hover:border-blue-bright/50"
            >
              Ver catálogo completo →
            </Link>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
