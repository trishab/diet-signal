#!/usr/bin/env node
/**
 * analyze-phases.mjs — Compute mean/median metrics per phase from a raw WHOOP JSON pull.
 *
 * A "phase" is a named date range (e.g., "pre-detox baseline", "during-detox",
 * "post-detox", "nightshade trial"). This script reads a phase config and
 * outputs a markdown comparison table + daily detail for the last N days.
 *
 * Usage:
 *   node scripts/analyze-phases.mjs \
 *     --data /tmp/whoop-raw.json \
 *     --config case-studies/001-core-restore/phases.json \
 *     --detail 14
 *
 * Phase config schema:
 *   {
 *     "phases": [
 *       { "key": "pre",   "label": "Pre-detox baseline", "start": "2026-03-09", "end": "2026-04-04" },
 *       { "key": "detox", "label": "Core Restore (14d)", "start": "2026-04-05", "end": "2026-04-18" }
 *     ]
 *   }
 */
import fs from "node:fs";

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) args[a.slice(2)] = argv[++i];
  }
  return args;
}

const args = parseArgs(process.argv);
const dataPath = args.data;
const configPath = args.config;
const detailN = parseInt(args.detail ?? "14", 10);
if (!dataPath || !configPath) {
  console.error("Usage: analyze-phases.mjs --data <raw.json> --config <phases.json> [--detail N]");
  process.exit(1);
}

const d = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const ms2h = (ms) => (ms ? ms / 1000 / 60 / 60 : null);
const dayOf = (iso) => iso.slice(0, 10);

const byDay = new Map();
const ensure = (day) => {
  if (!byDay.has(day)) byDay.set(day, { day });
  return byDay.get(day);
};

for (const r of d.recovery ?? []) {
  if (!r.score) continue;
  const e = ensure(dayOf(r.created_at));
  e.recovery_score = r.score.recovery_score;
  e.hrv = r.score.hrv_rmssd_milli;
  e.rhr = r.score.resting_heart_rate;
  e.spo2 = r.score.spo2_percentage;
}
for (const s of d.sleep ?? []) {
  if (!s.score || s.nap) continue;
  const e = ensure(dayOf(s.end));
  const stage = s.score.stage_summary;
  e.sleep_perf = s.score.sleep_performance_percentage;
  e.sleep_hours =
    ms2h(stage.total_in_bed_time_milli) - ms2h(stage.total_awake_time_milli);
  e.rem = ms2h(stage.total_rem_sleep_time_milli);
  e.deep = ms2h(stage.total_slow_wave_sleep_time_milli);
  e.resp = s.score.respiratory_rate;
}

const days = [...byDay.values()].sort((a, b) => a.day.localeCompare(b.day));

function stats(arr, key) {
  const vals = arr.map((x) => x[key]).filter((v) => v != null && !Number.isNaN(v));
  if (!vals.length) return null;
  const sorted = [...vals].sort((a, b) => a - b);
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  const median = sorted[Math.floor(sorted.length / 2)];
  return { n: vals.length, mean: +mean.toFixed(2), median: +median.toFixed(2) };
}

const metrics = [
  ["recovery_score", "Recovery"],
  ["hrv", "HRV (ms)"],
  ["rhr", "Resting HR"],
  ["sleep_perf", "Sleep %"],
  ["sleep_hours", "Sleep hrs"],
  ["resp", "Resp rate"],
  ["rem", "REM hrs"],
  ["deep", "Deep hrs"],
];

let md = `# Phase comparison\n\n`;
md += `| Metric | ${config.phases.map((p) => p.label).join(" | ")} |\n`;
md += `|---|${config.phases.map(() => "---").join("|")}|\n`;
for (const [k, label] of metrics) {
  const row = config.phases
    .map((p) => {
      const sub = days.filter((x) => x.day >= p.start && x.day <= p.end);
      const s = stats(sub, k);
      return s ? `${s.median} *(n=${s.n})*` : "—";
    })
    .join(" | ");
  md += `| **${label}** | ${row} |\n`;
}

md += `\n## Last ${detailN} days — daily detail\n\n`;
md += `| Date | Phase | Recovery | HRV | RHR | Sleep % | Sleep h | Resp |\n`;
md += `|---|---|---|---|---|---|---|---|\n`;
for (const x of days.slice(-detailN)) {
  const phase = config.phases.find((p) => x.day >= p.start && x.day <= p.end);
  const phaseLabel = phase ? phase.label : "—";
  const fmt = (v, dp = 1) => (v == null ? "—" : Number(v).toFixed(dp));
  md += `| ${x.day} | ${phaseLabel} | ${fmt(x.recovery_score, 0)} | ${fmt(x.hrv)} | ${fmt(x.rhr, 0)} | ${fmt(x.sleep_perf, 0)} | ${fmt(x.sleep_hours)} | ${fmt(x.resp)} |\n`;
}

console.log(md);
