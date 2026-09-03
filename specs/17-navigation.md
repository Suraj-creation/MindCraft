# 17 — Navigation (Header, MobileMenu, Routing)

> Parents: `requirements.md` (§6 pages, §14 conversion), `design-principles.md`, `sitemap.md` (primary nav), `specs/01-information-architecture.md` (§3 nav model, §6 URL/state), `specs/19-design-system.md` (§3.9 `Header`/`MobileMenu`). Governs the persistent header, the desktop dropdown/mega-panels, the mobile full-screen menu, and SPA routing behavior. Copy obeys `specs/02`; integrity obeys `specs/25`. Buildable without further strategic decisions.

---

## 1. Purpose

The header is the site's persistent wayfinding and conversion frame. It must:
- Let a visitor reach any of the 13 real routes in ≤2 interactions, from anywhere.
- Keep the primary nav lean (6 items + one CTA) per `sitemap.md`, exposing sub-pages for the two branching sections (What We Do, Industries) via lightweight disclosure — not a crowded menu bar.
- Surface **Start a Conversation** persistently (the site-wide primary CTA, `requirements.md` §14).
- Surface **Explore** *contextually* (never as a top-level item; `sitemap.md`, `specs/01` §3).
- Communicate the current location (active-route state) and feel like a serious consultancy (restraint, hairline structure, no AI-slop chrome — `design-principles.md`).
- Be fully keyboard-operable, screen-reader-correct, and equal quality at 320px and 1440px (`design-principles.md`: MOBILE QUALITY = DESKTOP QUALITY).
- Guarantee **no dead ends** and correct SPA routing (Home always works; Back/forward, refresh, direct URLs and deep links all work; no splash/starter screen — `requirements.md`/brief §33, `design-principles.md`).

---

## 2. Structure / anatomy

### 2.1 Header (desktop ≥ `lg` 1024px)
Single horizontal bar inside `.container-wide`, page gutter `clamp(20px, 5vw, 64px)`:

```
┌───────────────────────────────────────────────────────────────────────────────┐
│  [Wordmark: MindCraft]      Home  What We Do▾  Industries▾  Where We Work        │
│                             How We Work  About            [ Start a Conversation ]│
└───────────────────────────────────────────────────────────────────────────────┘
   (top hairline appears on scroll; bottom hairline always separates header from page)
```

- **Left:** Wordmark (`MindCraft`, links to `/`). Display/serif wordmark treatment per `specs/19` §1.2; not an image logo (none exists — do not fabricate a logo mark; a typographic wordmark is used).
- **Center/right:** Primary nav — 6 items in source order. Two items (`What We Do`, `Industries`) carry a disclosure affordance (lucide `chevron-down`, stroke 1.5, rotates 180° on open; reduced-motion: no rotation animation, state still changes).
- **Far right:** Persistent CTA button `Start a Conversation` → `/contact` (`Button` variant `primary`, size `md`, min 44px height).
- **Skip link:** visually-hidden "Skip to main content" as the first focusable element; becomes visible on focus, anchored top-left; targets `#main`.

### 2.2 Header (mobile/tablet < `lg` 1024px)
```
┌──────────────────────────────────────────────┐
│  [Wordmark]                          [☰ Menu] │
└──────────────────────────────────────────────┘
```
- Left: Wordmark → `/`.
- Right: Hamburger trigger (lucide `menu`, 24px, 44×44 target) labeled `Menu`; toggles the full-screen `MobileMenu`.

### 2.3 Desktop dropdown / mega-panel (What We Do, Industries)
Flat panel anchored under the parent item, `--radius-1`, 1px `--color-line` hairline, `--shadow-overlay`, `--color-surface` background. No large rounded card, no glassmorphism.

**What We Do panel** (mega-panel; the engine, ordered as the value chain):
- Panel title / link: **Capabilities overview** → `/what-we-do` (the parent link itself also navigates here on click/Enter).
- Four pillar links (chain order per `specs/01` §1):
  - `Market Research` → `/what-we-do/market-research`
  - `Business Consulting` → `/what-we-do/business-consulting`
  - `AI Enterprise Solutions` → `/what-we-do/ai-enterprise-solutions`
  - `AI Training` → `/what-we-do/ai-training`
  - (Each may carry a ≤16-word one-liner from its pillar hero; optional, obeys `specs/02` card one-liner limit. If omitted, links stand alone — no filler.)
- Contextual entry (the only place Explore appears in-header, and only inside this panel): `Explore capabilities` → `/explore`. Rendered as a secondary/`ghost` affordance with a hairline divider above it, visually distinct from the pillar links.

**Industries panel** (small dropdown; depth vs breadth is explicit):
- `Life Sciences` → `/industries/life-sciences` — tagged with a mono `Tag` reading `Core expertise` (source-supported, `content-inventory.md` §1) to signal DEPTH.
- `All industries` → `/industries` (breadth; the overview/explorer grid).

> Note: There is no in-header dropdown for the other 4 items; `Where We Work`, `How We Work`, `About`, `Home` are direct links.

---

## 3. Exact content (labels, links → routes, copy)

### 3.1 Primary nav (source order per `sitemap.md`)
| Label | Route | Has panel |
|---|---|---|
| `Home` | `/` | no |
| `What We Do` | `/what-we-do` | yes (mega-panel) |
| `Industries` | `/industries` | yes (dropdown) |
| `Where We Work` | `/where-we-work` | no |
| `How We Work` | `/how-we-work` | no |
| `About` | `/about` | no |

### 3.2 Persistent CTA
- Label: `Start a Conversation` (exact; `requirements.md` §14 — do not substitute "Sign up"/"Get started"). CTA label limit ≤4 words is intentionally waived for this canonical brand CTA per `requirements.md` §14; it is the single named exception.
- Route: `/contact`.

### 3.3 What We Do mega-panel content
- Heading link: `Capabilities overview` → `/what-we-do`
- `Market Research` → `/what-we-do/market-research`
- `Business Consulting` → `/what-we-do/business-consulting`
- `AI Enterprise Solutions` → `/what-we-do/ai-enterprise-solutions`
- `AI Training` → `/what-we-do/ai-training`
- `Explore capabilities` → `/explore` (contextual, below hairline)

### 3.4 Industries dropdown content
- `Life Sciences` → `/industries/life-sciences` (Tag: `Core expertise`)
- `All industries` → `/industries`

### 3.5 Skip link
- Label: `Skip to main content` → `#main`.

> No fabricated labels, no decorative "Learn more"/dead links. Every label above maps to a real route (`design-principles.md`: give every button a real destination).

---

## 4. States & interactions

### 4.1 Link/item states (all nav links + CTA)
- **Default:** ink-700 label, Inter 400/500.
- **Hover:** ink-900; a 2px `--color-accent-600` underline/marker animates in (bottom of item). Reduced-motion: underline appears instantly.
- **Focus-visible:** 2px accent focus ring, 2px offset (`--color-focus`); never suppressed.
- **Active route:** persistent 2px accent underline/marker + ink-900 label + `aria-current="page"`. For a section parent, the parent shows the active marker when the current route is that page **or any of its children** (e.g., `/what-we-do/market-research` marks `What We Do` active).
- **Pressed/active:** subtle ink wash.

### 4.2 Dropdown/mega-panel (desktop)
- **Open triggers:** mouse hover over parent (open after ~80–120ms intent delay to avoid accidental opens); keyboard focus + `Enter`/`Space`/`ArrowDown` on the parent; the parent's chevron.
- **Close triggers:** mouse leaves parent+panel (close after ~150–200ms grace so the pointer can travel into the panel); `Esc` (returns focus to parent); focus leaving the panel via `Tab`; clicking any panel link; route change; clicking outside.
- **Parent click behavior:** clicking/Enter on the parent label navigates to its overview route (`/what-we-do`, `/industries`). The chevron (or hover/ArrowDown) is the disclosure affordance — so the panel never traps the overview link.
- **`aria-expanded`** on the parent reflects open/closed. Only one panel open at a time.
- **Motion:** panel fades + translates ≤8px, `--dur` `--ease-out`. Chevron rotates. Reduced-motion: instant show/hide, no rotation.

### 4.3 Sticky header on scroll
- Header is `position: sticky; top: 0`, `z-index` above content, below any open modal/drawer.
- **At scroll top:** transparent-to-paper background matching page; no top shadow; bottom hairline only.
- **On scroll (> ~8px):** header gains a solid `--color-paper` background and a **hairline** bottom rule (1px `--color-line`) — "hairline-on-scroll," not a drop shadow. Optional ≤2px translate/condense; no height jump that shifts layout. Transition `--dur-fast`.

### 4.4 Mobile menu open/close
- Hamburger toggles `MobileMenu`. See §6.

---

## 5. Desktop behavior (≥ `lg` 1024px)

- Full horizontal bar; all 6 items + CTA visible; no hamburger.
- Hover or keyboard opens the two panels (§4.2). Panels anchor to their parent, left-aligned, width sized to content (mega-panel may span a wider block; dropdown is compact).
- Active-route marker always visible; parent-active logic per §4.1.
- CTA pinned far-right, always visible.
- Sticky + hairline-on-scroll per §4.3.
- At `md` (768–1023px) the site uses the **mobile** header (hamburger) — the six items + panels do not fit cleanly, so the full-screen menu is used from `md` down for quality (no cramped bar). `lg`+ uses the desktop bar.

---

## 6. Mobile behavior (320–414, up through `md` 1023px)

### 6.1 MobileMenu (full-screen)
- Trigger: hamburger (`aria-controls` the menu, `aria-expanded` reflects state).
- **Layout:** full-screen overlay, `--color-paper`, covering the viewport; header row remains with Wordmark + a Close control (lucide `x`, labeled `Close`, replacing the hamburger position).
- **Items:** the 6 primary items stacked vertically, generous 44px+ targets, mono/eyebrow section rhythm.
- **Nested sub-items (accessible disclosure):**
  - `What We Do` renders as a disclosure row: tapping the chevron expands nested links (`Capabilities overview`, the 4 pillars in chain order, and `Explore capabilities` → `/explore`); tapping the label text navigates to `/what-we-do`. Uses the `Accordion` a11y pattern (`aria-expanded`, `aria-controls`).
  - `Industries` expands to `Life Sciences` (Tag `Core expertise`) and `All industries`; label navigates to `/industries`.
  - Multiple sections may be open; state resets on menu close.
- **Pinned CTA:** `Start a Conversation` → `/contact` pinned to the bottom of the menu (sticky footer within the overlay), full-width `primary` Button, always reachable without scrolling to it.
- **Body scroll-lock:** while open, lock `<body>` scroll (preserve scroll position; restore on close). Menu content itself scrolls if it overflows.
- **Close triggers:** Close (`x`) button; `Esc`; tapping/activating any link (then route changes); (overlay is full-screen so "overlay click" = the Close affordance / any tap outside the item list closes). Selecting a link closes the menu and navigates.
- **Focus management:** on open, focus moves to the first focusable element inside the menu (Close button or first item). Focus is **trapped** within the menu while open (`aria-modal="true"`, `role="dialog"` with `aria-label="Menu"`). On close, focus returns to the hamburger trigger.
- **Motion:** overlay fade + panel slide/fade, `--dur` `--ease-out`. Reduced-motion: instant.

### 6.2 Responsive verification widths
Verified at 320, 375, 390, 414, 768 (and 1024/1280/1440 for desktop): no horizontal overflow, no clipped labels, CTA always reachable, targets ≥44×44, wordmark never truncated.

---

## 7. Accessibility (keyboard, ARIA, focus)

### 7.1 Landmarks & structure
- Header nav wrapped in `<header>` containing `<nav aria-label="Primary">`.
- Skip link is the first focusable element → targets `<main id="main">` (present on every page).
- One `<h1>` per page lives in `<main>`, not the header (`specs/02` §9).

### 7.2 Keyboard operability
- **Tab order:** Skip link → Wordmark → nav items (left→right) → CTA (desktop); Skip link → Wordmark → hamburger (mobile).
- **Nav items:** reachable and activatable with `Tab` + `Enter`/`Space`.
- **Dropdown parents:** `Enter`/`Space` navigate to overview; `ArrowDown` opens panel and moves focus to first panel item; within panel `ArrowUp`/`ArrowDown` cycle items, `Esc` closes and returns focus to parent, `Tab` out closes the panel.
- **MobileMenu:** focus trap; `Esc` closes; `Tab`/`Shift+Tab` cycle within; disclosure rows follow `Accordion` keys.
- No keyboard trap on desktop (panels do not trap; they are non-modal). Only the mobile full-screen menu traps (it is modal).

### 7.3 ARIA
- `<nav aria-label="Primary">` landmark.
- `aria-current="page"` on the active route link (and applied to a section parent when a child is active, or use `aria-current` only on the exact match plus a visual parent marker — implementation may use `aria-current="page"` on exact match and a non-ARIA active class on the parent to avoid ambiguity).
- Dropdown parent: `aria-expanded`, `aria-controls` → panel `id`; panel not announced as a menu widget (these are navigation links, so use a plain grouped `<ul>`, not `role="menu"`, to keep expected link semantics for AT).
- Hamburger: `aria-expanded`, `aria-controls`, accessible name `Menu` (and `Close` when open, or keep `Menu` with expanded state — provide a distinct Close control inside).
- MobileMenu container: `role="dialog"`, `aria-modal="true"`, `aria-label="Menu"`.
- Chevron icons: `aria-hidden="true"` (decorative; state carried by `aria-expanded`).
- Focus-visible styling never removed; 2px accent ring, 2px offset.
- Respect `prefers-reduced-motion: reduce` for all panel/menu/underline/chevron motion.

---

## 8. Routing / URL behavior (SPA — React Router or equivalent)

- **Client-side router** (React Router v6+ or equivalent) over the clean, lowercase, hyphenated routes in `sitemap.md`.
- **Home always works:** `/` renders Home directly. **No splash/intro/starter screen** (`design-principles.md`, brief §33) — Home *is* the entry.
- **Direct URLs & refresh:** every route in `sitemap.md` is directly addressable and refresh-safe. Host serves `index.html` for all app routes (SPA fallback / rewrite so a hard refresh or pasted deep link resolves — configure host rewrite to `/index.html`).
- **Back/forward:** browser history is correct; navigating updates the active-route marker and closes any open panel/menu; scroll restoration to top on new route (except hash/anchor deep links).
- **Deep links / disclosure state:** anchor deep links open the target's disclosure where feasible (e.g., `/industries/life-sciences#pharmaceuticals` opens that sub-sector panel; `specs/01` §6). On load, if a hash matches an item, expand it and scroll to it.
- **Explorer URL-encoded state:** `/explore?industry=…&geo=…&capability=…` is shareable, refresh-safe, and deep-linkable (`specs/01` §6, `/specs/13`). The header's contextual `Explore capabilities` link points to bare `/explore`; the Explorer itself owns query-param read/write.
- **No dead ends:** every route resolves to real content or the 404 route; there are no links to non-existent pages. Utility routes `/privacy`, `/terms` are handled per §9 of `specs/25` (placeholder or omitted from nav — they are footer-only, `specs/18`).
- **404 / unknown route:** a real Not-Found route that keeps the header/footer and offers navigation home + to key pages (no dead end). Returns appropriate status where the host allows.
- **Trailing slashes / casing:** normalize (redirect `/About` or `/what-we-do/` to canonical lowercase, no trailing slash).
- **Route change side-effects:** close dropdowns and MobileMenu; release scroll-lock; move focus to a sensible target (main heading or `#main`) for screen-reader users, and set document `<title>` per page (`specs/02` §8 / `/specs/24`).

---

## 9. Components used (from `specs/19`)

- `Header` (§3.9) — persistent bar, wordmark, primary nav, dropdown parents, CTA, sticky + hairline-on-scroll.
- `MobileMenu` (§3.9) — full-screen menu, nested disclosure, pinned CTA, scroll-lock, focus trap.
- `Button` (§3.1) — `primary` for the CTA; `ghost` for the contextual `Explore capabilities` link.
- `Tag` (§3.3) — `Core expertise` on the Life Sciences entry.
- `Accordion` a11y pattern (§3.5) — for mobile nested disclosure rows.
- Dropdown/mega-panel uses `--shadow-overlay`, `--radius-1`, hairline (§1.5); icons from lucide (§1.6): `chevron-down`, `menu`, `x`, `arrow-right`.
- Tokens/utilities: `.container-wide`, focus ring `--color-focus`, motion tokens (§1.7), color/spacing/type tokens (§1).

---

## 10. Acceptance criteria (testable)

1. Header shows exactly 6 primary items in source order (`Home · What We Do · Industries · Where We Work · How We Work · About`) plus one `Start a Conversation` CTA → `/contact`, at all desktop widths.
2. `Explore` never appears as a top-level nav item; it appears only as the contextual `Explore capabilities` → `/explore` inside the What We Do panel (desktop) and its mobile equivalent.
3. On desktop, hovering or keyboard-focusing `What We Do` opens a panel listing `Capabilities overview` + the 4 pillars (chain order) + `Explore capabilities`; `Industries` opens a panel with `Life Sciences` (Tag `Core expertise`) + `All industries`. Each link routes to the exact path in §3.
4. Clicking/Enter on `What We Do` or `Industries` navigates to `/what-we-do` / `/industries` (overview), independent of the dropdown.
5. The active route shows an accent marker and `aria-current="page"`; visiting a pillar page also marks the `What We Do` parent active; visiting Life Sciences marks `Industries` active.
6. Header is sticky; at scroll top it has no bottom shadow; after scrolling it shows a 1px hairline bottom rule (no drop shadow) with no layout shift.
7. Skip link is the first focusable element, hidden until focused, and moves focus to `#main` when activated.
8. All nav items, panels, and the CTA are fully keyboard-operable: Tab reaches them; Enter/Space activate; ArrowDown opens a panel and enters it; Esc closes a panel and restores focus to the parent.
9. Focus-visible rings (2px accent, 2px offset) are present on every interactive nav element and are never suppressed.
10. Below `lg` (≤1023px) the header shows Wordmark + hamburger; activating it opens a full-screen menu with the 6 items, nested disclosure for What We Do / Industries (including `Explore capabilities`), and a pinned `Start a Conversation` CTA.
11. While the MobileMenu is open: body scroll is locked, focus is trapped, `Esc` and the Close (`x`) control close it, and closing returns focus to the hamburger.
12. `<nav aria-label="Primary">` landmark exists; dropdown parents expose `aria-expanded`/`aria-controls`; the mobile menu is `role="dialog" aria-modal="true"`; chevrons are `aria-hidden`.
13. Home renders at `/` with no splash/intro screen; direct navigation to `/` always works.
14. Every route in `sitemap.md` loads on direct URL entry and on hard refresh (SPA fallback configured); Back/forward restore the correct page and active state.
15. Deep link with hash (e.g., `/industries/life-sciences#pharmaceuticals`) opens the corresponding disclosure state and scrolls to it.
16. `/explore` reads/writes `?industry=&geo=&capability=` and is refresh-safe and shareable; the header link targets bare `/explore`.
17. No navigation element links to a non-existent page; an unknown URL renders a real 404 route with header/footer and onward links (no dead end).
18. Navigating between routes closes any open panel/menu, releases scroll-lock, updates `<title>`, and moves SR focus to `#main`/the page `<h1>`.
19. All nav motion (panels, underline, chevron, menu) is disabled/instant under `prefers-reduced-motion: reduce`.
20. Verified with no horizontal overflow or clipped labels at 320/375/390/414/768/1024/1280/1440; all touch targets ≥44×44.
