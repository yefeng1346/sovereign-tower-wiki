import type { MetadataRoute } from "next";
import { keywordPages } from "@/content/keyword-pages";
import { categories, guideMeta, locales, type Locale } from "@/lib/site-data";
import { absoluteUrl, localizedPath } from "@/lib/site-seo";

const checkedAt = new Date("2026-08-12T00:00:00.000Z");

function entry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  return { url: absoluteUrl(path), lastModified: checkedAt, changeFrequency, priority };
}

function localizedEntries(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) {
  return locales.map((locale) => entry(localizedPath(locale, path), priority, changeFrequency));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPaths = [
    "/",
    "/classes",
    "/guides",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    ...categories.filter((category) => category.slug !== "quests").map((category) => `/classes/${category.slug}`),
    ...Object.keys(guideMeta).map((slug) => `/classes/${slug}`),
  ];

  const localizedEntriesList = localizedPaths.flatMap((path) => localizedEntries(path, path === "/" ? 1 : 0.7, path === "/" ? "daily" : "weekly"));
  const toolEntries = ["/tools/quest-matcher", "/tools/faction-tracker"].flatMap((path) => localizedEntries(path, 0.5, "monthly"));
  const keywordEntries = keywordPages.filter((page) => page.indexable).flatMap((page) => localizedEntries(`/guides/${page.slug}`, 0.55, "monthly"));

  return [...localizedEntriesList, ...toolEntries, ...keywordEntries];
}
