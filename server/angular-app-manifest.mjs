
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'maminedib.github.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/maminedib.github.io/accueil",
    "route": "/maminedib.github.io"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JK3Z2AEO.js"
    ],
    "route": "/maminedib.github.io/accueil"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7I5XUVRB.js"
    ],
    "route": "/maminedib.github.io/presentation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3MKGS6AQ.js"
    ],
    "route": "/maminedib.github.io/competences"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GFNOEYO4.js"
    ],
    "route": "/maminedib.github.io/competence/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YBHTSFWD.js"
    ],
    "route": "/maminedib.github.io/realisations"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GBK3OBDK.js"
    ],
    "route": "/maminedib.github.io/realisation/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-P65GAHEK.js"
    ],
    "route": "/maminedib.github.io/parcours"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-I3FNTXHC.js"
    ],
    "route": "/maminedib.github.io/contact"
  },
  {
    "renderMode": 0,
    "redirectTo": "/maminedib.github.io/accueil",
    "route": "/maminedib.github.io/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11374, hash: '947015b1ea14b8562589445ae9603f078b413a2f7ebc4e03df59811b49a09fe7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1134, hash: 'ec921274a2d7ca8d8d82cf32b09e2da36ace395050be7d828c1c635e1e6c1611', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GABH4BLG.css': {size: 30150, hash: 'gp4TCuqhBbE', text: () => import('./assets-chunks/styles-GABH4BLG_css.mjs').then(m => m.default)}
  },
};
