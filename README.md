# 酒Game大排檔

香港網上抽牌飲酒遊戲：唔使帶啤牌、唔使睇對照表，抽牌即刻顯示規則同玩法教學。

▶ https://drink.joenyc.net

## 功能

- 抽牌即顯示規則，每張牌有「點玩？」教學
- 可入玩家名：自動顯示輪到邊個、上家下家，記低陪飲員、癡線佬、廁所牌、免飲牌、開咗嘅規矩
- 自訂規則、大小鬼、無限模式
- 重新整理唔會唔見進度（localStorage）
- PWA：可加到主畫面、離線玩；抽牌期間唔會熄 mon
- 18+ 年齡確認

## 結構

```
public/          # 成個網站，直接上 Cloudflare
  index.html     # 遊戲
  rules.html     # 規則同教學（scripts/prerender.mjs 由 rules.js 生成靜態內容）
  404.html
  rules.js       # 規則資料 + 牌面 HTML，兩頁共用
  app.js         # 遊戲邏輯
  style.css
  sw.js          # 離線快取
scripts/prerender.mjs  # 規則 → 靜態 HTML
wrangler.toml    # Cloudflare Workers 靜態資源設定
netlify.toml     # 舊 Netlify 網址 301 去新網域
```

冇依賴。改規則改 `public/rules.js`，之後行 `node scripts/prerender.mjs`，將規則寫入 HTML 方便 SEO。設計系統見 [DESIGN.md](DESIGN.md)，產品定位見 [PRODUCT.md](PRODUCT.md)。

## 本地開發 / 部署

```bash
wrangler dev
```

```bash
wrangler deploy
```
