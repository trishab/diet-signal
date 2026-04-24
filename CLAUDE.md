# Project: diet-signal

A public-facing GitHub repo hosting n=1 case studies that pair a diet or cleanse protocol with cited peer-reviewed research and continuous WHOOP physiological data. **This repo is part of the EndEndo.io ecosystem** — sister project to the EndEndo health-tech product, focused specifically on helping people with endometriosis and adenomyosis make evidence-based decisions about diet, detox, and recovery.

## Audience

**Primary:** people with endometriosis / adenomyosis seeking research-backed, data-transparent case studies.
**Secondary:** functional medicine practitioners, quantified-self readers, and researchers interested in wearable-tracked pilot data.

## Voice

Clinical-adjacent but not clinical. Every mechanistic claim must be tied to a cited peer-reviewed source (full bibliography in each case study's `research.md`). Every physiological claim must be tied to the raw anonymized data in `data/daily-summary.csv`. Personal experience is labeled as such. Never issue medical recommendations — only report what was personally tried, what the literature says about the mechanism, and what the data showed.

When in doubt, err on the side of citing more research, not less. The audience is medically literate and rewards rigor.

## Positioning

- **Aligned with EndEndo.io** — link to [endendo.io](https://endendo.io) as the sibling product anywhere positioning-related.
- **Not aligned with Signal vs Noise** — that's Trisha's AR/AI newsletter, a separate brand. Do not cross-link in case-study content unless the specific topic warrants it.
- **Affiliate disclosures are mandatory** before any link is published. See `disclosures.md`.

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
