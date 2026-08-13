import type { Metadata } from "next";
import { KeywordIndexView, SiteShell } from "@/components/site";
import { keywordPages } from "@/content/keyword-pages";
import { pageMetadata } from "@/lib/site-seo";
import { guidesIndexSeo } from "@/lib/seo-copy";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/guides",
  title: guidesIndexSeo.en.title,
  description: guidesIndexSeo.en.description,
  keywords: keywordPages.filter((page) => page.indexable).map((page) => page.keyword),
});

export default function GuidesPage() {
  return <SiteShell locale="en"><KeywordIndexView locale="en" /></SiteShell>;
}
