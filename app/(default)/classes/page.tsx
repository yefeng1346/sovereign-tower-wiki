import { ClassIndexView, SiteShell } from "@/components/site";
import { pageMetadata } from "@/lib/site-seo";
import { classesIndexSeo } from "@/lib/seo-copy";

export const metadata = pageMetadata({
  locale: "en",
  path: "/classes",
  title: classesIndexSeo.en.title,
  description: classesIndexSeo.en.description,
});

export default function ClassesPage() {
  return <SiteShell locale="en"><ClassIndexView locale="en" /></SiteShell>;
}
