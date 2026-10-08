<script setup lang="ts">
import LazyImage from '~/components/image/LazyImage.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { projects } = useSiteContent()
</script>

<template>
  <section
    id="portfolio"
    class="py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div
        v-motion
        class="mb-14"
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-4xl font-bold">
          {{ t('portfolio.heading') }}
        </h2>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <div
          v-for="(project, index) in projects"
          :key="project.key"
          v-motion
          class="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 120 } }"
        >
          <LazyImage
            :src="project.image"
            :srcset="project.srcset"
            sizes="(min-width: 1024px) 33vw, 100vw"
            :alt="project.title"
            wrapper-class="h-60 w-full"
            img-class="transition duration-500 group-hover:scale-110"
          />

          <div class="p-6">
            <h3 class="text-xl font-bold">
              {{ project.title }}
            </h3>

            <p class="mt-2 text-slate-600">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
