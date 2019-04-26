importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d008829e7bd590b0f34.js",
    "revision": "f1593f4d16e5a626885a6ed83006ff6b"
  },
  {
    "url": "/_nuxt/4eef3ae4e3a2b81b1a7f.js",
    "revision": "9be88eb23913cb0d7d450526ced1b11b"
  },
  {
    "url": "/_nuxt/63fd45f897d7583ba3b1.js",
    "revision": "eef5491f96bf1a407389a5d25327d413"
  },
  {
    "url": "/_nuxt/64baa65be14c8f225b55.js",
    "revision": "228bfd28c05268757f71f92c47cc37eb"
  },
  {
    "url": "/_nuxt/6b318c15d68cf6a5e250.js",
    "revision": "ed72f91c55b1ec8d21e32044805bfef0"
  },
  {
    "url": "/_nuxt/752bc95253fcf4cae16b.js",
    "revision": "58a9a747aa3236d7b75e31a1be9b4017"
  },
  {
    "url": "/_nuxt/8a1017197195136e0703.js",
    "revision": "20f5d22ae04d87566cc6d074675ab440"
  },
  {
    "url": "/_nuxt/91bc5dd7ad0cb79ad98b.js",
    "revision": "541a1852e29ff96fa95b35dcafa4489d"
  },
  {
    "url": "/_nuxt/9738dddc6765db7ec894.js",
    "revision": "2cb861f69781a2bbc28d6441aae19c27"
  },
  {
    "url": "/_nuxt/a18db8f691cd5593ffb4.js",
    "revision": "dfe534851bb26f491cb3715d58caa57f"
  },
  {
    "url": "/_nuxt/a7916e08f7def7e74b3c.js",
    "revision": "7943013b54d7a83749b558a79efa4d3e"
  },
  {
    "url": "/_nuxt/b73a6500c7990338f2e3.js",
    "revision": "486da9ff9be5d77a3c84d73eaf79a85b"
  }
], {
  "cacheId": "FrontEndExample",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
