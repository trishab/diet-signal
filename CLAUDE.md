# Project: diet-signal

A public-facing GitHub repo hosting n=1 case studies that pair a diet or cleanse protocol with objective WHOOP data. Sister project to the Signal vs Noise newsletter — same "cut through noise with data" ethos, applied to food and health.

## Audience

People with chronic inflammatory conditions (endo, adeno, autoimmune, IBD), quantified-self readers, and anyone skeptical of wellness-industry content. They want data, honest caveats, and no influencer theatrics.

## Voice

Clear, direct, warm. Treat the reader as smart. Never oversell. When the data doesn't prove something, say so out loud. Never issue medical recommendations — only report what was personally tried and what the data showed.

## Commit style

```
type: short imperative summary

Longer explanation if needed.
```

Types: `post` (new case study), `data` (update anonymized CSV), `script` (tooling change), `chore` (admin / dependencies), `docs` (README/disclosures).

## Data discipline

- **Never commit raw WHOOP JSON.** It contains `user_id` and email. Always export via `scripts/export-csv.mjs` first.
- **Never commit a case-study draft until the affiliate disclosures are in place at the top.**
- **Always include a methodology note** on how the data was collected, phase boundaries, and known confounders.

## Related projects

- `~/.whoop-mcp/tokens.json` — WHOOP MCP OAuth tokens (local only; not in any repo)
- `~/Documents/Dev Projects/whoop-mcp/` — cloned source of the MCP server
- `~/Desktop/food-reintroduction-tracker.md` — Trisha's live tracker; reintroduction-tracker template in this repo is derived from it
- `~/Documents/Claude/Scheduled/daily-chief-of-staff/SKILL.md` — references WHOOP MCP for morning briefings
