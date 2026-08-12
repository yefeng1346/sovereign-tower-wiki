import { LegalView, SiteShell } from "@/components/site";

export const metadata = { title: "Terms of Service — Sovereign Tower Wiki" };

export default function TermsOfServicePage() {
  return <SiteShell locale="en"><LegalView locale="en" kind="terms" /></SiteShell>;
}
