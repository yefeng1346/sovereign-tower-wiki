import type { Metadata } from "next";
import { SiteShell } from "@/components/site";
import { FaqView } from "@/components/site-extra";
import { pageAlternates } from "@/lib/site-seo";

export const metadata: Metadata = {
  title: "Sovereign Tower FAQ: Platforms, Stats, Codes and Updates",
  description: "Answers to common Sovereign Tower questions about the current release, Knight stats, time rewind, platforms, achievements, updates and redemption codes.",
  alternates: pageAlternates("en", "/faq"),
};

export default function FaqPage() {
  return <SiteShell locale="en"><FaqView locale="en" /></SiteShell>;
}
