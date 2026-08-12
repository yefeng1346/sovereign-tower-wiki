import Link from "next/link";
import { keywordPages } from "@/content/keyword-pages";
import { categories, copy, guideMeta, type Locale } from "@/lib/site-data";
import { localizedCategory, localizedGuideMeta, ui } from "@/lib/localized-content";
import { Icon } from "@/components/site";

function hrefFor(locale: Locale, href: string) {
  return locale === "en" ? href : `/${locale}${href}`;
}

const faqItems = [
  ["What is the current Sovereign Tower version?", "Patch 1.0.8 is the latest official patch recorded in this site snapshot. It changes quest balance, Dragon Knight difficulty, Forge repairs, save/load confirmation and several bugs."],
  ["How many Knight stats does Steam list?", "The official Steam store copy lists Strength, Agility, Charisma, Magic and Wit. Some secondary release material mentions Luck, so this site treats Luck as a documented conflict rather than a universal official sixth stat."],
  ["Does Sovereign Tower have redemption codes?", "No reliable official redemption code was found in the researched material. The site displays 暂无 rather than publishing third-party claims."],
  ["How does time rewind work?", "The Demon in the Crypts can send the player back with learned knowledge, opening different dialogue, pathways, characters and outcomes. Exact penalties and limits are version-sensitive."],
  ["What platforms are confirmed?", "The current Steam listing provides Windows and SteamOS/Linux requirements. The developer site has a broader macOS line, so Mac support is treated as a source conflict and should be checked before purchase."],
  ["How many Steam achievements are there?", "Steam currently lists 75 achievements. The count is official; individual hidden unlock conditions should be taken from Steam or a current-build test."],
] as const;

const localizedFaqItems = {
  ja: [
    ["現在の Sovereign Tower のバージョンは？", "このサイトのスナップショットで記録している最新公式パッチは 1.0.8 です。クエストバランス、Dragon Knight の難易度、Forge 修理、セーブ・ロード確認、複数のバグを変更しました。"],
    ["Steam にはナイツの能力値がいくつ掲載されていますか？", "公式 Steam ストアには Strength、Agility、Charisma、Magic、Wit の5つが掲載されています。別の発売資料には Luck があるため、公式の6番目として断定せず情報の相違として扱います。"],
    ["Sovereign Tower に引き換えコードはありますか？", "調査素材では信頼できる公式引き換えコードを確認できませんでした。第三者の主張を載せず、コード欄は「暂无」と表示します。"],
    ["時間巻き戻しはどう機能しますか？", "Crypts の Demon は学んだ知識を持って過去へ戻し、別の会話、道、キャラクター、結果を開きます。正確な罰則と制限はバージョン依存です。"],
    ["確認済みのプラットフォームは？", "現在の Steam リストには Windows と SteamOS/Linux の要件があります。開発者サイトの macOS 表記とは差があるため、Mac 対応は購入前に再確認する情報として扱います。"],
    ["Steam 実績はいくつありますか？", "Steam には現在75件と表示されています。総数は公式確認値ですが、個々の隠し条件は Steam の現在表示か現行版テストを使います。"],
  ],
  ko: [
    ["현재 Sovereign Tower 버전은 무엇인가요?", "이 사이트 스냅샷에서 기록한 최신 공식 패치는 1.0.8입니다. 퀘스트 밸런스, Dragon Knight 난이도, Forge 수리, 저장·불러오기 확인과 여러 버그를 바꿨습니다."],
    ["Steam에는 나이트 스탯이 몇 개 표시되나요?", "공식 Steam 상점에는 Strength, Agility, Charisma, Magic, Wit 5개가 표시됩니다. 다른 출시 자료에는 Luck이 있어 공식 6번째 스탯이 아니라 자료 충돌로 다룹니다."],
    ["Sovereign Tower 교환 코드가 있나요?", "조사 자료에서 신뢰할 수 있는 공식 교환 코드를 확인하지 못했습니다. 서드파티 주장을 싣지 않고 코드 칸은 ‘暂无’으로 표시합니다."],
    ["시간 되감기는 어떻게 작동하나요?", "Crypts의 Demon은 배운 지식을 가진 채 과거로 보내 다른 대화, 경로, 캐릭터와 결과를 열 수 있습니다. 정확한 패널티와 제한은 버전에 따라 달라집니다."],
    ["확인된 플랫폼은 무엇인가요?", "현재 Steam 목록에는 Windows와 SteamOS/Linux 사양이 있습니다. 개발자 사이트의 macOS 표기와 차이가 있으므로 Mac 지원은 구매 전에 다시 확인해야 합니다."],
    ["Steam 업적은 몇 개인가요?", "Steam에는 현재 75개가 표시됩니다. 총수는 공식 확인값이지만 개별 숨은 조건은 현재 Steam 목록이나 현재 빌드 테스트를 사용해야 합니다."],
  ],
  fr: [
    ["Quelle est la version actuelle de Sovereign Tower ?", "Le dernier patch officiel enregistré dans cet instantané est le 1.0.8. Il modifie l'équilibrage des quêtes, le Dragon Knight, les réparations de la Forge, la confirmation des sauvegardes et plusieurs bugs."],
    ["Combien de stats Steam liste-t-il pour les Chevaliers ?", "La fiche Steam officielle liste Strength, Agility, Charisma, Magic et Wit, soit cinq stats. Une autre source de sortie mentionne Luck ; nous le signalons comme conflit plutôt que comme sixième stat universelle."],
    ["Existe-t-il des codes d'échange ?", "Aucun code officiel fiable n'a été trouvé dans les sources étudiées. Les affirmations tierces ne sont pas publiées et la zone de code affiche « 暂无 »."],
    ["Comment fonctionne le rembobinage ?", "Le Démon des Crypts renvoie le joueur dans le passé avec ses connaissances et ouvre d'autres dialogues, chemins, personnages et résultats. Les limites et pénalités exactes dépendent de la version."],
    ["Quelles plateformes sont confirmées ?", "La fiche Steam actuelle donne les exigences Windows et SteamOS/Linux. La ligne macOS du site du développeur est traitée comme un conflit à vérifier avant achat."],
    ["Combien y a-t-il de succès Steam ?", "Steam en affiche actuellement 75. Le total est officiel, mais les conditions cachées doivent venir de la liste Steam actuelle ou d'un test dans le build présent."],
  ],
} as const;

export function FaqView({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const l = ui[locale];
  const items = locale === "en" ? faqItems : localizedFaqItems[locale];
  return <>
    <section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{l.faqEyebrow}<span className="eyebrow-slash">//</span><span>{l.faqTitleA} · PATCH 1.0.8</span></div><h1>{l.faqTitleA}<br /><span className="accent-text">{l.faqTitleB}</span></h1><p>{l.faqDescription}</p></div><div className="index-counter hud-frame"><strong>06</strong><span>{l.coreAnswers}</span><div className="counter-line" /><small>{l.checkedDate}</small></div></div></section>
    <section className="section"><div className="container faq-layout"><div className="faq-stack">{items.map(([question, answer], index) => <article className="faq-item hud-frame" key={question}><span className="qa-code">0{index + 1} · FAQ</span><h2>{question}</h2><p>{answer}</p></article>)}</div><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{l.needRoute}</span><strong className="evidence-sidebar-label">{l.openFieldFiles}</strong><p>{l.verifiedGuidesDescription}</p><Link className="text-link" href={hrefFor(locale, "/classes")}>{l.browseGuides} <Icon name="arrow" size={13} /></Link></div><div className="sidebar-card code-sidebar hud-frame"><span className="kicker">{t.codes}</span><p>{l.noOfficialCode}</p><div className="code-status"><span>STATUS</span><strong>暂无</strong></div></div></aside></div></section>
  </>;
}

export function SearchView({ locale, query = "" }: { locale: Locale; query?: string }) {
  const l = ui[locale];
  if (locale !== "en") {
    return <>
      <section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{l.searchEyebrow}<span className="eyebrow-slash">//</span><span>{l.keywordIndex}</span></div><h1>{l.searchTitleA}<br /><span className="accent-text">{l.searchTitleB}</span></h1><p>{l.searchDescription}</p></div><div className="index-counter hud-frame"><strong>—</strong><span>{l.localizedKeywordTitle}</span><div className="counter-line" /><small>{l.officialCommunity}</small></div></div></section>
      <section className="section"><div className="container search-layout"><div className="search-directory"><form className="search-form" action={hrefFor(locale, "/search")}><label htmlFor="site-search">{l.searchFieldIndex}</label><div><input id="site-search" name="q" defaultValue={query} placeholder={l.searchPlaceholder} /><button type="submit">{l.searchButton} <Icon name="arrow" size={13} /></button></div></form><div className="localized-hold hud-frame"><span className="kicker">{l.keywordIndex}</span><h2>{l.localizedKeywordTitle}</h2><p>{l.localizedKeywordDescription}</p><p>{l.localizedKeywordNotice}</p><Link className="text-link" href={hrefFor(locale, "/classes")}>{l.browseGuides}<Icon name="arrow" size={14} /></Link></div></div><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{l.coreFiles}</span>{Object.entries(guideMeta).map(([slug]) => { const guide = localizedGuideMeta(locale, slug as keyof typeof guideMeta); return <Link className="next-card-link" href={hrefFor(locale, `/classes/${slug}`)} key={slug}>{guide.title}<Icon name="arrow" size={13} /></Link>; })}</div><div className="sidebar-card hud-frame"><span className="kicker">{tOrLocale(locale, "categories")}</span>{categories.map((baseCategory) => { const category = localizedCategory(locale, baseCategory.slug) ?? baseCategory; return <Link className="next-card-link" href={hrefFor(locale, `/classes/${baseCategory.slug === "quests" ? "quest-matching" : baseCategory.slug}`)} key={baseCategory.slug}>{category.title}<Icon name="arrow" size={13} /></Link>; })}</div></aside></div></section>
    </>;
  }
  const indexablePages = keywordPages.filter((page) => page.indexable);
  const groups = [...new Set(indexablePages.map((page) => page.category))];
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePages = normalizedQuery ? indexablePages.filter((page) => `${page.keyword} ${page.answer} ${page.category}`.toLowerCase().includes(normalizedQuery)) : indexablePages;
  const visibleGroups = [...new Set(visiblePages.map((page) => page.category))];
  return <>
    <section className="page-intro section-border"><div className="container page-intro-grid"><div><div className="eyebrow">{l.searchEyebrow}<span className="eyebrow-slash">//</span><span>{l.keywordIndex}</span></div><h1>{l.searchTitleA}<br /><span className="accent-text">{l.searchTitleB}</span></h1><p>{l.searchDescription}</p></div><div className="index-counter hud-frame"><strong>{indexablePages.length}</strong><span>{l.indexedQueries}</span><div className="counter-line" /><small>{l.officialCommunity}</small></div></div></section>
    <section className="section"><div className="container search-layout"><div className="search-directory"><form className="search-form" action={hrefFor(locale, "/search")}><label htmlFor="site-search">{l.searchFieldIndex}</label><div><input id="site-search" name="q" defaultValue={query} placeholder={l.searchPlaceholder} /><button type="submit">{l.searchButton} <Icon name="arrow" size={13} /></button></div></form><div className="search-directory-head"><span className="kicker">{normalizedQuery ? `${visiblePages.length} ${l.matches}` : l.browseByTopic}</span><h2>{normalizedQuery ? `${l.resultsFor} “${query}”` : l.queryCoordinates}</h2></div>{(normalizedQuery ? visibleGroups : groups).map((group) => <section className="search-group" key={group}><div className="search-group-title"><h3>{group}</h3><span>{visiblePages.filter((page) => page.category === group).length} {l.files}</span></div><div className="search-links">{visiblePages.filter((page) => page.category === group).map((page) => <Link href={hrefFor(locale, `/guides/${page.slug}`)} key={page.slug}>{page.keyword}<Icon name="arrow" size={13} /></Link>)}</div></section>)}{normalizedQuery && visiblePages.length === 0 && <div className="empty-search hud-frame"><strong>{l.noMatchingField}</strong><p>{l.tryBroader}</p></div>}</div><aside className="article-sidebar"><div className="sidebar-card hud-frame"><span className="kicker">{l.coreFiles}</span>{Object.entries(guideMeta).map(([slug]) => { const guide = localizedGuideMeta(locale, slug as keyof typeof guideMeta); return <Link className="next-card-link" href={hrefFor(locale, `/classes/${slug}`)} key={slug}>{guide.title}<Icon name="arrow" size={13} /></Link>; })}</div><div className="sidebar-card hud-frame"><span className="kicker">{tOrLocale(locale, "categories")}</span>{categories.map((baseCategory) => { const category = localizedCategory(locale, baseCategory.slug) ?? baseCategory; return <Link className="next-card-link" href={hrefFor(locale, `/classes/${baseCategory.slug === "quests" ? "quest-matching" : baseCategory.slug}`)} key={baseCategory.slug}>{category.title}<Icon name="arrow" size={13} /></Link>; })}</div></aside></div></section>
  </>;
}

function tOrLocale(locale: Locale, key: "categories") {
  return locale === "ja" ? "カテゴリ" : locale === "ko" ? "카테고리" : locale === "fr" ? "Catégories" : "Categories";
}
