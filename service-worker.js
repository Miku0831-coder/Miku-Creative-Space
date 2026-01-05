self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("miku-cache-v2").then(cache => {
      return cache.addAll([
        "/Miku-Creative-Space/",
        "/Miku-Creative-Space/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

