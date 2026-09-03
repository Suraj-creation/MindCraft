# 05 — What We Do / Capabilities Overview (`/what-we-do`)

> Parents: `requirements.md` (§7 the engine, §1B value chain, §2 comprehension ladder), `design-principles.md`, `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: **"the engine"** — the organizing overview for the four pillars. Disclosure role: **UNDERSTAND + EXPLORE** (not DETAIL — pillar depth lives on the four pillar pages `specs/06–09`). This is the page where the `ValueChainSpine` becomes the page's structure (`specs/19` §3.12).
> All quoted copy is final and length-checked against `specs/02` §3. Citations reference `content-inventory.md` clusters (*CI §n*) and the Profile (*P §n*).

---

## 1. Route & meta
- **Route:** `/what-we-do`
- **Page title (browser):** `What We Do — MindCraft Capabilities` (≤60 chars)
- **Component file:** `src/pages/WhatWeDo.tsx`
- **Nav state:** "What We Do" active (parent of the four pillar sub-pages).

## 2. Objective / purpose
Present MindCraft's four capabilities **as one connected engine** — Market Research → Business Consulting → AI Enterprise Solutions → AI Training → measurable Impact (looping to the next question) — so a visitor understands both *what each pillar does* (one line) and *how they interlock*, then routes to a pillar page for depth or to `/explore` to compose their own situation. This page owns the engine narrative at EXPLORE level; it must never duplicate pillar-page DETAIL (18 capability groups + deliverables live on the pillar pages).

## 3. Primary visitor question(s)
- What can MindCraft actually do?
- Do the four capabilities connect, or is it four vendors? (owns the depth version of this)
- Where do I go for the capability I need? (routing to pillar pages)
- Can they help with *my* specific industry × region × capability? (route to `/explore`)

## 4. Primary audience
CEOs/Managing Directors entering "the engine" (best first destination, `requirements.md` §13), plus any leader who knows they need one capability but should see how it connects: strategy leaders (Business Consulting), commercial leaders (Market Research + AI Enterprise), CIOs/CTOs (AI Enterprise), HR/L&D leaders (AI Training).

## 5. What the visitor should understand (by scan / 1 min)
- **Scan:** MindCraft delivers four integrated capabilities, and they form a single value chain from market question to measurable impact.
- **1 min:** What each pillar does in one line; that entry can happen at any node and most engagements combine two or more; a concrete example arc of how they connect; and where to go next (a pillar page or the Explorer).

---

## 6. Hero
- **Eyebrow (mono):** `WHAT WE DO · FOUR INTEGRATED CAPABILITIES` (CI §7, P §4)
- **Headline (Fraunces, ≤9 words):** **"One engine, from question to impact."** (6 words — the engine idea, `requirements.md` §7)
- **Supporting line (≤24 words):** "Market research, business consulting, AI enterprise solutions and AI training work as one connected value chain — not four disconnected vendors." (20 words; CI §7, P §4)
- **Primary CTA:** `Start a Conversation` → `/contact`
- **Secondary CTA:** `Open the Explorer` → `/explore`

---

## 7. Section sequence

### Section 1 — THE ENGINE (value-chain spine, full expression)
- **Purpose:** The page's organizing structure — the `ValueChainSpine` at EXPLORE level, each node a one-line capability that links to its pillar page. Owns the "do they connect?" depth. (`requirements.md` §7; `specs/19` §3.12)
- **Section number / eyebrow (mono):** `01 — THE VALUE CHAIN`
- **Heading (≤8 words):** "How the four capabilities connect."
- **Supporting copy (1–3 sentences):** "A market question moves through research, strategy, AI implementation and training, then loops back as measurable impact. Enter at any point — most engagements combine two or more pillars." (CI §7, P §4 — honest: any entry point)
- **Primary interaction:** `ValueChainSpine` — nodes with one-line description each (≤16 words) and a "Go to pillar" link. Node copy:
  - **A market question** — "Every engagement starts with a real decision to be made." (framing node; no link)
  - **Market Research** — "Turn market complexity into decision-ready intelligence." → `/what-we-do/market-research`
  - **Business Consulting** — "Turn intelligence into a strategy and a plan." → `/what-we-do/business-consulting`
  - **AI Enterprise Solutions** — "Operationalize the plan into working systems." → `/what-we-do/ai-enterprise-solutions`
  - **AI Training** — "Embed capability so adoption sticks." → `/what-we-do/ai-training`
  - **Measurable impact** — "Results inform the next question — the loop." (framing node; no link)
- **Secondary interaction:** selecting a node highlights it and reveals its one-liner + pillar link (no route change until the link is clicked).
- **CTA:** each node → its pillar page; section-end secondary `Open the Explorer` → `/explore`.
- **Visual treatment:** horizontal hairline spine (desktop) with mono node labels, accent-600 markers, and a loop arrow from Impact back to the market question; line-based SVG/CSS (no heavy libs). This is the same component as Home Section 1 but at fuller (EXPLORE) fidelity — node links exposed, richer selected state.
- **Mobile behavior:** vertical spine (top→bottom); tappable node rows expand to show the one-liner + "Go to pillar →"; loop shown by a returning connector.
- **Approx. content length:** eyebrow + heading + ≤3-sentence intro + six ≤16-word node lines.
- **Source facts covered:** CI §7 (four integrated pillars; multi-pillar engagements; example arc); P §4; engine model (`requirements.md` §7).

### Section 2 — MARKET RESEARCH (pillar summary, one line + scope teaser)
- **Purpose:** One-line summary of the "understand" pillar with a scope teaser (names of its groups only) and a link to depth. First node of the chain (research informs everything).
- **Section number / eyebrow (mono):** `02 — UNDERSTAND · MARKET RESEARCH`
- **Heading (≤5 words, pillar name):** "Market Research"
- **One-line summary (≤16 words):** "Rigorous primary and secondary research that turns market complexity into decision-ready intelligence." (CI §7b positioning; P §4 Pillar 2)
- **Scope teaser (group names only, not detail):** "Primary research · Secondary & desk research · Program & impact research · Data, analytics & knowledge products." (CI §7b — names only; full accordions on the pillar page)
- **Interaction:** static teaser; heading/CTA link to the pillar page. **CTA:** `Explore Market Research` → `/what-we-do/market-research`.
- **Visual treatment:** editorial pillar row — mono chain-position label ("understand"), serif pillar name, one-liner, mono group-name list, hairline separator. Not a floating card.
- **Source facts covered:** CI §7b (positioning + four group names); P §4 Pillar 2. No deliverables/detail (those live on the pillar page).

### Section 3 — BUSINESS CONSULTING (pillar summary)
- **Purpose:** One-line summary of the "decide" pillar + scope teaser + link.
- **Section number / eyebrow (mono):** `03 — DECIDE · BUSINESS CONSULTING`
- **Heading:** "Business Consulting"
- **One-line summary (≤16 words):** "Strategic and management advisory that helps organizations decide, restructure for growth and execute change." (CI §7a positioning; P §4 Pillar 1)
- **Scope teaser (group names only):** "Corporate & business strategy · Digital & AI transformation · Organizational design & change · Process & systems · Policy & regulatory advisory." (CI §7a — names only)
- **Interaction:** static; heading/CTA link to pillar page. **CTA:** `Explore Business Consulting` → `/what-we-do/business-consulting`.
- **Visual treatment:** editorial pillar row (mono position label "decide"); consistent with Section 2.
- **Source facts covered:** CI §7a (positioning + five group names); P §4 Pillar 1.

### Section 4 — AI ENTERPRISE SOLUTIONS (pillar summary)
- **Purpose:** One-line summary of the "implement" pillar + scope teaser + link; note the Life Sciences–specific AI cross-link.
- **Section number / eyebrow (mono):** `04 — IMPLEMENT · AI ENTERPRISE SOLUTIONS`
- **Heading:** "AI Enterprise Solutions"
- **One-line summary (≤16 words):** "End-to-end design and build of AI systems that turn insight into everyday workflows." (CI §7d positioning; P §4 Pillar 4)
- **Scope teaser (group names only):** "AI strategy & architecture · Custom AI & analytics · Conversational AI · Process automation · Life Sciences–specific AI." (CI §7d — names only)
- **Interaction:** static; heading/CTA link to pillar page; "Life Sciences–specific AI" also cross-links to `/industries/life-sciences`. **CTA:** `Explore AI Enterprise Solutions` → `/what-we-do/ai-enterprise-solutions`.
- **Visual treatment:** editorial pillar row (mono position label "implement").
- **Source facts covered:** CI §7d (positioning + five group names incl. LS-specific AI); P §4 Pillar 4.

### Section 5 — AI TRAINING & DIGITAL LITERACY (pillar summary)
- **Purpose:** One-line summary of the "embed" pillar + scope teaser + link.
- **Section number / eyebrow (mono):** `05 — EMBED · AI TRAINING & DIGITAL LITERACY`
- **Heading:** "AI Training & Digital Literacy"
- **One-line summary (≤16 words):** "Practical, hands-on AI capability-building that creates internal champions, not just awareness." (CI §7c positioning; P §4 Pillar 3)
- **Scope teaser (group names only):** "AI foundations & executive briefings · Applied, function-specific training · Responsible & governed AI · Capability multiplication." (CI §7c — names only)
- **Interaction:** static; heading/CTA link to pillar page. **CTA:** `Explore AI Training` → `/what-we-do/ai-training`.
- **Visual treatment:** editorial pillar row (mono position label "embed").
- **Source facts covered:** CI §7c (positioning + four group names); P §4 Pillar 3. (Delivery formats + deliverables live on the pillar page.)

### Section 6 — HOW THEY CONNECT (the impact loop, an example arc)
- **Purpose:** Make the interconnection concrete and honest — a real example arc + the loop back to impact — reinforcing "one engine, not four vendors." (`requirements.md` §7, CI §7)
- **Section number / eyebrow (mono):** `06 — THE IMPACT LOOP`
- **Heading (≤8 words):** "From one question to lasting impact."
- **Supporting copy (1–3 sentences, example arc):** "A market research assignment can inform a business strategy, which is operationalized through an AI enterprise solution and embedded through an AI training program. The impact then shapes the next question." (source example arc, verbatim substance; CI §7, P §4)
- **Interaction:** a compact loop diagram (reuses spine markers) showing research → strategy → AI → training → impact → next question; static or subtle scroll-reveal. Honest note (mono caption): "Entry can happen at any node — engaging a single pillar is common."
- **CTA:** `Open the Explorer` → `/explore` (compose your own arc) + `See how we work` → `/how-we-work` (process).
- **Visual treatment:** hairline loop diagram with accent nodes; asymmetric editorial layout (diagram + mono annotation). No decoration.
- **Source facts covered:** CI §7 (example arc; multi-pillar engagements; loop to impact); P §4.

### Section 7 — CLOSING / CONVERSION (ink band)
- **Purpose:** Convert; route to a conversation or the Explorer; no dead end.
- **Heading (≤8 words):** "Compose the engagement you need."
- **Copy (1 sentence):** "Start a conversation, or compose your industry, region and capability in the Explorer." (honest)
- **Interaction:** primary CTA → `/contact`; secondary → `/explore`. **CTA:** `Start a Conversation` · `Open the Explorer`.
- **Visual treatment:** deliberate **ink band** (`--color-ink-bg`, on-ink text, accent CTA) — the one ink band on this page.
- **Source facts covered:** CI §13 (contact intent); composition model (`requirements.md` §10). No fabrication.

> **Footer** (global, `specs/18`) follows.

---

## 8. Interactive elements / components used (from `specs/19`)
- `Hero`, `Eyebrow`, `Button`.
- `ValueChainSpine` (Section 1 — full/EXPLORE expression with node links; the page's organizing structure).
- Four editorial **pillar summary rows** (Sections 2–5) — reuse `Card` only if flat/hairline is preferred, but editorial rows with hairline separators are the default (avoid everything-in-a-card).
- Impact-loop diagram (Section 6 — reuses spine markers, line-based SVG/CSS).
- Ink band + `Button` (Section 7).
Shared: mono eyebrows/labels, hairline structure, accent for active/selected, line diagrams (no heavy libs), keyboard + `prefers-reduced-motion` support.

## 9. Progressive-disclosure mapping
- **SCAN:** hero, section headings, pillar names, one-line summaries, spine node labels.
- **UNDERSTAND (always visible):** engine intro, per-pillar one-liners, the example arc.
- **EXPLORE (this page's ceiling):** spine node selection reveals one-liner + pillar link; scope teasers list group *names*; the Explorer teaser routes to `/explore`.
- **DETAIL (deliberately NOT here):** the 18 capability groups' contents, deliverables ("What you receive"), delivery formats — all live on the four pillar pages (`specs/06–09`). This page shows group *names* only.
- **ENGAGE:** hero + closing CTAs, per-pillar CTAs, persistent header.

## 10. Content deliberately EXCLUDED (and why)
- **Full pillar sub-capability contents (18 groups)** — canonical home is the pillar pages via accordions; this overview would become DETAIL and duplicate them (`specs/01` §7; Failure B).
- **Deliverables / "What you receive" panels** — pillar-page only (easy-to-drop facts kept on their canonical page; `source-traceability.md` Failure-A watchlist).
- **AI Training delivery formats & responsible-AI detail** — pillar-page (must not be collapsed here; `source-traceability.md`).
- **Life Sciences focus areas, country lists, process stage detail, differentiators depth** — owned by their canonical pages; referenced by name/link only.
- **Any metric, client, testimonial, "deployed," "proven," numeric result** — prohibited (`specs/25` §2). Deliverables, when they appear on pillar pages, are phrased as offerings, not results (`specs/25` §2).

## 11. Desktop behavior
- Sticky `Header` + persistent CTA; "What We Do" dropdown lists the four pillar pages (`specs/17`).
- Horizontal `ValueChainSpine` as the page's spine; four pillar summary sections ordered by chain position (Understand → Decide → Implement → Embed) — note this ordering *narrates the chain*, so Market Research precedes Business Consulting on this page even though nav may list pillars differently.
- Editorial grid with hairline separators and mono chain-position labels; section rhythm `--space-10/11`.
- One deliberate ink band (closing). Scroll-reveal fade+translate ≤12px.

## 12. Mobile behavior (320–414px)
- Header → hamburger full-screen menu with nested pillar items; CTA pinned.
- Spine renders **vertically**; nodes tappable, expand to one-liner + pillar link.
- Pillar summary sections stack; group-name teasers wrap; each CTA full-width 44px.
- Impact-loop diagram degrades to a vertical numbered sequence with a returning connector.
- No horizontal overflow at 320px.

## 13. Internal links / relationship to other pages
- **Outbound:** the four pillar pages `/what-we-do/business-consulting`, `/what-we-do/market-research`, `/what-we-do/ai-training`, `/what-we-do/ai-enterprise-solutions` (spine nodes + pillar CTAs); `/industries/life-sciences` (LS-specific AI cross-link, Section 4); `/explore` (hero secondary, Sections 6–7); `/how-we-work` (Section 6); `/contact` (hero + closing + header).
- **Inbound (typical):** Home spine + hero secondary; header nav; pillar pages link back to this overview and to adjacent pillars (`specs/01` §5).
- **Role:** engine → depth → composition → process (`sitemap.md` relationships). No dead ends.

## 14. SEO metadata (source-accurate)
- **`<title>` (≤60):** `What We Do — MindCraft Capabilities` (35 chars)
- **Meta description (150–160):** "MindCraft's four capabilities — market research, business consulting, AI enterprise solutions and AI training — connect as one integrated value chain." (150 chars)
- **Single `<h1>`:** "One engine, from question to impact." (hero headline)
- **Heading order:** H1 (hero) → H2 per section → H3 for pillar names within sections if nested. No skipped levels.
- **OG title:** "What We Do — MindCraft Consultancy"
- **OG description:** "Four integrated capabilities working as one engine: understand the market, decide the strategy, implement with AI, embed capability, create impact."
- Acronyms expanded on first use where non-obvious per page context (KOL/MEL/RPA appear only on pillar pages). No fabricated schema.

## 15. Conversion objective
Move visitors from "what can they do?" to either (a) a conversation (`/contact`), or (b) the right depth — a pillar page or the `/explore` composer. Every pillar row and both the hero and closing offer a real next step. Success = the visitor grasps the connected engine at UNDERSTAND level and self-routes to a pillar page or the Explorer, or starts a conversation.

## 16. Acceptance criteria
- [ ] The four pillars are presented **as a connected engine** (spine + impact loop), not a card grid; entry-at-any-node and the loop are explicit.
- [ ] Chain order narrated as **Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact**, with a concrete example arc (`requirements.md` §7).
- [ ] Each pillar has a **one-line summary + group-name teaser + link** to its pillar page; **no pillar DETAIL** (18 groups' contents, deliverables, formats) appears here.
- [ ] The page stays at **UNDERSTAND + EXPLORE** — nothing here duplicates pillar-page accordions (`specs/01` §7; Failure B avoided).
- [ ] Life Sciences–specific AI is surfaced under AI Enterprise and **cross-links** to `/industries/life-sciences` (`source-traceability.md` C).
- [ ] Spine and loop are **line-based (SVG/CSS)** — no WebGL/particles/3D/AI decoration.
- [ ] All copy within `specs/02` §3 limits (hero headline ≤9; supporting ≤24; headings ≤8; one-liners ≤16; CTA ≤4).
- [ ] Zero fabrication: no metrics, clients, testimonials, "deployed"/"proven" language; deliverables not shown here (and, on pillar pages, phrased as offerings) (`specs/25` §2).
- [ ] Exactly one `<h1>`; logical heading order; meta title ≤60; description 150–160 chars.
- [ ] Every pillar row, the hero, and the closing route somewhere real; no dead ends; persistent header CTA present.
- [ ] Fully usable and overflow-free at 320px; spine vertical, loop degrades to a numbered sequence, CTAs full-width 44px.
- [ ] `prefers-reduced-motion` honored; spine/loop keyboard-operable with visible focus; ≤2 ink bands (one used).
