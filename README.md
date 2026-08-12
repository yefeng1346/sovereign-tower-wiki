# Sovereign Tower Wiki

Multilingual Next.js guide site for Sovereign Tower, with English, Japanese, Korean and French routes.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
npm run start
```

## Site structure

- `/` — English home page
- `/ja`, `/ko`, `/fr` — localized home pages
- `/classes` — guide navigation and category index
- `/guides` — keyword-page index
- `/guides/[slug]` — English keyword article
- `/ja/guides/[slug]`, `/ko/guides/[slug]`, `/fr/guides/[slug]` — localized keyword articles
- `/tools/quest-matcher` — quest matching utility

Article copy is maintained in `content/keyword-pages.ts` and the localized terminology/content layers in `content/official-terms.ts` and `content/localized-keyword-pages.ts`. Official localized game terms are preferred where available; explanatory prose is translated around those terms.

Set `NEXT_PUBLIC_SITE_URL` before deployment so canonical URLs, hreflang links and sitemap entries use the production domain.
