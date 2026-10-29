---
name: Kyle Navarro · Portafolio
description: The developer portfolio canon in one mono face, a cool neutral ground and a single cobalt voice, where shipped client sites are the proof.
colors:
  cobalt: "#2747E6"
  cobalt-deep: "#1C36C2"
  cobalt-mist: "#E6EAFD"
  paper: "#F5F6F7"
  sheet: "#FFFFFF"
  ink: "#15171A"
  ink-soft: "#3B4048"
  slate: "#5A6069"
  hairline: "#DDE0E4"
  hairline-strong: "#C4C9D0"
  on-cobalt: "#FFFFFF"
  night-cobalt: "#8DA2FF"
  night-cobalt-bright: "#B0BEFF"
  night-cobalt-mist: "#1B2240"
  night: "#0D0F12"
  night-sheet: "#15181D"
  night-ink: "#E6E8EB"
  night-ink-soft: "#C3C8CF"
  night-slate: "#9AA1AB"
  night-hairline: "#262A31"
  night-hairline-strong: "#363B44"
  on-night-cobalt: "#0D0F12"
typography:
  display:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  caption:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  tag:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
  label-xs:
    fontFamily: "Hack, ui-monospace, Cascadia Mono, Menlo, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  portrait: "20px"
  pill: "999px"
spacing:
  xs: "0.375rem"
  sm: "0.625rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.75rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(3.5rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1.1rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.on-cobalt}"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1.1rem"
    height: "2.875rem"
  tag:
    backgroundColor: "{colors.cobalt-mist}"
    textColor: "{colors.cobalt}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.6rem"
  tag-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.6rem"
  status-pill:
    textColor: "{colors.slate}"
    typography: "{typography.label-xs}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.55rem"
  lang-control:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.slate}"
    rounded: "{rounded.pill}"
    padding: "3px"
    height: "2.25rem"
  lang-control-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  theme-toggle:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.625rem"
  project-card:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.md}"
  project-overlay:
    backgroundColor: "rgb(11 13 17 / 0.88)"
    textColor: "#FFFFFF"
    padding: "1.5rem"
---

# Design System: Kyle Navarro · Portafolio

## Overview

**Creative North Star: "The Terminal Résumé"**

The developer portfolio canon, executed straight: a sticky identity column on the left (5/12) and a scrolling body of real work on the right (7/12). The whole page speaks in one monospaced face, Hack, the same font Kyle uses in his terminal, so the page reads like a well-kept README rather than a brochure. Decoration never stands in for proof; the live screenshots of shipped client sites carry the page, framed in thin hairlines and nothing else.

The ground is a cool, nearly colourless neutral in both themes, light and dark being equal citizens: every color token exists in both, and neither is a fallback for the other. Ink carries reading; one cobalt carries everything that acts (buttons, links, the active nav state, stack tags). Structure comes from 1px rules between rows, not from cards or boxes. Depth appears only as a response to the pointer.

Motion is small, fast and physical: every pressable compresses on press, icons nudge toward their direction on hover, and two signatures earn their time: the theme switch spreads as a circle from the toggle, and project screenshots unroll once, staggered, the first time they scroll into view. All of it collapses under reduced motion.

**Key Characteristics:**
- One mono face (Hack 400, 700, 400 italic) at every size, self-hosted.
- Cool neutral ground, ink text, a single cobalt accent; light and dark both first-class.
- Hairline-ruled rows instead of cards; shadow only on hover.
- Real screenshots in 16:10 hairline frames, anchored top-left.
- Brand colors live only on the logos in the tech list.
- Press-to-compress on every button; one-time staggered reveal; circular theme transition.

## Colors

A cool, low-chroma neutral ground with ink for reading and one saturated cobalt that means "you can act here".

### Primary
- **Signal Cobalt** (light `cobalt`, dark `night-cobalt`): primary button fill, every link, the role line under the name, the active TOC indicator, focus rings, text selection, stack tags. In dark mode it lifts to a pale periwinkle so it stays legible on the night ground and flips its on-color to the night ground.
- **Pressed Cobalt** (light `cobalt-deep`, dark `night-cobalt-bright`): hover state of the primary button only. Light goes deeper, dark goes brighter; both move away from the ground.
- **Cobalt Mist** (light `cobalt-mist`, dark `night-cobalt-mist`): tint behind stack tags, inline `code`, and file chips. Always paired with cobalt text.

### Neutral
- **Paper / Night** (`paper`, `night`): page ground, scrollbar track, text on the active ES|EN thumb.
- **Sheet / Night Sheet** (`sheet`, `night-sheet`): raised surfaces: buttons, controls, screenshot frames, and the hovered project row.
- **Ink / Night Ink** (`ink`, `night-ink`): names, section titles, project names, the active language thumb.
- **Soft Ink** (`ink-soft`, `night-ink-soft`): default body text.
- **Slate** (`slate`, `night-slate`): secondary text: pitch, leads, dates, stack uses, inactive nav, status pills.
- **Hairline** (`hairline`, `night-hairline`): row dividers, control borders, screenshot frames.
- **Strong Hairline** (`hairline-strong`, `night-hairline-strong`): button borders, quiet tags, dashed placeholders, scrollbar thumb.

### Named Rules
**The One Voice Rule.** Cobalt is the only chromatic UI color. If it is cobalt, it is clickable, active, or a stack tag; nothing decorative is cobalt.

**The Brand Quarantine Rule.** Third-party brand colors (TypeScript blue, Node green, Claude orange) appear only on the logos in the Technologies list, set per row; everywhere else logos and icons inherit ink or cobalt.

**The Twin Themes Rule.** Every color token is defined for both light and dark, and the no-JS state follows the system preference. A new token without its dark twin is unfinished.

## Typography

**Display Font:** Hack (with ui-monospace, Cascadia Mono, Menlo, Consolas, monospace)
**Body Font:** Hack
**Label/Mono Font:** Hack

**Character:** A single terminal monospace does every job; hierarchy comes from size, weight (only 400 and 700), tight negative tracking at large sizes, and ink-versus-slate color, never from a second family.

### Hierarchy
- **Display** (700, clamp 2.25–3.5rem, 1.05, -0.04em): the name in the identity column, once per page.
- **Headline** (700, clamp 1.75–2.5rem, 1.15, -0.03em, balanced wrap): blog entry titles.
- **Title** (700, 1.375rem, 1.2, -0.02em): section titles.
- **Title Small** (700, 1.0625rem, 1.3): project names, the role line; edu names sit at 1rem.
- **Body** (400, 0.9375rem, 1.7): prose, capped at 68ch (pitch at 34ch, edu notes at 64ch).
- **Body Small** (400, 0.875rem, 1.55–1.65): project descriptions, stack uses, post excerpts.
- **Label** (700, 0.8125rem, 0.06em, uppercase in the TOC only): buttons (0.875rem, no tracking), TOC links, visit links, the ES|EN control (0.04em).
- **Label XS** (700, 0.6875rem, 0.06em, uppercase): status pill only.
- **Italic** (400 italic): section leads and illustrative captions, in slate.

### Named Rules
**The Single Face Rule.** Hack is the only family, in 400, 700 and 400 italic. Never add a display or sans face; build hierarchy with size, weight and color.

**The Uppercase Budget Rule.** Uppercase with tracking is reserved for the section nav and the status pill. Headings, buttons and tags stay in sentence case.

## Layout

A centered container (max 76rem) with a fluid gutter (`spacing.gutter`). From 64rem up it becomes a two-column grid, 5fr / 7fr with a clamp(3rem, 6vw, 6rem) gap: the left identity column is sticky, full viewport height, vertically centered, and holds photo, name, role, pitch, the 2×2 action grid, email and the section nav. The right column scrolls and starts at 6rem. Below 64rem everything stacks in the same order and the section nav is hidden.

Sections are separated by `spacing.section`. Inside a section, blocks open 1.25rem below the title. Lists are ruled rows: tech rows are 1rem tall-padded with a 2rem logo column (a three-column 2rem / 13.5rem / 1fr grid from 40rem), edu rows 1.25rem. Projects are a single column of full-width cards (1.5rem apart, 1rem below 40rem), each a 16:10 screenshot. Language and theme controls float fixed at top-right from 64rem; below that they sit at the top of the page and scroll away so they never cover text. Below 40rem body text drops to 0.875rem and the hero actions become an equal 2×2 grid. Blog entries use a single 44rem column.

## Elevation & Depth

Flat at rest. Depth is tonal (sheet over paper) and ruled (hairlines), and one ambient shadow appears only as a pointer response, on hovered buttons and the hovered project row.

### Shadow Vocabulary
- **Hover lift, light** (`box-shadow: 0 1px 2px rgb(21 23 26 / 0.06), 0 8px 24px -8px rgb(21 23 26 / 0.12)`): hovered buttons and project rows.
- **Hover lift, dark** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.4), 0 10px 30px -10px rgb(0 0 0 / 0.6)`): the same roles in dark mode.

### Named Rules
**The Flat-By-Default Rule.** Nothing casts a shadow at rest. A shadow means "the pointer is here", and only on fine-pointer hover devices.

## Shapes

Gently rounded, never soft. Interactive rectangles and screenshot frames take 8px (`rounded.sm`); the project row hover surface takes 12px (`rounded.md`); the portrait takes 20px (`rounded.portrait`); controls, tags and pills are fully round (`rounded.pill`). Tiny inline pieces (code, file chips, focus outline) use 3–4px. Every frame is a 1px hairline. Dashed hairlines have one meaning: not yet (the in-development project frame, the status pill, the empty-blog note).

## Components

### Buttons
Tactile and plain: mono labels, hairline borders, a compress on press.
- **Shape:** gently rounded (8px), min height 2.875rem, 0 1.1rem padding, icon + label with 0.55rem gap.
- **Primary:** cobalt fill, cobalt border, on-cobalt text. One per view (the email CTA).
- **Secondary:** sheet fill, strong-hairline border, ink text.
- **Hover (fine pointer only):** border goes to ink and the hover lift appears; primary deepens to pressed cobalt. Icons nudge (up and -6deg tilt; download icons drop 2px; the primary icon slides right).
- **Active:** `scale(0.97)` over 160ms on `--ease-out`.
- **Focus:** 2px cobalt outline, 3px offset.

### Chips (tags and status)
- **Stack tag:** cobalt-mist fill, cobalt text, 700 at 0.75rem, pill.
- **Quiet tag:** transparent with strong-hairline border and soft-ink text; used for schools, not technologies.
- **Status pill:** dashed strong hairline, slate text, uppercase label-xs. Marks work in progress.

### Navigation
- **Section index (desktop only):** uppercase 0.8125rem slate links, each led by a 4rem hairline drawn at half length. Hover grows it to 75% and inks the text; the active section (scroll-spied) draws it full length in cobalt with ink text. 250ms on `--ease-out`.
- **Language control:** a pill segmented control on sheet with a hairline border; an ink thumb slides between ES and EN (250ms `--ease-in-out`); the active label turns paper. Options press to `scale(0.94)`.
- **Theme toggle:** 2.625rem round sheet button; sun and moon cross-rotate ±90deg and fade (300ms). Pressing it switches theme through a View Transition whose new layer opens as a circle from the toggle's center to the farthest corner (500ms, the `--ease-out` curve). Without View Transitions or under reduced motion, it switches instantly.

### Project cards (signature)
- **Frame:** a sheet card with hairline border and 12px radius; the media is exactly 16:10, the proportion of the 1280×800 WebP screenshots, so each screenshot shows whole (`object-fit: contain`), edge to edge with no inset.
- **Desktop (fine pointer):** name, description, stack tags and a primary "Visitar proyecto" button live in an overlay on the screenshot: a near-black scrim (0.88) with white text and translucent white tags. Hover or keyboard focus fades it in (200ms `--ease-out`) and its four children rise 8px in a 30ms stagger; the exit is immediate. The screenshot scales to 1.03 underneath, the border goes strong, and sibling cards dim to 0.55. The whole card opens the live site.
- **Touch:** a name pill and a round plus button sit on the screenshot's bottom edge; the whole image is the toggle. A tap opens the details below the image (grid rows 0fr → 1fr, 300ms `--ease-out`, content fades in after 80ms), the plus turns 45deg into a close, and a full-width "Visitar proyecto" button appears for deployed projects. Only one card is open at a time.
- **Reveal:** cards below the fold on load start pending; on first intersection they rise 16px and fade in while the screenshot unrolls top-down with `clip-path: inset()` (700ms, +80ms), staggered 70ms. It happens once.
- **In development (AgentPrice, always last):** the user's robot illustration fills the frame (`object-fit: cover`), a dashed status pill sits at its top-left, and the details end in a muted italic "no public link" line instead of a button.

### Lists (stack, education, posts)
Ruled rows between top and bottom hairlines. Stack rows: brand logo (1.75rem), ink name, slate use. Edu rows: ink name, small note. Post rows: tabular date, ink title, slate excerpt; hover slides the row 4px right and turns the title cobalt; press scales to 0.99.

### Footer
A hairline rule, then one bold ink line with the question and the cobalt email, and a slate 0.75rem colophon.

## Do's and Don'ts

### Do:
- **Do** set every new color in both `:root` and `:root[data-theme="dark"]` (and the no-JS dark fallback).
- **Do** give every pressable element a press response: `scale(0.97)` at 160ms `--ease-out` for rectangles, `scale(0.94)` for round controls.
- **Do** use `--ease-out` (cubic-bezier(0.23, 1, 0.32, 1)) for entrances and nudges, and `--ease-in-out` (cubic-bezier(0.77, 0, 0.175, 1)) only for things sliding between two positions.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)`.
- **Do** neutralize transforms, clip-path reveals and icon motion under `prefers-reduced-motion`, keeping only short opacity fades.
- **Do** show real work as whole WebP screenshots in 16:10 frames, with the details revealed on hover (desktop) or tap (touch).

### Don't:
- **Don't** introduce a second typeface or weights beyond 400 and 700.
- **Don't** use cobalt for decoration, or any brand color outside the Technologies logos.
- **Don't** put shadows on surfaces at rest or wrap text content in boxed cards; separate with hairlines. Project cards are the one card, because the screenshot is the content.
- **Don't** place eyebrow or kicker labels above section titles; the title stands alone.
- **Don't** replay the project reveal on every scroll; it runs once.
- **Don't** use dashed borders for anything other than "not yet" states.
