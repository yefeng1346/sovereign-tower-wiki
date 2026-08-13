import { categories, footerLinks, guideMeta, type Locale } from "@/lib/site-data";

export type UiCopy = {
  homeAria: string;
  logoAlt: string;
  brandSub: string;
  primaryNavigation: string;
  roundTableOps: string;
  releaseDate: string;
  platformLine: string;
  patchLine: string;
  copyright: string;
  fanMade: string;
  steamSource: string;
  panelMeta: string;
  launchNotice: string;
  liveStatus: string;
  checkStatus: string;
  emptyCode: string;
  fieldManual: string;
  confirmedSystems: string;
  confirmedSystemsDescription: string;
  sourceLabelled: string;
  patchDate: string;
  latestVisiblePatch: string;
  publicBuildChecked: string;
  coreFiles: string;
  verifiedGuides: string;
  verifiedGuidesDescription: string;
  openFile: string;
  playerTools: string;
  playerToolsTitle: string;
  playerToolsDescription: string;
  playerInput: string;
  noServerData: string;
  openTool: string;
  questMatcher: string;
  questMatcherDescription: string;
  factionTracker: string;
  factionTrackerDescription: string;
  keywordIndex: string;
  researchedSourceFiltered: string;
  oneSearch: string;
  oneFieldPage: string;
  keywordIndexDescription: string;
  keywordPages: string;
  officialCommunity: string;
  querySuffix: string;
  pages: string;
  sources: string;
  viewFieldPage: string;
  backToKeywordIndex: string;
  sourceLinks: string;
  lastChecked: string;
  keywordPage: string;
  fieldPage: string;
  factsFirst: string;
  noFabricatedCodes: string;
  evidenceStatus: string;
  noReliableCodes: string;
  codeLabel: string;
  sourceFilter: string;
  evidenceNote: string;
  evidenceNoteDescription: string;
  sourcesHeading: string;
  categorySourceLabelled: string;
  confirmedForLaunch: string;
  fieldNote: string;
  fieldNoteTitle: string;
  fieldNoteDescription: string;
  fieldReport: string;
  publicSourcesCrossChecked: string;
  checked: string;
  fieldGuide: string;
  statsListed: string;
  factionAffinities: string;
  scoringChanges: string;
  knightStatsReference: string;
  timeRewindGuide: string;
  affinityRomance: string;
  scopeLabel: string;
  scopeDescription: string;
  faqEyebrow: string;
  faqTitleA: string;
  faqTitleB: string;
  faqDescription: string;
  coreAnswers: string;
  checkedDate: string;
  needRoute: string;
  openFieldFiles: string;
  browseGuides: string;
  noOfficialCode: string;
  searchEyebrow: string;
  searchTitleA: string;
  searchTitleB: string;
  searchDescription: string;
  indexedQueries: string;
  searchFieldIndex: string;
  searchPlaceholder: string;
  searchButton: string;
  matches: string;
  browseByTopic: string;
  resultsFor: string;
  queryCoordinates: string;
  files: string;
  noMatchingField: string;
  tryBroader: string;
  localizedKeywordTitle: string;
  localizedKeywordDescription: string;
  localizedKeywordNotice: string;
};

const englishUi: UiCopy = {
  homeAria: "Sovereign Tower Wiki home",
  logoAlt: "Sovereign Tower Wiki logo",
  brandSub: "· FIELD CODEX ·",
  primaryNavigation: "Primary navigation",
  roundTableOps: "ROUND TABLE OPS",
  releaseDate: "RELEASE DATE",
  platformLine: "Windows · Linux / SteamOS",
  patchLine: "PATCH 1.0.8 · AUG 10",
  copyright: "© 2026 Sovereign Tower Wiki",
  fanMade: "Fan-made",
  steamSource: "Steam · Sovereign Tower",
  panelMeta: "CONFIRMED SYSTEMS",
  launchNotice: "Official launch · Aug 6, 2026 · Latest visible patch · 1.0.8",
  liveStatus: "LIVE",
  checkStatus: "CHECK",
  emptyCode: "暂无",
  fieldManual: "FIELD MANUAL",
  confirmedSystems: "Explore the confirmed systems",
  confirmedSystemsDescription: "Use the archive to move from official game systems into source-labelled player guides.",
  sourceLabelled: "SOURCE LABELLED",
  patchDate: "PATCH 1.0.8 · AUG 10, 2026",
  latestVisiblePatch: "latest visible patch",
  publicBuildChecked: "PUBLIC BUILD · CHECKED AUG 12",
  coreFiles: "CORE FILES",
  verifiedGuides: "Verified guides to start with",
  verifiedGuidesDescription: "These pages are anchored to official release information and carry a visible version check.",
  openFile: "OPEN FILE",
  playerTools: "PLAYER TOOLS",
  playerToolsTitle: "Plan the run with your own evidence",
  playerToolsDescription: "Transparent helpers for current in-game values and private faction notes. They never invent a success formula.",
  playerInput: "PLAYER INPUT",
  noServerData: "NO SERVER DATA",
  openTool: "OPEN TOOL",
  questMatcher: "Quest Matcher",
  questMatcherDescription: "Compare the requirement visible in your game with a Knight's visible stat and review traits and equipment separately.",
  factionTracker: "Faction Tracker",
  factionTrackerDescription: "Save the relationship states and run notes you observe for Merchants, Mystics, Scholars, Nobles, People and Treasury.",
  keywordIndex: "KEYWORD INDEX",
  researchedSourceFiltered: "RESEARCHED · SOURCE FILTERED",
  oneSearch: "One search.",
  oneFieldPage: "One field page.",
  keywordIndexDescription: "Browse the researched Sovereign Tower queries. Each page leads with a direct answer, identifies its evidence level and records the current build date.",
  keywordPages: "keyword pages",
  officialCommunity: "OFFICIAL + COMMUNITY",
  querySuffix: "queries",
  pages: "pages",
  sources: "sources",
  viewFieldPage: "VIEW FIELD PAGE",
  backToKeywordIndex: "Back to keyword index",
  sourceLinks: "source links",
  lastChecked: "LAST CHECKED",
  keywordPage: "KEYWORD PAGE",
  fieldPage: "FIELD PAGE",
  factsFirst: "FACTS FIRST",
  noFabricatedCodes: "NO FABRICATED CODES",
  evidenceStatus: "Evidence status",
  noReliableCodes: "No reliable redemption codes were found in the supplied research.",
  codeLabel: "CODE",
  sourceFilter: "Source filter",
  evidenceNote: "Evidence note",
  evidenceNoteDescription: "Community routes, exact values and live platform data can change by build.",
  sourcesHeading: "Sources",
  categorySourceLabelled: "SOURCE LABELLED",
  confirmedForLaunch: "CONFIRMED FOR LAUNCH",
  fieldNote: "FIELD NOTE",
  fieldNoteTitle: "Read the evidence around the choice.",
  fieldNoteDescription: "Start from the live index, follow one system at a time, and keep the timeline stable long enough to see what the decision actually changes.",
  fieldReport: "FIELD REPORT",
  publicSourcesCrossChecked: "PUBLIC SOURCES / CROSS-CHECKED",
  checked: "CHECKED",
  fieldGuide: "FIELD GUIDE",
  statsListed: "Stats listed by Steam",
  factionAffinities: "Faction affinities",
  scoringChanges: "Scoring changes apply",
  knightStatsReference: "Knight stats reference",
  timeRewindGuide: "Time rewind guide",
  affinityRomance: "Affinity & romance",
  scopeLabel: "Scope",
  scopeDescription: "Sovereign Tower fan-made guide content, official links and public research notes. This page contains no game codes or private account data.",
  faqEyebrow: "FAQ",
  faqTitleA: "Answers before",
  faqTitleB: "the next choice.",
  faqDescription: "Common Sovereign Tower questions answered from official store data, developer material and version-labelled research.",
  coreAnswers: "core answers",
  checkedDate: "CHECKED AUG 12, 2026",
  needRoute: "Need a route?",
  openFieldFiles: "Open the field files",
  browseGuides: "Browse guides",
  noOfficialCode: "No reliable official redemption code found.",
  searchEyebrow: "SEARCH",
  searchTitleA: "Find the right",
  searchTitleB: "field file.",
  searchDescription: "Search is currently organized as a source-filtered index. Start with a category or use your browser's page search to find a Knight, quest, platform or system.",
  indexedQueries: "indexed queries",
  searchFieldIndex: "Search the field index",
  searchPlaceholder: "Try: Chester, Forge, PS5...",
  searchButton: "Search",
  matches: "matches",
  browseByTopic: "Browse by topic",
  resultsFor: "Results for",
  queryCoordinates: "Query coordinates",
  files: "files",
  noMatchingField: "No matching field file",
  tryBroader: "Try a broader term such as Knight, quest, Forge, Steam or rewind.",
  localizedKeywordTitle: "Localized keyword index",
  localizedKeywordDescription: "Search translated keyword answers. Every result shows a direct answer, evidence level, source links and its last-checked date.",
  localizedKeywordNotice: "Results use the current research snapshot. Recheck the page date after a game update.",
};

export const ui: Record<Locale, UiCopy> = {
  en: englishUi,
  ja: {
    ...englishUi,
    launchNotice: "正式発売 · 2026年8月6日 · 最新確認パッチ · 1.0.8", liveStatus: "公開中", checkStatus: "確認中", emptyCode: "未確認", panelMeta: "確認済みシステム",
    logoAlt: "Sovereign Tower Wiki のロゴ",
    homeAria: "Sovereign Tower Wiki ホーム", brandSub: "· フィールド・コーデックス ·", primaryNavigation: "メインナビゲーション", roundTableOps: "円卓オペレーション", releaseDate: "発売日", platformLine: "Windows · Linux / SteamOS", patchLine: "PATCH 1.0.8 · 2026年8月10日", copyright: "© 2026 Sovereign Tower Wiki", fanMade: "ファン制作", steamSource: "Steam · Sovereign Tower", fieldManual: "フィールドマニュアル", confirmedSystems: "確認済みシステムを探す", confirmedSystemsDescription: "公式情報を出典付きのプレイヤーガイドへつなげるために、アーカイブを使いましょう。", sourceLabelled: "出典表示", patchDate: "PATCH 1.0.8 · 2026年8月10日", latestVisiblePatch: "最新確認パッチ", publicBuildChecked: "公開ビルド · 8月12日確認", coreFiles: "コアファイル", verifiedGuides: "まず読む確認済みガイド", verifiedGuidesDescription: "公式の発売情報を基準にし、確認したバージョンを表示しています。", openFile: "ファイルを開く", playerTools: "プレイヤーツール", playerToolsTitle: "自分の記録でプレイを計画", playerToolsDescription: "ゲーム内の現在値と個人メモを使う透明な補助ツールです。成功率を作りません。", playerInput: "プレイヤー入力", noServerData: "サーバーに保存しません", openTool: "ツールを開く", questMatcher: "クエスト適性チェック", questMatcherDescription: "ゲーム内に表示された条件とナイツの能力値を比較し、特性と装備を別々に確認します。", factionTracker: "派閥トラッカー", factionTrackerDescription: "プレイ中に確認した商人、神秘家、学者、貴族、民衆、財務の関係状態とメモを保存します。", keywordIndex: "キーワード索引", researchedSourceFiltered: "調査済み · 出典フィルター済み", oneSearch: "ひとつの検索。", oneFieldPage: "ひとつのフィールドページ。", keywordIndexDescription: "Sovereign Tower の検索需要を調査した索引です。各ページは直接回答、証拠レベル、現在の確認日を示します。", keywordPages: "キーワードページ", officialCommunity: "公式 + コミュニティ", querySuffix: "の検索", pages: "ページ", sources: "件の出典", viewFieldPage: "ページを見る", backToKeywordIndex: "キーワード索引へ戻る", sourceLinks: "件の出典リンク", lastChecked: "最終確認", keywordPage: "キーワードページ", fieldPage: "フィールドページ", factsFirst: "事実を先に", noFabricatedCodes: "架空コードなし", evidenceStatus: "証拠ステータス", noReliableCodes: "提供された調査では、信頼できる引き換えコードは確認できませんでした。", codeLabel: "コード", sourceFilter: "出典フィルター", evidenceNote: "証拠メモ", evidenceNoteDescription: "コミュニティのルート、正確な数値、ライブのプラットフォーム情報はビルドで変わる可能性があります。", sourcesHeading: "出典", categorySourceLabelled: "出典表示", confirmedForLaunch: "発売版で確認", fieldNote: "フィールドノート", fieldNoteTitle: "選択の周辺にある証拠を確認してください。", fieldNoteDescription: "最新索引から始め、システムをひとつずつ確認し、選択が実際に変えるものを見られるよう時間軸を安定させましょう。", fieldReport: "フィールドレポート", publicSourcesCrossChecked: "公開出典 / 照合済み", checked: "確認済み", fieldGuide: "フィールドガイド", statsListed: "Steam掲載能力値", factionAffinities: "派閥との親密度", scoringChanges: "スコア変更を適用", knightStatsReference: "ナイツ能力値リファレンス", timeRewindGuide: "時間巻き戻しガイド", affinityRomance: "親密度とロマンス", scopeLabel: "対象範囲", scopeDescription: "Sovereign Tower のファン制作ガイド、公式リンク、公開調査メモを扱います。ゲームコードや個人アカウント情報は掲載しません。", faqEyebrow: "よくある質問", faqTitleA: "次の選択の前に", faqTitleB: "答えを確認。", faqDescription: "公式ストア情報、開発者資料、バージョン付き調査に基づく Sovereign Tower のよくある質問です。", coreAnswers: "基本回答", checkedDate: "2026年8月12日確認", needRoute: "ルートを探していますか？", openFieldFiles: "フィールドファイルを開く", browseGuides: "ガイドを見る", noOfficialCode: "信頼できる公式引き換えコードは確認できませんでした。", searchEyebrow: "検索", searchTitleA: "必要な", searchTitleB: "フィールドファイルを探す。", searchDescription: "出典で絞り込んだ索引を検索できます。カテゴリから始めるか、ブラウザのページ内検索でナイツ、クエスト、プラットフォーム、システムを探してください。", indexedQueries: "登録済み検索語", searchFieldIndex: "フィールド索引を検索", searchPlaceholder: "例：Chester、Forge、PS5…", searchButton: "検索", matches: "件が一致", browseByTopic: "トピックから探す", resultsFor: "検索結果：", queryCoordinates: "検索座標", files: "件", noMatchingField: "一致するフィールドファイルなし", tryBroader: "Knight、quest、Forge、Steam、rewind など広い語を試してください。", localizedKeywordTitle: "ローカライズ済みキーワード索引", localizedKeywordDescription: "翻訳済みのキーワード回答を検索できます。各結果には直接回答、証拠レベル、出典リンク、確認日が表示されます。", localizedKeywordNotice: "検索結果は現在の調査スナップショットに基づきます。ゲーム更新後は各ページの確認日を見直してください。",
  },
  ko: {
    ...englishUi,
    launchNotice: "정식 출시 · 2026년 8월 6일 · 최신 확인 패치 · 1.0.8", liveStatus: "공개", checkStatus: "확인 중", emptyCode: "미확인", panelMeta: "확인된 시스템",
    logoAlt: "Sovereign Tower Wiki 로고",
    homeAria: "Sovereign Tower Wiki 홈", brandSub: "· 필드 코덱스 ·", primaryNavigation: "주요 탐색", roundTableOps: "라운드 테이블 작전", releaseDate: "출시일", patchLine: "PATCH 1.0.8 · 2026년 8월 10일", copyright: "© 2026 Sovereign Tower Wiki", fanMade: "팬 제작", steamSource: "Steam · Sovereign Tower", fieldManual: "필드 매뉴얼", confirmedSystems: "확인된 시스템 탐색", confirmedSystemsDescription: "공식 시스템에서 출처가 표시된 플레이어 가이드로 이동하려면 아카이브를 사용하세요.", sourceLabelled: "출처 표시", patchDate: "PATCH 1.0.8 · 2026년 8월 10일", latestVisiblePatch: "최신 확인 패치", publicBuildChecked: "공개 빌드 · 8월 12일 확인", coreFiles: "핵심 파일", verifiedGuides: "먼저 볼 검증 가이드", verifiedGuidesDescription: "공식 출시 정보를 기준으로 하며 확인한 버전을 표시합니다.", openFile: "파일 열기", playerTools: "플레이어 도구", playerToolsTitle: "내 기록으로 플레이 계획하기", playerToolsDescription: "현재 게임 값과 개인 세력 메모를 위한 투명한 도구입니다. 성공 공식을 만들어내지 않습니다.", playerInput: "플레이어 입력", noServerData: "서버 저장 없음", openTool: "도구 열기", questMatcher: "퀘스트 매칭 도구", questMatcherDescription: "게임에 표시된 요구 수치와 나이트의 표시 스탯을 비교하고 특성과 장비를 따로 확인합니다.", factionTracker: "세력 추적기", factionTrackerDescription: "플레이 중 확인한 상인, 신비주의자, 학자, 귀족, 민중, 재무부의 관계 상태와 메모를 저장합니다.", keywordIndex: "키워드 색인", researchedSourceFiltered: "조사 완료 · 출처 필터링", oneSearch: "하나의 검색.", oneFieldPage: "하나의 필드 페이지.", keywordIndexDescription: "조사된 Sovereign Tower 검색어를 둘러보세요. 각 페이지는 직접 답변, 근거 수준과 현재 확인 날짜를 표시합니다.", keywordPages: "키워드 페이지", officialCommunity: "공식 + 커뮤니티", querySuffix: " 검색", pages: "페이지", sources: "개 출처", viewFieldPage: "페이지 보기", backToKeywordIndex: "키워드 색인으로 돌아가기", sourceLinks: "개 출처 링크", lastChecked: "최종 확인", keywordPage: "키워드 페이지", fieldPage: "필드 페이지", factsFirst: "사실 우선", noFabricatedCodes: "가짜 코드 없음", evidenceStatus: "근거 상태", noReliableCodes: "제공된 조사에서 신뢰할 수 있는 교환 코드를 확인하지 못했습니다.", codeLabel: "코드", sourceFilter: "출처 필터", evidenceNote: "근거 메모", evidenceNoteDescription: "커뮤니티 경로, 정확한 값과 실시간 플랫폼 정보는 빌드에 따라 달라질 수 있습니다.", sourcesHeading: "출처", categorySourceLabelled: "출처 표시", confirmedForLaunch: "출시 버전 확인", fieldNote: "필드 메모", fieldNoteTitle: "선택 주변의 근거를 확인하세요.", fieldNoteDescription: "현재 색인에서 시작해 시스템을 하나씩 확인하고, 선택이 실제로 바꾸는 것을 볼 수 있도록 타임라인을 안정적으로 유지하세요.", fieldReport: "필드 리포트", publicSourcesCrossChecked: "공개 출처 / 교차 확인", checked: "확인됨", fieldGuide: "필드 가이드", statsListed: "Steam에 표시된 스탯", factionAffinities: "세력 친밀도", scoringChanges: "점수 변경 적용", knightStatsReference: "나이트 스탯 참고", timeRewindGuide: "시간 되감기 가이드", affinityRomance: "친밀도와 로맨스", scopeLabel: "범위", scopeDescription: "Sovereign Tower 팬 가이드, 공식 링크와 공개 조사 메모를 다룹니다. 게임 코드나 개인 계정 정보는 포함하지 않습니다.", faqEyebrow: "자주 묻는 질문", faqTitleA: "다음 선택 전에", faqTitleB: "답을 확인하세요.", faqDescription: "공식 상점 정보, 개발자 자료와 버전이 표시된 조사를 바탕으로 Sovereign Tower의 질문에 답합니다.", coreAnswers: "핵심 답변", checkedDate: "2026년 8월 12일 확인", needRoute: "경로가 필요하신가요?", openFieldFiles: "필드 파일 열기", browseGuides: "가이드 보기", noOfficialCode: "신뢰할 수 있는 공식 교환 코드를 찾지 못했습니다.", searchEyebrow: "검색", searchTitleA: "맞는", searchTitleB: "필드 파일 찾기.", searchDescription: "출처로 필터링된 색인입니다. 카테고리로 시작하거나 브라우저 찾기에서 나이트, 퀘스트, 플랫폼 또는 시스템을 검색하세요.", indexedQueries: "색인된 검색어", searchFieldIndex: "필드 색인 검색", searchPlaceholder: "예: Chester, Forge, PS5…", searchButton: "검색", matches: "개 일치", browseByTopic: "주제로 탐색", resultsFor: "검색 결과:", queryCoordinates: "검색 좌표", files: "개 파일", noMatchingField: "일치하는 필드 파일 없음", tryBroader: "Knight, quest, Forge, Steam 또는 rewind처럼 더 넓은 단어를 시도하세요.", localizedKeywordTitle: "로컬라이즈된 키워드 색인", localizedKeywordDescription: "번역된 키워드 답변을 검색할 수 있습니다. 각 결과에는 직접 답변, 근거 수준, 출처 링크와 확인 날짜가 표시됩니다.", localizedKeywordNotice: "검색 결과는 현재 조사 스냅샷을 기준으로 합니다. 게임 업데이트 후 각 페이지의 확인 날짜를 다시 보세요.",
  },
  fr: {
    ...englishUi,
    launchNotice: "Sortie officielle · 6 août 2026 · Dernier patch vérifié · 1.0.8", liveStatus: "ACTIF", checkStatus: "VÉRIFIER", emptyCode: "Non confirmé", panelMeta: "SYSTÈMES CONFIRMÉS",
    logoAlt: "Logo du wiki Sovereign Tower",
    homeAria: "Accueil du wiki Sovereign Tower", brandSub: "· CODEX DE TERRAIN ·", primaryNavigation: "Navigation principale", roundTableOps: "OPÉRATIONS DE LA TABLE RONDE", releaseDate: "DATE DE SORTIE", patchLine: "PATCH 1.0.8 · 10 AOÛT 2026", copyright: "© 2026 Sovereign Tower Wiki", fanMade: "Créé par des fans", steamSource: "Steam · Sovereign Tower", fieldManual: "MANUEL DE TERRAIN", confirmedSystems: "Explorer les systèmes confirmés", confirmedSystemsDescription: "Utilisez l'archive pour passer des systèmes officiels aux guides joueurs avec leurs sources.", sourceLabelled: "SOURCE IDENTIFIÉE", patchDate: "PATCH 1.0.8 · 10 AOÛT 2026", latestVisiblePatch: "dernier patch vérifié", publicBuildChecked: "VERSION PUBLIQUE · VÉRIFIÉE LE 12 AOÛT", coreFiles: "FICHIERS PRINCIPAUX", verifiedGuides: "Guides vérifiés pour commencer", verifiedGuidesDescription: "Ces pages s'appuient sur les informations officielles de sortie et affichent leur version de vérification.", openFile: "OUVRIR LE FICHIER", playerTools: "OUTILS JOUEUR", playerToolsTitle: "Planifier la partie avec vos propres preuves", playerToolsDescription: "Des aides transparentes pour les valeurs du jeu et les notes privées de faction. Elles n'inventent aucune formule de réussite.", playerInput: "SAISIE JOUEUR", noServerData: "AUCUNE DONNÉE SERVEUR", openTool: "OUVRIR L'OUTIL", questMatcher: "Association de quête", questMatcherDescription: "Comparez la condition visible en jeu avec la statistique visible d'un Chevalier et vérifiez séparément traits et équipement.", factionTracker: "Suivi des factions", factionTrackerDescription: "Enregistrez les relations et notes observées pour les Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie.", keywordIndex: "INDEX DES MOTS-CLÉS", researchedSourceFiltered: "RECHERCHÉ · SOURCES FILTRÉES", oneSearch: "Une recherche.", oneFieldPage: "Une page de terrain.", keywordIndexDescription: "Parcourez les requêtes Sovereign Tower étudiées. Chaque page donne une réponse directe, son niveau de preuve et sa date de vérification.", keywordPages: "pages de mots-clés", officialCommunity: "OFFICIEL + COMMUNAUTÉ", querySuffix: " requêtes", pages: "pages", sources: "sources", viewFieldPage: "VOIR LA PAGE", backToKeywordIndex: "Retour à l'index des mots-clés", sourceLinks: "liens sources", lastChecked: "DERNIÈRE VÉRIFICATION", keywordPage: "PAGE MOT-CLÉ", fieldPage: "PAGE DE TERRAIN", factsFirst: "FAITS D'ABORD", noFabricatedCodes: "AUCUN CODE INVENTÉ", evidenceStatus: "État des preuves", noReliableCodes: "Aucun code d'échange fiable n'a été trouvé dans les sources fournies.", codeLabel: "CODE", sourceFilter: "Filtre des sources", evidenceNote: "Note de preuve", evidenceNoteDescription: "Les routes communautaires, valeurs exactes et données de plateforme en direct peuvent changer selon la version.", sourcesHeading: "Sources", categorySourceLabelled: "SOURCE IDENTIFIÉE", confirmedForLaunch: "CONFIRMÉ POUR LA SORTIE", fieldNote: "NOTE DE TERRAIN", fieldNoteTitle: "Lisez les preuves autour du choix.", fieldNoteDescription: "Commencez par l'index à jour, suivez un système à la fois et stabilisez la timeline assez longtemps pour voir ce que la décision modifie réellement.", fieldReport: "RAPPORT DE TERRAIN", publicSourcesCrossChecked: "SOURCES PUBLIQUES / CROISÉES", checked: "VÉRIFIÉ", fieldGuide: "GUIDE DE TERRAIN", statsListed: "Stats listées par Steam", factionAffinities: "Affinités de faction", scoringChanges: "Changements de score appliqués", knightStatsReference: "Référence des stats des Chevaliers", timeRewindGuide: "Guide du rembobinage", affinityRomance: "Affinité et romance", scopeLabel: "Périmètre", scopeDescription: "Guides fan de Sovereign Tower, liens officiels et notes de recherche publiques. Aucun code de jeu ni compte privé n'est publié.", faqEyebrow: "FAQ", faqTitleA: "Les réponses avant", faqTitleB: "le prochain choix.", faqDescription: "Les questions courantes de Sovereign Tower, fondées sur les données officielles, les documents du développeur et une recherche versionnée.", coreAnswers: "réponses clés", checkedDate: "VÉRIFIÉ LE 12 AOÛT 2026", needRoute: "Besoin d'une route ?", openFieldFiles: "Ouvrir les fichiers de terrain", browseGuides: "Parcourir les guides", noOfficialCode: "Aucun code officiel fiable trouvé.", searchEyebrow: "RECHERCHE", searchTitleA: "Trouver le bon", searchTitleB: "fichier de terrain.", searchDescription: "La recherche utilise un index filtré par source. Commencez par une catégorie ou cherchez un Chevalier, une quête, une plateforme ou un système.", indexedQueries: "requêtes indexées", searchFieldIndex: "Rechercher dans l'index", searchPlaceholder: "Ex. : Chester, Forge, PS5…", searchButton: "Rechercher", matches: "résultat(s)", browseByTopic: "Parcourir par sujet", resultsFor: "Résultats pour", queryCoordinates: "Coordonnées de recherche", files: "fichiers", noMatchingField: "Aucun fichier correspondant", tryBroader: "Essayez un terme plus large comme Knight, quest, Forge, Steam ou rewind.", localizedKeywordTitle: "Index des mots-clés localisés", localizedKeywordDescription: "Recherchez les réponses de mots-clés traduites. Chaque résultat affiche une réponse directe, un niveau de preuve, des liens sources et une date de vérification.", localizedKeywordNotice: "Les résultats utilisent l'instantané de recherche actuel. Revérifiez la date de chaque page après une mise à jour du jeu.",
  },
};

export type CategoryViewCopy = {
  title: string;
  tag: string;
  description: string;
  detailLabel: string;
  detailTitle: string;
  detailParagraphs: string[];
};

const categoryTranslations: Record<Exclude<Locale, "en">, Record<string, CategoryViewCopy>> = {
  ja: {
    knights: { title: "ナイツとキャラクター", tag: "仲間にする", description: "能力値、特性、好み、個人の物語を持つナイツを仲間にし、育て、装備して派遣します。", detailLabel: "キャラクター資料", detailTitle: "仲間にし、育て、装備してナイツを派遣する。", detailParagraphs: ["ナイツにはそれぞれ異なる能力値、良い特性と悪い特性、好み、関係、個人の物語があります。単なる数値ではなく、クエストの展開にも影響します。", "公式資料はナイツの管理とクエストへの派遣を確認しています。完全な加入条件、成長条件、ルート条件は公開情報が一致しない部分もあるため、現在のビルドで確認してください。"] },
    systems: { title: "ゲームシステム", tag: "メカニクス", description: "円卓、派閥との親密度、Forge、Sovereign Mode、Demon の時間巻き戻しを確認します。", detailLabel: "システム資料", detailTitle: "円卓、Annex、親密度、時間巻き戻し。", detailParagraphs: ["確認済みのゲームループには、円卓の管理、クエストの派遣、関係の調整、Annex による塔の拡張、Demon を使った時間巻き戻しが含まれます。", "正確なバランス値や正式なシステムのしきい値にはバージョン差があるため、現在の Steam ビルドと照合してください。"] },
    romance: { title: "ロマンスと親密度", tag: "関係", description: "ロマンスはゲームタグで確認できます。完全なロマンスルート一覧はまだ公開情報だけでは整理できません。", detailLabel: "関係資料", detailTitle: "ロマンスは存在するが、全ルートは未整理。", detailParagraphs: ["ロマンスはゲームタグに掲載され、Demo 資料には塔のキャラクターとの特別な交流が示されています。PC Gamer もキャラクター同士の flirtation に触れています。", "完全なロマンス対象と条件はまだ確認できません。すべてのナイツに確定した恋愛エンディングがあるとは説明しないでください。"] },
    story: { title: "物語と選択", tag: "分岐", description: "殺人の結果、Unexpected Outcomes、エンディング、時間軸の選択を整理します。", detailLabel: "ストーリー資料", detailTitle: "殺人、予想外の結果、巻き戻された時間軸。", detailParagraphs: ["公開資料は、殺人・暗殺の結果、Unexpected Outcomes、知識を保ったまま時間を巻き戻す Demon を確認しています。", "完全なエンディング一覧、Gideon の死亡条件、告発の固定回答は調査素材だけでは確定していません。"] },
    news: { title: "ニュースと更新", tag: "PATCH 1.0.8", description: "2026年8月10日の表示パッチを基準に、クエストスコア、Dragon Knight の難易度、Forge 修理費の変更を確認します。", detailLabel: "更新資料", detailTitle: "PATCH 1.0.8 が現在のガイド基準を変更。", detailParagraphs: ["提供された 1.0.8 ノートは、2026年8月10日を最新表示パッチとし、クエストスコア、Dragon Knight の難易度、Forge 修理費の変更を報告しています。", "レビュー数、プラットフォーム状況、コミュニティのルート情報は変化するため、公開前に再確認してください。"] },
  },
  ko: {
    knights: { title: "나이트와 캐릭터", tag: "영입", description: "표시 스탯, 특성, 선호도와 개인 스토리를 가진 나이트를 영입하고 성장시키고 장비를 갖춰 파견합니다.", detailLabel: "캐릭터 자료", detailTitle: "나이트를 영입하고 성장시키고 파견하세요.", detailParagraphs: ["각 나이트는 서로 다른 스탯, 긍정·부정 특성, 선호도, 관계와 개인 스토리를 가집니다. 단순한 숫자가 아니라 퀘스트 전개에도 영향을 줍니다.", "공식 자료는 나이트 관리와 퀘스트 배정을 확인합니다. 완전한 영입·성장·루트 조건은 공개 자료가 일치하지 않는 부분이 있으므로 현재 빌드에서 확인하세요."] },
    systems: { title: "게임 시스템", tag: "메커니즘", description: "라운드 테이블, 세력 친밀도, Forge, Sovereign Mode와 Demon의 시간 되감기를 확인합니다.", detailLabel: "시스템 자료", detailTitle: "라운드 테이블, Annex, 친밀도와 시간 되감기.", detailParagraphs: ["확인된 게임 루프에는 라운드 테이블 관리, 퀘스트 배정, 관계 조정, Annex를 통한 타워 확장과 Demon을 통한 시간 되감기가 포함됩니다.", "정확한 밸런스 값과 일부 공식 시스템 기준은 버전에 따라 달라질 수 있으므로 현재 Steam 빌드와 대조하세요."] },
    romance: { title: "로맨스와 친밀도", tag: "관계", description: "로맨스는 게임 태그로 확인됩니다. 전체 로맨스 루트 목록은 공개 자료만으로 아직 정리되지 않았습니다.", detailLabel: "관계 자료", detailTitle: "로맨스는 존재하지만 전체 루트는 미정리.", detailParagraphs: ["로맨스는 게임 태그에 표시되며 Demo 자료에는 타워 캐릭터와의 특별한 상호작용이 확인됩니다. PC Gamer도 캐릭터 간 플러팅을 언급했습니다.", "전체 로맨스 대상과 조건은 아직 확인되지 않았습니다. 모든 나이트에게 확정된 로맨스 엔딩이 있다고 설명하지 마세요."] },
    story: { title: "스토리와 선택", tag: "분기", description: "살인 결과, Unexpected Outcomes, 엔딩과 타임라인 선택을 정리합니다.", detailLabel: "스토리 자료", detailTitle: "살인, 예상 밖의 결과와 되감긴 타임라인.", detailParagraphs: ["공개 자료는 살인·암살 결과, Unexpected Outcomes, 지식을 유지한 채 시간을 되돌리는 Demon을 확인합니다.", "전체 엔딩 목록, Gideon 사망 조건과 고정된 범인 지목 답변은 조사 자료만으로 확정되지 않았습니다."] },
    news: { title: "뉴스와 업데이트", tag: "PATCH 1.0.8", description: "2026년 8월 10일 패치를 기준으로 퀘스트 점수, Dragon Knight 난이도와 Forge 수리 비용 변경을 확인합니다.", detailLabel: "업데이트 자료", detailTitle: "PATCH 1.0.8이 현재 가이드 기준을 바꿉니다.", detailParagraphs: ["제공된 1.0.8 노트는 2026년 8월 10일을 최신 표시 패치로 기록하며 퀘스트 점수, Dragon Knight 난이도와 Forge 수리 비용의 변경을 설명합니다.", "리뷰 수, 플랫폼 상태와 커뮤니티 루트 정보는 바뀔 수 있으므로 공개 전에 다시 확인하세요."] },
  },
  fr: {
    knights: { title: "Chevaliers et personnages", tag: "RECRUTEMENT", description: "Recrutez, entraînez, équipez et envoyez des Chevaliers avec leurs stats, traits, préférences et histoires personnelles.", detailLabel: "DOSSIER PERSONNAGE", detailTitle: "Recruter, entraîner, équiper et envoyer les Chevaliers.", detailParagraphs: ["Chaque Chevalier possède des stats, des traits positifs ou négatifs, des préférences, des relations et une histoire personnelle. Ce ne sont pas seulement des chiffres : ils peuvent modifier une quête.", "Les sources officielles confirment la gestion des Chevaliers et l'affectation aux quêtes. Les conditions complètes de recrutement, d'évolution et de route doivent être vérifiées dans la version actuelle lorsque les sources divergent."] },
    systems: { title: "Systèmes de jeu", tag: "MÉCANIQUES", description: "Table Ronde, affinités de faction, Forge, Sovereign Mode et rembobinage du Démon.", detailLabel: "DOSSIER SYSTÈME", detailTitle: "Table Ronde, Annexes, affinité et rembobinage.", detailParagraphs: ["La boucle confirmée comprend la gestion de la Table Ronde, l'envoi de quêtes, l'équilibre des relations, l'extension de la Tour par les Annexes et le rembobinage avec le Démon.", "Les valeurs d'équilibrage exactes et certains seuils formels dépendent de la version. Vérifiez-les dans la version Steam actuelle."] },
    romance: { title: "Romance et affinité", tag: "RELATIONS", description: "La romance est un tag confirmé ; la liste complète des routes n'est pas encore documentée.", detailLabel: "DOSSIER RELATION", detailTitle: "La romance existe, mais toutes les routes restent à documenter.", detailParagraphs: ["La romance apparaît dans les tags du jeu et les documents de la Demo confirment des interactions spéciales avec les personnages de la Tour. PC Gamer mentionne aussi le flirt entre personnages.", "Le roster complet des routes et leurs conditions n'est pas encore documenté. Ne présentez pas chaque Chevalier comme ayant une fin romantique confirmée."] },
    story: { title: "Histoire et choix", tag: "BRANCHES", description: "Conséquences de meurtre, Unexpected Outcomes, fins et choix de timeline.", detailLabel: "DOSSIER HISTOIRE", detailTitle: "Meurtre, résultats inattendus et timelines rembobinées.", detailParagraphs: ["Les sources publiques confirment les conséquences de meurtre ou d'assassinat, les Unexpected Outcomes et un Démon capable de rembobiner la timeline en conservant les connaissances.", "La liste complète des fins, les conditions de mort de Gideon et les réponses fixes pour une accusation restent ouvertes dans les sources étudiées."] },
    news: { title: "Actualités et mises à jour", tag: "PATCH 1.0.8", description: "Le patch visible du 10 août 2026 modifie le score des quêtes, la difficulté du Dragon Knight et les réparations de la Forge.", detailLabel: "DOSSIER SIGNAL", detailTitle: "Le PATCH 1.0.8 définit la base actuelle des guides.", detailParagraphs: ["Les notes 1.0.8 fournies identifient le 10 août 2026 comme dernier patch visible et signalent des changements de score, de difficulté du Dragon Knight et de coût de réparation de la Forge.", "Les avis, l'état des plateformes et les détails de routes communautaires peuvent changer. Revérifiez-les avant publication."] },
  },
};

export function localizedCategory(locale: Locale, slug: string) {
  const base = categories.find((item) => item.slug === slug);
  if (!base) return null;
  return locale === "en" ? base : { ...base, ...categoryTranslations[locale][slug] };
}

export function localizedCategoryDetail(locale: Locale, slug: string): CategoryViewCopy | null {
  const base = categories.find((item) => item.slug === slug);
  if (!base) return null;
  if (locale === "en") return { title: base.title, tag: base.tag, description: base.description, detailLabel: base.tag, detailTitle: base.title, detailParagraphs: [base.description] };
  return categoryTranslations[locale][slug] ?? null;
}

type JourneyCopy = { title: string; description: string };
const journeyTranslations: Record<Exclude<Locale, "en">, JourneyCopy[]> = {
  ja: [
    { title: "初心者ガイド", description: "初日のゲームループ、円卓の基本、王国の判断、ナイツの加入、序盤の進行を形作るシステムを学びます。" },
    { title: "ナイツとクエストの適性", description: "Steam掲載の5能力値、特性、装備をクエスト派遣にどう当てはめるか、Luckの報告に必要なバージョン文脈を確認します。" },
    { title: "親密度と王国の選択", description: "商人、神秘家、学者、貴族、民衆、財務の関係を理解し、判断が未来のイベントをどう変えるかを追います。" },
    { title: "時間巻き戻しガイド", description: "Demon と時間巻き戻し、持ち越される知識、過去の判断を変えることで開く会話、イベント、結果を確認します。" },
  ],
  ko: [
    { title: "초보자 가이드", description: "첫날 게임 루프, 라운드 테이블, 왕국의 판단, 나이트 영입과 초반 진행을 바꾸는 시스템을 배웁니다." },
    { title: "나이트와 퀘스트 매칭", description: "Steam에 표시된 5개 스탯, 특성과 장비를 퀘스트 배정에 적용하는 법과 Luck 보고서의 버전 맥락을 확인합니다." },
    { title: "친밀도와 왕국 선택", description: "상인, 신비주의자, 학자, 귀족, 민중과 재무부 관계를 이해하고 선택이 미래 이벤트를 바꾸는 방식을 살펴봅니다." },
    { title: "시간 되감기 가이드", description: "Demon과 시간 되감기, 이어지는 지식, 과거 결정을 바꿀 때 열리는 대화와 이벤트를 확인합니다." },
  ],
  fr: [
    { title: "Guide du débutant", description: "Apprenez la boucle du premier jour, la Table Ronde, les décisions du royaume, le recrutement des Chevaliers et les systèmes du début de partie." },
    { title: "Association Chevalier–quête", description: "Voyez comment les cinq stats listées par Steam, les traits et l'équipement servent à affecter une quête, et pourquoi Luck doit rester contextualisé." },
    { title: "Affinité et choix du royaume", description: "Comprenez les Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie, puis observez l'effet des choix sur les relations et les événements." },
    { title: "Guide du rembobinage", description: "Découvrez le Démon, les connaissances conservées entre timelines et les dialogues, événements ou résultats ouverts par un choix différent." },
  ],
};

export function localizedJourney(locale: Locale, index: number, fallback: { title: string; description: string }) {
  return locale === "en" ? fallback : journeyTranslations[locale][index] ?? fallback;
}

type SpotlightCopy = { title: string; meta: string; tag: string };
const spotlightTranslations: Record<Exclude<Locale, "en">, SpotlightCopy[]> = {
  ja: [{ title: "ナイツとクエストの適性", meta: "公式 · STEAM", tag: "コアループ" }, { title: "時間巻き戻し", meta: "DEMON · 公式", tag: "システム" }, { title: "塔の Annex", meta: "公式 · DEMO", tag: "進行" }, { title: "ロマンスと親密度", meta: "ルート · 出典表示", tag: "関係" }],
  ko: [{ title: "나이트와 퀘스트 매칭", meta: "공식 · STEAM", tag: "핵심 루프" }, { title: "시간 되감기", meta: "DEMON · 공식", tag: "시스템" }, { title: "타워 Annex", meta: "공식 · DEMO", tag: "진행" }, { title: "로맨스와 친밀도", meta: "루트 · 출처 표시", tag: "관계" }],
  fr: [{ title: "Association Chevalier–quête", meta: "OFFICIEL · STEAM", tag: "BOUCLE" }, { title: "Rembobinage", meta: "DÉMON · OFFICIEL", tag: "SYSTÈME" }, { title: "Annexes de la Tour", meta: "OFFICIEL · DEMO", tag: "PROGRESSION" }, { title: "Romance et affinité", meta: "ROUTES · SOURCES", tag: "RELATIONS" }],
};

export function localizedSpotlight(locale: Locale, index: number, fallback: SpotlightCopy) {
  return locale === "en" ? fallback : spotlightTranslations[locale][index] ?? fallback;
}

const statTranslations: Record<Exclude<Locale, "en">, { label: string; value: string }[]> = {
  ja: [{ label: "開発元", value: "WILD WITS GAMES" }, { label: "パブリッシャー", value: "Curve Games" }, { label: "プラットフォーム", value: "Windows · SteamOS / Linux" }, { label: "ジャンル", value: "物語重視の管理 RPG / ビジュアルノベル" }, { label: "Steam 評価", value: "非常に好評 · ライブ表示" }, { label: "Steam レビュー", value: "ライブ件数 · Steamで確認" }, { label: "実績", value: "75" }, { label: "ナイツ能力値", value: "5掲載 · Luckは情報が分かれる" }, { label: "対応言語", value: "6" }],
  ko: [{ label: "개발사", value: "WILD WITS GAMES" }, { label: "배급사", value: "Curve Games" }, { label: "플랫폼", value: "Windows · SteamOS / Linux" }, { label: "장르", value: "내러티브 경영 RPG / 비주얼 노벨" }, { label: "Steam 평가", value: "매우 긍정적 · 실시간 표시" }, { label: "Steam 리뷰", value: "실시간 수치 · Steam 확인" }, { label: "업적", value: "75" }, { label: "나이트 스탯", value: "5개 표시 · Luck은 충돌 있음" }, { label: "지원 언어", value: "6" }],
  fr: [{ label: "Développeur", value: "WILD WITS GAMES" }, { label: "Éditeur", value: "Curve Games" }, { label: "Plateforme", value: "Windows · SteamOS / Linux" }, { label: "Genre", value: "RPG de gestion narratif / visual novel" }, { label: "Note Steam", value: "Très positive · affichage live" }, { label: "Avis Steam", value: "Compteur live · voir Steam" }, { label: "Succès", value: "75" }, { label: "Stats des Chevaliers", value: "5 listées · conflit sur Luck" }, { label: "Langues supportées", value: "6" }],
};

export function localizedStats(locale: Locale, fallback: readonly { label: string; value: string }[]) {
  return locale === "en" ? fallback : statTranslations[locale];
}

const guideTranslations: Record<Exclude<Locale, "en">, Record<string, { title: string; description: string; category: string; tag: string; readTime: string }>> = {
  ja: {
    "beginner-guide": { title: "Sovereign Tower 初心者ガイド：初日と基本ループ", description: "謁見、円卓での派遣、ナイツ管理、派閥、Annex、Demon の巻き戻しという確認済みループを学びます。", category: "初心者ガイド", tag: "ここから開始", readTime: "コアガイド" },
    "quest-matching": { title: "クエスト適性ガイド：能力値、リスク、予想外の結果", description: "Sovereign Tower でチームを派遣する前に、ナイツの能力値、親密度、クエストのリスクを読む方法。", category: "クエストと攻略", tag: "フィールドレポート", readTime: "フィールドガイド" },
    "patch-1-0-8": { title: "Sovereign Tower PATCH 1.0.8：変更点と修正", description: "クエストスコア、Dragon Knight の難易度、Forge 修理、バグ、操作性に関する公式変更を確認します。", category: "ニュースと更新", tag: "公式ノート", readTime: "パッチ資料" },
    achievements: { title: "Sovereign Tower 実績：Steam の75目標", description: "75件の Steam 実績について公式に確認できる範囲と、条件を捏造せず現在の一覧を使う方法。", category: "実績", tag: "Steam 索引", readTime: "リファレンス" },
    "system-requirements": { title: "Sovereign Tower Windows / SteamOS 動作要件", description: "Windows と SteamOS/Linux 向けの公式 Steam 最低・推奨要件を確認します。", category: "プラットフォーム", tag: "公式仕様", readTime: "リファレンス" },
  },
  ko: {
    "beginner-guide": { title: "Sovereign Tower 초보자 가이드: 첫날과 핵심 루프", description: "알현, 라운드 테이블 배정, 나이트 관리, 세력, Annex와 Demon 되감기라는 확인된 루프를 배웁니다.", category: "초보자 가이드", tag: "여기서 시작", readTime: "핵심 가이드" },
    "quest-matching": { title: "퀘스트 매칭 가이드: 스탯, 위험과 예상 밖의 결과", description: "Sovereign Tower에서 팀을 보내기 전 나이트 스탯, 친밀도와 퀘스트 위험을 읽는 방법입니다.", category: "퀘스트와 공략", tag: "필드 리포트", readTime: "필드 가이드" },
    "patch-1-0-8": { title: "Sovereign Tower PATCH 1.0.8: 변경 사항과 수정", description: "퀘스트 점수, Dragon Knight 난이도, Forge 수리, 버그와 편의성에 관한 공식 변경을 확인합니다.", category: "뉴스와 업데이트", tag: "공식 노트", readTime: "패치 자료" },
    achievements: { title: "Sovereign Tower 업적: Steam 75개 목표", description: "75개 Steam 업적에서 공식적으로 확인되는 범위와 조건을 만들지 않고 현재 목록을 사용하는 방법입니다.", category: "업적", tag: "Steam 색인", readTime: "참고 자료" },
    "system-requirements": { title: "Sovereign Tower Windows 및 SteamOS 사양", description: "Windows와 SteamOS/Linux의 공식 Steam 최소·권장 사양을 확인합니다.", category: "플랫폼", tag: "공식 사양", readTime: "참고 자료" },
  },
  fr: {
    "beginner-guide": { title: "Guide du débutant Sovereign Tower : premier jour et boucle principale", description: "Apprenez la boucle confirmée : audiences, affectations à la Table Ronde, Chevaliers, factions, Annexes et rembobinage du Démon.", category: "Guides du débutant", tag: "COMMENCER ICI", readTime: "GUIDE PRINCIPAL" },
    "quest-matching": { title: "Guide d'association : stats, risques et résultats inattendus", description: "Comment lire les stats des Chevaliers, l'affinité et le risque d'une quête avant d'envoyer une équipe dans Sovereign Tower.", category: "Quêtes et soluces", tag: "RAPPORT DE TERRAIN", readTime: "GUIDE DE TERRAIN" },
    "patch-1-0-8": { title: "Sovereign Tower PATCH 1.0.8 : changements et corrections", description: "Consultez les changements officiels du patch sur le score des quêtes, le Dragon Knight, la Forge, les bugs et le confort.", category: "Actualités et mises à jour", tag: "NOTES OFFICIELLES", readTime: "FICHIER PATCH" },
    achievements: { title: "Succès Sovereign Tower : 75 objectifs Steam", description: "Ce qui est officiellement confirmé sur les 75 succès Steam et comment utiliser la liste actuelle sans inventer de conditions.", category: "Succès", tag: "INDEX STEAM", readTime: "RÉFÉRENCE" },
    "system-requirements": { title: "Configuration requise pour Sovereign Tower sur Windows et SteamOS", description: "Vérifiez la configuration minimale et recommandée officielle de Steam pour Windows et SteamOS/Linux.", category: "Plateformes et disponibilité", tag: "SPÉCIFICATIONS", readTime: "RÉFÉRENCE" },
  },
};

export function localizedGuideMeta(locale: Locale, slug: keyof typeof guideMeta) {
  return locale === "en" ? guideMeta[slug] : guideTranslations[locale][slug] ?? guideMeta[slug];
}

export function localizedFooterLinks(locale: Locale) {
  if (locale === "en") return footerLinks;
  const labels: Record<Exclude<Locale, "en">, { codex: string[]; players: string[]; official: string[] }> = {
    ja: { codex: ["初心者ガイド", "ナイツ", "クエスト", "システム", "選択"], players: ["ガイド", "ニュース", "実績", "動作要件", "クエスト適性", "派閥トラッカー", "Steam", "Steam コミュニティ"], official: ["公式サイト", "Discord", "YouTube"] },
    ko: { codex: ["초보자 가이드", "나이트", "퀘스트", "시스템", "선택"], players: ["가이드", "뉴스", "업적", "시스템 요구 사항", "퀘스트 매칭", "세력 추적기", "Steam", "Steam 커뮤니티"], official: ["공식 웹사이트", "Discord", "YouTube"] },
    fr: { codex: ["Guide du débutant", "Chevaliers", "Quêtes", "Systèmes", "Choix"], players: ["Guides", "Actualités", "Succès", "Configuration", "Association de quête", "Suivi des factions", "Steam", "Communauté Steam"], official: ["Site officiel", "Discord", "YouTube"] },
  };
  const translation = labels[locale];
  return {
    codex: footerLinks.codex.map((item, index) => ({ ...item, label: translation.codex[index] ?? item.label })),
    players: footerLinks.players.map((item, index) => ({ ...item, label: translation.players[index] ?? item.label })),
    official: footerLinks.official.map((item, index) => ({ ...item, label: translation.official[index] ?? item.label })),
  };
}

export type ToolCopy = {
  questMatcher: string;
  factionTracker: string;
  playerInput: string;
  eyebrow: string;
  evidenceAware: string;
  localSave: string;
  planningTool: string;
  noGuaranteedWin: string;
  localStorageOnly: string;
  evidenceRule: string;
  useCurrentValues: string;
  matcherPageDescription: string;
  trackerPageDescription: string;
  questRequirement: string;
  knightValue: string;
  requiredStat: string;
  readFromGame: string;
  readFromRoster: string;
  traitsReviewed: string;
  equipmentReviewed: string;
  comparison: string;
  enterValues: string;
  meetsRequirement: string;
  belowRequirement: string;
  traitsEquipmentReviewed: string;
  reviewContext: string;
  statFootnote: string;
  localNotes: string;
  recordState: string;
  low: string;
  neutral: string;
  high: string;
  runNote: string;
  runNotePlaceholder: string;
  savedLocally: string;
  saveLocalNote: string;
  factionFootnote: string;
  sixSignals: string;
  sixSignalsDescription: string;
};

const englishTools: ToolCopy = {
  questMatcher: "Quest Matcher", factionTracker: "Faction Tracker", playerInput: "PLAYER INPUT", eyebrow: "TOOLS", evidenceAware: "EVIDENCE-AWARE", localSave: "LOCAL SAVE", planningTool: "planning tool", noGuaranteedWin: "NO GUARANTEED WIN", localStorageOnly: "LOCAL STORAGE ONLY", evidenceRule: "Evidence rule", useCurrentValues: "Use current UI values", matcherPageDescription: "Compare what the current game screen shows. The tool keeps the calculation transparent and does not invent a universal quest formula.", trackerPageDescription: "Keep a private note of the relationship states you observe. Nothing is sent to a server and no official threshold is assumed.", questRequirement: "Quest requirement", knightValue: "Knight value", requiredStat: "Required stat", readFromGame: "Read from game", readFromRoster: "Read from roster", traitsReviewed: "Traits reviewed", equipmentReviewed: "Equipment reviewed", comparison: "Comparison", enterValues: "Enter the values shown in your current game screen.", meetsRequirement: "Your stat meets the entered requirement.", belowRequirement: "Your stat is below the entered requirement.", traitsEquipmentReviewed: "Traits and equipment marked reviewed.", reviewContext: "Remember to review traits, equipment, preferences and faction context.", statFootnote: "Steam currently lists Strength, Agility, Charisma, Magic and Wit. Secondary material mentions Luck, so this tool does not assume a universal sixth stat.", localNotes: "LOCAL NOTES", recordState: "Record the relationship state you observe during a run. These labels are your planning notes, not official affinity thresholds.", low: "Low", neutral: "Neutral", high: "High", runNote: "Run note", runNotePlaceholder: "Record the choice, cycle and visible faction response...", savedLocally: "Saved locally", saveLocalNote: "Save local note", factionFootnote: "The official store identifies Merchants, Mystics, Scholars, Nobles, People and Treasury as relationship signals. It does not publish a complete public threshold table.", sixSignals: "Six signals", sixSignalsDescription: "Merchants, Mystics, Scholars, Nobles, People and Treasury are named in the official store description. The complete public affinity table is not available.",
};

export const toolCopy: Record<Locale, ToolCopy> = {
  en: englishTools,
  ja: { ...englishTools, questMatcher: "クエスト適性チェック", factionTracker: "派閥トラッカー", playerInput: "プレイヤー入力", eyebrow: "ツール", evidenceAware: "証拠を重視", localSave: "ローカル保存", planningTool: "計画ツール", noGuaranteedWin: "勝利を保証しません", localStorageOnly: "端末内だけに保存", evidenceRule: "証拠ルール", useCurrentValues: "現在の画面の値を使う", matcherPageDescription: "現在のゲーム画面に表示された情報を比較します。計算を透明にし、万能なクエスト式は作りません。", trackerPageDescription: "プレイ中に確認した関係状態を個人メモとして記録します。サーバーには送信せず、公式のしきい値も仮定しません。", questRequirement: "クエスト条件", knightValue: "ナイツの値", requiredStat: "必要能力値", readFromGame: "ゲーム画面を確認", readFromRoster: "名簿を確認", traitsReviewed: "特性を確認", equipmentReviewed: "装備を確認", comparison: "比較結果", enterValues: "現在のゲーム画面に表示された値を入力してください。", meetsRequirement: "入力した能力値は条件を満たしています。", belowRequirement: "入力した能力値は条件を下回っています。", traitsEquipmentReviewed: "特性と装備を確認済みにしました。", reviewContext: "特性、装備、好み、派閥の状況も確認してください。", statFootnote: "Steamには Strength、Agility、Charisma、Magic、Wit が掲載されています。Luck は別資料にあるため、このツールは6番目の能力値を一律に仮定しません。", localNotes: "ローカルメモ", recordState: "プレイ中に確認した関係状態を記録します。これは計画用メモであり、公式の親密度しきい値ではありません。", low: "低い", neutral: "中立", high: "高い", runNote: "プレイメモ", runNotePlaceholder: "選択、サイクル、表示された派閥の反応を記録…", savedLocally: "端末に保存しました", saveLocalNote: "メモを保存", factionFootnote: "公式ストアは商人、神秘家、学者、貴族、民衆、財務を関係シグナルとして挙げています。完全な公開しきい値表はありません。", sixSignals: "6つのシグナル", sixSignalsDescription: "公式ストアには商人、神秘家、学者、貴族、民衆、財務が記載されています。完全な親密度表は公開されていません。" },
  ko: { ...englishTools, questMatcher: "퀘스트 매칭 도구", factionTracker: "세력 추적기", playerInput: "플레이어 입력", eyebrow: "도구", evidenceAware: "근거 기반", localSave: "로컬 저장", planningTool: "계획 도구", noGuaranteedWin: "승리 보장 없음", localStorageOnly: "로컬 저장만 사용", evidenceRule: "근거 규칙", useCurrentValues: "현재 화면의 값 사용", matcherPageDescription: "현재 게임 화면에 보이는 정보를 비교합니다. 계산을 투명하게 유지하며 만능 퀘스트 공식을 만들지 않습니다.", trackerPageDescription: "플레이 중 관찰한 관계 상태를 개인 메모로 기록합니다. 서버로 전송하지 않으며 공식 기준도 가정하지 않습니다.", questRequirement: "퀘스트 요구 사항", knightValue: "나이트 값", requiredStat: "필요 스탯", readFromGame: "게임에서 확인", readFromRoster: "명단에서 확인", traitsReviewed: "특성 확인", equipmentReviewed: "장비 확인", comparison: "비교", enterValues: "현재 게임 화면에 표시된 값을 입력하세요.", meetsRequirement: "입력한 스탯이 요구 사항을 충족합니다.", belowRequirement: "입력한 스탯이 요구 사항보다 낮습니다.", traitsEquipmentReviewed: "특성과 장비를 확인했습니다.", reviewContext: "특성, 장비, 선호도와 세력 상황도 확인하세요.", statFootnote: "Steam에는 Strength, Agility, Charisma, Magic, Wit가 표시됩니다. 다른 자료에는 Luck이 언급되므로 이 도구는 보편적인 6번째 스탯을 가정하지 않습니다.", localNotes: "로컬 메모", recordState: "플레이 중 관찰한 관계 상태를 기록합니다. 이 라벨은 계획 메모이며 공식 친밀도 기준이 아닙니다.", low: "낮음", neutral: "중립", high: "높음", runNote: "플레이 메모", runNotePlaceholder: "선택, 사이클과 표시된 세력 반응을 기록하세요…", savedLocally: "로컬에 저장됨", saveLocalNote: "로컬 메모 저장", factionFootnote: "공식 상점은 상인, 신비주의자, 학자, 귀족, 민중과 재무부를 관계 신호로 설명합니다. 완전한 공개 기준표는 없습니다.", sixSignals: "6개 신호", sixSignalsDescription: "공식 상점 설명에는 상인, 신비주의자, 학자, 귀족, 민중과 재무부가 언급됩니다. 전체 친밀도 표는 공개되지 않았습니다." },
  fr: { ...englishTools, questMatcher: "Association de quête", factionTracker: "Suivi des factions", playerInput: "SAISIE JOUEUR", eyebrow: "OUTILS", evidenceAware: "PREUVES VISIBLES", localSave: "SAUVEGARDE LOCALE", planningTool: "outil de planification", noGuaranteedWin: "AUCUNE VICTOIRE GARANTIE", localStorageOnly: "STOCKAGE LOCAL UNIQUEMENT", evidenceRule: "Règle de preuve", useCurrentValues: "Utiliser les valeurs visibles", matcherPageDescription: "Comparez ce qu'affiche l'écran actuel. Le calcul reste transparent et n'invente pas de formule universelle de quête.", trackerPageDescription: "Notez en privé les états de relation observés. Rien n'est envoyé à un serveur et aucun seuil officiel n'est supposé.", questRequirement: "Condition de quête", knightValue: "Valeur du Chevalier", requiredStat: "Stat requise", readFromGame: "Lire dans le jeu", readFromRoster: "Lire dans le roster", traitsReviewed: "Traits vérifiés", equipmentReviewed: "Équipement vérifié", comparison: "Comparaison", enterValues: "Saisissez les valeurs visibles dans votre version actuelle.", meetsRequirement: "La stat atteint la condition saisie.", belowRequirement: "La stat est inférieure à la condition saisie.", traitsEquipmentReviewed: "Traits et équipement marqués comme vérifiés.", reviewContext: "Vérifiez aussi les traits, l'équipement, les préférences et le contexte de faction.", statFootnote: "Steam liste Strength, Agility, Charisma, Magic et Wit. Des sources secondaires mentionnent Luck ; l'outil ne suppose donc pas une sixième stat universelle.", localNotes: "NOTES LOCALES", recordState: "Enregistrez l'état de relation observé pendant une partie. Ces choix sont vos notes, pas des seuils officiels.", low: "Bas", neutral: "Neutre", high: "Élevé", runNote: "Note de partie", runNotePlaceholder: "Notez le choix, le cycle et la réaction visible de la faction…", savedLocally: "Enregistré localement", saveLocalNote: "Enregistrer la note", factionFootnote: "La boutique officielle cite Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie comme signaux de relation. Aucun tableau public complet n'est fourni.", sixSignals: "Six signaux", sixSignalsDescription: "La description officielle cite Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie. Le tableau complet des affinités n'est pas disponible." },
};

export const keywordHoldTitle = {
  en: "",
  ja: "このキーワード本文は日本語版を準備中です。",
  ko: "이 키워드 본문은 한국어 버전을 준비 중입니다.",
  fr: "La version française de ce mot-clé est en préparation.",
} as const;
