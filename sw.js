const staticCacheName = 'Roxie Bilesky Art';
const assets = [
  '/public/css/style.css',
  '/public/fonts/Rawkbrush.otf',
  '/public/js/animations.js',
  '/public/js/firestore.js',
  '/public/pwaicons/apple-icon-180.png',
  '/public/pwaicons/manifest-icon-192.png',
'/public/pwaicons/manifest-icon-512.png',
  '/public/views/index.html',
  '/public/views/404.html'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});