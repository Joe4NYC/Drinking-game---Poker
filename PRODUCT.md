# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hong Kong university students aged 18–25 drinking with friends: hall gatherings, orientation camps, house parties. One phone sits in the middle of the table and gets passed or tapped in turn. Players are tipsy, distracted and talking over each other, so a glance has to be enough.

## Product Purpose

A card-draw drinking game where every draw immediately shows that card's rule and a step-by-step how-to. It replaces the physical deck plus the cheat sheet. Success means real, repeat usage by actual groups, measured in users, not revenue.

## Positioning

Local Cantonese drinking-game rules (陪飲員, 大細波, 圍枚, 拍 7, 撞機, 癡線佬 …) are passed on by word of mouth, and almost nobody has built an interactive version with tutorials. This product does exactly that: draw and read the rule together, no lookup table needed.

## Operating Context

- Settings: homes and friends' flats, 大排檔 and bars (noisy, mixed lighting, wet tables), party rooms and KTV (dark, loud), camping and travel (possibly offline, outdoors).
- One shared phone, portrait orientation, held at arm's length or lying on a table and read upside-down or sideways by some players.
- Sessions run long. The screen must not sleep, and progress must survive a refresh.

## Capabilities and Constraints

- Static site with no build step and no dependencies (vanilla HTML/CSS/JS in `public/`), deployed to Cloudflare Workers static assets at drink.joenyc.net.
- Features: draw with a 52-card deck or 54 with jokers, infinite mode, optional player names (turn order, 上家/下家, tracking of 陪飲員/癡線佬/廁所牌/免飲牌/house rules), custom rule text per card, synthesized sound, vibration, wake lock, PWA/offline, and an 18+ age gate.
- Rule data lives in `public/rules.js` and is shared by the game page and the rules/tutorial page.
- Free, with no accounts and no multi-device rooms.

## Brand Commitments

- Name: 酒Game大排檔.
- Voice: colloquial Hong Kong Cantonese (廣東話口語), playful but clear. Avoid mixing in written Chinese (書面語) such as 不得, 人士, 出示, 保留, 成為.
- Terminology: playing cards are 啤牌 (not 撲克牌); keepable cards are 牌 (廁所牌, 免飲牌), never 卡.
- Cards are drawn in code. No third-party card images, so there is no copyright risk.

## Evidence on Hand

No testimonials, user counts or press exist yet. Do not fabricate any.

## Product Principles

1. Readable at a glance by a tipsy person, from across a table.
2. Each draw should feel like a small moment of ceremony.
3. The rule and how to play it come first. Everything else is secondary.
4. It must work with zero setup; player names are optional.
5. Responsible drinking: the 18+ gate and gentle reminders stay.

## Accessibility & Inclusion

High contrast and large type for low-light and noisy environments. Respect reduced motion. Never rely on sound alone.
