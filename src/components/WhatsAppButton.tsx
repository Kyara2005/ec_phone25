import Link from "next/link";
import { WHATSAPP_URL } from "@/data/products";

export function WhatsAppButton() {
  return (
    <Link
      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola EcPhone 👋 Quiero información")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition hover:scale-110 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.01 3C9.39 3 4 8.39 4 15.01c0 2.25.63 4.35 1.72 6.16L4 29l8.04-1.68A11.94 11.94 0 0 0 16.01 27C22.63 27 28 21.61 28 15.01 28 8.39 22.63 3 16.01 3zm6.95 16.94c-.29.82-1.7 1.56-2.38 1.66-.61.09-1.39.13-2.24-.14-.52-.16-1.18-.38-2.03-.74-3.57-1.54-5.9-5.14-6.08-5.38-.18-.24-1.45-1.93-1.45-3.68 0-1.75.92-2.61 1.24-2.97.33-.36.71-.45.95-.45h.68c.22 0 .51-.08.8.61.29.71.99 2.43 1.08 2.61.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.72.21.36.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.89-1.04 1.13-1.39.24-.36.48-.3.8-.18.33.12 2.07.98 2.42 1.15.36.18.59.27.68.42.09.15.09.87-.2 1.69z" />
      </svg>
    </Link>
  );
}
