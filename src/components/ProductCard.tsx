"use client";

import Image from "next/image";
import { formatProductPrice, type Product } from "@/data/products";
import { useCart } from "./CartProvider";
import { useProductModal } from "./ProductModalProvider";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { openProduct } = useProductModal();

  return (
    <article
      className="product-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated/90 backdrop-blur-sm"
      onClick={() => openProduct(product)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProduct(product);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver especificaciones de ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="product-image object-cover"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-lg bg-blue px-2.5 py-1 text-xs font-semibold text-white">
            {product.tag}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-lg bg-bg/80 px-2.5 py-1 text-[11px] font-medium text-muted backdrop-blur opacity-0 transition group-hover:opacity-100">
          Ver specs
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-text">
            {product.name}
          </h3>
          {product.storage && (
            <span className="shrink-0 rounded-md bg-surface px-2 py-0.5 text-xs text-muted">
              {product.storage}
            </span>
          )}
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-blue-bright sm:text-xl">
            {formatProductPrice(product)}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              addItem(product.id);
            }}
            className="rounded-lg bg-blue px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-bright sm:text-sm"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
