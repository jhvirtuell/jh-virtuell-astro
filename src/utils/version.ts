/**
 * Append a short cache-busting query only for local assets.
 * External URLs remain untouched so third-party scripts keep working.
 */
export function withVersion(path: string): string {
  if (!path) {
    return path;
  }

  const trimmed = path.trim();
  if (/^(https?:)?\/\//i.test(trimmed)) {
    return trimmed;
  }

  const version = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const separator = trimmed.includes("?") ? "&" : "?";

  return `${trimmed}${separator}v=${version}`;
}
