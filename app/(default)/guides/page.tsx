import type { Metadata } from "next";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { keywordPages } from "@/content/keyword-pages";
import { pageMetadata } from "@/lib/site-seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/guides",
  title: "Sovereign Tower keyword guides — source-filtered index",
  description: "Browse source-filtered Sovereign Tower guides with direct answers, evidence labels, source links and Patch 1.0.8 check dates for Knights, quests, platforms and systems.",
  keywords: keywordPages.filter((page) => page.indexable).map((page) => page.keyword),
});

export default function GuidesPage() {
  return <SiteShell locale="en"><KeywordIndexView locale="en" /></SiteShell>;
}
