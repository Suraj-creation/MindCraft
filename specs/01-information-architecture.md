# 01 — Information Architecture

> Parent: `requirements.md` (§5 mind map, §6 page architecture, §7 the engine). At-a-glance: `sitemap.md`. This file gives the *rationale and rules* behind the IA so page specs stay consistent.

## 1. Organizing principle
The site is organized as **one integrated engine, filtered by three dimensions, wrapped in trust & action.**

- **Engine (what we do):** Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact (loops). This is the spine.
- **Three dimensions (how an engagement is scoped):** Industry (with Life Sciences deepest), Geography (Africa-primary), Audience.
- **Trust & action (why & how to engage):** About, How We Work, Contact — plus the Explorer as the interactive composition of engine × dimensions.

This beats a WHAT/WHERE/WHO directory because it foregrounds *integration* and *outcomes*, which is MindCraft's core differentiator, instead of presenting four disconnected capability cards.

## 2. Page inventory & justification
See `requirements.md` §6 for the table. Justification per grouping:

- **Home** — the hub; owns the comprehension ladder (5–30s). Previews every branch; commits to nothing heavy.
- **What We Do** (overview + 4 pillar pages) — pillars need real depth (18 capability groups + deliverables) and are searched individually, so each earns a page; the overview keeps them connected via the spine.
- **Industries** (overview + Life Sciences) — deliberate depth/breadth split. LS earns a dedicated deep page; ~19 other verticals share one explorer (avoids 19 thin pages / false depth).
- **Where We Work** — geography is a strategic differentiator, not a footer address; earns a page with an interactive regional model.
- **How We Work** — process + delivery + differentiators + who-we-serve belong together as "the engagement," avoiding four thin pages.
- **About** — identity/vision/mission/values/heritage/team/partnerships; the trust page for a 2026 firm.
- **Contact** — the conversion endpoint.
- **Explore** — signature interactive layer; not in primary nav to keep nav lean, but surfaced contextually and deep-linkable.

## 3. Navigation model
- **Primary (6 + CTA):** Home · What We Do · Industries · Where We Work · How We Work · About · **[Start a Conversation]**. (Full behavior: `/specs/17`.)
- **What We Do** and **Industries** are the only items with sub-pages; expose them via a lightweight dropdown/mega-panel on desktop and nested items on mobile.
- **Explore** appears as a contextual entry on Home, What We Do, Industries, Where We Work — never orphaned.
- No splash/intro screen. Home is the entry (hard rule).

## 4. Depth model (progressive disclosure across the IA)
```
SCAN (Home, section intros)
  → UNDERSTAND (overview pages)
    → EXPLORE (grids, selectors, spine nodes, Explorer)
      → DETAIL (accordions, panels, drawers, deep pages)
        → ENGAGE (contextual + global Contact)
```
Each route is tagged with its disclosure role in `sitemap.md`. No layer is allowed to be equally verbose (content-length system, `/specs/02`).

## 5. Cross-linking rules
- Every capability page links to its **neighbors in the chain** (to show interconnection) and to **Life Sciences** (sector relevance) and **Contact**.
- Life Sciences links to **AI Enterprise** (LS-specific AI), **Market Research**, **Where We Work**, **Contact**.
- Every overview page offers an entry to **Explore**.
- Every page has at least one contextual **Start a Conversation** CTA in addition to the header CTA.
- No dead ends: the last section of every page routes somewhere meaningful.

## 6. URL & state conventions
- Clean, lowercase, hyphenated paths exactly as `sitemap.md`.
- Explorer state is URL-encoded (e.g., `/explore?industry=pharmaceuticals&geo=kenya&capability=market-research`) so selections are shareable, refresh-safe, and deep-linkable (`/specs/13`, `/specs/17`).
- Deep links to a specific pillar/industry/region open that item's disclosure state where feasible (e.g., `/industries/life-sciences#pharmaceuticals`).
- Back/forward and refresh never lose the user or break state.

## 7. Content ownership (single source, no duplication)
To avoid the "visually repetitive / repeated information" failure, each fact has **one canonical home** and is *referenced* (linked/teased) elsewhere, not re-stated in full:

| Fact family | Canonical home | Referenced (teaser/link) on |
|---|---|---|
| Pillar sub-capabilities & deliverables | pillar pages | What We Do (one-line each), Explorer output |
| LS sub-sectors & focus areas | Life Sciences | Home LS band (names only), Industries (link), Explorer |
| Country lists | Where We Work | Explorer (geo filter), footer (regions only) |
| Differentiators | How We Work | Home (scan version) |
| Engagement process | How We Work | Home (preview), pillar pages (link) |
| Target clients | How We Work | Home (audience paths) |
| Vision/Mission/Values | About | — |
| Contact details | Contact | footer (compact) |

## 8. Mobile IA notes
- Primary nav collapses to a full-screen menu; sub-pages nested; CTA pinned.
- The spine renders vertically (top→bottom) on mobile.
- Explorer becomes a stacked stepper (Industry → Geography → Capability → Result) instead of side-by-side selectors.
- Maps/selectors become tappable lists/region chips (no reliance on hover). Detail is `select→panel` (bottom sheet/drawer).

## 9. IA acceptance criteria
- A first-time visitor can answer "what does MindCraft do?" from Home within 5s (ladder, `requirements.md` §2).
- Every source fact resolves to exactly one canonical page (§7).
- No page duplicates another page's full content.
- Life Sciences is reachable in ≤2 clicks and is visibly deeper than any other industry.
- The four-pillar interconnection is expressed structurally (spine), not just stated.
- No orphan pages; Explore is always reachable contextually.
