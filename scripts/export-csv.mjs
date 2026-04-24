#!/usr/bin/env node
/**
 * export-csv.mjs — Export an anonymized daily summary from raw WHOOP JSON.
 *
 * Strips PII (user_id, email, device IDs) and merges per-day metrics across
 * recovery, sleep, and cycle endpoints into a single CSV suitable for
 * committing to a public repo.
 *
 * Usage:
 *   node scripts/export-csv.mjs --in /tmp/whoop-raw.json --out case-studies/001-core-restore/data/daily-summary.csv
 *
 * Flags:
 *   --in     Path to raw JSON from pull-whoop.mjs
 *   --out    Path to CSV to write (created if missing)
 *
 * CSV columns:
 *   date, recovery_score, hrv_ms, resting_hr, spo2_pct, skin_temp_c,
 *   sleep_perf_pct, sleep_eff_pct, sleep_hours, rem_hours, deep_hours,
 *   resp_rate, cycle_strain
 */
import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) args[a.slice(2)] = argv[++i];
  }
  return args;
}

const args = parseArgs(process.argv);
const inPath = args.in;
const outPath = args.out;
if (!inPath || !outPath) {
  console.error("Usage: export-csv.mjs --in <raw.json> --out <summary.csv>");
  process.exit(1);
}

const d = JSON.parse(fs.readFileSync(inPath, "utf8"));
const ms2h = (ms) => (ms ? +(ms / 1000 / 60 / 60).toFixed(2) : null);
const dayOf = (iso) => iso.slice(0, 10);
const round = (n, dp = 2) => (n == null || Number.isNaN(n) ? null : +Number(n).toFixed(dp));

const byDay = new Map();
function ensure(day) {
  if (!byDay.has(day)) byDay.set(day, { date: day });
  return byDay.get(day);
}

for (const r of d.recovery ?? []) {
  if (!r.score) continue;
  const e = ensure(dayOf(r.created_at));
  e.recovery_score = r.score.recovery_score ?? null;
  e.hrv_ms = round(r.score.hrv_rmssd_milli);
  e.resting_hr = r.score.resting_heart_rate ?? null;
  e.spo2_pct = round(r.score.spo2_percentage);
  e.skin_temp_c = round(r.score.skin_temp_celsius);
}

for (const s of d.sleep ?? []) {
  if (!s.score || s.nap) continue;
  const e = ensure(dayOf(s.end));
  e.sleep_perf_pct = s.score.sleep_performance_percentage ?? null;
  e.sleep_eff_pct = round(s.score.sleep_efficiency_percentage);
  const stage = s.score.stage_summary ?? {};
  e.sleep_hours = round(
    ms2h(stage.total_in_bed_time_milli) - ms2h(stage.total_awake_time_milli)
  );
  e.rem_hours = ms2h(stage.total_rem_sleep_time_milli);
  e.deep_hours = ms2h(stage.total_slow_wave_sleep_time_milli);
  e.resp_rate = round(s.score.respiratory_rate);
}

for (const c of d.cycle ?? []) {
  if (!c.score) continue;
  const e = ensure(dayOf(c.start));
  e.cycle_strain = round(c.score.strain);
}

const columns = [
  "date",
  "recovery_score",
  "hrv_ms",
  "resting_hr",
  "spo2_pct",
  "skin_temp_c",
  "sleep_perf_pct",
  "sleep_eff_pct",
  "sleep_hours",
  "rem_hours",
  "deep_hours",
  "resp_rate",
  "cycle_strain",
];

const days = [...byDay.values()].sort((a, b) => a.date.localeCompare(b.date));
const header = columns.join(",");
const rows = days.map((r) =>
  columns.map((c) => (r[c] == null ? "" : r[c])).join(",")
);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, [header, ...rows].join("\n") + "\n");
console.error(`Wrote ${days.length} daily rows → ${outPath}`);
