const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

let opts = { players: [], joker: false, repeat: false, sound: true, custom: {}, ...store.get('opts', {}) };
let g = store.get('game', null) || newGame();
let busy = false;

// ---------- 牌堆 ----------
function buildDeck() {
  const deck = SUITS.flatMap(s => RANKS.map(r => ({ r, s })));
  if (opts.joker) deck.push({ r: 'JK', s: 'black' }, { r: 'JK', s: 'red' });
  return deck;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function newGame() {
  return { deck: shuffle(buildDeck()), drawn: 0, turn: 0, last: null, hist: [], buddy: null, crazy: null, toilet: {}, pass: {}, laws: [] };
}

const save = () => { store.set('opts', opts); store.set('game', g); };
const seat = i => opts.players[(i + opts.players.length) % opts.players.length];

// ---------- 抽牌 ----------
function draw() {
  if (busy) return;
  busy = true;
  wake();

  let card;
  if (opts.repeat) {
    const d = buildDeck();
    card = d[Math.floor(Math.random() * d.length)];
  } else {
    if (!g.deck.length) {
      g.deck = shuffle(buildDeck());
      g.hist = [];
      toast('成副牌抽晒，已經重新洗牌');
    }
    card = g.deck.pop();
    g.hist.push(SUIT_KEY[card.s]);
  }
  g.drawn++;

  const n = opts.players.length;
  const who = n ? seat(g.turn) : null;
  const holder = who || '抽牌者';
  if (card.r === '2') g.buddy = holder;
  if (card.r === '10') g.crazy = holder;
  if (card.r === '8') g.toilet[holder] = (g.toilet[holder] || 0) + 1;
  if (card.r === 'JK') g.pass[holder] = (g.pass[holder] || 0) + 1;
  g.last = { card, who, prev: n ? seat(g.turn - 1) : null, next: n ? seat(g.turn + 1) : null };
  if (n) g.turn = (g.turn + 1) % n;
  save();

  sfx(520, 160, 0.12);
  navigator.vibrate?.(20);
  const el = $('#card');
  const wasUp = el.classList.contains('up');
  el.classList.remove('up');
  $('#sticker').classList.remove('on');
  setTimeout(() => {
    showCard(true);
    renderRule(true);
    renderStatus();
    renderTurn();
    sfx(card.r === 'K' ? 520 : 700, card.r === 'K' ? 1040 : 980, 0.1);
    setTimeout(() => (busy = false), 450);
  }, wasUp ? 300 : 0);
}

// 牌面印規則名；自訂規則太長就唔印，改喺色塊大字顯示
function cardSay(card) {
  const custom = opts.custom[card.r];
  if (!custom) return RULES[card.r].name;
  return [...custom].length <= 6 ? custom : null;
}

function showCard(fresh) {
  const { card, who } = g.last;
  const front = $('#front');
  const say = cardSay(card);
  front.className = faceClass(card);
  front.innerHTML = faceHTML(card, say);
  front.dataset.suit = SUIT_KEY[card.s];
  const el = $('#card');
  el.classList.toggle('fresh', !!fresh);
  el.classList.add('up');
  // 叫口號：牌面每蓋一粒字震一下
  if (fresh && say) front.querySelectorAll('.say > span').forEach((_, i) => setTimeout(() => navigator.vibrate?.(12), 450 + i * 140));
  const st = $('#sticker');
  st.dataset.suit = SUIT_KEY[card.s];
  st.textContent = who ? `${who} 抽` : '';
  setTimeout(() => st.classList.add('on'), 350);
}

// ---------- 畫面 ----------
function renderTurn() {
  $('#turn').innerHTML = (opts.players.length
    ? `<span>輪到 <b>${esc(seat(g.turn))}</b></span>`
    : `<button class="link-btn" type="button" data-open-settings>加入玩家名</button>`)
    + `<span class="left">${opts.repeat ? `已抽 ${g.drawn} 張` : `剩 ${g.deck.length} 張`}</span>`;

  const rail = $('#rail');
  rail.hidden = opts.repeat;
  if (!opts.repeat) {
    const total = buildDeck().length;
    rail.style.setProperty('--n', total);
    rail.innerHTML = Array.from({ length: total }, (_, i) =>
      g.hist[i] ? `<i data-suit="${g.hist[i]}"></i>` : '<i></i>').join('');
  }
}

// 每張牌由邊個做：入咗玩家名先有
const ACTS = {
  A: (w) => `${w} 揀人飲`, 2: (w) => `${w} 做陪飲員`, 8: (w) => `${w} 收咗廁所卡`,
  10: (w) => `${w} 做癡線佬`, JK: (w) => `${w} 收咗免飲卡`, K: (w) => `${w} 自己飲`,
  J: (w, p) => `${p} 飲`, Q: (w, p, n) => `${n} 飲`,
};

function renderRule(animate) {
  const box = $('#rule');
  const chant = text => `<h2 class="chant" style="--n:${[...text].length}" aria-label="${esc(text)}">${[...text].map((ch, i) =>
    `<span aria-hidden="true" style="--i:${i}">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('')}</h2>`;

  if (!g.last) {
    box.dataset.suit = 'none';
    box.innerHTML = `<div class="field-in">${chant('撳抽牌開始')}
      <p class="short">抽到咩牌就做咩，規則同玩法會喺度出。</p></div>`;
    return;
  }
  const { card, who, prev, next } = g.last;
  const rule = RULES[card.r];
  const custom = opts.custom[card.r];
  const act = who && !custom && (ACTS[card.r] || (w => `${w} 開始`))(who, prev, next);

  box.dataset.suit = SUIT_KEY[card.s];
  box.innerHTML = `<div class="field-in">
    <h2 class="lead">${esc(custom || rule.short)}</h2>
    ${act ? `<p class="target">${esc(act)}</p>` : ''}
    ${card.r === '4' ? `<form class="law-form" id="law-form">
      <input type="text" name="law" maxlength="40" placeholder="寫低新規矩，方便大家記住" aria-label="新規矩">
      <button>記低</button></form>` : ''}
    ${custom ? '' : `<details><summary>點玩？</summary>
      <ol class="how">${rule.how.map(h => `<li>${h}</li>`).join('')}</ol>
      ${rule.examples ? `<p class="ex"><b>例如：</b>${rule.examples.join('、')}</p>` : ''}
      <p class="ex"><a href="/rules#r-${card.r}">睇 ${card.r === 'JK' ? '鬼牌' : card.r} 嘅完整教學</a></p></details>`}
    </div>`;

  if (animate) {
    box.classList.remove('unfurl');
    void box.offsetWidth;
    box.classList.add('unfurl');
    box.style.setProperty('--n', 0);
  }
}

const X_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';

function renderStatus() {
  const chips = [];
  if (g.buddy) chips.push(`<span class="chip"><small>陪飲員</small>${esc(g.buddy)}</span>`);
  if (g.crazy) chips.push(`<span class="chip"><small>癡線佬</small>${esc(g.crazy)}</span>`);
  for (const [kind, label] of [['toilet', '廁所卡'], ['pass', '免飲卡']]) {
    for (const [name, c] of Object.entries(g[kind])) {
      chips.push(`<button class="chip use" type="button" data-use="${kind}" data-name="${esc(name)}"
        title="撳一下用咗一張"><small>${label}</small>${esc(name)} ×${c}</button>`);
    }
  }
  const laws = g.laws.map((l, i) =>
    `<li>${esc(l)}<button class="x" type="button" data-law="${i}" aria-label="取消呢條規矩">${X_ICON}</button></li>`).join('');

  $('#status').innerHTML = chips.length || laws
    ? `<h2>場上狀態${chips.some(c => c.includes('data-use')) ? ' <small>撳白色卡＝用咗一張</small>' : ''}</h2>
      <div class="chips">${chips.join('')}</div>${laws ? `<ul class="laws">${laws}</ul>` : ''}`
    : '';
}

function render() {
  g.hist ??= [];
  renderTurn();
  renderRule(false);
  renderStatus();
  if (g.last) showCard();
  else {
    $('#card').classList.remove('up');
    $('#sticker').textContent = '';
  }
}

// ---------- 音效 / 震動 / 防熄 mon ----------
let ac;
function sfx(from, to, dur) {
  if (!opts.sound) return;
  try {
    ac ??= new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), v = ac.createGain(), t = ac.currentTime;
    o.type = 'triangle';
    o.frequency.setValueAtTime(from, t);
    o.frequency.exponentialRampToValueAtTime(to, t + dur);
    v.gain.setValueAtTime(0.15, t);
    v.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(v).connect(ac.destination);
    o.start(t);
    o.stop(t + dur);
  } catch {}
}

let lock;
async function wake() {
  if (lock && !lock.released) return;
  try { lock = await navigator.wakeLock?.request('screen'); } catch {}
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && lock) wake();
});

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2000);
}

// ---------- 設定 ----------
const KEYS = [...RANKS, 'JK'];
$('#custom').innerHTML = KEYS.map(k => `<label class="custom-row"><span>${k === 'JK' ? '鬼' : k}</span>
  <input type="text" name="c_${k}" maxlength="60" placeholder="${RULES[k].name}：${RULES[k].short}"></label>`).join('');

function openSettings() {
  const f = $('#settings form');
  f.players.value = opts.players.join('\n');
  f.joker.checked = opts.joker;
  f.repeat.checked = opts.repeat;
  f.sound.checked = opts.sound;
  for (const k of KEYS) f[`c_${k}`].value = opts.custom[k] || '';
  $('#settings').returnValue = '';
  $('#settings').showModal();
}

$('#settings').addEventListener('close', e => {
  const f = $('#settings form');
  const jokerChanged = f.joker.checked !== opts.joker;
  opts.players = f.players.value.split('\n').map(s => s.trim()).filter(Boolean).slice(0, 20);
  opts.joker = f.joker.checked;
  opts.repeat = f.repeat.checked;
  opts.sound = f.sound.checked;
  opts.custom = Object.fromEntries(KEYS.map(k => [k, f[`c_${k}`].value.trim()]).filter(([, v]) => v));
  if (e.target.returnValue === 'new') {
    g = newGame();
    toast('新一局，已洗牌');
  } else if (jokerChanged) {
    g.deck = shuffle(buildDeck());
    g.hist = [];
    toast(opts.joker ? '已加入大小鬼，重新洗牌' : '已移除大小鬼，重新洗牌');
  }
  if (opts.players.length) g.turn %= opts.players.length;
  save();
  render();
});

// ---------- 事件 ----------
$('#draw').addEventListener('click', draw);
$('#deck').addEventListener('click', draw);
$('#card').addEventListener('click', draw);
$('#open-settings').addEventListener('click', openSettings);
$('#new-game').addEventListener('click', () => $('#settings').close('new'));

document.addEventListener('click', e => {
  if (e.target.closest('[data-open-settings]')) openSettings();
});

$('#status').addEventListener('click', e => {
  const use = e.target.closest('[data-use]');
  const law = e.target.closest('[data-law]');
  if (use) {
    const bag = g[use.dataset.use], name = use.dataset.name;
    if (--bag[name] <= 0) delete bag[name];
    toast(`${name} 用咗一張${use.dataset.use === 'toilet' ? '廁所卡' : '免飲卡'}`);
  } else if (law) {
    g.laws.splice(+law.dataset.law, 1);
  } else return;
  save();
  renderStatus();
});

$('#rule').addEventListener('submit', e => {
  e.preventDefault();
  const text = e.target.law.value.trim();
  if (text) g.laws.push(text);
  save();
  e.target.outerHTML = `<p class="short">${text ? '記低咗，睇下面「場上狀態」' : ''}</p>`;
  renderStatus();
});

$('#share').addEventListener('click', async () => {
  const data = { title: '酒Game大排檔', text: '飲酒遊戲網上版，抽牌即刻睇到規則 🍻', url: location.origin };
  if (navigator.share) {
    try { await navigator.share(data); } catch {}
  } else {
    try { await navigator.clipboard.writeText(data.url); toast('已複製連結'); } catch { toast(data.url); }
  }
});

// ---------- 年齡確認 ----------
const age = $('#age');
age.addEventListener('cancel', e => e.preventDefault());
age.addEventListener('close', () => {
  if (age.returnValue === 'yes') return store.set('adult', true);
  document.body.innerHTML = `<main class="wrap"><p class="foot" style="font-size:18px;padding-top:30svh">
    多謝你誠實。<br>滿 18 歲再嚟玩啦！</p></main>`;
});
if (!store.get('adult', false)) age.showModal();

render();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
