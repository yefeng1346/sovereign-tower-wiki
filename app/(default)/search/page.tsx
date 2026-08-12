import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { SearchView } from "@/components/site-extra";
import { pageMetadata } from "@/lib/site-seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/search",
  title: "Search Sovereign Tower guides and answers",
  description: "Search Sovereign Tower guides by Knight, quest, platform, system, romance, update and community question.",
  noindex: true,
});

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <SiteShell locale="en"><SearchView locale="en" query={q} /></SiteShell>;
}
