/**
 * Prefijo de assets en GitHub Pages (ej. /ec_phone25).
 * En local queda vacío.
 *
 * Usar en src de <Image>, <img> y url() de CSS.
 * NO usar en <Link href> — Next ya aplica basePath ahí.
 */
export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function withBasePath(path: string) {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (base && (normalized === base || normalized.startsWith(`${base}/`))) {
    return normalized;
  }

  return `${base}${normalized}`;
}
