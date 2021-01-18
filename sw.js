const staticCacheName = "Roxie Bilesky Art";
const assets = [
  "/manifest.json",
  "/css/style.css",
  "/fonts/Rawkbrush.otf",
  "/js/animations.js",
  "/js/firestore.js",
  "/js/topnav.js",
  "/pwaicons/apple-icon-180.png",
  "/pwaicons/manifest-icon-192.png",
  "/pwaicons/manifest-icon-512.png",
  "/views/index.html",
  "/views/404.html",
  "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
