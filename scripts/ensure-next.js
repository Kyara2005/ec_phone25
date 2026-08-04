/**
 * Prepara vendor/next desde una instalación local (pims) o el store pnpm,
 * para reutilizar next@16.3.0 sin descargar del registry.
 *
 * Uso: node scripts/ensure-next.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const vendorNext = path.join(root, "vendor", "next");
const vendorSwc = path.join(root, "vendor", "swc");

const nextSources = [
  vendorNext,
  "C:\\Users\\HP\\Desktop\\pims\\node_modules\\next",
  "C:\\Users\\HP\\Desktop\\BeautyNails\\node_modules\\next",
];

const swcSources = [
  vendorSwc,
  "C:\\Users\\HP\\Desktop\\pims\\node_modules\\@next\\swc-win32-x64-msvc",
];

function hasNext(dir) {
  return fs.existsSync(path.join(dir, "dist", "bin", "next"));
}

function copyDir(src, dest) {
  if (src === dest) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
  execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /nc /ns /np`, {
    stdio: "ignore",
    windowsHide: true,
  });
}

function main() {
  if (hasNext(vendorNext)) {
    console.log("ensure-next: vendor/next ya listo");
    return;
  }

  const src = nextSources.find((d) => d !== vendorNext && hasNext(d));
  if (!src) {
    console.error("ensure-next: no hay next@16.3.0 local. Copia uno a vendor/next");
    process.exit(1);
  }

  console.log("ensure-next: copiando desde", src);
  copyDir(src, vendorNext);

  const swcSrc = swcSources.find(
    (d) => d !== vendorSwc && fs.existsSync(path.join(d, "package.json"))
  );
  if (swcSrc) copyDir(swcSrc, vendorSwc);

  console.log("ensure-next: listo. Ejecuta: pnpm install --store-dir E:\\.pnpm-store");
}

main();
