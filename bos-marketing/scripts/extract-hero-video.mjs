/**
 * Extracts inlined base64 MP4 from legacy HTML export into public/video/bos-web-hero-v1.mp4
 * Run from bos-marketing: node scripts/extract-hero-video.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const legacyHtml = path.join(
  root,
  "..",
  "legacy",
  "BOS — Work Made Simple.htm",
);

const html = fs.readFileSync(legacyHtml, "utf8");
const m = html.match(/data:video\/mp4;base64,([^"]+)/);
if (!m) {
  console.error("No base64 MP4 source found in legacy HTML.");
  process.exit(1);
}
const buf = Buffer.from(m[1], "base64");
const outDir = path.join(root, "public", "video");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "bos-web-hero-v1.mp4");
fs.writeFileSync(outFile, buf);
console.log(`Wrote ${outFile} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
