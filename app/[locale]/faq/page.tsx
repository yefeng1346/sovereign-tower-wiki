import { notFound } from "next/navigation";
import { FaqView } from "@/components/site-extra";
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
  const titles = { ja: "Sovereign Tower FAQ — 対応機種、能力値、コード、更新", ko: "Sovereign Tower FAQ — 플랫폼, 스탯, 코드와 업데이트", fr: "FAQ Sovereign Tower : plateformes, stats, codes et mises à jour" } as const;
  const descriptions = { ja: "Sovereign Tower の発売版、ナイツの能力値、時間巻き戻し、対応機種、実績、更新、引き換えコードについて回答します。", ko: "Sovereign Tower 출시 버전, 나이트 스탯, 시간 되감기, 플랫폼, 업적, 업데이트와 교환 코드에 답합니다.", fr: "Réponses sur la version actuelle de Sovereign Tower, les stats des Chevaliers, le rembobinage, les plateformes, les succès et les codes." } as const;
  return pageMetadata({ locale: current, path: "/faq", title: titles[current], description: descriptions[current] });
}

export default async function LocalizedFaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><FaqView locale={locale as Locale} /></SiteShell>;
}
