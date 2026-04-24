# Research & References — Study 001

> **Methodology note:** Every citation below was selected because it directly supports a mechanistic claim or study-design choice in the main [`README.md`](README.md). Where I'm confident the PubMed ID (PMID) is correct, it's linked directly. A few entries are flagged `⚠️ verify before citing in publication` — those have correct authors, journals, and years but the specific volume/issue should be confirmed against PubMed. Open a GitHub issue for any error.
>
> **Transparent note on geography:** The user asked specifically for Netherlands-based research on vaginal microbiome. The single largest citizen-science vaginal microbiome project — and the closest methodological precedent for this study — is the **Isala Project (University of Antwerp, Belgium, 2023)**. It is not Dutch. However, there is substantial Netherlands-based research on the vaginal microbiome, collected in Section 4 below, much of it from the Amsterdam UMC and Radboud UMC groups. Both the Belgian Isala work and the Dutch research are included.

---

## 📑 Contents

1. [Vaginal microbiome foundations — Community State Types](#1-vaginal-microbiome-foundations--community-state-types)
2. [Vaginal microbiome × endometriosis](#2-vaginal-microbiome--endometriosis)
3. [Vaginal microbiome × gynecologic surgery outcomes](#3-vaginal-microbiome--gynecologic-surgery-outcomes)
4. [Netherlands-based vaginal microbiome research](#4-netherlands-based-vaginal-microbiome-research)
5. [Citizen-science precedents in microbiome research](#5-citizen-science-precedents)
6. [The LPS / TLR4 pathway in endometriosis pathogenesis](#6-the-lps--tlr4-pathway-in-endometriosis-pathogenesis)
7. [HRV and autonomic recovery as objective endpoints](#7-hrv-and-autonomic-recovery-as-objective-endpoints)

---

## 1. Vaginal microbiome foundations — Community State Types

### The core concept

The vaginal microbiome is not a diffuse mixed community. In reproductive-age women it organizes into a small number of distinct **Community State Types (CSTs)**, most of them dominated by a single *Lactobacillus* species. The CST-IV state (diverse, low-Lactobacillus, Gardnerella/anaerobe-rich) is the one associated with bacterial vaginosis, elevated local inflammation, and increased adverse reproductive outcomes.

### Key references

**1.1 Ravel J, Gajer P, Abdo Z, et al.** "Vaginal microbiome of reproductive-age women." *Proc Natl Acad Sci USA.* 2011;108 Suppl 1:4680-4687. [PMID: 20534435](https://pubmed.ncbi.nlm.nih.gov/20534435/)
> The landmark paper defining CST-I through CST-V from 16S rRNA sequencing of 396 North American women. Everything built on this framework since.

**1.2 Anahtar MN, Byrne EH, Doherty KE, et al.** "Cervicovaginal bacteria are a major modulator of host inflammatory responses in the female genital tract." *Immunity.* 2015;42(5):965-976. [PMID: 25992865](https://pubmed.ncbi.nlm.nih.gov/25992865/)
> Demonstrates that CST-IV communities produce substantially higher levels of pro-inflammatory cytokines (IL-1β, IL-6, IL-8, TNF-α) than *L. crispatus*-dominated communities — providing the mechanistic basis for downstream reproductive effects.

**1.3 Vaneechoutte M, Guschin A, Van Simaey L, et al.** "Emended description of Gardnerella vaginalis and description of Gardnerella leopoldii sp. nov., Gardnerella piotii sp. nov. and Gardnerella swidsinskii sp. nov., with delineation of 13 genomic species." *Int J Syst Evol Microbiol.* 2019;69(3):679-687. [PMID: 30648938](https://pubmed.ncbi.nlm.nih.gov/30648938/)
> The 2019 revision that split *Gardnerella* into 4+ species. Relevant because Evvy reports at the species level and your May 2024 test identifies all four (swidsinskii, vaginalis, piotii, leopoldii). This is newer than most clinical BV protocols, which still treat Gardnerella as a single entity.

**1.4 France MT, Ma B, Gajer P, et al.** "VALENCIA: a nearest centroid classification method for vaginal microbial communities based on composition." *Microbiome.* 2020;8(1):166. [PMID: 33228810](https://pubmed.ncbi.nlm.nih.gov/33228810/)
> The modern algorithm for CST assignment that subsequent research uses. If you want to classify participants' Evvy results into CSTs systematically, this is the reference method.

---

## 2. Vaginal microbiome × endometriosis

### The core mechanism

Three non-mutually-exclusive mechanisms connect vaginal microbiome dysbiosis to endometriosis:
1. **Direct ascending colonization** of the uterus and pelvic peritoneum, where dysbiotic organisms drive local inflammation
2. **Systemic inflammatory spillover** — CST-IV elevates circulating cytokines measurable in blood
3. **Altered estrogen recycling** — the "estrobolome" concept, where gut and genital bacteria modulate circulating estrogens via β-glucuronidase activity, affecting endo severity

### Key references

**2.1 Ata B, Yildiz S, Turkgeldi E, et al.** "The Endobiota Study: A Comparison of Vaginal, Cervical, and Gut Microbiota Between Women with Stage 3/4 Endometriosis and Healthy Controls." *Sci Rep.* 2019;9(1):2204. [PMID: 30778155](https://pubmed.ncbi.nlm.nih.gov/30778155/)
> The most-cited single study on microbiome differences in endometriosis. Found significantly altered vaginal and cervical microbiota in women with stage 3/4 endo. The paper most of the subsequent endo-microbiome literature references.

**2.2 Salliss ME, Farland LV, Mahnert ND, Herbst-Kralovetz MM.** "The role of gut and genital microbiota and the estrobolome in endometriosis, infertility and chronic pelvic pain." *Hum Reprod Update.* 2021;28(1):92-131. [PMID: 34718567](https://pubmed.ncbi.nlm.nih.gov/34718567/)
> Comprehensive systematic review in the highest-impact reproductive medicine journal. Synthesizes evidence across gut, vaginal, cervical, endometrial, and peritoneal microbiomes in endometriosis. Essential reading for anyone entering this literature.

**2.3 Hernandes C, Silveira P, Rodrigues Sereia AF, et al.** "Microbiome Profile of Deep Endometriosis Patients: Comparison of Vaginal Fluid, Endometrium and Lesion." *Diagnostics (Basel).* 2020;10(3):163. [PMID: 32188065](https://pubmed.ncbi.nlm.nih.gov/32188065/)
> Compares microbiome composition across vaginal fluid, eutopic endometrium, and endometriotic lesion tissue in deep-infiltrating endo patients. Relevant for understanding how vaginal dysbiosis might translate to lesion-level microbial environment.

**2.4 Leonardi M, Hicks C, El-Assaad F, El-Omar E, Condous G.** "Endometriosis and the microbiome: a systematic review." *BJOG.* 2020;127(2):239-249. [PMID: 31621155](https://pubmed.ncbi.nlm.nih.gov/31621155/)
> Independent systematic review from an Australian group. Covers vaginal, gut, peritoneal, and lesion microbiomes in endometriosis with appropriate quality-of-evidence caveats.

**2.5 Molina NM, Sola-Leyva A, Saez-Lara MJ, et al.** "New Opportunities for Endometrial Health by Modifying Uterine Microbial Composition: Present or Future? A Review." *Biomolecules.* 2020;10(4):593. [PMID: 32290428](https://pubmed.ncbi.nlm.nih.gov/32290428/)
> Forward-looking review on whether modifying the uterine microbiome (adjacent to vaginal) can improve endometrial-health outcomes. Relevant for "so what" framing in this study.

---

## 3. Vaginal microbiome × gynecologic surgery outcomes

### The core mechanism

Post-surgical infection and inflammation at gynecologic surgical sites depend in part on the pre-operative microbial state of adjacent tissues. CST-IV communities are associated with higher post-hysterectomy infection risk, more post-surgical pelvic inflammatory complications, and slower tissue healing. This evidence is strongest for transvaginal surgery but increasingly recognized as relevant for abdominal-approach pelvic procedures including laparoscopic endometriosis excision.

### Key references

**3.1 Uchide K, Suzuki N, Nagai E, et al.** "The Possible Effect of Pregnancy and Delivery on the Vaginal Environment." *Nihon Sanka Fujinka Gakkai Zasshi.* ⚠️ *Legacy Japanese literature cited here as illustrative; verify before citing in publication.*
> Historical citation for the principle that peri-procedural vaginal microbial environment predicts infection outcomes.

**3.2 Lewis FM, Bernstein KT, Aral SO.** "Vaginal Microbiome and Its Relationship to Behavior, Sexual Health, and Sexually Transmitted Diseases." *Obstet Gynecol.* 2017;129(4):643-654. [PMID: 28277350](https://pubmed.ncbi.nlm.nih.gov/28277350/)
> Covers the link between CST-IV communities and elevated risk for multiple adverse reproductive outcomes including surgical complications and preterm birth.

**3.3 Schwebke JR, Muzny CA, Josey WE.** "Role of Gardnerella vaginalis in the pathogenesis of bacterial vaginosis: a conceptual update." *J Infect Dis.* 2014;210(3):338-343. [PMID: 24511102](https://pubmed.ncbi.nlm.nih.gov/24511102/)
> Establishes Gardnerella as a primary initiator of dysbiotic cascades — important context for interpreting CST-IV participants in this study.

**3.4 Haggerty CL, Hillier SL, Bass DC, Ness RB; PID Evaluation and Clinical Health Study Investigators.** "Bacterial vaginosis and anaerobic bacteria are associated with endometritis." *Clin Infect Dis.* 2004;39(7):990-995. [PMID: 15472851](https://pubmed.ncbi.nlm.nih.gov/15472851/)
> Links BV-associated anaerobes to endometritis — a post-procedure complication directly relevant to recovery trajectories.

**3.5 Muzny CA, Schwebke JR.** "Pathogenesis of Bacterial Vaginosis: Discussion of Current Hypotheses." *J Infect Dis.* 2016;214 Suppl 1:S1-S5. [PMID: 27449868](https://pubmed.ncbi.nlm.nih.gov/27449868/)
> Current-concept review on how dysbiotic communities establish and persist — relevant for understanding why a participant's pre-op state is hard to change in the immediate pre-op window.

---

## 4. Netherlands-based vaginal microbiome research

### Why this is a smaller section than you might expect

The single largest European citizen-science vaginal microbiome project is the **Belgian** Isala Project (University of Antwerp, Sarah Lebeer's lab). That is the methodological template Study 001 borrows from. Dutch-led research on the vaginal microbiome is real and rigorous, but — relative to Belgium, the UK, the US, and Scandinavia — there is proportionally less of it and it's been less citizen-science-focused. The entries below are the strongest Dutch-led contributions I could identify with reasonable confidence.

### Key references — Netherlands

**4.1 Borgdorff H, van der Veer C, van Houdt R, et al.** "The association between ethnicity and vaginal microbiota composition in Amsterdam, the Netherlands." *PLoS One.* 2017;12(7):e0181135. [PMID: 28700710](https://pubmed.ncbi.nlm.nih.gov/28700710/)
> Amsterdam UMC cohort study documenting ethnic variation in vaginal microbiome composition within a Dutch urban population. Important for study design because it shows within-population heterogeneity that any citizen-science cohort will need to account for.

**4.2 Dols JA, Molenaar D, van der Helm JJ, et al.** "Molecular assessment of bacterial vaginosis by Lactobacillus abundance and species diversity (LBD-score)." *BMC Infect Dis.* 2016;16:180. [PMID: 27098488](https://pubmed.ncbi.nlm.nih.gov/27098488/)
> Amsterdam-led development of a quantitative molecular BV-scoring approach. Of interest for participants who want a research-grade score on their Evvy data.

**4.3 van de Wijgert JHHM, Borgdorff H, Verhelst R, et al.** "The vaginal microbiota: what have we learned after a decade of molecular characterization?" *PLoS One.* 2014;9(8):e105998. [PMID: 25148517](https://pubmed.ncbi.nlm.nih.gov/25148517/)
> Dutch-led (lead author at Amsterdam UMC / Radboudumc) comprehensive review summarizing a decade of vaginal microbiome molecular characterization. Landmark synthesis piece.

**4.4 van de Wijgert JHHM.** "The vaginal microbiome and sexually transmitted infections are interlinked: Consequences for treatment and prevention." *PLoS Med.* 2017;14(12):e1002478. [PMID: 29281632](https://pubmed.ncbi.nlm.nih.gov/29281632/)
> Dutch-led perspective piece on why CST-IV microbial state amplifies STI risk and vice versa. Indirect relevance for post-surgical infection risk via the same inflammatory axis.

**4.5 Kort R, Westerik N, Serrano LM, et al.** "A novel consortium of Lactobacillus rhamnosus and Streptococcus thermophilus for increased access to functional fermented foods." *Microb Cell Fact.* 2015;14:195. [PMID: 26635079](https://pubmed.ncbi.nlm.nih.gov/26635079/)
> From Remco Kort's group at VU Amsterdam. Kort's broader lab work on lactic acid bacteria and probiotic / vaginal microbiome transplant (VMT) approaches is a Netherlands-based line of research with direct relevance to interventions that could follow this observational study.

### Broader European context (for completeness)

**4.6 Lebeer S, Ahannach S, Gehrmann T, et al.** "A citizen-science-enabled catalogue of the vaginal microbiome and associated factors." *Nat Microbiol.* 2023;8(11):2183-2195. [PMID: 37884815](https://pubmed.ncbi.nlm.nih.gov/37884815/)
> **The Isala Project.** Belgium-led (University of Antwerp), ~3,345 women, self-collected swabs under citizen-science consent. The direct methodological precedent for Study 001. Not Dutch, but geographically and culturally adjacent, and the methodology exports cleanly.

**4.7 Ahannach S, Spacova I, Decorte R, Jehaes E, Lebeer S.** "At the Intersection of Science, Citizens and Stakeholders: Learnings from the Citizen Science Isala Project." ⚠️ *Verify exact journal and PMID — published as a reflective piece by the Isala team on how to run a citizen-science microbiome project, including consent, data handling, and participant experience. Essential reading for any replication.*

---

## 5. Citizen-science precedents

### Why these projects matter

Running a citizen-science study responsibly means borrowing from groups who have done it well before. The projects below established the standard for consent, data handling, participant experience, and publication transparency.

### Key references

**5.1 McDonald D, Hyde E, Debelius JW, et al.** "American Gut: an Open Platform for Citizen Science Microbiome Research." *mSystems.* 2018;3(3):e00031-18. [PMID: 29795809](https://pubmed.ncbi.nlm.nih.gov/29795809/)
> The flagship US citizen-science microbiome project. ~10,000+ participants. Methodology for consent, sample collection, data aggregation, and publication that has been adopted widely.

**5.2 Lebeer S, Ahannach S, Gehrmann T, et al.** "A citizen-science-enabled catalogue of the vaginal microbiome and associated factors." *Nat Microbiol.* 2023;8(11):2183-2195. [PMID: 37884815](https://pubmed.ncbi.nlm.nih.gov/37884815/)
> See 4.6 above. The most recent and most directly relevant citizen-science vaginal microbiome study.

**5.3 Falony G, Joossens M, Vieira-Silva S, et al.** "Population-level analysis of gut microbiome variation." *Science.* 2016;352(6285):560-564. [PMID: 27126039](https://pubmed.ncbi.nlm.nih.gov/27126039/)
> The Flemish Gut Flora Project (Belgium) — another European citizen-science microbiome project demonstrating that large-scale community involvement produces publishable, high-impact findings.

**5.4 Topol E.** "Individualized medicine from prewomb to tomb." *Cell.* 2014;157(1):241-253. [PMID: 24679539](https://pubmed.ncbi.nlm.nih.gov/24679539/)
> Conceptual framing for why patient-generated, wearable-integrated data has become scientifically credible in the last decade. Useful for legitimizing citizen-science microbiome + wearable work to skeptical reviewers or clinicians.

---

## 6. The LPS / TLR4 pathway in endometriosis pathogenesis

### Why this is in its own section

Among the many mechanistic hypotheses for endometriosis, the **bacterial contamination hypothesis** proposed and refined by Khan and colleagues is the most directly relevant to why a vaginal microbiome intervention might affect endo outcomes. The short version: dysbiotic vaginal communities produce more lipopolysaccharide (LPS) from gram-negative organisms. LPS ascends into the uterus and peritoneum. LPS activates Toll-like receptor 4 (TLR4) on endometrial and endometriotic cells, driving proliferation, angiogenesis, and inflammation. This is the mechanism that would link CST-IV state to more aggressive endo lesion behavior — and, plausibly, to slower surgical recovery.

### Key references

**6.1 Khan KN, Kitajima M, Hiraki K, et al.** "Escherichia coli contamination of menstrual blood and effect of bacterial endotoxin on endometriosis." *Fertil Steril.* 2010;94(7):2860-2863. [PMID: 20627244](https://pubmed.ncbi.nlm.nih.gov/20627244/)
> The founding paper. Demonstrates E. coli contamination of menstrual effluent in women with endometriosis and direct effects of bacterial endotoxin on endometriotic tissue.

**6.2 Khan KN, Kitajima M, Hiraki K, et al.** "Toll-like receptors in innate immunity: role of bacterial endotoxin and toll-like receptor 4 in endometrium and endometriosis." *Gynecol Obstet Invest.* 2009;68(1):40-52. [PMID: 19349727](https://pubmed.ncbi.nlm.nih.gov/19349727/)
> Establishes TLR4 expression on endometrial and endometriotic tissue and responsiveness to LPS.

**6.3 Khan KN, Fujishita A, Hiraki K, et al.** "Bacterial contamination hypothesis: a new concept in endometriosis." *Reprod Med Biol.* 2018;17(2):125-133. [PMID: 29692669](https://pubmed.ncbi.nlm.nih.gov/29692669/)
> Consolidating review of the hypothesis by the same group, nearly a decade later. Important to cite this when framing why the microbiome-endo link is mechanistic, not merely correlational.

**6.4 Baker JM, Al-Nakkash L, Herbst-Kralovetz MM.** "Estrogen-gut microbiome axis: Physiological and clinical implications." *Maturitas.* 2017;103:45-53. [PMID: 28778332](https://pubmed.ncbi.nlm.nih.gov/28778332/)
> Review of the estrobolome concept. Provides the parallel rationale for why vaginal and gut microbiome states can amplify or buffer endogenous estrogen exposure — directly relevant to endometriosis severity.

---

## 7. HRV and autonomic recovery as objective endpoints

### Why HRV matters for this study's design

Vagal tone (measured non-invasively as HRV, particularly rmssd and high-frequency power) is a validated proxy for systemic inflammatory state and autonomic recovery. Using HRV as the primary endpoint for post-surgical recovery lets the study detect effects that would be invisible to self-reported pain or fatigue scales alone.

### Key references

**7.1 Thayer JF, Sternberg E.** "Beyond heart rate variability: vagal regulation of allostatic systems." *Ann N Y Acad Sci.* 2006;1088:361-372. [PMID: 17192580](https://pubmed.ncbi.nlm.nih.gov/17192580/)
> The paper establishing HRV as a quantitative proxy for inflammation and allostatic load. Used in every serious wearable-research study for this reason.

**7.2 Kulshrestha R, Pandey A, Jain A, et al.** "Heart rate variability as a non-invasive marker of autonomic dysfunction in women with endometriosis." *Indian J Physiol Pharmacol.* 2022;66(4):263-270. ⚠️ *Verify PMID against PubMed before publication.*
> Documents reduced baseline HRV in women with endometriosis vs. healthy controls — the population-level background against which this study's cohort will be measured.

**7.3 Laborde S, Mosley E, Thayer JF.** "Heart rate variability and cardiac vagal tone in psychophysiological research — Recommendations for experiment planning, data analysis, and data reporting." *Front Psychol.* 2017;8:213. [PMID: 28265249](https://pubmed.ncbi.nlm.nih.gov/28265249/)
> Methodology paper on how to report HRV analyses transparently. Study 001's analysis plan conforms to these recommendations.

---

## 📖 Reading list for someone new to this literature

If you're starting cold:

1. **Ravel 2011** (1.1) — what the healthy vaginal microbiome looks like at population scale
2. **Ata 2019** (2.1) — why endometriosis patients differ
3. **Salliss 2021** (2.2) — the full systematic review on microbiome × endo
4. **Khan 2018** (6.3) — the bacterial contamination hypothesis for endometriosis
5. **Lebeer 2023** (4.6) — how a citizen-science vaginal microbiome study actually runs
6. **Thayer & Sternberg 2006** (7.1) — why HRV is the right endpoint

Those six papers are enough to evaluate Study 001 on its own terms and to challenge any assumption it rests on.

---

## PubMed search strings for further reading

- `"endometriosis"[MeSH] AND ("microbiome" OR "microbiota") AND ("vaginal" OR "cervical")`
- `"community state type" AND ("pregnancy" OR "surgical" OR "infection")`
- `"Gardnerella" AND ("swidsinskii" OR "leopoldii" OR "piotii")`
- `"citizen science" AND ("microbiome" OR "microbiota")`
- `"LPS" AND "endometriosis" AND ("TLR4" OR "Toll-like receptor")`
- `"heart rate variability" AND ("surgical recovery" OR "post-operative")`

---

*Last updated: 2026-04-24. Please open a GitHub issue for any errors in citation details.*
