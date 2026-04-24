# Study 001 — Does pre-operative vaginal microbiome state predict post-surgical recovery in endometriosis?

> 📋 **Status:** Protocol v0.1 — **open to participant recruitment**. Pilot data (n=1, the study author) is in place. We're now looking for 10–30 additional participants with endometriosis who are: (a) planning laparoscopic surgery in the next 6 months, (b) willing to do an Evvy test 2–4 weeks before surgery, (c) willing to wear a WHOOP from at least 2 weeks pre-op through 4 weeks post-op.
>
> 💰 **Affiliate disclosure:** If an Evvy referral / promo code is established, it will appear here with a clear disclosure. At this moment, there is no affiliate relationship. See [`disclosures.md`](../../disclosures.md).
>
> ⚠️ **Not medical advice. Not a clinical trial.** This is an observational, hypothesis-generating citizen-science study. Nothing here replaces care from your surgeon, OBGYN, or functional medicine provider. Participants are responsible for their own medical decisions.
>
> 🔬 **Part of the [EndEndo.io](https://endendo.io) ecosystem.**

---

## The question

**Does the composition of the vaginal microbiome at the time of endometriosis surgery predict the trajectory of post-surgical recovery?**

Specifically:
- Do participants with a *Lactobacillus crispatus*-dominant vaginal microbiome (Community State Type I, or "CST-I") recover faster than participants with a diverse, Gardnerella-associated microbiome (Community State Type IV, or "CST-IV")?
- Is the recovery signal visible in WHOOP-measured HRV, resting heart rate, and sleep performance in the 4 weeks after surgery?
- Does subjective pain and fatigue recovery track with the objective autonomic recovery signal?

## Why this matters

### The clinical gap this study sits in

Endometriosis affects roughly 10% of women and people of reproductive age.[^1] Laparoscopic excision is the gold-standard surgical intervention, but:

- **Post-surgical recovery varies widely** — some people return to baseline activity in 2 weeks, others in 8–12 weeks. The variance is poorly explained by procedure complexity alone.
- **Vaginal microbiome state is almost never assessed pre-operatively** despite strong evidence that CST-IV (diverse, Gardnerella-associated) communities are associated with elevated local and systemic inflammation,[^2][^3] and that chronic inflammation impairs tissue healing, autonomic recovery, and post-surgical symptom resolution.[^4]
- **Standard clinical BV testing misses a lot.** Amsel criteria and Nugent score require overt symptoms or microscopy findings. Metagenomic sequencing (Evvy's approach) detects community composition at a much finer resolution — meaning many women carry a subclinically dysbiotic microbiome that will never be captured by routine care.

### The endometriosis-specific rationale

Two independent lines of evidence link vaginal microbiome composition to endometriosis pathophysiology:

1. **Direct microbial community differences.** The Endobiota Study (Ata et al. 2019, *Sci Rep*) found distinct vaginal, cervical, and gut microbiome signatures in women with stage 3/4 endometriosis vs. healthy controls.[^5] A systematic review (Salliss et al. 2021, *Hum Reprod Update*) synthesized the broader literature on gut and genital microbiota and the "estrobolome" in endometriosis, infertility, and chronic pelvic pain.[^6]

2. **The LPS / TLR4 pathway.** Work by Khan and colleagues (multiple papers, 2010–2018) established that bacterial lipopolysaccharide (LPS) from gram-negative organisms in the reproductive tract can promote endometriotic lesion growth via Toll-like receptor 4 signaling.[^7][^8] CST-IV communities are precisely the communities producing more LPS than CST-I/II communities.

### Why use citizen science for this question

A formal RCT of microbiome-targeted pre-surgical optimization would cost millions and take 3–5 years. In the meantime, **tens of thousands of people with endometriosis have surgery each year** — many of whom already own a WHOOP and have used Evvy. Structured citizen science can pool that data into hypothesis-level evidence now, using the exact infrastructure the Isala Project (Belgium, 2023) validated for cross-sectional microbiome mapping.[^9] This study adapts the Isala model from cross-sectional mapping to a prospective observational cohort design.

---

## Pilot data — Participant A (the study author)

### Why this case motivates the study

The author's experience illustrates the clinical gap this study aims to fill:

**Timeline:**
- PCP visit prior to May 2024 → tested for BV using standard clinical methods → **negative**
- May 11, 2024 → Evvy Expanded Vaginal Health Test (mNGS + PCR) → **CST-IV pattern with ~46% combined Gardnerella species**
- November 22, 2024 → Evvy retest (PCR panel — mNGS pending) → *Lactobacillus crispatus* still LOW microbial load

**May 2024 full mNGS result (selected detections above Evvy's 0.75% reporting threshold):**

| Microbe | Relative abundance | Interpretation |
|---|---|---|
| *Lactobacillus crispatus* | 35% | Protective — but not dominant enough for CST-I classification |
| *Gardnerella swidsinskii* | 21% | BV-associated; novel species (Vaneechoutte et al. 2019)[^10] |
| *Gardnerella vaginalis* | 14% | Classic BV marker |
| *Gardnerella piotii* | 8% | BV-associated |
| *Lactobacillus iners* | 8% | Transitional species; often present in CST-III, can shift toward dysbiosis |
| *Gardnerella leopoldii* | 3% | BV-associated |
| *Fannyhessea (Atopobium) vaginae* | 2% | Strong dysbiosis indicator; synergistic with Gardnerella |
| *Bifidobacterium animalis* | 1% | — |
| *Megasphaera lornae* | 1% | Anaerobic dysbiosis marker |
| *Prevotella bivia* | 1% | BV-associated anaerobe |
| *Prevotella timonensis* | 1% | BV-associated anaerobe |
| *Sneathia vaginalis* (amnii) | 1% | BV-associated |

**STIs (PCR panel):** all negative (Chlamydia, Mycoplasma genitalium, Neisseria gonorrhoeae, Trichomonas).
**Antimicrobial resistance genes (PCR panel):** none detected across 10 classes.
**Overall microbial load:** LOW.

**Community State Type assignment:** **CST-IV** — the diverse, Gardnerella-associated pattern. Not CST-I (would require >80% *L. crispatus*), not CST-III (would require dominant *L. iners*).

### What this pilot case does NOT tell us

- It's n=1. Nothing here generalizes to anyone else.
- There is no concurrent WHOOP data (the author did not own a WHOOP at the time of either test), so we cannot correlate the author's microbiome state with autonomic metrics for this specific window. That's the gap this citizen-science study is built to fill prospectively.
- We do not have post-surgical recovery data for this case because no laparoscopic surgery had been performed in the study window.

### What this pilot case DOES establish

- **A worked example of the clinical detection gap** — PCP-negative, Evvy-CST-IV in the same patient.
- **A concrete dataset layout** the study will use for all participants (species-level relative abundance, PCR panel, STI/AMR panels, overall microbial load).
- **Motivation for the hypothesis** — if subclinical dysbiosis is present in someone with endometriosis who presented as BV-negative by standard testing, how often does this happen in the broader endo population, and does it predict surgical recovery?

---

## Study design (v0.1 — open for critique)

### Type
Prospective observational cohort study, citizen-science recruitment, no intervention prescribed by the study.

### Primary hypothesis
In participants with endometriosis undergoing laparoscopic surgery, a **CST-IV pre-operative vaginal microbiome** will be associated with a **slower post-surgical HRV recovery trajectory** (defined as days to return to within 5% of individual 30-day pre-op HRV baseline) compared to **CST-I** (or *L. crispatus*-dominant communities).

### Secondary hypotheses
- Higher relative abundance of *Gardnerella* spp. + *Atopobium vaginae* pre-op → more reported post-op pain and fatigue in weeks 1–4
- *L. crispatus* relative abundance correlates positively with sleep performance recovery speed
- Elevated resting HR persistence > 14 days post-op is more common in CST-IV participants

### Participants we are seeking

**Inclusion:**
- Clinically diagnosed endometriosis (laparoscopic confirmation or imaging/clinical diagnosis per participant's provider)
- Scheduled for laparoscopic surgery (excision, fulguration, or diagnostic with planned excision) within 6 months
- Own or willing to wear a WHOOP from 2 weeks pre-op through 4 weeks post-op
- Willing to do an Evvy Expanded Vaginal Health Test 2–4 weeks before surgery
- Age 18+
- Willing to provide consent for de-identified data use

**Exclusion:**
- Currently on antibiotics (within 14 days of the Evvy test) — will bias microbiome state
- Active diagnosed STI at time of testing (these cases need clinical care, not a research study)
- Pregnancy
- Immunocompromised states that might independently affect recovery

### What participants provide (de-identified)

1. **Evvy results** — species-level relative abundance, PCR panel (with STI / AMR results OK to redact if preferred)
2. **WHOOP data export** — daily recovery, HRV, resting HR, sleep performance, strain for a 10-week window (2 weeks pre-op through 4 weeks post-op plus 4 weeks for baseline)
3. **Pre-op survey** — surgical plan, current medications, endometriosis stage if known, date of last menstrual period, contraceptive status
4. **Weekly post-op log** — pain (0–10), fatigue (0–10), ability to return to normal activity (0–4 scale), any infection or complication, any antibiotics prescribed
5. **Post-op Evvy retest (optional)** — at 6–8 weeks post-op if the participant wants the longitudinal view

### Analysis plan (pre-registered)

- Assign each participant a Community State Type at pre-op (CST-I / II / III / IV / V) using the standard thresholds (Ravel et al. 2011).[^11]
- Compute individual pre-op HRV baseline = median rmssd over the 14 days immediately before surgery
- Define "HRV recovery time" = number of days post-op until a 7-day rolling median of rmssd returns to within 5% of the pre-op baseline
- Compare HRV recovery time across CST groupings using non-parametric tests (Mann-Whitney or Kruskal-Wallis given expected small n)
- Report all individual-level data (de-identified) alongside aggregate results
- Explicitly report confounders: surgical duration, procedure type, medications, menstrual cycle phase at sampling, age

### Limitations (named up front)

- **Self-selection bias** — participants who do citizen science are not representative of the general endo population
- **Heterogeneous surgeries** — lap excision, fulguration, and diagnostic procedures have different recovery trajectories
- **Menstrual cycle timing** — vaginal microbiome composition varies across the cycle; we'll attempt to standardize but can't fully control
- **Self-reported data** — surgery date, pain scores, and medication use are all self-reported
- **Small sample** — n=10–30 is hypothesis-generating, not definitive

**This is a pilot.** A positive signal here is a hypothesis worth formally testing. A null signal means the effect, if it exists, requires larger n or different measurement.

---

## How to participate

If you meet the inclusion criteria and want to join:

1. **Email** `tblack818@gmail.com` with subject "diet-signal study 001 interest"
2. Include:
   - Your surgery date (estimated OK)
   - Your time zone (for data handling / cycle phase tracking)
   - Confirmation you own a WHOOP and are willing to do an Evvy test
3. You will receive:
   - A consent form (plain language, one page)
   - A participant ID (your data will only ever be linked to this ID in the public repo)
   - Instructions for timing the Evvy test and WHOOP baseline
   - A link to the weekly post-op survey form
   - *[If/when the Evvy referral is established]* a discount code

### What you get out of participating

- Your own personalized report comparing your trajectory to the cohort (de-identified, graphs only)
- Your de-identified data becomes part of a publicly available dataset that advances evidence-based care for endometriosis
- Cited participation in the final study write-up (by participant ID, not name) if/when we publish

### What you do NOT get

- Medical advice
- A prescription to improve your microbiome (any interventions are between you and your provider)
- Any guarantee your surgery will go well

---

## References

[^1]: Zondervan KT, Becker CM, Missmer SA. "Endometriosis." *N Engl J Med.* 2020;382(13):1244-1256. [PMID: 32212520](https://pubmed.ncbi.nlm.nih.gov/32212520/)

[^2]: Ravel J, Gajer P, Abdo Z, et al. "Vaginal microbiome of reproductive-age women." *Proc Natl Acad Sci USA.* 2011;108 Suppl 1:4680-4687. [PMID: 20534435](https://pubmed.ncbi.nlm.nih.gov/20534435/)

[^3]: Anahtar MN, Byrne EH, Doherty KE, et al. "Cervicovaginal bacteria are a major modulator of host inflammatory responses in the female genital tract." *Immunity.* 2015;42(5):965-976. [PMID: 25992865](https://pubmed.ncbi.nlm.nih.gov/25992865/)

[^4]: Thayer JF, Sternberg E. "Beyond heart rate variability: vagal regulation of allostatic systems." *Ann N Y Acad Sci.* 2006;1088:361-372. [PMID: 17192580](https://pubmed.ncbi.nlm.nih.gov/17192580/)

[^5]: Ata B, Yildiz S, Turkgeldi E, et al. "The Endobiota Study: A Comparison of Vaginal, Cervical, and Gut Microbiota Between Women with Stage 3/4 Endometriosis and Healthy Controls." *Sci Rep.* 2019;9(1):2204. [PMID: 30778155](https://pubmed.ncbi.nlm.nih.gov/30778155/)

[^6]: Salliss ME, Farland LV, Mahnert ND, Herbst-Kralovetz MM. "The role of gut and genital microbiota and the estrobolome in endometriosis, infertility and chronic pelvic pain." *Hum Reprod Update.* 2021;28(1):92-131. [PMID: 34718567](https://pubmed.ncbi.nlm.nih.gov/34718567/)

[^7]: Khan KN, Kitajima M, Hiraki K, et al. "Escherichia coli contamination of menstrual blood and effect of bacterial endotoxin on endometriosis." *Fertil Steril.* 2010;94(7):2860-2863. [PMID: 20627244](https://pubmed.ncbi.nlm.nih.gov/20627244/)

[^8]: Khan KN, Fujishita A, Hiraki K, et al. "Bacterial contamination hypothesis: a new concept in endometriosis." *Reprod Med Biol.* 2018;17(2):125-133. [PMID: 29692669](https://pubmed.ncbi.nlm.nih.gov/29692669/)

[^9]: Lebeer S, Ahannach S, Gehrmann T, et al. "A citizen-science-enabled catalogue of the vaginal microbiome and associated factors." *Nat Microbiol.* 2023;8(11):2183-2195. [PMID: 37884815](https://pubmed.ncbi.nlm.nih.gov/37884815/) *(The Isala Project — the methodological precedent for this study.)*

[^10]: Vaneechoutte M, Guschin A, Van Simaey L, et al. "Emended description of Gardnerella vaginalis and description of Gardnerella leopoldii sp. nov., Gardnerella piotii sp. nov. and Gardnerella swidsinskii sp. nov., with delineation of 13 genomic species." *Int J Syst Evol Microbiol.* 2019;69(3):679-687. [PMID: 30648938](https://pubmed.ncbi.nlm.nih.gov/30648938/)

[^11]: Ravel J et al. 2011 (see [^2]).

**Full bibliography including Netherlands-based vaginal microbiome research, citizen-science precedents, and the LPS/TLR4 endo pathway: [`research.md`](research.md).**
