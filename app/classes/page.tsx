import { ClassIndexView, SiteShell } from "@/components/site";
import { pageAlternates } from "@/lib/site-seo";

export const metadata = {
  title: "Sovereign Tower guide archive",
  description: "Browse Sovereign Tower systems, Knights, quests, choices, romance, updates and verified core guide files.",
  alternates: pageAlternates("en", "/classes"),
};

export default function ClassesPage() {
  return <SiteShell locale="en"><ClassIndexView locale="en" /></SiteShell>;
}
