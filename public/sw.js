// Simple service worker for static Astro site
const CACHE_NAME = 'jh-virtuell-v1';
const ASSET_HOSTS = [/^\/_astro\//, /^\/scripts\//, /^\/fonts\//, /^\/favicon.ico$/, /^\/logo-jh\.webp$/];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Navigation requests: Network-first with fallback to cache
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, resClone));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Static assets: Stale-while-revalidate
  const path = url.pathname;
  if (ASSET_HOSTS.some((re) => re.test(path))) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => { cache.put(req, res.clone()); return res; }).catch(() => undefined);
        return cached || network || fetch(req);
      })
    );
  }
});

