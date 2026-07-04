/** Prefix public asset paths with Vite base URL (e.g. /testshopp/ on GitHub Pages). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
