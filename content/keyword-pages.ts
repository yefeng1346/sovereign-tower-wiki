export type KeywordSource = { label: string; url: string };
export type EvidenceLevel = "official" | "tested" | "community" | "not-announced" | "mixed";

type KeywordDraft = {
  keyword: string;
  category: string;
  answer: string;
  confirmed: string;
  workflow: string;
  context: string;
  pending: string;
  revisit: string;
  sourceSummary: string;
  sources: KeywordSource[];
};

export type KeywordPage = KeywordDraft & {
  slug: string;
  title: string;
  description: string;
  evidence: EvidenceLevel;
  evidenceLabel: string;
  evidenceDescription: string;
  indexable: boolean;
  lastChecked: string;
};

export const researchSnapshot = {
  date: "August 12, 2026",
  build: "Patch 1.0.8",
  compact: "AUG 12, 2026 · PATCH 1.0.8",
} as const;

export const evidenceLabels: Record<EvidenceLevel, { label: string; description: string }> = {
  official: { label: "Official", description: "Published by the developer, publisher or Steam listing." },
  tested: { label: "Tested · Patch 1.0.8", description: "Supported by current-release player testing." },
  community: { label: "Community report", description: "Useful player evidence that is not a formal rulebook." },
  "not-announced": { label: "Not announced", description: "No official release or feature announcement found." },
  mixed: { label: "Mixed evidence", description: "Official context combined with community route details." },
};

const evidenceByKeyword: Partial<Record<string, EvidenceLevel>> = {
  "Sovereign Tower guide": "mixed",
  "Sovereign Tower walkthrough": "mixed",
  "Sovereign Tower wiki": "community",
  "Sovereign Tower wit guide": "community",
  "Sovereign Tower characters": "mixed",
  "Sovereign Tower knights": "mixed",
  "Sovereign Tower Goberto": "tested",
  "Sovereign Tower Victoria": "community",
  "Sovereign Tower Brunhilda": "tested",
  "Sovereign Tower Angelica": "community",
  "Sovereign Tower Gideon": "mixed",
  "Sovereign Tower how to get Chester": "tested",
  "Sovereign Tower Silgur": "community",
  "Sovereign Tower Taric": "official",
  "Sovereign Tower romance": "mixed",
  "Sovereign Tower gender": "official",
  "Sovereign Tower murder": "community",
  "Sovereign Tower endings": "community",
  "Sovereign Tower Gideon death": "community",
  "Sovereign Tower my knight was assassinated": "community",
  "Sovereign Tower will there be consequences using demon powers": "mixed",
  "Sovereign Tower unexpected outcomes": "community",
  "Sovereign Tower how many acts": "mixed",
  "Sovereign Tower who to accuse": "community",
  "Sovereign Tower Goose": "mixed",
  "Sovereign Tower Steam": "official",
  "Sovereign Tower release date": "official",
  "Sovereign Tower PS5": "not-announced",
  "Sovereign Tower Switch": "not-announced",
  "Sovereign Tower demo": "official",
  "Sovereign Tower download": "official",
  "Sovereign Tower itch.io": "official",
  "Sovereign Tower Mac": "mixed",
  "Sovereign Tower cost": "official",
  "Sovereign Tower forge": "official",
  "Sovereign Tower sovereign mode": "tested",
  "Sovereign Tower cheats": "not-announced",
  "Sovereign Tower review": "mixed",
  "Sovereign Tower Reddit": "community",
  "Sovereign Tower Discord invite link": "official",
};

const noindexKeywords = new Set([
  "Sovereign Tower Taric",
  "Sovereign Tower Reddit",
]);

const source = (label: string, url: string): KeywordSource => ({ label, url });

const sourceUrls = {
  steam: "https://store.steampowered.com/app/4113940/Sovereign_Tower/",
  steamCommunity: "https://steamcommunity.com/app/4113940/allnews/",
  demo: "https://store.steampowered.com/app/4422320/Sovereign_Tower_Demo/",
  wildWits: "https://wildwits.games/en/sovereign-tower-en/",
  pcGamerTime: "https://www.pcgamer.com/games/rpg/sovereign-tower-looks-like-a-cosy-management-game-but-its-ruthless-full-of-murder-and-impossible-choices-and-features-one-of-the-best-time-travel-systems-ive-ever-encountered/",
  pcGamerReview: "https://www.pcgamer.com/games/rpg/sovereign-tower-review/",
  pcGamerDispatch: "https://www.pcgamer.com/games/sim/sovereign-tower-is-a-medieval-fantasy-dispatch-with-all-the-bossiness-and-flirting-you-could-want/",
  pcGamerKnight: "https://www.pcgamer.com/games/rpg/dispatch-cleared-the-way-for-medieval-narrative-rpg-sovereign-tower-as-its-developer-says-the-line-up-was-actually-perfect-for-us/",
  raiderQuests: "https://www.reddit.com/r/raiderking/comments/1vjnw73/sovereign_tower_all_quests_guide_success/",
  raiderKnights: "https://www.reddit.com/r/raiderking/comments/1vi2xd1/sovereign_tower_all_knights_list_hidden/",
  steamGuides: "https://steamcommunity.com/app/4113940/guides/",
  steamRoster: "https://steamcommunity.com/sharedfiles/filedetails/?id=3780421931",
  steamUnexpectedGuide: "https://steamcommunity.com/sharedfiles/filedetails/?id=3780418593",
  steamGideon: "https://steamcommunity.com/games/4113940/announcements/detail/494970521254887456",
  steamCharacters: "https://steamcommunity.com/app/4113940/allnews/",
  steamBrunhilda: "https://steamcommunity.com/app/4113940/?curator_clanid=4777282",
  steamGoose: "https://steamcommunity.com/app/4113940/allnews/",
  steamUnexpected: "https://steamcommunity.com/app/4113940/?curator_clanid=4777282",
  steamMurder: "https://steamcommunity.com/app/4113940/discussions/0/589560334633876782/",
  steamEndings: "https://steamcommunity.com/app/4113940/discussions/0/589560061703234799/",
  redditSwitch: "https://www.reddit.com/r/IndieGaming/comments/1qh11ct/weve_just_announced_our_new_game_sovereign_tower/",
  rpgamerDemo: "https://rpgamer.com/2026/04/sovereign-tower-extended-demo-trailer-released/",
  itch: "https://wildwits.itch.io/sovereign-tower",
  itchDevlog: "https://wildwits.itch.io/sovereign-tower/devlog/1318282/welcome-to-the-tower-sovereign",
  gobertoRomance: "https://wildwits.itch.io/sovereign-tower/comments?before=78",
  gameFAQs: "https://gamefaqs.gamespot.com/pc/612134-sovereign-tower/data",
  steamPrice: "https://store.steampowered.com/recommended/morelike/app/4113940/",
  forge: "https://wildwits.itch.io/sovereign-tower/comments?before=30",
  jvFrance: "https://www.jvfrance.com/jeux/sovereign-tower/",
  trainer: "https://flingcheat.com/threads/sovereign-tower-trainer.35671/",
  digitalChumps: "https://digitalchumps.com/sovereign-tower-impressions-pc/",
  redditGames: "https://www.reddit.com/r/Games/comments/1vh8qe7/sovereign_tower_storyrich_round_table_management/",
  steamDB: "https://steamdb.info/app/4113940/",
  discord: "https://discord.com/servers/sovereign-tower-1450459764742950922",
} as const;

function slugify(keyword: string) {
  return keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function seoTitle(keyword: string) {
  // This query is 61 characters before adding any title suffix. Keep its
  // complete wording in the H1 and description, while using a compact SEO
  // title that preserves the same search intent inside the requested range.
  if (keyword.length > 60) return "Sovereign Tower consequences using demon powers — guide";
  const candidates = [
    `${keyword} — confirmed facts and guide`,
    `${keyword} — what players can verify`,
    `${keyword} — facts and current status`,
    `${keyword} — guide`,
  ];
  return candidates.find((candidate) => candidate.length >= 40 && candidate.length <= 60) ?? keyword;
}

function seoDescription(keyword: string, text: string) {
  const suffix = " Evidence labels show what is official, tested or still a community lead.";
  const result = `${keyword}: ${text}${suffix}`;
  if (result.length < 140) return `${result} Official and community evidence are identified.`.slice(0, 160);
  if (result.length > 160) return `${result.slice(0, 157)}...`;
  return result;
}

function publicText(text: string) {
  return text
    .replaceAll("待确认", "not fully documented")
    .replaceAll("待确认 details", "unverified details");
}

function makePage(draft: KeywordDraft): KeywordPage {
  const answer = publicText(draft.answer);
  const confirmed = publicText(draft.confirmed);
  const workflow = publicText(draft.workflow);
  const context = publicText(draft.context);
  const sourceSummary = publicText(draft.sourceSummary);
  return {
    ...draft,
    answer,
    confirmed,
    workflow,
    context,
    sourceSummary,
    slug: slugify(draft.keyword),
    title: seoTitle(draft.keyword),
    description: seoDescription(draft.keyword, answer),
    evidence: evidenceByKeyword[draft.keyword] ?? "community",
    evidenceLabel: evidenceLabels[evidenceByKeyword[draft.keyword] ?? "community"].label,
    evidenceDescription: evidenceLabels[evidenceByKeyword[draft.keyword] ?? "community"].description,
    indexable: !noindexKeywords.has(draft.keyword),
    lastChecked: researchSnapshot.date,
  };
}

const drafts: KeywordDraft[] = [
  {
    keyword: "Sovereign Tower guide", category: "guide",
    answer: "The reliable starting point for a Sovereign Tower guide is the Round Table loop: receive visitors, handle kingdom matters, manage Knights, and dispatch them on quests. Official pages describe a single-player, story-driven Round Table management RPG. The public sources do not provide one complete, officially confirmed walkthrough with every answer.",
    confirmed: "The official game page and Steam listing agree that you recruit Knights, assign quests, balance relationships, expand the Tower and use time rewind to explore different outcomes. The official store currently lists Strength, Agility, Charisma, Magic and Wit. Some secondary release material references Luck, so the site records a source conflict instead of presenting a universal sixth-stat table.",
    workflow: "Use a guide page to understand systems before copying a route. Compare the task request with Knight stats, traits, equipment and preferences, then record the relationship or story result that follows. A current community guide documents 312 quests and a separate set of stat-based Unexpected Outcomes, but the guide is marked removed or incompatible and remains a lookup lead rather than an answer key.",
    context: "The launch trailer supports the same broad picture: Round Table Knights, quest dispatch and the ability to change a fate are core selling points. Patch 1.0.8 changed the quest scoring baseline, reducing insufficient-attribute penalties, increasing above-threshold bonuses and adjusting Dragon Knight difficulty. This makes every exact threshold version-sensitive.",
    pending: "No reliable public source confirms every quest threshold, every hidden trait, or every special result after the 1.0.8 scoring change. Twelve community-documented stat checks are useful leads, but their formula and compatibility with 1.0.8 need rechecking. The complete recruitment, evolution, romance and ending conditions are also not fully documented.",
    revisit: "The safest way to use the available material is to separate confirmed systems from community observations. Keep the game version with any minimum stat or route note, especially when it comes from the Reddit index. The site will treat uncertain answers as leads for testing rather than established facts.",
    sourceSummary: "This page combines the official Steam and Wild Wits descriptions with PC Gamer context and the Raider King task index. The official sources establish the game loop, while the community source supplies search leads for quest-level detail. The evidence does not justify inventing a universal answer sheet.",
    sources: [source("Steam store page", sourceUrls.steam), source("Wild Wits official game page", sourceUrls.wildWits), source("PC Gamer time-rewind coverage", sourceUrls.pcGamerTime), source("Raider King quest index", sourceUrls.raiderQuests)],
  },
  {
    keyword: "Sovereign Tower walkthrough", category: "guide",
    answer: "A complete, officially confirmed Sovereign Tower walkthrough is not available in the researched sources. The strongest current route is to use the official Act structure and the community quest index as separate layers. Act 0 is identified as a prequel, Act 1 includes Groveshire and Gavault, and the exact choice-by-choice answers remain 待确认.",
    confirmed: "The Steam Demo and official announcements confirm a Round Table, Knight dispatch, Demon time rewind and Tower expansion as part of the playable structure. Formal-release coverage also confirms Main Quests, random Emergency Quests, task deadlines and routes that can be delayed or ignored. Patch 1.0.8 changed quest scoring, so older minimum values need rechecking.",
    workflow: "For a safe walkthrough, begin by noting the act and location rather than assuming a universal order. Match the quest with a Knight, check visible attributes and traits, then save the result of the choice as an observation. Use the community index for discovery, not as an unconditional answer key.",
    context: "A walkthrough should be organized around Act 0, Act 1 main routes, optional or Emergency Quests, Act 2, Act 3 and time-rewind variations rather than a single fixed mission order. Groveshire and Gavault are named in the public material, while exact route coverage remains build-sensitive. This structure matches the game's branching design.",
    pending: "The complete order of quests, fixed success thresholds, optimal Knight assignments and every branch outcome are 待确认. The public sources also do not establish a single best ending route. Avoid presenting a community file-derived table as official until the current release is checked.",
    revisit: "When adding new walkthrough steps, record whether the evidence is official, a community report or an in-game test. Keep minimum values tied to a version because the research notes explicitly warn that some data may change. If two sources disagree, preserve the conflict and label the result 待确认.",
    sourceSummary: "The official Demo and announcement pages establish the broad Act and system structure. PC Gamer supplies a non-answer-key view of the gameplay loop, while Raider King supplies the most detailed public task index. Those sources complement each other but do not create an officially verified walkthrough.",
    sources: [source("Steam Demo", sourceUrls.demo), source("Steam announcements", sourceUrls.steamCommunity), source("PC Gamer gameplay coverage", sourceUrls.pcGamerDispatch), source("Raider King all quests guide", sourceUrls.raiderQuests)],
  },
  {
    keyword: "Sovereign Tower wiki", category: "guide",
    answer: "The researched materials did not find a stable, complete official Sovereign Tower wiki. Players can use Steam Community Guides for discussion and the Raider King indexes for Knight and quest lookup. Those sources are useful references, but they do not replace an official database and some entries remain 待确认.",
    confirmed: "The official Steam page and Wild Wits site provide the game description, platform information, systems and announcements. A current community roster lead supports 23 independent Knight identities; The Wolf becomes Rufus after the curse is lifted, so counting both forms produces 24 roster entries. The guide is still in progress and contains route details that need testing. Tower staff such as Arlin, Alwena, Carina, Rowan and Belladonna are also described in official material.",
    workflow: "A useful wiki page should separate an official game fact from a player-tested observation. Use Steam and Wild Wits for the stable overview, then cite the relevant Steam Guide or Raider King entry when the page discusses a quest or character detail. Keep any route condition or exact table value marked 待确认 until it is verified in-game.",
    context: "This gap is itself important for the search query. It explains why players see several scattered sources rather than one authoritative answer. A new fan wiki can organize those sources without claiming to be affiliated with WILD WITS GAMES or Curve Games.",
    pending: "The researched sources do not confirm an official complete roster, every quest, all romance routes or every ending condition in one place. The community roster is still marked in progress, and hidden traits, stats, romance and death conditions lack a complete official table. Treat 23 independent identities, or 24 entries when The Wolf and Rufus are shown separately, as a current community snapshot rather than a guaranteed database.",
    revisit: "When a later page adds a community-derived fact, label the source type and collection date. If the official pages later publish a database, it should take priority over older community notes. Until then, “no complete official wiki found” is the accurate answer rather than a reason to fill gaps with guesses.",
    sourceSummary: "The absence of a complete official wiki is based on checking the Steam Guides area, the official Steam listing and the Wild Wits site. Raider King provides the most useful secondary indexes but explicitly contains material still being tested. This page keeps that source boundary visible.",
    sources: [source("Steam Community Guides", sourceUrls.steamGuides), source("Raider King Knight index", sourceUrls.raiderKnights), source("Steam store page", sourceUrls.steam), source("Wild Wits official site", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower wit guide", category: "guide",
    answer: "Wit is one of the task attributes used when dispatching Knights in Sovereign Tower. A Wit guide should compare the quest requirement with the Knight's current Wit, then check equipment, hidden traits and preferences. The public sources do not provide an official table of every Wit threshold, so exact numbers are 待确认.",
    confirmed: "Wit is one of the five Knight stats listed by the official Steam store. Some community task material also uses Luck, but the official listing does not resolve that discrepancy. Community rows such as Suspects Interrogations, Diplomatic Meeting, Slugs Invasion and False Bank are versioned leads, not official 1.0.8 guarantees.",
    workflow: "Before dispatching, read the task type and compare at least the visible Wit value with the roster. Then review the Knight's other modifiers and whether the quest could produce an Unexpected Outcome. Record the result and version instead of copying a threshold without context.",
    context: "The community sources are valuable because they collect minimum attributes and special outcomes in one search-friendly place. They are not an official Wit formula, and the research notes say there is no developer-confirmed list of all Wit tasks. The guide should therefore explain the decision process rather than promise a fixed percentage.",
    pending: "The remaining Wit quest thresholds, the exact weighting of equipment and hidden traits, and the full list of Wit-specific Unexpected Outcomes are 待确认. The guide is marked removed or incompatible, and 1.0.8 changed scoring, so even the three recorded Wit checks need current-build verification. Do not turn a community row into a guaranteed success formula.",
    revisit: "If you test a Wit route, note the Knight, equipment, trait, quest state and outcome together. That is the minimum context needed to tell a reproducible rule from a one-off result. Until multiple observations agree, keep the page wording cautious.",
    sourceSummary: "PC Gamer and the Raider King index support the importance of task attributes, traits and special results. The research explicitly warns that exact Wit thresholds are not officially confirmed. This page keeps the query useful without turning community data into a fabricated stat table.",
    sources: [source("PC Gamer task systems", sourceUrls.pcGamerTime), source("Steam Community stat-check guide", sourceUrls.steamUnexpectedGuide)],
  },
  {
    keyword: "Sovereign Tower characters", category: "characters",
    answer: "Sovereign Tower characters include Round Table Knights, advisers and Tower servants. Public official announcements name Brunhilda, Tarcus, Rufus, Silgur, Chester, Goberto, Ursula and Gideon, while community material adds attributes, preferences and recruitment notes. The complete character database and every route condition are 待确认.",
    confirmed: "The sources agree that characters are more than combat values: they have stats, hidden traits, preferences, relationships and personal stories. Knights can be recruited, developed, equipped and sent on quests, and their treatment can affect satisfaction. Official announcements are the strongest source for identity and broad background, while community indexes provide detail.",
    workflow: "Use the official announcements to confirm that a character exists and the community index to find questions worth testing. For each Knight page, separate public biography from recruitment conditions and route outcomes. If a name only appears in a player table, keep the condition and any numerical details marked 待确认.",
    context: "The character system connects to quests, affinity, romance and story consequences. This is why a single roster list is not enough for a useful wiki page. The public material supports a structured index, but it does not justify filling every empty field.",
    pending: "The research does not confirm one complete list of all Knights, all advisers or all Tower servants. It also does not confirm every recruitment, evolution, death or romance condition. Victoria now has a community roster entry and a reported route bug, but not a stable official profile or guaranteed recruitment.",
    revisit: "Character pages should be rechecked against official announcements and the current game build. A community report can reveal a real player question without proving a universal route. Keep the source and the “待确认” label next to any unresolved field.",
    sourceSummary: "This page combines official character announcements with the Raider King Knight index. The official material supports the named cast and the broader Knight-management system. The secondary data is useful for research leads, not a substitute for complete official confirmation.",
    sources: [source("Steam character announcements", sourceUrls.steamCharacters), source("Steam Community roster guide", sourceUrls.steamRoster), source("Raider King Knight index", sourceUrls.raiderKnights)],
  },
  {
    keyword: "Sovereign Tower knights", category: "characters",
    answer: "Knights in Sovereign Tower are recruited, trained, equipped and dispatched to quests. Each Knight can have different stats, positive or negative traits, preferences and relationships, so matching is not just a matter of choosing the highest visible number. Exact recruitment, evolution and route conditions are 待确认 when the public sources do not verify them.",
    confirmed: "The Steam and PC Gamer materials describe Knights as part of the central gameplay loop. The official store lists Strength, Agility, Charisma, Magic and Wit; secondary release material also references Luck, so the sixth-stat wording remains a source conflict. Traits, equipment, preferences and satisfaction can affect results.",
    workflow: "Read a Knight as a complete profile: stats first, then traits, equipment, preferences and current relationships. Compare that profile with the quest request and the cost of a bad outcome. Keep a note of the result because the same Knight can matter differently after a story or affinity change.",
    context: "The Knight system is tied to the Round Table and to the kingdom's broader relationship systems. This is why a list of names without dispatch context is incomplete. Public sources support the system explanation but not every hidden formula.",
    pending: "The full Knight roster, all stat values, hidden traits, recruitment triggers, evolution paths and romance outcomes are not fully verified in the collected material. The community roster is marked in progress, and Luck remains a store-copy conflict rather than a fully documented official table. Any exact number or guaranteed route should be marked 待确认.",
    revisit: "A future Knight database should include a source label for every field. Official announcements should anchor biography, while community notes can supply questions for in-game testing. Update route conditions when the game build changes.",
    sourceSummary: "The official Steam description and PC Gamer coverage confirm the recruit-train-equip-dispatch loop. Raider King adds a practical Knight index but remains community research. Together they support the page structure without proving every roster detail.",
    sources: [source("Steam store page", sourceUrls.steam), source("PC Gamer release review", sourceUrls.pcGamerReview), source("Steam Community roster guide", sourceUrls.steamRoster), source("Raider King Knight index", sourceUrls.raiderKnights)],
  },
  {
    keyword: "Sovereign Tower Goberto", category: "characters",
    answer: "Goberto is a Knight character in Sovereign Tower and the current community roster reports him appearing on Day 2 with no recruitment requirement. The same guide reports a transformation route involving the Almor tournament final and not killing the dragon in the prior round. These are high-confidence community findings, not an official rule table, and a guaranteed survival route remains 待确认.",
    confirmed: "PC Gamer identifies Goberto as a character and the official itch.io discussion addresses his place in the finished game. The current roster guide reports Day 2 appearance, no initial recruitment requirement and a possible transformation setup. The public reply gives a development-side romance boundary: Goberto was not included among planned romance options.",
    workflow: "Use the Goberto query to understand what is known about his role and what is not. Separate the confirmed non-romance note from player questions about recruitment or survival. If the game presents a choice involving Goberto, record the build and the visible consequence rather than assuming the public summary covers every branch.",
    context: "Goberto illustrates why character pages need both biography and route status. A character can have a confirmed story decision and a confirmed romance limitation while still lacking a public step-by-step recruitment path. The researched sources support that distinction.",
    pending: "The collected sources do not verify a guaranteed Goberto survival route, every transformation requirement, or later effects. The Day 2 and Almor findings are community-tested leads, not official guarantees. No extra stats, preferences or endings should be added without a source.",
    revisit: "Check official announcements and in-game scenes before turning the public development reply into a complete character guide. Keep “not planned as romanceable” separate from “cannot be affected by relationships,” because the sources do not establish every relationship mechanic. Mark new route details by version.",
    sourceSummary: "The evidence is split between PC Gamer's character mention and an official itch.io developer reply. That is enough to identify Goberto and the public romance note, but not enough to publish a complete route table. The page therefore answers the query while keeping conditions open.",
    sources: [source("PC Gamer character coverage", sourceUrls.pcGamerDispatch), source("Steam Community roster guide", sourceUrls.steamRoster), source("Official Goberto discussion", sourceUrls.gobertoRomance)],
  },
  {
    keyword: "Sovereign Tower Victoria", category: "characters",
    answer: "Victoria appears in the current community roster as an Act III Knight candidate, but the same guide marks her recruitment route as CURRENTLY BUGGED: even after the listed quest series, she may leave the Round Table. Her character identity has therefore moved beyond an unmatched keyword, while guaranteed recruitment and route completion remain 待确认.",
    confirmed: "The current roster guide lists Victoria under Act III and reports that completing her quest series can still fail because of a route bug. A current Gideon romance discussion also references the Victoria bug. The community evidence supports her presence and the bug report, but not a guaranteed route.",
    workflow: "Use the current community roster to locate Victoria in Act III, then treat the recruitment steps as a testable route rather than a guarantee. Record the audience choice, her trials and whether she remains at the Round Table. Do not substitute an unrelated Victoria Tower result from search engines.",
    context: "Victoria now has a current community roster entry, but the same evidence reports that she may leave even after the listed recruitment route. This page preserves the useful route lead without turning a known bug into a fictional character profile or a guaranteed outcome.",
    pending: "The exact Act III quest sequence, bug trigger, fix status, stats, relationships and complete story route are 待确认. Do not publish a Guaranteed Recruitment Guide while the community source reports the route as bugged. No route outcome should be treated as universal.",
    revisit: "The keyword list itself should be checked for a possible spelling error, as the research notes recommend. If the intended name is another confirmed character, create a separate page under that formal name and keep this page as a redirect or clarification. Do not merge the two without evidence.",
    sourceSummary: "The current Steam Community roster provides the Act III identity and route lead, while the Gideon discussion provides a second report of the Victoria bug. The official announcement archive does not yet supply a complete formal profile. This is a community-tested but unstable character page.",
    sources: [source("Steam Community roster guide", sourceUrls.steamRoster), source("Steam Community Gideon discussion", sourceUrls.steamCommunity), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower Brunhilda", category: "characters",
    answer: "Brunhilda is a former princess of Gavault and a Knight character in Sovereign Tower. The current community route follows the Gavault storyline, supports Brunhilda against Mathilda, progresses the political route and then invites her to the Round Table; Rewind can change the timing. A community-tested stat snapshot records Strength 7, Agility 2, Charisma 6, Magic 7, Wit 3 and Luck 0, but the exact route and Affinity values remain 待确认.",
    confirmed: "The official Brunhilda and Tarcus material establishes her Gavault background, her conflict with her uncle Tarcus and her ability to fight as a Knight. The current community route reports investigating people or taverns, supporting Brunhilda against Mathilda and progressing the political route before inviting her. The same community snapshot records Strength 7, Agility 2, Charisma 6, Magic 7, Wit 3 and Luck 0, plus Likes Audacious and Dislikes Wise. These route and stat details are community-tested, not official.",
    workflow: "Use the official background as the stable character answer, then treat recruitment or route steps as a separate research layer. If a guide claims Brunhilda can be brought to the Tower, cite the community source and label the conditions 待确认. Do not turn the family conflict into a fixed choice answer without an in-game check.",
    context: "Brunhilda's page belongs at the intersection of characters, story choices and Knight management. Her story context explains why a simple stat table would miss important information. The source material supports the identity and background, not every future branch.",
    pending: "The exact recruitment sequence, survival conditions, Affinity changes, romance route and all Brunhilda-specific quest outcomes are 待确认. The listed stats and preferences are a community snapshot, not an official data table. Any route based only on a community guide should be identified as such and rechecked after patches.",
    revisit: "Recheck the current build before publishing a step-by-step Brunhilda guide. Keep the formal name “Brunhilda” and distinguish it from Tarcus, whose relationship is part of the public background. New details should be tied to official announcements or reproducible game observations.",
    sourceSummary: "The page combines an official Steam character announcement with the Raider King Knight index. The official source carries the biography and family context; the community source is used only for the possible recruitment lead. The boundary between those evidence levels remains visible.",
    sources: [source("Steam Brunhilda and Tarcus", sourceUrls.steamBrunhilda), source("Steam Community roster guide", sourceUrls.steamRoster)],
  },
  {
    keyword: "Sovereign Tower Angelica", category: "characters",
    answer: "Angelica is the opening Knight in Sovereign Tower. The formal-release review reports that she likes animals, has an attribute that can change some animal quest outcomes, and has Diplomacy as a preference affecting Knight satisfaction. Her personal route remains difficult to reproduce in 1.0.8, so the complete Path of the Pure conditions are 待确认.",
    confirmed: "PC Gamer's formal-release review confirms Angelica as an opening Knight, her animal preference, an animal-related attribute and Diplomacy as a preference connected to satisfaction. The Goose example remains a concrete community Unexpected Outcome report rather than a universal route. Current players still report difficulty reproducing her Path of the Pure.",
    workflow: "When investigating Angelica, start with the quest and the exact dispatch choice. Record her visible stats, relevant traits and the game state before checking whether the special result appears. Treat the community report as a testable lead and not as a guaranteed outcome for every build.",
    context: "Angelica is useful for explaining how character pages connect to Unexpected Outcomes. A Knight's identity can matter because a quest may respond to a specific person rather than only to a number. The public source does not reveal the entire condition tree.",
    pending: "The complete Angelica recruitment condition, all stats, all preferences, romance status and every special result are 待确认. The exact Goose trigger may depend on a relationship or unlocked state that the public summary does not list. Do not expand one reported scene into a full route table.",
    revisit: "Re-test the Goose example in the current build and cite the result with the quest name and dispatching Knight. Keep the source date because the community index warns that parts of the data are still being tested. Any new confirmed condition should be separated from the original player report.",
    sourceSummary: "The Angelica page is based on the Steam community Unexpected Outcome discussion and the Raider King Knight index. Those sources agree on the existence of the character and the reported example, but they do not independently verify every trigger. The page therefore labels the route boundary clearly.",
    sources: [source("PC Gamer release review", sourceUrls.pcGamerReview), source("Steam Unexpected Outcomes discussion", sourceUrls.steamUnexpected), source("Raider King Knight index", sourceUrls.raiderKnights)],
  },
  {
    keyword: "Sovereign Tower Gideon", category: "characters",
    answer: "Gideon is an officially introduced Round Table Knight and the current community roster places his recruitment in Act II with no initial requirement. The route guide reports that relevant knowledge gained through a rewind can make him recruitable from the map. His Romance route remains difficult to reproduce in the current release, especially alongside the reported Victoria bug.",
    confirmed: "The official Ursula and Gideon announcement establishes Gideon's place among the Knights. The current roster guide reports Act II recruitment with no initial requirement after acquiring relevant knowledge through rewind. Player discussions still report inconsistent Romance progress involving Victoria, duels, previous relationships and NG+.",
    workflow: "Use the official announcement for the character identity, then separate the profile fields from route claims. When a guide discusses Gideon's death, romance or a quest assignment, include the exact source and current build. Do not imply that a player report proves the route is mandatory or avoidable.",
    context: "Gideon connects several search intents: characters, Knight stats, romance and death. A single page can answer the identity query while linking the unresolved route questions to separate pages. This is more accurate than collapsing every community discussion into one definitive biography.",
    pending: "The complete Gideon stat block, recruitment path, romance conditions, death trigger and avoidable-death route are 待确认 in the supplied material. The sources do not establish a universal outcome. No extra character values should be added from an unverified table.",
    revisit: "Keep Gideon's official announcement as the stable anchor. Recheck any later story or romance detail against an official update or multiple independent in-game tests. If the result is still only a community report, label it as a lead rather than a confirmed mechanic.",
    sourceSummary: "This page integrates the official Gideon announcement with the Raider King index and the questions recorded in community discussion. Official identity is separated from unverified route conditions. The page is intentionally useful without pretending the public data is complete.",
    sources: [source("Official Ursula and Gideon announcement", sourceUrls.steamGideon), source("Steam Community roster guide", sourceUrls.steamRoster), source("Steam Community Gideon discussion", sourceUrls.steamCommunity)],
  },
  {
    keyword: "Sovereign Tower how to get Chester", category: "characters",
    answer: "The current community route for getting Chester is: send Angelica on Chester's first quest; on the second quest match the egg description to Gwendan, a Knight with a Mount, or a Knight with Cheese; complete the quest; then do not click “You're Welcome” in the dialogue. This is a current community-tested route, not an official guarantee.",
    confirmed: "The official Chester and Goose announcement establishes the event and its choice framing. The current roster guide supplies the more specific Angelica, egg-description and dialogue steps, while RPGamer independently identifies Goose eviction as a Demo task type. The route remains community evidence rather than an official rulebook.",
    workflow: "Treat the Chester query as a branch investigation, not a simple code. Record whether the player supports Chester or Goose, which act or Demo state is active, and what result follows. If a community route claims a guaranteed recruitment, keep it labelled 待确认 until the full release is tested.",
    context: "Chester is a good example of how a character question can be a choice question. The event shows Knight identity, task matching and branch outcomes working together. The public materials confirm the setup but leave the complete route open.",
    pending: "Whether the community steps work in every 1.0.8 state, whether other Knights can substitute, and the later relationship or story effects are 待确认. Do not call the route guaranteed until it is reproduced across current builds. No reward or hidden flag should be invented.",
    revisit: "When the route is tested, cite the choice and the current release state rather than only the character name. Keep the official event summary distinct from player-derived steps. A future official announcement should supersede a community route if the two disagree.",
    sourceSummary: "The evidence combines the official Steam Chester/Goose announcement with RPGamer's independent Demo coverage. It confirms the event and its choice shape, but not the full recruitment outcome. The page answers the search question honestly by stopping at the evidence boundary.",
    sources: [source("Steam Chester and Goose announcement", sourceUrls.steamGoose), source("Steam Community roster guide", sourceUrls.steamRoster), source("RPGamer extended Demo report", sourceUrls.rpgamerDemo)],
  },
  {
    keyword: "Sovereign Tower Silgur", category: "characters",
    answer: "Silgur is a Knight candidate from Groveshire and a hunter known for tracking and hunting large monsters. The current community recruitment lead is to choose to kill the beast and not send Angelica. His transformation route is not confirmed; the guide author explicitly says they have not tested the Dragon Heart theory.",
    confirmed: "The official Silgur announcement and a third-party mirror agree on his Groveshire origin, hunting background and place among the Round Table candidates. His bow and hunting ability are part of the published character description. The evidence supports the biography, not a complete stat or progression table.",
    workflow: "Use Silgur's official background when introducing the character. For a build or quest page, cite any community stat or preference information separately and label unverified fields. The safest Knight recommendation is to match the tested quest requirements rather than assume the biography proves a numerical advantage.",
    context: "Silgur's page is a character reference, not a full recruitment walkthrough. The public material focuses on his identity and history, so the page should not fill the missing route with guesses. His connection to Groveshire can be used as a story context only.",
    pending: "The exact recruitment trigger after the community choice, attribute values, preferences, relationship effects, evolution and special outcomes are 待确认. Do not write Dragon Heart → Silgur Evolution as fact. The guide author labels that transformation as untested speculation.",
    revisit: "Preserve the official spelling “Silgur” and the Groveshire context. Check future Steam announcements for new character details and compare any community table against the current build. Keep the biography stable while route-specific fields remain open.",
    sourceSummary: "The strongest evidence is the official Steam announcement, cross-checked by the listed third-party announcement mirror. Both sources support the same background. The page intentionally leaves numerical and route data unresolved because the supplied material does not confirm it.",
    sources: [source("Official Rufus and Silgur announcement", "https://steamcommunity.com/games/4113940/announcements/detail/525372985502077712"), source("Steam Community roster guide", sourceUrls.steamRoster)],
  },
  {
    keyword: "Sovereign Tower Taric", category: "characters",
    answer: "The formal character name is Tarcus, not Taric. “Taric” is a common misspelling or keyword variant, so the page should keep the Taric URL for search coverage but use Tarcus in the H1 and factual copy. Official material identifies Tarcus as Brunhilda's uncle and a veteran of the Tarascus War.",
    confirmed: "The official material uses the spelling “Sir Tarcus,” not “Taric.” The same material connects him to Brunhilda through Gavault's family and political conflict. This is enough to redirect research toward Tarcus without pretending that the keyword itself is a separate character.",
    workflow: "If a player searches Taric, answer the spelling issue first and link to the formal Tarcus name. Use the official Tarcus and Brunhilda announcement for biography. Do not create a second character profile or assign Taric separate stats, romance or recruitment conditions.",
    context: "This page is a keyword clarification rather than a conventional character guide. Search demand can still be served by explaining the likely match and preserving the exact formal name used by the source. It prevents unrelated search results from becoming fake game lore.",
    pending: "Only the relationship between the search spelling Taric and the formal name Tarcus remains a naming clarification. The public material does not establish a separate Taric role, route or stat block. Any separate Taric profile would be speculation.",
    revisit: "Check future official localization or character announcements for a name change. Until then, keep the keyword page indexed but point factual content to Tarcus. If a formal source later uses Taric, update the relationship between the two names rather than silently rewriting the record.",
    sourceSummary: "The page is based on official Steam character material and the official announcement archive. Both use Tarcus, which makes the spelling correction more reliable than the keyword itself. The unresolved part is only whether Taric has another source-backed identity.",
    sources: [source("Official Brunhilda and Tarcus material", sourceUrls.steamBrunhilda), source("Steam announcement archive", sourceUrls.steamCommunity)],
  },
  {
    keyword: "Sovereign Tower romance", category: "romance",
    answer: "Romance is a confirmed Sovereign Tower feature: the Steam store advertises romance and forbidden romances, and the official material mentions the Lady of the Tower as a romance possibility. Current community guides document routes for Angelica, Gwendan, Brunhilda, Gideon, Oliver and Ursula, while an official developer reply says Goberto was not planned as a romance option. The complete roster, thresholds and endings are still not confirmed.",
    confirmed: "The official Steam listing and PC Gamer's formal-release coverage support romance as a real feature rather than a search rumor. Six current community routes are documented for Angelica, Gwendan, Brunhilda, Gideon, Oliver and Ursula; this is a documented route list, not proof that there are exactly six options. The official Goberto discussion provides a separate non-romance boundary. These facts do not prove that every Knight has a full romance route.",
    workflow: "Use a romance guide to track confirmed relationship signals and separate them from route speculation. When a page names a romanceable character, require an official statement or a reproducible in-game result. Do not turn one flirtation scene or a community label into a universal ending claim.",
    context: "Romance is tied to the game's management and branching story design rather than presented as an isolated menu. That makes affinity, Knight treatment and timeline changes relevant context. The public sources support the theme and feature, while the route database remains incomplete.",
    pending: "The full romance roster, gender requirements, relationship thresholds, ending list and any route-locking choices are 待确认. The six documented routes are community guides, not a complete official list, and Goberto's non-romance note does not define every other Knight's status. Avoid inventing a route or a numerical affinity threshold.",
    revisit: "Record the exact scene, Knight pairing, game state and build when testing romance. Keep the public Demo description separate from full-release assumptions. Update the page only when the condition has official support or clear in-game evidence.",
    sourceSummary: "The romance conclusion is cross-supported by the Steam Demo tag and PC Gamer's hands-on description. Neither source publishes a complete route chart. The page keeps romance as a confirmed feature while marking the missing route data.",
    sources: [source("Steam store page", sourceUrls.steam), source("PC Gamer release review", sourceUrls.pcGamerReview), source("Official Goberto discussion", sourceUrls.gobertoRomance), source("Steam Community roster guide", sourceUrls.steamRoster)],
  },
  {
    keyword: "Sovereign Tower gender", category: "romance",
    answer: "Sovereign Tower does not offer a conventional selectable protagonist gender in the current research. The Sovereign's true identity is intentionally kept ambiguous, and neutral wording is used where possible; language-specific grammar may still show default pronouns. Romance scope and localization details remain separate questions.",
    confirmed: "A developer response states that Sovereign has no traditional male/female selection and that the character's identity is deliberately left open for player projection. This means the game does not support a confirmed gender-lock table for romance routes. Different language grammar or a player-reported pronoun does not establish a fixed internal gender.",
    workflow: "Answer the gender query by separating what players asked from what the developer confirmed. Link the discussion as evidence of demand, not as a feature specification. Until the game or official documentation gives a clear answer, keep the page wording open.",
    context: "Gender and romance are connected, but one does not prove the other. A player report about narration cannot establish all available protagonist options or relationship combinations. The page therefore avoids translating community questions into game settings.",
    pending: "The exact pronoun behavior in every localization, the full romance roster and the complete relationship scope remain 待确认. The research does not establish gender-based route locks. Do not infer one from a language-specific line or a player report.",
    revisit: "Check official announcements, the full release and localization settings before updating this page. If the developer publishes a clear answer, it should replace the open-question wording. Until then, keep player reports attributed and separate from confirmed mechanics.",
    sourceSummary: "The material comes from a developer clarification in Steam Community and the Steam Demo listing. Together they support an intentionally ambiguous Sovereign identity, while localization-level pronouns and the complete romance scope remain open.",
    sources: [source("Developer gender clarification", "https://steamcommunity.com/app/4113940/discussions/0/806846065685003589/"), source("Steam Demo", sourceUrls.demo)],
  },
  {
    keyword: "Sovereign Tower murder", category: "story & choices",
    answer: "The murderer in Sovereign Tower is dynamic rather than one fixed character. Current formal-release player testing reports that the Knight who dislikes the Sovereign most may become the murderer, while a favored Knight or romance target may become the victim. This is high-confidence community testing, not a developer-published formula.",
    confirmed: "The official and review material confirms the Knight murder investigation and the role of relationships in the story. Current Steam Community reports add the dynamic killer/victim pattern and say that confronting the murderer can prevent that round's murder. The exact relationship formula is not official.",
    workflow: "If a murder occurs, record the affected Knight, approval and relationship context, and the choices that preceded it. After investigating, rewind to before the event and look for the new Omniscient option in Alwena's noise event. Treat “Confront the murderer” as a community-tested branch, not a universal guarantee.",
    context: "Murder is a relationship-driven story branch, not a fixed quiz with one spoiler answer. A different roster state can change the killer and victim, which explains why community answers may conflict. The page should guide investigation without hardcoding a single name.",
    pending: "The exact approval formula, all possible killers and victims, every clue order, fixed accusation answers and all avoidable outcomes are 待确认. The community report has not been turned into an official rule table. Avoid presenting one player's murderer as universal.",
    revisit: "Keep spoiler labels and version notes on any future murder guide. Separate confirmed story structure from unverified clue order. If a complete route becomes available, cross-check it with the current build before turning it into a definitive answer.",
    sourceSummary: "PC Gamer and DigitalChumps independently support the existence of murder or assassination consequences and investigation. Their coverage does not reveal a complete culprit table. This page answers the search intent without fabricating the missing spoiler solution.",
    sources: [source("PC Gamer release review", sourceUrls.pcGamerReview), source("Steam Community murder discussion", sourceUrls.steamMurder), source("DigitalChumps Demo impressions", sourceUrls.digitalChumps)],
  },
  {
    keyword: "Sovereign Tower endings", category: "story & choices",
    answer: "Sovereign Tower has alternate and special ending routes, but the collected material does not confirm a complete ending list or a single universal checklist. Community discussions strongly associate Golden Key and zero time travel with an Epicrate-related or special ending route, while other reports show that uniting every county may not be required. Treat the exact route as 待确认.",
    confirmed: "The game's branching choices and Demon rewind system make alternate outcomes part of its documented design. Current community discussions repeatedly mention Golden Key, 0 Time Travel, Gideon's origins and Gavault–Groveshire decisions around a special route. These are strong route leads, not official proof of one fixed ending formula.",
    workflow: "A safe endings page should describe route mechanics before naming outcomes. Track Golden Key sources, time travel count, Knight relationships and county choices separately, then record what the current build actually shows. Do not convert a community spoiler thread into a full ending chart without independent verification.",
    context: "Endings are connected to murder, romance, affinity, political alliances and the ethics of time rewind. The same discussion contains conflicting reports about whether all counties must be united, so a route can be strongly associated with a choice without making it a hard requirement. The supplied sources stop short of enumerating every result.",
    pending: "The total number of endings, all Golden Key acquisition methods, the exact zero-rewind requirement, Epicrate-related conditions, county requirements and character-specific ending effects are 待确认. The materials do not support a universal checklist. Avoid adding an invented ending count or route label.",
    revisit: "Keep a clear spoiler boundary and note the game version for every ending report. Use official updates and multiple independent tests when a route becomes important. Until then, a mechanism-first guide is more reliable than a fake complete list.",
    sourceSummary: "Steam Community and Reddit discussions establish that ending and secret-route questions are active. The research explicitly says no complete ending list has passed the required confirmation standard. This page preserves that uncertainty rather than hiding it.",
    sources: [source("Steam Community endings discussion", sourceUrls.steamEndings), source("PC Gamer rewind coverage", sourceUrls.pcGamerTime), source("Steam Community stat-check guide", sourceUrls.steamUnexpectedGuide)],
  },
  {
    keyword: "Sovereign Tower Gideon death", category: "story & choices",
    answer: "There is no reliable evidence that Gideon must die. Because the Act II Knight murder can dynamically choose a killer and victim, Gideon's death should be treated as a branch report rather than a fixed plot requirement. Community route notes also connect his survival and Romance progress with learning his origins and reconciling the Gavault–Groveshire conflict, but the exact Elmor task and rescue conditions remain 待确认.",
    confirmed: "The official announcement confirms Gideon's identity as a Knight. Current community route notes place his recruitment around Act II or a later Map Room opportunity, and connect a Romance event with knowledge of his origins. Murder reports still show that victims can vary with relationships, so the available evidence does not support “Gideon always dies.”",
    workflow: "Treat a Gideon death report as a spoiler and a test case. Note the task, assigned Knight, preceding choices and whether the player rewound before changing the assignment. Do not tell players that one replacement Knight always prevents the death unless the current game proves it.",
    context: "The query sits at the intersection of Knight management, story consequences and Demon rewind. It demonstrates why an apparent rescue route can erase the original timeline while preserving knowledge. The public sources support the mechanism but not every branch.",
    pending: "Mandatory death status, avoidable conditions, the exact Elmor task requirements, all replacement assignments and the complete origins/Romance route are 待确认. The material does not provide a universal save route. No extra stat threshold should be invented.",
    revisit: "Cross-check future reports against an official patch, multiple independent tests or a direct playthrough. Keep the original player report attributed and versioned. If the route remains unverified, keep the page answer at the mechanism level.",
    sourceSummary: "The page uses the official Gideon announcement for identity and the Raider King discussion for the death report. The research itself flags the route as not fully verified. The result is a transparent spoiler page, not an unsupported walkthrough.",
    sources: [source("Official Gideon announcement", sourceUrls.steamGideon), source("Steam Community murder discussion", sourceUrls.steamMurder), source("Raider King Knight death discussion", sourceUrls.raiderKnights)],
  },
  {
    keyword: "Sovereign Tower my knight was assassinated", category: "story & choices",
    answer: "If a Knight is assassinated, the current formal-release evidence suggests the killer and victim depend on Knight approval and relationships rather than a fixed cast. Investigate the event, rewind to before it, and look for the changed Alwena noise event; the “Confront the murderer” branch is reported to prevent that round's murder. The full rescue route is still 待确认.",
    confirmed: "The public material describes the murder and the Demon rewind system. Current community testing reports that the least-liked Knight may become the murderer and a favored Knight or romance target may become the victim. The report is useful for route discovery but does not document the full formula.",
    workflow: "Record which Knight was affected, the relationship state and the preceding choices. After rewinding, inspect Alwena's event and compare the available Omniscient options. Do not assume the same killer, victim or outcome will appear in another timeline.",
    context: "The player problem is not solved by a fixed save code because the game treats timeline changes as narrative choices. Dynamic relationships, investigation and rewind all matter. That is why this page should describe the current branch logic instead of promising a universal rescue sequence.",
    pending: "The approval formula, all possible killer/victim combinations, rescue conditions, number of rewind steps and permanent consequences are 待确认. The researched sources do not verify a universal “save every Knight” path. Do not invent a fixed timeline order.",
    revisit: "Keep the page spoiler-safe and ask readers to record their branch. Add a route only when the same result appears under a documented build or when an official source confirms it. Otherwise use the page as a decision framework, not as a guaranteed rescue guide.",
    sourceSummary: "PC Gamer and DigitalChumps both support the assassination consequence and the role of rewind. Neither gives a complete step list. The page filters those sources into a safe response and marks all specific rescue details 待确认.",
    sources: [source("PC Gamer release review", sourceUrls.pcGamerReview), source("Steam Community murder discussion", sourceUrls.steamMurder), source("DigitalChumps Demo impressions", sourceUrls.digitalChumps)],
  },
  {
    keyword: "Sovereign Tower will there be consequences using demon powers", category: "story & choices",
    answer: "Yes, the collected sources support consequences when using the Demon to rewind time, but they do not establish a fixed penalty for a specific number of uses. The official description says knowledge can carry into a new route, while PC Gamer notes that the original timeline and its good results may be lost. Any exact punishment is 待确认.",
    confirmed: "The Demon can send the player back to the past while preserving what the player has learned. This can open new dialogue, paths and characters, but the action also changes or removes the original timeline. The consequence is therefore narrative and ethical even where no fixed numeric penalty is confirmed.",
    workflow: "Use rewind when you understand which earlier decision you are changing and what you are willing to lose. Compare the new branch with the original outcome instead of assuming the system preserves everything. Record the knowledge, choice and result because the public sources do not provide a complete consequence table.",
    context: "The mechanic is different from a normal save reload because the story treats the discarded timeline as part of the cost. This is why the same power can unlock a better route and still remove a previous good result. The official and review material agree on that tension.",
    pending: "The exact number of safe rewinds, fixed penalties, Demon approval rules and every lost outcome are 待确认. No collected source supports a universal threshold such as a penalty after a certain number of uses. Avoid inventing one.",
    revisit: "When new data is tested, describe the original timeline and the replacement timeline side by side. Keep exact counts and conditions versioned. If the developer publishes a formal rule, replace the open question with that statement.",
    sourceSummary: "The official Steam announcement supports the knowledge-preserving rewind, while PC Gamer explains the possible loss of the original timeline. The two sources establish consequences without a fixed numeric punishment. This page keeps that distinction explicit.",
    sources: [source("Official Demon feature notes", sourceUrls.steamCommunity), source("PC Gamer time-rewind coverage", sourceUrls.pcGamerTime)],
  },
  {
    keyword: "Sovereign Tower unexpected outcomes", category: "story & choices",
    answer: "Unexpected Outcomes are unique quest results tied to a particular Knight, quest relationship or unlocked state rather than ordinary success or failure. A public example records sending Angelica to the Goose quest and receiving a special conversation or result. A current community index claims to document 312 quests, but the complete Outcome list and trigger conditions remain 待确认.",
    confirmed: "The supplied material describes Unexpected Outcomes as a real part of quest resolution and links them to specific characters or states. The current community guide claims to organize 312 quests and separately lists Knight-specific, high/low-stat and item-related outcomes; it does not establish 312 Unexpected Outcomes, and its compatibility status requires caution. The Angelica and Goose example is evidence of a special result, not a complete formula.",
    workflow: "When testing an Unexpected Outcome, keep the Knight, task, visible choice and unlocked state together. Repeat the test in the same build before calling a trigger reliable. Use the public index to discover possible cases, then mark any threshold or hidden condition 待确认 until verified.",
    context: "These outcomes are important because they make character matching part of the story rather than only a stat check. They also connect to affinity, romance and time-rewind questions. A useful page should explain the mechanism and show the verified example without overclaiming.",
    pending: "The full 312-quest breakdown, exact trigger states, all special conversations and the difference between a branch and an Unexpected Outcome are 待确认. The guide is marked removed or incompatible, and 1.0.8 changed quest scoring. Treat its entries as versioned research leads rather than a complete official list.",
    revisit: "Preserve the public source's warning about testing and version drift. Add a verified outcome only with a reproducible setup or official confirmation. Keep the “special result exists” claim separate from the exact condition.",
    sourceSummary: "The Steam community example and the Raider King index provide the strongest available evidence. They agree that character-specific special results exist, while the exact table is still provisional. This page filters the useful fact from the unverified completeness claim.",
    sources: [source("Steam Angelica and Goose discussion", sourceUrls.steamUnexpected), source("Steam Community stat-check guide", sourceUrls.steamUnexpectedGuide), source("Raider King quest index", sourceUrls.raiderQuests)],
  },
  {
    keyword: "Sovereign Tower how many acts", category: "story & choices",
    answer: "The public material confirms Act 0, Act 1, Act 2 and Act 3 as chapter labels. Act 0 is the Prologue, while official Demo and patch material reference the later acts. This confirms the visible Act 0–3 structure, but it does not prove a final official total with no hidden interlude.",
    confirmed: "The Demo is described as including Act 0 as a prequel and Act 1 with Groveshire and Gavault content. Patch 1.0.8 material references items acquired in Acts 2 and 3. These references establish the four visible chapter labels without proving that no later content exists.",
    workflow: "Organize a walkthrough around Act 0, Act 1, Act 2 and Act 3, then keep optional, Emergency and time-rewind branches underneath the relevant act. Do not infer a hidden chapter or deny one without a source. Use the act label named by the current build for each quest or item.",
    context: "This answers the search intent with an evidence boundary: Act 0–3 are confirmed references, while “exactly four acts” is not an explicit developer statement. That distinction matters when players plan a full route. A later patch could clarify the chapter structure.",
    pending: "The definitive full Act count, exact Act boundaries, release-wide quest distribution and any hidden interlude are 待确认. Do not turn Act 0–3 coverage into a claim that there are exactly four Acts plus no other sections.",
    revisit: "Check official release notes or the current game build when adding a final Act table. Keep the date of the source because the public material spans Demo and release updates. Update the answer if the developer publishes an explicit total.",
    sourceSummary: "The answer combines the official Demo/launch announcement with official update references to Acts 2 and 3. The evidence supports “Act 0–3 are publicly referenced,” not a final count. The page uses that exact distinction.",
    sources: [source("Steam Demo and launch announcements", sourceUrls.steamCommunity), source("Steam update page", "https://steamcommunity.com/app/4113940")],
  },
  {
    keyword: "Sovereign Tower who to accuse", category: "story & choices",
    answer: "The collected sources do not provide a fixed, independently confirmed answer to “who to accuse” in Sovereign Tower. The question belongs to a murder investigation in which the player gathers secrets and evidence before making a choice. Alwena's information-gathering role and PC Gamer's investigation description are confirmed, but the culprit answer is 待确认.",
    confirmed: "The public material says that players investigate a Knight murder and that Alwena collects private information about Knights. This supports an investigation workflow rather than a published quiz answer. No supplied official source names a universal accusation target.",
    workflow: "When the accusation scene appears, record the clues, the Knight relationships and the story state before selecting a target. Use advisers and investigation evidence rather than a spoiler list copied from an unverified post. If a community answer exists, label it as a report and check it in the current build.",
    context: "The question is intentionally branch-sensitive because the game links secrets, relationships and consequences. A fixed answer without context could be wrong for another timeline. The correct page behavior is to explain how the investigation is framed and where the public evidence stops.",
    pending: "The culprit identity, complete clue order, accusation options and consequences of each choice are 待确认. The collected material does not meet the standard for a universal answer. Do not invent an accusation target to satisfy the query.",
    revisit: "Keep this page spoiler-aware and update only from an official source or repeatable current-build tests. If a target becomes confirmed, cite the relevant evidence and state whether the result changes by route. Preserve unresolved branches instead of collapsing them.",
    sourceSummary: "PC Gamer supports the murder investigation context, while the official announcement supports Alwena's role in gathering Knight secrets. Neither source publishes the final accusation answer. The page therefore answers the search problem honestly and leaves the target 待确认.",
    sources: [source("PC Gamer investigation coverage", sourceUrls.pcGamerTime), source("Official Alwena announcement", sourceUrls.steamCommunity)],
  },
  {
    keyword: "Sovereign Tower Goose", category: "story & choices",
    answer: "Goose is a “war goose” occupying the public baths, and the player must choose between supporting Chester or Goose. The official announcement and RPGamer both present the event as a quest that demonstrates Knight matching, special results and branch choices. Exact later consequences are 待确认.",
    confirmed: "The event is part of the Demo material and centers on a choice between the clown Knight candidate Chester and Goose. Angelica is also linked to a reported special result when dispatched to the quest. The sources establish the setup and the existence of a branch, not every outcome.",
    workflow: "Read Goose as a choice experiment rather than a simple enemy encounter. Note who is dispatched, whether the player supports Chester or Goose, and whether any special dialogue appears. Do not claim that one side is always optimal without a current-build test.",
    context: "The Goose quest shows how the game combines humor, Knight identity and political or story consequences. It is also a useful example for the Unexpected Outcomes page. The public sources keep the event concrete while leaving later route details open.",
    pending: "The exact recruitment outcome for Chester, all Angelica trigger conditions, later faction effects and any ending impact are 待确认. No supplied source provides a complete Goose decision tree. Avoid adding a fixed answer or a fabricated reward.",
    revisit: "When testing the event, keep the act, Knight and visible choice in the note. Compare the official event description with the result in the current version. Update the page only when an outcome is repeatable or officially documented.",
    sourceSummary: "The official Steam Chester/Goose announcement is cross-checked by RPGamer's Demo coverage, with the Angelica special-result report from Steam Community. The event itself is well supported; the full consequence table is not. This page keeps those evidence levels distinct.",
    sources: [source("Steam Chester and Goose announcement", sourceUrls.steamGoose), source("RPGamer extended Demo report", sourceUrls.rpgamerDemo), source("Steam Unexpected Outcomes discussion", sourceUrls.steamUnexpected)],
  },
  {
    keyword: "Sovereign Tower Steam", category: "platforms & availability",
    answer: "Sovereign Tower is currently listed on Steam for Windows and SteamOS/Linux. The current Steam snapshot shows Very Positive with 90% positive ratings from 1,153 user reviews; that number is dynamic. Mac, PS5 and Switch support should be checked separately because the collected sources do not provide one consistent platform statement.",
    confirmed: "The official Steam store lists Windows and SteamOS + Linux, six supported interface/subtitle languages and 75 achievements. Steam's live snapshot shows 90% positive from 1,153 reviews on August 12, 2026. A separate SteamDB report mentions Steam Deck Verified, but the live store remains the purchase source of truth.",
    workflow: "Use the Steam page for the current store button, system requirements, price and language display. Use the Wild Wits page for official developer context and the community hub for announcements. Do not copy a regional price or platform statement without checking the target storefront.",
    context: "The Steam query is both an availability and a source-of-truth page. It should lead players to the official store instead of third-party downloads. Platform questions such as Mac, PS5 and Switch need separate pages because the evidence differs by platform.",
    pending: "The current regional price, future ports and any platform changes remain time-sensitive. The official Wild Wits page conflicts with Steam on macOS, but the developer response and current Steam listing do not support native Mac. PS5, Xbox, Switch and Switch 2 remain unannounced.",
    revisit: "Recheck Steam before publishing any dynamic value. Keep the release date and developer/publisher data separate from live store details. If the official store changes its platform list, update the platform answer first.",
    sourceSummary: "Steam and GameFAQs provide the strongest platform cross-check, while Wild Wits supplies official context. The page uses Steam as the action link and does not infer other platforms from unrelated listings. Dynamic store values remain subject to recheck.",
    sources: [source("Steam store page", sourceUrls.steam), source("SteamDB app stats", sourceUrls.steamDB), source("GameFAQs PC data", sourceUrls.gameFAQs), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower release date", category: "platforms & availability",
    answer: "The full release launched on August 6, 2026. The official Steam store and release announcement use that date; Demo dates and future platform launches are separate questions.",
    confirmed: "The date appears consistently across the official Steam release material and the independent PC release record. The game is developed by WILD WITS GAMES and published by Curve Games. The collected homepage research also identifies the same launch date for the site data.",
    workflow: "Use August 6, 2026 for the full-release answer and link to Steam for current availability. Keep Demo content and release announcements separate so readers do not confuse an earlier playable build with the commercial launch. If the store changes regional display, the date itself remains tied to the cited release announcement.",
    context: "Release date pages are time-stable compared with price or review totals, but they still need a source. The official announcement is preferable to a search snippet. This page does not infer an early-access date, console release or Mac launch from the same date.",
    pending: "Future platform release dates remain 待确认. The exact time conversion should be presented as a SteamDB release snapshot, not as a publisher promise for every storefront. No PS5 or Switch date is confirmed.",
    revisit: "Keep the date in an absolute format and cite the announcement. Recheck the store for current availability, but do not rewrite the launch date based on a regional countdown. Add future release dates only after the publisher confirms them.",
    sourceSummary: "The answer is cross-checked across Steam's official release material, the Steam store listing and GameFAQs. These sources agree on August 6, 2026. The page deliberately excludes unsupported local times and port dates.",
    sources: [source("Steam release announcement", sourceUrls.steamCommunity), source("SteamDB app stats", sourceUrls.steamDB), source("Steam store page", sourceUrls.steam)],
  },
  {
    keyword: "Sovereign Tower PS5", category: "platforms & availability",
    answer: "No PS5 version of Sovereign Tower has been officially announced as of August 12, 2026. The publisher's release material describes a PC launch, and no PlayStation Store page or port announcement appears in the supplied sources. A future PS5 release remains unannounced, not confirmed.",
    confirmed: "Curve Games and WILD WITS describe the August 6 launch as PC, while the current platform evidence covers Windows and Linux/SteamOS. The research found no PS5 store listing, cross-save statement or console feature announcement. The publisher's broader console catalogue does not prove this game will port.",
    workflow: "If you want to play on PS5, check the publisher's official announcements and PlayStation Store directly. Do not assume that PC/Steam support implies a console port. A third-party listing without official confirmation should not be treated as release information.",
    context: "Platform pages need careful negative claims because an absent listing can change later. The correct current answer is about the evidence collected on 2026-08-11, not a permanent statement that a port will never exist. Keep the date visible when publishing.",
    pending: "A PS5 release, port date, cross-save support and console-specific features remain 待确认. Do not invent a PlayStation release window or store link. Update only after a publisher, developer or PlayStation source announces it.",
    revisit: "Check the publisher, Wild Wits and PlayStation Store before updating. If a port is announced, add its official date and platform details. Until then, keep the page clear that PC is the confirmed platform.",
    sourceSummary: "The answer is based on the Wild Wits platform listing and GameFAQs PC information, plus the research note that no PS5 evidence was found. It does not rely on unrelated search results. The page preserves the open status for future updates.",
    sources: [source("Curve Games PC launch announcement", "https://curvegames.com/news/medieval-fantasy-rpg-sovereign-tower-decrees-a-6th-august-launch/"), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower Switch", category: "platforms & availability",
    answer: "No Nintendo Switch or Switch 2 version of Sovereign Tower has been officially announced as of August 12, 2026. The supplied release material describes a PC launch and the current official platform evidence does not list Nintendo consoles. A future port remains unannounced, not Coming Soon.",
    confirmed: "The developer's early public response is explicitly cautious rather than an announcement. The Wild Wits platform page lists Windows/macOS but not Switch. No newer official Switch or Switch 2 release announcement appears in the collected materials.",
    workflow: "Use the official game page and publisher announcements for a current platform answer. Treat the Reddit reply as historical context, not as a permanent cancellation. Do not convert the absence of a port announcement into a made-up release date.",
    context: "The Switch query demonstrates why platform evidence should be dated. The developer may change plans, but the collected snapshot only confirms PC and lists macOS on the official site. A future port needs a new official source.",
    pending: "A Switch port, Switch 2 port, release date, cartridge or performance details remain 待确认. The sources provide no commitment. Do not add store URLs or launch windows that are not in the material.",
    revisit: "Recheck official social posts and publisher announcements before changing this status. If the team later confirms a port, replace the historical “too early to promise” wording with the dated announcement. Keep the original evidence for context.",
    sourceSummary: "The page combines the developer's Reddit response with the Wild Wits platform page. Both support “not confirmed” at the collection date. No unofficial platform listing is used as proof.",
    sources: [source("Curve Games PC launch announcement", "https://curvegames.com/news/medieval-fantasy-rpg-sovereign-tower-decrees-a-6th-august-launch/"), source("Developer Reddit announcement", sourceUrls.redditSwitch), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower demo", category: "platforms & availability",
    answer: "The free Sovereign Tower Demo exists on Steam and covers Act 0 and Act 1 material with Knight dispatch, Demon rewind, romance prompts, Round Table management and Tower expansion. The official June Demo announcement describes it as the opening-hours experience. RPGamer's roughly 2–3 hour duration remains a report, not a guarantee.",
    confirmed: "The Steam Demo page confirms the free Demo and its broad systems, including Knight assignments, time rewind and Tower progression. The Demo material also lists Simplified Chinese interface and subtitles. RPGamer independently describes the extended Demo length and content scope.",
    workflow: "Use the Demo as a way to test the core loop before buying the full Steam release. Treat Act 0 and Act 1 as Demo content references, not as proof of the complete game structure. Check the current Steam page for the live download and language list.",
    context: "The Demo is useful because it exposes the same systems that the full game emphasizes: Round Table management, quest dispatch and rewind. It also gives players a safe way to understand whether the narrative management format fits them. The research does not promise that every full-release feature appears in the Demo.",
    pending: "The current exact playtime, all Demo scenes, save transfer behavior and any difference from the full release are 待确认. No official source confirms Demo save transfer to the full game. The 2–3 hour figure belongs to RPGamer's report and should not be treated as a guaranteed duration.",
    revisit: "Link directly to the official Steam Demo rather than third-party mirrors. Recheck the description after updates and keep reported duration attributed. If the Demo changes, update the system list and playtime note separately.",
    sourceSummary: "The Steam Demo page is the primary source for availability and listed systems. RPGamer provides the independent playtime context. The page keeps the official feature list and the reported duration at different confidence levels.",
    sources: [source("Steam Demo", sourceUrls.demo), source("RPGamer extended Demo report", sourceUrls.rpgamerDemo)],
  },
  {
    keyword: "Sovereign Tower download", category: "platforms & availability",
    answer: "Download the full version through the official Steam page. The official WILD WITS itch.io page currently provides a browser-playable entry and Windows build materials for the Demo or development channel, but it should not be treated as the full Steam release. Third-party free-download pages are unsafe and unsupported.",
    confirmed: "Steam is the confirmed full-release distribution channel. The developer's itch.io page is an official source for browser and Windows Demo/build materials. The supplied snapshot supports both links but does not establish version parity between itch.io and Steam.",
    workflow: "Send players to Steam for the commercial release and to the official itch.io page only for the developer's own Demo or development materials. Check the page title and publisher before downloading. Never direct readers to a third-party mirror that claims to provide a free full version.",
    context: "Download intent often attracts unsafe or outdated search results, so source filtering matters more than adding more links. The official sources cover both the full release and the earlier Demo path. They should remain separate in the page copy.",
    pending: "The current itch.io file list, browser build version, supported operating systems and parity with Steam remain 待确认. The research does not verify any third-party download. Do not claim that an itch.io file is the current full release.",
    revisit: "Recheck the Steam and official itch.io pages before publishing download instructions. Keep the exact platform and version visible. Remove any link that stops being controlled by the developer.",
    sourceSummary: "The Steam store and official itch.io page are the only distribution sources used here. The research explicitly warns against third-party free-full-version pages. The answer protects the query from invalid download claims.",
    sources: [source("Steam full release", sourceUrls.steam), source("Official itch.io page", sourceUrls.itch)],
  },
  {
    keyword: "Sovereign Tower itch.io", category: "platforms & availability",
    answer: "The official WILD WITS itch.io page currently exposes a browser-playable entry and Windows build materials, but it is not the same as the full Steam release. It remains an official Demo/development channel for the story-driven Round Table management RPG. Use it for the developer's own build context, not as proof of a complete free version.",
    confirmed: "The itch.io page and devlog belong to WILD WITS GAMES and describe Knight management, quest dispatch and time rewind. The supplied snapshot confirms a browser/Windows itch.io path and Steam as the full-release channel. The two channels should stay separate.",
    workflow: "Use itch.io for official development context, Demo history and any files the developer currently lists. Use Steam for the released game. Check the platform's current page before stating that a particular build is downloadable or browser playable.",
    context: "The itch.io result matters because it is official, not because every old file remains current. It gives the project history and early access context without replacing the Steam listing. Keeping the two channels distinct prevents a stale Demo from being mislabelled as the commercial release.",
    pending: "The exact current file inventory, browser build version, full-release availability, Mac support and version parity on itch.io are 待确认. Do not promise a Steam-equivalent full release or a permanent browser build without checking the live page.",
    revisit: "Revisit the official itch.io page when a new Demo or devlog appears. Preserve the developer attribution and the original date of any build note. Link only to the official WILD WITS account.",
    sourceSummary: "The official itch.io page and devlog provide direct developer-owned evidence, while Steam provides the full-release context. The sources support the channel's legitimacy and role, not a permanent file list. The page states that limitation explicitly.",
    sources: [source("Official WILD WITS itch.io page", sourceUrls.itch), source("Official itch.io devlog", sourceUrls.itchDevlog), source("Steam store page", sourceUrls.steam)],
  },
  {
    keyword: "Sovereign Tower Mac", category: "platforms & availability",
    answer: "Sovereign Tower does not have officially supported native Mac or Apple Silicon versions in the current release snapshot. Although the Wild Wits marketing page still lists macOS, a developer response says Mac is not officially supported and Steam lists Windows plus SteamOS/Linux. CrossOver reports are compatibility workarounds, not native support.",
    confirmed: "The developer response and current Steam platform listing outweigh the stale or conflicting marketing platform line for purchase guidance. Steam Deck is reported Verified, while Linux/SteamOS is officially listed. A single-player M5 Mac CrossOver report using a D3D12 rendering flag does not establish official compatibility.",
    workflow: "Before buying on Mac, open the current Steam store page in the relevant region and check the operating-system section. Do not infer compatibility from the Wild Wits marketing page alone. If a native Mac build becomes confirmed, cite the official system listing and date.",
    context: "Platform information can lag behind development plans, especially around launch. The official site and Steam page have different levels of specificity in the supplied snapshot. This page keeps both facts visible so readers understand why the answer is not a simple yes or no.",
    pending: "Apple Silicon native support, future Mac plans, CrossOver performance and other workarounds remain 待确认. Do not promise performance or a native build. Keep the official-site macOS line visible as a source conflict rather than a positive platform claim.",
    revisit: "Recheck the Steam client and official developer announcement before publishing an update. Keep any compatibility workaround separate from official support. Mark the page date whenever the platform status changes.",
    sourceSummary: "The page is built from the Wild Wits platform listing, Steam's current system information and an earlier developer statement. The sources conflict, so the page reports the conflict instead of fabricating certainty. Mac remains a purchase-before-check item.",
    sources: [source("Steam store page", sourceUrls.steam), source("Developer Mac support discussion", "https://steamcommunity.com/app/4113940/discussions/0/570415649309907746/"), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower cost", category: "platforms & availability",
    answer: "The current supplied Steam snapshot shows a 15% launch discount through August 20, 2026: the US base price is $19.99 and the discounted price is $16.99. China, Eurozone, UK, Japan and Korea values were also recorded, but all regional prices and taxes are dynamic. The Supporter Bundle is still sold with the game, soundtrack and digital artbook.",
    confirmed: "The launch discount, deadline and regional price examples come from the supplied Steam and SteamDB snapshots. The Supporter Bundle includes Sovereign Tower, Soundtrack and Artbook; the official announcement also mentions two Hildegard von Blingin tracks and art by Gobert. Steam remains the live source of truth.",
    workflow: "Use the Steam link to check the live price in the reader's currency and region. Present the researched values with the collection date if you need to explain the price history. Do not convert the USD figures into a local price without a current storefront check.",
    context: "Price intent is highly time-sensitive, so a static article should distinguish a recorded snapshot from a current offer. The page can answer what was collected while directing the purchase decision back to Steam. This avoids turning a launch discount into a permanent promise.",
    pending: "The price after August 20, 2026, regional tax treatment, Supporter Bundle discount status and bundle availability are 待确认 beyond the supplied snapshot. Steam says displayed VAT/GST treatment varies by region and checkout sales tax may apply in some jurisdictions. Do not invent a local price or tax percentage.",
    revisit: "Recheck the Steam store before every price update. Keep the base and discount values labelled as historical if the promotion has ended. Remove expired discounts from prominent copy rather than leaving stale purchase information.",
    sourceSummary: "Two Steam pages support the $19.99 baseline, while the official release material supports the Supporter Edition note. The research warns that price changes by region and promotion. The page therefore reports the snapshot and sends readers to the live store.",
    sources: [source("Steam store price", sourceUrls.steam), source("SteamDB regional price snapshot", sourceUrls.steamPrice), source("Steam tax FAQ", "https://help.steampowered.com/en/faqs/view/54EA-F51E-A18E-ED99"), source("Steam release announcements", sourceUrls.steamCommunity)],
  },
  {
    keyword: "Sovereign Tower forge", category: "game systems",
    answer: "Carina's Forge is a confirmed Tower Annex for crafting weapons, shields and items, improving Knight quest performance, and repairing Knight armour. Patch 1.0.8 reduced the initial and subsequent Forge repair costs. The complete recipe, upgrade and current price tables still need build verification.",
    confirmed: "The official material establishes Forge as an equipment and repair facility. Patch 1.0.8 specifically changed Forge repair costs, so earlier Demo numbers should not be copied into the current guide. Its system role is confirmed even though the full table is not.",
    workflow: "Use the Forge when planning Knight equipment and the repair needs of future dispatches. Check the current build for cost and availability rather than copying a Demo number. Treat the Forge as part of Tower progression, not as a universal early-game purchase rule.",
    context: "The Forge matters because it links Annex construction, equipment and quest preparation. The collected material does not publish a complete crafting table. That makes system explanation more reliable than a static list of costs.",
    pending: "The exact build requirement, item recipes, repair prices, upgrade values and full-release balance are 待确认 unless the current official page states them. Do not import old Demo or player-reported numbers into the release guide. Keep every cost versioned.",
    revisit: "Check official Demo or release notes for balance changes before updating Forge advice. If a player comment supplies a new repair observation, mark it as community evidence. Replace it with official values when available.",
    sourceSummary: "The Steam Demo establishes Carina's Forge as an Annex, while the official itch.io comment and update note provide repair context. The sources support the system's role but not a timeless cost table. The page keeps values open where the build may change.",
    sources: [source("Steam Demo Forge description", sourceUrls.demo), source("Steam patch/update material", sourceUrls.steamCommunity), source("Official itch.io Forge comment", sourceUrls.forge)],
  },
  {
    keyword: "Sovereign Tower sovereign mode", category: "game systems",
    answer: "Sovereign Mode is an opening choice that uses autosave and disables ordinary manual Save/Load. Mistakes are intended to be handled through Demon rewind, so the mode changes save management rather than combat or multiplayer. The full autosave timing and any special reward remain 待确认.",
    confirmed: "Multiple formal-release walkthrough sources describe Sovereign Mode as autosave-only with manual saving and loading disabled. The player is expected to use Demon rewind for major decisions, and the game remains a single-player Narrative/RPG/Visual Novel experience. The mode should not be described as a separate battle mode or late unlock.",
    workflow: "Explain Sovereign Mode as a save-management challenge before a player selects it. Link the time-rewind guide because the mode increases the importance of timeline decisions. Do not add precise autosave nodes, file-copy workarounds or rewards unless the current game UI or official documentation confirms them.",
    context: "This resolves the keyword from a terminology mix-up into a real feature, while keeping its scope narrow. The important player-facing difference is how save behavior changes the cost of decisions. It is not evidence of multiplayer, extra combat rules or a hidden reward.",
    pending: "Exact autosave timing, Alt+F4 or file-copy bypass behavior, hidden rewards, any Ending relationship and all mode-specific consequences are 待确认. One player report of no separate reward is not enough to prove that no hidden reward exists. Do not expand the mode beyond the confirmed save-playstyle distinction.",
    revisit: "Check the opening UI and future patch notes for the exact rules. Record any reward or restriction by version. If the developer publishes a formal rulebook, replace the cautious summary with the documented details.",
    sourceSummary: "The 1.0.8 research adds current formal-release evidence that Sovereign Mode is a save-playstyle choice. Official store descriptions still do not document every rule, so the page distinguishes existence from mechanics.",
    sources: [source("Steam current game discussion", sourceUrls.steamCommunity), source("Wild Wits official game page", sourceUrls.wildWits)],
  },
  {
    keyword: "Sovereign Tower cheats", category: "game systems",
    answer: "No reliable official Sovereign Tower cheats, console commands or Steam Workshop mod plan were found in the supplied material. A third-party trainer page exists, but it is not official, its safety is unverified and its version compatibility is unknown. The safe answer is that there are no reliable official cheats in the researched material.",
    confirmed: "GameFAQs provides a PC information entry but does not establish an official cheat system. The trainer result is only evidence that a third-party page exists, not that the tool is safe or works. No developer source publishes a cheat code or console command.",
    workflow: "Do not direct players to download a trainer based on a search result. Use the official game systems—Knight matching, Annexes, affinity and Demon rewind—rather than claiming an unsupported shortcut. If a developer officially documents commands later, cite that page and version.",
    context: "Cheat queries attract unsafe downloads and false code lists, so filtering is the main answer. The researched material supports a clear “no reliable official cheats found” conclusion. It does not support a list of fabricated codes.",
    pending: "The existence of hidden developer commands, official debug access, Workshop support or a future cheat system is 待确认. The research does not show one. Do not claim that the third-party trainer is functional, safe or compatible.",
    revisit: "Recheck official patch notes or developer statements if the game adds modding support. Until then, keep third-party trainer links out of player instructions. Preserve the security warning rather than replacing it with a speculative workaround.",
    sourceSummary: "The page uses GameFAQs as a general PC reference and the trainer result only to explain why it is not reliable. The absence of official cheat material is the actionable conclusion. No third-party tool is recommended.",
    sources: [source("GameFAQs PC data", sourceUrls.gameFAQs), source("Unverified third-party trainer page", sourceUrls.trainer)],
  },
  {
    keyword: "Sovereign Tower review", category: "community & reviews",
    answer: "The current Steam snapshot is Very Positive: 90% of 1,153 user reviews are positive as checked on August 12, 2026. PC Gamer's formal-release review and Steam's 87 Metacritic display are separate editorial snapshots. Coverage praises the writing, hand-drawn style, choices and time rewind, while noting that dispatch management and repeated rewinds can affect pacing.",
    confirmed: "PC Gamer's formal-release review discusses Luck, Knight preferences, murder, Act progression and time rewind. The official launch material also quotes other media scores, but those should remain attributed to their original outlets. Steam user totals are live and dynamic, so this page uses the current store snapshot rather than an older rounded figure.",
    workflow: "Use review pages to explain what the game feels like, not to turn one score into an objective verdict. Separate media scores from Steam user ratings and include their source/date. For SEO copy, summarize the shared themes and keep numerical review values time-stamped.",
    context: "The game's cozy presentation and ruthless choices are a recurring contrast in the coverage. That contrast helps readers understand the management-RPG tone before buying. It does not prove that every player will share the same pacing experience.",
    pending: "The current Steam rating, exact review count, long-term performance and regional review differences are time-sensitive. The 90% / 1,153 values are a retrieval snapshot, not permanent facts. Do not present them without a date or a live-store caveat.",
    revisit: "Recheck Steam for user-review totals and link the original media pages for quoted scores. Keep old launch scores labelled as launch coverage. If the consensus changes, update the summary rather than preserving a stale rating.",
    sourceSummary: "The review conclusion is based on PC Gamer, DigitalChumps, Steam's user-review page and the official launch announcement's media roundup. The common themes are stronger than any single score. Dynamic numbers remain date-dependent.",
    sources: [source("PC Gamer formal-release review", sourceUrls.pcGamerReview), source("DigitalChumps impressions", sourceUrls.digitalChumps), source("Steam user reviews", sourceUrls.steam), source("Official launch announcement", sourceUrls.steamCommunity)],
  },
  {
    keyword: "Sovereign Tower Reddit", category: "community & reviews",
    answer: "Reddit demand around Sovereign Tower centers on Demo and release impressions, Dragon Knight questions, character deaths, Unexpected Outcomes, endings and full quest or Knight indexes. Reddit is useful for discovering real player problems, but its route claims and file-derived numbers need official or in-game verification.",
    confirmed: "The supplied Reddit sources show active discussion around the game's systems and story consequences. The Raider King community posts are especially useful for task and Knight lookup, while r/Games captures broader release discussion. These are community evidence, not official documentation.",
    workflow: "Use Reddit to identify what players are actually stuck on, then cross-check the answer against Steam, Wild Wits or a current playthrough. Attribute route claims to the poster and retain the version context. Do not treat upvotes, a file parse or a single anecdote as proof of a universal mechanic.",
    context: "Community pages can surface search terms before official guides exist. They are valuable for question discovery and edge cases, especially around deaths, special outcomes and endings. The research notes explicitly recommend combining them with official announcements or real testing.",
    pending: "The accuracy of any individual Reddit route, full task count, hidden condition or exact stat table is 待确认 unless independently verified. Reddit discussions can also become outdated after a patch. Do not copy unverified conclusions into a definitive wiki page.",
    revisit: "Keep links to the original post and record the collection date. Recheck high-impact claims in the current build. If an official source contradicts a Reddit report, present the official information first and explain the conflict.",
    sourceSummary: "The page integrates the r/Games release discussion with Raider King's task and Knight indexes. Together they show the player questions and practical lookup demand. They do not eliminate the need for verification, so uncertain claims remain marked.",
    sources: [source("r/Games release discussion", sourceUrls.redditGames), source("Raider King quest index", sourceUrls.raiderQuests), source("Raider King Knight index", sourceUrls.raiderKnights)],
  },
  {
    keyword: "Sovereign Tower Discord invite link", category: "community & reviews",
    answer: "The official community invite recorded in the collected material is https://discord.gg/w4XVQ69Vuc. Steam or SteamDB lists it as a game social channel, and Discord Discovery identifies the corresponding Sovereign Tower server. Invite links can expire or change, so the live link should be tested before publishing.",
    confirmed: "The research cross-checks the invite through SteamDB and Discord Discovery. The server page identifies it as the official Sovereign Tower server and the supplied snapshot records 4,052 members and 1,257 online. Those counts are live community metrics and should be dated.",
    workflow: "Use the invite link as the primary community CTA and keep the Discord Discovery page as a secondary verification link. Open it in a new tab and do not ask users for private credentials. If the invite stops working, update the page from the official Steam or Discord listing.",
    context: "The Discord page is a community access answer, not a game mechanic guide. It belongs in the footer and community navigation because the server can surface current patch and player questions. The invitation itself is the only code-like string supported by the source, and it is a link rather than a game redemption code.",
    pending: "The current member count, online count, full channel structure and future invite validity are time-sensitive or 待确认. The supplied public page confirms broad tags but not every channel. Do not add another unofficial Discord link or hardcode the counts permanently.",
    revisit: "Test the invite before each site release and prefer the official SteamDB/Discord listing if the short invite changes. Keep the discovery URL for verification. Do not fabricate a replacement invite if the source is unavailable.",
    sourceSummary: "The invite is directly supplied by the research material and cross-checked through SteamDB and Discord Discovery. The page intentionally avoids volatile member numbers. It answers the query with the official link and a clear validity caveat.",
    sources: [source("SteamDB social links", sourceUrls.steamDB), source("Discord Discovery", sourceUrls.discord)],
  },
];

export const keywordPages = drafts.map(makePage);
export const keywordPageMap = Object.fromEntries(keywordPages.map((page) => [page.slug, page])) as Record<string, KeywordPage>;
