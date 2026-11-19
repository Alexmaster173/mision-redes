"use strict";
const CACHE = "mision-redes-v3";
const FILES = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
const SCOPE = self.registration.scope;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Solo maneja y guarda archivos propios de la app (misma carpeta). Todo lo demás pasa directo, sin guardarse.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(SCOPE)) return;
  e.respondWith(
    fetch(req).then(r => {
      if (r.ok && r.type === "basic") {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return r;
    }).catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => {
      const mine = cs.find(c => c.url.startsWith(SCOPE));
      return mine ? mine.focus() : self.clients.openWindow(SCOPE);
    })
  );
});
