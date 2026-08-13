import { officialLinks } from "@/lib/site-data";
import { researchSnapshot } from "@/lib/research-snapshot";
import { absoluteUrl, siteIdentity, siteUrl } from "@/lib/site-seo";

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function SiteStructuredData() {
  return <>
    <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Sovereign Tower Wiki",
      url: siteUrl.toString(),
      description: "An independent, evidence-labelled guide to Sovereign Tower.",
      potentialAction: { "@type": "SearchAction", target: `${siteUrl.toString().replace(/\/$/, "")}/search?q={search_term_string}`, "query-input": "required name=search_term_string" },
    }} />
    <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sovereign Tower Wiki",
      url: siteUrl.toString(),
      logo: siteIdentity.logo,
      sameAs: [officialLinks.steam, officialLinks.discord, officialLinks.youtube],
    }} />
  </>;
}

export function ArticleStructuredData({
  title,
  description,
  path,
  dateModified = researchSnapshot.isoDate,
  datePublished,
  pageType = "Article",
  breadcrumb,
}: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
  pageType?: "Article" | "WebPage";
  breadcrumb?: string;
}) {
  const articleUrl = absoluteUrl(path);
  return <>
    <StructuredData data={{
      "@context": "https://schema.org",
      "@type": pageType,
      headline: title,
      description,
      url: articleUrl,
      dateModified,
      ...(datePublished ? { datePublished } : {}),
      author: { "@type": "Organization", name: siteIdentity.name, url: siteUrl.toString() },
      publisher: { "@type": "Organization", name: siteIdentity.name, logo: { "@type": "ImageObject", url: siteIdentity.logo } },
      isPartOf: { "@type": "WebSite", name: siteIdentity.name, url: siteUrl.toString() },
    }} />
    <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: breadcrumb ?? "Guides", item: absoluteUrl("/guides") },
        { "@type": "ListItem", position: 3, name: title, item: articleUrl },
      ],
    }} />
  </>;
}
