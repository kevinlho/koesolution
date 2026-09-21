<script setup>
const { t, locale } = useI18n()
const { app: appConfig } = useRuntimeConfig()

// Auto-generates <html lang>, canonical <link rel="canonical">, and
// <link rel="alternate" hreflang="..."> for every locale (including
// x-default) based on the current route + i18n.baseUrl — this is what
// tells Google the Indonesian and English pages are translations of each
// other rather than duplicate content.
const i18nHead = useLocaleHead({
  addSeoAttributes: true
})

const SITE_ORIGIN = 'https://kevinlho.github.io'
const SITE_PATH = '/koesolution'
const SITE_URL = `${SITE_ORIGIN}${SITE_PATH}`
const OG_IMAGE = `${SITE_ORIGIN}${SITE_PATH}/image/icon/ic_logo.png`

useHead(() => ({
  htmlAttrs: {
    ...i18nHead.value.htmlAttrs
  },
  link: [
    { rel: 'icon', href: `${appConfig.baseURL}image/icon/ic_logo_light.webp` },
    ...(i18nHead.value.link ?? [])
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...(i18nHead.value.meta ?? [])
  ]
}))

useSeoMeta({
  title: () => t('site.title'),
  description: () => t('site.description'),
  ogSiteName: 'KOEsolutions',
  ogType: 'website',
  ogUrl: () => (locale.value === 'en' ? `${SITE_URL}/en` : SITE_URL),
  ogTitle: () => t('site.title'),
  ogDescription: () => t('site.description'),
  ogImage: OG_IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('site.title'),
  twitterDescription: () => t('site.description'),
  twitterImage: OG_IMAGE
})

// Structured data (schema.org) so search engines can understand KOEsolutions
// as a business entity — name, services offered, and contact point — rather
// than just parsing loose page text. This is what powers rich results for
// "jasa website", "bikin website", "jasa IT" style local/service searches.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'KOEsolutions',
        'url': `${SITE_URL}/`,
        'image': OG_IMAGE,
        'logo': OG_IMAGE,
        'description': t('site.description'),
        'areaServed': {
          '@type': 'Country',
          'name': 'Indonesia'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'telephone': '+62-812-9991-699',
          'url': 'https://wa.me/628129991699'
        },
        'makesOffer': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Jasa Pembuatan Website' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Jasa Pembuatan Aplikasi Android & iOS' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Digitalisasi & Otomatisasi Proses Bisnis' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Jasa Pembuatan Platform E-commerce' } }
        ]
      })
    }
  ]
})
</script>

<template>
  <UApp>
    <UMain>
      <div class="min-h-screen bg-blue-100">
        <NuxtPage />
      </div>
    </UMain>
  </UApp>
</template>
