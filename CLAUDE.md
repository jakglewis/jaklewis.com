# CLAUDE.md - jaklewis.com Website Structure

This file documents the jaklewis.com website for efficient editing and understanding.

## Site Architecture

### Technology Stack
- **Platform**: Jekyll static site generator
- **Ruby Version**: 2.7.2
- **Deployment**: Netlify
- **Styling**: SCSS with custom design system

### Directory Structure
```
/
├── _pages/           # Main content pages
│   ├── index.md      # Homepage (/)
│   └── about.md      # About page (/about)
├── _layouts/         # HTML templates
│   ├── default.html  # Base template with header/footer
│   └── page.html     # Simple wrapper for pages
├── _sass/            # Styling
│   ├── _normalize.scss
│   └── _custom.scss  # Main design system
├── _includes/        # Reusable components
│   └── head.html
└── styles.scss       # SCSS entry point
```

## Design Philosophy

### Core Principles (CRITICAL)
The site is **intentionally minimal, text-forward, and elegant**:

- **NO decorative components** (cards, callouts, boxes, background shading)
- **Typography hierarchy only**: headings, body text, dividers
- **Visual rhythm through spacing and restraint**, not UI elements
- **Existing design primitives**:
  - Paragraphs
  - Italics
  - Em dashes
  - Quotation marks
  - Horizontal rules (`***` in markdown → `<hr>`)
  - Line breaks

### Typography System
From `_sass/_custom.scss`:

**Font Scale** (1.125 ratio):
- `--font-size-base`: 1rem
- `--font-size-xl`: 1.266rem
- `--font-size-2xl`: 1.424rem (h2)
- `--font-size-4xl`: 1.802rem (h1)

**Spacing Scale** (8px base):
- `--space-1`: 0.5rem (8px)
- `--space-2`: 1rem (16px)
- `--space-3`: 1.5rem (24px)
- `--space-4`: 2rem (32px)
- `--space-5`: 2.5rem (40px)
- `--space-6`: 3rem (48px)
- `--space-8`: 4rem (64px)

**Content width**: 650px (responsive)

### Theme System
- Light/dark theme toggle
- CSS variables for colors
- `--color-text-secondary`: muted text
- `--color-border-secondary`: subtle borders
- Auto dark mode support

### Current Styling Elements

**Blockquotes** (from _custom.scss:233-239):
```scss
blockquote {
  margin-left: 0;
  padding-left: var(--space-2);      // 16px
  border-left: 3px solid var(--color-border-secondary);
  color: var(--color-text-secondary);
  font-style: italic;
}
```

**Horizontal Rules**:
```scss
hr {
  height: 1px;
  background-color: var(--color-border-primary);
  border: none;
  margin: var(--space-4) 0;  // 32px above/below
}
```

**Headings**:
- h2: `font-size: 1.424rem`, `margin-top: 2.5rem`, `margin-bottom: 1rem`
- h3: `font-size: 1.266rem`, `margin: 0.5rem 0`

## Current Page Structure

### Homepage (`_pages/index.md`)
```
1. Hero section (h2): "84% of funds want data-driven deal flow..."
2. HR divider (***)
3. "Who I work with" (h2)
4. HR divider
5. "Services" (h2) + bulleted list
6. HR divider
7. "How I work" (h2) + paragraph + list
8. HR divider
```

### About Page (`_pages/about.md`)
```
1. "Background" (h2) + intro + bulleted list
2. HR divider
3. "Track Record" (h2)
   - "Wolfbrain" (h4)
   - "Brand discovery infrastructure" (h4)
   - "Investment experience" (h4)
   - "Technical foundation" (h4) + paragraph
4. HR divider
```

## Task at Hand: Testimonial Insertion

### Requirements from plan.txt
1. **Understand existing design** (DONE - see above)
2. **Propose 2-3 formatting options** (NEXT STEP)
3. **Get user approval** before implementing
4. **Insert testimonials** at specific locations:
   - Homepage: after hero, after Services
   - About page: after Background
5. **Minor text change**: "Wolfbrain" clarification

### Design Constraints (from plan.txt)
✅ **Acceptable**:
- Quotation marks
- Italics (already used in blockquotes)
- Em dashes (—)
- Subtle attribution lines
- Existing divider rhythm

❌ **Unacceptable**:
- Cards, boxes, background colors
- Pull-quote styling
- Large decorative quotation marks
- New layout patterns
- Icons, avatars, borders (beyond existing blockquote border)

### Testimonials to Insert

**Testimonial 1** (Homepage, after hero):
```
Santiago Cardenas quote
Senior Investor, Octopus ($10bn sustainable private equity fund)
```

**Testimonial 2** (Homepage, after Services):
```
Chinmaya Gajaria quote
Investor, Single Family Office
Focus: Technology, Foodtech & Alt-Proteins; LP in emerging managers
```

**Testimonial 3** (About page, after Background):
```
Tom Reems quote
Partner, Squire Patton Boggs (US)
```

## Next Steps
1. Propose 2-3 testimonial formatting options
2. Wait for user approval
3. Implement chosen format across all insertions
