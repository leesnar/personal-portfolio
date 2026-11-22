import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const base = "/personal-portfolio/";
const origin = "https://leesnar.github.io";
const studies = ["network-intrusion-risk-scoring", "air-quality-analysis", "xai-validation-framework"];
const documents = ["index.html", ...studies.map(id => `projects/${id}/index.html`)];
// Extend this list only when an approved file is deliberately added to the candidate.
const cvFile = "cv/lesnar-tambun-cv.pdf";
const allowedStaticFiles = [cvFile, "favicon.svg", "sitemap.xml", "assets/lesnar-portrait.png", "assets/lesnar-portrait.webp",
  ...["dash-executive.jpg", "dash-traffic.jpg", "dash-ml-threat.jpg", "air-monthly-notebook.png", "air-correlations-notebook.png", "jaccard-bar.png", "roc-comparison.png", "shap-bar.png"].map(file => "assets/" + file)];

async function walk(dir) {
  const found = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) found.push(...await walk(path));
    else found.push(relative(root, path).replaceAll("\\", "/"));
  }
  return found;
}

const files = new Set(await walk(root));
for (const file of files) {
  const generatedBundle = /^assets\/[\w.-]+-[\w-]{8,}\.(?:js|css)$/.test(file);
  assert(documents.includes(file) || allowedStaticFiles.includes(file) || generatedBundle, `Unexpected published file: ${file}`);
}
for (const file of files) {
  if (!file.endsWith(".html") && !file.endsWith(".js")) continue;
  const text = await readFile(join(root, file), "utf8");
  for (const retired of ["98% alert", "AI/ML Engineer & Data Engineer", "assets/domain-expert.png", "assets/xai-framework-card-asset.png", "assets/network-intrusion-card-asset.png"]) {
    assert(!text.includes(retired), `Retired content in ${file}: ${retired}`);
  }
}
for (const file of allowedStaticFiles) assert(files.has(file), `Missing static file: ${file}`);
const cvHash = createHash("sha256").update(await readFile(join(root, cvFile))).digest("hex");
assert.equal(cvHash, "0c951fe4892b638a276cffae042302714b8fded32a24b873845d64710d35c98e", "The built CV must match the owner-approved PDF");
const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
const titles = new Set();
for (const doc of documents) {
  const html = await readFile(join(root, doc), "utf8");
  const canonical = origin + base + doc.replace(/index\.html$/, "");
  assert(html.includes(`rel="canonical" href="${canonical}"`), doc);
  assert(html.includes(`property="og:url" content="${canonical}"`), doc);
  assert(sitemap.includes(`<loc>${canonical}</loc>`), doc);
  assert.match(html, /<h1[\s>]/);
  assert(!html.includes("%BASE_URL%"), doc);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Missing or duplicate title: ${doc}`);
  titles.add(title);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const href = new URL(match[1], origin).pathname;
    assert(href.startsWith(base), `Wrong base: ${href}`);
    const target = href.slice(base.length);
    assert(files.has(target.endsWith("/") || !target ? target + "index.html" : target), `Broken HTML reference: ${href}`);
  }
}
console.log(`Verified ${documents.length} page entries, their static links, metadata, sitemap, and the published file inventory.`);
