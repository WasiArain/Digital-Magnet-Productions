self.__BUILD_MANIFEST = function (s, e, t, a, c, r, i) {
  return {
    __rewrites: {
      afterFiles: [{
        has: s,
        source: "/:nextInternalLocale(en|en\\-gb|zh|zh\\-tw|fr|fr\\-ca|ko|pt|pt\\-br|es)/files/:path*",
        destination: s
      }],
      beforeFiles: [],
      fallback: []
    },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: e,
      bitArray: []
    },
    __routerFilterDynamic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: e,
      bitArray: []
    },
    "/404": [t, a, c, r, i, "static/css/87e1138cb780944e.css", "static/chunks/pages/404-367993c91007eee9.js"],
    "/_error": ["static/chunks/pages/_error-43da09f371f85967.js"],
    "/style-guide": ["static/css/9f5c19fe1faf6b52.css", "static/chunks/pages/style-guide-17bc93b90c63b9fa.js"],
    "/[[...slug]]": [t, a, c, r, i, "static/chunks/pages/[[...slug]]-4ea64fb8a0cf22bd.js"],
    sortedPages: ["/404", "/_app", "/_error", "/style-guide", "/[[...slug]]"]
  }
}(void 0, NaN, "static/chunks/69b51223-34e4cf24a68c6974.js", "static/chunks/1497359d-b10065b93dbddc30.js", "static/chunks/409-6ffb199b8cedc546.js", "static/css/f227213fd29ee750.css", "static/chunks/854-f2501e3327a61937.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();