import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const locales = ["en", "ja", "ko", "fr"];
const failures = [];

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const defaultPages = walk(join(root, "app", "(default)"))
  .filter((path) => path.endsWith("/page.tsx"))
  .map((path) => relative(join(root, "app", "(default)"), path));
const localizedPages = walk(join(root, "app", "[locale]"))
  .filter((path) => path.endsWith("/page.tsx"))
  .map((path) => relative(join(root, "app", "[locale]"), path));

for (const page of defaultPages) {
  if (!localizedPages.includes(page)) failures.push(`Missing localized route for ${page}`);
}

const localizedKeywords = readFileSync(join(root, "content", "localized-keyword-pages.ts"), "utf8");
for (const locale of locales.filter((locale) => locale !== "en")) {
  if (!localizedKeywords.includes(`const ${locale} =`)) failures.push(`Missing localized keyword data: ${locale}`);
}

const ui = readFileSync(join(root, "lib", "localized-content.ts"), "utf8");
const oldHoldText = [
  "Local-language keyword pages are not published yet.",
  "この言語のキーワード本文はまだ公開していません。",
  "이 언어의 키워드 본문은 아직 공개하지 않았습니다.",
  "Les pages de mots-clés dans cette langue ne sont pas encore publiées.",
];
for (const text of oldHoldText) {
  if (ui.includes(text)) failures.push(`Old localized-search placeholder remains: ${text}`);
}

const legal = readFileSync(join(root, "content", "legal-copy.ts"), "utf8");
for (const locale of locales) {
  if (!legal.includes(locale === "en" ? "const english" : `${locale}: {`)) failures.push(`Missing legal copy: ${locale}`);
}
for (const kind of ["privacy", "terms"]) {
  if (!legal.includes(`${kind}: {`)) failures.push(`Missing legal document: ${kind}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`✓ ${defaultPages.length} English route shapes have localized counterparts`);
console.log("✓ ja / ko / fr keyword data and legal copy are present");
console.log("✓ localized search contains no retired hold text");
