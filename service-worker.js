const CACHE_NAME = 'sahur-alarm';
const urlsToCache = [
  '/',
  '/index.html',
  '/bg.jpg',
  '/bangun.mp3',
  '/error.html',
  '/sc.js',
  '/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.table('202001100100101001010100100101001010101010010101');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});