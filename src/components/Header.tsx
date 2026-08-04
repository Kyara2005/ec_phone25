"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  { href: "/#iphones", label: "iPhones" },
  { href: "/accesorios", label: "Catálogo" },
  { href: "/#reparacion", label: "Reparación" },
  { href: "/#ubicacion", label: "Ubicación" },
  { href: "/tree", label: "Redes" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalItems, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <Link href="/" className="relative flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="EcPhone"
            width={140}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-blue-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative rounded-xl border border-border bg-surface/50 px-4 py-2.5 text-sm font-semibold text-text transition hover:border-blue-bright/50"
          >
            Carrito
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue px-1 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            href="/accesorios"
            className="rounded-xl bg-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-bright"
          >
            Comprar
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text"
            aria-label="Abrir carrito"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1" fill="currentColor" stroke="none" />
              <path d="M6 6L5 3H2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menú</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/accesorios"
              className="mt-2 rounded-xl bg-blue px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Ver catálogo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
