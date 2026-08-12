"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/site-data";
import { toolCopy } from "@/lib/localized-content";

const stats = ["Strength", "Agility", "Charisma", "Magic", "Wit"] as const;
const factions = ["Merchants", "Mystics", "Scholars", "Nobles", "People", "Treasury"] as const;
type FactionState = "Low" | "Neutral" | "High";

export function QuestMatcherTool({ locale = "en" }: { locale?: Locale }) {
  const t = toolCopy[locale];
  const [stat, setStat] = useState<(typeof stats)[number]>("Strength");
  const [required, setRequired] = useState("");
  const [current, setCurrent] = useState("");
  const [traits, setTraits] = useState(false);
  const [equipment, setEquipment] = useState(false);
  const result = useMemo(() => {
    const target = Number(required);
    const value = Number(current);
    if (!required || !current || !Number.isFinite(target) || !Number.isFinite(value)) return t.enterValues;
    return value >= target ? t.meetsRequirement : t.belowRequirement;
  }, [current, required, stat, t]);

  return <div className="tool-card hud-frame">
    <div className="tool-card-head"><span className="kicker">{t.questMatcher}</span><span className="tool-badge">{t.playerInput ?? "PLAYER INPUT"}</span></div>
    <p className="tool-intro">{t.matcherPageDescription}</p>
    <div className="tool-grid">
      <label>{t.requiredStat}<select value={stat} onChange={(event) => setStat(event.target.value as (typeof stats)[number])}>{stats.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label>{t.questRequirement}<input inputMode="numeric" value={required} onChange={(event) => setRequired(event.target.value.replace(/[^0-9]/g, ""))} placeholder={t.readFromGame} /></label>
      <label>{t.knightValue}<input inputMode="numeric" value={current} onChange={(event) => setCurrent(event.target.value.replace(/[^0-9]/g, ""))} placeholder={t.readFromRoster} /></label>
    </div>
    <div className="tool-checks"><label><input type="checkbox" checked={traits} onChange={(event) => setTraits(event.target.checked)} /> {t.traitsReviewed}</label><label><input type="checkbox" checked={equipment} onChange={(event) => setEquipment(event.target.checked)} /> {t.equipmentReviewed}</label></div>
    <div className={`tool-result ${required && current ? "tool-result-live" : ""}`}><span className="kicker">{t.comparison}</span><strong>{result}</strong><small>{traits && equipment ? t.traitsEquipmentReviewed : t.reviewContext}</small></div>
    <p className="tool-footnote">{t.statFootnote}</p>
  </div>;
}

const defaultFactionState = Object.fromEntries(factions.map((faction) => [faction, "Neutral"])) as Record<(typeof factions)[number], FactionState>;

export function FactionTrackerTool({ locale = "en" }: { locale?: Locale }) {
  const t = toolCopy[locale];
  const [states, setStates] = useState<Record<(typeof factions)[number], FactionState>>(defaultFactionState);
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("sovereign-tower-faction-tracker");
      if (!stored) return;
      const data = JSON.parse(stored) as { states?: Record<(typeof factions)[number], FactionState>; notes?: string };
      if (data.states) setStates({ ...defaultFactionState, ...data.states });
      if (typeof data.notes === "string") setNotes(data.notes);
    } catch { /* local notes are optional */ }
  }, []);

  function save() {
    window.localStorage.setItem("sovereign-tower-faction-tracker", JSON.stringify({ states, notes }));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return <div className="tool-card hud-frame">
    <div className="tool-card-head"><span className="kicker">{t.factionTracker}</span><span className="tool-badge">{t.localNotes}</span></div>
    <p className="tool-intro">{t.recordState}</p>
    <div className="faction-grid">{factions.map((faction) => <label key={faction}>{faction}<select value={states[faction]} onChange={(event) => setStates((current) => ({ ...current, [faction]: event.target.value as FactionState }))}><option value="Low">{t.low}</option><option value="Neutral">{t.neutral}</option><option value="High">{t.high}</option></select></label>)}</div>
    <label className="notes-label">{t.runNote}<textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder={t.runNotePlaceholder} /></label>
    <button className="tool-save" type="button" onClick={save}>{saved ? t.savedLocally : t.saveLocalNote}</button>
    <p className="tool-footnote">{t.factionFootnote}</p>
  </div>;
}
