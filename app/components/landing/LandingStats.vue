<script setup lang="ts">
import AnimatedNumber from '~/components/animation/AnimatedNumber.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { stats } = useSiteContent()
</script>

<template>
  <section class="bg-slate-900 py-24 text-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-10 text-center md:grid-cols-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.key"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 120 } }"
        >
          <div class="text-5xl font-bold">
            <AnimatedNumber
              :to="stat.value"
              :suffix="stat.suffix"
            />
          </div>

          <div class="mt-3 text-slate-400">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
