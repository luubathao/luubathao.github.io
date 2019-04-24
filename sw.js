importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/60f907eaa99ca9ecc673.js",
    "revision": "22a61e560c96059e7d3d809fcdf2cfa9"
  },
  {
    "url": "/_nuxt/63fd45f897d7583ba3b1.js",
    "revision": "eef5491f96bf1a407389a5d25327d413"
  },
  {
    "url": "/_nuxt/6b318c15d68cf6a5e250.js",
    "revision": "ed72f91c55b1ec8d21e32044805bfef0"
  },
  {
    "url": "/_nuxt/8a1017197195136e0703.js",
    "revision": "20f5d22ae04d87566cc6d074675ab440"
  },
  {
    "url": "/_nuxt/9665cd3241acfb7931b0.js",
    "revision": "b11c866f08faa439762ef71ea5c38cb4"
  },
  {
    "url": "/_nuxt/a1f05d0d85aa1c59bbbd.js",
    "revision": "583c4c108f62f2c23eff40f8e02a423c"
  },
  {
    "url": "/_nuxt/a65a0a4d38fbc6aec63a.js",
    "revision": "b571abb6243598974d4d8e4fbe89dc0d"
  },
  {
    "url": "/_nuxt/a7916e08f7def7e74b3c.js",
    "revision": "7943013b54d7a83749b558a79efa4d3e"
  },
  {
    "url": "/_nuxt/b73a6500c7990338f2e3.js",
    "revision": "486da9ff9be5d77a3c84d73eaf79a85b"
  },
  {
    "url": "/_nuxt/dbcbba59940199ff60d0.js",
    "revision": "9772bf08df2557f5889789e1dd85cc31"
  },
  {
    "url": "/_nuxt/e070d122d042dd7338fd.js",
    "revision": "56998d19abe52526245fbf64c2f38872"
  },
  {
    "url": "/_nuxt/e13945a2b26bdbc356d0.js",
    "revision": "cb448f30313de69177bc8f7c7e0bc7b2"
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
