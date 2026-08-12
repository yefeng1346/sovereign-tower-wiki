import { notFound } from "next/navigation";
import { FaqView } from "@/components/site-extra";
import { SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: "Sovereign Tower FAQ", description: "Common answers about Sovereign Tower platforms, stats, time rewind, achievements, updates and redemption codes.", alternates: pageAlternates(locale as Locale, "/faq") };
}

export default async function LocalizedFaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><FaqView locale={locale as Locale} /></SiteShell>;
}
