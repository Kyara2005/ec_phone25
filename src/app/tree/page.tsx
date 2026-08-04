import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/data/products";

const links = [
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    detail: WHATSAPP_DISPLAY,
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.47 1.34 4.98L2 22l5.27-1.38a9.86 9.86 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.24 3.7 8.24 8.23 0 4.54-3.7 8.24-8.24 8.24z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ec_phone25",
    detail: "@ec_phone25",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ECPHONE",
    detail: "ECPHONE",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M14 8.2h2.4V4.8H14c-2.4 0-4 1.6-4 4v1.6H7.6v3.4H10V20h3.4v-6.2h2.4l.6-3.4h-3V9c0-.6.4-.8.8-.8z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ec.phone",
    detail: "@ec.phone",
    color: "#69C9D0",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.1v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.06a8.2 8.2 0 0 0 4.79 1.53V7.14a4.85 4.85 0 0 1-1.03-.45z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    href: "https://maps.app.goo.gl/D5HYF9XEmfpgWxR96",
    detail: "República del Salvador y NNUU",
    color: "#0088FF",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
      </svg>
    ),
  },
];

export const metadata = {
  title: "EcPhone | Redes y contacto",
  description:
    "WhatsApp, Instagram, Facebook, TikTok y ubicación de EcPhone en Quito.",
};

export default function TreePage() {
  return (
    <main className="hero-mesh relative flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md animate-fade-up">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="EcPhone"
            width={220}
            height={80}
            className="h-20 w-auto object-contain sm:h-24"
            priority
          />
          <h1 className="mt-5 font-[family-name:var(--font-syne)] text-2xl font-extrabold text-text sm:text-3xl">
            EcPhone
          </h1>
          <p className="mt-2 text-sm text-muted">
            iPhone · Accesorios · Reparación @ctec_phone
          </p>
          <p className="mt-1 text-xs text-muted">Quito – Ecuador</p>
        </div>

        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card flex items-center gap-4 rounded-2xl border border-border bg-bg-elevated/80 px-4 py-4 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: link.color }}
              >
                {link.icon}
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-semibold text-text">{link.label}</span>
                <span className="block truncate text-sm text-muted">{link.detail}</span>
              </span>
              <span className="text-muted" aria-hidden>
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            href="/"
            className="rounded-xl border border-border bg-surface/50 px-5 py-3 text-sm font-semibold text-text transition hover:border-blue-bright/50"
          >
            ← Ir a la tienda
          </Link>
          <p className="text-xs text-muted">© {new Date().getFullYear()} EcPhone</p>
        </div>
      </div>
    </main>
  );
}
