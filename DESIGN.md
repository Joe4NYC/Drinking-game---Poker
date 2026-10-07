---
name: 酒Game大排檔
description: Camp group banner at night. Each draw floods the rule zone in its suit's group colour and stamps the rule name onto the card face.
colors:
  night-ink: "#141210"
  ink-raised: "#1e1b18"
  ink-control: "#2b2723"
  ink-rule: "#3a342e"
  paper: "#f3eee3"
  muted-paper: "#b3aa9e"
  group-red: "#d92b25"
  group-yellow: "#ffc400"
  group-blue: "#2f5bea"
  group-green: "#19b35f"
typography:
  display:
    fontFamily: "Chiron Hei HK, PingFang HK, Noto Sans HK, sans-serif"
    fontSize: "clamp(46px, 14vw, 76px)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Chiron Hei HK, PingFang HK, Noto Sans HK, sans-serif"
    fontSize: "30px"
    fontWeight: 900
    lineHeight: 1.15
  title:
    fontFamily: "PingFang HK, Noto Sans HK, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.4
  body:
    fontFamily: "PingFang HK, Noto Sans HK, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Chiron Hei HK, PingFang HK, Noto Sans HK, sans-serif"
    fontSize: "17px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  chip: "6px"
  field: "8px"
  button: "10px"
  draw: "14px"
  dialog: "16px"
  pill: "999px"
  card: "7% / 5%"
spacing:
  gutter: "16px"
  gap-sm: "8px"
  gap-md: "14px"
  touch: "44px"
  touch-field: "48px"
  column: "560px"
components:
  button-draw:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.draw}"
    height: "64px"
    width: "100%"
  button-solid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "48px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "48px"
  button-text-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "44px"
  chip:
    backgroundColor: "{colors.ink-control}"
    textColor: "{colors.paper}"
    rounded: "{rounded.chip}"
    padding: "0 14px"
    height: "44px"
  chip-use:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.chip}"
    padding: "0 14px"
    height: "44px"
  input-text:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
    height: "48px"
  dialog:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper}"
    rounded: "{rounded.dialog}"
    padding: "24px 20px 20px"
  card-face:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.card}"
  card-back:
    backgroundColor: "{colors.group-red}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
---

# Design System: 酒Game大排檔

## Overview

**Creative North Star: "The Camp Group Banner" (迎新營組旗)**

The system is an orientation-camp night: a dark table, one phone, and four group colours from the camp tees. The ground is warm night-ink with paper-coloured text. Colour never arrives as an accent. It arrives as a full-bleed field that belongs to whichever suit was just drawn, and the rule name is stamped onto the card face itself in very heavy Hong Kong-standard Hei, set vertically and slightly tilted, like a group chanting its cheer; the field beneath carries the one-line instruction. Everything outside that field stays quiet ink, so the field always carries the moment.

Density is low and vertical: one centred column at most 560px wide on a phone held in portrait, every target at least 44px, and a sticky full-width 抽牌 bar at the bottom. Depth is physical, not interface depth. Real playing cards cast soft shadows on the table and the name sticker sits on top of the card. Surfaces that are not objects on the table stay flat.

Motion is ceremony: on each reveal the card flips, the field wipes in from the left like a banner unfurling (叫口號), and the rule-name characters stamp onto the card one at a time. A single expo-out curve governs every transition, and reduced motion turns all of it off.

**Key Characteristics:**
- Night-ink ground (`#141210`) with warm paper text; dark colour scheme only.
- Four saturated group colours mapped one-to-one to suits, plus paper for the joker.
- Colour as full-bleed fields with screen-print grain, never as small accents.
- Chiron Hei HK 900 for every display moment; system HK sans for reading.
- Small deliberate tilts (−2° to −6°) on stamped and stuck-on elements.
- Card-shaped objects get real shadows; interface chrome stays flat.

## Colors

A warm near-black ink family and one paper tone, set against four camp-tee group colours at full saturation.

### Primary
- **Camp Red** (group-red): Hearts (♥) field, the card back, the logo tag behind 大排檔, the 18+ band and the rules-page masthead. The brand's home colour; text on it is white.
- **Camp Yellow** (group-yellow): Diamonds (♦) field. Also the system's interaction signal: focus outline, input focus border, caret, text selection, and the underline on text links. Text on it is ink.
- **Camp Blue** (group-blue): Spades (♠) field. Text on it is white.
- **Camp Green** (group-green): Clubs (♣) field and the checked state of settings switches. Text on it is ink.

### Neutral
- **Night Ink** (night-ink): page ground, text-input fill, and text on paper/yellow/green.
- **Raised Ink** (ink-raised): dialogs and the idle (no card drawn) field.
- **Control Ink** (ink-control): chips, unfilled deck-rail ticks, switch track, icon-button hover.
- **Rule Ink** (ink-rule): 1px hairlines between list rows and the quiet-button outline. Only on ink grounds.
- **Paper** (paper): body text, card faces, the joker field, and every primary button.
- **Muted Paper** (muted-paper): secondary text (turn line, hints, footer, chip labels, placeholders) and the disabled draw button.

### Named Rules
**The Suit Owns the Colour Rule.** Each group colour means one suit. ♥ red, ♦ yellow, ♠ blue, ♣ green, joker paper. The mapping lives in `[data-suit]`, which sets `--bg`/`--fg` for a block; any component that shows a suit (field, rail tick, sticker, rule band) reads those two variables instead of naming a colour.

**The Full-Bleed Rule.** A group colour appears as a whole field edge to edge, a rail tick, or a sticker. It is never a thin border, an icon tint or a text colour on ink. Yellow is the one exception, and only as the interaction signal.

**The Inverse Pair Rule.** Inside a field, emphasis swaps the pair: the target line and the field's submit button are `--fg` on `--bg` inverted, not a new colour.

## Typography

**Display Font:** Chiron Hei HK 900 (with PingFang HK, Noto Sans HK)
**Body Font:** System HK sans: PingFang HK (with Noto Sans HK, Microsoft JhengHei, system-ui)

**Character:** A single very black Hei weight does all the shouting: rule names, ranks, card indices, the logo and button labels. Reading text stays in the phone's own HK sans so long how-to steps are comfortable and every glyph is covered.

### Hierarchy
- **Display** (900, `clamp(46px, 14vw, 76px)`, 1.02, −0.02em, rotated −2°): the rule-name chant in the field and the rules-page h1 (`clamp(44px, 12.5vw, 72px)`). On the game screen the chant size is computed from the character count (40–96px) so short names fill the width.
- **Rank** (900, `clamp(64px, 20vw, 96px)`, 0.8, −0.05em): the big rank numeral in each rules-page band. The 18+ band uses 88px.
- **Headline** (900, 30px, 1.15–1.2): dialog titles and rules-page section headings; rule-band names use 32px.
- **Title** (800, 17px, 1.4): status headings, chips, sticker, target line, disclosure summaries. Weight 800 in the body face is the system's mid emphasis.
- **Body** (400, 17px, 1.6): all reading text; measure capped at 34em.
- **Label** (900 display, 17px, 1): button labels and the logo. The 抽牌 button tracks out to 0.5em; the pill text button uses 0.08em.
- **Small** (400, 14–15px): footer (14px) and settings hints (15px) only.
- Card faces size in container units: corner index 17cqw, centre rank 58cqw, pips 46cqw.

### Named Rules
**The One Heavy Weight Rule.** The display face is used only at 900. Never set Chiron Hei HK at a lighter weight or use it for running text.

**The No Mid-Word Break Rule.** Chinese reading text uses `word-break: keep-all` with `overflow-wrap: anywhere`, so lines break at punctuation, not inside words. Display headings use `text-wrap: balance`; multi-part headings are split into inline-block units.

**Known limitation.** Chiron Hei HK is loaded from Google Fonts with a `text=` subset of the site's own copy. User-entered text (custom rules, player names) can contain glyphs outside the subset, which fall back per glyph to PingFang HK. Self-hosting the full face was declined. Any new display copy must be added to the `text=` parameter in both HTML files.

## Layout

One centred column (`max-width: 560px`, 16px side gutters) on a dark page, portrait phone first. Colour fields and rules-page bands break out to full viewport width while their content stays in the 560px column. The game screen stacks: 60px top bar, an 8px deck rail (one grid cell per card, 2px gaps), a 52px turn line, the card stage (deck at 0.6 × card width beside the card), then the field, table status and footer. The 抽牌 bar is sticky to the bottom, fading up from ink and padded by `env(safe-area-inset-bottom)`.

Card width is `min(40vw, 180px, 22svh)`, so the card shrinks on short screens before it pushes the field down; at 900px and wider it becomes `min(220px, 30svh)`. That is the only breakpoint. Spacing is functional rather than a strict scale: 8px within groups, 14–16px between related blocks, 22–30px of padding inside fields and bands, 44px before rules-page sections. Interactive targets are at least 44px (48px for form controls and dialog buttons, 64px for 抽牌).

## Elevation & Depth

Hybrid. Interface chrome is flat; anything that is a physical object on the table casts a soft, dark, downward shadow, and the floating layers (draw bar, toast, dialog) do the same. There are no hard offset shadows and no glows.

### Shadow Vocabulary
- **Card on table** (`box-shadow: 0 18px 36px rgb(0 0 0 / 0.55), 0 2px 4px rgb(0 0 0 / 0.4)`): every card face, front and back.
- **Sticker / deck layer** (`box-shadow: 0 6px 14px rgb(0 0 0 / 0.45)`): the name sticker and the stacked deck layers.
- **Floating control** (`box-shadow: 0 10px 28px rgb(0 0 0 / 0.5)`): the 抽牌 button and the toast.
- **Dialog** (`box-shadow: 0 30px 80px rgb(0 0 0 / 0.6)`) over a `rgb(10 9 8 / 0.78)` backdrop.

### Named Rules
**The Objects Cast, Chrome Doesn't Rule.** Shadows belong to cards, stickers and floating layers. Chips, fields, bands, inputs and list rows have no shadow.

**The Screen-Print Grain Rule.** Colour fields and bands carry a fractal-noise grain multiplied over the colour (`--grain` at 0.14 opacity on fields; `--grain-soft` on the card back and the 18+ band). Grain goes on group colour only, never on ink.

## Shapes

Mixed by role. Card objects use the proportional playing-card corner (`7% / 5%`) at 5:7 aspect ratio; the card back has a white 2px inset frame (`inset: 6%`) and a large tilted 酒. Controls use small, firm radii (6px chips, 8px inputs, 10px buttons, 14px draw bar, 16px dialogs); icon buttons, switches and the pill text button are fully round. Colour fields and rule bands are square, full-bleed rectangles with no radius and no border. Stuck-on and stamped elements tilt: logo tag −3°, sticker −4°, chant and page h1 −2°, card-back mark −6°. Hairline 1px rules in Rule Ink separate list rows on ink only.

## Components

### Buttons
Tactile paper slabs on ink; flat, firm, and large.
- **Draw (抽牌):** full-width paper bar, 64px tall, 14px radius, display label tracked 0.5em, floating shadow. Hover goes pure white; active scales to 0.97; disabled turns Muted Paper.
- **Solid / Quiet (dialogs):** 48px, 10px radius, weight 800. Solid is paper on ink; Quiet is a 2px Rule Ink outline with paper text. In the age gate both stretch to equal width.
- **Pill text button:** paper pill, display label at 0.08em; 60px tall with 36px padding as the rules-page call to action.
- **Icon button:** 44px round, transparent, 24px stroked SVG (2px, round caps); hover fills Control Ink.
- **Link button:** bare paper text, weight 800, with a 2px yellow underline offset 0.3em.
- **Focus:** every control gets the global 3px yellow outline at 3px offset.

### Chips
- **Style:** Control Ink, 6px radius, 44px tall, weight 800 name with a 400-weight Muted Paper label before it (陪飲員, 癡線佬).
- **State:** usable cards (廁所卡, 免飲卡) invert to paper with ink text and go white on hover.

### Inputs / Fields
- **Style:** Night Ink fill, 2px transparent border, 8px radius, 48px minimum, yellow caret, Muted Paper placeholder.
- **Focus:** the border turns yellow; the outline is suppressed in favour of it.
- **Switch:** 50 × 30px Control Ink track with a 24px paper knob; checked turns green and slides the knob 20px.

### Navigation
Top bar only: the logo (display 900, with 大排檔 on a red tag tilted −3°) on the left, three 44px SVG icon buttons on the right (rules, share, settings). The rules page swaps the icons for the 開始玩 pill. The rules page also has a two-column jump list of ranks with hairline rows; hovering turns the rank yellow.

### Rule Field (signature)
The full-bleed `[data-suit]` block under the card. It holds the lead line (`.lead`: display 900, `clamp(24px, 6.6vw, 32px)`/1.3, keep-all; the rule's one-line instruction, or the custom rule text), one short line only when no lead, the inverted target line, the 點玩 disclosure (custom chevron drawn with two 2.5px borders, rotating on open) and, for 4s, an inline input with an inverted submit button. Idle state uses Raised Ink with 撳抽牌開始. On reveal it runs 叫口號: `unfurl` (clip-path wipe from the left, 0.5s), while on the card face each rule-name character `stamp`s in (scale 1.7 → 1, −8° → 0, blur 3px → 0) at 0.14s intervals from 0.45s, then the lead and target lines `rise` 8px.

### Card face rule (`.say`)

The drawn card prints its rule name vertically (`writing-mode: vertical-rl`, display 900, `min(30cqw, 64cqh / n)`, tilted −3°) inside a 2px inset frame at 30% opacity; Latin runs sideways and digits stand upright (`text-combine-upright`). J/Q/K set each character in a filled suit-colour circle. Card-face ink uses the suit colour, with yellow deepened to `#a87200` and green to `#0f8a49` for contrast on paper. A custom rule longer than 6 characters is not printed; the card shows its pip and the field's lead line carries the text.

### Playing Card
Drawn entirely in code: paper face, ink or red index in the display face, suit pips from authored SVG paths, joker index set vertically. It flips with a 0.55s 3D rotateY on the expo-out curve. The deck is a pressable stack of red layers offset by 3–6px with small rotations.

### Name Sticker
The drawer's name on a small suit-coloured label (3px radius, weight 800), stuck across the bottom edge of the card at −4°, with the sticker shadow. It fades in on reveal and truncates with an ellipsis.

### Deck Rail
An 8px strip with one cell per card in the deck. Each drawn card fills its cell with its suit colour, so the strip becomes a record of the night.

## Do's and Don'ts

### Do:
- **Do** route every suit colour through `[data-suit]` and `--bg`/`--fg`; ♥ red, ♦ yellow, ♠ blue, ♣ green, joker paper.
- **Do** give a revealed rule a full-bleed group-colour field with grain, the display face at 900, and a −2° tilt.
- **Do** use yellow for focus, caret, selection and link underlines, and nothing else outside the ♦ field.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for every transition and animation, and keep the `prefers-reduced-motion` kill switch.
- **Do** keep targets at 44px or more (48px for form controls) and the reading measure at 34em or less.
- **Do** draw cards, pips and icons as authored SVG and CSS; no third-party card images.
- **Do** add any new display-face copy to the Google Fonts `text=` subset in both HTML files.

### Don't:
- **Don't** use a group colour as a thin accent, border or text tint on ink.
- **Don't** put borders, boxes or card containers inside a colour field.
- **Don't** use hard offset shadows or glows; depth is the soft downward table shadow on objects only.
- **Don't** use emoji or icon fonts for icons.
- **Don't** set Chiron Hei HK below weight 900 or use it for running text.
- **Don't** turn the table into green casino felt or show the rule in a pop-up modal.
- **Don't** add a light theme; the system is dark only (`color-scheme: dark`).
