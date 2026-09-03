/**
 * Resolve a file in `public/` against the deployment base path.
 *
 * Vite rewrites asset URLs it can see at build time, but not runtime strings
 * like these — and this site is served from a subpath on GitHub Pages, where a
 * bare "/assets/…" would resolve against the domain root and 404.
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
