/**
 * Prefijo de assets en GitHub Pages (ej. /ec_phone25).
 * En local queda vacío.
 */
export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

/** Rutas absolutas del sitio (/foo) con basePath cuando aplica. */
export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = getBasePath();
  return `${base}${path}`;
}
