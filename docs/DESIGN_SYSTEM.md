# Design System

## Purpose

The IsletmeOS design system defines the visual and interaction foundation for every future product screen. It is designed for a modern SaaS platform that must feel professional, premium, fast, minimal, calm, and enterprise-ready.

This system does not include product features, authentication, CRM flows, API behavior, or database logic. It only establishes reusable UI language and component architecture.

## Design Inspiration

The system is inspired by the clarity and discipline of products such as Linear, Stripe Dashboard, Vercel, Notion, Raycast, and GitHub. It does not copy their UI. The goal is to borrow their shared qualities:

- Fast scanning
- Calm surfaces
- Strong hierarchy
- Dense but readable information
- Precise spacing
- Minimal ornament
- Clear interaction states

## Color Philosophy

The palette is neutral-first with restrained accents.

### Core Colors

- `background`: page background
- `foreground`: primary text
- `surface`: subtle page sections
- `surface-raised`: elevated areas
- `card`: panels, cards, and contained surfaces
- `popover`: overlays, dropdowns, dialogs
- `border`: default dividers and outlines
- `input`: form field borders
- `ring`: keyboard focus and active control ring

### Brand And Action Colors

- `primary`: main action color, intentionally sober and enterprise-friendly
- `accent`: secondary highlight for focus, charts, and selected elements

### Semantic Colors

- `success`: positive completion or healthy status
- `warning`: caution or pending attention
- `destructive`: destructive or high-risk actions
- `info`: neutral informational emphasis

Color should communicate state, not decorate the interface. Most screens should be visually quiet, with color reserved for status, focus, and priority.

## Dark Mode

Dark mode is supported through the `.dark` class and the same semantic token names. Components should never hardcode separate dark palettes unless a special visualization requires it.

Rules:

- Use token classes such as `bg-background`, `text-foreground`, `border-border`, and `text-muted-foreground`.
- Avoid raw color classes for reusable components.
- Test every component inside a `.dark` container.
- Preserve contrast and avoid pure black backgrounds.

## Typography

The default type stack uses system UI fonts with Inter-style metrics when available. Typography should feel precise and operational.

Guidelines:

- Use compact headings inside application screens.
- Reserve large type for true page headers.
- Use `text-sm` for most dense operational UI.
- Use `font-medium` for labels and actions.
- Use `font-semibold` for headings and important values.
- Use tabular numbers for financial, metric, and table values when alignment matters.

## Radius

Radii are intentionally moderate:

- `xs`: tiny controls and indicators
- `sm`: compact controls
- `md`: default buttons and inputs
- `lg`: cards and panels
- `xl`: dialogs and large elevated surfaces
- `2xl`: rare, high-emphasis containers

Avoid overly rounded enterprise UI. The default product feel should be crisp, not playful.

## Shadows

Shadows are subtle and functional:

- `shadow-soft`: controls and small emphasis
- `shadow-panel`: standard cards and panels
- `shadow-elevated`: dropdowns and raised content
- `shadow-overlay`: dialogs and modals

Use borders first. Add shadows only when elevation or layering must be clear.

## Spacing Rules

The system uses a compact 4px-based rhythm through Tailwind spacing.

Guidelines:

- Use `gap-2` or `gap-3` for compact controls.
- Use `gap-4` or `gap-6` for panel layouts.
- Use `p-4` or `p-5` for standard cards.
- Use `py-8` or `py-10` for page-level sections.
- Avoid excessive whitespace in operational screens.

## Container Widths

Container tokens support common SaaS layouts:

- `container-sm`: focused forms or narrow reading content
- `container-md`: settings and configuration pages
- `container-lg`: standard application pages
- `container-xl`: dashboards and dense data views

The web app uses centered containers with responsive padding and a maximum width of 88rem.

## Z-Index Strategy

Z-index is tokenized to prevent layering conflicts:

- `z-sticky`: sticky headers
- `z-dropdown`: dropdown menus
- `z-overlay`: page overlays
- `z-modal`: dialogs and modals
- `z-toast`: notifications
- `z-tooltip`: tooltips

Do not invent arbitrary z-index values in feature code.

## Motion

Motion should be quick and understated:

- `duration-fast`: micro interactions
- `duration-normal`: default transitions
- `duration-slow`: larger surface changes
- `ease-standard`: standard product easing

Reduced-motion preferences are respected globally.

## Border Styles

Borders are the primary separation tool.

Guidelines:

- Use `border` for cards, tables, inputs, and overlays.
- Use subtle dividers before heavy shadows.
- Use focus rings for keyboard accessibility.
- Avoid thick or decorative borders unless representing status.

## Component Usage

### Button

Use for actions. Variants:

- `primary`: main action
- `secondary`: lower-priority action
- `outline`: neutral action
- `ghost`: toolbar or low-emphasis action
- `destructive`: risky action

### Card

Use cards for repeated items, settings groups, metrics, and contained panels. Do not nest cards inside cards unless there is a strong structural reason.

### Input And Label

Use labels for every form field. Inputs include clear focus states and disabled states. Placeholder text is helper copy, not a replacement for labels.

### Badge

Use badges for compact state, category, or metadata. Avoid using badges as buttons.

### Avatar

Use for users, staff, organizations, or generic entity ownership. Always provide a fallback.

### Dialog And Modal

Use dialogs for focused interruptions. Use modal wrapper for common confirmation or decision workflows. Avoid long forms in modals.

### Dropdown

Use for contextual actions, view options, and compact menus. Do not hide primary actions in dropdowns.

### Table

Use tables for dense structured data. Keep columns scannable, align numbers to the right, and keep statuses visually compact.

### Empty State

Use when a panel or list has no content. Explain what is missing and provide one clear next action when appropriate.

### Loading State And Skeleton

Use skeletons when layout is known. Use loading state when the wait is broad or page-level.

### Page Header

Use once per page to establish location, purpose, and primary actions.

### Section Header

Use inside pages to separate major panels or workflow areas.

### Search Box

Use for filtering or finding records. Search inputs should be scoped clearly by their surrounding section.

### Breadcrumb

Use when a user is inside a nested area or detail view.

### Sidebar

Use for product navigation in desktop and large tablet layouts. Navigation should be permission-aware later, but this design foundation does not implement permissions.

### Top Navigation

Use for global app identity, high-level navigation, search, and account-level actions.

### Metric Card

Use for compact KPI display. Metrics should include clear labels, values, and optional trend context.

## Naming Conventions

Component names use PascalCase:

- `Button`
- `MetricCard`
- `PageHeader`

File names use kebab-case:

- `button.tsx`
- `metric-card.tsx`
- `page-header.tsx`

Token names are semantic, not visual:

- Prefer `primary` over `black`
- Prefer `destructive` over `red`
- Prefer `muted-foreground` over `gray-text`

## Accessibility Decisions

Accessibility is part of the foundation, not a later enhancement.

Decisions:

- Radix primitives are used for accessible dialogs, dropdowns, avatars, labels, and slots.
- Focus rings are visible and tokenized.
- Disabled states reduce opacity and pointer events.
- Status colors are paired with text, not color alone.
- Dialog close controls include screen-reader text.
- Loading state uses `role="status"` and `aria-live="polite"`.
- Breadcrumbs include `aria-label="Breadcrumb"` and current-page semantics.
- Reduced-motion preferences are respected globally.

## Responsive Strategy

The product is desktop-first because many target businesses operate from counters, desks, and larger tablets.

Breakpoints should support:

- Desktop: full navigation, dense tables, multi-column layouts
- Tablet: preserved productivity with simplified layout
- Mobile: readable stacks, accessible controls, reduced density

Future feature screens should avoid mobile-only thinking, but every component must remain usable on small screens.

## Implementation Location

Core files:

- `packages/ui/src/styles/tokens.css`
- `packages/ui/src/components/*`
- `apps/web/tailwind.config.ts`
- `apps/web/components.json`
- `apps/web/app/design-system/page.tsx`

The showcase route is available at:

```text
/design-system
```

