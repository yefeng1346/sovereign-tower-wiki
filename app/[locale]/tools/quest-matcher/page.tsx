import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site";
import { QuestMatcherTool } from "@/components/tools";
import { StructuredData } from "@/components/structured-data";
import { locales, type Locale } from "@/lib/site-data";
import { absoluteUrl, localizedPath, pageMetadata } from "@/lib/site-seo";
import { toolCopy } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale in toolCopy ? toolCopy[locale as Locale] : toolCopy.en;
  return pageMetadata({ locale: locale as Locale, path: "/tools/quest-matcher", title: `Sovereign Tower ${current.questMatcher} — ${current.comparison}`, description: current.matcherPageDescription, noindex: true });
}

export default async function LocalizedQuestMatcherPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  const current = toolCopy[locale as Locale];
  return <SiteShell locale={locale as Locale}><StructuredData data={{ "@context": "https://schema.org", "@type": "WebApplication", name: `Sovereign Tower ${current.questMatcher}`, url: absoluteUrl(localizedPath(locale as Locale, "/tools/quest-matcher")), applicationCategory: "GameApplication", operatingSystem: "Web" }} /><section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{current.eyebrow}<span className="eyebrow-slash">//</span><span>{current.evidenceAware}</span></div><h1>{current.questMatcher}<br /><span className="accent-text">{current.comparison}.</span></h1><p>{current.matcherPageDescription}</p></div><div className="index-counter hud-frame"><strong>01</strong><span>{current.planningTool}</span><div className="counter-line" /><small>{current.noGuaranteedWin}</small></div></div></section><section className="section"><div className="container tool-layout"><QuestMatcherTool locale={locale as Locale} /><aside className="tool-aside"><div className="sidebar-card hud-frame"><span className="kicker">{current.evidenceRule}</span><strong className="evidence-sidebar-label">{current.useCurrentValues}</strong><p>{current.matcherPageDescription}</p></div></aside></div></section></SiteShell>;
}
