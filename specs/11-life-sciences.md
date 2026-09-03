# 11 — Life Sciences (Deep, Dedicated)

> Parent: `requirements.md` §8 (depth-vs-breadth), `content-inventory.md` §3 (sub-sectors + focus areas), `source-traceability.md` §C, `/specs/25` (integrity — correct OCR, no fabrication). This is the site's **deepest industry page** and the visible proof of founding heritage. Copy obeys `/specs/02`; components from `/specs/19`. Owns the canonical Life Sciences data.

---

## 1. Route & meta
- **Route:** `/industries/life-sciences`
- **Nav:** sub-page of "Industries." Reachable in ≤2 clicks from anywhere (nav dropdown, Home LS band, `/industries` feature band, footer).
- **Disclosure role:** DETAIL — the deep ecosystem. Hash deep-links per sub-sector (e.g., `#pharmaceuticals`) open that node's panel.
- **Canonical ownership:** the **six sub-sectors + their illustrative focus areas** (P §2), and the Life-Sciences framing of the LS-specific AI solutions (shared canonical home with `/specs/09` AI Enterprise, cross-linked).

## 2. Objective
Answer, beyond doubt, "Do they *truly* understand Life Sciences?" — by exposing sector-specific vocabulary, sub-sector structure, and source focus areas at a depth no other industry receives, without fabricating clients, metrics or outcomes.

## 3. Primary visitor question
"Do they really understand *my* Life Sciences sub-sector — clinically, commercially, and from a regulatory standpoint?"

## 4. Primary audience
Life Sciences executives (pharma, med-device, diagnostics, equipment, surgical consumables, hospital/provider leadership); market-access & regulatory leaders; medical/commercial directors; US/Europe LS firms entering or researching African markets.

## 5. What visitor should understand
1. Life Sciences is MindCraft's founding heritage and core specialization — not a generalist add-on.
2. The domain is structured into **six sub-sectors**, each with real, illustrative focus areas.
3. MindCraft's four capabilities apply specifically here, including **Life Sciences–specific AI solutions**.
4. Depth is honest: focus areas are illustrative offerings (what MindCraft does), never claimed results.

## 6. Hero
- **Eyebrow (mono):** `INDUSTRIES / CORE EXPERTISE`
- **H1 (≤9 words):** `Life Sciences is where we go deepest.`
- **Supporting line (≤24 words):** `Our founding heritage. Clinical, regulatory, market-access and commercial context across six sub-sectors — brought into every engagement across Africa and beyond.`
- **Primary CTA:** `Talk to us about Life Sciences` → `/contact?industry=life-sciences`
- **Secondary CTA:** `Explore the sub-sectors` → scrolls to EcosystemMap (S2).
- **Visual:** editorial hero with a single accent "Core expertise · Founding heritage" tag; hairline map/coordinate motif (cartographic restraint, `/specs/19` §4). No robots/brains/particles.

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — Hero (as §6)
- **Purpose:** establish founding-heritage status in 5s.
- **Words:** ~35.
- **Interaction:** static; CTAs.
- **Source facts:** LS = core expertise/heritage (P §1, §2, §7-1); regulatory fluency, clinical & commercial context (P §1).

### S2 — Ecosystem map (signature module, DEEP)
- **Purpose:** the six sub-sectors as an interactive ecosystem; selecting one reveals its focus areas + relevant capabilities + LS-specific AI on demand.
- **Copy:** eyebrow `THE LIFE SCIENCES ECOSYSTEM`; heading `Six sub-sectors, one depth of understanding`; intro (1 sentence): `Select a sub-sector to see the questions we work on and how our capabilities apply.`
- **Words:** ~25 + node labels.
- **Visual:** `EcosystemMap` — hairline/line-based diagram (SVG/CSS, no WebGL); six nodes connected to a central "Life Sciences" hub; active node = accent. See §8.
- **Interaction:** select node → `SubSectorPanel` (inline expand on desktop / bottom-sheet on mobile). Keyboard-navigable; hash deep-link opens the matching node.
- **Source facts:** six sub-sectors + focus areas (P §2 table, OCR corrected).

### S3 — How our capabilities apply here
- **Purpose:** connect the four-pillar engine to Life Sciences specifically (without duplicating pillar pages).
- **Copy:** heading `Our four capabilities, applied to Life Sciences`; four one-liners:
  - Market Research: `KOL mapping, market sizing, competitive intelligence and reimbursement scans.`
  - Business Consulting: `Portfolio, market-entry, go-to-market and regulatory strategy for LS.`
  - AI Enterprise Solutions: `Market-intelligence platforms and Life Sciences–specific AI (see below).`
  - AI Training: `Sector briefings and function-specific AI for commercial, regulatory and PV teams.`
- **Words:** ~45.
- **Visual:** four hairline rows, each with a pillar link.
- **Interaction:** each links to its pillar page; the AI Enterprise row anchors to S4.
- **Source facts:** pillar scope with LS specificity (P §4 pillars 1–4; KOL, reimbursement, PV, market access are source terms).

### S4 — Life Sciences–specific AI solutions (cross-anchored)
- **Purpose:** surface the LS-specific AI offering (P §4 pillar 4) as depth proof; cross-link to AI Enterprise.
- **Copy:** heading `AI built for Life Sciences`; three items (offerings, not results):
  - `AI-assisted pharmacovigilance and adverse-event monitoring for pharma and medical-device teams.`
  - `Regulatory-intelligence automation — tracking guideline changes, submissions and compliance deadlines across African and international regulators.`
  - `AI-powered KOL identification and market-access analytics platforms.`
- **Words:** ~55.
- **Visual:** `CrossLinkPanel` — three hairline items; accent eyebrow `LS-SPECIFIC AI`.
- **Interaction:** CTA `See AI Enterprise Solutions` → `/what-we-do/ai-enterprise-solutions#life-sciences`.
- **Source facts:** LS-specific AI solutions (P §4 pillar 4). Phrase as offerings (`/specs/25` §2).

### S5 — Reach into markets (geography bridge)
- **Purpose:** tie LS depth to African-primary geography without duplicating `/where-we-work`.
- **Copy:** heading `Life Sciences, market by market`; one line: `We support multi-country entry, regulatory mapping and harmonized research across African, European and US markets.`
- **Words:** ~30.
- **Visual:** compact hairline Africa motif (names of a few depth markets, no country dump).
- **Interaction:** CTA `See where we work` → `/where-we-work`.
- **Source facts:** multi-country entry, regulatory mapping, harmonized research (P §3); Africa primary + Europe/US (P §3).

### S6 — Closing CTA band
- **Purpose:** convert LS visitors.
- **Copy:** `Bring us your Life Sciences question.`
- **Words:** ~8.
- **Visual:** ink band (≤1 per page), accent CTA.
- **Interaction:** `Start a Conversation` → `/contact?industry=life-sciences`.
- **Source facts:** integrated offering + contact (P §4, §10).

## 8. Signature module detail — `EcosystemMap` + `SubSectorPanel`

### 8.1 Data model
```ts
type SubSector = {
  id: string;              // slug → hash deep-link
  name: string;            // corrected spelling
  source: "P";
  focusAreas: string[];    // illustrative, source-true (P §2), OCR corrected
  capabilities: {          // how the 4 pillars apply to THIS sub-sector (LS-scoped)
    marketResearch: string;
    businessConsulting: string;
    aiEnterprise: string;
    aiTraining: string;
  };
  lsAiOnDemand?: string[]; // LS-specific AI relevant to this sub-sector (subset of S4)
};
```
- Central hub node "Life Sciences" is presentational (not selectable as a panel; it is the S1/S2 anchor).

### 8.2 States
- **Map:** idle (no node selected — intro visible) · node-hover (accent highlight, desktop) · node-selected (accent fill + connector emphasis) · reduced-motion (instant state, no animated connectors).
- **Node:** default · hover · focus-visible · selected.
- **SubSectorPanel:** closed · opening · open · closing. Desktop = inline expanding region beside/below the map; mobile = `Drawer` bottom-sheet.

### 8.3 Selection behavior
- One node selected at a time; selecting another swaps the panel (desktop) or opens a new sheet (mobile).
- Keyboard: nodes are a roving-tabindex group (arrow keys move between nodes, Enter/Space selects); `Esc` closes panel and returns focus to the node.
- Deep-link: `/industries/life-sciences#pharmaceuticals` selects that node and opens its panel on load; updating selection updates the hash (history-safe).
- Panel "See AI Enterprise" and pillar links navigate out; industry state carries to `/explore?industry=<id>` and `/contact?industry=<id>`.

### 8.4 Panel content (per sub-sector)
1. **Header:** sub-sector name + `Core expertise` tag + `Source: Corporate Profile` mono note.
2. **Focus areas:** bulleted from `focusAreas` (source-true).
3. **How our capabilities apply:** four short lines from `capabilities` (LS-scoped; specific to the sub-sector where source supports, else general LS statement — never fabricated).
4. **Relevant AI (on demand):** `lsAiOnDemand` items where applicable (e.g., PV, regulatory intelligence, KOL).
5. **CTAs:** `Talk to us about <sub-sector>` → `/contact?industry=life-sciences&sub=<id>`; `Compose in Explorer` → `/explore?industry=<mapped-id>`.

## 9. Full data listing (canonical — build-ready; OCR corrected, meaning preserved)

### 9.1 Sub-sectors + illustrative focus areas (P §2)
| id | Name | Illustrative focus areas |
|---|---|---|
| `pharmaceuticals` | Pharmaceuticals | Market access; competitive intelligence; brand strategy; KOL mapping; pharmacovigilance support; regulatory intelligence; sales-force effectiveness |
| `medical-devices` | Medical Devices | Product launch strategy; health economics & reimbursement landscape; distributor mapping; post-market surveillance support |
| `medical-diagnostics` | Medical Diagnostics | Market sizing; testing-adoption studies; laboratory network mapping; regulatory pathway advisory |
| `medical-equipment` | Medical Equipment | Capital equipment market studies; tender/procurement intelligence; hospital purchasing-committee mapping |
| `surgical-consumables` | Surgical Consumables | Distribution channel studies; hospital formulary tracking; competitive benchmarking |
| `hospitals-providers` | Hospitals & Healthcare Providers | Operational strategy; digital transformation; patient-experience research; workforce capacity building |

> **Acronyms expanded on first use** in body copy: KOL (Key Opinion Leader), PV (pharmacovigilance) (`/specs/02` §9).

### 9.2 LS-specific AI solutions (P §4 pillar 4) — offerings, not results
- AI-assisted pharmacovigilance and adverse-event monitoring (pharma / medical device).
- Regulatory-intelligence automation (guideline changes, submissions, compliance deadlines; African + international regulators).
- AI-powered KOL identification and market-access analytics platforms.

`lsAiOnDemand` mapping (relevance):
- Pharmaceuticals → pharmacovigilance; regulatory intelligence; KOL/market-access.
- Medical Devices → post-market surveillance/pharmacovigilance; regulatory intelligence.
- Medical Diagnostics → regulatory intelligence.
- Medical Equipment → (market-access analytics).
- Surgical Consumables → (market-access analytics).
- Hospitals & Healthcare Providers → (patient-engagement AI, digital transformation — general LS AI).

### 9.3 Capability-application copy (LS-scoped; source-derived, no fabrication)
Rendered per sub-sector; where source lacks sub-sector specificity, use the general LS statement (S3 lines). Marked `source: "derived"` in data and reviewed against `/specs/25`.

## 10. Components used
`Header`, `Footer`; `Eyebrow`, `Tag` (`Core expertise`); `Button` (primary/secondary/ghost); `EcosystemMap` (SVG line diagram) + `SubSectorPanel` (`DetailPanel`/`Drawer`); `CrossLinkPanel` (S4); hairline Africa motif (S5); ink-band CTA (S6). All per `/specs/19`; diagrams SVG/CSS only (`/specs/23`).

## 11. Progressive-disclosure mapping
```
SCAN        Hero: "where we go deepest" + Core-expertise tag
UNDERSTAND  Ecosystem intro; "our four capabilities applied to LS"
EXPLORE     EcosystemMap — select a sub-sector node
DETAIL      SubSectorPanel: focus areas + capabilities + LS-AI on demand
ENGAGE      Panel CTAs + closing ink-band "Start a Conversation"
```

## 12. Content excluded & why
- **Broader/expanded industry cards** — owned by `/industries` (`/specs/10`); this page is Life Sciences only.
- **Full pillar sub-capabilities & deliverables** — owned by pillar pages (`/specs/06–09`); only LS-scoped one-liners + links here.
- **Full country lists** — owned by `/where-we-work` (`/specs/12`); only a depth-market motif + link here.
- **Any metric, client, "deployed," "proven," outcome %** — prohibited (`/specs/25` §2); focus areas/AI framed as offerings.
- **Invented sub-sector detail** — only the six source-listed focus-area sets are used; nothing added.

## 13. Desktop behavior (≥1024)
- Hero 7/5 asymmetric (text / map motif).
- EcosystemMap centered; six nodes around the hub; selecting a node expands `SubSectorPanel` inline (map stays visible; no route change; hash updates). Hover highlights connectors but selection also works via click/keyboard.
- S3/S4 as hairline rows; S5 compact map motif.

## 14. Mobile behavior (320–414)
- Hero stacks; CTAs full-width stacked.
- EcosystemMap degrades to a **vertical list of six tappable sub-sector chips** (no hover reliance; diagram simplified/hidden if it would clip). Selecting a chip opens a **bottom-sheet `SubSectorPanel`** (max-height 85vh, scrollable, drag/close, focus-trapped, `Esc`/overlay closes, focus returns to chip).
- Focus areas render as a scannable bullet list inside the sheet.
- S3/S4 rows stack; S5 motif simplified. No horizontal overflow at 320; targets ≥44px.

## 15. Internal links
- → `/what-we-do/ai-enterprise-solutions#life-sciences` (S3, S4).
- → `/what-we-do/market-research`, `/what-we-do/business-consulting`, `/what-we-do/ai-training` (S3 pillar links).
- → `/where-we-work` (S5).
- → `/explore?industry=<id>` (panel "Compose in Explorer").
- → `/contact?industry=life-sciences[&sub=<id>]` (hero, panels, closing band).
- ← linked from Home LS band, `/industries` feature band + sub-sector deep-links, footer, nav dropdown.

## 16. SEO metadata
- **`<title>` (≤60):** `Life Sciences Expertise | MindCraft Consultancy` (48)
- **Meta description (150–160):** `MindCraft's founding heritage: deep Life Sciences expertise across pharma, medical devices, diagnostics, equipment, surgical consumables and hospitals in Africa and beyond.` (158)
- **H1 (one):** `Life Sciences is where we go deepest.`
- **OG:** title "Life Sciences — Core Expertise | MindCraft"; description as above; image = hairline ecosystem/Africa motif (no stock/AI imagery); type `website`; url `/industries/life-sciences`.

## 17. Conversion objective
Turn "do they understand my sub-sector?" into a pre-scoped conversation. Every `SubSectorPanel` and the closing band offer `Contact` pre-scoped to Life Sciences (and the specific sub-sector), or composition in the Explorer.

## 18. Acceptance criteria (testable)
1. Page is visibly the deepest industry page: interactive ecosystem of exactly **six** source sub-sectors, each revealing focus areas on demand.
2. Sub-sector focus areas match the source table exactly in meaning, with OCR corrected (Pharmaceuticals, competitive, Diagnostics, patient-experience, etc.) — grep for OCR artifacts → zero.
3. Focus areas are behind **selection** (never a 30-bullet wall); at most one sub-sector's areas visible at once.
4. **LS-specific AI solutions** (PV, regulatory-intelligence automation, KOL/market-access) appear here and cross-link to AI Enterprise.
5. All AI/focus content is phrased as **offerings** — no "deployed," "proven," metrics, clients, or outcome % (grep → zero).
6. Deep-links `#<subsector>` select and open the matching node/panel on load; selection updates the hash; back/forward safe.
7. Keyboard operable ecosystem (roving tabindex, Enter/Space select, `Esc` close, focus return); `prefers-reduced-motion` disables connector animation.
8. Life Sciences reachable in ≤2 clicks from Home/nav; hero carries `Core expertise / Founding heritage` status.
9. Mobile: nodes become tappable chips → bottom-sheet panels; no hover reliance; no overflow at 320; targets ≥44px.
10. One `<h1>`; logical heading order; acronyms (KOL, PV) expanded on first use.
