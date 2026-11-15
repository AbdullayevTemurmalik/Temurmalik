export function cn(...inputs: Array<string | boolean | undefined | null>): string {
  return inputs.filter(Boolean).join(" ");
}

export function sanitizeUrl(url?: string): string {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
    return url;
  }
  return "#";
}
