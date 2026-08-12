import { notFound } from "next/navigation";
import { SearchView } from "@/components/site-extra";
import { SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  const titles = { ja: "Sovereign Tower ガイドを検索", ko: "Sovereign Tower 가이드 검색", fr: "Rechercher dans les guides Sovereign Tower" } as const;
  const descriptions = { ja: "出典で絞り込んだ Sovereign Tower ガイド索引を検索します。", ko: "출처로 필터링된 Sovereign Tower 가이드 색인을 검색합니다.", fr: "Recherchez dans l’index sourcé des guides Sovereign Tower." } as const;
  return pageMetadata({ locale: current, path: "/search", title: titles[current], description: descriptions[current], noindex: true });
}

export default async function LocalizedSearchPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ q?: string }> }) {
  const { locale } = await params;
  const { q = "" } = await searchParams;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><SearchView locale={locale as Locale} query={q} /></SiteShell>;
}
