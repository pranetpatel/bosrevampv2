import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const legacyPath = path.resolve(__dirname, "../../legacy/BOS — Work Made Simple.htm");

const s = fs.readFileSync(legacyPath, "utf8");
const stat = fs.statSync(legacyPath);

/** CSS comments often preserved legacy marketing copy */
const commentStrings = [];
for (const m of s.matchAll(/\/\*([^*]|\*(?!\/))*\*\//gs)) {
  const t = m[0].replace(/^\/\*|\*\/$/g, "").trim();
  if (t.length > 12 && /[a-zA-Z]{4}/.test(t)) commentStrings.push(t);
}

const out = {
  fileSize: stat.size,
  charLength: s.length,
  ucCardHtml: (s.match(/class="uc-card"/g) || []).length,
  fLabelHtml: (s.match(/class="f-label/g) || []).length,
  hasScript: /<script/i.test(s),
  cssCommentSnippets: commentStrings.filter((t) => /productivity|between|manifesto|friction/i.test(t)).slice(0, 20),
};

const outPath = path.join(__dirname, "legacy-extracted-snippets.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
console.log("Wrote", outPath);
console.log(JSON.stringify(out, null, 2));
