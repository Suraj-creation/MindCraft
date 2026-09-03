# MindCraft — Sitemap

> The final page architecture. Rationale in `/specs/01-information-architecture.md`; per-page specs in `/specs/03–16`. Routing/nav behavior in `/specs/17`.

## Route tree

```
/                                   Home
│
├── /what-we-do                     Capabilities overview — "the engine"
│   ├── /what-we-do/business-consulting
│   ├── /what-we-do/market-research
│   ├── /what-we-do/ai-training
│   └── /what-we-do/ai-enterprise-solutions
│
├── /industries                     Industries overview (Life Sciences prominent + broader explorer)
│   └── /industries/life-sciences   Life Sciences — DEEP, dedicated
│
├── /where-we-work                  Geography — Africa (primary) · Europe · United States
│
├── /how-we-work                    Engagement process · delivery modalities · differentiators · who we serve
│
├── /about                          Identity · vision · mission · values · heritage · team · partnerships
│
├── /contact                        Start a conversation (primary conversion)
│
├── /explore                        SIGNATURE: Industry × Geography × Capability Explorer
│
└── (utility, required-future — DO NOT fabricate content)
    ├── /privacy
    └── /terms
```

## Primary navigation (header)
`Home · What We Do · Industries · Where We Work · How We Work · About` + persistent CTA **`Start a Conversation`** (→ `/contact`).

- "Explore" is **not** a top-level nav item; it is surfaced contextually from Home, What We Do, and Industries (keeps nav to 6 + CTA). Reachable directly at `/explore` and deep-linkable with state.
- On mobile: hamburger → full-screen menu with the same items, CTA pinned.

## Footer navigation
Grouped (full spec `/specs/18`): **Capabilities** (4 pillars) · **Industries** (Life Sciences + "All industries" → `/industries`) · **Geography** (Africa/Europe/US → `/where-we-work`) · **Company** (About, How We Work, Contact) · **Contact block** (Nairobi; info@mindcraftconsultancy.com; www.mindcraftconsultancy.com) · **Utility** (Privacy, Terms — marked future).

## Page relationships (cross-links)

| From | Links to | Why |
|---|---|---|
| Home | every top-level page + `/explore` | Home is the hub; each section previews a page |
| What We Do (overview) | 4 pillar pages + `/explore` + `/how-we-work` | engine → depth → composition → process |
| Each pillar page | adjacent pillars (chain) + Industries (Life Sciences) + `/contact` | show interconnection + sector relevance + convert |
| Industries overview | `/industries/life-sciences` + `/explore` + relevant pillars | breadth → depth → composition |
| Life Sciences | AI Enterprise (LS-specific AI) + Market Research + `/where-we-work` + `/contact` | depth ties back to capabilities & geography |
| Where We Work | `/explore` + Industries + `/contact` | reach → composition → convert |
| How We Work | `/contact` + What We Do | process → engage |
| About | `/how-we-work` + `/contact` | trust → engage |
| Explorer output | `/contact` (pre-scoped) + relevant pillar/industry/geography pages | compose → engage or go deeper |

## Depth / disclosure per route

| Route | Disclosure role |
|---|---|
| `/` | SCAN + UNDERSTAND (previews everything; owns the 5–30s ladder) |
| `/what-we-do` | UNDERSTAND + EXPLORE (the engine, entry to depth) |
| pillar pages | DETAIL (full sub-capabilities + deliverables via accordions) |
| `/industries` | EXPLORE (breadth grid + panels) |
| `/industries/life-sciences` | DETAIL (deep ecosystem) |
| `/where-we-work` | EXPLORE + DETAIL (regional selector → countries) |
| `/how-we-work` | UNDERSTAND + DETAIL (process diagram + panels) |
| `/about` | UNDERSTAND (editorial narrative) |
| `/explore` | EXPLORE → DETAIL → ENGAGE (the composition tool) |
| `/contact` | ENGAGE |

## Excluded by design (and why)
- **Per-pillar micro-pages beyond the 4** — sub-capabilities live *inside* pillar pages via disclosure.
- **Per-industry pages for the ~20 broader verticals** — handled by the Industries explorer + Explorer; avoids sprawl and false depth.
- **Per-persona pages** — replaced by lightweight audience self-select (`requirements.md` §13).
- **A separate "Team"/"Partnerships"/"Clients"/"Deliverables" page** — folded into About / How We Work / pillar pages respectively (avoids thin pages; keeps facts contextual).
- **A splash/intro screen** — banned (`design-principles.md`); Home *is* the entry.
