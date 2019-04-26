importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/037180500e6331fb1e19.js",
    "revision": "e4f09bb50f46c17f324fbb27f693f230"
  },
  {
    "url": "/_nuxt/0ef123b44d4797966c37.js",
    "revision": "a586d2733acfece8cd1b21ba3c9498c7"
  },
  {
    "url": "/_nuxt/1270adbde94b6b92fb30.js",
    "revision": "1b31a56baa5c8fc8bbc492947655113e"
  },
  {
    "url": "/_nuxt/177a6a7d7f821b190dd7.js",
    "revision": "bb2e193c4a5b21e0ad8a8d1292b4ffc1"
  },
  {
    "url": "/_nuxt/1d1613bf18ecd2c05100.js",
    "revision": "9ff938269bcf0da672ea2feb184ffce0"
  },
  {
    "url": "/_nuxt/303a4cba11d3902eacbb.js",
    "revision": "21199a79acf176eb6558e5f2f93482da"
  },
  {
    "url": "/_nuxt/3d9dcbe7193d75cb795e.js",
    "revision": "8e0d6c8ebcc975962eadd3489f66a57c"
  },
  {
    "url": "/_nuxt/3e60b559b8a5c517bebe.js",
    "revision": "6037884d049553b90c535bf09b0a7dfa"
  },
  {
    "url": "/_nuxt/506591a1a41654a76985.js",
    "revision": "56ccfc2983ad86c424c5e5ee22ba0722"
  },
  {
    "url": "/_nuxt/5fe6f3eeb4b946ce5571.js",
    "revision": "c78dbaa88665c4faf437087ad9b972f4"
  },
  {
    "url": "/_nuxt/8aa798b5bb4cc2bfb275.js",
    "revision": "8958ac2bd55099ab28adb7cd2a80be5f"
  },
  {
    "url": "/_nuxt/8f8314e5633cabd19e79.js",
    "revision": "5633544fdf70bd63501e50a2bbafb0cb"
  },
  {
    "url": "/_nuxt/9f9d0a2feb2c7a17e84c.js",
    "revision": "ea67bfc516816c3be24f8e194cceb02b"
  },
  {
    "url": "/_nuxt/a09efc735cc9d35cd072.js",
    "revision": "bf498aa555b82a1a4f66a14f61acef1b"
  },
  {
    "url": "/_nuxt/a7d5ea74e8b35f560b48.js",
    "revision": "297f6cffbc9f2e04ea9b1d88675746de"
  },
  {
    "url": "/_nuxt/ac0b44715651326c3aad.js",
    "revision": "9e444cae36ffc0821506a7964ba15248"
  },
  {
    "url": "/_nuxt/bd6dd41dd93f957a1ade.js",
    "revision": "6d7616b43fc5adcc106a7908372ef11b"
  },
  {
    "url": "/_nuxt/f2558ad6817ec38fc238.js",
    "revision": "d5fdb11549342aee871122cba9d95d93"
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
