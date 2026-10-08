<script setup lang="ts">
import LazyImage from '~/components/image/LazyImage.vue'

const { t, locale } = useI18n()

// The Indonesian headline runs noticeably longer than the English one
// ("Kami Membangun Produk Digital yang Mendorong Pertumbuhan" vs.
// "We Build Digital Products That Drive Growth"), so at the same text-7xl
// it overflowed/wrapped awkwardly. Scale the heading per locale instead of
// using one fixed size for both.
const headingSizeClass = computed(() =>
  locale.value === 'id'
    ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
    : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
)
</script>

<template>
  <section class="relative w-screen min-h-screen overflow-hidden flex items-center py-20 lg:py-0">
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

    <div class="relative mx-auto max-w-7xl w-full px-6">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="text-center lg:text-left">
          <span class="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            {{ t('hero.badge') }}
          </span>

          <h1
            class="mt-6 text-balance font-extrabold leading-tight"
            :class="headingSizeClass"
          >
            {{ t('hero.titleLine1') }}
            <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {{ t('hero.titleHighlight') }}
            </span>
            {{ t('hero.titleLine2') }}
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-base text-slate-600 sm:text-lg lg:mx-0">
            {{ t('hero.description') }}
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4 lg:mt-12 lg:justify-start">
            <button class="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 sm:px-8 sm:py-4 sm:text-base">
              {{ t('hero.ctaPrimary') }}
            </button>

            <button class="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50 sm:px-8 sm:py-4 sm:text-base">
              {{ t('hero.ctaSecondary') }}
            </button>
          </div>
        </div>

        <div class="mt-4 lg:mt-0">
          <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">
            <LazyImage
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=75"
              srcset="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=75 900w, https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=75 1600w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              :alt="t('hero.imageAlt')"
              aspect-ratio="16/10"
              wrapper-class="w-full rounded-2xl"
              eager
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
