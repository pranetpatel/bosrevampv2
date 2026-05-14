/**
 * Copies repo-root legacy export into public/legacy for Next static serving.
 * Source of truth: ../legacy/BOS — Work Made Simple.htm + ../legacy/BOS — Work Made Simple_files/
 * (Uses manual tree copy instead of fs.cpSync — cpSync can crash on Windows with unicode paths.)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const marketingRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(marketingRoot, "..");
const legacyDir = path.join(repoRoot, "legacy");
const legacyHtm = path.join(legacyDir, "BOS — Work Made Simple.htm");
const legacyFilesDir = path.join(legacyDir, "BOS — Work Made Simple_files");
const outDir = path.join(marketingRoot, "public", "legacy");
const outHtml = path.join(outDir, "index.html");
const outFilesDir = path.join(outDir, "BOS — Work Made Simple_files");

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, name.name);
    const to = path.join(dest, name.name);
    if (name.isDirectory()) copyDirRecursive(from, to);
    else fs.copyFileSync(from, to);
  }
}

if (!fs.existsSync(legacyHtm)) {
  console.error("sync-legacy-public: missing", legacyHtm);
  process.exit(1);
}
if (!fs.existsSync(legacyFilesDir)) {
  console.error("sync-legacy-public: missing", legacyFilesDir);
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(legacyHtm, outHtml);
copyDirRecursive(legacyFilesDir, outFilesDir);

console.log("sync-legacy-public: wrote", outHtml);
