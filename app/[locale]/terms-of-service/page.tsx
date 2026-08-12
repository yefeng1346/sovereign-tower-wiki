import { notFound } from "next/navigation";
import { LegalView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/site-seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  const titles = { ja: "利用規約 — Sovereign Tower Wiki", ko: "이용약관 — Sovereign Tower Wiki", fr: "Conditions d'utilisation — Sovereign Tower Wiki" } as const;
  const descriptions = { ja: "独立ファンサイト Sovereign Tower Wiki のガイド、ツール、公開調査メモの利用条件です。", ko: "독립 팬 사이트 Sovereign Tower Wiki의 가이드, 도구와 공개 조사 메모 이용 조건입니다.", fr: "Conditions d'utilisation des guides, outils et notes publiques du site fan indépendant Sovereign Tower Wiki." } as const;
  return pageMetadata({ locale: current, path: "/terms-of-service", title: titles[current], description: descriptions[current], noindex: true });
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export default async function LocalizedTermsOfService({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><LegalView locale={locale as Locale} kind="terms" /></SiteShell>;
}
