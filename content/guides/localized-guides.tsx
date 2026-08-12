import type { ReactNode } from "react";
import type { Locale } from "@/lib/site-data";

type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
type GuideTranslation = { answer: string; sections: GuideSection[]; note: string; sources: string[] };

const guideText: Record<Exclude<Locale, "en">, Record<string, GuideTranslation>> = {
  ja: {
    "beginner-guide": {
      answer: "最初は完璧なルートを探すのではなく、毎日の基本ループを覚えましょう。民の要望を聞き、円卓を管理し、ナイツを仲間にしてクエストへ派遣し、戻った結果を確認します。公式資料では、関係の調整、塔の拡張、望まない結果を学びに変える Demon の時間巻き戻しもこのループに含まれます。",
      sections: [
        { heading: "朝の謁見を読む", paragraphs: ["朝の謁見は、統治者として最初に向き合う大切な場面です。依頼を読んでから報酬を考えましょう。小さな判断でもキャラクター、集団、他の統治者、王国の将来に影響する可能性があります。", "会話を急いで飛ばさないでください。依頼の政治的な圧力とキャラクターの性格を知ることで、後の結果を読みやすくなります。"] },
        { heading: "円卓でクエストを割り当てる", paragraphs: ["謁見の後は円卓で依頼を確認し、担当するナイツを決めます。Steam の公式説明には Strength、Agility、Charisma、Magic、Wit の5能力値が掲載され、クエストごとに必要な技能が異なると説明されています。", "最も大きい数値だけで決めないでください。特性、装備、好み、関係も結果に関係します。正確なしきい値と完全なスコア式は、現在のビルドで確認するまでバージョン依存として扱います。"] },
        { heading: "結果を読んで次の判断につなげる", paragraphs: ["戻ったナイツは Critical Success、Critical Failure、Unexpected Outcome などの結果を返します。単なる成功・失敗ではなく、キャラクター固有の反応や別の物語分岐を知る手がかりです。", "依頼、派遣したナイツ、直前の選択、結果を短く記録しましょう。パッチ後は、以前の記録をすべてのビルドに当てはめないことが大切です。"] },
        { heading: "6つの関係シグナルを確認する", paragraphs: ["公式 Steam 説明は Merchants、Mystics、Scholars、Nobles、People、Treasury を関係シグナルとして挙げています。目先のクエスト結果だけでなく、派閥に生じた政治的なコストも結果の一部として読みましょう。", "すべての親密度しきい値や長期結果をまとめた信頼できる公開表はありません。検証する場合は、選択の前後で派閥の状態を記録してください。"] },
        { heading: "ナイツの不満を放置しない", paragraphs: ["ナイツは使い捨てのクエストアイコンではありません。公式ストアは、不満が続けば宮廷を去る可能性や、エゴ、苦情、ロマンスを管理要素として説明しています。危険または不向きな任務に同じナイツを繰り返し送る前に、関係を確認しましょう。"] },
        { heading: "塔を計画的に拡張する", paragraphs: ["塔の拡張は確認済みの進行要素です。公式説明には Carina's Forge や Witch's Alchemy Room などの Annex があり、将来のクエストに使うアイテムを提供するとあります。", "PATCH 1.0.8 は Forge の修理費を変更しました。Demo 時代の価格やレシピを発売版の数値として転載せず、現在のゲーム内表示を確認してください。"] },
        { heading: "学びを得たら Demon を使う", paragraphs: ["塔の Crypts にいる Demon は時間を過去へ戻せます。公式資料では、学んだ知識を持って新しい試行へ進み、別の会話、道、キャラクター、結果を開く仕組みと説明されています。", "失敗したからすぐ戻すのではなく、結果、閉じた道、キャラクターの反応など意味のある情報を得た後に巻き戻しましょう。罰則や回数の完全な一覧は公開されていません。"] },
      ],
      note: "安全な初回ルートは、依頼を読む、合うナイツを選ぶ、関係コストを確認する、結果を記録する、必要なら知識を持って巻き戻す、という順序です。加入条件、隠し特性、ロマンス条件、エンディング一覧は別の検証済みガイドとして扱います。",
      sources: ["Steam ストアページ", "Curve Games の紹介記事", "WILD WITS 公式ゲームページ"],
    },
    "quest-matching": {
      answer: "クエストは、依頼に示された能力値だけでなく、ナイツの特性、装備、好み、関係を確認してから派遣します。Steam の公式説明が掲載する能力値は Strength、Agility、Charisma、Magic、Wit の5つです。Luck は別の発売資料に登場しますが、全プレイヤーに共通する6番目の公式能力値とは断定しません。",
      sections: [
        { heading: "公開資料が確認すること", paragraphs: ["Sovereign Tower は、王国を管理し、ナイツを仲間にし、クエストを割り当て、関係を調整し、塔を拡張し、Demon で時間を巻き戻す一人用の物語重視 RPG です。", "ナイツは数値だけの存在ではありません。公開資料には、特性、装備、好み、関係、個人の物語もクエスト結果に関係する要素として示されています。"] },
        { heading: "依頼とナイツを照合する", paragraphs: ["まず依頼で指定された能力値を確認し、名簿のナイツと比べます。その後に特性、装備、好み、現在の関係を確認します。最大値を持つナイツが常に最適だという公式ルールはありません。", "コミュニティの攻略表は最低値や特殊結果を探す索引としては役立ちますが、作成者自身が検証中と記している内容もあります。正確なしきい値は PATCH 1.0.8 の現在ビルドで確認してください。"] },
        { heading: "PATCH 1.0.8 の影響", paragraphs: ["1.0.8 は、必要能力値が不足したときのペナルティを小さくし、必要能力値を上回ったときのボーナスを増やし、Dragon Knight の難易度を調整しました。Demo や以前の表から得たしきい値は、そのまま現在の結果を保証しません。", "完全なスコア式、隠し特性、全クエストの最小値は公開情報だけでは整理されていません。数値を掲載する場合は、ビルドと実測状況を併記してください。"] },
        { heading: "派閥と Unexpected Outcomes を読む", paragraphs: ["Merchants、Mystics、Scholars、Nobles、People、Treasury の6つの関係シグナルは、クエストの成功表示とは別に確認する情報です。Unexpected Outcome は特定のナイツ、クエスト関係、解放状態に結びつく特殊結果として報告されています。", "Angelica を Clean Keeper Goose に送る例などがありますが、ひとつのコミュニティ報告だけで普遍的な条件とは言えません。派遣したナイツ、選択、ビルド、結果を記録してから再現性を判断します。"] },
        { heading: "巻き戻しを使う基準", paragraphs: ["公式資料は、Demon が知識を残したまま過去へ戻し、別の会話、道、同盟、ナイツのルートを開くことを確認しています。一方、別のレビューでは元の時間軸の後半が失われると説明されています。", "巻き戻しの回数、固定ペナルティ、すべての結果は完全には文書化されていません。意味のある分岐を試すために使い、未検証のルートを確定情報として扱わないでください。"] },
      ],
      note: "派遣前に能力値、特性、装備、好み、派閥を確認し、結果と時間軸を記録します。12件のコミュニティチェックはバージョン付きの手がかりであり、公式保証ではありません。",
      sources: ["Steam ストアページ", "Steam Community の更新資料", "プレイヤー作成のクエスト索引"],
    },
    "patch-1-0-8": {
      answer: "PATCH 1.0.8 は、2026年8月10日に Steam Community で公開された Sovereign Tower の公式アップデートです。バグ修正、セーブ・ロード確認、クエストバランス、Dragon Knight、Forge 修理費、Grest の緊急クエスト期限を変更しました。変更後の正確な数値表は公式ノートに掲載されていないため、推測で補いません。",
      sections: [
        { heading: "バグ修正", paragraphs: ["Steam 初期化が正しく確認されない場合の Godot ロード画面クラッシュへの回避策、Gwendan が不死になる問題、Gwendolen が同じ死を二度悼む問題を修正しました。Ligia のクエストラインで同じアイテム探しの選択に固定される問題も修正されています。", "円卓の Blacksmith で必要な Gold がなくても購入できる悪用、Pawnbroker 加入後に不正な spellbook が出る問題、複数言語の誤字や表示も修正対象です。"] },
        { heading: "操作性の変更", paragraphs: ["保存・ロードの前に確認ポップアップが追加されました。分岐の多いゲームでは、意図しない時間軸の変更を防ぐための変更です。", "Act 2 と Act 3 の複数アイテムも強化され、後半クエストの難易度に対応しています。公式ノートは全アイテムと個別ボーナスを一覧化していないため、数値を作りません。"] },
        { heading: "クエストと Forge のバランス", paragraphs: ["Dragon Knight と戦うクエストの難易度が調整されました。必要能力値に弱いナイツへのペナルティは減り、必要能力値を超えた場合のスコアボーナスは増えています。", "Forge の初回および以降の修理費も下がりました。新しい価格は公式発表に書かれていないため、現在のゲーム内表示を確認してください。"] },
        { heading: "Grest の緊急クエスト", paragraphs: ["Grest の海賊に関する緊急クエストは、期限タイマーが1サイクル増えました。公式ノートは変更方向を確認していますが、最適なナイツや、遅らせた場合の全結果までは示していません。"] },
        { heading: "既存ガイドへの影響", paragraphs: ["正確なクエストしきい値、スコア、価格の横に必ずビルドを表示してください。Demo のルートは物語の文脈として使えても、現行版の保証された回答とは限りません。", "このサイトでは 1.0.8 を現在の証拠境界とします。後続パッチが出たら、公式ノートとゲーム内表示を確認して、変化した部分だけ更新します。"] },
      ],
      note: "1.0.8 の公式ノートが確認するのは変更の方向と対象です。掲載されていない新しい価格、スコア式、アイテム値を追加しないでください。",
      sources: ["Steam Community 公式アップデート", "Steam ストアページ"],
    },
    achievements: {
      answer: "Sovereign Tower の Steam 実績は、公式ストアページで75件と表示されています。この数は現在のストアで確認できる事実ですが、個々の隠し条件や最短ルートまで自動的に確認するものではありません。条件を案内するときは、Steam の現在の実績説明か、再現できる現行版テストを使います。",
      sections: [
        { heading: "公式リストが確認すること", paragraphs: ["Steam は実績が存在し、現在75件を表示していることを確認しています。同じストアページには、一人用の物語重視 RPG、円卓のクエスト、ナイツの関係、時間巻き戻し、塔の拡張も掲載されています。", "ただし、ストア概要は各実績がどのシステムに属するかを明示していません。Supporter Edition、サウンドトラック、デジタルアートブックなどの商品情報を実績条件に変えてはいけません。"] },
        { heading: "安全に一覧を使う", paragraphs: ["まず Steam の実績ページを開き、表示された文言を基準に整理します。ナイツ、クエスト、Act、結果が書かれている場合は、最短ルートを推測せず、実際の選択と状況を記録してください。", "ひとつの体験談だけで確定ルートを公開しないでください。PATCH 1.0.8 はクエストとセーブ挙動を変更しているため、古い実績情報は再確認が必要です。"] },
        { heading: "実績ページの掲載方針", paragraphs: ["今後の各項目には、実績名、Steam に表示された説明、確認できた Act やシステム、証拠ラベルを掲載します。Official Steam、現行版での Tested、Community Report を区別し、条件が不明なら「まだ文書化されていない」と明記します。", "Steam が実績を追加・変更した場合は、総数と該当行だけを更新します。これにより、確認できていない条件でページ全体を膨らませません。"] },
      ],
      note: "75件という総数は公式ストアの確認値です。隠し実績の条件は、現在の Steam 表示または再現可能な現行版テストがない限り断定しません。",
      sources: ["Steam ストアページ", "Steam Community の公式告知"],
    },
    "system-requirements": {
      answer: "現在の Steam リストには Windows と SteamOS/Linux の公式動作要件があります。Windows の最低要件は Windows 10、Intel Core i5-4670K、4 GB RAM、GeForce GT 1030 2 GB、DirectX 12、空き容量3 GBです。推奨は Windows 11、Intel Core i5-9600K、8 GB RAM、GTX 1060 6 GB、DirectX 12、3 GB です。",
      sections: [
        { heading: "Windows の要件", paragraphs: ["最低：Windows 10、Intel Core i5-4670K、4 GB RAM、GeForce GT 1030 2 GB、DirectX 12、空き容量3 GB。推奨：Windows 11、Intel Core i5-9600K、8 GB RAM、GTX 1060 6 GB VRAM、DirectX 12、空き容量3 GB。", "これは Steam に現在表示されている値であり、解像度や画質設定ごとのフレームレートを保証するものではありません。"] },
        { heading: "SteamOS と Linux の要件", paragraphs: ["最低・推奨とも SteamOS 3.8.10 です。CPU は Zen 2 4c/8t、2.4–3.5 GHz、メモリは最低4 GB・推奨8 GB、グラフィックスは8 RDNA 2 CUs、1.6 GHz、ストレージは3 GBです。", "Steam のこの表は SteamOS/Linux の要件を示します。macOS のネイティブ対応を証明するものではありません。"] },
        { heading: "容量と購入前の確認", paragraphs: ["表示上の必要容量は Windows と SteamOS/Linux のどちらも3 GBです。OS、Steam のダウンロード、将来の更新に追加の空き容量を確保してください。", "購入前には公式 Steam ページを再確認します。要件、対応プラットフォーム、レビューは変わる可能性があり、コンソールや将来の Mac 版の要件を推測する材料にはなりません。"] },
      ],
      note: "このページは Steam の現在表示値を記録したものです。アップデートやストア表示の変更があれば、第三者記事ではなく公式ページから更新します。",
      sources: ["Steam 公式ストアページ", "WILD WITS 公式ゲームページ"],
    },
  },
  ko: {
    "beginner-guide": {
      answer: "처음에는 완벽한 루트를 찾기보다 하루의 핵심 루프를 익히세요. 백성의 요청을 듣고, 라운드 테이블을 관리하고, 개성 있는 나이트를 영입해 퀘스트에 보내고, 돌아온 결과를 읽습니다. 공식 자료는 관계 관리, 타워 확장과 원치 않는 결과에서 배우게 해 주는 Demon의 시간 되감기도 이 루프에 포함한다고 설명합니다.",
      sections: [
        { heading: "아침 알현 읽기", paragraphs: ["아침 알현은 통치자로서 처음 맡는 중요한 책임입니다. 보상보다 먼저 요청을 읽으세요. 작은 선택도 캐릭터, 집단, 다른 통치자와 왕국의 미래에 영향을 줄 수 있습니다.", "대화를 서둘러 넘기지 마세요. 요청의 정치적 압박과 캐릭터의 성격을 알아야 뒤의 결과를 이해하기 쉽습니다."] },
        { heading: "라운드 테이블에서 퀘스트 배정", paragraphs: ["알현 뒤에는 라운드 테이블에서 요청을 확인하고 담당 나이트를 정합니다. 공식 Steam 설명에는 Strength, Agility, Charisma, Magic, Wit 5개 스탯이 표시되며 퀘스트마다 다른 기술이 필요하다고 나옵니다.", "가장 높은 숫자만 보고 고르지 마세요. 특성, 장비, 선호도와 관계도 결과에 영향을 줄 수 있습니다. 정확한 기준과 점수 공식은 현재 빌드에서 확인하기 전까지 버전 의존으로 다룹니다."] },
        { heading: "결과를 읽고 다음 결정을 준비하기", paragraphs: ["돌아온 나이트는 Critical Success, Critical Failure 또는 Unexpected Outcome을 보여줄 수 있습니다. 성공·실패를 넘어 캐릭터별 상호작용이나 다른 스토리 분기의 단서가 됩니다.", "퀘스트, 보낸 나이트, 직전 선택과 결과를 짧게 기록하세요. 패치가 적용되면 한 빌드의 기록을 모든 버전에 적용하지 마세요."] },
        { heading: "6가지 관계 신호 확인", paragraphs: ["공식 Steam 설명은 Merchants, Mystics, Scholars, Nobles, People, Treasury를 관계 신호로 설명합니다. 즉시 보이는 퀘스트 결과뿐 아니라 세력에 생긴 정치적 비용도 결과의 일부로 읽어야 합니다.", "모든 친밀도 기준과 장기 결과를 정리한 신뢰할 수 있는 공개 표는 없습니다. 테스트할 때는 선택 전후의 세력 상태를 기록하세요."] },
        { heading: "나이트의 불만 관리", paragraphs: ["나이트는 소모품 퀘스트 아이콘이 아닙니다. 공식 상점은 불만이 쌓이면 궁정을 떠날 수 있고, 자존심, 불만, 로맨스가 관리 요소라고 설명합니다. 위험하거나 맞지 않는 일을 같은 나이트에게 반복해서 맡기기 전에 관계를 확인하세요."] },
        { heading: "타워를 계획적으로 확장", paragraphs: ["타워 확장은 확인된 진행 시스템입니다. 공식 설명에는 Carina's Forge와 Witch's Alchemy Room 같은 Annex가 등장하며 앞으로의 퀘스트에 쓸 아이템을 제공한다고 나옵니다.", "PATCH 1.0.8은 Forge 수리 비용을 바꿨습니다. Demo 시절의 가격과 레시피를 출시판 수치로 복사하지 말고 현재 게임 화면을 확인하세요."] },
        { heading: "배운 것이 있으면 Demon 사용", paragraphs: ["타워 Crypts의 Demon은 시간을 과거로 돌릴 수 있습니다. 공식 자료에 따르면 배운 지식을 유지한 채 새 시도로 넘어가 다른 대화, 경로, 캐릭터와 결과를 열 수 있습니다.", "실패했다고 즉시 되감기보다 결과, 막힌 경로와 캐릭터 반응처럼 의미 있는 정보를 얻은 뒤 되감으세요. 패널티와 횟수의 전체 목록은 공개되지 않았습니다."] },
      ],
      note: "안전한 첫 진행은 요청 읽기, 맞는 나이트 선택, 관계 비용 확인, 결과 기록, 필요할 때 지식을 가지고 되감기 순서입니다. 영입 조건, 숨은 특성, 로맨스 조건과 엔딩 목록은 별도의 검증 가이드로 다룹니다.",
      sources: ["Steam 상점 페이지", "Curve Games 소개 자료", "WILD WITS 공식 게임 페이지"],
    },
    "quest-matching": {
      answer: "퀘스트는 요청에 표시된 스탯뿐 아니라 나이트의 특성, 장비, 선호도와 관계를 확인한 뒤 배정하세요. 공식 Steam 설명에 표시된 나이트 스탯은 Strength, Agility, Charisma, Magic, Wit 5개입니다. Luck은 다른 출시 자료에 나오지만 모든 플레이어에게 공통인 공식 6번째 스탯이라고 단정하지 않습니다.",
      sections: [
        { heading: "공개 자료가 확인하는 것", paragraphs: ["Sovereign Tower는 왕국을 관리하고 나이트를 영입하고 퀘스트를 배정하며 관계를 조정하고 타워를 확장하고 Demon으로 시간을 되돌리는 싱글플레이 스토리 RPG입니다.", "나이트는 숫자만으로 판단하지 않습니다. 특성, 장비, 선호도, 관계와 개인 스토리도 퀘스트 결과에 영향을 줄 수 있는 요소로 설명됩니다."] },
        { heading: "요청과 나이트 비교", paragraphs: ["먼저 요청에서 필요한 스탯을 확인하고 명단과 비교합니다. 이후 특성, 장비, 선호도와 현재 관계를 봅니다. 가장 높은 수치의 나이트가 언제나 정답이라는 공식 규칙은 없습니다.", "커뮤니티 표는 최소값과 특수 결과를 찾는 색인으로는 유용하지만 아직 테스트 중인 자료도 있습니다. 정확한 기준은 PATCH 1.0.8 현재 빌드에서 확인하세요."] },
        { heading: "PATCH 1.0.8의 영향", paragraphs: ["1.0.8은 필요한 스탯이 부족할 때의 패널티를 줄이고, 기준을 초과했을 때의 보너스를 늘리고, Dragon Knight 난이도를 조정했습니다. Demo나 이전 표의 기준이 현재 결과를 보장하지 않습니다.", "완전한 점수 공식, 숨은 특성, 전체 퀘스트 최소값은 공개 자료만으로 정리되지 않았습니다. 숫자를 넣을 때는 빌드와 테스트 상황을 함께 기록하세요."] },
        { heading: "세력과 Unexpected Outcomes 읽기", paragraphs: ["Merchants, Mystics, Scholars, Nobles, People, Treasury 6가지 관계 신호는 퀘스트 성공 표시와 별도로 확인할 정보입니다. Unexpected Outcome은 특정 나이트, 퀘스트 관계 또는 해금 상태에 연결된 특수 결과로 보고됩니다.", "Angelica를 Clean Keeper Goose에 보내는 사례가 있지만 한 커뮤니티 보고만으로 일반 조건이 되지는 않습니다. 나이트, 선택, 빌드와 결과를 기록한 뒤 재현성을 판단하세요."] },
        { heading: "되감기를 사용할 때", paragraphs: ["공식 자료는 Demon이 지식을 유지한 채 과거로 보내 다른 대화, 경로, 동맹과 나이트 루트를 열 수 있다고 확인합니다. 다른 리뷰는 원래 타임라인의 이후 사건이 사라진다고 설명합니다.", "되감기 횟수, 고정 패널티와 모든 결과는 완전히 문서화되지 않았습니다. 의미 있는 분기를 시험하는 데 사용하고 검증되지 않은 루트를 확정 정보로 쓰지 마세요."] },
      ],
      note: "파견 전 스탯, 특성, 장비, 선호도와 세력을 확인하고 결과와 타임라인을 기록하세요. 12개의 커뮤니티 확인값은 버전이 붙은 단서이며 공식 보장이 아닙니다.",
      sources: ["Steam 상점 페이지", "Steam Community 업데이트 자료", "플레이어 제작 퀘스트 색인"],
    },
    "patch-1-0-8": {
      answer: "PATCH 1.0.8은 2026년 8월 10일 Steam Community에 공개된 Sovereign Tower 공식 업데이트입니다. 버그 수정, 저장·불러오기 확인, 퀘스트 밸런스, Dragon Knight, Forge 수리 비용과 Grest 긴급 퀘스트 기한을 바꿨습니다. 공식 노트에 없는 정확한 수치는 추측하지 않습니다.",
      sections: [
        { heading: "버그 수정", paragraphs: ["Steam 초기화 확인 문제로 Godot 로딩 화면에서 충돌하는 문제에 대한 우회책, Gwendan이 불사 상태가 되는 문제, Gwendolen이 같은 죽음을 두 번 애도하는 문제를 수정했습니다. Ligia 퀘스트가 같은 아이템 찾기 선택에 갇히는 문제도 고쳤습니다.", "Round Table의 Blacksmith에서 Gold 없이 구매하는 악용, Pawnbroker 영입 후 잘못된 spellbook이 나타나는 문제와 여러 언어의 오탈자·문자열 표시도 수정되었습니다."] },
        { heading: "편의성 변경", paragraphs: ["저장 또는 불러오기 전에 확인 팝업이 추가되었습니다. 분기 게임에서 실수로 타임라인을 바꾸는 일을 줄이는 변경입니다.", "Act 2와 Act 3에서 사용할 수 있는 여러 아이템도 강화되었습니다. 공식 노트는 모든 아이템과 개별 보너스를 공개하지 않으므로 수치를 만들지 않습니다."] },
        { heading: "퀘스트와 Forge 밸런스", paragraphs: ["Dragon Knight 관련 퀘스트의 난이도가 조정되었습니다. 필요한 스탯에 약한 나이트의 패널티는 줄고, 필요한 스탯을 초과했을 때의 점수 보너스는 늘었습니다.", "Forge의 최초 및 이후 수리 비용도 줄었습니다. 새 가격은 공식 발표에 없으므로 현재 게임 화면에서 확인하세요."] },
        { heading: "Grest 긴급 퀘스트", paragraphs: ["Grest 해적 긴급 퀘스트의 제한 시간이 1사이클 늘었습니다. 변경 방향은 공식 노트가 확인하지만 최적 나이트나 지연했을 때의 전체 결과는 제공하지 않습니다."] },
        { heading: "기존 가이드에 미치는 영향", paragraphs: ["정확한 퀘스트 기준, 점수와 가격 옆에는 반드시 빌드를 표시하세요. Demo 루트는 스토리 맥락으로 쓸 수 있지만 현재 출시판의 보장된 답은 아닙니다.", "이 사이트에서는 1.0.8을 현재 근거 경계로 삼습니다. 다음 패치가 나오면 공식 노트와 게임 화면을 확인해 바뀐 부분만 수정합니다."] },
      ],
      note: "1.0.8 공식 노트가 확인하는 것은 변경 대상과 방향입니다. 노트에 없는 새 가격, 점수 공식과 아이템 수치를 추가하지 않습니다.",
      sources: ["Steam Community 공식 업데이트", "Steam 상점 페이지"],
    },
    achievements: {
      answer: "Sovereign Tower의 Steam 업적은 공식 상점 페이지에 75개로 표시됩니다. 이 숫자는 현재 스토어에서 확인되는 사실이지만, 각 숨겨진 조건이나 최단 루트까지 확인해 주는 것은 아닙니다. 조건을 안내할 때는 Steam의 현재 설명이나 재현 가능한 현재 빌드 테스트를 사용합니다.",
      sections: [
        { heading: "공식 목록이 확인하는 것", paragraphs: ["Steam은 업적이 존재하며 현재 75개가 표시된다는 사실을 확인합니다. 같은 상점 페이지에는 싱글플레이 내러티브 RPG, 라운드 테이블 퀘스트, 나이트 관계, 시간 되감기와 타워 확장도 나옵니다.", "하지만 상점 개요는 각 업적이 어떤 시스템에 속하는지 말하지 않습니다. Supporter Edition, 사운드트랙과 디지털 아트북 같은 상품 정보를 업적 조건으로 바꾸지 마세요."] },
        { heading: "목록을 안전하게 사용하기", paragraphs: ["Steam 업적 페이지에서 표시되는 문구를 기준으로 정리하세요. 나이트, 퀘스트, Act 또는 결과가 언급되면 최단 루트를 추측하지 말고 실제 선택과 상황을 기록합니다.", "한 사람의 경험만으로 확정 해제를 안내하지 마세요. PATCH 1.0.8은 퀘스트와 저장 행동을 바꿨으므로 오래된 업적 공략은 다시 확인해야 합니다."] },
        { heading: "업적 페이지 정책", paragraphs: ["각 항목에는 업적 이름, Steam 표시 설명, 확인된 Act 또는 시스템과 근거 라벨을 포함합니다. Official Steam, 현재 빌드 Tested, Community Report를 구분하고 조건이 없으면 문서화되지 않았다고 씁니다.", "Steam이 업적을 추가하거나 바꾸면 총수와 해당 행만 업데이트합니다. 확인하지 못한 조건으로 페이지를 부풀리지 않습니다."] },
      ],
      note: "75개라는 총수는 공식 상점 확인값입니다. 숨겨진 업적 조건은 현재 Steam 표시나 재현 가능한 현재 빌드 테스트가 없으면 단정하지 않습니다.",
      sources: ["Steam 상점 페이지", "Steam Community 공식 공지"],
    },
    "system-requirements": {
      answer: "현재 Steam 목록에는 Windows와 SteamOS/Linux 공식 사양이 있습니다. Windows 최소 사양은 Windows 10, Intel Core i5-4670K, 4GB RAM, GeForce GT 1030 2GB, DirectX 12와 3GB 저장 공간입니다. 권장 사양은 Windows 11, Intel Core i5-9600K, 8GB RAM, GTX 1060 6GB, DirectX 12와 3GB입니다.",
      sections: [
        { heading: "Windows 사양", paragraphs: ["최소: Windows 10, Intel Core i5-4670K, 4GB RAM, GeForce GT 1030 2GB, DirectX 12, 3GB. 권장: Windows 11, Intel Core i5-9600K, 8GB RAM, GTX 1060 6GB VRAM, DirectX 12, 3GB.", "이는 Steam에 표시된 값이며 해상도나 그래픽 설정별 프레임률을 보장하지 않습니다."] },
        { heading: "SteamOS와 Linux 사양", paragraphs: ["최소와 권장 모두 SteamOS 3.8.10입니다. CPU는 Zen 2 4c/8t, 2.4–3.5GHz, 메모리는 최소 4GB·권장 8GB, 그래픽은 8 RDNA 2 CUs, 1.6GHz, 저장 공간은 3GB입니다.", "Steam 표는 SteamOS/Linux 요구 사항을 보여 주며 native macOS 지원을 증명하지 않습니다."] },
        { heading: "용량과 구매 전 확인", paragraphs: ["표시된 필요 공간은 Windows와 SteamOS/Linux 모두 3GB입니다. 운영체제, Steam 다운로드와 향후 업데이트를 위해 추가 여유 공간을 남겨두세요.", "구매 전 공식 Steam 페이지를 다시 확인하세요. 사양, 플랫폼과 리뷰는 변할 수 있으며 콘솔이나 미래 Mac 버전의 요구 사항을 추측하는 근거로 쓰면 안 됩니다."] },
      ],
      note: "이 페이지는 Steam에 현재 표시된 값을 기록합니다. 업데이트나 스토어 표시가 바뀌면 제3자 글이 아니라 공식 페이지에서 다시 확인합니다.",
      sources: ["Steam 공식 상점 페이지", "WILD WITS 공식 게임 페이지"],
    },
  },
  fr: {
    "beginner-guide": {
      answer: "Commencez par apprendre la boucle quotidienne plutôt que de chercher une route parfaite. Écoutez les demandes, gérez la Table Ronde, recrutez des Chevaliers, envoyez-les en quête et lisez le résultat. Les sources officielles ajoutent la gestion des relations, l'extension de la Tour et le rembobinage du Démon lorsque vos choix vous apprennent quelque chose.",
      sections: [
        { heading: "Lire l'audience du matin", paragraphs: ["L'audience du matin est la première responsabilité importante du Souverain. Lisez la demande avant de penser à la récompense : une petite décision peut toucher des personnages, des groupes, d'autres dirigeants et l'avenir du royaume.", "Ne précipitez pas les dialogues. Le ton du personnage et la pression politique autour de la demande aident à comprendre la conséquence qui suivra."] },
        { heading: "Affecter les quêtes à la Table Ronde", paragraphs: ["Après l'audience, examinez les demandes à la Table Ronde et choisissez le Chevalier qui partira. La description officielle de Steam liste Strength, Agility, Charisma, Magic et Wit, et indique que chaque quête demande un ensemble de compétences différent.", "Ne choisissez pas uniquement la plus grande valeur. Traits, équipement, préférences et relations peuvent aussi compter. Les seuils exacts et la formule complète restent dépendants de la version jusqu'à un test dans le build actuel."] },
        { heading: "Lire le résultat avant de décider", paragraphs: ["Un Chevalier de retour peut produire un Critical Success, un Critical Failure ou un Unexpected Outcome. Ces résultats indiquent plus qu'une victoire ou une défaite : ils peuvent révéler une interaction ou une branche narrative.", "Notez la quête, le Chevalier envoyé, le choix précédent et le résultat. Après un patch, ne transformez pas automatiquement une observation ancienne en règle universelle."] },
        { heading: "Surveiller les six signaux de relation", paragraphs: ["La description officielle cite Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie. Lisez la réaction de la faction comme une partie du résultat, même si la quête semble réussie.", "Aucun tableau public fiable ne rassemble tous les seuils d'affinité et toutes les conséquences. Pour tester une route, notez l'état de la faction avant et après le choix."] },
        { heading: "Garder les Chevaliers satisfaits", paragraphs: ["Les Chevaliers ne sont pas des icônes de quête jetables. La boutique officielle mentionne leur départ possible, leurs egos, leurs griefs et leurs romances. Vérifiez le contexte relationnel avant de renvoyer le même Chevalier dans une mission dangereuse ou inadéquate."] },
        { heading: "Étendre la Tour avec méthode", paragraphs: ["L'extension de la Tour fait partie de la progression confirmée. La présentation officielle cite notamment Carina's Forge et Witch's Alchemy Room, qui fournissent des objets pour de futures quêtes.", "Le PATCH 1.0.8 a modifié les coûts de réparation de la Forge. Ne copiez pas les prix ou recettes de la Demo sans vérifier le build actuel."] },
        { heading: "Utiliser le Démon après un apprentissage", paragraphs: ["Le Démon des Crypts de la Tour peut remonter le temps. Les documents officiels décrivent le transfert des connaissances vers une nouvelle tentative, avec d'autres dialogues, chemins, personnages et résultats.", "Rembobinez après avoir appris quelque chose de significatif : une conséquence, un chemin bloqué ou une réaction. Les limites et pénalités complètes ne sont pas publiées dans un tableau officiel unique."] },
      ],
      note: "Une première partie sûre suit un ordre simple : lire la demande, choisir un Chevalier adapté, vérifier le coût relationnel, noter le résultat et rembobiner avec les connaissances si nécessaire. Les conditions cachées restent des guides séparés à vérifier.",
      sources: ["Page Steam", "Présentation Curve Games", "Page officielle WILD WITS"],
    },
    "quest-matching": {
      answer: "Avant d'envoyer un Chevalier, vérifiez la statistique de la demande, mais aussi ses traits, son équipement, ses préférences et ses relations. Steam liste officiellement Strength, Agility, Charisma, Magic et Wit. Luck apparaît dans une autre source de sortie ; il ne faut donc pas le présenter comme une sixième stat officielle universelle.",
      sections: [
        { heading: "Ce que les sources publiques confirment", paragraphs: ["Sovereign Tower est un RPG narratif solo où l'on gère le royaume, recrute des Chevaliers, affecte des quêtes, équilibre les relations, agrandit la Tour et rembobine le temps avec le Démon.", "Un Chevalier n'est pas seulement un nombre. Les sources mentionnent aussi traits, équipement, préférences, relations et histoire personnelle comme facteurs possibles d'une quête."] },
        { heading: "Comparer la demande et le Chevalier", paragraphs: ["Commencez par identifier la statistique demandée et comparez-la au roster. Examinez ensuite traits, équipement, préférences et relations actuelles. Aucune règle officielle ne dit que la valeur la plus élevée est toujours la meilleure.", "Les tableaux communautaires peuvent servir d'index des valeurs et résultats à tester, mais certains indiquent eux-mêmes que les données sont encore en cours de vérification. Les seuils doivent être testés dans le build 1.0.8 actuel."] },
        { heading: "Effet du PATCH 1.0.8", paragraphs: ["Le patch réduit la pénalité lorsque la stat requise est insuffisante, augmente le bonus lorsque la valeur la dépasse et ajuste la difficulté du Dragon Knight. Les seuils d'une Demo ou d'une ancienne table ne garantissent donc pas le résultat actuel.", "La formule complète, les traits cachés et tous les minimums ne sont pas documentés publiquement. Ajoutez la version et le contexte de test à toute valeur exacte."] },
        { heading: "Lire les factions et les Unexpected Outcomes", paragraphs: ["Les six signaux — Marchands, Mystiques, Érudits, Nobles, Peuple et Trésorerie — complètent le résultat de quête. Les Unexpected Outcomes sont rapportés comme des résultats spéciaux liés à un Chevalier, une relation de quête ou un état débloqué.", "Un exemple avec Angelica et Clean Keeper Goose ne suffit pas à établir une condition universelle. Notez le Chevalier, le choix, la version et le résultat avant de juger la reproductibilité."] },
        { heading: "Quand rembobiner", paragraphs: ["Les sources officielles confirment que le Démon conserve les connaissances et ouvre d'autres dialogues, chemins, alliances et routes de Chevalier. Une autre critique indique que les événements ultérieurs de la timeline abandonnée sont perdus.", "Le nombre de rembobinages, une éventuelle pénalité fixe et toutes les conséquences ne sont pas entièrement documentés. Utilisez-le pour tester une branche importante, sans présenter une route non vérifiée comme garantie."] },
      ],
      note: "Avant l'envoi, vérifiez stats, traits, équipement, préférences et factions ; notez ensuite le résultat et la timeline. Les douze vérifications communautaires sont des pistes versionnées, pas des garanties officielles.",
      sources: ["Page Steam", "Mises à jour Steam Community", "Index de quêtes créé par des joueurs"],
    },
    "patch-1-0-8": {
      answer: "Le PATCH 1.0.8 est une mise à jour officielle de Sovereign Tower publiée dans Steam Community le 10 août 2026. Elle corrige des bugs, ajoute une confirmation de sauvegarde/chargement, modifie l'équilibrage des quêtes, le Dragon Knight, les réparations de la Forge et le délai de la quête d'urgence de Grest. Les notes ne donnent pas tous les nouveaux chiffres ; nous ne les inventons pas.",
      sections: [
        { heading: "Corrections de bugs", paragraphs: ["Le patch ajoute un contournement pour un crash de l'écran de chargement Godot lorsque l'initialisation Steam n'était pas vérifiée. Il corrige aussi Gwendan immortel, le double deuil de Gwendolen et un blocage de la quête de Ligia sur le même choix de recherche d'objet.", "L'exploit d'achat sans Gold avec le Blacksmith depuis la Table Ronde est retiré. Le spellbook incorrect après le recrutement du Pawnbroker et plusieurs fautes ou chaînes d'affichage sont également corrigés."] },
        { heading: "Confort de jeu", paragraphs: ["Une fenêtre de confirmation apparaît avant la sauvegarde ou le chargement. Dans un jeu à embranchements, cela réduit les changements de timeline accidentels.", "Plusieurs objets des Acts 2 et 3 sont renforcés pour accompagner la difficulté tardive. Les notes ne listent pas chaque objet ni chaque bonus, donc aucun chiffre supplémentaire n'est ajouté ici."] },
        { heading: "Équilibrage des quêtes et de la Forge", paragraphs: ["La difficulté des quêtes contre le Dragon Knight est ajustée. La pénalité lorsque la statistique requise est faible diminue, tandis que le bonus lorsque la valeur dépasse le seuil augmente.", "Les coûts de réparation initiaux et suivants de la Forge diminuent également. Les nouveaux prix ne figurent pas dans l'annonce ; vérifiez la valeur affichée dans le jeu actuel."] },
        { heading: "Quête d'urgence de Grest", paragraphs: ["Le délai de la quête d'urgence contre les pirates de Grest gagne un cycle. La note confirme la direction du changement, mais pas le meilleur Chevalier ni toutes les conséquences d'un retard."] },
        { heading: "Conséquence pour les anciens guides", paragraphs: ["Placez la version à côté de chaque seuil, score ou prix exact. Une route de Demo peut conserver sa valeur narrative, mais elle ne doit pas être appelée réponse garantie de la sortie.", "Pour ce site, le patch 1.0.8 est la limite actuelle des preuves. Au prochain patch, revérifiez les notes officielles et l'écran du jeu, puis modifiez seulement les éléments concernés."] },
      ],
      note: "Les notes 1.0.8 confirment les objets et la direction des changements. Les nouveaux prix, formules et valeurs d'objets absents des notes restent volontairement non publiés.",
      sources: ["Mise à jour officielle Steam Community", "Page Steam"],
    },
    achievements: {
      answer: "La page officielle Steam affiche 75 succès pour Sovereign Tower. Ce total est un fait vérifiable dans le magasin actuel, mais il ne révèle pas automatiquement toutes les conditions cachées ni le meilleur ordre. Pour guider un déblocage, utilisez le texte Steam actuel ou un test reproductible dans le build présent.",
      sections: [
        { heading: "Ce que liste la page officielle", paragraphs: ["Steam confirme l'existence des succès et en affiche actuellement 75. La même page décrit un RPG narratif solo avec quêtes de Table Ronde, relations des Chevaliers, rembobinage et extension de la Tour.", "Le résumé officiel ne relie pas chaque succès à un système précis. Les produits Supporter Edition, bande-son et artbook ne doivent pas être transformés en conditions de succès."] },
        { heading: "Utiliser la liste sans risque", paragraphs: ["Commencez par la page des succès Steam et conservez le libellé affiché. Si un objectif mentionne un Chevalier, une quête, un Act ou un résultat, notez le contexte réel au lieu de supposer la route la plus courte.", "Un seul témoignage ne suffit pas à promettre un déblocage. Le PATCH 1.0.8 a modifié des quêtes et la gestion des sauvegardes ; les anciennes astuces doivent être revérifiées."] },
        { heading: "Politique de la page des succès", paragraphs: ["Chaque entrée future contiendra le nom, le texte Steam visible, l'Act ou le système confirmé et un label de preuve. Nous distinguerons Official Steam, Tested sur la version actuelle et Community Report ; si la condition est inconnue, nous le dirons clairement.", "Si Steam ajoute ou modifie un succès, mettez à jour le total et la ligne concernée plutôt que de remplir la page avec des conditions non testées."] },
      ],
      note: "Le total de 75 vient du magasin officiel. Les conditions cachées ne seront pas affirmées sans texte Steam actuel ou test reproductible dans la version présente.",
      sources: ["Page Steam", "Annonces officielles Steam Community"],
    },
    "system-requirements": {
      answer: "La fiche Steam actuelle donne les configurations officielles Windows et SteamOS/Linux. Sous Windows, le minimum est Windows 10, Intel Core i5-4670K, 4 Go de RAM, GeForce GT 1030 2 Go, DirectX 12 et 3 Go disponibles. La recommandation est Windows 11, Intel Core i5-9600K, 8 Go, GTX 1060 6 Go, DirectX 12 et 3 Go.",
      sections: [
        { heading: "Configuration Windows", paragraphs: ["Minimum : Windows 10, Intel Core i5-4670K, 4 Go de RAM, GeForce GT 1030 2 Go, DirectX 12, 3 Go. Recommandé : Windows 11, Intel Core i5-9600K, 8 Go, GTX 1060 6 Go de VRAM, DirectX 12, 3 Go.", "Ce sont les valeurs affichées par Steam ; elles ne garantissent pas un nombre d'images par seconde pour chaque résolution ou réglage."] },
        { heading: "Configuration SteamOS et Linux", paragraphs: ["Le minimum et le recommandé utilisent SteamOS 3.8.10. Le CPU est Zen 2 4c/8t à 2,4–3,5 GHz, la mémoire est de 4 Go minimum et 8 Go recommandé, le circuit graphique est de 8 RDNA 2 CUs à 1,6 GHz et le stockage demandé est de 3 Go.", "Cette table Steam décrit SteamOS/Linux ; elle ne prouve pas une prise en charge native de macOS."] },
        { heading: "Stockage et vérification avant achat", paragraphs: ["Le stockage affiché est de 3 Go pour Windows comme pour SteamOS/Linux. Gardez davantage de place pour le système, les téléchargements Steam et les futures mises à jour.", "Avant l'achat, ouvrez à nouveau la fiche Steam officielle. Les exigences, plateformes et avis peuvent changer ; elles ne permettent pas d'inférer les exigences d'une console ou d'un éventuel portage Mac."] },
      ],
      note: "Cette page enregistre les valeurs actuellement visibles sur Steam. En cas de changement, la mise à jour doit repartir de la fiche officielle et non d'un article tiers.",
      sources: ["Fiche officielle Steam", "Page officielle WILD WITS"],
    },
  },
};

function GuideDocument({ data, locale }: { data: GuideTranslation; locale: Exclude<Locale, "en"> }) {
  const labels = {
    ja: { answer: "直接回答", note: "証拠メモ", sources: "出典" },
    ko: { answer: "직접 답변", note: "근거 메모", sources: "출처" },
    fr: { answer: "Réponse directe", note: "Note de preuve", sources: "Sources" },
  }[locale];
  return <>
    <div className="direct-answer hud-frame"><span className="kicker">{labels.answer}</span><p>{data.answer}</p></div>
    {data.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
    <div className="evidence-note"><span className="kicker">{labels.note}</span><p>{data.note}</p></div>
    <section><h2>{labels.sources}</h2><ul className="source-list">{data.sources.map((source) => <li key={source}>{source}</li>)}</ul></section>
  </>;
}

export function LocalizedGuideContent({ locale, slug }: { locale: Exclude<Locale, "en">; slug: string }) {
  const data = guideText[locale][slug];
  if (!data) return null;
  return <GuideDocument data={data} locale={locale} />;
}
