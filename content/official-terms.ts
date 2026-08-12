import type { Locale } from "@/lib/site-data";

/**
 * Terms copied from the localized Steam store descriptions checked on
 * 2026-08-12. These are the preferred labels for translated guide copy;
 * explanatory sentences may use normal local-language grammar around them.
 */
export const officialTerms = {
  roundTable: { en: "Round Table", ja: "円卓", ko: "원탁", fr: "Table ronde" },
  knight: { en: "Knight", ja: "騎士", ko: "기사", fr: "Chevalier" },
  knights: { en: "Knights", ja: "騎士たち", ko: "기사들", fr: "Chevaliers" },
  annex: { en: "Annex", ja: "別館", ko: "부속 건물", fr: "annexe" },
  forge: { en: "Forge", ja: "鍛冶屋の炉", ko: "대장간", fr: "forge du forgeron" },
  alchemyRoom: { en: "Witch's Alchemy Room", ja: "魔女の錬金術工房", ko: "마녀의 연금술 방", fr: "salle d'alchimie de la sorcière" },
  demon: { en: "Demon", ja: "悪魔", ko: "악마", fr: "démon" },
  tower: { en: "Tower", ja: "タワー", ko: "탑", fr: "Tour" },
  strength: { en: "Strength", ja: "筋力", ko: "힘", fr: "force" },
  agility: { en: "Agility", ja: "敏捷性", ko: "민첩성", fr: "agilité" },
  charisma: { en: "Charisma", ja: "魅力", ko: "카리스마", fr: "charisme" },
  magic: { en: "Magic", ja: "魔力", ko: "마법", fr: "magie" },
  wit: { en: "Wit", ja: "機知", ko: "지혜", fr: "intelligence" },
  timeRewind: { en: "time rewind", ja: "時間巻き戻し", ko: "시간 되감기", fr: "rembobinage du temps" },
  unexpectedOutcome: { en: "Unexpected Outcome", ja: "予想外の結果", ko: "예상 밖의 결과", fr: "résultat inattendu" },
  singlePlayer: { en: "single-player", ja: "一人用", ko: "싱글플레이", fr: "solo" },
  romance: { en: "romance", ja: "ロマンス", ko: "로맨스", fr: "romance" },
} as const;

export type OfficialTermKey = keyof typeof officialTerms;

export function officialTerm(locale: Locale, key: OfficialTermKey) {
  return officialTerms[key][locale];
}

const textReplacements: Record<Exclude<Locale, "en">, Array<[string, string]>> = {
  ja: [
    ["Witch's Alchemy Room", officialTerms.alchemyRoom.ja], ["Carina's Forge", officialTerms.forge.ja],
    ["Round Table", officialTerms.roundTable.ja], ["Unexpected Outcome", officialTerms.unexpectedOutcome.ja],
    ["Critical Success", "大成功"], ["Critical Failure", "大失敗"], ["Knights", officialTerms.knights.ja],
    ["Knight", officialTerms.knight.ja], ["Annexes", "別館"], ["Annex", officialTerms.annex.ja],
    ["Forge", officialTerms.forge.ja], ["Demon", officialTerms.demon.ja], ["Crypts", "地下墓地"],
    ["time rewind", officialTerms.timeRewind.ja], ["Time Rewind", officialTerms.timeRewind.ja],
    ["Strength", officialTerms.strength.ja], ["Agility", officialTerms.agility.ja], ["Charisma", officialTerms.charisma.ja],
    ["Magic", officialTerms.magic.ja], ["Wit", officialTerms.wit.ja], ["single-player", officialTerms.singlePlayer.ja],
    ["romance", officialTerms.romance.ja],
  ],
  ko: [
    ["Witch's Alchemy Room", officialTerms.alchemyRoom.ko], ["Carina's Forge", officialTerms.forge.ko],
    ["Round Table", officialTerms.roundTable.ko], ["Unexpected Outcome", officialTerms.unexpectedOutcome.ko],
    ["Critical Success", "대성공"], ["Critical Failure", "치명적 실패"], ["Knights", officialTerms.knights.ko],
    ["Knight", officialTerms.knight.ko], ["Annexes", "부속 건물"], ["Annex", officialTerms.annex.ko],
    ["Forge", officialTerms.forge.ko], ["Demon", officialTerms.demon.ko], ["Crypts", "지하 묘지"],
    ["time rewind", officialTerms.timeRewind.ko], ["Time Rewind", officialTerms.timeRewind.ko],
    ["Strength", officialTerms.strength.ko], ["Agility", officialTerms.agility.ko], ["Charisma", officialTerms.charisma.ko],
    ["Magic", officialTerms.magic.ko], ["Wit", officialTerms.wit.ko], ["single-player", officialTerms.singlePlayer.ko],
    ["romance", officialTerms.romance.ko],
  ],
  fr: [
    ["Witch's Alchemy Room", officialTerms.alchemyRoom.fr], ["Carina's Forge", officialTerms.forge.fr],
    ["Round Table", officialTerms.roundTable.fr], ["Unexpected Outcome", officialTerms.unexpectedOutcome.fr],
    ["Critical Success", "réussite critique"], ["Critical Failure", "échec critique"], ["Knights", officialTerms.knights.fr],
    ["Knight", officialTerms.knight.fr], ["Annexes", "Annexes"], ["Annex", officialTerms.annex.fr],
    ["Forge", officialTerms.forge.fr], ["Demon", officialTerms.demon.fr], ["Crypts", "cryptes"],
    ["time rewind", officialTerms.timeRewind.fr], ["Time Rewind", officialTerms.timeRewind.fr],
    ["Strength", officialTerms.strength.fr], ["Agility", officialTerms.agility.fr], ["Charisma", officialTerms.charisma.fr],
    ["Magic", officialTerms.magic.fr], ["Wit", officialTerms.wit.fr], ["single-player", officialTerms.singlePlayer.fr],
    ["romance", officialTerms.romance.fr],
  ],
};

export function localizeOfficialText(locale: Locale, text: string) {
  if (locale === "en") return text;
  return textReplacements[locale].reduce((result, [from, to]) => result.replaceAll(from, to), text);
}

const queryTerms: Record<Exclude<Locale, "en">, Record<string, string>> = {
  ja: {
    guide: "攻略ガイド", walkthrough: "攻略チャート", wiki: "Wiki", "wit guide": "Wit 攻略", characters: "キャラクター", knights: "騎士", romance: "ロマンス", gender: "性別", murder: "殺人", endings: "エンディング", "gideon death": "Gideon の死亡", "my knight was assassinated": "騎士が暗殺された", "will there be consequences using demon powers": "Demon の力の影響", "unexpected outcomes": "予想外の結果", "how many acts": "Act 数", "who to accuse": "誰を告発するか", goose: "Goose", steam: "Steam", "release date": "発売日", ps5: "PS5", switch: "Switch", demo: "Demo", download: "ダウンロード", "itch.io": "itch.io", mac: "Mac", cost: "価格", forge: "鍛冶屋の炉", "sovereign mode": "Sovereign Mode", cheats: "チート", review: "レビュー", reddit: "Reddit", "discord invite link": "Discord 招待リンク", goberto: "Goberto", victoria: "Victoria", brunhilda: "Brunhilda", angelica: "Angelica", gideon: "Gideon", "how to get chester": "Chester の入手方法", silgur: "Silgur", taric: "Taric",
  },
  ko: {
    guide: "공략 가이드", walkthrough: "공략 진행", wiki: "Wiki", "wit guide": "Wit 공략", characters: "캐릭터", knights: "기사", romance: "로맨스", gender: "성별", murder: "살인", endings: "엔딩", "gideon death": "Gideon 사망", "my knight was assassinated": "기사가 암살당했을 때", "will there be consequences using demon powers": "Demon의 힘과 결과", "unexpected outcomes": "예상 밖의 결과", "how many acts": "Act 수", "who to accuse": "누구를 고발할까", goose: "Goose", steam: "Steam", "release date": "출시일", ps5: "PS5", switch: "Switch", demo: "Demo", download: "다운로드", "itch.io": "itch.io", mac: "Mac", cost: "가격", forge: "대장간", "sovereign mode": "Sovereign Mode", cheats: "치트", review: "리뷰", reddit: "Reddit", "discord invite link": "Discord 초대 링크", goberto: "Goberto", victoria: "Victoria", brunhilda: "Brunhilda", angelica: "Angelica", gideon: "Gideon", "how to get chester": "Chester 영입 방법", silgur: "Silgur", taric: "Taric",
  },
  fr: {
    guide: "guide", walkthrough: "soluce", wiki: "Wiki", "wit guide": "guide du Wit", characters: "personnages", knights: "Chevaliers", romance: "romance", gender: "genre", murder: "meurtre", endings: "fins", "gideon death": "mort de Gideon", "my knight was assassinated": "mon Chevalier a été assassiné", "will there be consequences using demon powers": "conséquences du pouvoir du démon", "unexpected outcomes": "résultats inattendus", "how many acts": "nombre d'Acts", "who to accuse": "qui accuser", goose: "Goose", steam: "Steam", "release date": "date de sortie", ps5: "PS5", switch: "Switch", demo: "Demo", download: "téléchargement", "itch.io": "itch.io", mac: "Mac", cost: "prix", forge: "forge", "sovereign mode": "Sovereign Mode", cheats: "cheats", review: "avis", reddit: "Reddit", "discord invite link": "lien d'invitation Discord", goberto: "Goberto", victoria: "Victoria", brunhilda: "Brunhilda", angelica: "Angelica", gideon: "Gideon", "how to get chester": "obtenir Chester", silgur: "Silgur", taric: "Taric",
  },
};

export function localizeKeyword(locale: Locale, keyword: string) {
  if (locale === "en") return keyword;
  const prefix = "Sovereign Tower ";
  const suffix = keyword.startsWith(prefix) ? keyword.slice(prefix.length).toLowerCase() : keyword.toLowerCase();
  return `${prefix}${queryTerms[locale][suffix] ?? keyword.slice(prefix.length)}`;
}
