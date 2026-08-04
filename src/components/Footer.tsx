import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="EcPhone"
            width={120}
            height={40}
            className="mx-auto h-10 w-auto object-contain sm:mx-0"
          />
          <p className="mt-3 max-w-xs text-sm text-muted">
            Venta de equipos y accesorios Apple · Reparación con repuestos
            originales en @ctec_phone
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
          <Link href="/accesorios" className="hover:text-blue-bright">
            Catálogo / Accesorios
          </Link>
          <Link href="/tree" className="hover:text-blue-bright">
            Linktree / Redes
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-bright">
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <p>República del Salvador y NNUU · Quito</p>
          <p className="pt-2 text-xs">© {new Date().getFullYear()} EcPhone</p>
        </div>
      </div>
    </footer>
  );
}
