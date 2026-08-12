import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { FaqView } from "@/components/site-extra";
import { pageMetadata } from "@/lib/site-seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/faq",
  title: "Sovereign Tower FAQ: Platforms, Stats, Codes and Updates",
  description: "Answers to common Sovereign Tower questions about the current release, Knight stats, time rewind, platforms, achievements, updates and redemption codes.",
});

export default function FaqPage() {
  return <SiteShell locale="en"><FaqView locale="en" /></SiteShell>;
}
