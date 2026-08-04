"use client";

import Image from "next/image";
import {
  formatProductPrice,
  getProductSpecs,
  productLabel,
} from "@/data/products";
import { useCart } from "./CartProvider";
import { useProductModal } from "./ProductModalProvider";

export function ProductDetailModal() {
  const { product, closeProduct } = useProductModal();
  const { addItem } = useCart();

  if (!product) return null;

  const specs = getProductSpecs(product);

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Cerrar especificaciones"
        onClick={closeProduct}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-bg-elevated shadow-2xl sm:rounded-3xl"
      >
        <div className="grid gap-0 overflow-y-auto sm:grid-cols-2">
          <div className="relative aspect-[4/5] bg-surface sm:aspect-auto sm:min-h-[420px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {product.tag && (
              <span className="absolute left-4 top-4 rounded-lg bg-blue px-2.5 py-1 text-xs font-semibold text-white">
                {product.tag}
              </span>
            )}
          </div>

          <div className="flex flex-col p-5 sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2
                  id="product-modal-title"
                  className="font-[family-name:var(--font-syne)] text-2xl font-extrabold text-text"
                >
                  {productLabel(product)}
                </h2>
                <p className="mt-1 text-sm text-muted">{product.description}</p>
                <p className="mt-3 text-2xl font-bold text-blue-bright">
                  {formatProductPrice(product)}
                </p>
              </div>
              <button
                type="button"
                onClick={closeProduct}
                className="shrink-0 rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:text-text"
              >
                Cerrar
              </button>
            </div>

            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-bright">
              Especificaciones
            </h3>
            <ul className="mb-6 space-y-2.5">
              {specs.map((spec) => (
                <li
                  key={spec.label}
                  className="flex items-start justify-between gap-4 border-b border-border/60 pb-2 text-sm"
                >
                  <span className="text-muted">{spec.label}</span>
                  <span className="text-right font-medium text-text">{spec.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  addItem(product.id);
                  closeProduct();
                }}
                className="flex-1 rounded-xl bg-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-bright"
              >
                Agregar al carrito
              </button>
              <button
                type="button"
                onClick={closeProduct}
                className="rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text hover:border-blue-bright/50"
              >
                Seguir viendo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
