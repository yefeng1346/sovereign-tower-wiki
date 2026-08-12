import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { FactionTrackerTool } from "@/components/tools";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Sovereign Tower Faction Tracker — Save Your Run Notes",
  description: "Track observed Merchants, Mystics, Scholars, Nobles, People and Treasury relationship states locally while you play Sovereign Tower.",
  robots: { index: false, follow: true },
};

export default function FactionTrackerPage() {
  return <SiteShell locale="en"><StructuredData data={{ "@context": "https://schema.org", "@type": "WebApplication", name: "Sovereign Tower Faction Tracker", url: absoluteUrl("/tools/faction-tracker"), applicationCategory: "GameApplication", operatingSystem: "Web" }} /><section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">TOOLS<span className="eyebrow-slash">//</span><span>LOCAL SAVE</span></div><h1>Faction<br /><span className="accent-text">Tracker.</span></h1><p>Keep a private note of the relationship states you observe. Nothing is sent to a server and no official threshold is assumed.</p></div><div className="index-counter hud-frame"><strong>02</strong><span>planning tool</span><div className="counter-line" /><small>LOCAL STORAGE ONLY</small></div></div></section><section className="section"><div className="container tool-layout"><FactionTrackerTool /><aside className="tool-aside"><div className="sidebar-card hud-frame"><span className="kicker">Official context</span><strong className="evidence-sidebar-label">Six signals</strong><p>Merchants, Mystics, Scholars, Nobles, People and Treasury are named in the official store description. The complete public affinity table is not available.</p></div></aside></div></section></SiteShell>;
}

