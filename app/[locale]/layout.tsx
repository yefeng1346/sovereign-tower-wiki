import type { Metadata } from "next";
import { locales, seo, type Locale } from "@/lib/site-data";
import { absoluteUrl, languageAlternates, localizedPath, siteIdentity, siteMetadataBase } from "@/lib/site-seo";
import "../globals.css";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = seo[locale as Locale] ?? seo.en;
  return {
    ...siteMetadataBase,
    title: current.title,
    description: current.description,
    keywords: [...current.keywords],
    alternates: { canonical: absoluteUrl(localizedPath(locale as Locale)), languages: languageAlternates("/") },
    openGraph: { title: current.title, description: current.description, siteName: "Sovereign Tower Wiki", type: "website", url: absoluteUrl(localizedPath(locale as Locale)), locale, images: [{ url: siteIdentity.logo, width: 512, height: 512, alt: "Sovereign Tower Wiki" }] },
    twitter: { card: "summary", title: current.title, description: current.description, images: [siteIdentity.logo] },
  };
}

export default async function LocalizedLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  return <html lang={locales.includes(locale as Locale) ? locale : "en"}><body>{children}</body></html>;
}
