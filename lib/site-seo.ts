import type { Metadata } from "next";
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

export const siteMetadataBase: Metadata = {
  applicationName: "Sovereign Tower Wiki",
  authors: [{ name: "Sovereign Tower Wiki" }],
  creator: "Sovereign Tower Wiki",
  publisher: "Sovereign Tower Wiki",
  metadataBase: siteUrl,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  type = "website",
  noindex = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const canonical = absoluteUrl(localizedPath(locale, path));
  return {
    title,
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: noindex ? { canonical } : { canonical, languages: languageAlternates(path) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      siteName: "Sovereign Tower Wiki",
      type,
      url: canonical,
      images: [{ url: siteIdentity.logo, width: 512, height: 512, alt: "Sovereign Tower Wiki" }],
    },
    twitter: { card: "summary", title, description, images: [siteIdentity.logo] },
  };
}

export const siteIdentity = {
  name: "Sovereign Tower Wiki",
  description: "An independent, evidence-labelled guide to Sovereign Tower quests, Knights, factions and time rewind.",
  logo: absoluteUrl("/android-chrome-512x512.png"),
};
