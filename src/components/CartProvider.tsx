"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  lines: { product: Product; quantity: number }[];
};

const STORAGE_KEY = "ecphone-cart-v1";

const CartContext = createContext<CartContextValue | null>(null);

function sanitizeItems(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (item): item is CartItem =>
        !!item &&
        typeof item === "object" &&
        typeof (item as CartItem).productId === "string" &&
        typeof (item as CartItem).quantity === "number" &&
        products.some((p) => p.id === (item as CartItem).productId)
    )
    .map((item) => ({
      productId: item.productId,
      quantity: Math.max(1, Math.min(99, Math.floor(item.quantity))),
    }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(sanitizeItems(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId
            ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
            : i
        );
      }
      return [...prev, { productId, quantity: Math.max(1, quantity) }];
    });
    setOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId
          ? { ...i, quantity: Math.min(99, Math.floor(quantity)) }
          : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return { product, quantity: item.quantity };
        })
        .filter((line): line is { product: Product; quantity: number } => !!line),
    [items]
  );

  const totalItems = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines]
  );

  const totalPrice = useMemo(
    () => lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      items,
      open,
      setOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      lines,
    }),
    [
      items,
      open,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      lines,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
