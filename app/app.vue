<script setup>
const { t, locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/image/icon/ic_logo_light.webp' }
  ]
})

useSeoMeta({
  title: () => t('site.title'),
  description: () => t('site.description'),
  ogTitle: () => t('site.title'),
  ogDescription: () => t('site.description'),
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
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
