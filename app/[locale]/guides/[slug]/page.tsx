import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordArticleView, SiteShell } from "@/components/site";
import { keywordPageMap, keywordPages } from "@/content/keyword-pages";
import { localizedKeywordPage } from "@/content/localized-keyword-pages";
import { locales, type Locale } from "@/lib/site-data";
import { absoluteUrl, localizedPath, pageAlternates } from "@/lib/site-seo";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").flatMap((locale) => keywordPages.map((page) => ({ locale, slug: page.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = keywordPageMap[slug];
  if (!page) return {};
  const localizedPage = localizedKeywordPage(locale as Locale, page);
  const currentLocale = locale as Locale;
  const currentPath = localizedPath(currentLocale, `/guides/${page.slug}`);
  const metadata: Metadata = {
    title: localizedPage.title,
    description: localizedPage.description,
    keywords: [localizedPage.keyword, page.keyword],
    alternates: pageAlternates(currentLocale, `/guides/${page.slug}`),
    openGraph: {
      title: localizedPage.title,
      description: localizedPage.description,
      url: absoluteUrl(currentPath),
      locale: currentLocale,
      type: "article",
    },
    twitter: { card: "summary", title: localizedPage.title, description: localizedPage.description },
  };
  return page.indexable ? metadata : { ...metadata, robots: { index: false, follow: true } };
}

export default async function LocalizedKeywordPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const page = keywordPageMap[slug];
  if (!page || !locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><KeywordArticleView locale={locale as Locale} page={page} /></SiteShell>;
}
