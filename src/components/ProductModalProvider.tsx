"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

type ProductModalContextValue = {
  product: Product | null;
  openProduct: (product: Product) => void;
  closeProduct: () => void;
};

const ProductModalContext = createContext<ProductModalContextValue | null>(null);

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  const openProduct = useCallback((p: Product) => setProduct(p), []);
  const closeProduct = useCallback(() => setProduct(null), []);

  const value = useMemo(
    () => ({ product, openProduct, closeProduct }),
    [product, openProduct, closeProduct]
  );

  return (
    <ProductModalContext.Provider value={value}>
      {children}
    </ProductModalContext.Provider>
  );
}

export function useProductModal() {
  const ctx = useContext(ProductModalContext);
  if (!ctx) {
    throw new Error("useProductModal debe usarse dentro de ProductModalProvider");
  }
  return ctx;
}
