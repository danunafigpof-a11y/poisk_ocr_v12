## 📋 Код для вставки — копируй целиком

// service-worker.js — оффлайн-кеш POISK OCR v12

const CACHE_NAME = 'poisk-ocr-v12-v1.0.0';
const RUNTIME_CACHE = 'poisk-ocr-runtime-v1';

const PRECACHE_URLS = [
  './',
  './INDEX.html',
  './manifest.json',
  './REGISTRY.json',
  './MAP.md',
  './LIMITATIONS.md',
  './LICENSE',
  './README.md'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const CURRENT_CACHES = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((name) => !CURRENT_CACHES.includes(name));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => caches.delete(cacheToDelete)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return caches.open(RUNTIME_CACHE).then((cache) => {
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) cache.put(event.request, response.clone());
          return response;
        }).catch(() => {
          if (event.request.mode === 'navigate') return caches.match('./INDEX.html');
        });
      });
    })
  );
});

---
