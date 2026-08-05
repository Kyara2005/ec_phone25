/**
 * Loader para next/image en export estático (GitHub Pages).
 * Asegura el prefijo NEXT_PUBLIC_BASE_PATH en assets locales.
 */
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const path = src.startsWith("/") ? src : `/${src}`;

  // Evitar doble prefijo si ya viene con basePath
  if (base && path.startsWith(`${base}/`)) {
    return path;
  }

  return `${base}${path}`;
}
