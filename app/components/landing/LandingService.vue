<script setup lang="ts">
import LazyImage from '~/components/image/LazyImage.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { services } = useSiteContent()
</script>

<template>
  <section
    id="services"
    class="py-16 md:py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">
        <h2 class="text-3xl font-bold md:text-4xl">
          {{ t('services.heading') }}
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
          {{ t('services.subheading') }}
        </p>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-4 md:mt-16 md:gap-8 lg:grid-cols-4">
        <div
          v-for="service in services"
          :key="service.key"
          class="rounded-2xl border p-4 transition hover:-translate-y-2 hover:shadow-xl md:rounded-3xl md:p-8"
        >
          <LazyImage
            :src="service.icon"
            :alt="service.title"
            fit="contain"
            wrapper-class="mb-4 h-12 w-12 rounded-2xl bg-transparent md:mb-6 md:h-32 md:w-32"
            img-class="p-2 md:p-6"
          />

          <h3 class="text-base font-semibold md:text-xl">
            {{ service.title }}
          </h3>

          <p class="mt-2 text-sm text-slate-600 md:mt-3 md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
