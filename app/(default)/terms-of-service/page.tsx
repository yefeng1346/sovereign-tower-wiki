import type { Metadata } from "next";
import { LegalView, SiteShell } from "@/components/site";
import { pageMetadata } from "@/lib/site-seo";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/terms-of-service",
  title: "Terms of Service — Sovereign Tower Wiki",
  description: "Terms for using the independent Sovereign Tower Wiki fan site, its guides, tools and public research notes.",
  noindex: true,
});

export default function TermsOfServicePage() {
  return <SiteShell locale="en"><LegalView locale="en" kind="terms" /></SiteShell>;
}
