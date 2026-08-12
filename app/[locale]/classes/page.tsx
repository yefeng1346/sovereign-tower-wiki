import { notFound } from "next/navigation";
import { ClassIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: "Sovereign Tower guide archive", description: "Browse Sovereign Tower systems, Knights, quests, choices, romance, updates and verified core guide files.", alternates: pageAlternates(locale as Locale, "/classes") };
}

export default async function LocalizedClasses({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><ClassIndexView locale={locale as Locale} /></SiteShell>;
}
