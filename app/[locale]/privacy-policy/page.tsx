import { notFound } from "next/navigation";
import { LegalView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";
import { pageMetadata } from "@/lib/site-seo";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale as Exclude<Locale, "en">;
  const titles = { ja: "プライバシーポリシー — Sovereign Tower Wiki", ko: "개인정보 처리방침 — Sovereign Tower Wiki", fr: "Politique de confidentialité — Sovereign Tower Wiki" } as const;
  const descriptions = { ja: "独立ファンサイト Sovereign Tower Wiki の公開調査とサイト利用に関するプライバシー情報です。", ko: "독립 팬 사이트 Sovereign Tower Wiki의 공개 조사와 사이트 이용에 관한 개인정보 안내입니다.", fr: "Informations de confidentialité pour le site fan indépendant Sovereign Tower Wiki et ses recherches publiques." } as const;
  return pageMetadata({ locale: current, path: "/privacy-policy", title: titles[current], description: descriptions[current], noindex: true });
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export default async function LocalizedPrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><LegalView locale={locale as Locale} kind="privacy" /></SiteShell>;
}
