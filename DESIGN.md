# MindCraft — Design Skills Invocation Guide

> This file tells Claude Code **which design skills to invoke** for which tasks, and provides a quick-reference of MindCraft design tokens. Read `CLAUDE.md` for the full design system. Read `specs/19-design-system.md` for implementation-grade tokens.
>
> **Design Skills Available:** Taste (`design-taste-frontend`, `gpt-taste`), Emil (`emil-design-eng`, `apple-design`, `animate`), Impeccable (`impeccable`), High-end (`high-end-visual-design`), UI/UX Pro Max (`ui-ux-pro-max`), Motion (`design-motion-principles`, `improve-animations`), Audit (`audit`, `web-design-guidelines`), Accessibility (`chrome-devtools-mcp:a11y-debugging`).
>
> **MCPs Available:** `21st-dev` (component inspiration/search), `motionsites` (motion inspiration — requires auth), `chrome-devtools-mcp` (browser inspection/QA), `headroom` (context compression).

---

## When to invoke design skills

### Building or modifying UI (any component, page, or layout)

**Always start with:**
```
/impeccable craft [description]
```
This enforces: non-reflex font selection, anti-AI-slop patterns, editorial quality. Reads `.impeccable.md` for MindCraft context automatically.

**Before starting any creative or UI work:**
```
/brainstorming
```
Explores user intent and design requirements before implementation.

**For anti-slop audit during build:**
```
/design-taste-frontend
```
Catches AI-monoculture defaults (wrong fonts, wrong color patterns, card-grid overuse).

**For final visual quality pass:**
```
/high-end-visual-design
/polish
```

---

### Typography decisions

**Invoke when:** choosing fonts, setting scale, fixing hierarchy, adjusting line-height or tracking.
```
/typeset
```
**MindCraft type system (DO NOT deviate without good reason):**
- Display/headings: **Bricolage Grotesque** (variable, 300–800 wght)
- Body/reading: **Literata** (variable, serif, 300–600 wght)
- Mono/labels/data: **Spline Sans Mono** (400/500 only)
- Banned fonts: Inter, Fraunces, Cormorant, DM Sans, Playfair, Space Mono, IBM Plex, Instrument (all AI monoculture defaults)

---

### Color decisions

**Invoke when:** adding a new color, checking contrast, adjusting palette.
```
/colorize
```

**MindCraft palette (OKLCH — do not use hex or HSL):**
```
--paper:       oklch(0.972 0.008 72)   /* page floor */
--paper-2:     oklch(0.945 0.012 68)   /* alt surface */
--ink:         oklch(0.235 0.014 55)   /* primary text */
--ink-strong:  oklch(0.175 0.016 52)   /* headlines */
--ink-2:       oklch(0.44 0.012 55)    /* secondary text */
--ink-3:       oklch(0.60 0.010 58)    /* muted */
--line:        oklch(0.885 0.012 66)   /* hairlines */
--accent:      oklch(0.555 0.132 44)   /* terracotta — SCARCE */
--accent-2:    oklch(0.50 0.138 42)    /* hover */
--ink-bg:      oklch(0.235 0.018 55)   /* dark band */
--on-ink:      oklch(0.95 0.010 76)    /* text on dark */
--on-ink-2:    oklch(0.74 0.012 72)    /* secondary on dark */
```
No fourth color tone. No purple/blue/neon. Accent = terracotta only, used sparingly.

---

### Animation and motion

**Invoke when:** adding any transition, scroll reveal, panel open, state change, or cursor effect.
```
/animate        — build an animation from scratch
/emil-design-eng — apply Emil's polish principles to micro-interactions
/design-motion-principles — audit motion against Emil/Jakub/Jhey standards
/improve-animations — audit all existing motion in the codebase
```

**MindCraft motion tokens:**
```
--dur-fast: 150ms   /* hover, focus */
--dur:      240ms   /* panel, node select */
--dur-slow: 400ms   /* drawer, reveal */
--ease-q:   cubic-bezier(.16,1,.3,1)  /* quint-out — default */
--ease-out: cubic-bezier(.2,.8,.2,1)
```

**Motion rules:**
- Animate `opacity` and `transform` only — never width/height/padding/margin
- Use `grid-template-rows: 0fr → 1fr` for height transitions (not `height`)
- `prefers-reduced-motion: reduce` → disable all transforms, instant state changes
- Scroll-reveal gated on `.js` class (JS-progressive-enhancement, not forced)
- No bounce/elastic easing. No parallax. No particles. No cursor effects.

**Reference motionsites.ai** for motion inspiration when working on complex interactions. (Auth token required — ask user to provide via motionsites dashboard.)

---

### Component design and inspiration

**Use 21st-dev MCP for component inspiration:**
```
Search: 21st-dev MCP → search for "timeline component" / "accordion" / "selector"
```
Then adapt to MindCraft's editorial language (no rounded SaaS components — apply `--radius-1: 3px`, hairline borders, flat surfaces).

**Key constraint:** 21st-dev components are inspiration only. Every component must pass the MindCraft anti-slop checklist before shipping.

---

### Layout and spacing

**Invoke when:** layout feels off, grid seems wrong, spacing inconsistent.
```
/arrange    — layout, spacing, visual rhythm
/layout     — same (alias)
```

**MindCraft layout rules:**
- Default container: max-width 1200px, gutter `clamp(20px, 5vw, 64px)`
- 12-column grid, `gap: 24px` desktop / `16px` mobile
- Sections: `padding-block: clamp(64px, 9vw, 128px)`
- Not everything centered — editorial asymmetry where meaningful
- NOT everything in a card — match visual form to information type (see CLAUDE.md §7)

---

### Accessibility

**Always check before shipping any component:**
```
/audit                              — comprehensive a11y + quality audit
/chrome-devtools-mcp:a11y-debugging — live browser a11y inspection
/web-design-guidelines             — WCAG compliance check
```

Target: WCAG 2.2 AA. Focus ring = 2px `var(--accent)`, 2px offset. All touch targets ≥ 44×44px. See `CLAUDE.md §28`.

---

### Performance

**Invoke when:** bundle grows, load times degrade, Lighthouse drops.**
```
/optimize    — diagnose and fix performance issues
```

Budget: LCP ≤ 2.0s · CLS ≤ 0.02 · Lighthouse ≥ 90. See `CLAUDE.md §29`.

---

### Responsive / mobile

**Invoke when:** layout breaks at mobile widths, components need adapting.**
```
/adapt    — implement responsive behavior
```

Target widths: 320 / 375 / 390 / 414 / 768 / 1024 / 1280 / 1440. Rule: **reflow, never remove**. See `CLAUDE.md §27`.

---

### Design review / QA

**Before any PR or feature completion:**
```
/requesting-code-review    — structural code review
/polish                    — final visual quality pass
/audit                     — scored a11y + performance + anti-pattern report
/verification-before-completion — run verifications before claiming done
```

**Browser visual QA:**
Use `chrome-devtools-mcp` to screenshot the component at desktop and mobile widths and check against the anti-slop checklist in `CLAUDE.md §34`.

---

### Design system — extracting or extending

**When adding reusable patterns:**
```
/extract    — extract components, tokens, patterns into the design system
/normalize  — realign drift back to design system standards
```

---

## Anti-slop quick reference

Before shipping any UI, check:
```
✗ Gradient text?           → banned (no background-clip: text + gradient)
✗ Left/right border stripe → banned (no border-left/right > 1px as accent)
✗ Purple/blue/cyan colors  → banned
✗ Glassmorphism            → banned
✗ Floating rounded cards   → banned as default
✗ Particles / cursor trails → banned
✗ Fake data / fake stats   → banned
✗ Fabricated clients       → banned
✗ "Learn More" dead link   → banned
✗ Non-reduced-motion check → must pass
```

---

## Awesome DESIGN.md reference

For design system research and best practice patterns:
```
~/.claude/design-references/awesome-design-md/
```
Browse as a **reference only** (not executable). Useful for design tokens, component patterns, and design system architecture inspiration. Do not copy patterns directly — adapt to MindCraft's editorial language.

---

## MCP quick reference

| MCP | When to use | How to invoke |
|---|---|---|
| `21st-dev` | Component UI inspiration, search for component patterns | Via ToolSearch: load `mcp__21st-dev__*` tools |
| `motionsites` | Motion/animation inspiration (needs auth) | Via ToolSearch after auth |
| `chrome-devtools-mcp` | Visual QA, a11y inspection, screenshots, performance | Via skill: `/chrome-devtools-mcp:chrome-devtools` |
| `headroom` | Context compression when session grows long | Via ToolSearch: `mcp__headroom__headroom_compress` |
| `claude-mem` | Cross-session memory retrieval | Via ToolSearch: `mcp__plugin_claude-mem_mcp-search__*` |

---

## MindCraft design quick-test

When reviewing any design decision, ask:
1. Could this be mistaken for Anthropic? → No.
2. Could this be mistaken for an AI startup? → No.
3. Does Africa appear as intelligence, not decoration? → Yes.
4. Is Life Sciences visibly deeper? → Yes.
5. Does the engagement engine connect the capabilities? → Yes.
6. Is every element doing real work? → Yes.
7. Does it pass at 320px? → Yes.

If any answer is wrong: fix it before shipping.
