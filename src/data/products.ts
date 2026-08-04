export type ProductCategory = "iphone" | "accesorio";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  storage?: string;
  price: number;
  pricePrefix?: "desde";
  tag?: string;
  image: string;
  description: string;
  specs?: ProductSpec[];
};

export const SECTION_BACKGROUNDS = {
  hero: "/sections/hero-bg.png",
  iphone: "/sections/hero-bg.png",
  accesorio: "/sections/accesorios-bg.png",
} as const;

export const products: Product[] = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iphone",
    price: 1199,
    pricePrefix: "desde",
    tag: "Nuevo",
    image: "/products/iphone-17-pro.png",
    description: "Lo último de Apple. Potencia Pro y diseño de nueva generación.",
  },
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    category: "iphone",
    price: 1279,
    pricePrefix: "desde",
    tag: "Nuevo",
    image: "/products/iphone-17-pro.png",
    description: "La pantalla más grande y la mejor cámara de la serie 17.",
  },
  {
    id: "iphone-15-pro-max-256",
    name: "iPhone 15 Pro Max",
    category: "iphone",
    storage: "256 GB",
    price: 789,
    pricePrefix: "desde",
    tag: "Pro Max",
    image: "/products/iphone-15-pro-max.png",
    description: "Titanio, USB-C y Action Button en formato Max.",
  },
  {
    id: "iphone-15-pro-max-512",
    name: "iPhone 15 Pro Max",
    category: "iphone",
    storage: "512 GB",
    price: 825,
    pricePrefix: "desde",
    image: "/products/iphone-15-pro-max-512.png",
    description: "Más almacenamiento para foto y video profesional.",
  },
  {
    id: "iphone-15-pro-128",
    name: "iPhone 15 Pro",
    category: "iphone",
    storage: "128 GB",
    price: 649,
    pricePrefix: "desde",
    tag: "Pro",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "Rendimiento Pro en un tamaño compacto.",
  },
  {
    id: "iphone-15-pro-256",
    name: "iPhone 15 Pro",
    category: "iphone",
    storage: "256 GB",
    price: 699,
    pricePrefix: "desde",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    description: "256 GB para apps, fotos y 4K sin preocuparte.",
  },
  {
    id: "iphone-15-128",
    name: "iPhone 15",
    category: "iphone",
    storage: "128 GB",
    price: 549,
    pricePrefix: "desde",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80",
    description: "Dynamic Island, USB-C y cámara de 48 MP.",
  },
  {
    id: "iphone-14-pro-128",
    name: "iPhone 14 Pro",
    category: "iphone",
    storage: "128 GB",
    price: 549,
    pricePrefix: "desde",
    tag: "Oferta",
    image: "/products/iphone-14-pro-128.png",
    description: "Always-On Display y cámara Pro a gran precio.",
  },
  {
    id: "iphone-14-pro-256",
    name: "iPhone 14 Pro",
    category: "iphone",
    storage: "256 GB",
    price: 589,
    pricePrefix: "desde",
    image: "/products/iphone-14-pro-256.png",
    description: "Más espacio sin renunciar a la línea Pro.",
  },
  {
    id: "iphone-14-pro-512",
    name: "iPhone 14 Pro",
    category: "iphone",
    storage: "512 GB",
    price: 619,
    pricePrefix: "desde",
    image: "/products/iphone-14-pro-512.png",
    description: "Ideal si grabas mucho o editas en el teléfono.",
  },
  {
    id: "iphone-14-pro-1tb",
    name: "iPhone 14 Pro",
    category: "iphone",
    storage: "1 TB",
    price: 669,
    pricePrefix: "desde",
    image: "/products/iphone-14-pro-1tb.png",
    description: "Capacidad máxima de la serie 14 Pro.",
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    category: "accesorio",
    price: 249,
    pricePrefix: "desde",
    tag: "Audio",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    description: "Cancelación activa de ruido y audio espacial.",
  },
  {
    id: "airpods-3",
    name: "AirPods 3",
    category: "accesorio",
    price: 149,
    pricePrefix: "desde",
    image: "/products/airpods-3.png",
    description: "Sonido espacial y resistencia al sudor.",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "accesorio",
    price: 449,
    pricePrefix: "desde",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
    description: "Audio de alta fidelidad con diseño over-ear.",
  },
  {
    id: "case-clear-magsafe",
    name: "Case transparente MagSafe",
    category: "accesorio",
    price: 29,
    pricePrefix: "desde",
    tag: "Case",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    description: "Protección fina que deja ver el color de tu iPhone.",
  },
  {
    id: "case-silicone",
    name: "Case de silicona MagSafe",
    category: "accesorio",
    price: 35,
    pricePrefix: "desde",
    tag: "Case",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
    description: "Agarre suave y colores vibrantes.",
  },
  {
    id: "case-leather",
    name: "Case de cuero MagSafe",
    category: "accesorio",
    price: 49,
    pricePrefix: "desde",
    tag: "Case",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    description: "Acabado premium que envejece con estilo.",
  },
  {
    id: "magsafe-charger",
    name: "Cargador MagSafe",
    category: "accesorio",
    price: 45,
    pricePrefix: "desde",
    image:
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?auto=format&fit=crop&w=800&q=80",
    description: "Carga inalámbrica magnética compatible.",
  },
  {
    id: "cable-usbc",
    name: "Cable USB-C a Lightning / USB-C",
    category: "accesorio",
    price: 19,
    pricePrefix: "desde",
    image: "/products/cable-usbc.png",
    description: "Carga rápida y transferencia de datos.",
  },
  {
    id: "apple-watch-se",
    name: "Apple Watch SE",
    category: "accesorio",
    price: 249,
    pricePrefix: "desde",
    tag: "Wearable",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=80",
    description: "Salud, notificaciones y estilo en tu muñeca.",
  },
  {
    id: "glass-protector",
    name: "Protector de pantalla de vidrio",
    category: "accesorio",
    price: 15,
    pricePrefix: "desde",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    description: "Templado 9H con borde negro o transparente.",
  },
];

export const WHATSAPP_NUMBER = "593999023369";
export const WHATSAPP_DISPLAY = "+593 99 902 3369";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatProductPrice(product: Product) {
  const amount = formatPrice(product.price);
  return product.pricePrefix === "desde" ? `Desde ${amount}` : amount;
}

export function productLabel(product: Product) {
  return product.storage ? `${product.name} ${product.storage}` : product.name;
}

const BASE_SPECS: Record<string, ProductSpec[]> = {
  "iphone-17-pro": [
    { label: "Pantalla", value: 'Super Retina XDR ~6.3"' },
    { label: "Chip", value: "A19 Pro" },
    { label: "Cámara", value: "Sistema Pro triple 48 MP" },
    { label: "Conectividad", value: "USB-C, 5G, MagSafe" },
    { label: "Resistencia", value: "Ceramic Shield / IP68" },
    { label: "Face ID", value: "Sí" },
  ],
  "iphone-17-pro-max": [
    { label: "Pantalla", value: 'Super Retina XDR ~6.9"' },
    { label: "Chip", value: "A19 Pro" },
    { label: "Cámara", value: "Sistema Pro Max 48 MP" },
    { label: "Conectividad", value: "USB-C, 5G, MagSafe" },
    { label: "Batería", value: "La mayor autonomía de la serie" },
    { label: "Face ID", value: "Sí" },
  ],
  "iphone-15-pro-max": [
    { label: "Pantalla", value: 'Super Retina XDR 6.7"' },
    { label: "Chip", value: "A17 Pro" },
    { label: "Material", value: "Titanio grado aeroespacial" },
    { label: "Cámara", value: "48 MP + teleobjetivo 5x" },
    { label: "Botón", value: "Action Button" },
    { label: "Conectividad", value: "USB-C, 5G, MagSafe" },
  ],
  "iphone-15-pro": [
    { label: "Pantalla", value: 'Super Retina XDR 6.1"' },
    { label: "Chip", value: "A17 Pro" },
    { label: "Material", value: "Titanio" },
    { label: "Cámara", value: "Sistema Pro 48 MP" },
    { label: "Botón", value: "Action Button" },
    { label: "Conectividad", value: "USB-C, 5G, MagSafe" },
  ],
  "iphone-15": [
    { label: "Pantalla", value: 'Super Retina XDR 6.1"' },
    { label: "Chip", value: "A16 Bionic" },
    { label: "Cámara", value: "Dual 48 MP" },
    { label: "Dynamic Island", value: "Sí" },
    { label: "Conectividad", value: "USB-C, 5G" },
    { label: "Face ID", value: "Sí" },
  ],
  "iphone-14-pro": [
    { label: "Pantalla", value: 'Super Retina XDR 6.1" Always-On' },
    { label: "Chip", value: "A16 Bionic" },
    { label: "Cámara", value: "Pro 48 MP + LiDAR" },
    { label: "Dynamic Island", value: "Sí" },
    { label: "Conectividad", value: "Lightning, 5G" },
    { label: "Face ID", value: "Sí" },
  ],
  "airpods-pro-2": [
    { label: "Audio", value: "Cancelación activa de ruido" },
    { label: "Chip", value: "H2" },
    { label: "Resistencia", value: "IPX4 sudor y agua" },
    { label: "Carga", value: "Estuche MagSafe / USB-C" },
    { label: "Autonomía", value: "Hasta 6 h (ANC)" },
  ],
  "airpods-3": [
    { label: "Audio", value: "Sonido espacial adaptativo" },
    { label: "Diseño", value: "Contorno abierto" },
    { label: "Resistencia", value: "IPX4 sudor y agua" },
    { label: "Carga", value: "Estuche Lightning / MagSafe*" },
    { label: "Autonomía", value: "Hasta 6 h de audio" },
  ],
  "airpods-max": [
    { label: "Tipo", value: "Over-ear" },
    { label: "Audio", value: "ANC + audio espacial" },
    { label: "Chip", value: "H1" },
    { label: "Autonomía", value: "Hasta 20 h" },
    { label: "Material", value: "Aluminio y malla acústica" },
  ],
  "case-clear-magsafe": [
    { label: "Compatibilidad", value: "iPhone con MagSafe" },
    { label: "Material", value: "Policarbonato transparente" },
    { label: "MagSafe", value: "Sí" },
    { label: "Protección", value: "Golpes y rayones" },
  ],
  "case-silicone": [
    { label: "Compatibilidad", value: "iPhone con MagSafe" },
    { label: "Material", value: "Silicona suave" },
    { label: "MagSafe", value: "Sí" },
    { label: "Acabado", value: "Antideslizante" },
  ],
  "case-leather": [
    { label: "Compatibilidad", value: "iPhone con MagSafe" },
    { label: "Material", value: "Cuero premium" },
    { label: "MagSafe", value: "Sí" },
    { label: "Acabado", value: "Envejece con estilo" },
  ],
  "magsafe-charger": [
    { label: "Tipo", value: "Carga inalámbrica magnética" },
    { label: "Potencia", value: "Hasta 15 W (compatible)" },
    { label: "Conexión", value: "USB-C" },
    { label: "Uso", value: "iPhone MagSafe" },
  ],
  "cable-usbc": [
    { label: "Conectores", value: "USB-C ↔ Lightning / USB-C" },
    { label: "Longitud", value: "1 m" },
    { label: "Uso", value: "Carga y datos" },
    { label: "Compatibilidad", value: "iPhone, iPad y más" },
  ],
  "apple-watch-se": [
    { label: "Pantalla", value: "Retina LTPO" },
    { label: "Salud", value: "Frecuencia cardíaca, oxigenación*" },
    { label: "Resistencia", value: "Al agua 50 m" },
    { label: "Conectividad", value: "GPS / Cellular según modelo" },
  ],
  "glass-protector": [
    { label: "Material", value: "Vidrio templado 9H" },
    { label: "Cobertura", value: "Pantalla completa" },
    { label: "Acabado", value: "Borde negro o transparente" },
    { label: "Instalación", value: "Adhesivo fácil" },
  ],
};

function specsKey(product: Product) {
  if (product.id.startsWith("iphone-15-pro-max")) return "iphone-15-pro-max";
  if (product.id.startsWith("iphone-15-pro")) return "iphone-15-pro";
  if (product.id.startsWith("iphone-15")) return "iphone-15";
  if (product.id.startsWith("iphone-14-pro")) return "iphone-14-pro";
  if (product.id.startsWith("iphone-17-pro-max")) return "iphone-17-pro-max";
  if (product.id.startsWith("iphone-17-pro")) return "iphone-17-pro";
  return product.id;
}

export function getProductSpecs(product: Product): ProductSpec[] {
  if (product.specs?.length) return product.specs;

  const base = BASE_SPECS[specsKey(product)] ?? [
    { label: "Categoría", value: product.category === "iphone" ? "iPhone" : "Accesorio" },
    { label: "Descripción", value: product.description },
  ];

  const withStorage = product.storage
    ? [{ label: "Almacenamiento", value: product.storage }, ...base]
    : base;

  return [
    ...withStorage,
    { label: "Precio estimado", value: formatProductPrice(product) },
    { label: "Disponibilidad", value: "Confirmar por WhatsApp" },
  ];
}

export type CartLine = {
  product: Product;
  quantity: number;
};

export function whatsappCartUrl(items: CartLine[]) {
  const lines = items.map((item) => {
    const label = productLabel(item.product);
    const unit = formatProductPrice(item.product);
    return `• ${item.quantity}x ${label} (${unit})`;
  });

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const text = [
    "Hola EcPhone, quiero comprar:",
    "",
    ...lines,
    "",
    `Total estimado: ${formatPrice(total)}`,
    "",
    "¿Me confirman disponibilidad?",
  ].join("\n");

  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export function whatsappProductUrl(product: Product) {
  const label = productLabel(product);
  const text = encodeURIComponent(
    `Hola EcPhone, me interesa el ${label} (${formatProductPrice(product)}). ¿Tienen disponibilidad?`
  );
  return `${WHATSAPP_URL}?text=${text}`;
}
