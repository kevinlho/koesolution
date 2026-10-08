<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { processSteps } = useSiteContent()
</script>

<template>
  <section
    id="about"
    class="bg-slate-50 py-20 md:py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <!-- Heading -->
      <div
        v-motion
        class="mx-auto mb-16 max-w-2xl text-center"
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">
          {{ t('process.heading') }}
        </h2>

        <p class="mt-4 text-gray-600">
          {{ t('process.subheading') }}
        </p>
      </div>

      <!-- Process Grid -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in processSteps"
          :key="step.key"
          v-motion
          class="text-center"
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 150 } }"
        >
          <!-- Icon -->
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
          >
            <UIcon
              :name="step.icon"
              class="h-10 w-10 text-indigo-600"
            />
          </div>

          <!-- Content -->
          <h3 class="mt-5 text-xl font-semibold text-gray-900">
            {{ step.title }}
          </h3>

          <p class="mx-auto mt-3 max-w-xs text-gray-600">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
