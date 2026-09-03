# 03 — Homepage (`/`)

> Parents: `requirements.md` (§2 comprehension ladder, §7 the engine, §13 audience paths, §14 conversion), `design-principles.md`, `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: the hub. Disclosure role: **SCAN + UNDERSTAND** (previews every branch; commits to nothing heavy). Owns the 5–30s ladder.
> This spec is buildable without further strategic decisions. All quoted copy below is final and length-checked against `specs/02` §3. Source citations reference `content-inventory.md` clusters (e.g., *CI §1*) and the Profile (*P §n*).

---

## 1. Route & meta
- **Route:** `/`
- **Page title (browser):** `MindCraft Consultancy Services — Nairobi` (≤60 chars)
- **Component file:** `src/pages/Home.tsx`
- **Nav state:** "Home" active.

## 2. Objective / purpose
Make a first-time visitor understand, in ascending detail, that MindCraft is a Nairobi-headquartered consultancy combining four integrated capabilities with deep Life Sciences expertise and an African focus — and that those capabilities connect into one journey from market question to measurable impact. The homepage previews every top-level page and routes the visitor to depth or to a conversation. It never dumps; every section is a scan-level teaser that links to its canonical page.

## 3. Primary visitor question(s)
- What is MindCraft and what does it do? (owns this)
- Do the capabilities connect, or is it four vendors? (spine)
- Do they really understand Life Sciences? (LS band → teaser)
- Can they help in Africa / my region? (geo band → teaser)
- Can they help *my* industry / my exact situation? (Explorer teaser)
- Who are they; can I trust a 2026 firm? (differentiators + honest outro → About)
- Can I talk to them? (persistent + closing CTA)

## 4. Primary audience
All personas at entry (`requirements.md` §13). Homepage does not segment hard; a lightweight audience self-select (Section 8) routes CEOs, strategy/commercial leaders, Life Sciences and regulatory executives, CIOs, HR/L&D leaders, and public/development-sector buyers to their best first destination.

## 5. What the visitor should understand (by scan / 1 min)
- **5s:** Nairobi consultancy combining business consulting, market research, AI training and enterprise AI; deep Life Sciences expertise; African focus. (Hero)
- **15s:** The four capabilities connect into one journey — understand → decide → build → embed → impact. (Hero sub + spine, scan level)
- **30s:** Life Sciences is the *deep* specialization; many other industries are served (breadth); Africa is primary, with Europe & US reach. (LS band + industries strip + geo band)
- **1 min:** How the pillars interlock on a real engagement; who MindCraft serves; how an engagement runs. (Spine explore state + audience paths + how-we-work preview + differentiators)

---

## 6. Hero
- **Eyebrow (mono):** `NAIROBI, KENYA · EST. 2026` (real facts in lieu of a metric; CI §1, P §1)
- **Headline (Fraunces, ≤9 words):** **"Sector depth, meet applied AI."** (7 words — the founding-gap idea, P §1)
- **Supporting line (≤24 words):** "MindCraft is a Nairobi-based consultancy combining market research, business consulting, AI training and enterprise AI — with deep Life Sciences expertise and an African focus." (24 words; CI §1, P §1)
- **Signature line (≤12 words, mono, under supporting):** "Business Consulting · Market Research · AI Training · AI Enterprise Solutions" (the four-pillar signature; CI §1, P title — counts as one line)
- **Primary CTA:** `Start a Conversation` → `/contact`
- **Secondary CTA:** `See what we do` → `/what-we-do`
- **Component:** `Hero` (editorial), `Eyebrow`, `SignatureLine`, `Button` ×2.

---

## 7. Section sequence

> Each section below carries the full homepage-blueprint fields required by the brief (§44): **SECTION NAME · Purpose · Visitor question · Headline · Supporting copy · Primary interaction · Secondary interaction · CTA · Visual treatment · Mobile behavior · Approx. content length · Source facts covered.** All copy is final and length-checked.

### Section 0 — HERO
- **Purpose:** Deliver the 5s and open the 15s comprehension checkpoint; establish identity, positioning, and the primary action.
- **Visitor question:** What is MindCraft and what does it do?
- **Headline:** "Sector depth, meet applied AI."
- **Supporting copy:** hero supporting line + signature line (see §6).
- **Primary interaction:** primary CTA click → `/contact`.
- **Secondary interaction:** secondary CTA → `/what-we-do`; scroll cue reveals the spine.
- **CTA:** `Start a Conversation` (primary) · `See what we do` (secondary).
- **Visual treatment:** editorial paper background; large Fraunces headline left-aligned on an asymmetric 8/4 grid; mono eyebrow + signature line; a subtle hairline coordinate motif (Nairobi latitude/longitude as a system accent, `aria-hidden`). No AI decoration.
- **Mobile behavior:** single column; headline `--fs-h1` clamps down; eyebrow above headline; CTAs stack full-width (primary on top), 44px min height.
- **Approx. content length:** headline ≤9 words; supporting ≤24 words; signature ≤12 words.
- **Source facts covered:** CI §1 (name, positioning, four-pillar signature, Nairobi HQ, 2026, Life Sciences core, African focus); P §1, P title.

### Section 1 — THE ENGINE (connected-capabilities spine)
- **Purpose:** The signature idea — prove the four pillars are one connected engine entered from a *question/outcome*, not four cards. Completes the 15s checkpoint and opens the 1-min one. (`requirements.md` §7)
- **Visitor question:** Do the capabilities connect, or is it four vendors?
- **Section number / eyebrow (mono):** `01 — HOW WE CREATE VALUE`
- **Headline (≤8 words):** "One engine, four connected capabilities."
- **Supporting copy (1–3 sentences):** "A market question moves through research, strategy, AI implementation and training — then loops back as measurable impact. You can enter at any point; most engagements combine two or more." (CI §7, P §4 — honest: entry at any node)
- **Primary interaction:** `ValueChainSpine` — five nodes (Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact, looping to the next question). Selecting/hovering a node reveals a one-sentence "what happens here" (scan-level DETAIL). Each node one line only. Node copy (all ≤16 words):
  - **A market question** — "Every engagement starts with a real decision to be made."
  - **Market Research** — "Turn market complexity into decision-ready intelligence."
  - **Business Consulting** — "Turn intelligence into a strategy and a plan."
  - **AI Enterprise Solutions** — "Operationalize the plan into working systems."
  - **AI Training** — "Embed capability so adoption sticks."
  - **Measurable impact** — "Results inform the next question — the loop."
- **Secondary interaction:** each node links to its pillar page; the whole module links to `/what-we-do`.
- **CTA:** `See what we do` → `/what-we-do` (secondary/ghost, section end).
- **Visual treatment:** horizontal hairline spine with mono node labels and accent-600 node markers; selected node emphasized with accent rule; line-based SVG/CSS diagram, no heavy libs. Loop arrow from Impact back to "a market question."
- **Mobile behavior:** spine renders vertically (top→bottom); nodes are tappable rows; selecting expands the one-sentence reveal inline; loop indicated by a returning connector at the base. No hover dependency.
- **Approx. content length:** eyebrow + heading + ≤3-sentence intro + six ≤16-word node lines.
- **Source facts covered:** CI §7 (four integrated pillars; frequent multi-pillar engagement; example arc research→strategy→AI→training); P §4; the engine model (`requirements.md` §7).

### Section 2 — LIFE SCIENCES DEPTH (core expertise band)
- **Purpose:** Establish that Life Sciences is the *deep* specialization and founding heritage — visibly different in status from other industries (`requirements.md` §8). Advances the 30s checkpoint.
- **Visitor question:** Do they really understand Life Sciences?
- **Section number / eyebrow (mono):** `02 — CORE EXPERTISE`
- **Headline (≤8 words):** "Life Sciences is our founding heritage."
- **Supporting copy (1–3 sentences):** "Regulatory fluency, clinical and commercial context, and industry benchmarks are built into every engagement. Our depth spans six Life Sciences sub-sectors." (CI §1, §3; P §1, §2)
- **Primary interaction:** six sub-sector names shown as a compact hairline list / tag row (names only, no focus-area dump on Home): Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers. Names are static teasers; full ecosystem lives on `/industries/life-sciences`.
- **Secondary interaction:** whole band links to the Life Sciences page.
- **CTA:** `Explore Life Sciences` → `/industries/life-sciences`.
- **Visual treatment:** deliberate emphasis band (may use `paper-2` alt surface or a single accent rule) to signal elevated status vs. the breadth strip that follows; mono sub-sector tags; hairline separators. No focus-area detail here (that is on the LS page).
- **Mobile behavior:** sub-sector names wrap as a two-column tag list; CTA full-width below.
- **Approx. content length:** eyebrow + heading + ≤2-sentence intro + six sub-sector names.
- **Source facts covered:** CI §1 (LS core/heritage), CI §3 (six sub-sectors — names only on Home); P §1, §2.

### Section 3 — INDUSTRIES BREADTH (served-industries strip)
- **Purpose:** Show breadth without competing with LS depth — many industries served, clearly a different (breadth) status. Completes the depth-vs-breadth asymmetry on Home. (`requirements.md` §8)
- **Visitor question:** Can they help *my* industry?
- **Section number / eyebrow (mono):** `03 — INDUSTRIES SERVED`
- **Headline (≤8 words):** "Depth in Life Sciences, breadth across industries."
- **Supporting copy (1 sentence):** "The same rigor extends across roughly twenty industry verticals — from chemicals and automotive to financial services, energy and manufacturing." (CI §4, §5; P §2 + source E)
- **Primary interaction:** a scannable `GlanceStrip`-style horizontal list of representative vertical names (subset shown, e.g., Chemicals · Agrochemicals · Automotive · Financial Services · Energy · Manufacturing · Telecommunications & Technology · Retail & Consumer Goods, with "+ more"). No focus-area claims for expanded verticals (integrity §5).
- **Secondary interaction:** "+ more" and the strip link to `/industries`.
- **CTA:** `See all industries` → `/industries`.
- **Visual treatment:** low-emphasis horizontal strip on paper (visually lighter than the LS band above — the asymmetry must be visible); mono names separated by hairline dividers or middots.
- **Mobile behavior:** horizontal scroll strip or wrapped chip list; CTA full-width below.
- **Approx. content length:** eyebrow + heading + 1 sentence + a name list (~8 names + "more").
- **Source facts covered:** CI §4 (four original verticals), CI §5 (fifteen expanded verticals); P §2 + source E. No fabricated depth for expanded verticals.

### Section 4 — GEOGRAPHY (Africa-forward reach band)
- **Purpose:** Present Africa as a strategic position, not an address; establish Nairobi → Africa → Global reach. Completes the 30s checkpoint. (`requirements.md` §9)
- **Visitor question:** Can they help us in Africa / our region?
- **Section number / eyebrow (mono):** `04 — WHERE WE WORK`
- **Headline (≤8 words):** "Rooted in Africa, working globally."
- **Supporting copy (1–3 sentences):** "Headquartered in Nairobi, MindCraft has engagement capability across all African countries, with reach into Europe and the United States." (CI §6; P §3)
- **Primary interaction:** a restrained line-map / four-region motif of Africa (East · West · Southern · North) as a scan-level teaser; regions are labels only here (full selector + country lists live on `/where-we-work`). Simplified vector Africa, no heavy tiles/WebGL.
- **Secondary interaction:** map/regions link to `/where-we-work`; Europe · United States shown as two mono tags linking to the same page.
- **CTA:** `Explore where we work` → `/where-we-work`.
- **Visual treatment:** cartographic restraint — hairline/line map of Africa with the four regions as paths and Nairobi marked with an accent point; coordinate motif as subtle system accent. No neon, no globe.
- **Mobile behavior:** map scales to full width or degrades to four tappable region chips + a Nairobi anchor line; Europe/US tags below; CTA full-width.
- **Approx. content length:** eyebrow + heading + ≤2-sentence intro + region/geo labels.
- **Source facts covered:** CI §6 (Nairobi HQ; Africa primary; all African countries; four regions; Europe; US). No fabricated offices beyond Nairobi.

### Section 5 — THE EXPLORER (signature teaser)
- **Purpose:** Tease the Industry × Geography × Capability Explorer — the interactive embodiment of the mind map — to answer "can they help with *my exact* situation?" (`requirements.md` §10)
- **Visitor question:** Can they help with my exact combination of industry, region and need?
- **Section number / eyebrow (mono):** `05 — EXPLORE YOUR SITUATION`
- **Headline (≤8 words):** "Your industry, your region, your need."
- **Supporting copy (1–2 sentences):** "Compose an industry, a geography and a capability to see how MindCraft would apply — a focused, source-true response." (`requirements.md` §10)
- **Primary interaction:** a compact, non-functional preview of the three-slot composer (`[ INDUSTRY ] × [ GEOGRAPHY ] × [ CAPABILITY ]`) with one example pre-filled (e.g., "Pharmaceuticals × Kenya × Market Research"). Clicking opens `/explore` (optionally with that example's state).
- **Secondary interaction:** whole module links to `/explore`.
- **CTA:** `Open the Explorer` → `/explore`.
- **Visual treatment:** three hairline slot chips joined by mono `×` operators; one accent-outlined example; intelligence-interface restraint (not a gimmick). Lightweight, no 3D.
- **Mobile behavior:** slots stack vertically (Industry → Geography → Capability) as a preview stepper; CTA full-width launches `/explore` stepper.
- **Approx. content length:** eyebrow + heading + ≤2 sentences + one example line.
- **Source facts covered:** composition model (`requirements.md` §5, §10); no fabricated combinations — Explorer output governed by `specs/25` §6.

### Section 6 — AUDIENCE PATHS (lightweight self-select)
- **Purpose:** Route each persona to its best first destination without per-persona pages. (`requirements.md` §13)
- **Visitor question:** Where should *I* start?
- **Section number / eyebrow (mono):** `06 — START WHERE YOU ARE`
- **Headline (≤8 words):** "Find your fastest starting point."
- **Supporting copy (1 sentence):** "Tell us your role and we'll point you to the most relevant capability, industry or process." (`requirements.md` §13)
- **Primary interaction:** `AudienceSelector` — selectable chips mapping to destinations (from `requirements.md` §13):
  - CEO / Managing Director → `/what-we-do` (then How We Work)
  - Strategy leader → `/what-we-do/business-consulting`
  - Commercial leader → `/what-we-do/market-research` (+ AI Enterprise)
  - Life Sciences executive → `/industries/life-sciences`
  - Regulatory / market-access → `/industries/life-sciences` (+ Business Consulting)
  - CIO / CTO → `/what-we-do/ai-enterprise-solutions`
  - HR / L&D leader → `/what-we-do/ai-training`
  - Government / regulator → `/how-we-work` (+ Business Consulting)
  - NGO / development org → `/what-we-do/market-research` (program & impact)
  - Research / academic → `/what-we-do/market-research` (+ About)
- **Secondary interaction:** each chip is a real link; no dead ends.
- **CTA:** implicit (each chip navigates); no separate button required.
- **Visual treatment:** flat selectable chips (`Chip`, `aria-pressed`/link) on paper, hairline borders, accent on hover/selected; grouped in a tidy wrap.
- **Mobile behavior:** chips wrap to full-width tappable rows (44px); scrollable if needed.
- **Approx. content length:** eyebrow + heading + 1 sentence + ~10 chips.
- **Source facts covered:** CI §8 (target clients, as audience routing); `requirements.md` §13 mapping. No fabricated segments beyond the source client list.

### Section 7 — WHY MINDCRAFT (differentiators, scan level)
- **Purpose:** Establish credibility for a 2026 firm through structure, not proof — the five differentiators as sharp editorial statements. Depth lives on How We Work. (`requirements.md` §1E, §12)
- **Visitor question:** Why MindCraft — and can I trust a new firm?
- **Section number / eyebrow (mono):** `07 — WHY MINDCRAFT`
- **Headline (≤8 words):** "Five reasons this is different."
- **Supporting copy:** none required beyond the list (avoid redundancy); optional 1-line lead: "What sets a specialist apart from a generalist." (P §7)
- **Primary interaction:** `DifferentiatorList` — five one-line statements (each title ≤5 words + ≤16-word line):
  1. **Deep Life Sciences heritage** — "Core expertise, not a generalist add-on."
  2. **Pan-African footprint, local fluency** — "On-ground knowledge with international standards, across the continent."
  3. **One partner, four capabilities** — "Research, strategy, AI and training as one engagement."
  4. **Applied, decision-ready outputs** — "Built for implementation, not left as theory."
  5. **Responsible AI by design** — "Privacy, ethics and governance embedded from the start."
- **Secondary interaction:** list links to `/how-we-work` for the depth version.
- **CTA:** `See how we work` → `/how-we-work`.
- **Visual treatment:** editorial statements separated by hairline rules; mono numerals `01–05` in accent; no cards required (avoid everything-in-a-card).
- **Mobile behavior:** stacked list, one statement per row, numerals inline.
- **Approx. content length:** eyebrow + heading + five ≤16-word statements.
- **Source facts covered:** CI §10 (five differentiators); P §7. Honest — no metrics, no "proven."

### Section 8 — HOW WE WORK (process preview)
- **Purpose:** Reassure that an engagement is structured; preview the six-stage process without duplicating How We Work. (`requirements.md` §1, CI §11)
- **Visitor question:** How would an engagement actually run?
- **Section number / eyebrow (mono):** `08 — HOW AN ENGAGEMENT RUNS`
- **Headline (≤8 words):** "A clear, six-stage engagement."
- **Supporting copy (1 sentence):** "From first conversation to follow-up, every engagement follows a defined path." (CI §11, P §8)
- **Primary interaction:** a compact scan-level six-node row (Discovery · Proposal · Design · Delivery · Evaluation · Follow-up) — names only, no per-stage detail (that lives on How We Work).
- **Secondary interaction:** row links to `/how-we-work`.
- **CTA:** `See the full process` → `/how-we-work`.
- **Visual treatment:** thin horizontal process rail with mono stage labels and accent step markers; deliberately lighter than the spine (this is a preview, not the engine).
- **Mobile behavior:** stages stack vertically as a numbered list; CTA full-width.
- **Approx. content length:** eyebrow + heading + 1 sentence + six stage names.
- **Source facts covered:** CI §11 (six-stage process — names only on Home); P §8.

### Section 9 — CLOSING / CONVERSION (ink band + brand line)
- **Purpose:** Convert. End the page with the primary action and the source brand line; no dead end. (`requirements.md` §14, CI §13)
- **Visitor question:** Can I talk to them?
- **Headline (≤8 words):** "Start a conversation with MindCraft."
- **Supporting copy (1 sentence):** "Tell us your challenge, industry or region — we'll respond with a focused point of view." (honest; no promise of metrics)
- **Brand line (mono/serif, source verbatim allowed):** "Building AI-powered growth for Life Sciences and industry across Africa and beyond." (CI §13, P closing)
- **Primary interaction:** primary CTA → `/contact`.
- **Secondary interaction:** secondary CTA → `/explore` ("Explore your market").
- **CTA:** `Start a Conversation` (primary) · `Explore your market` (secondary).
- **Visual treatment:** deliberate dark **ink band** (`--color-ink-bg`, `--color-on-ink-*`, accent emphasis) — one of the ≤1–2 ink bands allowed per page (`specs/19` §2). Serif headline, mono brand line, accent CTA.
- **Mobile behavior:** full-width ink band; headline scales down; CTAs stack full-width; brand line below.
- **Approx. content length:** heading + 1 sentence + one brand line + two CTAs.
- **Source facts covered:** CI §13 (contact intent, brand closing line); P §10, P closing.

> **Footer** (global, `specs/18`) follows: grouped links, Nairobi contact block, brand line, utility. Not counted as a homepage section.

---

## 8. Interactive elements / components used (from `specs/19`)
- `Hero`, `Eyebrow`, `SignatureLine`, `Button` (primary/secondary/ghost).
- `ValueChainSpine` (Section 1 — the engine; scan-level select/hover).
- `LifeSciencesFeature` band + mono sub-sector `Tag`s (Section 2).
- `GlanceStrip` / industry name strip (Section 3).
- `GeoModule` teaser (line-map of Africa, four-region motif; Section 4).
- Explorer teaser (three `Chip` slots + `×` operators; Section 5) → `Explorer` at `/explore`.
- `AudienceSelector` (`Chip`, link semantics; Section 6).
- `DifferentiatorList` (Section 7).
- `ProcessDiagram` preview rail (Section 8).
- Ink band + `BrandLine` + `Button` (Section 9).
All share: mono eyebrows/labels, hairline structure, accent for active/selected, line-based diagrams (SVG/CSS — no heavy libs), keyboard + `prefers-reduced-motion` support.

## 9. Progressive-disclosure mapping
- **SCAN (always visible):** hero, section headings, spine node labels, sub-sector names, industry names, region labels, differentiator lines, process stage names.
- **UNDERSTAND (always visible):** section 1–3 sentence intros; spine node one-liners revealed on select.
- **EXPLORE (leaves Home):** every section links to its canonical page (`/what-we-do`, `/industries`, `/industries/life-sciences`, `/where-we-work`, `/how-we-work`, `/explore`); audience chips route to destinations.
- **DETAIL / ENGAGE:** intentionally *not* on Home — no accordions, no country lists, no focus-area walls, no deliverables. Home only previews and links. Conversion CTA is present in hero and closing (and persistent header).

## 10. Content deliberately EXCLUDED (and why)
- **Pillar sub-capabilities & deliverables** — canonical home is pillar pages; Home shows one-line node teasers only (avoid dumping / duplication; `specs/01` §7).
- **Life Sciences focus areas (6 × ~5 items)** — reserved for the LS ecosystem to keep LS depth *on the LS page* and avoid a bullet wall (Failure B; `source-traceability.md`).
- **Full country lists (45)** — region-gated on `/where-we-work`; Home shows regions only (no country dump).
- **Vision / Mission / Values, founding narrative, team, partnerships** — canonical home is About; Home carries only the 2026/Nairobi facts in the hero eyebrow (depth in About, not dumped on Home; `source-traceability.md` A).
- **Per-stage process detail** — canonical home is How We Work; Home shows stage names only.
- **Expanded-vertical focus areas** — none exist in source; never fabricated (`specs/25` §5).
- **Any metric, client name, testimonial, logo, award, partner** — prohibited (`specs/25` §2).

## 11. Desktop behavior
- Sticky `Header` with wordmark, 6-item nav + persistent `Start a Conversation` CTA; hairline appears on scroll (`specs/19` §3.9, `specs/17`).
- Editorial 12-column grid; asymmetric splits (8/4, 7/5) used in hero, LS band, and Explorer teaser.
- Section rhythm `--space-10/11`; hairline top rules and mono section numbers separate sections (no boxing).
- Spine and geo map are horizontal; hover reveals node one-liners; scroll-reveal fade+translate ≤12px.
- Exactly one deliberate ink band (Section 9); optional second only if a differentiator statement is emphasized — keep ≤2 total (`specs/19` §2).

## 12. Mobile behavior (320–414px)
- Header collapses to hamburger → full-screen menu with the 6 items; CTA pinned (`specs/01` §8, `specs/17`).
- Single-column stack; section rhythm `--space-8/9`.
- Spine renders **vertically** (top→bottom) with tappable node rows; no hover dependency.
- Geo map degrades to four region chips + Nairobi anchor; industries strip becomes wrapped chips/horizontal scroll.
- Explorer teaser becomes a stacked stepper preview; audience chips become full-width rows.
- All CTAs full-width, 44px min; no horizontal overflow at 320px; no clipped text.

## 13. Internal links / relationship to other pages
- **Outbound:** `/what-we-do` (hero secondary, spine, process preview link chain), `/what-we-do/*` pillar pages (spine nodes, audience chips), `/industries` (breadth strip), `/industries/life-sciences` (LS band, audience chips), `/where-we-work` (geo band), `/how-we-work` (differentiators, process preview), `/explore` (Explorer teaser, closing secondary CTA), `/contact` (hero + closing primary CTA, header), `/about` (via differentiators/founding facts and footer).
- **Role:** Home is the hub; each section is a scan-level preview of one branch (`sitemap.md` "Page relationships"). No dead ends — closing section routes to Contact and Explore.

## 14. SEO metadata (source-accurate)
- **`<title>` (≤60):** `MindCraft Consultancy Services — Nairobi` (40 chars)
- **Meta description (150–160):** "MindCraft is a Nairobi-based consultancy combining market research, business consulting, AI training and enterprise AI, with deep Life Sciences expertise." (154 chars; source-accurate)
- **Single `<h1>`:** "Sector depth, meet applied AI." (hero headline; only H1 on the page)
- **Heading order:** H1 (hero) → H2 per section → H3 within (e.g., differentiator titles). No skipped levels (`specs/02` §9).
- **OG title:** "MindCraft Consultancy Services"
- **OG description:** "Nairobi-based consultancy: market research, business consulting, AI training and enterprise AI — with deep Life Sciences expertise and an African focus."
- **Keywords woven naturally:** Nairobi, Africa, Life Sciences, market research, AI. No stuffing. No fabricated schema (no fake ratings/reviews).

## 15. Conversion objective
Primary: drive `Start a Conversation` → `/contact` (hero + closing + persistent header). Secondary: move undecided visitors into depth via `/what-we-do`, `/industries/life-sciences`, or the `/explore` composer (each a real, non-decorative destination; `requirements.md` §14). Success = the visitor reaches a conversation or a relevant depth page within a few clicks, having understood the 5/15/30s ladder.

## 16. Acceptance criteria
- [ ] A first-time visitor can state what MindCraft does within 5s from the hero alone (name, four pillars, Life Sciences, Africa).
- [ ] The 15s / 30s / 1-min checkpoints (`requirements.md` §2) are each satisfiable by the sections mapped in §5.
- [ ] The four pillars appear as a **connected spine entered from a question/outcome**, not a card grid; the loop back to a new question is visible.
- [ ] Spine, geo map, and Explorer teaser are line-based (SVG/CSS) — no WebGL/particles/3D/AI decoration (`design-principles.md` Do-Not).
- [ ] Life Sciences is visibly **elevated** above the breadth industries strip (depth-vs-breadth asymmetry is apparent).
- [ ] No focus-area walls, country dumps, deliverables, vision/mission/team, or per-stage detail appear on Home (all deferred to canonical pages).
- [ ] Every section links to a real page; no decorative buttons; no dead ends.
- [ ] All quoted copy respects `specs/02` §3 limits (hero headline ≤9 words; supporting ≤24; section headings ≤8; card/one-liners ≤16; CTA ≤4).
- [ ] Zero fabricated content: no metrics, clients, testimonials, logos, awards, partners, or offices beyond Nairobi (`specs/25` §2); "proven"/numeric-result language absent.
- [ ] Exactly one `<h1>`; logical heading order; meta title ≤60; description 150–160 chars.
- [ ] Persistent header CTA present; hero and closing both offer `Start a Conversation`.
- [ ] Fully usable and overflow-free at 320px; spine vertical, maps degrade to chips, CTAs full-width 44px.
- [ ] `prefers-reduced-motion` honored (no transforms; instant state changes); interactive components keyboard-operable with visible focus.
- [ ] ≤2 ink bands total; whitespace/hairlines carry structure (no everything-in-a-card).
