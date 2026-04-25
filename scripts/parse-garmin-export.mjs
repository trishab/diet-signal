#!/usr/bin/env node
/**
 * parse-garmin-export.mjs — Parse a Garmin Connect data-export ZIP/folder
 * into a daily-summary CSV matching the WHOOP CSV schema.
 *
 * Usage:
 *   1. In Garmin Connect web → Account Management → Manage Your Data
 *      → "Export Your Data". Garmin emails a download link within ~24h.
 *   2. Unzip the export to a folder (e.g., ~/Downloads/garmin-export/).
 *   3. Run:
 *        node scripts/parse-garmin-export.mjs \
 *          --export-dir ~/Downloads/garmin-export \
 *          --out /tmp/garmin-daily.csv
 *
 * The Garmin export contains JSON files of varying shapes across years and
 * device generations. This parser is intentionally PERMISSIVE: it walks the
 * tree, identifies candidate daily-metric files by name pattern, and extracts
 * what it recognizes. Fields it can't find are left blank in the CSV (vs.
 * failing the whole run).
 *
 * On first run, also pass `--inspect` to print a summary of file types and
 * a sample of JSON top-level keys per file pattern. Use that report to
 * iterate on the field-extractor list below.
 *
 * CSV columns (date-keyed, same date format as WHOOP CSV):
 *   date, garmin_resting_hr, garmin_hrv_ms, garmin_sleep_hours,
 *   garmin_deep_hours, garmin_rem_hours, garmin_body_battery_high,
 *   garmin_body_battery_low, garmin_stress_avg, garmin_vo2_max,
 *   garmin_steps, garmin_active_kcal, garmin_intensity_minutes
 */
import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        args[a.slice(2)] = next;
        i++;
      } else {
        args[a.slice(2)] = true;
      }
    }
  }
  return args;
}

const args = parseArgs(process.argv);
const exportDir = args["export-dir"];
const outPath = args.out;
const inspect = !!args.inspect;

if (!exportDir || !outPath) {
  console.error(
    "Usage: parse-garmin-export.mjs --export-dir <path> --out <csv> [--inspect]"
  );
  process.exit(1);
}

if (!fs.existsSync(exportDir)) {
  console.error(`Export directory not found: ${exportDir}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Walk the export directory recursively, collecting JSON files
// ---------------------------------------------------------------------------
function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.isFile() && entry.name.endsWith(".json")) files.push(full);
  }
  return files;
}

const allJson = walk(exportDir);
console.error(`Found ${allJson.length} JSON files under ${exportDir}`);

// ---------------------------------------------------------------------------
// Classify files by filename pattern
// ---------------------------------------------------------------------------
const PATTERNS = {
  daily_summary: /UDSFile|userMetricsService.*DAILY|wellnessUserSummary/i,
  resting_hr: /restingHeartRate|RestingHeart/i,
  hrv: /HRV|heartRateVariability/i,
  sleep: /Sleep|sleepData/i,
  body_battery: /bodyBattery|BodyBattery/i,
  stress: /stress|Stress/i,
  vo2: /vo2|VO2|maxMet/i,
  steps: /steps|Steps|stepGoal/i,
};

const classified = {};
for (const f of allJson) {
  const base = path.basename(f);
  for (const [k, re] of Object.entries(PATTERNS)) {
    if (re.test(base)) {
      (classified[k] ||= []).push(f);
    }
  }
}

if (inspect) {
  console.error("\n=== INSPECT MODE — file classification ===");
  for (const [k, files] of Object.entries(classified)) {
    console.error(`\n${k}: ${files.length} files`);
    for (const f of files.slice(0, 3)) {
      console.error(`  ${path.relative(exportDir, f)}`);
      try {
        const sample = JSON.parse(fs.readFileSync(f, "utf8"));
        const obj = Array.isArray(sample) ? sample[0] : sample;
        if (obj && typeof obj === "object") {
          const keys = Object.keys(obj).slice(0, 15);
          console.error(`    keys: ${keys.join(", ")}`);
        }
      } catch (e) {
        console.error(`    (parse error: ${e.message})`);
      }
    }
  }
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Field extractors — for each output column, list (pattern key, JSON paths) to try
// ---------------------------------------------------------------------------
const dayKeyOf = (raw) => {
  // Garmin uses many shapes: "calendarDate":"2025-06-01", or top-level dates,
  // or unix timestamps in ms. Normalize to YYYY-MM-DD.
  if (!raw) return null;
  if (typeof raw === "string") {
    if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
    const d = new Date(raw);
    if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  if (typeof raw === "number") {
    const d = new Date(raw > 1e12 ? raw : raw * 1000);
    if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  return null;
};

function extractDate(record) {
  // Try a list of common date fields used in Garmin JSON
  const candidates = [
    "calendarDate",
    "date",
    "summaryDate",
    "wellnessStartTimeGmt",
    "startTimeGmt",
    "timestampLocal",
    "timestamp",
  ];
  for (const k of candidates) {
    if (record[k]) {
      const dk = dayKeyOf(record[k]);
      if (dk) return dk;
    }
  }
  return null;
}

const byDay = new Map();
const ensure = (day) => {
  if (!byDay.has(day)) byDay.set(day, { date: day });
  return byDay.get(day);
};

function pickNumber(...vals) {
  for (const v of vals) {
    if (v == null) continue;
    const n = Number(v);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}

const ms2h = (ms) => (ms ? +(ms / 1000 / 60 / 60).toFixed(2) : null);
const sec2h = (s) => (s ? +(s / 60 / 60).toFixed(2) : null);

let parseFailures = 0;

for (const file of allJson) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    parseFailures++;
    continue;
  }
  const records = Array.isArray(data) ? data : [data];

  for (const r of records) {
    if (!r || typeof r !== "object") continue;
    const day = extractDate(r);
    if (!day) continue;
    const e = ensure(day);

    // RESTING HEART RATE
    const rhr = pickNumber(
      r.restingHeartRate,
      r.lastSevenDaysAvgRestingHeartRate,
      r.restingHr,
      r.value, // sometimes RHR-specific files use a flat "value"
      r.allDayHeartRate?.restingHeartRate
    );
    if (rhr != null) e.garmin_resting_hr ??= rhr;

    // HRV (newer Garmin watches; ms)
    const hrv = pickNumber(
      r.lastNightAvg,
      r.lastNight5MinHigh,
      r.weeklyAvg,
      r.hrv?.lastNightAvg,
      r.hrvSummary?.lastNightAvg
    );
    if (hrv != null) e.garmin_hrv_ms ??= hrv;

    // SLEEP — Garmin uses *Seconds suffixes
    const sleepSec = pickNumber(
      r.sleepTimeSeconds,
      r.dailySleepDTO?.sleepTimeSeconds,
      r.totalSleepTimeSeconds
    );
    if (sleepSec != null) e.garmin_sleep_hours ??= sec2h(sleepSec);

    const deepSec = pickNumber(
      r.deepSleepSeconds,
      r.dailySleepDTO?.deepSleepSeconds
    );
    if (deepSec != null) e.garmin_deep_hours ??= sec2h(deepSec);

    const remSec = pickNumber(r.remSleepSeconds, r.dailySleepDTO?.remSleepSeconds);
    if (remSec != null) e.garmin_rem_hours ??= sec2h(remSec);

    // BODY BATTERY
    const bbHigh = pickNumber(
      r.bodyBatteryChargedValue,
      r.bodyBatteryHighestValue,
      r.bodyBattery?.high
    );
    if (bbHigh != null) e.garmin_body_battery_high ??= bbHigh;

    const bbLow = pickNumber(
      r.bodyBatteryDrainedValue,
      r.bodyBatteryLowestValue,
      r.bodyBattery?.low
    );
    if (bbLow != null) e.garmin_body_battery_low ??= bbLow;

    // STRESS
    const stressAvg = pickNumber(
      r.averageStressLevel,
      r.stressLevelAvg,
      r.stress?.averageStressLevel
    );
    if (stressAvg != null) e.garmin_stress_avg ??= stressAvg;

    // VO2 MAX (running)
    const vo2 = pickNumber(
      r.vo2MaxValue,
      r.generic?.vo2MaxValue,
      r.maxMetData?.vo2MaxValue
    );
    if (vo2 != null) e.garmin_vo2_max ??= vo2;

    // STEPS + ACTIVITY
    const steps = pickNumber(r.totalSteps, r.steps, r.userSummary?.totalSteps);
    if (steps != null) e.garmin_steps ??= steps;

    const activeKcal = pickNumber(r.activeKilocalories, r.activeCalories);
    if (activeKcal != null) e.garmin_active_kcal ??= activeKcal;

    const intMins = pickNumber(
      r.totalIntensityMinutes,
      r.moderateIntensityMinutes + r.vigorousIntensityMinutes,
      r.intensityMinutes
    );
    if (intMins != null) e.garmin_intensity_minutes ??= intMins;
  }
}

// ---------------------------------------------------------------------------
// Emit CSV
// ---------------------------------------------------------------------------
const columns = [
  "date",
  "garmin_resting_hr",
  "garmin_hrv_ms",
  "garmin_sleep_hours",
  "garmin_deep_hours",
  "garmin_rem_hours",
  "garmin_body_battery_high",
  "garmin_body_battery_low",
  "garmin_stress_avg",
  "garmin_vo2_max",
  "garmin_steps",
  "garmin_active_kcal",
  "garmin_intensity_minutes",
];

const days = [...byDay.values()].sort((a, b) => a.date.localeCompare(b.date));
const rows = days.map((r) =>
  columns.map((c) => (r[c] == null ? "" : r[c])).join(",")
);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, [columns.join(","), ...rows].join("\n") + "\n");

const populated = days.filter((r) =>
  columns.slice(1).some((c) => r[c] != null)
).length;

console.error(
  `Wrote ${days.length} daily rows (${populated} with at least one populated field) → ${outPath}`
);
console.error(
  `JSON parse failures: ${parseFailures} (likely binary files with .json extension; safe to ignore)`
);
console.error(
  `\nIf many fields came back blank, re-run with --inspect to see what file types/keys exist in your export, then update FIELD_EXTRACTORS in this script.`
);
