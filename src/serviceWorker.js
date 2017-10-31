(() => {
// TODO Enum this
// CACHE_NAME should include the version no. of the service worker
// TODO Need a way to programticallly update the version
const doCache = false
const CACHE_NAME = 'PWA_DFYG'
const urlsToCache = [
  '/',
  'main.bundle.js',
  'manifest.json',
]

self.addEventListener('install', (event) => {
  console.log('INSTALLING Service Worker: %o', event)
  event.waitUntil(
    saveToCache()
  )}
)

// TODO add in logic for development
self.addEventListener('activate', (event) => {
  console.log('ACTIVATING Service Worker: %o', event)
  event.waitUntil(
    updateAppCache()
  )
  console.log('cache?', caches.keys())
  return self.clients.claim()
})

// Intercept browser network requests, serve from cache
self.addEventListener('fetch', (event) => {
  console.log('FETCHING Service Worker: %o', event)
  event.respondWith(
    fetchResource(event.request)
  )
})

// TODO this may need to wire up to a service layer
const fetchResource = (request) => {
  console.log('SW FETCH function; request %o', request)
  return caches.match(request)
    .then((response) => {
      console.log('fetch resource: %o', response)
      return response || fetch(request)
    })
}

const saveToCache = () => {
  console.log('SW SAVE function; caches: %o', caches)
  return caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.addAll(urlsToCache)
    })
}

const updateAppCache = () => {
  console.log('SW UPDATE function; caches: %o', caches)
  // return self.clients.claim()
}

// TODO since the whole update cycle is observable, see if this can
// be simplified with rxjs
// Runs when the worker is first installed
})()
