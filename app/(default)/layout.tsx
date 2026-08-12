import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@/components/google-analytics";
import { seo } from "@/lib/site-data";
import { absoluteUrl, languageAlternates, siteIdentity, siteMetadataBase, siteUrl } from "@/lib/site-seo";
import "../globals.css";

export const metadata: Metadata = {
  ...siteMetadataBase,
  title: seo.en.title,
  description: seo.en.description,
  keywords: [...seo.en.keywords],
  metadataBase: siteUrl,
  alternates: { canonical: absoluteUrl("/"), languages: languageAlternates("/") },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { title: seo.en.title, description: seo.en.description, siteName: "Sovereign Tower Wiki", type: "website", url: absoluteUrl("/"), images: [{ url: siteIdentity.logo, width: 512, height: 512, alt: "Sovereign Tower Wiki" }] },
  twitter: { card: "summary", title: seo.en.title, description: seo.en.description, images: [siteIdentity.logo] },
};

export const viewport: Viewport = {
  themeColor: "hsl(349 31% 43%)",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<GoogleAnalytics /></body></html>;
}
