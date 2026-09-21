export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n'
  ],
  ssr: true,
  devtools: {
    enabled: true
  },
  // Static site generation
  app: {
    baseURL: '/koesolution/',
    buildAssetsDir: 'assets'
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { ssr: true }
  },

  compatibilityDate: '2025-01-15',
  // Ensure the build output directory is configured correctly
  nitro: {
    preset: 'github-pages',
    prerender: {
      // The language switcher toggles locale via JS (setLocale), not an
      // <a href>, so Nitro's link-crawler never discovers /en on its own.
      // List both locale routes explicitly so both get static HTML.
      routes: ['/', '/en'],
      crawlLinks: true
    }
  },

  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
      hmr: {
        protocol: 'wss',
        clientPort: 443
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'id', language: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    // Indonesian is the default (unprefixed) locale since it's the primary
    // market we target for SEO ("jasa website", "bikin website", "jasa IT").
    // English lives at /en/ so both locales get their own crawlable,
    // indexable URL instead of sharing a single no_prefix URL.
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    // Used by useLocaleHead() to build absolute canonical/hreflang URLs.
    baseUrl: 'https://kevinlho.github.io',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'koe_locale',
      redirectOn: 'root'
    }
  },

  image: {
    provider: 'ipx'
  }
})
