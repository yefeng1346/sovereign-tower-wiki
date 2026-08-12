import { notFound } from "next/navigation";
import { SearchView } from "@/components/site-extra";
import { SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: "Search Sovereign Tower guides", description: "Search the source-filtered Sovereign Tower guide index.", robots: { index: false, follow: true }, alternates: pageAlternates(locale as Locale, "/search") };
}

export default async function LocalizedSearchPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ q?: string }> }) {
  const { locale } = await params;
  const { q = "" } = await searchParams;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><SearchView locale={locale as Locale} query={q} /></SiteShell>;
}
