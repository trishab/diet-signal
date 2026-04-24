# diet-signal

> **Objective physiological data + honest protocol reporting for people whose bodies have already told them food matters.**

A sister project to [Signal vs Noise](https://signalvsnoise.substack.com) *(adjust if the URL differs)*. Where Signal vs Noise covers Analyst Relations + AI, `diet-signal` does the same thing for food: cuts through wellness-industry noise by pairing every claim with the raw physiological data that supports or undermines it.

## Who this is for

- People with chronic inflammatory conditions (endometriosis, adenomyosis, autoimmune, IBD, long COVID) who already suspect food matters and want rigor, not vibes
- Quantified-self folks curious about whether their wearable can actually detect diet effects
- Anyone who distrusts influencer-style "I did this cleanse and felt amazing" content and wants to see the numbers

## What's here

- **`case-studies/`** — n=1 protocols with full WHOOP data, honest caveats, and what I'd do differently
- **`scripts/`** — Node scripts to pull WHOOP data, compute phase comparisons, and export anonymized CSVs
- **`templates/`** — reusable trackers (food reintroduction, trial protocol) that you can copy and adapt
- **`disclosures.md`** — affiliate disclosures, medical disclaimer, and data-sourcing philosophy

## Current case studies

| # | Protocol | Status | WHOOP signal |
|---|----------|--------|--------------|
| 001 | **Core Restore 14-day liver cleanse** | 📝 Draft (template populated, post TK) | HRV +18%, recovery +15% |
| 002 | **Nightshade reintroduction trial** | 🏃 In progress (72h post-trial window) | HRV −23% by Day 4 |

## The core principle

*Your wearable moves before you do.* HRV, resting HR, and sleep performance often register inflammatory responses 24–48 hours before you consciously feel them. That's the gap this project lives in — making the invisible visible, without pretending n=1 data proves anything it doesn't.

## Using these scripts

```bash
# Install (Node 20+)
npm install

# Pull your last 45 days of WHOOP data (requires whoop-ai-mcp token at ~/.whoop-mcp/tokens.json)
node scripts/pull-whoop.mjs --days 45 --out /tmp/whoop-raw.json

# Export an anonymized daily summary (no user_id, no email)
node scripts/export-csv.mjs --in /tmp/whoop-raw.json --out case-studies/001-core-restore/data/daily-summary.csv

# Run a phase comparison against a config
node scripts/analyze-phases.mjs --data /tmp/whoop-raw.json --config case-studies/001-core-restore/phases.json
```

## License

- **Code (`scripts/`)**: MIT
- **Content (`case-studies/`, `templates/`, `*.md`)**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — share and adapt with attribution

## ⚠️ Not medical advice

Everything here is n=1 personal health tracking. Nothing is a recommendation for you. See [`disclosures.md`](disclosures.md) for affiliate relationships and full medical disclaimer.
