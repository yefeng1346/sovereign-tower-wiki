import { ClassIndexView, SiteShell } from "@/components/site";
import { pageMetadata } from "@/lib/site-seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/classes",
  title: "Sovereign Tower guide archive — Knights, quests and systems",
  description: "Browse the Sovereign Tower guide archive for Knights, quests, systems, story choices, romance, updates, patch notes and verified core guides.",
});

export default function ClassesPage() {
  return <SiteShell locale="en"><ClassIndexView locale="en" /></SiteShell>;
}
