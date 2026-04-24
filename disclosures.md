# Disclosures

## ⚠️ Not medical advice

Every post in this repository is **n=1 personal health tracking** by Trisha Black. Nothing here is a recommendation that you do the same protocol, take the same supplement, or expect the same result. Your body is not mine. Before changing your diet, starting a supplement, or undertaking any detox/cleanse protocol, talk to a licensed practitioner who knows your history.

The data shown is real. The conclusions drawn are mine, and they are explicitly labeled as *what I chose to do*, not *what you should do*.

## 💰 Affiliate relationships

When a post contains an affiliate link, there is a clear disclosure at the top of that post AND next to the link itself. Currently active affiliate relationships:

| Partner | Product | Commission structure | Status |
|---|---|---|---|
| **Fullscript / Designs for Health** | Core Restore 14-day protocol + individual supplements | ~20–25% via practitioner dispensary | 🔄 Pending — applying through Parsley Health practitioner |
| **WHOOP** | WHOOP membership + hardware | Referral program (one free month per signup) | 🔄 Pending |
| **Parsley Health** | Functional medicine membership | Referral or discount link | 🔄 Asking |
| **Amazon Associates** | Books + hardware | 1–4% commission | 🔄 Pending |
| **SweatHouse** | Infrared sauna membership | Local business — asking about referral program | 🔄 Asking |

**I do not accept sponsorship for case-study content.** The protocol choices are driven by what I'm personally trying, not what a brand paid me to try. If that ever changes, you will know because there will be a "Sponsored" tag at the top of the post.

## 🧪 Data sourcing

All WHOOP data comes from my own account via the [whoop-ai-mcp](https://github.com/shashankswe2020-ux/whoop-mcp) server. Before any CSV or chart is committed to this repo, the `scripts/export-csv.mjs` pipeline strips:

- `user_id`
- Email address
- Precise timestamps (rounded to date where possible)
- Device serial numbers
- Any free-text fields

If you ever spot PII in the committed data, open an issue — I will treat it as a P0.

## 🧭 Editorial principles

1. **The data tells the story, and when the data is ambiguous I say so.** If HRV moved, I report the number. If I can't rule out a confounder, I name it.
2. **Honesty about what n=1 does and doesn't prove.** A single person's physiological response to a protocol is not population-level evidence. It's a hypothesis generator, not a conclusion.
3. **No before/after photos, no weight loss claims, no "transformation" framing.** That's the genre I'm explicitly not writing.
4. **Respect for mainstream medicine + respect for lived experience.** Both can be partially right. The goal is to find the intersection where evidence-based practice and personal physiological signal agree.

## 📬 Questions / corrections

If you find an error in the data, the methodology, or a citation — or if an affiliate disclosure feels off — email `tblack818@gmail.com` or open an issue on this repo.
