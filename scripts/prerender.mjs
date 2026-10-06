// 將 public/rules.js 嘅規則寫入 HTML，等搜尋器唔使行 JS 都睇到內容。
// 改完 rules.js 之後行：node scripts/prerender.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const dir = new URL('../public/', import.meta.url);
const ctx = {};
vm.runInNewContext(readFileSync(new URL('rules.js', dir), 'utf8') + ';this.RULES=RULES;this.RANKS=RANKS;', ctx);
const { RULES, RANKS } = ctx;

const keys = [...RANKS, 'JK'];
const label = k => (k === 'JK' ? '鬼' : k);
const suitOf = (k, i) => (k === 'JK' ? 'j' : ['h', 'd', 's', 'c'][i % 4]);

const blocks = {
  jump: keys.map(k => `<li><a href="#r-${k}"><b>${label(k)}</b>${RULES[k].name}</a></li>`).join('\n'),
  list: keys.map((k, i) => {
    const r = RULES[k];
    return `<article class="rule-band" id="r-${k}" data-suit="${suitOf(k, i)}">
  <header><div class="head-in">
    <span class="rank" aria-hidden="true">${label(k)}</span>
    <h2>${r.name}<span class="visually-hidden">（${k === 'JK' ? '鬼牌' : k}）</span></h2>
    <p class="short">${r.short}</p>
  </div></header>
  <div class="body wrap">
    <ol class="how">${r.how.map(h => `<li>${h}</li>`).join('')}</ol>
    ${r.examples ? `<p class="ex"><b>例如：</b>${r.examples.join('、')}</p>` : ''}
  </div>
</article>`;
  }).join('\n'),
  links: keys.map(k => `<a href="/rules#r-${k}">${label(k)} ${RULES[k].name}</a>`).join(' · '),
};

for (const file of ['rules.html', 'index.html']) {
  const url = new URL(file, dir);
  let html = readFileSync(url, 'utf8');
  for (const [name, body] of Object.entries(blocks)) {
    html = html.replace(new RegExp(`(<!-- prerender:${name} -->)[\\s\\S]*?(<!-- /prerender:${name} -->)`), `$1\n${body}\n$2`);
  }
  writeFileSync(url, html);
}
console.log('prerendered', keys.length, 'rules');
