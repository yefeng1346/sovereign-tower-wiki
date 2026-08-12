import type { Locale } from "@/lib/site-data";
import { researchSnapshot } from "@/lib/research-snapshot";

type LegalSection = { heading: string; body: string };

export type LegalDocument = {
  intro: string;
  updated: string;
  notice: string;
  sections: LegalSection[];
};

type LegalCopy = Record<"privacy" | "terms", LegalDocument>;

const english: LegalCopy = {
  privacy: {
    intro: "This is an independent, fan-made guide site. You can browse the public pages, use the search index and use the planning tools without creating an account or submitting a name, email address or game account.",
    updated: `Last updated: ${researchSnapshot.date}`,
    notice: "Plain-language site notice · not legal advice",
    sections: [
      { heading: "Information the site handles", body: "The search form places your query in the page URL so the site can show matching field files. The Faction Tracker stores notes in your browser's local storage; this project does not send those notes to a site database." },
      { heading: "Hosting and external services", body: "The hosting provider may process ordinary request data needed to deliver and protect the site. Links to Steam, Discord, YouTube and the official developer or publisher pages leave this site and are governed by those services' own policies." },
      { heading: "Analytics, cookies and future features", body: "This site uses Google Analytics 4 to measure aggregate page visits and navigation. The Google tag may use first-party cookies or similar identifiers; Google describes how Analytics uses these identifiers in its privacy documentation. This project does not require a login and does not configure advertising or marketing features. If a future release adds forms, accounts or new tracking, this page must be updated before that feature is used." },
      { heading: "Changes", body: "This notice may be updated when the site's features or data practices change. The date above identifies the current site snapshot." },
    ],
  },
  terms: {
    intro: "Sovereign Tower Wiki is an independent fan-made reference site. It is not operated by or affiliated with WILD WITS GAMES or Curve Games, and it does not replace the official game, store listing or support channels.",
    updated: "Last updated: August 12, 2026",
    notice: "Plain-language site notice · not legal advice",
    sections: [
      { heading: "Research and version scope", body: "Guides identify their sources, evidence level and last-checked build where relevant. Game content, platform availability, prices, ratings and community routes can change after an update; do not treat a fan guide as an official guarantee." },
      { heading: "Tools and player input", body: "The quest matcher is a transparent comparison helper, not a promise of a quest result. Notes entered into the faction tracker stay in the browser's local storage in the current implementation. You are responsible for keeping your own backup if those notes matter to you." },
      { heading: "External links and third-party material", body: "External services and linked community pages have their own terms, privacy rules and availability. Follow official store, developer and publisher instructions when downloading the game or contacting support." },
      { heading: "Acceptable use and changes", body: "Use the site for personal reference and ordinary browsing. Do not attempt to disrupt the service, misuse external links or present this independent site as an official support channel. We may change, remove or correct pages as the game and research change." },
    ],
  },
};

const localized: Record<Exclude<Locale, "en">, LegalCopy> = {
  ja: {
    privacy: {
      intro: "このサイトは独立したファン制作の攻略サイトです。アカウントを作成したり、氏名、メールアドレス、ゲームアカウントを送信したりせずに、公開ページ、検索索引、計画ツールを利用できます。",
      updated: `最終更新：${researchSnapshot.dateJa}`,
      notice: "平易なサイト案内 · 法的助言ではありません",
      sections: [
        { heading: "サイトが扱う情報", body: "検索フォームは一致するフィールドページを表示するため、検索語をページ URL に入れます。派閥トラッカーのメモはブラウザのローカルストレージに保存され、現在の実装ではサイトのデータベースへ送信されません。" },
        { heading: "ホスティングと外部サービス", body: "ホスティング事業者は、サイトの配信と保護に必要な通常のリクエスト情報を処理する場合があります。Steam、Discord、YouTube、開発元・パブリッシャーへのリンクを開くと外部サービスへ移動し、それぞれのポリシーが適用されます。" },
        { heading: "アクセス解析、Cookie と今後の機能", body: "このサイトでは、ページ訪問とナビゲーションの全体的な傾向を測定するため Google Analytics 4 を使用しています。Google タグはファーストパーティ Cookie または類似識別子を使用する場合があります。ログインは必要なく、広告用・マーケティング用の機能は設定していません。将来、フォーム、アカウントまたは新しい計測機能を追加する場合は、使用前にこのページを更新します。" },
        { heading: "変更", body: "サイトの機能やデータの扱いが変わった場合、この案内を更新することがあります。上の日付は現在のサイトスナップショットを示します。" },
      ],
    },
    terms: {
      intro: "Sovereign Tower Wiki は独立したファン制作の情報サイトです。WILD WITS GAMES または Curve Games が運営するものでも、両社と提携したものでもありません。公式ゲーム、ストア情報、サポート窓口の代わりにはなりません。",
      updated: `최종 업데이트: ${researchSnapshot.dateKo}`,
      notice: "平易なサイト案内 · 法的助言ではありません",
      sections: [
        { heading: "調査とバージョンの範囲", body: "ガイドには、関連する場合、出典、証拠レベル、最終確認ビルドを表示します。ゲーム内容、対応プラットフォーム、価格、評価、コミュニティのルートは更新で変わる可能性があるため、ファンガイドを公式の保証として扱わないでください。" },
        { heading: "ツールとプレイヤー入力", body: "クエスト適性チェックは透明な比較補助であり、クエスト結果を保証するものではありません。派閥トラッカーに入力したメモは、現在の実装ではブラウザのローカルストレージに保存されます。重要なメモは自分でバックアップしてください。" },
        { heading: "外部リンクと第三者資料", body: "外部サービスやリンク先のコミュニティページには、それぞれの利用規約、プライバシールール、提供状況があります。ゲームの購入、ダウンロード、サポートへの連絡では、公式ストア、開発元、パブリッシャーの案内に従ってください。" },
        { heading: "通常の利用と変更", body: "個人の情報収集と通常の閲覧のために利用してください。サービスを妨害したり、外部リンクを悪用したり、この独立サイトを公式サポート窓口として表示したりしないでください。ゲームと調査内容の変化に応じてページを変更、削除、訂正することがあります。" },
      ],
    },
  },
  ko: {
    privacy: {
      intro: "이 사이트는 독립적인 팬 제작 공략 사이트입니다. 계정을 만들거나 이름, 이메일 주소, 게임 계정을 제출하지 않고 공개 페이지, 검색 색인과 계획 도구를 이용할 수 있습니다.",
      updated: "최종 업데이트: 2026년 8월 12일",
      notice: "쉬운 말로 작성한 사이트 안내 · 법률 자문이 아닙니다",
      sections: [
        { heading: "사이트가 처리하는 정보", body: "검색 양식은 일치하는 필드 파일을 보여주기 위해 검색어를 페이지 URL에 넣습니다. 세력 추적기 메모는 브라우저의 로컬 저장소에 보관되며, 현재 구현에서는 사이트 데이터베이스로 전송되지 않습니다." },
        { heading: "호스팅과 외부 서비스", body: "호스팅 제공업체는 사이트 제공과 보호에 필요한 일반 요청 정보를 처리할 수 있습니다. Steam, Discord, YouTube와 공식 개발사·배급사 링크를 열면 해당 외부 서비스로 이동하며 각 서비스의 정책이 적용됩니다." },
        { heading: "분석, 쿠키와 향후 기능", body: "이 사이트는 페이지 방문과 탐색의 전체적인 흐름을 측정하기 위해 Google Analytics 4를 사용합니다. Google 태그는 퍼스트 파티 쿠키 또는 유사 식별자를 사용할 수 있습니다. 로그인이 필요하지 않으며 광고 또는 마케팅 기능은 설정하지 않았습니다. 향후 양식, 계정 또는 새로운 측정 기능을 추가한다면 사용 전에 이 페이지를 업데이트합니다." },
        { heading: "변경 사항", body: "사이트 기능이나 데이터 처리 방식이 바뀌면 이 안내를 업데이트할 수 있습니다. 위 날짜는 현재 사이트 스냅샷을 나타냅니다." },
      ],
    },
    terms: {
      intro: "Sovereign Tower Wiki는 독립적인 팬 제작 참고 사이트입니다. WILD WITS GAMES 또는 Curve Games가 운영하거나 제휴한 사이트가 아니며, 공식 게임·스토어 페이지·지원 채널을 대신하지 않습니다.",
      updated: "최종 업데이트: 2026년 8월 12일",
      notice: "쉬운 말로 작성한 사이트 안내 · 법률 자문이 아닙니다",
      sections: [
        { heading: "조사와 버전 범위", body: "가이드는 필요한 경우 출처, 근거 수준과 마지막으로 확인한 빌드를 표시합니다. 게임 내용, 플랫폼 지원, 가격, 평점과 커뮤니티 경로는 업데이트 후 바뀔 수 있으므로 팬 가이드를 공식 보증으로 보지 마세요." },
        { heading: "도구와 플레이어 입력", body: "퀘스트 매칭 도구는 투명한 비교 보조 도구이며 퀘스트 결과를 보장하지 않습니다. 세력 추적기에 입력한 메모는 현재 구현에서 브라우저 로컬 저장소에 저장됩니다. 중요한 메모는 직접 백업해야 합니다." },
        { heading: "외부 링크와 제3자 자료", body: "외부 서비스와 연결된 커뮤니티 페이지에는 각자의 이용약관, 개인정보 규칙과 제공 상태가 있습니다. 게임 다운로드나 지원 문의에서는 공식 스토어, 개발사와 배급사의 안내를 따르세요." },
        { heading: "일반적인 이용과 변경", body: "개인 참고와 일반적인 탐색을 위해 사용하세요. 서비스를 방해하거나 외부 링크를 악용하거나 이 독립 사이트를 공식 지원 채널로 표시하지 마세요. 게임과 조사가 바뀌면 페이지를 변경, 삭제하거나 수정할 수 있습니다." },
      ],
    },
  },
  fr: {
    privacy: {
      intro: "Ce site est un guide indépendant créé par des fans. Vous pouvez consulter les pages publiques, l'index de recherche et les outils de planification sans créer de compte ni transmettre de nom, d'adresse e-mail ou de compte de jeu.",
      updated: `Dernière mise à jour : ${researchSnapshot.dateFr.replace("AOÛT", "août")}`,
      notice: "Notice en langage clair · pas un conseil juridique",
      sections: [
        { heading: "Informations traitées par le site", body: "Le formulaire de recherche place la requête dans l'URL afin d'afficher les fichiers correspondants. Le Suivi des factions conserve les notes dans le stockage local du navigateur ; dans l'implémentation actuelle, ces notes ne sont pas envoyées à une base de données du site." },
        { heading: "Hébergement et services externes", body: "L'hébergeur peut traiter les données ordinaires d'une requête nécessaires à la diffusion et à la protection du site. Les liens vers Steam, Discord, YouTube et les pages officielles du développeur ou de l'éditeur ouvrent des services externes soumis à leurs propres politiques." },
        { heading: "Statistiques, cookies et fonctionnalités futures", body: "Ce site utilise Google Analytics 4 pour mesurer les visites et la navigation de manière agrégée. La balise Google peut utiliser des cookies propriétaires ou des identifiants similaires ; Google décrit cet usage dans sa documentation de confidentialité. Aucune connexion n'est nécessaire et aucune fonctionnalité publicitaire ou marketing n'est configurée. Si une future version ajoute des formulaires, des comptes ou une nouvelle mesure, cette page devra être mise à jour avant son utilisation." },
        { heading: "Modifications", body: "Cette notice peut être mise à jour lorsque les fonctionnalités ou les pratiques de données du site changent. La date ci-dessus identifie l'instantané actuel du site." },
      ],
    },
    terms: {
      intro: "Sovereign Tower Wiki est un site de référence indépendant créé par des fans. Il n'est pas exploité par WILD WITS GAMES ou Curve Games et n'est pas affilié à ces sociétés ; il ne remplace ni le jeu officiel, ni sa fiche boutique, ni les canaux d'assistance.",
      updated: `Dernière mise à jour : ${researchSnapshot.dateFr.replace("AOÛT", "août")}`,
      notice: "Notice en langage clair · pas un conseil juridique",
      sections: [
        { heading: "Recherche et version", body: "Lorsque c'est pertinent, les guides indiquent leurs sources, leur niveau de preuve et le build vérifié. Le contenu du jeu, les plateformes, les prix, les notes et les routes communautaires peuvent changer après une mise à jour ; un guide fan ne constitue pas une garantie officielle." },
        { heading: "Outils et saisie du joueur", body: "L'Association de quête est un outil de comparaison transparent, pas une promesse de résultat. Les notes saisies dans le Suivi des factions restent dans le stockage local du navigateur dans l'implémentation actuelle. Sauvegardez vous-même les notes importantes." },
        { heading: "Liens externes et contenus tiers", body: "Les services externes et les pages communautaires liées ont leurs propres conditions, règles de confidentialité et disponibilité. Pour télécharger le jeu ou contacter l'assistance, suivez les instructions officielles de la boutique, du développeur et de l'éditeur." },
        { heading: "Utilisation normale et modifications", body: "Utilisez le site pour votre référence personnelle et une navigation normale. Ne tentez pas de perturber le service, d'utiliser abusivement les liens externes ou de présenter ce site indépendant comme une assistance officielle. Les pages peuvent être modifiées, retirées ou corrigées lorsque le jeu et la recherche évoluent." },
      ],
    },
  },
};

export function getLegalCopy(locale: Locale, kind: "privacy" | "terms") {
  return (locale === "en" ? english : localized[locale])[kind];
}
