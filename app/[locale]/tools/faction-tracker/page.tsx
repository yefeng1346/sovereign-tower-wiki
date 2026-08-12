import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site";
import { FactionTrackerTool } from "@/components/tools";
import { StructuredData } from "@/components/structured-data";
import { locales, type Locale } from "@/lib/site-data";
import { absoluteUrl, pageAlternates, localizedPath } from "@/lib/site-seo";
import { toolCopy } from "@/lib/localized-content";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const current = locale in toolCopy ? toolCopy[locale as Locale] : toolCopy.en;
  return { title: `Sovereign Tower ${current.factionTracker} — ${current.localNotes}`, description: current.trackerPageDescription, robots: { index: false, follow: true }, alternates: pageAlternates(locale as Locale, "/tools/faction-tracker") };
}

export default async function LocalizedFactionTrackerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  const current = toolCopy[locale as Locale];
  return <SiteShell locale={locale as Locale}><StructuredData data={{ "@context": "https://schema.org", "@type": "WebApplication", name: `Sovereign Tower ${current.factionTracker}`, url: absoluteUrl(localizedPath(locale as Locale, "/tools/faction-tracker")), applicationCategory: "GameApplication", operatingSystem: "Web" }} /><section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{current.eyebrow}<span className="eyebrow-slash">//</span><span>{current.localSave}</span></div><h1>{current.factionTracker}<br /><span className="accent-text">{current.localNotes}.</span></h1><p>{current.trackerPageDescription}</p></div><div className="index-counter hud-frame"><strong>02</strong><span>{current.planningTool}</span><div className="counter-line" /><small>{current.localStorageOnly}</small></div></div></section><section className="section"><div className="container tool-layout"><FactionTrackerTool locale={locale as Locale} /><aside className="tool-aside"><div className="sidebar-card hud-frame"><span className="kicker">{current.evidenceRule}</span><strong className="evidence-sidebar-label">{current.sixSignals}</strong><p>{current.sixSignalsDescription}</p></div></aside></div></section></SiteShell>;
}
