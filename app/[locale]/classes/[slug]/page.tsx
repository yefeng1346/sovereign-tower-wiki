import { notFound } from "next/navigation";
import { ArticleView, CategoryDetailView, SiteShell } from "@/components/site";
import AchievementsGuide from "../../../../content/guides/achievements.mdx";
import BeginnerGuide from "../../../../content/guides/beginner-guide.mdx";
import PatchNotes from "../../../../content/guides/patch-1-0-8.mdx";
import { categories, guideMeta, locales, type Locale } from "@/lib/site-data";
import SystemRequirements from "../../../../content/guides/system-requirements.mdx";
import QuestMatchingGuide from "../../../../content/guides/quest-matching.mdx";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site-seo";
import { LocalizedGuideContent } from "../../../../content/guides/localized-guides";
import { localizedCategory, localizedGuideMeta } from "@/lib/localized-content";

export function generateStaticParams() {
  const core = ["quest-matching", "beginner-guide", "patch-1-0-8", "achievements", "system-requirements"];
  return locales.filter((locale) => locale !== "en").flatMap((locale) => [...core.map((slug) => ({ locale, slug })), ...categories.filter((category) => category.slug !== "quests").map((category) => ({ locale, slug: category.slug }))]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = guideMeta[slug as keyof typeof guideMeta];
  const category = localizedCategory(locale as Locale, slug);
  if (guide) {
    const localizedGuide = localizedGuideMeta(locale as Locale, slug as keyof typeof guideMeta);
    return pageMetadata({ locale: locale as Locale, path: `/classes/${slug}`, title: `${localizedGuide.title} — Sovereign Tower Wiki`, description: localizedGuide.description, type: "article" });
  }
  return category ? pageMetadata({ locale: locale as Locale, path: `/classes/${slug}`, title: `${category.title} — Sovereign Tower Wiki`, description: category.description, type: "article" }) : {};
}

export default async function LocalizedArticle({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const guides = { "quest-matching": QuestMatchingGuide, "beginner-guide": BeginnerGuide, "patch-1-0-8": PatchNotes, achievements: AchievementsGuide, "system-requirements": SystemRequirements } as const;
  if (!locales.includes(locale as Locale) || locale === "en" || (!(slug in guides) && !categories.filter((category) => category.slug !== "quests").some((category) => category.slug === slug))) notFound();
  if (slug in guides) {
    const content = locale === "en" ? guides[slug as keyof typeof guides] : (() => function LocalizedContent() { return <LocalizedGuideContent locale={locale as Exclude<Locale, "en">} slug={slug} />; })();
    return <SiteShell locale={locale as Locale}><ArticleView locale={locale as Locale} slug={slug as keyof typeof guideMeta} Content={content} /></SiteShell>;
  }
  return <SiteShell locale={locale as Locale}><CategoryDetailView locale={locale as Locale} slug={slug} /></SiteShell>;
}
