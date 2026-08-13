import Link from "next/link";
import type { ReactNode } from "react";
import { ArticleStructuredData, SiteStructuredData } from "@/components/structured-data";
import { keywordPages, relatedKeywordPages, researchSnapshot, type KeywordPage } from "@/content/keyword-pages";
import { KeywordBody } from "@/content/keyword-body.mdx";
import { localizedKeywordPage } from "@/content/localized-keyword-pages";
import {
  categories,
  copy,
  coreGuideOrder,
  footerLinks,
  gameStats,
  journeyCards,
  localeLabels,
  localeNames,
  locales,
  officialLinks,
  sidebarCodes,
  spotlight,
  type Locale,
  guideMeta,
} from "@/lib/site-data";
import { localizedCategory, localizedCategoryDetail, localizedFooterLinks, localizedGuideMeta, localizedJourney, localizedSpotlight, localizedStats, ui } from "@/lib/localized-content";
import { localizedPath } from "@/lib/site-seo";
import { getClassSeo } from "@/lib/seo-copy";
import { getLegalCopy } from "@/content/legal-copy";

function hrefFor(locale: Locale, href: string) {
  if (href.startsWith("http")) return href;
  return locale === "en" ? href : `/${locale}${href}`;
}

export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    back: <><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    crosshair: <><circle cx="12" cy="12" r="8" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
    sliders: <><path d="M4 6h16M4 12h16M4 18h16" /><circle cx="8" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="10" cy="18" r="2" /></>,
    heart: <path d="M20 8.5c0 5-8 10-8 10s-8-5-8-10A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 2.5Z" />,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M4 19h16" /></>,
    radio: <><circle cx="12" cy="12" r="2" /><path d="M5.5 5.5a9.2 9.2 0 0 0 0 13M18.5 5.5a9.2 9.2 0 0 1 0 13" /><path d="M3 3a13 13 0 0 0 0 18M21 3a13 13 0 0 1 0 18" /></>,
    external: <><path d="M14 4h6v6" /><path d="m20 4-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };
  return <svg {...common}>{paths[name] ?? paths.crosshair}</svg>;
}

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const l = ui[locale];
  const nav = [
    { label: t.nav.knights, href: "/classes/knights" },
    { label: t.nav.quests, href: "/classes/quest-matching" },
    { label: t.nav.systems, href: "/classes/systems" },
    { label: t.nav.choices, href: "/classes/story" },
    { label: t.nav.guides, href: "/guides" },
    { label: t.nav.news, href: "/classes/news" },
    { label: t.nav.faq, href: "/faq" },
  ];

  return (
    <header className="site-header">
      <div className="status-bar">
        <div className="container status-inner">
          <div className="status-left"><span className="live-dot" /> <span>{t.signal}</span><span className="status-divider">//</span><span className="hide-mobile">{l.roundTableOps} · PATCH 1.0.8</span></div>
          <div className="status-right"><span>{t.liveBuild}</span><span className="status-divider">//</span><span>{locale === "en" ? t.unofficial : ui[locale].fanMade}</span></div>
        </div>
      </div>
      <div className="nav-bar container">
        <Link className="brand" href={hrefFor(locale, "/")} aria-label={l.homeAria}>
          <span className="brand-mark"><img src="/android-chrome-512x512.png" alt={l.logoAlt} /></span>
          <span className="brand-copy"><span className="brand-name">Sovereign Tower</span><span className="brand-sub">{l.brandSub}</span></span>
        </Link>
        <nav className="desktop-nav" aria-label={l.primaryNavigation}>
          {nav.map((item) => <Link key={item.href + item.label} href={hrefFor(locale, item.href)}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="search-link" href={hrefFor(locale, "/search")}><Icon name="search" size={15} /><span className="hide-mobile">{t.search}</span></Link>
          <details className="language-menu">
            <summary>{localeNames[locale]}</summary>
            <div className="language-popover">
              <span className="popover-label">{t.language}</span>
              {locales.map((item) => <Link key={item} href={item === "en" ? "/" : `/${item}`}>{localeLabels[item]}</Link>)}
            </div>
          </details>
          <details className="mobile-menu">
            <summary aria-label={t.menu}><Icon name="menu" size={18} /></summary>
            <div className="mobile-nav">
              {nav.map((item) => <Link key={item.href + item.label} href={hrefFor(locale, item.href)}>{item.label}</Link>)}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const l = ui[locale];
  const links = localizedFooterLinks(locale);
  return (
    <footer className="site-footer">
      <div className="stencil-line" />
      <div className="container footer-grid">
        <div className="footer-about"><div className="brand footer-brand"><span className="brand-mark small"><img src="/android-chrome-512x512.png" alt={l.logoAlt} /></span><span className="brand-copy"><span className="brand-name">Sovereign Tower</span><span className="brand-sub">{l.brandSub}</span></span></div><p>{t.footerAbout}</p><p className="footer-disclaimer">{t.footerDisclaimer}</p></div>
        <div><h4>{t.codex}</h4><ul>{links.codex.map((item) => <li key={item.href}><Link href={hrefFor(locale, item.href)}>{item.label}</Link></li>)}</ul></div>
        <div><h4>{t.players}</h4><ul>{links.players.map((item) => <li key={item.href}><Link href={hrefFor(locale, item.href)}>{item.label}{item.href.startsWith("http") && <Icon name="external" size={11} />}</Link></li>)}</ul></div>
        <div><h4>{t.official}</h4><ul>{links.official.map((item) => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer">{item.label}<Icon name="external" size={11} /></a></li>)}</ul></div>
        <div className="footer-build"><span className="footer-kicker">{l.releaseDate}</span><strong>Aug 6, 2026</strong><span>{l.platformLine}</span><span>{l.patchLine}</span><a className="footer-steam" href={officialLinks.steam} target="_blank" rel="noreferrer">{t.steam} <Icon name="external" size={12} /></a></div>
      </div>
      <div className="footer-bottom"><div className="container"><span>{l.copyright} · {l.fanMade}</span><span><Link href={hrefFor(locale, "/privacy-policy")}>{t.privacyPolicy}</Link> · <Link href={hrefFor(locale, "/terms-of-service")}>{t.termsOfService}</Link></span></div></div>
    </footer>
  );
}

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><SiteStructuredData /><Header locale={locale} /><main lang={locale} className="site-main">{children}</main><Footer locale={locale} /></>;
}

export function LegalView({ locale, kind }: { locale: Locale; kind: "privacy" | "terms" }) {
  const t = copy[locale];
  const l = ui[locale];
  const title = kind === "privacy" ? t.privacyPolicy : t.termsOfService;
  const document = getLegalCopy(locale, kind);
  return <section className="legal-page section-border"><div className="container legal-card hud-frame">
    <Link className="back-link" href={hrefFor(locale, "/")}><Icon name="back" size={14} />{t.legalBack}</Link>
    <div className="eyebrow">Sovereign Tower Wiki<span className="eyebrow-slash">//</span>{title}</div>
    <h1>{title}</h1>
    <p className="legal-intro">{document.intro}</p>
    <p className="legal-meta">{document.updated} · {document.notice}</p>
    <div className="legal-sections">{document.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}</div>
    <p className="legal-note">{l.scopeLabel}: {l.scopeDescription}</p>
  </div></section>;
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const l = ui[locale];
  const stats = localizedStats(locale, gameStats);
  return <>
    <section className="hero-section section-border">
      <div className="hero-orb" /><div className="hero-scan" />
      <div className="container hero-grid">
        <div className="hero-copy reveal-1">
          <div className="eyebrow"><span className="pulse-icon"><Icon name="radio" size={14} /></span>{t.heroEyebrow}<span className="eyebrow-slash">//</span><span>{l.steamSource}</span></div>
          <h1>{t.heroTitleA}<br /><span>{t.heroTitleB}</span></h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="hero-notice">{l.launchNotice}</div>
          <div className="cta-row"><Link className="btn-tactical" href={hrefFor(locale, "/classes/beginner-guide")}>{t.primaryCta}<Icon name="arrow" size={16} /></Link><Link className="btn-ghost" href={hrefFor(locale, "/classes/knights")}>{t.secondaryCta}</Link><Link className="btn-ghost" href={hrefFor(locale, "/classes/story")}>{t.tertiaryCta}</Link></div>
          <a className="hero-trailer" href={officialLinks.youtube} target="_blank" rel="noreferrer"><Icon name="radio" size={14} />{t.videoLabel}<Icon name="external" size={12} /></a>
          <div className="stats-grid">{t.stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </div>
        <div className="hero-panel reveal-2 hud-frame"><div className="panel-top"><span>{l.panelMeta} · PATCH 1.0.8</span><span className="live-dot" /></div><div className="spotlight-list">{spotlight.map((item, index) => { const spotlightCopy = localizedSpotlight(locale, index, item); const statusLabel = item.status === "LIVE" ? l.liveStatus : l.checkStatus; return <Link key={item.title} className="spotlight-row" href={hrefFor(locale, item.href)}><span className={`status-chip status-${item.status}`}>{statusLabel}</span><span className="spotlight-copy"><small>{spotlightCopy.meta}</small><strong>{spotlightCopy.title}</strong></span><Icon name="crosshair" size={15} /></Link>; })}</div><Link className="panel-link" href={hrefFor(locale, "/classes")}>{t.fullCodex}<Icon name="arrow" size={14} /></Link></div>
      </div>
    </section>

    <section className="section section-border">
      <div className="container"><div className="section-heading"><div><span className="kicker">{t.startEyebrow}</span><h2>{t.startTitle}</h2><p>{t.startDescription}</p></div><Link className="text-link" href={hrefFor(locale, "/classes")}>{t.allCoordinates}<Icon name="arrow" size={14} /></Link></div>
        <div className="journey-grid start-grid">{journeyCards.map((card, index) => { const journey = localizedJourney(locale, index, card); return <Link className="journey-card" key={card.number} href={hrefFor(locale, card.href)}><span className="journey-number">{card.number}</span><div><span className="journey-code">{journey.title}</span><h3>{journey.title}</h3><p>{journey.description}</p><span className="read-link">{t.readBrief}<Icon name="arrow" size={13} /></span></div></Link>; })}</div>
      </div>
    </section>

    <section className="section section-border darker-section"><div className="container"><div className="section-heading"><div><span className="kicker">{l.fieldManual}</span><h2>{l.confirmedSystems}</h2><p>{l.confirmedSystemsDescription}</p></div></div><div className="manual-grid">{categories.map((baseCategory) => { const category = localizedCategory(locale, baseCategory.slug) ?? baseCategory; return <Link className="manual-card hud-frame" key={category.slug} href={hrefFor(locale, `/classes/${category.slug === "quests" ? "quest-matching" : category.slug}`)}><div className="manual-card-top"><span className="manual-code">{category.code}</span><Icon name={category.icon} size={19} /></div><div className="manual-card-title">{category.title}</div><p>{category.description}</p><div className="manual-card-bottom"><span>{category.tag}</span><span>{l.sourceLabelled} <Icon name="arrow" size={12} /></span></div></Link>; })}</div></div></section>

    <section className="section section-border"><div className="container split-section about-section"><div><span className="kicker">{t.aboutEyebrow}</span><h2>{t.aboutTitle}</h2><div className="copy-block"><p>{t.aboutParagraphOne}</p><p>{t.aboutParagraphTwo}</p></div><Link className="text-link" href={hrefFor(locale, "/classes/beginner-guide")}>{t.aboutCta}<Icon name="arrow" size={14} /></Link></div><div className="about-stats">{stats.map((stat) => <div className="about-stat" key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}</div></div></section>

    <section className="section section-border codes-section"><div className="container"><div className="hud-frame codes-frame"><div><span className="kicker">{t.codesEyebrow}</span><h2>{t.codesTitle}</h2><p>{t.codesDescription}</p></div><div className="code-status-list">{sidebarCodes.map((code, index) => <div className="code-status" key={`${code}-${index}`}><span>{l.codeLabel} 0{index + 1}</span><strong>{code === "暂无" ? l.emptyCode : code}</strong></div>)}<small>{t.codesSource}</small></div></div></div></section>

    <section className="section final-cta"><div className="container"><div className="hud-frame cta-frame"><div className="cta-glow" /><div><span className="kicker">{t.finalEyebrow}</span><h2>{t.finalTitle}</h2><p>{t.finalDescription}</p></div><div className="cta-actions"><Link className="btn-tactical" href={hrefFor(locale, "/classes")}>{t.finalPrimary}<Icon name="arrow" size={16} /></Link><a className="btn-ghost" href={officialLinks.steam} target="_blank" rel="noreferrer">{t.finalSecondary}<Icon name="external" size={13} /></a></div></div></div></section>
  </>;
}

export function ClassIndexView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const l = ui[locale];
  return <>
    <section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{t.archiveEyebrow}<span className="eyebrow-slash">//</span><span>{l.patchDate}</span></div><h1>{t.archiveTitle}</h1><p>{t.archiveDescription}</p></div><div className="index-counter hud-frame"><strong>1.0.8</strong><span>{l.latestVisiblePatch}</span><div className="counter-line" /><small>{l.publicBuildChecked}</small></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="kicker">{t.dossier}</span><h2>{t.browseTitle}</h2><p>{t.browseDescription}</p></div></div><div className="archive-grid">{categories.map((baseCategory, index) => { const category = localizedCategory(locale, baseCategory.slug) ?? baseCategory; return <Link key={category.slug} href={hrefFor(locale, `/classes/${category.slug === "quests" ? "quest-matching" : category.slug}`)} className="archive-card hud-frame"><div className="archive-card-head"><span className="archive-number">0{index + 1}</span><span className="archive-code">{category.code}</span><Icon name={category.icon} size={20} /></div><h3>{category.title}</h3><p>{category.description}</p><div className="archive-card-foot"><span>{category.tag}</span><span>{l.sourceLabelled}</span><Icon name="arrow" size={14} /></div></Link>; })}</div></div></section>
    <section className="section section-border darker-section"><div className="container"><div className="section-heading"><div><span className="kicker">{l.coreFiles}</span><h2>{l.verifiedGuides}</h2><p>{l.verifiedGuidesDescription}</p></div></div><div className="archive-grid core-guide-grid">{coreGuideOrder.map((slug, index) => { const guide = localizedGuideMeta(locale, slug); return <Link key={slug} href={hrefFor(locale, `/classes/${slug}`)} className="archive-card hud-frame"><div className="archive-card-head"><span className="archive-number">0{index + 1}</span><span className="archive-code">{guide.tag}</span><Icon name="book" size={20} /></div><h3>{guide.title}</h3><p>{guide.description}</p><div className="archive-card-foot"><span>{guide.readTime}</span><span>{l.openFile} <Icon name="arrow" size={14} /></span></div></Link>; })}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="kicker">{l.playerTools}</span><h2>{l.playerToolsTitle}</h2><p>{l.playerToolsDescription}</p></div></div><div className="archive-grid"><Link href={hrefFor(locale, "/tools/quest-matcher")} className="archive-card hud-frame"><div className="archive-card-head"><span className="archive-number">01</span><span className="archive-code">MATCHER</span><Icon name="crosshair" size={20} /></div><h3>{l.questMatcher}</h3><p>{l.questMatcherDescription}</p><div className="archive-card-foot"><span>{l.playerInput}</span><span>{l.openTool} <Icon name="arrow" size={14} /></span></div></Link><Link href={hrefFor(locale, "/tools/faction-tracker")} className="archive-card hud-frame"><div className="archive-card-head"><span className="archive-number">02</span><span className="archive-code">LOCAL NOTES</span><Icon name="sliders" size={20} /></div><h3>{l.factionTracker}</h3><p>{l.factionTrackerDescription}</p><div className="archive-card-foot"><span>{l.noServerData}</span><span>{l.openTool} <Icon name="arrow" size={14} /></span></div></Link></div></div></section>
  </>;
}

export function KeywordIndexView({ locale }: { locale: Locale }) {
  const l = ui[locale];
  const localizedPages = keywordPages.filter((page) => page.indexable).map((page) => localizedKeywordPage(locale, page));
  const groups = [...new Set(localizedPages.map((page) => page.category))];
  return <>
    <section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{l.keywordIndex}<span className="eyebrow-slash">//</span><span>{l.researchedSourceFiltered}</span></div><h1>{l.oneSearch}<br /><span className="accent-text">{l.oneFieldPage}</span></h1><p>{l.keywordIndexDescription}</p></div><div className="index-counter hud-frame"><strong>{localizedPages.length}</strong><span>{l.keywordPages}</span><div className="counter-line" /><small>{l.officialCommunity}</small></div></div></section>
    <section className="section"><div className="container keyword-index">
      {groups.map((group) => <section className="keyword-group" key={group}><div className="section-heading"><div><span className="kicker">{group}</span><h2>{group} {l.querySuffix}</h2></div><span className="keyword-group-count">{localizedPages.filter((page) => page.category === group).length} {l.pages}</span></div><div className="keyword-index-grid">{localizedPages.filter((page) => page.category === group).map((page) => <Link className="keyword-index-card hud-frame" href={hrefFor(locale, `/guides/${page.slug}`)} key={page.slug}><div className="keyword-card-top"><span>{l.keywordPage}</span><Icon name="arrow" size={14} /></div><h3>{page.keyword}</h3><p>{page.answer}</p><div className="keyword-card-foot"><span>{page.sources.length} {l.sources}</span><span>{l.viewFieldPage} <Icon name="arrow" size={12} /></span></div></Link>)}</div></section>)}
    </div></section>
  </>;
}

export function KeywordArticleView({ locale, page }: { locale: Locale; page: KeywordPage }) {
  const t = copy[locale];
  const l = ui[locale];
  const sourcePage = page;
  page = localizedKeywordPage(locale, sourcePage);
  const related = relatedKeywordPages(sourcePage).map((candidate) => localizedKeywordPage(locale, candidate));
  return <>
    <ArticleStructuredData title={page.title} description={page.description} path={localizedPath(locale, `/guides/${page.slug}`)} breadcrumb={page.category} />
    <section className="article-hero keyword-hero section-border"><div className="container"><Link className="back-link" href={hrefFor(locale, "/guides")}><Icon name="back" size={14} />{l.backToKeywordIndex}</Link><div className="article-grid"><div><div className="eyebrow">{page.category}<span className="eyebrow-slash">//</span>{l.keywordPage}</div><h1>{page.keyword}</h1><p className="article-lede">{page.answer}</p><div className="article-meta"><span><Icon name="book" size={14} /> {page.sources.length} {l.sourceLinks}</span><span><Icon name="radio" size={14} /> {l.lastChecked} · {researchSnapshot.compact}</span><span className={`status-chip evidence-chip evidence-${page.evidence}`}>{page.evidenceLabel}</span></div></div><aside className="article-stamp hud-frame"><span>{l.keywordPage}</span><strong>{l.fieldPage}</strong><small>{l.factsFirst}<br />{l.noFabricatedCodes}</small></aside></div></div></section>
    <section className="section article-section"><div className="container article-layout"><article className="mdx-content keyword-content"><KeywordBody page={page} locale={locale} /></article><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{l.evidenceStatus}</span><strong className="evidence-sidebar-label">{page.evidenceLabel}</strong><p>{page.evidenceDescription}</p><small>{l.lastChecked} · {page.lastChecked}</small></div><div className="sidebar-card code-sidebar hud-frame"><span className="kicker">{t.codes}</span><p>{l.noReliableCodes}</p>{sidebarCodes.map((code, index) => <div className="code-status" key={`${code}-${index}`}><span>{l.codeLabel} 0{index + 1}</span><strong>{code}</strong></div>)}</div><div className="sidebar-card next-card"><span className="kicker">{t.nextCoordinates}</span>{related.map((item) => <Link key={item.slug} href={hrefFor(locale, `/guides/${item.slug}`)}>{item.keyword} <Icon name="arrow" size={13} /></Link>)}</div></aside></div></section>
  </>;
}

export function CategoryDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = copy[locale];
  const l = ui[locale];
  const category = localizedCategory(locale, slug);
  if (!category) return null;
  const categorySeo = getClassSeo(locale, slug);
  const contentBySlug: Record<string, { label: string; title: string; paragraphs: string[] }> = {
    knights: { label: "CHARACTER DOSSIER", title: "Recruit, train, equip and dispatch Knights.", paragraphs: ["Each Knight has different stats, positive and negative traits, preferences, relationships and personal story. They are not only numbers; they affect how a quest can unfold.", "The official material confirms Knight management and quest assignment. Complete recruitment, evolution and route conditions are not fully documented where the public sources do not agree."] },
    systems: { label: "SYSTEM DOSSIER", title: "Round Table, Annexes, affinity and time rewind.", paragraphs: ["The confirmed gameplay loop includes managing the Round Table, assigning quests, balancing relationships, expanding the Tower through Annexes and using the Demon to rewind time.", "The exact balance values and some formal system thresholds are version-sensitive and should be checked against the current Steam build."] },
    romance: { label: "RELATIONSHIP DOSSIER", title: "Romance exists; the full route list is not yet documented.", paragraphs: ["Romance is listed as a game tag, and the Demo material confirms special interactions with characters at the Tower. PC Gamer also recorded flirtation between characters.", "The complete roster of romance routes and their conditions is not yet documented. Do not present every Knight as having a confirmed romance ending."] },
    story: { label: "STORY DOSSIER", title: "Murder, Unexpected Outcomes and rewound timelines.", paragraphs: ["Public material confirms murder or assassination consequences, Unexpected Outcomes and a Demon that can rewind the timeline while preserving knowledge.", "The complete ending list, Gideon death conditions and fixed accusation answers remain open in the researched materials."] },
    news: { label: "SIGNAL DOSSIER", title: "Patch 1.0.8 changes the current guide baseline.", paragraphs: ["The supplied 1.0.8 notes identify Aug 10, 2026 as the latest visible patch and report changes to quest scoring, Dragon Knight difficulty and Forge repair costs.", "Review totals, platform status and community route details can change over time; current values should be rechecked before publication."] },
  };
  const localizedDetail = localizedCategoryDetail(locale, slug);
  const detail = locale === "en" ? (contentBySlug[slug] ?? { label: category.tag, title: category.title, paragraphs: [category.description] }) : {
    label: localizedDetail?.detailLabel ?? category.tag,
    title: localizedDetail?.detailTitle ?? category.title,
    paragraphs: localizedDetail?.detailParagraphs ?? [category.description],
  };
  const related = categories.filter((item) => item.slug !== slug).slice(0, 3);
  return <>
    <ArticleStructuredData title={categorySeo?.title ?? `${category.title} — Sovereign Tower Wiki`} description={categorySeo?.description ?? category.description} path={localizedPath(locale, `/classes/${slug}`)} pageType="WebPage" breadcrumb={category.title} />
    <section className="article-hero category-hero section-border"><div className="container"><Link className="back-link" href={hrefFor(locale, "/classes")}><Icon name="back" size={14} />{t.articleBack}</Link><div className="article-grid"><div><div className="eyebrow">{detail.label}<span className="eyebrow-slash">//</span>{category.code}</div><h1>{category.title}<br /><span>{detail.title}</span></h1><p className="article-lede">{category.description}</p><div className="article-meta"><span><Icon name={category.icon} size={14} /> {l.categorySourceLabelled}</span><span><Icon name="radio" size={14} /> {l.lastChecked} · {researchSnapshot.compact}</span></div></div><aside className="article-stamp hud-frame"><span>{category.code}</span><strong>{category.tag.split(" ").map((part) => <span key={part}>{part}<br /></span>)}</strong><small>{l.confirmedForLaunch}</small></aside></div></div></section>
    <section className="section"><div className="container category-layout"><article className="category-copy"><span className="kicker">{t.dossier} · {category.code}</span><h2>{detail.title}</h2>{detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="category-notes hud-frame"><span className="kicker">{l.fieldNote}</span><h3>{l.fieldNoteTitle}</h3><p>{l.fieldNoteDescription}</p></div></article><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{t.nextCoordinates}</span>{related.map((item) => { const relatedCategory = localizedCategory(locale, item.slug) ?? item; return <Link key={item.slug} href={hrefFor(locale, `/classes/${item.slug === "quests" ? "quest-matching" : item.slug}`)}>{relatedCategory.title} <Icon name="arrow" size={13} /></Link>; })}</div></aside></div></section>
  </>;
}

export function ArticleView({ locale, Content, slug = "quest-matching" }: { locale: Locale; Content: (props: Record<string, never>) => ReactNode; slug?: keyof typeof guideMeta }) {
  const t = copy[locale];
  const l = ui[locale];
  const guide = localizedGuideMeta(locale, slug);
  const heroTitle = guide?.title ?? t.articleTitleA;
  const heroDescription = guide?.description ?? t.articleLede;
  return <>
    <ArticleStructuredData title={`${heroTitle} — Sovereign Tower Wiki`} description={heroDescription} path={localizedPath(locale, `/classes/${slug}`)} breadcrumb={guide?.category} />
    <section className="article-hero section-border"><div className="container"><Link className="back-link" href={hrefFor(locale, "/classes")}><Icon name="back" size={14} />{t.articleBack}</Link><div className="article-grid"><div><div className="eyebrow">{guide?.category ?? t.articleEyebrow}<span className="eyebrow-slash">//</span>{guide?.tag ?? "QST"}</div><h1>{heroTitle}</h1><p className="article-lede">{heroDescription}</p><div className="article-meta"><span><Icon name="clock" size={14} /> {t.articleUpdated}</span><span><Icon name="radio" size={14} /> {guide?.readTime ?? l.fieldGuide} · PATCH 1.0.8</span><span className="status-chip status-CHECK">{l.checked}</span></div></div><aside className="article-stamp hud-frame"><span>{guide?.tag ?? "QST"}</span><strong>{l.fieldReport}</strong><small>{l.publicSourcesCrossChecked}</small></aside></div></div></section>
    <section className="section article-section"><div className="container article-layout"><article className="mdx-content"><Content /></article><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{t.atAGlance}</span><ul><li><strong>5</strong><span>{l.statsListed}</span></li><li><strong>6</strong><span>{l.factionAffinities}</span></li><li><strong>1.0.8</strong><span>{l.scoringChanges}</span></li></ul></div><div className="sidebar-card code-sidebar hud-frame"><span className="kicker">{t.codes}</span><p>{t.codesDescription}</p>{sidebarCodes.map((code, index) => <div className="code-status" key={`${code}-${index}`}><span>{l.codeLabel} 0{index + 1}</span><strong>{code}</strong></div>)}</div><div className="sidebar-card next-card"><span className="kicker">{t.nextCoordinates}</span><Link href={hrefFor(locale, "/classes/knights")}>{l.knightStatsReference} <Icon name="arrow" size={13} /></Link><Link href={hrefFor(locale, "/classes/story")}>{l.timeRewindGuide} <Icon name="arrow" size={13} /></Link><Link href={hrefFor(locale, "/classes/romance")}>{l.affinityRomance} <Icon name="arrow" size={13} /></Link></div></aside></div></section>
  </>;
}
