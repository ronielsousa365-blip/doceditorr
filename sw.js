const CACHE_NAME = 'doceditor-cyber-v2';

const urlsToCache = [
'/doceditor-cyber/',
'/doceditor-cyber/index.html',
'/doceditor-cyber/manifest.json'
];

self.addEventListener('install',event=>{
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener('fetch',event=>{
event.respondWith(
caches.match(event.request)
.then(response=>{
return response || fetch(event.request);
})
);
});