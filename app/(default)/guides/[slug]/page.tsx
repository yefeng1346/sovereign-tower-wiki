import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordArticleView, SiteShell } from "@/components/site";
import { keywordPageMap, keywordPages } from "@/content/keyword-pages";
import { pageMetadata } from "@/lib/site-seo";

export function generateStaticParams() {
  return keywordPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = keywordPageMap[slug];
  if (!page) return {};
  return pageMetadata({ locale: "en", path: `/guides/${page.slug}`, title: page.title, description: page.description, keywords: [page.keyword], type: "article", noindex: !page.indexable });
}

export default async function KeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = keywordPageMap[slug];
  if (!page) notFound();
  return <SiteShell locale="en"><KeywordArticleView locale="en" page={page} /></SiteShell>;
}
