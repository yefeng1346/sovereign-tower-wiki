import { notFound } from "next/navigation";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/site-seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  const titles = {
    ja: "Sovereign Tower キーワード攻略 — 出典付きガイド索引",
    ko: "Sovereign Tower 키워드 공략 — 출처 기반 가이드 색인",
    fr: "Guides par mot-clé Sovereign Tower — index sourcé",
  } as const;
  const descriptions = {
    ja: "Sovereign Tower のキーワード攻略を、直接回答、証拠レベル、出典リンク、PATCH 1.0.8 の確認日付きで探せます。",
    ko: "Sovereign Tower 키워드 공략을 직접 답변, 근거 수준, 출처 링크와 PATCH 1.0.8 확인 날짜로 찾아보세요.",
    fr: "Parcourez les guides par mot-clé de Sovereign Tower avec réponses directes, niveau de preuve, sources et date de vérification du PATCH 1.0.8.",
  } as const;
  return pageMetadata({ locale: current, path: "/guides", title: titles[current], description: descriptions[current] });
}

export default async function LocalizedGuides({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><KeywordIndexView locale={locale as Locale} /></SiteShell>;
}
