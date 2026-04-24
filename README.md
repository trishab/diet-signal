# diet-signal

> **Objective physiological data + cited research on how diet, detox, and recovery protocols interact with endometriosis — reported honestly, with every number backed by raw data.**

Part of the [**EndEndo.io**](https://endendo.io) ecosystem — the health-tech project building tools for people living with endometriosis. Where EndEndo.io is the product, `diet-signal` is the research and evidence companion: n=1 case studies that pair a dietary protocol with peer-reviewed mechanistic context and continuous WHOOP physiological data.

## Who this is for

- **People with endometriosis or adenomyosis** who already suspect food, hormones, and inflammation are interconnected and want cited research plus real data — not wellness-industry noise
- **Clinicians and functional medicine practitioners** looking for structured n=1 case reports they can share with patients who want to see what a protocol "looks like" in continuous physiology
- **Quantified-self readers** curious about whether a wearable can detect inflammatory responses to food and environmental factors
- **Researchers** interested in crowd-sourced, methodologically transparent pilot data to generate hypotheses for formal trials

## Why endometriosis specifically

Endometriosis is an **estrogen-driven inflammatory condition** affecting roughly 10% of women and people of reproductive age globally.[^1] Two aspects of the disease are directly relevant to this project:

1. **The liver metabolizes all circulating estrogens.** Endometriosis severity correlates with the balance of "safe" (2-hydroxy) vs. reactive (4-hydroxy) estrogen metabolites — a balance regulated by liver Phase 1 and Phase 2 enzymes.[^2][^3]
2. **Systemic inflammation and autonomic nervous system dysregulation are measurable** in people with endometriosis using heart rate variability (HRV) and other wearable-derived markers.[^4] That means protocols targeting inflammation and estrogen clearance can, in principle, be *objectively tracked* — not just self-reported.

This is the opportunity this repository explores: using a consumer wearable (WHOOP) to capture the autonomic and sleep signals that shift when someone intervenes on the liver-estrogen-inflammation axis through diet, supplementation, and complementary therapies like sauna.

## What's here

- **`case-studies/`** — n=1 personal case reports with full WHOOP data, cited research context, and honest caveats
- **`studies/`** — multi-subject citizen-science studies with formal hypotheses, recruitment, and de-identified pooled data
- **`scripts/`** — Node scripts to pull WHOOP data, compute phase comparisons, and export anonymized CSVs
- **`templates/`** — reusable trackers (food reintroduction, trial protocol) that anyone can copy
- **`disclosures.md`** — affiliate relationships, data sourcing, and medical disclaimers

## Current case studies (n=1)

| # | Protocol | Status | Key WHOOP signal |
|---|----------|--------|------------------|
| [001](case-studies/001-core-restore/) | **Core Restore 14-day liver cleanse** | 📝 Draft (data in, narrative refining) | HRV +23%, recovery +12 pts, resting HR −4 bpm |
| 002 | **Nightshade reintroduction trial** | 🏃 In progress | HRV −23% by Day 4 (preliminary) |
| 003 | **Infrared sauna: 30-day HRV tracking** | 🔮 Planned | TBD |

## Current studies (n>1, citizen science)

| # | Study | Status | Participants needed |
|---|-------|--------|---------------------|
| [001](studies/001-evvy-surgery-recovery/) | **Vaginal microbiome and endometriosis surgical recovery** (Evvy + WHOOP) | 📋 Protocol — recruiting | 10–30 participants with endo + planned laparoscopic surgery |

## The core principle

*Your wearable moves before you consciously do.* HRV, resting HR, and sleep performance often register inflammatory responses 24–48 hours before they surface as symptoms. For endometriosis — where inflammation is continuous and symptom attribution to any one trigger is notoriously difficult — this is a real diagnostic window.

Every claim in every case study is tied to (a) the raw anonymized data in `data/daily-summary.csv` and (b) peer-reviewed research in `research.md`. If a statement isn't backed by one of the two, it's labeled as personal experience.

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

Everything here is n=1 personal tracking by the author. Nothing here is a recommendation for you. If you have endometriosis, adenomyosis, or any chronic condition, decisions about diet, supplements, or detoxification protocols should be made with a qualified practitioner who knows your history. See [`disclosures.md`](disclosures.md) for affiliate relationships and the full medical disclaimer.

---

## References

[^1]: Zondervan KT, Becker CM, Missmer SA. "Endometriosis." *N Engl J Med.* 2020;382(13):1244-1256. [PMID: 32212520](https://pubmed.ncbi.nlm.nih.gov/32212520/)

[^2]: Piccinato CA, Neme RM, Torres N, et al. "Effects of steroid hormone on estrogen sulfotransferase and on steroid sulfatase expression in endometriosis tissue and stromal cells." *J Steroid Biochem Mol Biol.* 2016;158:117-126. [PMID: 26773670](https://pubmed.ncbi.nlm.nih.gov/26773670/)

[^3]: Cavalieri EL, Rogan EG. "The 3,4-quinones of estrone and estradiol are the initiators of cancer whereas resveratrol and N-acetylcysteine are the preventers." *Int J Mol Sci.* 2021;22(15):8238. [PMID: 34360990](https://pubmed.ncbi.nlm.nih.gov/34360990/)

[^4]: Kulshrestha R, Pandey A, Jain A, et al. "Heart rate variability as a non-invasive marker of autonomic dysfunction in women with endometriosis." *Indian J Physiol Pharmacol.* 2022;66(4):263-270. *(Verify PMID before citing in publication.)*
