import { notFound } from "next/navigation";
import { ClassIndexView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  const titles = { ja: "Sovereign Tower 攻略アーカイブ — ナイツ、クエスト、システム", ko: "Sovereign Tower 공략 아카이브 — 나이트, 퀘스트와 시스템", fr: "Archives de guides Sovereign Tower — Chevaliers, quêtes et systèmes" } as const;
  const descriptions = { ja: "Sovereign Tower のナイツ、クエスト、システム、物語の選択、ロマンス、更新情報と確認済みガイドを探します。", ko: "Sovereign Tower의 나이트, 퀘스트, 시스템, 스토리 선택, 로맨스, 업데이트와 검증 가이드를 탐색하세요.", fr: "Parcourez les guides Sovereign Tower sur les Chevaliers, les quêtes, les systèmes, les choix, la romance, les mises à jour et les notes vérifiées." } as const;
  return pageMetadata({ locale: current, path: "/classes", title: titles[current], description: descriptions[current] });
}

export default async function LocalizedClasses({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><ClassIndexView locale={locale as Locale} /></SiteShell>;
}
