import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { QuestMatcherTool } from "@/components/tools";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Sovereign Tower Quest Matcher — Compare Knight Stats",
  description: "Use the Sovereign Tower Quest Matcher to compare an in-game quest requirement with a Knight's visible stat without relying on invented thresholds.",
  robots: { index: false, follow: true },
};

export default function QuestMatcherPage() {
  return <SiteShell locale="en"><StructuredData data={{ "@context": "https://schema.org", "@type": "WebApplication", name: "Sovereign Tower Quest Matcher", url: absoluteUrl("/tools/quest-matcher"), applicationCategory: "GameApplication", operatingSystem: "Web" }} /><section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">TOOLS<span className="eyebrow-slash">//</span><span>EVIDENCE-AWARE</span></div><h1>Quest<br /><span className="accent-text">Matcher.</span></h1><p>Compare what the current game screen shows. The tool keeps the calculation transparent and does not invent a universal quest formula.</p></div><div className="index-counter hud-frame"><strong>01</strong><span>planning tool</span><div className="counter-line" /><small>NO GUARANTEED WIN</small></div></div></section><section className="section"><div className="container tool-layout"><QuestMatcherTool /><aside className="tool-aside"><div className="sidebar-card hud-frame"><span className="kicker">Evidence rule</span><strong className="evidence-sidebar-label">Use current UI values</strong><p>Patch 1.0.8 changed quest scoring. Enter the requirement and stat that you can see in your own build, then review traits and equipment separately.</p></div></aside></div></section></SiteShell>;
}

