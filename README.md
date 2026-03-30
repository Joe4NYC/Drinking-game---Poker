# 🃏 酒Game 大排檔 — Online Drinking Game (Poker Edition)

A browser-based Hong Kong-style drinking card game built with vanilla HTML, CSS, and JavaScript. Players take turns drawing cards from a virtual deck, and each card triggers a unique drinking rule inspired by local Cantonese party game culture.

---

## 🌐 Live Demo

🎮 **[▶ Play Now — drinkingamepokder.netlify.app](https://drinkingamepokder.netlify.app/)**

> No installation needed — just open the link and start playing!
---

## 📁 Project Structure

```
Drinking-game---Poker/
├── index.html            # Main game page
├── intro.html            # Game introduction page
├── rules.html            # Full rules reference page
├── poker_game.js         # Core game logic
├── preload-manager.js    # Asset preloading manager
├── styles.css            # Stylesheet
├── pokers image/         # Card face images (JPEG)
├── bgPhoto/              # Background images
├── sounds/               # Sound effects (shuffle, draw, flip, end)
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Crawler rules
└── googlecd6a916cfd55f822.html  # Google Search Console verification
```

---

## 🎮 How to Play

1. Open the game in any modern browser.
2. Configure settings (optional):
   - **包含鬼牌 (Joker)** — Toggle to include Joker cards.
   - **允許重複抽牌** — Allow repeated card draws (infinite mode).
   - **音效 / 背景音樂** — Toggle sound effects and background music.
3. Click **抽牌** to draw a card.
4. Follow the rule shown on screen!
5. Click **結束遊戲** to end the session and reshuffle.

---

## 📜 Card Rules (牌面規則)

| Card | Rule |
|------|------|
| **A** | 指定一人飲 |
| **2** | 陪飲員 — 跟住每個要飲的人一起飲，直到下一個人抽到 2 |
| **3** | 大細波 — 做錯動作或講錯就飲一啖 |
| **4** | 開規矩 — 自訂規則，犯規者飲一啖 |
| **5** | 圍枚 |
| **6** | 開 Topic — 輪流回答，講唔出或重複者飲 |
| **7** | 拍 7 — 報數遊戲，7 或 7 的倍數要拍手 |
| **8** | 廁所卡 — 保留作上廁所免飲用 |
| **9** | 撞機 — 同時講出相同數字或最後報數者飲 |
| **10** | 癡線佬 — 其他人應聲就要飲 |
| **J** | 上家飲 |
| **Q** | 下家飲 |
| **K** | 自己飲（飲啦飲啦！） |
| **Joker** | 免飲一杯 🍀 |

---

## ⚙️ Technical Features

- **Pure vanilla JS** — No frameworks or dependencies required.
- **Fisher-Yates shuffle** — Fair and unbiased deck shuffling algorithm.
- **DOM caching** — Frequently accessed elements are cached to boost performance.
- **Image preloading** — Card images are preloaded using `requestIdleCallback` to ensure smooth gameplay.
- **Sound system** — Sound effects for drawing, flipping, shuffling, and game end.
- **Background music toggle** — Optional looping background music.
- **Responsive design** — Mobile-friendly layout.
- **Deck animation** — Visual draw and shuffle animations.
- **`requestIdleCallback` polyfill** — Cross-browser compatibility.

---

## 🚀 Getting Started

No build tools or installations needed.

```bash
# Clone the repository
git clone https://github.com/Joe4NYC/Drinking-game---Poker.git

# Open in browser
open index.html
```

Or simply drag `index.html` into any browser window.

---

## 🛠️ Customisation

To add or modify rules, edit the `rules` object in `poker_game.js`:

```js
const rules = {
  'A': '指個一人飲',
  'K': '自己飲',
  // Add your own rules here...
};
```

To add new sound effects, place `.mp3` files in the `sounds/` folder and update the `audioFiles` object in `poker_game.js`.

---

## 👥 Contributors

- [Joe4NYC](https://github.com/Joe4NYC)
- [Ambrose-Kwan](https://github.com/Ambrose-Kwan)

---

## ⚠️ Disclaimer

This project is intended for entertainment purposes among legal-drinking-age adults. Please drink responsibly. The developers do not encourage excessive alcohol consumption.

---

## 📄 License

This project is open source. Feel free to fork and customise for your own game nights!
