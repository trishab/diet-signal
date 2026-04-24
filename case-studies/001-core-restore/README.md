# Case Study 001 — Core Restore 14-day liver cleanse

> 📝 **Status:** Draft. Data is in, template populated. Narrative sections marked `[TK]` are to be written by Trisha in her own voice before publishing.
>
> 💰 **Affiliate disclosure:** This post contains affiliate links to Core Restore (via Fullscript) and WHOOP. See [`disclosures.md`](../../disclosures.md) for the full relationship breakdown. If you buy through these links, I earn a small commission at no cost to you.
>
> ⚠️ **Not medical advice.** n=1 personal tracking. See [`disclosures.md`](../../disclosures.md) for full medical disclaimer.

---

## TL;DR

Fourteen days of a structured liver cleanse (Designs for Health Core Restore) produced measurable improvements in my autonomic nervous system metrics, captured by WHOOP:

- **HRV up 18%** (29.6 → 34.9 ms median)
- **Recovery score up 10 points** (64.5 → 74.4)
- **Resting HR down 3.3 bpm** (65.2 → 61.9)
- **Sleep performance up 6 points** (83% → 89%)

The numbers are real. What they prove is narrower than what they look like. Here's what I did, what the data shows, and the confounders I cannot rule out.

---

## What I tried and why

*[First draft — edit in your voice. The shape is right; the details are for you to confirm or swap.]*

I live with endometriosis. Anyone who's done the reading knows that endometriosis is, among other things, an estrogen-driven inflammatory condition — and that the liver is where estrogen gets metabolized and cleared. When liver detoxification pathways get bottlenecked, circulating estrogen climbs, and so does the inflammation. That's not fringe — it's in the mainstream endo literature.

So when my functional medicine practitioner at Parsley Health suggested Core Restore, I didn't see it as a "cleanse" in the Instagram sense. I saw it as 14 days of deliberately reducing inbound load on my liver while supplementing the nutrients it actually needs to do Phase 2 conjugation — the chemistry that makes reactive metabolites water-soluble enough to excrete. Two very different framings, same protocol. Language matters.

I also wanted to know if it would *actually do anything*. I've been wearing a WHOOP for years. If this protocol worked, my heart rate variability should move. HRV is the most sensitive non-invasive proxy for systemic inflammation and autonomic nervous system load that a consumer wearable can measure. If Core Restore was going to do something measurable, HRV would register it before I consciously noticed.

The 14-day structure appealed to me because I'm a neurodivergent person building a business. "Eat cleaner" is ambiguous — which my brain will not engage with. A structured protocol with a start date, an end date, and a clear rule set gives my nervous system a container to hold. I treated it as a 14-day experiment with a defined endpoint, not a lifestyle change.

### The protocol in one paragraph

Core Restore is a 14-day functional-medicine detox kit from Designs for Health: a daily protein-and-fiber shake (morning + evening) plus a supplement stack (sulforaphane / glutathione precursors / milk thistle / curcumin / DIM) alongside a strict elimination diet — no gluten, dairy, soy, corn, eggs, sugar, alcohol, caffeine. The goal is to reduce inbound load on the liver's detoxification machinery while upregulating Phase 2 enzyme capacity with targeted nutrients. It's dispensed through functional-medicine practitioners. My practitioner is Parsley Health.

### Why the liver (draft)

The liver is the body's primary metabolic clearing house. Every hormone, drug, environmental toxin, and metabolic byproduct gets routed through two enzymatic phases — Phase 1 (cytochrome P450, which makes compounds more reactive) and Phase 2 (conjugation, which makes them water-soluble so you can excrete them). When Phase 1 is running hot but Phase 2 is bottlenecked, reactive intermediates accumulate and drive oxidative stress and systemic inflammation.

For people with **endometriosis specifically**, the liver is also responsible for estrogen metabolism. Impaired Phase 2 glucuronidation or sulfation → elevated circulating estrogens and reactive estrogen metabolites → well-documented worsening of endometriosis symptoms. This isn't fringe — it's in the mainstream endo literature. Protocols like Core Restore target Phase 2 support (glutathione precursors, sulforaphane, curcumin, milk thistle, DIM) alongside an elimination diet.

**What a cleanse isn't:** it's not squeezing toxins out of your organs. That framing is wrong, and it's what makes mainstream medicine roll its eyes at the word. What it actually is: reducing inbound load (elimination diet) + upregulating Phase 2 enzyme capacity (supplements) + supporting binding and elimination (fiber + bile flow) for long enough that the system catches up.

---

## The data

### Phase comparison (medians)

*Generated from the [`daily-summary.csv`](data/daily-summary.csv) via [`scripts/analyze-phases.mjs`](../../scripts/analyze-phases.mjs). Regenerate with:*

```bash
node scripts/analyze-phases.mjs \
  --data /tmp/whoop-raw.json \
  --config case-studies/001-core-restore/phases.json \
  --detail 14
```

| Metric | Pre-detox baseline | Core Restore (14d) | Post-detox clean | Nightshade Trial 1 | Δ detox vs. baseline |
|---|---|---|---|---|---|
| **Recovery score** | 64 *(n=26)* | 76 *(n=14)* | 76 *(n=1)* | 66 *(n=3)* | **+12 points** |
| **HRV (ms)** | 28.7 | 35.3 | 36.9 | 33.9 | **+23%** |
| **Resting HR (bpm)** | 66 | 62 | 64 | 62 | **−4** |
| **Sleep performance (%)** | 86 | 91 | 96 | 85 | **+5** |
| **Sleep hours** | 6.8 | 7.6 | 7.5 | 6.2 | **+0.7** |
| **Respiratory rate** | 17.1 | 17.4 | 17.4 | 16.8 | ~flat |
| **REM (hrs)** | 2.0 | 2.1 | 2.6 | 1.7 | ~flat |
| **Deep sleep (hrs)** | 1.7 | 1.7 | 1.5 | 1.3 | ~flat |

### Last 14 days, daily detail

| Date | Phase | Recovery | HRV | RHR | Sleep % | Sleep h | Resp |
|---|---|---|---|---|---|---|---|
| 2026-04-10 | Core Restore | 48 | 29.7 | 65 | 78 | 5.4 | 16.9 |
| 2026-04-11 | Core Restore | 82 | 34.5 | 61 | 84 | 8.4 | 17.4 |
| 2026-04-12 | Core Restore | 65 | 32.2 | 63 | 83 | 6.6 | 17.5 |
| 2026-04-13 | Core Restore | 76 | 33.9 | 63 | 85 | 6.5 | 17.5 |
| 2026-04-14 | Core Restore | 97 | 46.4 | 58 | 91 | 7.5 | 17.2 |
| 2026-04-15 | Core Restore | 65 | 32.6 | 62 | 96 | 7.7 | 16.9 |
| 2026-04-16 | Core Restore | 76 | 35.3 | 60 | 95 | 7.4 | 16.7 |
| 2026-04-17 | Core Restore | 91 | 40.1 | 56 | 91 | 6.7 | 16.9 |
| 2026-04-18 | Core Restore | 74 | 35.3 | 61 | 96 | 8.3 | 16.8 |
| 2026-04-19 | Post-detox clean | 76 | 36.9 | 64 | 96 | 7.5 | 17.4 |
| 2026-04-20 | Nightshade Trial 1 | 66 | 33.9 | 61 | 85 | 6.2 | 16.9 |
| 2026-04-21 | Nightshade Trial 1 | 69 | 34.4 | 62 | 88 | 7.3 | 16.5 |
| 2026-04-22 | Nightshade Trial 1 | **41** | **29.5** | 64 | 80 | 5.6 | 16.8 |
| 2026-04-23 | Post-trial 24h | **38** | **27.3** | 63 | 83 | 6.6 | 17.0 |

Two things worth noticing in the daily view:
1. **The Core Restore effect wasn't linear.** Day 1 was rough. Day 5 (4/14) posted my highest HRV of the year (46.4 ms, recovery 97). The body needed a few days to settle.
2. **Nightshade Trial 1 Day 3 (4/22) and the 24h post window (4/23) show a sharp HRV drop** — from 34.4 ms to 27.3 ms, with recovery collapsing from 69 to 38. This is a classic delayed food-reactivity signal. (Full analysis in Case Study 002 once the trial finishes.)

### What the data looks like day by day

See [`data/daily-summary.csv`](data/daily-summary.csv) for the full daily series.

### What jumps out

- **HRV is the headline signal.** A 23% median increase over 14 days is a large autonomic shift. This typically reflects reduced systemic inflammation + better parasympathetic tone.
- **Resting HR dropped ~4 bpm.** Consistent with reduced inflammatory burden.
- **Sleep improved modestly.** Probably partly the elimination of alcohol and caffeine, partly improved HRV feeding sleep quality.
- **The gains started showing around Day 4–5**, not Day 1. The body needed a few days to respond.

---

## Confounders I can't rule out

**This is the section most "cleanse" content skips.** I can't.

1. **Elimination diet is probably doing most of the work.** Core Restore is three things at once: elimination diet + supplement stack + shake-based macro structure. The diet alone (no gluten / dairy / soy / corn / eggs / sugar / alcohol / caffeine for 14 days) would probably produce a meaningful portion of the HRV gain by itself. The supplements may be additive. The *ratio* of who's doing what is not separable from this data.
2. **Alcohol abstention alone has a documented HRV effect.** Even moderate drinkers often see a +5–10% HRV bump within a week of abstention. I usually have a few drinks per week. That's some of the signal, for sure.
3. **Caffeine dose changes sleep.** I'd normally have morning coffee. Removing it lengthens deep sleep and raises sleep performance, independent of the diet.
4. **Placebo is real and it doesn't need apology.** I *knew* I was on a protocol. Belief that something will help nudges autonomic metrics. That's not fake — it's also not a demerit. But it means I can't attribute 100% of the HRV gain to enzyme support.
5. **Increased mindfulness.** Just *paying attention* to food for 14 days changes things other than food — stress around meals, timing, satiety cues, sleep timing.
6. **Training load drifted.** My strain averages varied across the 45-day window. I didn't hold training constant as a control.

**What I'd need to actually separate these:** a longer n=1 with crossover (protocol → washout → elimination-only diet → washout → supplements-only), ideally 6+ months. That's out of scope for a free case study but worth flagging as the real experimental design.

---

## What I'm choosing to do next

*[First draft — the spine is right; refine to match what you've actually decided with your practitioner.]*

**I'm doing a structured 10-week food reintroduction.** The point of Core Restore wasn't to live on shakes forever. The point was to quiet the inflammatory background so I could hear what individual foods are actually doing to me. I'm now reintroducing one food group at a time, holding each trial for 2–3 days, waiting 2–3 clean days between trials, and logging symptoms against WHOOP HRV. The tracker template I'm using is in [`templates/reintroduction-tracker.md`](../../templates/reintroduction-tracker.md).

**Trial 1 — nightshades — already produced a signal.** My HRV dropped 23% over the three trial days and the 24-hour post-window, with cycle strain ruled out as a confounder. That's not a definitive verdict, but it's enough for me to hold out on nightshades for 4–6 weeks and retest at a smaller dose. Case Study 002 covers that trial in detail.

**I'm keeping a handful of habits from the 14 days permanently.** The morning protein-and-fiber shake (fiber binds bile and supports elimination — this was the piece of Core Restore with the cleanest mechanism). No alcohol during the workweek. A consistent earlier bedtime. Cruciferous vegetables every day for sulforaphane.

**I'm not keeping the supplement stack past the 14 days as a daily habit.** Not because it didn't help — the data suggests something did — but because I can't attribute the effect to any single supplement without running them separately, and long-term daily use of some of these (DIM, sulforaphane extracts) isn't well-studied. I may cycle them seasonally on my practitioner's recommendation.

**I'm adding infrared sauna (SweatHouse membership) as a complementary detox practice year-round.** The liver is one clearance route. Sweat is another. Heat therapy also has mainstream evidence for endo pain reduction, and the parasympathetic rebound post-sauna shows up cleanly in WHOOP recovery scores. See the [sweat therapy sidebar](#about-sweat-therapy-as-a-complement) below for the rationale.

**Next Core Restore cycle?** My working plan is once every 6 months, timed to the start of a meaningful work cycle. The 14-day container is useful as a reset, not as a cure-all.

---

## What this does NOT prove

- That Core Restore will work for *you*. Your baseline, your gut microbiome, your stressors, your hormonal profile, your genetic Phase 1 / Phase 2 capacity — all different from mine.
- That the supplement stack specifically did anything measurable (see confounders #1).
- That "detoxing" removes a discrete quantity of toxin from your body. That framing is wrong, and the actual mechanism is capacity support.
- That you should do this protocol instead of other interventions (sleep, exercise, stress reduction) that have larger evidence bases.

**If you're curious about this kind of protocol, talk to a functional medicine practitioner who knows your history.** Don't just buy Core Restore and try it cold. Parsley Health is mine; there are others.

---

## Resources

### If you want to try Core Restore

> *You need a practitioner to dispense Designs for Health products through Fullscript or direct order. I wouldn't recommend trying to source it yourself from a random retailer — the protocol assumes practitioner supervision, and the shakes and supplements are designed to work together.*

- **Parsley Health** — my functional medicine provider. Virtual + in-person. `[affiliate link TK — confirm with Parsley first]`
- **Designs for Health Core Restore (Fullscript)** — if your practitioner uses Fullscript, ask for a dispensary invite. `[affiliate link TK — confirm with Parsley]`
- **Find a functional medicine practitioner** — [IFM practitioner directory](https://www.ifm.org/find-a-practitioner/) *(not an affiliate link, just useful)*

### If you want to track your own response with WHOOP

- **WHOOP** — the wearable I used for this case study. `[WHOOP referral link TK]`

### If you want a lower-barrier start

You don't need a 14-day protocol to improve liver function. These are lower-risk, evidence-backed starting points:

- Cruciferous vegetables (broccoli, kale, cabbage, brussels sprouts) — most accessible source of sulforaphane
- Reduce alcohol intake for 2 weeks and track your HRV — you'll see a meaningful signal
- Prioritize sleep consistency — the liver does the bulk of its detox work during slow-wave sleep
- **Infrared sauna / sweat therapy** — complements liver detox work by mobilizing fat-soluble toxins through the skin, reducing load on hepatic pathways. See the *About sweat therapy as a complement* section below.

---

## About sweat therapy as a complement {#about-sweat-therapy-as-a-complement}

The liver is the primary detoxification organ, but **sweat is a real secondary clearance route**. Peer-reviewed analyses of human sweat have detected meaningful concentrations of compounds that are hard to clear hepatically:

- **Heavy metals** — arsenic, cadmium, lead, and mercury have all been measured in sweat at concentrations that can exceed urine excretion rates
- **Bisphenols and phthalates** — endocrine-disrupting chemicals ubiquitous in plastics and food packaging, detectable in sweat in studies of exposed populations
- **Persistent organic pollutants** — PCBs and some pesticide residues are lipid-soluble and can mobilize from fat with heat-induced sweating

**Why this matters for a liver-detox protocol:** Core Restore supports the liver's Phase 2 conjugation pathways. Sauna provides a parallel clearance route for compounds that the liver struggles with alone. Together, the two are more complete than either in isolation.

**Why this matters for endometriosis specifically:** heat therapy is one of the few non-pharmaceutical endo interventions with real clinical support — comparable to ibuprofen in some trials for dysmenorrhea. Regular sauna use also produces a reliable parasympathetic rebound that shows up in WHOOP recovery scores the morning after, which means the mechanism isn't just subjective relief.

**Personal practice:** I've joined the membership at my local infrared sauna (SweatHouse in Denver). Three to four sessions a week, usually after training, 30–45 minutes. It's become one of the non-negotiables on my daily schedule, alongside the morning shake and training block. If you're doing a structured detox protocol, a membership-based sauna is worth considering as a complement — it makes the cadence sustainable in a way that one-off sessions don't.

**A note on honesty:** I don't have clean pre/post data isolating the sauna effect yet. Case Study 003 is planned: 30 days of baseline (no sauna) → 30 days of structured 3–4x/week SweatHouse use, same diet, same training, WHOOP tracking throughout. When that's published, the answer to "does sauna actually move HRV meaningfully?" will be in this repo as data, not speculation.

---

*Published: TK · Last updated: 2026-04-23 · Data window: 2026-03-09 → 2026-04-23 (45 days)*
