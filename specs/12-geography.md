# 12 — Where We Work (Geography)

> Parent: `requirements.md` §9 (geography as experience), `content-inventory.md` §6 (exact regions/countries/counts), `source-traceability.md` §E, `/specs/25` §7 (country lists match exactly, no fabricated offices). Governs `/where-we-work`. Geography is a **strategic position, not an address**: Nairobi → East Africa → Africa → Global. Copy obeys `/specs/02`; map is SVG/CSS only (`/specs/19` §4, `/specs/23`).

---

## 1. Route & meta
- **Route:** `/where-we-work`
- **Nav:** primary nav item "Where We Work" (no sub-pages).
- **Disclosure role:** EXPLORE + DETAIL — regional selector reveals country lists on demand; Europe/US as panels.
- **Canonical ownership:** the four African regions + full country lists (45), the 12 depth markets, and the Europe/US framing. Referenced (regions only) in footer; geography filter reused in `/explore`.

## 2. Objective
Communicate Africa as MindCraft's primary, most-focused expertise — expressed as a navigable experience (Nairobi → East Africa → Africa → Global) — with honest reach (all African countries, 45 named across 4 regions, 12 depth markets) and source-accurate Europe/US framing. **No fabricated offices: HQ = Nairobi only.**

## 3. Primary visitor question
"Can they help us in *Africa / our specific region* — and do they reach Europe and the US?"

## 4. Primary audience
Multinationals and regional enterprises planning multi-country African market entry; Life Sciences firms in Europe/US researching or entering African/emerging markets; public institutions, NGOs and donor-funded programs operating across regions.

## 5. What visitor should understand
1. HQ is Nairobi, Kenya; Africa is the primary and most-focused market.
2. MindCraft has active engagement capability across **all** African countries, organized into four regions.
3. There are **12 depth markets** — honestly labeled as focus markets, **not offices**.
4. Europe and the US are served with a specific, source-accurate remit.
5. Reach is delivered from Nairobi HQ plus a growing network of associates and in-country partners — not a network of owned offices.

## 6. Hero
- **Eyebrow (mono):** `WHERE WE WORK`
- **H1 (≤9 words):** `Rooted in Nairobi. Focused on Africa.`
- **Supporting line (≤24 words):** `From our Nairobi headquarters we work across all African countries, with growing depth in key markets — and we serve Europe and the United States.`
- **Primary CTA:** `Explore the regions` → scrolls to Africa module (S2).
- **Secondary CTA:** `Talk to us about your market` → `/contact`.
- **Visual:** the **Nairobi → East Africa → Africa → Global** progression as a hairline scale motif (four expanding rings/arcs, no globe, no WebGL); a single accent marker on Nairobi. Mono coordinate label for Nairobi (cartographic restraint, `/specs/19` §4).

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — Hero (as §6)
- **Purpose:** state the position (Nairobi-rooted, Africa-primary, global reach) in 5s.
- **Words:** ~40.
- **Interaction:** static; CTAs.
- **Source facts:** Nairobi HQ; Africa primary focus; Europe & US served (P §1, §3).

### S2 — Africa module (primary, signature)
- **Purpose:** the interactive African-region experience — the heart of the page.
- **Copy:** eyebrow `AFRICA — PRIMARY FOCUS`; heading `Active across all African countries`; intro (1–3 sentences): `Our most significant and focused expertise is built around Africa. We combine on-ground knowledge, regulatory and cultural fluency, and a growing network of in-country partners. Select a region to see the countries we work across.`
- **Words:** ~50 + labels.
- **Visual:** `GeoModule` = simplified **SVG line map of Africa** (four regions as selectable paths) + `RegionSelector` (four region controls) + `FocusMarkers` (12 depth markets). Active region = accent fill/outline.
- **Interaction:** select a region (map path *or* region chip) → `CountryList` reveals that region's countries **on demand** (never all 45 at once). `FocusMarkers` toggle highlights the 12 depth markets across the map. See §8.
- **Source facts:** all African countries; on-ground presence; growing associate/partner network; 4 regions + full lists; 12 depth markets (P §3, E; `content-inventory.md` §6).

### S3 — Depth markets (honest emphasis)
- **Purpose:** surface the 12 particular-depth markets — clearly focus markets, not offices.
- **Copy:** heading `Where we have particular depth`; one line: `We have particular depth in key pharmaceutical, healthcare and consumer markets — these are focus markets, not offices.`
- **Words:** ~30 + 12 names.
- **Visual:** `FocusMarkers` list/row of the 12 markets with an accent dot; explicit mono caption `FOCUS MARKETS · NOT OFFICES`.
- **Interaction:** selecting a market highlights it on the S2 map and, where in a listed region, opens that region's `CountryList` with the market emphasized.
- **Source facts:** 12 depth markets (P §3): Kenya, Nigeria, South Africa, Egypt, Ghana, Ethiopia, Tanzania, Uganda, Rwanda, Morocco, Côte d'Ivoire, Zambia.

### S4 — Capability in geography
- **Purpose:** what "reach" actually means operationally (no fabricated footprint).
- **Copy:** heading `What our reach means`; three tight lines:
  - `Multi-country market entry across diverse regulatory and language environments.`
  - `Regulatory mapping and compliance strategy market by market.`
  - `Harmonized research and training programs run across regions.`
- **Words:** ~30.
- **Visual:** three hairline rows.
- **Interaction:** CTA `Compose a market view` → `/explore` (geography pre-selectable).
- **Source facts:** multi-country entry, regulatory mapping, harmonized research/training (P §3).

### S5 — Europe panel
- **Purpose:** source-accurate European remit.
- **Copy:** eyebrow `EUROPE`; body: `We support European clients — including pharmaceutical, medical-device and Life Sciences companies — seeking market intelligence, expansion strategy and partnerships across African and emerging markets, plus AI training and digital-transformation advisory.`
- **Words:** ~40.
- **Visual:** `RegionPanel` (hairline block, no map for Europe/US — restraint).
- **Interaction:** static/disclose; CTA `Talk to us about Europe` → `/contact?geo=europe`.
- **Source facts:** Europe framing (P §3).

### S6 — United States panel
- **Purpose:** source-accurate US remit.
- **Copy:** eyebrow `UNITED STATES`; body: `We support US-based multinational and mid-sized organizations, particularly in Life Sciences and healthcare, that need African and global market-entry research, competitive intelligence and AI-enabled enterprise solutions to inform strategy.`
- **Words:** ~35.
- **Visual:** `RegionPanel`.
- **Interaction:** static/disclose; CTA `Talk to us about the US` → `/contact?geo=us`.
- **Source facts:** US framing (P §3).

### S7 — Closing CTA band
- **Purpose:** convert.
- **Copy:** `Tell us which markets you're targeting.`
- **Words:** ~7.
- **Visual:** ink band (≤1 per page), accent CTA.
- **Interaction:** `Start a Conversation` → `/contact` (pre-scoped with selected region/market if any).
- **Source facts:** contact; Africa (primary) · Europe · US (P §3, §10).

## 8. Signature module detail — `GeoModule` (`RegionSelector` + `CountryList` + `FocusMarkers`)

### 8.1 Geography model (Nairobi → East Africa → Africa → Global)
The page is structured as a **zoom of focus**, not a country dump:
1. **Nairobi** — HQ anchor (hero motif; the only physical location).
2. **East Africa** — the home region (Kenya sits here); presented first in the selector order.
3. **Africa** — all four regions, all countries reachable on demand.
4. **Global** — Europe + United States panels.

### 8.2 Data model
```ts
type Region = {
  id: "east" | "west" | "southern" | "north";
  name: string;             // "East Africa" ...
  count: number;            // must equal countries.length
  countries: string[];      // exact source names (see §9)
  svgPathId: string;        // map path for this region
};
type FocusMarket = { name: string; regionId: Region["id"]; };
type GlobalRegion = { id: "europe" | "us"; name: string; body: string; };
```
- **Invariant:** for every region, `count === countries.length`; totals East 10 · West 16 · Southern 14 · North 5 = **45**. Enforced by a build-time assertion / test.

### 8.3 States
- **Map / RegionSelector:** idle (no region selected — intro + counts visible) · region-hover (desktop accent) · region-selected (accent path + `CountryList` open) · focus-markers-on (12 markets highlighted) · reduced-motion (instant).
- **CountryList:** closed · open (for the selected region only). Never more than one region's list expanded at a time (avoids a giant block).
- **RegionPanel (Europe/US):** collapsed · expanded (disclose).

### 8.4 Selection behavior
- Selecting a region via **map path or chip** are equivalent; both open that region's `CountryList` and mark the path active.
- Selecting another region swaps the open list (only one at a time).
- `FocusMarkers` toggle overlays the 12 depth markets; selecting a marker deep-links to its region list with the market emphasized.
- Keyboard: region controls are a roving-tabindex group (arrows move, Enter/Space select); `CountryList` receives focus on open; `Esc` collapses and returns focus to the region control.
- Deep-link/state: selected region is URL-encodable (e.g., `/where-we-work?region=west`) and reused by `/explore?geo=<country|region>`.

### 8.5 CountryList content
- Region name + `count` (mono, e.g., `WEST AFRICA · 16`).
- The country names as a scannable multi-column list (desktop) / single column (mobile); depth markets within the region carry an accent dot.
- Honest caption: `Active engagement capability — delivered from Nairobi HQ and in-country partners.`

## 9. Full data listing (canonical — EXACT source names & counts)

### 9.1 East Africa — count 10
Kenya · Ethiopia · Uganda · Tanzania · Rwanda · Burundi · South Sudan · Somalia · Djibouti · Eritrea

### 9.2 West Africa — count 16
Nigeria · Ghana · Senegal · Côte d'Ivoire · Liberia · Sierra Leone · Guinea · Guinea-Bissau · Gambia · Mali · Burkina Faso · Niger · Benin · Togo · Cabo Verde · Mauritania

### 9.3 Southern Africa — count 14
South Africa · Botswana · Namibia · Zimbabwe · Zambia · Malawi · Mozambique · Angola · Lesotho · Eswatini · Madagascar · Mauritius · Seychelles · Comoros

### 9.4 North Africa — count 5
Egypt · Libya · Tunisia · Algeria · Morocco

**Total = 45.**

### 9.5 Depth markets — count 12 (P §3; focus markets, NOT offices)
Kenya (East) · Nigeria (West) · South Africa (Southern) · Egypt (North) · Ghana (West) · Ethiopia (East) · Tanzania (East) · Uganda (East) · Rwanda (East) · Morocco (North) · Côte d'Ivoire (West) · Zambia (Southern)

### 9.6 Global regions
- **Europe:** body per S5 (P §3) — source-accurate; no offices.
- **United States:** body per S6 (P §3) — source-accurate; no offices.

> **Integrity note:** HQ is Nairobi only. No other office, address, or physical presence may appear. "On-ground presence" and "in-country partners/associates" are stated as written (P §3, §9) — presence via partners/associates, not owned offices.

## 10. Components used
`Header`, `Footer`; `Eyebrow`, `Tag`, `Chip`; `Button`; `GeoModule` (SVG line map of Africa) with `RegionSelector`, `CountryList`, `FocusMarkers`; `RegionPanel` (Europe/US, `DetailPanel`/`Drawer` on mobile); Nairobi→Global hairline motif (hero); ink-band CTA (S7). All per `/specs/19`; map SVG/CSS only, no WebGL (`/specs/23`).

## 11. Progressive-disclosure mapping
```
SCAN        Hero: Nairobi-rooted, Africa-primary + ring motif
UNDERSTAND  Africa intro (all countries) + region counts; "reach means"
EXPLORE     RegionSelector / SVG map — pick a region; FocusMarkers toggle
DETAIL      CountryList (one region at a time); Europe/US RegionPanels
ENGAGE      Panel + closing ink-band "Start a Conversation" (pre-scoped)
```
Country lists are **never** shown all at once (Failure-B guard, `source-traceability.md`).

## 12. Content excluded & why
- **A single 45-country block** — banned (dump); countries are region-gated on demand.
- **Any office/address beyond Nairobi** — prohibited (`/specs/25` §2); reach = HQ + partners/associates.
- **Metrics (# projects, # countries "delivered," market stats)** — prohibited; only the real structural counts (4 regions / 45 countries / 12 depth markets) are used.
- **Industry focus-area depth** — owned by `/industries` and `/specs/11`; geography links to it, doesn't restate it.
- **Heavy map engine / WebGL globe / tile map** — banned (`/specs/19` §4, `/specs/23`).

## 13. Desktop behavior (≥1024)
- Hero 7/5 asymmetric (text / ring motif).
- `GeoModule`: SVG Africa map left, `RegionSelector` + region counts right; selecting a region opens its `CountryList` in a panel beside/below the map (no route change; state URL-encoded). `FocusMarkers` toggle overlays the 12 markets. Hover highlights paths but click/keyboard also select.
- Europe/US as two side-by-side `RegionPanel`s (S5/S6). S4 as hairline rows.

## 14. Mobile behavior (320–414)
- Hero stacks; ring motif simplified; CTAs full-width stacked.
- `GeoModule`: the SVG map may render compact/simplified; **primary control = four region chips** (horizontally scrollable, no hover reliance). Selecting a chip opens a **bottom-sheet `CountryList`** (max-height 85vh, scrollable, drag/close, focus-trapped, `Esc`/overlay closes, focus returns to chip). Region count shown in the sheet header.
- `FocusMarkers` become a toggle chip; depth markets shown as an accent-dotted list.
- Europe/US become stacked collapsible `RegionPanel`s (bottom-sheet on open). No horizontal overflow at 320; targets ≥44px.

## 15. Internal links
- → `/explore?geo=<region|country>` (S4 "Compose a market view"; region state carries).
- → `/industries` and `/industries/life-sciences` (contextual: geography ↔ industry).
- → `/contact[?geo=<region|market>]` (hero, Europe/US panels, closing band).
- ← linked from Home geography band, `/industries` (S5 teaser), `/what-we-do`, footer (regions only).

## 16. SEO metadata
- **`<title>` (≤60):** `Where We Work — Africa, Europe & US | MindCraft` (48)
- **Meta description (150–160):** `Headquartered in Nairobi, MindCraft works across all African countries — 45 markets in four regions — with 12 focus markets, and serves Europe and the United States.` (159)
- **H1 (one):** `Rooted in Nairobi. Focused on Africa.`
- **OG:** title "Where We Work | MindCraft"; description as above; image = hairline Africa line-map motif (no stock/AI imagery); type `website`; url `/where-we-work`.

## 17. Conversion objective
Turn regional interest into a pre-scoped conversation: region/market selection carries into `/contact` and `/explore`. Europe/US panels and the closing band each end in a real, geo-scoped CTA.

## 18. Acceptance criteria (testable)
1. **Country counts exactly match source:** East 10, West 16, Southern 14, North 5 = **45**; a build-time assertion fails if any region's `count !== countries.length` or total ≠ 45.
2. Country names match source exactly (including Côte d'Ivoire, Guinea-Bissau, Cabo Verde, Eswatini, Comoros) — grep/diff against `industry-verticals-geography.md` → zero mismatches.
3. Countries are revealed **on demand**, one region at a time — never all 45 in a single visible block.
4. Region selection works via **both** SVG map path and region chip; keyboard-operable; `Esc` closes; focus returns.
5. The **12 depth markets** appear, are correct, and are explicitly labeled **focus markets, not offices**.
6. **No office/address beyond Nairobi** anywhere on the page (incl. panels, meta/OG); reach framed as HQ + partners/associates.
7. Europe and US panels carry source-accurate framing (no invented remit, no offices).
8. Map is SVG/CSS only — no WebGL, no tile map, no globe (verify no heavy map dependency).
9. Nairobi → East Africa → Africa → Global progression is visible (hero motif + region ordering with East Africa first).
10. No metrics/percentages/client claims anywhere; only structural counts (4/45/12) used.
11. Mobile: region chips + bottom-sheet country lists; no hover reliance; no overflow at 320; targets ≥44px.
12. One `<h1>`; logical heading order; `prefers-reduced-motion` honored on map/panel transitions.
