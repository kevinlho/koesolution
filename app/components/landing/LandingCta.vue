<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section
    id="contact"
    class="px-6 pb-24"
  >
    <div
      v-motion
      class="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-20 text-center text-white"
      :initial="{ opacity: 0, scale: 0.96 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 700 } }"
    >
      <h2 class="text-5xl font-bold">
        {{ t('cta.heading') }}
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-lg">
        {{ t('cta.description') }}
      </p>

      <button class="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 transition duration-300 hover:scale-105">
        {{ t('cta.button') }}
      </button>
    </div>
  </section>
</template>
