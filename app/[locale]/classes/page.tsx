import { notFound } from "next/navigation";
import { ClassIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site-seo";
import { classesIndexSeo } from "@/lib/seo-copy";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  return pageMetadata({ locale: current, path: "/classes", title: classesIndexSeo[current].title, description: classesIndexSeo[current].description });
}

export default async function LocalizedClasses({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><ClassIndexView locale={locale as Locale} /></SiteShell>;
}
