# MindCraft — Design Principles

> The non-negotiable philosophy for the MindCraft website. Every visual, copy, and interaction decision is measured against this file. Detailed tokens live in `/specs/19-design-system.md`; this file is the *why* and the *guardrails*.

## The one-line design brief
> **An editorial intelligence report you can navigate** — a serious African consultancy with Life Sciences depth, communicated through typography, whitespace, structure and restraint; never through AI-startup decoration.

## The feeling to produce
intelligence · credibility · strategic depth · African context · sophistication · precision · restraint · confidence · modernity.

## Hard constraints (design philosophy as rules)

```
CLARITY              >  INFORMATION DENSITY
HIERARCHY            >  DECORATION
MEANING              >  EFFECTS
SPACING              >  CONTENT FILL
PROGRESSIVE DISCLOSURE > WALLS OF TEXT
INTERACTION WITH PURPOSE > INTERACTION FOR SHOW
BUSINESS VALUE       >  AI GIMMICKS
CREDIBILITY          >  FABRICATION
DISTINCTIVE IDENTITY >  GENERIC AI AESTHETICS
MOBILE QUALITY       =  DESKTOP QUALITY
LIFE SCIENCES DEPTH  +  CROSS-INDUSTRY BREADTH
AFRICAN CONTEXT      +  GLOBAL STANDARD
```

## The chosen visual language: "Editorial intelligence report"

Inspired by premium strategy/research publishing and institutional intelligence platforms — **not** SaaS landing pages.

- **Typography does the heavy lifting.** A refined display serif for editorial voice; a clean grotesk for UI/body; a mono for labels, data and coordinates. Strong type scale contrast creates hierarchy so we don't need decoration. (Fonts & scale: `/specs/19`.)
- **Whitespace is structural**, not leftover. Generous margins; sections separated by space and hairline rules, not by boxing everything in cards.
- **Asymmetric editorial grids** where they add meaning (e.g., a wide statement beside a narrow annotation). Not everything centered.
- **Hairline rules & thin borders** instead of drop-shadowed floating cards. Reserve the "card" for genuinely enumerable objects (pillars, sub-sectors), and even then keep them flat with rules, minimal radius.
- **Restrained data-visualization & diagrams that mean something** — the value-chain spine, the Life Sciences ecosystem, the four-region geography, the Explorer. Every diagram encodes a real relationship.
- **Cartographic restraint for Africa** — line/coordinate motifs are welcome as a subtle system accent, never as neon décor.
- **Near-monochrome + one deliberate accent.** Warm paper, ink text, a single earthen accent used sparingly for emphasis, active states, and key structural numbers. (Palette: `/specs/19`.)
- **Controlled motion.** Motion clarifies (reveal on scroll, panel transitions, node emphasis), never performs. 150–400ms, ease-out; always honors `prefers-reduced-motion`.

## The "Do" list
- Lead every section with the essential; hide depth behind interaction.
- Use real, source-supported structural facts (4 pillars, 6 sub-sectors, 4 regions, 6-stage process, 5 differentiators) where a SaaS site would show fake metrics.
- Make Life Sciences visibly deeper than any other industry.
- Make the four pillars read as a connected engine, entered from a question/outcome.
- Give every button a real destination or action.
- Design mobile as a first-class layout, not a squeeze of desktop.
- Keep copy sharp, confident, memorable; sentences earn their place (governance rule, `requirements.md` §11).

## The "Do NOT" list (anti-patterns — brief §16, §40)

**AI-slop aesthetics — banned:**
- glowing purple/blue gradients everywhere
- giant abstract "AI brains," robots, humanoids
- floating particles / meaningless data streams / matrix rain
- excessive glassmorphism, neon, glowing spheres
- gratuitous 3D / WebGL for decoration
- endless rounded cards; every section floating inside a card
- meaningless animated dashboards / fake charts
- generic "AI-powered future / unlock the power of AI" copy

**Content anti-patterns — banned:**
- walls of text / giant paragraphs; digitizing the PDF verbatim
- the same information repeated across sections
- unnecessary pages; per-persona or per-industry page sprawl
- decorative buttons; fake "Learn more" / "Explore" that go nowhere
- dead-end navigation; a splash/starter screen disconnected from the real site

**Integrity anti-patterns — banned (see `/specs/25`):**
- fabricated clients, logos, testimonials, case studies
- invented statistics, metrics, percentages, revenue, headcount
- fake awards, certifications, partnerships, years of experience
- claimed offices beyond Nairobi HQ; "deployed" systems presented as track record

**Quality anti-patterns — banned:**
- desktop-only design; responsive as an afterthought
- heavy effects that hurt performance
- interaction added for novelty rather than to solve information density
- visually impressive but strategically meaningless elements

## The credibility model for a 2026 firm
MindCraft is new. We never pretend otherwise. Credibility is built from **clarity + specialization + methodology + professionalism + domain understanding** — the site should feel like it was made by people who *obviously* know Life Sciences, African markets, and applied AI. Confidence without exaggeration.

## Decision test (apply to any element before shipping it)
1. Does it help the visitor understand MindCraft, or move toward engagement? If no → cut.
2. Is it the *least* amount of visible content that still communicates? If no → simplify.
3. Would a serious consultancy's clients respect it, or does it read as a template? If template → redesign.
4. Is it honest and source-supported? If no → remove or fix.
5. Does it work as well at 320px as at 1440px? If no → not done.
