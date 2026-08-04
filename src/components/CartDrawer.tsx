"use client";

import Image from "next/image";
import {
  formatPrice,
  formatProductPrice,
  productLabel,
  whatsappCartUrl,
} from "@/data/products";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const {
    open,
    setOpen,
    lines,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (!open) return null;

  const checkout = () => {
    if (lines.length === 0) return;
    const url = whatsappCartUrl(lines);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Cerrar carrito"
        onClick={() => setOpen(false)}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-border bg-bg-elevated shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-bold text-text">
              Tu carrito
            </h2>
            <p className="text-sm text-muted">
              {totalItems === 0
                ? "Vacío"
                : `${totalItems} producto${totalItems === 1 ? "" : "s"}`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:text-text"
          >
            Cerrar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted">
              Agrega iPhones o accesorios para armar tu pedido.
            </p>
          ) : (
            <ul className="space-y-4">
              {lines.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 rounded-xl border border-border bg-bg/60 p-3"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-surface">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-text">
                      {productLabel(product)}
                    </p>
                    <p className="text-sm text-blue-bright">
                      {formatProductPrice(product)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Menos"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{quantity}</span>
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Más"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="ml-auto text-xs text-muted hover:text-red-400"
                        onClick={() => removeItem(product.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted">Total estimado</span>
            <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-blue-bright">
              {formatPrice(totalPrice)}
            </span>
          </div>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={checkout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Comprar por WhatsApp
          </button>
          {lines.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="mt-2 w-full py-2 text-xs text-muted hover:text-text"
            >
              Vaciar carrito
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
