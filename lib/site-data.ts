import { researchSnapshot } from "@/lib/research-snapshot";

export const locales = ["en", "ja", "ko", "fr"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
  ko: "한국어",
  fr: "FR",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ja: "Japanese",
  ko: "Korean",
  fr: "French",
};

export const seo = {
  en: {
    title: "Sovereign Tower Wiki — Knights, Quests & Time Rewind",
    description: "Sovereign Tower Wiki with beginner tips, Knight stats, quest matching, Patch 1.0.8 notes, achievements, system requirements, romances and time rewind.",
    keywords: ["Sovereign Tower", "Steam", "wiki", "knights", "quests", "time rewind", "romance", "affinity", "annexes"],
  },
  ja: {
    title: "ソブリン・タワー (Sovereign Tower) Wiki — ナイツ、クエスト、時間巻き戻し",
    description: "Sovereign Tower の初心者ガイド、ナイツの能力値、クエスト適性、派閥、ロマンス、高塔の Annex、時間巻き戻しをまとめた Wiki。",
    keywords: ["ソブリン・タワー", "Sovereign Tower", "Wiki", "ナイツ", "クエスト", "時間巻き戻し", "ロマンス"],
  },
  ko: {
    title: "소버린 타워 (Sovereign Tower) Wiki — 나이트, 퀘스트와 시간 되감기",
    description: "Sovereign Tower 초보자 가이드, 나이트 스탯, 퀘스트 매칭, 친밀도, 로맨스, 타워 Annex와 시간 되감기를 정리한 Wiki입니다.",
    keywords: ["소버린 타워", "Sovereign Tower", "Wiki", "나이트", "퀘스트", "시간 되감기", "로맨스"],
  },
  fr: {
    title: "Sovereign Tower Wiki — Chevaliers, quêtes et rembobinage",
    description: "Wiki Sovereign Tower : guide du débutant, stats des Chevaliers, association de quêtes, affinités, romances, annexes et rembobinage du temps.",
    keywords: ["Sovereign Tower", "Steam", "wiki", "chevaliers", "quêtes", "rembobinage", "romance", "affinité", "annexes"],
  },
} as const;

export const themeTokens = {
  light: {
    navTheme: "349 31% 43%",
    navThemeLight: "349 40% 64%",
    pageBackground: "36 28% 96%",
    panelBackground: "35 25% 92%",
  },
  dark: {
    navTheme: "349 40% 64%",
    navThemeLight: "352 61% 77%",
    pageBackground: "350 18% 13%",
    panelBackground: "350 18% 18%",
  },
} as const;

export const officialLinks = {
  website: "https://wildwits.games/en/sovereign-tower-en/",
  steam: "https://store.steampowered.com/app/4113940/Sovereign_Tower/",
  discord: "https://discord.gg/w4XVQ69Vuc",
  discordDiscovery: "https://discord.com/servers/sovereign-tower-1450459764742950922",
  youtube: "https://www.youtube.com/watch?v=aAz_CooIugY",
  steamCommunity: "https://steamcommunity.com/app/4113940",
} as const;

export const sidebarCodes = ["暂无", "暂无"] as const;

type Copy = {
  signal: string;
  liveBuild: string;
  unofficial: string;
  nav: { knights: string; quests: string; systems: string; choices: string; guides: string; news: string; faq: string };
  search: string;
  menu: string;
  heroEyebrow: string;
  heroTitleA: string;
  heroTitleB: string;
  heroDescription: string;
  heroNotice: string;
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
  videoLabel: string;
  stats: { value: string; label: string }[];
  metaLabel: string;
  fullCodex: string;
  startEyebrow: string;
  startTitle: string;
  startDescription: string;
  allCoordinates: string;
  readBrief: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutParagraphOne: string;
  aboutParagraphTwo: string;
  aboutCta: string;
  codesEyebrow: string;
  codesTitle: string;
  codesDescription: string;
  codesStatus: string;
  codesSource: string;
  finalEyebrow: string;
  finalTitle: string;
  finalDescription: string;
  finalPrimary: string;
  finalSecondary: string;
  footerAbout: string;
  footerDisclaimer: string;
  codex: string;
  players: string;
  official: string;
  language: string;
  privacyPolicy: string;
  termsOfService: string;
  archiveEyebrow: string;
  archiveTitle: string;
  archiveDescription: string;
  browseTitle: string;
  browseDescription: string;
  activeFiles: string;
  dossier: string;
  articleEyebrow: string;
  articleTitleA: string;
  articleTitleB: string;
  articleLede: string;
  articleBack: string;
  articleUpdated: string;
  atAGlance: string;
  nextCoordinates: string;
  codes: string;
  steam: string;
  legalPending: string;
  legalBack: string;
};

const englishCopy: Copy = {
  signal: "SIGNAL · LIVE",
  liveBuild: `${researchSnapshot.buildLabel} · AUG 10, 2026`,
  unofficial: "FAN-MADE CODEX",
  nav: { knights: "Knights", quests: "Quests", systems: "Systems", choices: "Choices", guides: "Guides", news: "News", faq: "FAQ" },
  search: "Search",
  menu: "Menu",
  heroEyebrow: "Fan-Made Sovereign Tower Community Wiki",
  heroTitleA: "Sovereign",
  heroTitleB: "Tower",
  heroDescription: "Rule a magical kingdom from the Round Table, recruit eccentric Knights and send them on unpredictable quests. Balance relationships, uncover secrets and rewind time when your decisions lead the realm somewhere you never intended.",
  heroNotice: "Official launch · Aug 6, 2026 · Latest visible patch · 1.0.8",
  primaryCta: "Start Beginner Guide",
  secondaryCta: "Explore Knights & Quests",
  tertiaryCta: "Master Time Rewind",
  videoLabel: "Official Launch Trailer",
  stats: [{ value: "Aug 6", label: "Release Date · 2026" }, { value: "75", label: "Steam Achievements" }, { value: "6", label: "Supported Languages" }, { value: "SOLO", label: "Player Mode" }],
  metaLabel: "CONFIRMED SYSTEMS · PATCH 1.0.8",
  fullCodex: "Open full codex",
  startEyebrow: "Start Here",
  startTitle: "Your Sovereign Tower Journey",
  startDescription: "Learn the core loop first, then follow the decisions that shape Knights, factions, quests and future timelines.",
  allCoordinates: "All coordinates",
  readBrief: "Read brief",
  aboutEyebrow: "The game",
  aboutTitle: "What is Sovereign Tower?",
  aboutParagraphOne: "Sovereign Tower is a story-rich medieval fantasy management RPG and visual novel developed by WILD WITS GAMES. You rule from a magical tower, answer the requests of your subjects, recruit eccentric Knights and decide who should handle each quest.",
  aboutParagraphTwo: "Every decision can affect your Knights, kingdom factions and future story paths. When events go badly, a Demon beneath the Tower lets you rewind time with your accumulated knowledge, opening alternate decisions, secrets, romances and outcomes.",
  aboutCta: "Explore All Guides",
  codesEyebrow: "Codes · Live status",
  codesTitle: "No confirmed codes",
  codesDescription: "No reliable official Sovereign Tower redemption codes were found in the researched materials. We will not list third-party claims here.",
  codesStatus: "暂无",
  codesSource: `No official codes found · checked ${researchSnapshot.dateShort}`,
  finalEyebrow: "Ready for the tower?",
  finalTitle: "Ready to Master Sovereign Tower?",
  finalDescription: "From your first audience at the throne to difficult Knight assignments, faction politics and rewritten timelines, our Sovereign Tower Wiki helps you understand every major system and make better decisions throughout your reign.",
  finalPrimary: "Read the Beginner Guide",
  finalSecondary: "Play on Steam",
  footerAbout: "Sovereign Tower Wiki is an independent fan-made guide site covering Knights, quests, affinity choices, time rewinds, romances and Tower progression. It is built to help players understand the game's systems, discover alternate outcomes and plan their reign without relying on trial and error alone.",
  footerDisclaimer: "Not affiliated with WILD WITS GAMES or Curve Games.",
  codex: "Codex",
  players: "Players",
  official: "Official",
  language: "Language",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  archiveEyebrow: "Archive · Field Manual",
  archiveTitle: "The codex for every system",
  archiveDescription: "Browse the live index of Knights, quests, relationships, story choices and the time-rewind decisions that shape a reign.",
  browseTitle: "Browse the archives",
  browseDescription: "Start with the system you need right now. Every guide carries an evidence label and build date.",
  activeFiles: "active files",
  dossier: "Dossier",
  articleEyebrow: "Field Report · Quest Systems",
  articleTitleA: "Quest Matching Guide:",
  articleTitleB: "Stats, Risks & Unexpected Outcomes",
  articleLede: "How to read Knight stats, affinity and quest risk before dispatching a team in Sovereign Tower.",
  articleBack: "Back to archive",
  articleUpdated: `Updated ${researchSnapshot.dateShort} · ${researchSnapshot.build}`,
  atAGlance: "At a glance",
  nextCoordinates: "Next coordinates",
  codes: "Codes",
  steam: "Play on Steam",
  legalPending: "Detailed policy text is being prepared. This page identifies the independent fan-made Sovereign Tower Wiki and its scope.",
  legalBack: "Back to home",
};

export const copy: Record<Locale, Copy> = {
  en: englishCopy,
  ja: {
    ...englishCopy,
    nav: { knights: "ナイツ", quests: "クエスト", systems: "システム", choices: "選択", guides: "ガイド", news: "ニュース", faq: "FAQ" },
    search: "検索", menu: "メニュー", liveBuild: "PATCH 1.0.8 · 2026年8月10日", unofficial: "ファン制作コーデックス",
    heroEyebrow: "Sovereign Tower ファン・コミュニティ Wiki", heroTitleA: "ソブリン・", heroTitleB: "タワー",
    heroDescription: "円卓から魔法の王国を統治し、個性豊かなナイツを招き、予測できないクエストへ派遣します。関係を保ち、秘密を見つけ、望まない結果に進んだときは時間を巻き戻しましょう。",
    primaryCta: "初心者ガイドを読む", secondaryCta: "ナイツとクエストを見る", tertiaryCta: "時間巻き戻しを極める", videoLabel: "公式ローンチトレーラー",
    stats: [{ value: "08/06", label: "発売日 · 2026" }, { value: "75", label: "Steam 実績" }, { value: "6", label: "対応言語" }, { value: "SOLO", label: "プレイ人数" }],
    fullCodex: "全コードを開く", startEyebrow: "ここから開始", startTitle: "Sovereign Tower の旅", startDescription: "まずコア・ループを学び、ナイツ、派閥、クエスト、未来の時間軸を形作る選択へ進みます。", allCoordinates: "全座標", readBrief: "ブリーフを読む",
    aboutEyebrow: "ゲーム紹介", aboutTitle: "Sovereign Tower とは？", aboutParagraphOne: "Sovereign Tower は WILD WITS GAMES が開発した、物語重視の中世ファンタジー管理 RPG / ビジュアルノベルです。魔法の塔から民の要望に応え、個性豊かなナイツを招き、クエストの担当者を決めます。", aboutParagraphTwo: "選択はナイツ、王国の派閥、未来のストーリーに影響します。事態が悪化したときは塔の下の Demon と取引し、得た知識を持ったまま時間を巻き戻せます。", aboutCta: "全ガイドを見る",
    codesEyebrow: "コード · 現在の状態", codesTitle: "確認済みコードなし", codesDescription: "調査した素材では、信頼できる公式引き換えコードを確認できませんでした。第三者の主張は掲載しません。", codesStatus: "暂无", codesSource: "公式コード未確認 · 2026年8月12日確認",
    finalEyebrow: "塔への準備は？", finalTitle: "Sovereign Tower を極める準備はできましたか？", finalDescription: "最初の謁見から難しいナイツ派遣、派閥政治、書き換えられた時間軸まで、Sovereign Tower Wiki が統治を支えます。", finalPrimary: "初心者ガイドを読む", finalSecondary: "Steam でプレイ",
    footerAbout: "Sovereign Tower Wiki は、ナイツ、クエスト、派閥、時間巻き戻し、ロマンス、高塔の進行を扱う独立ファンサイトです。", footerDisclaimer: "WILD WITS GAMES / Curve Games とは無関係です。", codex: "コード", players: "プレイヤー", official: "公式", language: "言語", privacyPolicy: "プライバシーポリシー", termsOfService: "利用規約", archiveTitle: "すべてのシステムのコード", archiveDescription: "ナイツ、クエスト、関係、物語の選択、時間巻き戻しを検索します。", browseTitle: "アーカイブを閲覧", browseDescription: "必要なシステムを選択してください。各ガイドに証拠レベルと確認日を表示しています。", activeFiles: "公開ファイル", dossier: "資料", articleEyebrow: "フィールドレポート · クエストシステム", articleTitleA: "クエスト適性ガイド:", articleTitleB: "能力値・リスク・予想外の結果", articleLede: "チーム派遣前にナイツの能力値、派閥、クエストのリスクを読む方法。", articleBack: "アーカイブへ戻る", articleUpdated: "2026年8月12日更新", atAGlance: "要点", nextCoordinates: "次の座標", codes: "コード", steam: "Steam でプレイ", legalPending: "詳細なポリシー本文を準備中です。このページでは独立ファン Wiki と対象範囲を示しています。", legalBack: "ホームへ戻る",
  },
  ko: {
    ...englishCopy,
    nav: { knights: "나이트", quests: "퀘스트", systems: "시스템", choices: "선택", guides: "가이드", news: "뉴스", faq: "FAQ" },
    search: "검색", menu: "메뉴", liveBuild: "PATCH 1.0.8 · 2026년 8월 10일", unofficial: "팬 제작 코덱스",
    heroEyebrow: "Sovereign Tower 팬 커뮤니티 Wiki", heroTitleA: "소버린", heroTitleB: "타워",
    heroDescription: "라운드 테이블에서 마법 왕국을 통치하고, 개성 있는 나이트를 영입해 예측할 수 없는 퀘스트에 파견하세요. 관계를 관리하고 비밀을 밝혀내며, 원치 않는 결과로 향할 때는 시간을 되감으세요.",
    primaryCta: "초보자 가이드 시작", secondaryCta: "나이트 & 퀘스트 탐색", tertiaryCta: "시간 되감기 마스터", videoLabel: "공식 런치 트레일러",
    stats: [{ value: "08/06", label: "출시일 · 2026" }, { value: "75", label: "Steam 업적" }, { value: "6", label: "지원 언어" }, { value: "SOLO", label: "플레이 모드" }],
    fullCodex: "전체 코드 열기", startEyebrow: "여기서 시작", startTitle: "Sovereign Tower 여정", startDescription: "핵심 루프를 익힌 뒤 나이트, 세력, 퀘스트와 다음 타임라인을 바꾸는 결정을 따라가세요.", allCoordinates: "전체 좌표", readBrief: "브리프 읽기",
    aboutEyebrow: "게임 소개", aboutTitle: "Sovereign Tower란?", aboutParagraphOne: "Sovereign Tower는 WILD WITS GAMES가 개발한 스토리 중심 중세 판타지 경영 RPG이자 비주얼 노벨입니다. 마법의 탑에서 백성의 요청에 답하고, 개성 있는 나이트를 영입하고, 퀘스트 담당자를 정합니다.", aboutParagraphTwo: "모든 선택은 나이트, 왕국 세력과 미래 스토리 경로에 영향을 줄 수 있습니다. 일이 잘못되면 탑 아래의 Demon과 거래해 지식을 가진 채 시간을 되감을 수 있습니다.", aboutCta: "전체 가이드 탐색",
    codesEyebrow: "코드 · 현재 상태", codesTitle: "확인된 코드 없음", codesDescription: "조사한 자료에서 신뢰할 수 있는 공식 교환 코드를 확인하지 못했습니다. 서드파티 주장은 싣지 않습니다.", codesStatus: "暂无", codesSource: "공식 코드 미확인 · 2026년 8월 12일 확인",
    finalEyebrow: "탑을 시작할 준비가 됐나요?", finalTitle: "Sovereign Tower를 마스터할 준비가 됐나요?", finalDescription: "첫 알현부터 어려운 나이트 파견, 세력 정치와 다시 쓰인 타임라인까지, Sovereign Tower Wiki가 통치를 돕습니다.", finalPrimary: "초보자 가이드 읽기", finalSecondary: "Steam에서 플레이",
    footerAbout: "Sovereign Tower Wiki는 나이트, 퀘스트, 친밀도, 시간 되감기, 로맨스와 타워 진행을 다루는 독립 팬 사이트입니다.", footerDisclaimer: "WILD WITS GAMES 또는 Curve Games와 제휴하지 않았습니다.", codex: "코덱스", players: "플레이어", official: "공식", language: "언어", privacyPolicy: "개인정보 처리방침", termsOfService: "이용약관", archiveTitle: "모든 시스템을 위한 코드", archiveDescription: "나이트, 퀘스트, 관계, 스토리 선택과 시간 되감기를 탐색하세요.", browseTitle: "아카이브 탐색", browseDescription: "지금 필요한 시스템부터 시작하세요. 모든 가이드에 근거 수준과 확인 날짜를 표시합니다.", activeFiles: "공개 파일", dossier: "자료", articleEyebrow: "필드 리포트 · 퀘스트 시스템", articleTitleA: "퀘스트 매칭 가이드:", articleTitleB: "스탯, 위험과 예상치 못한 결과", articleLede: "팀을 파견하기 전에 나이트 스탯, 친밀도와 퀘스트 위험을 읽는 방법입니다.", articleBack: "아카이브로 돌아가기", articleUpdated: "2026년 8월 12일 업데이트", atAGlance: "한눈에 보기", nextCoordinates: "다음 좌표", codes: "코드", steam: "Steam에서 플레이", legalPending: "상세 정책 본문을 준비 중입니다. 이 페이지는 독립 팬 Wiki와 다루는 범위를 안내합니다.", legalBack: "홈으로 돌아가기",
  },
  fr: {
    ...englishCopy,
    nav: { knights: "Chevaliers", quests: "Quêtes", systems: "Systèmes", choices: "Choix", guides: "Guides", news: "News", faq: "FAQ" },
    search: "Rechercher", menu: "Menu", liveBuild: "PATCH 1.0.8 · 10 AOÛT 2026", unofficial: "CODEX CRÉÉ PAR DES FANS",
    heroEyebrow: "Wiki communautaire fan-made de Sovereign Tower", heroTitleA: "Sovereign", heroTitleB: "Tower",
    heroDescription: "Gouvernez un royaume magique depuis la Table Ronde, recrutez des Chevaliers excentriques et envoyez-les dans des quêtes imprévisibles. Équilibrez les relations, découvrez des secrets et rembobinez le temps lorsque vos décisions mènent le royaume là où vous ne vouliez pas aller.",
    primaryCta: "Guide du débutant", secondaryCta: "Explorer chevaliers et quêtes", tertiaryCta: "Maîtriser le rembobinage", videoLabel: "Trailer officiel de lancement",
    stats: [{ value: "06 août", label: "Sortie · 2026" }, { value: "75", label: "Succès Steam" }, { value: "6", label: "Langues supportées" }, { value: "SOLO", label: "Mode de jeu" }],
    fullCodex: "Ouvrir le codex", startEyebrow: "Commencer ici", startTitle: "Votre parcours Sovereign Tower", startDescription: "Apprenez d'abord la boucle principale, puis suivez les choix qui façonnent les Chevaliers, les factions, les quêtes et les timelines.", allCoordinates: "Toutes les coordonnées", readBrief: "Lire le brief",
    aboutEyebrow: "Le jeu", aboutTitle: "Qu'est-ce que Sovereign Tower ?", aboutParagraphOne: "Sovereign Tower est un RPG de gestion médiéval fantastique riche en histoire et un visual novel développé par WILD WITS GAMES. Depuis une tour magique, répondez aux demandes de vos sujets, recrutez des Chevaliers excentriques et choisissez qui prendra chaque quête.", aboutParagraphTwo: "Chaque décision peut affecter vos Chevaliers, les factions du royaume et les chemins narratifs futurs. Quand les événements tournent mal, un Démon sous la Tour permet de rembobiner le temps avec les connaissances accumulées.", aboutCta: "Explorer tous les guides",
    codesEyebrow: "Codes · Statut live", codesTitle: "Aucun code confirmé", codesDescription: "Aucun code officiel fiable n'a été trouvé dans les sources étudiées. Les affirmations tierces ne sont pas listées.", codesStatus: "暂无", codesSource: "Aucun code officiel trouvé · vérifié le 12 août 2026",
    finalEyebrow: "Prêt pour la tour ?", finalTitle: "Prêt à maîtriser Sovereign Tower ?", finalDescription: "De votre première audience aux missions difficiles, à la politique des factions et aux timelines réécrites, le Wiki Sovereign Tower accompagne votre règne.", finalPrimary: "Lire le guide du débutant", finalSecondary: "Jouer sur Steam",
    footerAbout: "Sovereign Tower Wiki est un site fan indépendant consacré aux Chevaliers, quêtes, affinités, rembobinage, romances et progression de la Tour.", footerDisclaimer: "Non affilié à WILD WITS GAMES ni à Curve Games.", codex: "Codex", players: "Joueurs", official: "Officiel", language: "Langue", privacyPolicy: "Politique de confidentialité", termsOfService: "Conditions d'utilisation", archiveTitle: "Le codex de chaque système", archiveDescription: "Parcourez l'index des Chevaliers, quêtes, relations, choix narratifs et décisions de rembobinage.", browseTitle: "Parcourir les archives", browseDescription: "Commencez par le système dont vous avez besoin. Chaque guide indique son niveau de preuve et sa date de vérification.", activeFiles: "fichiers publics", dossier: "Dossier", articleEyebrow: "Rapport de terrain · Systèmes de quête", articleTitleA: "Guide d'association de quête :", articleTitleB: "stats, risques et résultats inattendus", articleLede: "Comment lire les stats des Chevaliers, l'affinité et le risque d'une quête avant d'envoyer une équipe.", articleBack: "Retour aux archives", articleUpdated: "Mis à jour le 12 août 2026", atAGlance: "En bref", nextCoordinates: "Prochaines coordonnées", codes: "Codes", steam: "Jouer sur Steam", legalPending: "Le texte détaillé de la politique est en préparation. Cette page présente le Wiki fan indépendant et son périmètre.", legalBack: "Retour à l'accueil",
  },
};

export const categories = [
  { slug: "knights", code: "CHR", title: "Knights & Characters", tag: "RECRUITMENT", count: "—", description: "Recruit, train, equip and dispatch Knights with visible stats, traits, preferences and personal stories.", icon: "shield" },
  { slug: "quests", code: "QST", title: "Quests & Walkthroughs", tag: "DISPATCH", count: "—", description: "Quest requirements, dynamic routes, Emergency Quests, changed 1.0.8 scoring and community-tested outcomes.", icon: "crosshair" },
  { slug: "systems", code: "SYS", title: "Game Systems", tag: "MECHANICS", count: "—", description: "Round Table management, faction affinity, Forge repairs, Sovereign Mode and Demon time rewind.", icon: "sliders" },
  { slug: "romance", code: "REL", title: "Romance & Affinity", tag: "RELATIONSHIPS", count: "—", description: "Romance is a confirmed game tag; the complete romance route list is not yet documented.", icon: "heart" },
  { slug: "story", code: "STY", title: "Story & Choices", tag: "BRANCHING", count: "—", description: "Murder consequences, Unexpected Outcomes, endings and timeline choices; full conditions are not yet documented.", icon: "book" },
  { slug: "news", code: "SIG", title: "News & Updates", tag: "PATCH 1.0.8", count: "1.0.8", description: "The visible Aug 10, 2026 patch changed quest scoring, Dragon Knight difficulty and Forge repair costs.", icon: "radio" },
] as const;

export const journeyCards = [
  { number: "1", title: "Beginner Guide", description: "Learn the first-day gameplay loop, Round Table basics, kingdom decisions, Knight recruitment and the systems that shape an early run.", href: "/classes/beginner-guide" },
  { number: "2", title: "Knight & Quest Matching", description: "Learn how the five stats listed by Steam, traits and equipment fit into quest assignment, and why secondary Luck reports need version context.", href: "/classes/quest-matching" },
  { number: "3", title: "Affinity & Kingdom Choices", description: "Understand the Merchants, Mystics, Scholars, Nobles, People and Treasury systems, and see how your decisions reshape relationships and future events.", href: "/classes/romance" },
  { number: "4", title: "Time Rewind Guide", description: "Learn how the Demon and time-rewind system work, what knowledge carries between timelines, and when changing an earlier decision can unlock new dialogue, events and outcomes.", href: "/classes/story" },
] as const;

export const spotlight = [
  { status: "LIVE", tag: "CORE LOOP", title: "Knight & Quest Matching", meta: "OFFICIAL · STEAM", href: "/classes/quest-matching" },
  { status: "LIVE", tag: "SYSTEM", title: "Time Rewind", meta: "DEMON · OFFICIAL", href: "/classes/story" },
  { status: "LIVE", tag: "PROGRESSION", title: "Tower Annexes", meta: "OFFICIAL · DEMO", href: "/classes/systems" },
  { status: "CHECK", tag: "RELATIONSHIPS", title: "Romance & Affinity", meta: "ROUTES · SOURCE LABELLED", href: "/classes/romance" },
] as const;

export const gameStats = [
  { label: "Developer", value: "WILD WITS GAMES" },
  { label: "Publisher", value: "Curve Games" },
  { label: "Platform", value: "Windows · SteamOS / Linux" },
  { label: "Genre", value: "Narrative Management RPG / Visual Novel" },
  { label: "Steam Rating", value: "Very Positive · live label" },
  { label: "Steam Reviews", value: "Live count · check Steam" },
  { label: "Achievements", value: "75" },
  { label: "Knight stats", value: "5 listed · Luck conflict noted" },
  { label: "Supported Languages", value: "6" },
] as const;

export const guideMeta = {
  "beginner-guide": {
    title: "Sovereign Tower Beginner Guide: First Day and Core Loop",
    description: "Learn the confirmed Sovereign Tower loop: audiences, Round Table assignments, Knight management, factions, annexes and Demon rewind.",
    category: "Beginner Guides",
    tag: "START HERE",
    readTime: "CORE GUIDE",
  },
  "quest-matching": {
    title: "Quest Matching Guide: Stats, Risks & Unexpected Outcomes",
    description: "How to read Knight stats, affinity and quest risk before dispatching a team in Sovereign Tower.",
    category: "Quests & Walkthroughs",
    tag: "FIELD REPORT",
    readTime: "FIELD GUIDE",
  },
  "patch-1-0-8": {
    title: "Sovereign Tower Patch 1.0.8 Notes: Changes and Fixes",
    description: "Read the official Sovereign Tower 1.0.8 changes for quest scoring, Dragon Knight difficulty, Forge repairs, bugs and quality of life.",
    category: "News & Updates",
    tag: "OFFICIAL NOTES",
    readTime: "PATCH FILE",
  },
  achievements: {
    title: "Sovereign Tower Achievements: 75 Steam Goals",
    description: "See what is officially confirmed about Sovereign Tower's 75 Steam achievements and how to use the current Steam list without invented unlock conditions.",
    category: "Achievements",
    tag: "STEAM INDEX",
    readTime: "REFERENCE",
  },
  "system-requirements": {
    title: "Sovereign Tower System Requirements for Windows and SteamOS",
    description: "Check the official Steam minimum and recommended system requirements for Sovereign Tower on Windows and SteamOS/Linux.",
    category: "Platforms & Availability",
    tag: "OFFICIAL SPECS",
    readTime: "REFERENCE",
  },
} as const;

export const coreGuideOrder = ["beginner-guide", "quest-matching", "patch-1-0-8", "achievements", "system-requirements"] as const;

export const footerLinks = {
  codex: [
    { label: "Beginner Guide", href: "/classes/beginner-guide" },
    { label: "Knights", href: "/classes/knights" },
    { label: "Quests", href: "/classes/quest-matching" },
    { label: "Systems", href: "/classes/systems" },
    { label: "Choices", href: "/classes/story" },
  ],
  players: [
    { label: "Guides", href: "/guides" },
    { label: "News", href: "/classes/news" },
    { label: "Achievements", href: "/classes/achievements" },
    { label: "System Requirements", href: "/classes/system-requirements" },
    { label: "Quest Matcher", href: "/tools/quest-matcher" },
    { label: "Faction Tracker", href: "/tools/faction-tracker" },
    { label: "Steam", href: officialLinks.steam },
    { label: "Steam Community", href: officialLinks.steamCommunity },
  ],
  official: [
    { label: "Official Website", href: officialLinks.website },
    { label: "Discord", href: officialLinks.discord },
    { label: "YouTube", href: officialLinks.youtube },
  ],
} as const;
