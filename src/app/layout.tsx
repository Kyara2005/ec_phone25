import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { ProductModalProvider } from "@/components/ProductModalProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EcPhone | iPhone, accesorios y reparación en Quito",
  description:
    "Venta de equipos y accesorios Apple. Reparación con repuestos originales en @ctec_phone. Quito – Ecuador, República del Salvador y NNUU.",
  openGraph: {
    title: "EcPhone | Apple en Quito",
    description:
      "iPhone, accesorios y reparación con repuestos originales. República del Salvador y NNUU.",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <ProductModalProvider>
            {children}
            <ProductDetailModal />
            <CartDrawer />
            <WhatsAppButton />
          </ProductModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
