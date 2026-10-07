// 離線都玩到：先用快取，背景再更新（stale-while-revalidate）
const CACHE = 'drink-v3';
const FILES = ['/', '/rules', '/style.css', '/app.js', '/rules.js', '/icon.svg', '/manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (e.request.method !== 'GET' || (url.origin !== location.origin && !font)) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: !font });
    const fresh = fetch(e.request).then(r => {
      if ((r.ok || r.type === 'opaque') && !r.redirected) c.put(e.request, r.clone());
      return r;
    }).catch(() => hit);
    if (hit) e.waitUntil(fresh);
    return hit || fresh;
  }));
});
