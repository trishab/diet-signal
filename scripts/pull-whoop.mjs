#!/usr/bin/env node
/**
 * pull-whoop.mjs — Pull WHOOP data for the last N days and save to JSON.
 *
 * Reads OAuth tokens from ~/.whoop-mcp/tokens.json (created by whoop-ai-mcp).
 * If tokens are missing or expired, run the whoop-mcp server once to trigger
 * OAuth: `node ~/Documents/Dev\ Projects/whoop-mcp/dist/index.js`
 *
 * Usage:
 *   node scripts/pull-whoop.mjs --days 45 --out /tmp/whoop-raw.json
 *
 * Flags:
 *   --days   Number of days back from today (default: 30, max: 180)
 *   --out    Output path for the raw JSON (default: ./whoop-raw.json)
 *
 * Output JSON schema:
 *   {
 *     window: { start, end },
 *     recovery: [...],
 *     sleep: [...],
 *     workout: [...],
 *     cycle: [...]
 *   }
 *
 * ⚠️ The raw JSON contains user_id and potentially other PII. Never commit it.
 *    Use export-csv.mjs to produce an anonymized daily summary before committing.
 */
import fs from "node:fs";
import os from "node:os";
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
const days = Math.min(Math.max(parseInt(args.days ?? "30", 10), 1), 180);
const out = args.out ?? "./whoop-raw.json";

const tokenPath = path.join(os.homedir(), ".whoop-mcp", "tokens.json");
if (!fs.existsSync(tokenPath)) {
  console.error(
    `No WHOOP tokens at ${tokenPath}.\n` +
      `Run the whoop-ai-mcp server once to trigger OAuth, then re-run this script.`
  );
  process.exit(1);
}
const tokens = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
const token = tokens.access_token;

const end = new Date();
const start = new Date();
start.setDate(end.getDate() - days);

const BASE = "https://api.prod.whoop.com/developer";

async function fetchAll(endpoint) {
  const all = [];
  let nextToken;
  let page = 0;
  while (true) {
    const params = new URLSearchParams({
      start: start.toISOString(),
      end: end.toISOString(),
      limit: "25",
    });
    if (nextToken) params.set("nextToken", nextToken);

    const url = `${BASE}${endpoint}?${params.toString()}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`${endpoint} ${res.status}: ${body.slice(0, 300)}`);
    }
    const data = await res.json();
    all.push(...(data.records ?? []));
    nextToken = data.next_token;
    page++;
    if (!nextToken || page > 12) break;
  }
  return all;
}

console.error(`Pulling ${days} days (${start.toISOString().slice(0, 10)} → ${end.toISOString().slice(0, 10)})…`);

const result = {
  window: { start: start.toISOString(), end: end.toISOString() },
  recovery: await fetchAll("/v2/recovery"),
  sleep: await fetchAll("/v2/activity/sleep"),
  workout: await fetchAll("/v2/activity/workout"),
  cycle: await fetchAll("/v2/cycle"),
};

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(result, null, 2));
console.error(
  `Saved ${out}\n  recovery: ${result.recovery.length}  sleep: ${result.sleep.length}  workout: ${result.workout.length}  cycle: ${result.cycle.length}`
);
