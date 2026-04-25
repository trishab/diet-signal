#!/usr/bin/env node
/**
 * merge-longitudinal.mjs — Merge a WHOOP daily-summary CSV and a Garmin
 * daily CSV into a single date-keyed longitudinal CSV.
 *
 * Where both sources report the same metric (e.g., resting HR), both columns
 * are preserved with source prefixes (whoop_resting_hr vs. garmin_resting_hr)
 * so cross-validation is possible at analysis time.
 *
 * Usage:
 *   node scripts/merge-longitudinal.mjs \
 *     --whoop case-studies/001-core-restore/data/daily-summary.csv \
 *     --garmin /tmp/garmin-daily.csv \
 *     --out case-studies/001-core-restore/data/longitudinal-summary.csv
 *
 * Either --whoop or --garmin may be omitted (the script will use empty for
 * the missing source, useful when only one data stream is available for a
 * given window).
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

function readCsv(p) {
  if (!p || !fs.existsSync(p)) return { columns: [], rows: [] };
  const text = fs.readFileSync(p, "utf8").trim();
  if (!text) return { columns: [], rows: [] };
  const [header, ...lines] = text.split(/\r?\n/);
  const columns = header.split(",");
  const rows = lines.map((line) => {
    const fields = line.split(",");
    const obj = {};
    columns.forEach((c, i) => (obj[c] = fields[i] ?? ""));
    return obj;
  });
  return { columns, rows };
}

const args = parseArgs(process.argv);
const whoopPath = args.whoop;
const garminPath = args.garmin;
const outPath = args.out;
if (!outPath) {
  console.error(
    "Usage: merge-longitudinal.mjs --whoop <csv> --garmin <csv> --out <csv>"
  );
  process.exit(1);
}

const whoop = readCsv(whoopPath);
const garmin = readCsv(garminPath);

// Prefix WHOOP columns where the schema doesn't already (most should already
// be unprefixed — we add `whoop_` to anything that isn't `date` or doesn't start with whoop_/garmin_)
function prefixed(col, prefix) {
  if (col === "date") return col;
  if (col.startsWith("whoop_") || col.startsWith("garmin_")) return col;
  return `${prefix}_${col}`;
}

const whoopCols = whoop.columns.map((c) => prefixed(c, "whoop"));
const garminCols = garmin.columns.map((c) => prefixed(c, "garmin"));

// Build a date-keyed map merging both
const byDay = new Map();
const ensure = (date) => {
  if (!byDay.has(date)) byDay.set(date, { date });
  return byDay.get(date);
};

for (const r of whoop.rows) {
  if (!r.date) continue;
  const e = ensure(r.date);
  for (let i = 0; i < whoop.columns.length; i++) {
    const src = whoop.columns[i];
    const dst = whoopCols[i];
    if (src === "date") continue;
    if (r[src] !== "" && r[src] != null) e[dst] = r[src];
  }
}
for (const r of garmin.rows) {
  if (!r.date) continue;
  const e = ensure(r.date);
  for (let i = 0; i < garmin.columns.length; i++) {
    const src = garmin.columns[i];
    const dst = garminCols[i];
    if (src === "date") continue;
    if (r[src] !== "" && r[src] != null) e[dst] = r[src];
  }
}

// Final column order: date, all whoop cols (prefixed), all garmin cols
const finalCols = [
  "date",
  ...whoopCols.filter((c) => c !== "date"),
  ...garminCols.filter((c) => c !== "date"),
];

const days = [...byDay.values()].sort((a, b) => a.date.localeCompare(b.date));
const csvLines = [
  finalCols.join(","),
  ...days.map((d) =>
    finalCols.map((c) => (d[c] == null ? "" : d[c])).join(",")
  ),
];

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, csvLines.join("\n") + "\n");

const dateCoverage = days.length
  ? `${days[0].date} → ${days[days.length - 1].date}`
  : "no dates";

console.error(
  `Merged longitudinal CSV → ${outPath}\n` +
    `  Total daily rows: ${days.length}\n` +
    `  Date span: ${dateCoverage}\n` +
    `  WHOOP rows in: ${whoop.rows.length}\n` +
    `  Garmin rows in: ${garmin.rows.length}\n` +
    `  Columns: ${finalCols.length}`
);
