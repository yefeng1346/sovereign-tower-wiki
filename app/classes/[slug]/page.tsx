import { notFound } from "next/navigation";
import { ArticleView, CategoryDetailView, SiteShell } from "@/components/site";
import BeginnerGuide from "../../../content/guides/beginner-guide.mdx";
import AchievementsGuide from "../../../content/guides/achievements.mdx";
import PatchNotes from "../../../content/guides/patch-1-0-8.mdx";
import { categories, guideMeta } from "@/lib/site-data";
import SystemRequirements from "../../../content/guides/system-requirements.mdx";
import QuestMatchingGuide from "../../../content/guides/quest-matching.mdx";
import { pageAlternates } from "@/lib/site-seo";

export function generateStaticParams() {
  return [{ slug: "quest-matching" }, { slug: "beginner-guide" }, { slug: "patch-1-0-8" }, { slug: "achievements" }, { slug: "system-requirements" }, ...categories.filter((category) => category.slug !== "quests").map((category) => ({ slug: category.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideMeta[slug as keyof typeof guideMeta];
  const category = categories.find((item) => item.slug === slug);
  if (guide) return { title: `${guide.title} — Sovereign Tower Wiki`, description: guide.description, alternates: pageAlternates("en", `/classes/${slug}`) };
  return category ? { title: `${category.title} — Sovereign Tower Wiki`, description: category.description, alternates: pageAlternates("en", `/classes/${slug}`) } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guides = { "quest-matching": QuestMatchingGuide, "beginner-guide": BeginnerGuide, "patch-1-0-8": PatchNotes, achievements: AchievementsGuide, "system-requirements": SystemRequirements } as const;
  if (slug in guides) return <SiteShell locale="en"><ArticleView locale="en" slug={slug as keyof typeof guideMeta} Content={guides[slug as keyof typeof guides]} /></SiteShell>;
  if (!categories.some((category) => category.slug === slug)) notFound();
  return <SiteShell locale="en"><CategoryDetailView locale="en" slug={slug} /></SiteShell>;
}
