import { notFound } from "next/navigation";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import { seo } from "@/lib/site-data";
import { pageAlternates } from "@/lib/site-seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = seo[locale as Locale] ?? seo.en;
  return { title: `Sovereign Tower guides — ${current.title}`, description: current.description, alternates: pageAlternates(locale as Locale, "/guides") };
}

export default async function LocalizedGuides({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><KeywordIndexView locale={locale as Locale} /></SiteShell>;
}
