import { notFound } from "next/navigation";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/site-seo";
import type { Metadata } from "next";
import { guidesIndexSeo } from "@/lib/seo-copy";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  return pageMetadata({ locale: current, path: "/guides", title: guidesIndexSeo[current].title, description: guidesIndexSeo[current].description });
}

export default async function LocalizedGuides({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><KeywordIndexView locale={locale as Locale} /></SiteShell>;
}
