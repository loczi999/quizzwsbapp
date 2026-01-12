const CACHE_NAME = 'quiz-cache-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json'
];

// Instalacja i cache'owanie
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Pobieranie zasobów
self.addEventListener('fetch', (e) => {
    // Jeśli zapytanie jest do API, omiń cache (chcemy świeże pytania lub obsługę offline logiczną)
    if (e.request.url.includes('api.php')) {
        return; 
    }

    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});