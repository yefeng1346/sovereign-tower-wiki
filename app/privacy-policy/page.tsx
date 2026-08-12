import { LegalView, SiteShell } from "@/components/site";

export const metadata = { title: "Privacy Policy — Sovereign Tower Wiki" };

export default function PrivacyPolicyPage() {
  return <SiteShell locale="en"><LegalView locale="en" kind="privacy" /></SiteShell>;
}
