import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { SearchView } from "@/components/site-extra";
import { pageAlternates } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Search Sovereign Tower guides and answers",
  description: "Search Sovereign Tower guides by Knight, quest, platform, system, romance, update and community question.",
  robots: { index: false, follow: true },
  alternates: pageAlternates("en", "/search"),
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <SiteShell locale="en"><SearchView locale="en" query={q} /></SiteShell>;
}
