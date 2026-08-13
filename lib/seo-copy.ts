import type { Locale } from "@/lib/site-data";

export type SeoCopy = {
  title: string;
  description: string;
};

export const guidesIndexSeo: Record<Locale, SeoCopy> = {
  en: {
    title: "Sovereign Tower Guides | Source-Checked Answers",
    description: "Browse Sovereign Tower guides with direct answers, source labels, Patch 1.0.8 check dates, and help for Knights, quests, systems, platforms and choices.",
  },
  ja: {
    title: "Sovereign Tower 攻略ガイド | 出典付き索引",
    description: "Sovereign Tower の攻略ガイドを、直接回答、出典レベル、リンク、PATCH 1.0.8 の確認日とともに探せます。ナイツ、クエスト、システム、機種、選択肢を扱います。",
  },
  ko: {
    title: "Sovereign Tower 공략 가이드 | 출처 색인",
    description: "Sovereign Tower 공략을 직접 답변, 근거 수준, 출처 링크와 PATCH 1.0.8 확인 날짜로 찾아보세요. 나이트, 퀘스트, 시스템, 플랫폼과 선택을 다룹니다.",
  },
  fr: {
    title: "Guides Sovereign Tower | Index avec sources",
    description: "Parcourez les guides Sovereign Tower avec réponses directes, niveaux de preuve, liens sources et date du Patch 1.0.8 pour Chevaliers, quêtes, systèmes et choix.",
  },
};

export const classesIndexSeo: Record<Locale, SeoCopy> = {
  en: {
    title: "Sovereign Tower Guide Archive | Knights & Systems",
    description: "Browse the Sovereign Tower archive for Knights, quests, systems, story choices, romance, updates, patch notes and core guides with source labels.",
  },
  ja: {
    title: "Sovereign Tower 攻略アーカイブ | ナイツ・クエスト・システム",
    description: "Sovereign Tower のナイツ、クエスト、システム、物語の選択、ロマンス、更新情報、パッチノート、確認済みの基本ガイドを出典付きで探せます。",
  },
  ko: {
    title: "Sovereign Tower 공략 아카이브 | 나이트·퀘스트·시스템",
    description: "Sovereign Tower의 나이트, 퀘스트, 시스템, 스토리 선택, 로맨스, 업데이트, 패치 노트와 검증된 핵심 가이드를 출처와 함께 찾아보세요.",
  },
  fr: {
    title: "Archives de guides Sovereign Tower | Chevaliers et systèmes",
    description: "Parcourez l’archive Sovereign Tower : Chevaliers, quêtes, systèmes, choix narratifs, romance, mises à jour, notes de patch et guides principaux sourcés.",
  },
};

const classSeoByLocale: Record<Locale, Record<string, SeoCopy>> = {
  en: {
    knights: {
      title: "Sovereign Tower Knights & Characters Guide | Wiki",
      description: "Learn how Sovereign Tower Knights are recruited, trained, equipped and assigned, including stats, traits, preferences, relationships and personal stories.",
    },
    systems: {
      title: "Sovereign Tower Game Systems Guide | Wiki",
      description: "Understand Sovereign Tower systems: Round Table management, faction affinity, Forge repairs, Sovereign Mode, Tower Annexes and Demon time rewind.",
    },
    romance: {
      title: "Sovereign Tower Romance & Affinity Guide | Wiki",
      description: "Find confirmed Sovereign Tower romance and affinity information, including game tags, character interactions and what current public sources do not document.",
    },
    story: {
      title: "Sovereign Tower Story & Choices Guide | Wiki",
      description: "Explore Sovereign Tower story choices, murder consequences, Unexpected Outcomes, endings and Demon time rewinds, with current limits clearly labelled.",
    },
    news: {
      title: "Sovereign Tower News & Patch Updates | Wiki",
      description: "Track Sovereign Tower updates, including the visible Patch 1.0.8 changes to quest scoring, Dragon Knight difficulty and Forge repair costs, with sources.",
    },
    "beginner-guide": {
      title: "Sovereign Tower Beginner Guide | First Day & Core Loop",
      description: "Start Sovereign Tower with a confirmed first-day loop: audiences, Round Table assignments, Knight management, factions, Tower Annexes and Demon time rewind.",
    },
    "quest-matching": {
      title: "Sovereign Tower Quest Matching Guide | Stats & Risks",
      description: "Learn how to read Knight stats, traits, equipment, affinity and quest risk before dispatching a team in Sovereign Tower, without relying on one fixed formula.",
    },
    "patch-1-0-8": {
      title: "Sovereign Tower Patch 1.0.8 Notes | Changes & Fixes",
      description: "Read the official Sovereign Tower Patch 1.0.8 changes to quest scoring, Dragon Knight difficulty, Forge repairs, save prompts, bugs and quality-of-life fixes.",
    },
    achievements: {
      title: "Sovereign Tower Achievements Guide | 75 Steam Goals",
      description: "Use the current Steam list of 75 Sovereign Tower achievements, separating confirmed goal text from unlock conditions not documented in public sources.",
    },
    "system-requirements": {
      title: "Sovereign Tower System Requirements | Windows & SteamOS",
      description: "Check the official Steam minimum and recommended requirements for Sovereign Tower on Windows and SteamOS/Linux, including CPU, memory, graphics and storage.",
    },
  },
  ja: {
    knights: {
      title: "Sovereign Tower ナイツ攻略 | キャラクター・能力値",
      description: "Sovereign Tower のナイツを仲間にし、育成、装備、派遣する方法を解説します。能力値、特性、好み、関係、個人ストーリーと公開情報の範囲を確認できます。",
    },
    systems: {
      title: "Sovereign Tower システム攻略 | 円卓・巻き戻し",
      description: "円卓の管理、派閥との親密度、Forge の修理、Sovereign Mode、塔の Annex、Demon の時間巻き戻しを、確認済みの情報に基づいて整理します。",
    },
    romance: {
      title: "Sovereign Tower ロマンス攻略 | 親密度とルート",
      description: "Sovereign Tower のロマンスと親密度について、ゲームタグ、キャラクター交流、公開資料で確認できる範囲、まだ整理されていないルートを説明します。",
    },
    story: {
      title: "Sovereign Tower ストーリー攻略 | 選択・分岐",
      description: "殺人の結果、Unexpected Outcomes、エンディング、時間軸の選択、Demon の巻き戻しを整理します。固定条件として確認できない部分も明示します。",
    },
    news: {
      title: "Sovereign Tower 更新情報 | PATCH 1.0.8攻略",
      description: "表示パッチ PATCH 1.0.8 のクエストスコア、Dragon Knight の難易度、Forge 修理費の変更を確認し、更新後に再確認すべき情報を分けて説明します。",
    },
    "beginner-guide": {
      title: "Sovereign Tower 初心者ガイド | 初日と基本ループ",
      description: "謁見、円卓での派遣、ナイツ管理、派閥、塔の Annex、Demon の巻き戻しという確認済みの初日ループを、最初に読むガイドとして整理します。",
    },
    "quest-matching": {
      title: "Sovereign Tower クエスト適性 | 能力値とリスク",
      description: "派遣前にナイツの能力値、特性、装備、好み、親密度とクエストのリスクを読む方法を解説します。固定の万能式として扱わない範囲も示します。",
    },
    "patch-1-0-8": {
      title: "Sovereign Tower PATCH 1.0.8 | 変更点と修正",
      description: "公式 PATCH 1.0.8 のクエストスコア、Dragon Knight、Forge 修理、保存確認、バグ修正、操作性の変更を、現在のガイド基準としてまとめます。",
    },
    achievements: {
      title: "Sovereign Tower 実績ガイド | Steam 75件",
      description: "Steam に表示される Sovereign Tower の75件の実績を確認し、公式の目標文と、公開資料で条件が文書化されていない部分を分けて扱います。",
    },
    "system-requirements": {
      title: "Sovereign Tower 動作要件 | Windows・SteamOS",
      description: "Windows と SteamOS/Linux の Steam 公式最低・推奨要件を確認します。CPU、メモリ、グラフィック、ストレージの表示値と対応範囲を整理します。",
    },
  },
  ko: {
    knights: {
      title: "Sovereign Tower 나이트 공략 | 캐릭터·스탯",
      description: "Sovereign Tower 나이트의 영입, 성장, 장비와 파견 방법을 설명합니다. 표시 스탯, 특성, 선호도, 관계, 개인 스토리와 공개 자료의 범위를 함께 확인하세요.",
    },
    systems: {
      title: "Sovereign Tower 시스템 공략 | 라운드 테이블·되감기",
      description: "라운드 테이블 관리, 세력 친밀도, Forge 수리, Sovereign Mode, 타워 Annex와 Demon 시간 되감기를 확인된 정보에 따라 정리합니다.",
    },
    romance: {
      title: "Sovereign Tower 로맨스 공략 | 친밀도와 루트",
      description: "Sovereign Tower 로맨스와 친밀도에 대해 게임 태그, 캐릭터 상호작용, 공개 자료에서 확인되는 범위와 아직 정리되지 않은 루트를 구분해 설명합니다.",
    },
    story: {
      title: "Sovereign Tower 스토리 공략 | 선택·분기",
      description: "살인 결과, Unexpected Outcomes, 엔딩, 타임라인 선택과 Demon 되감기를 정리합니다. 고정 조건으로 확인되지 않은 내용은 별도로 표시합니다.",
    },
    news: {
      title: "Sovereign Tower 업데이트 | PATCH 1.0.8 공략",
      description: "표시 패치 PATCH 1.0.8의 퀘스트 점수, Dragon Knight 난이도와 Forge 수리 비용 변경을 확인하고, 업데이트 후 다시 확인할 내용을 구분합니다.",
    },
    "beginner-guide": {
      title: "Sovereign Tower 초보자 가이드 | 첫날과 핵심 루프",
      description: "알현, 라운드 테이블 배정, 나이트 관리, 세력, 타워 Annex와 Demon 되감기로 이어지는 확인된 첫날 루프를 처음 읽을 가이드로 정리합니다.",
    },
    "quest-matching": {
      title: "Sovereign Tower 퀘스트 매칭 | 스탯과 위험",
      description: "파견 전에 나이트의 스탯, 특성, 장비, 선호도, 친밀도와 퀘스트 위험을 읽는 방법을 설명합니다. 하나의 고정 공식으로 단정하지 않을 범위도 표시합니다.",
    },
    "patch-1-0-8": {
      title: "Sovereign Tower PATCH 1.0.8 | 변경 사항과 수정",
      description: "공식 PATCH 1.0.8의 퀘스트 점수, Dragon Knight, Forge 수리, 저장 확인, 버그 수정과 편의성 변경을 현재 가이드 기준으로 정리합니다.",
    },
    achievements: {
      title: "Sovereign Tower 업적 가이드 | Steam 75개",
      description: "Steam에 표시되는 Sovereign Tower 75개 업적을 확인하고 공식 목표 문구와 공개 자료에서 조건이 문서화되지 않은 부분을 구분해 안내합니다.",
    },
    "system-requirements": {
      title: "Sovereign Tower 사양 | Windows·SteamOS 요구 사항",
      description: "Windows와 SteamOS/Linux의 Steam 공식 최소·권장 요구 사항을 확인합니다. CPU, 메모리, 그래픽, 저장 공간의 표시값과 지원 범위를 정리합니다.",
    },
  },
  fr: {
    knights: {
      title: "Guide des Chevaliers Sovereign Tower | Personnages",
      description: "Apprenez à recruter, entraîner, équiper et envoyer les Chevaliers de Sovereign Tower, avec leurs stats, traits, préférences, relations et histoires personnelles.",
    },
    systems: {
      title: "Systèmes de jeu Sovereign Tower | Guide",
      description: "Comprenez la Table Ronde, les affinités de faction, les réparations de la Forge, Sovereign Mode, les Annexes de la Tour et le rembobinage du Démon.",
    },
    romance: {
      title: "Guide romance et affinité | Sovereign Tower",
      description: "Retrouvez les informations confirmées sur romance et affinité dans Sovereign Tower : tags du jeu, interactions entre personnages et limites des sources publiques.",
    },
    story: {
      title: "Histoire et choix Sovereign Tower | Guide",
      description: "Explorez dans Sovereign Tower les choix, meurtres, Unexpected Outcomes, fins et rembobinage du Démon, avec conditions confirmées et limites actuelles.",
    },
    news: {
      title: "Actualités Sovereign Tower | Patch 1.0.8",
      description: "Suivez les mises à jour de Sovereign Tower, notamment le Patch 1.0.8 et ses changements de score de quête, de difficulté du Dragon Knight et de réparation de la Forge.",
    },
    "beginner-guide": {
      title: "Guide débutant Sovereign Tower | Boucle de jeu",
      description: "Commencez avec la boucle confirmée de Sovereign Tower : audiences, affectations à la Table Ronde, Chevaliers, factions, Annexes de la Tour et rembobinage du Démon.",
    },
    "quest-matching": {
      title: "Guide des quêtes Sovereign Tower | Stats et risques",
      description: "Apprenez à lire les stats, traits, équipements, affinités et risques avant d'envoyer une équipe dans Sovereign Tower, sans dépendre d'une formule unique.",
    },
    "patch-1-0-8": {
      title: "Sovereign Tower Patch 1.0.8 | Changements",
      description: "Lisez les changements officiels du Patch 1.0.8 : score des quêtes, Dragon Knight, réparations de la Forge, confirmations de sauvegarde, bugs et confort.",
    },
    achievements: {
      title: "Guide des succès Sovereign Tower | 75 objectifs",
      description: "Utilisez la liste Steam actuelle des 75 succès de Sovereign Tower en séparant le texte confirmé des objectifs dont les conditions ne sont pas documentées publiquement.",
    },
    "system-requirements": {
      title: "Sovereign Tower | Configuration Windows et SteamOS",
      description: "Vérifiez la configuration minimale et recommandée officielle de Steam pour Windows et SteamOS/Linux, avec processeur, mémoire, carte graphique et stockage.",
    },
  },
};

export function getClassSeo(locale: Locale, slug: string) {
  return classSeoByLocale[locale][slug] ?? null;
}
