declare module "*.mdx" {
  export function KeywordBody(props: { page: import("./keyword-pages").KeywordPage & { sourceLabels?: string[] }; locale?: import("@/lib/site-data").Locale }): import("react").ReactNode;
}
