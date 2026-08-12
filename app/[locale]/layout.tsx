import type { Metadata } from "next";
import { locales, seo, type Locale } from "@/lib/site-data";
import { absoluteUrl, languageAlternates, localizedPath } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = seo[locale as Locale] ?? seo.en;
  return {
    title: current.title,
    description: current.description,
    keywords: [...current.keywords],
    alternates: { canonical: absoluteUrl(localizedPath(locale as Locale)), languages: languageAlternates("/") },
  };
}

export default function LocalizedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
