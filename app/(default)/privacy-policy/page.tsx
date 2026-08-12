import type { Metadata } from "next";
import { LegalView, SiteShell } from "@/components/site";
import { pageMetadata } from "@/lib/site-seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/privacy-policy",
  title: "Privacy Policy — Sovereign Tower Wiki",
  description: "Privacy information for the independent Sovereign Tower Wiki fan site and its public research scope.",
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return <SiteShell locale="en"><LegalView locale="en" kind="privacy" /></SiteShell>;
}
