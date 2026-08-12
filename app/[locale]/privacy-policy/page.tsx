import { notFound } from "next/navigation";
import { LegalView, SiteShell } from "@/components/site";
import { locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export default async function LocalizedPrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale) || locale === "en") notFound();
  return <SiteShell locale={locale as Locale}><LegalView locale={locale as Locale} kind="privacy" /></SiteShell>;
}
