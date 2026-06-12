/* KINETIK PWA SERVICE WORKER v1.1
   Shared by index.html and all App_*.html. Cache-first for app shell files,
   network-first for everything else. Keep simple — replaced by Firebase Hosting later. */
const CACHE = "kinetik-v1.1";
const SHELL = [
  "./index.html",
  "./Kinetik.html",
  "./App_PadelAmericano.html",
  "./App_EventPoll.html",
  "./icon_kinetik.svg",
  "./icon_padel.svg",
  "./icon_poll.svg"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).catch(() => {})));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit ||
      fetch(e.request).then(res => {
        if (res.ok && e.request.url.startsWith(self.location.origin)) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit)
    )
  );
});
