---
version: 1
slug: "public-index-html"
primary_target: "public/index.html"
related_targets: ["public/rules.html"]
---

# Game screen + rules page

Scope: public/index.html (Operate: draw a card, read the rule, keep table state) and public/rules.html (Read: learn every card's rule). Mobile portrait first; one phone on a table at night.

## Direction contract

THESIS: Every draw is a camp chant. The drawn suit's group colour (營衫組色) floods the rule zone and the rule name stamps in huge, so the whole table reads it at once. Refuses the category default of a green casino felt table with a pop-up rule modal.

OWN-WORLD: Night-ink ground #141210 with paper text. Four saturated camp-tee group colours, one per suit: 紅 #D92B25 (♥), 黃 #FFC400 (♦), 藍 #2F5BEA (♠), 綠 #19B35F (♣); the joker uses paper #F3EEE3. Colour comes as full-bleed fields, never as accents. Screen-print grain on the fields. Display type is Chiron Hei HK 900 (HK glyph standard); body uses the system HK sans. No borders inside fields, no boxed cards, no hard offset shadows, no emoji icons (authored SVG only). The game screen uses two type sizes. The drawer's name appears as a camp name-sticker on the card.

STORY: Players instantly see what to do and who does it, believe the game keeps track for them, and keep tapping 抽牌.

FIRST VIEWPORT: Top bar with logo and three SVG icon buttons (rules, share, settings). Under it, a full-width 52-tick deck rail where each drawn card leaves a tick in its suit colour. Then a turn line, then the card stage (deck plus a large card). From mid-screen down, a full-bleed colour field holds the rule name at display size, one short line, the target line and the 點玩 disclosure. A sticky full-width paper 抽牌 button sits at the bottom.

FORM: Camp group banner (迎新營組旗), position 5 of the ordered list, seed key 5ea58d9e. Signature move: 叫口號. On reveal the colour field wipes in like a banner unfurling, and the rule-name characters stamp in one by one.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
