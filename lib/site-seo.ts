import { locales, type Locale } from "@/lib/site-data";

/**
 * The production hostname is intentionally configuration-driven. Until a
 * domain is chosen, local development and preview builds use their own host.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
);

export function absoluteUrl(path = "/") {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}

export function localizedPath(locale: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? normalized : `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function languageAlternates(path = "/") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localizedPath(locale, path))])),
    "x-default": absoluteUrl(path),
  };
}

export function pageAlternates(locale: Locale, path: string) {
  return { canonical: absoluteUrl(localizedPath(locale, path)), languages: languageAlternates(path) };
}

export const siteIdentity = {
  name: "Sovereign Tower Wiki",
  description: "An independent, evidence-labelled guide to Sovereign Tower quests, Knights, factions and time rewind.",
  logo: absoluteUrl("/android-chrome-512x512.png"),
};
