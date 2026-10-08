<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { testimonials } = useSiteContent()
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <h2
        v-motion
        class="mb-16 text-center text-4xl font-bold"
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        {{ t('testimonials.heading') }}
      </h2>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.key"
          v-motion
          class="flex h-full flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 120 } }"
        >
          <!-- Quote -->
          <p class="flex-1 text-slate-600">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="mt-6 border-t border-slate-100 pt-4">
            <div class="font-bold">
              {{ testimonial.name }}
            </div>

            <div class="text-sm text-slate-500">
              {{ testimonial.company }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
