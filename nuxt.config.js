const metaName = "P1RK5";

const metaFings = {
  name: metaName,
  url: "https://arx.p1rk5.com",
  title: "ARX // P1RK5 // 25YRS",
  description: "Snapshots from four points in the life of an oddball",
  image: "https://arx.p1rk5.com/social.png",
  twitter: "@p1rk5"
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: metaFings.title,
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaFings.description },
      { name: "keywords", content: "" },
      { name: "author", content: "Dan Cruzat" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: metaFings.twitter },
      { name: "twitter:creator", content: metaFings.twitter },
      { name: "twitter:title", content: metaFings.title },
      { name: "twitter:description", content: metaFings.description },
      { name: "twitter:image", content: metaFings.image },
      { property: "og:url", content: metaFings.url },
      { property: "og:title", content: metaFings.title },
      { property: "og:site_name", content: metaFings.url },
      { property: "og:description", content: metaFings.description },
      { property: "og:image", content: metaFings.image },
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:wght@200;400&family=Rubik&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' },
      { rel: 'apple-touch-icon', href: '/icon.png' }
      ],
  },

  ssr: true,

  router: {
    base: '/',
    routeNameSplitter: '/'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
