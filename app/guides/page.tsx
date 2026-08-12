import type { Metadata } from "next";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { keywordPages } from "@/content/keyword-pages";
import { pageAlternates } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Sovereign Tower keyword guides — source-filtered index",
  description: "Browse source-filtered Sovereign Tower guide pages with direct answers, evidence labels and Patch 1.0.8 check dates.",
  keywords: keywordPages.map((page) => page.keyword),
  alternates: pageAlternates("en", "/guides"),
};

export default function GuidesPage() {
  return <SiteShell locale="en"><KeywordIndexView locale="en" /></SiteShell>;
}
