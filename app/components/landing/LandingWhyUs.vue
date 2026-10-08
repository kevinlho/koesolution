<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { valueProps } = useSiteContent()
</script>

<template>
  <section class="bg-[#F6F7FC] py-24 md:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <!-- Left -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        >
          <p class="mb-8 text-sm font-bold uppercase tracking-[0.35em] text-indigo-700">
            {{ t('why.eyebrow') }}
          </p>

          <h2
            class="max-w-2xl text-[42px] font-bold leading-[1.05] text-[#0B0B4F]
               md:text-[54px]
               lg:text-[68px]"
          >
            {{ t('why.titleLine1') }}
            <br>
            {{ t('why.titleConnector') }}
            <span class="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              {{ t('why.titleHighlight') }}
            </span>
          </h2>

          <p class="mt-10 max-w-xl text-lg leading-9 text-slate-600">
            {{ t('why.description') }}
          </p>

          <div class="mt-14 flex flex-col gap-5 sm:flex-row">
            <button
              class="rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              {{ t('why.ctaPrimary') }}
            </button>

            <button
              class="rounded-full border border-slate-200 bg-white px-10 py-5 text-lg font-semibold text-[#17174F] transition duration-300 hover:border-indigo-300 hover:bg-indigo-50"
            >
              {{ t('why.ctaSecondary') }}
            </button>
          </div>
        </div>

        <!-- Right -->
        <div class="grid gap-8 md:grid-cols-2">
          <div
            v-for="(item, index) in valueProps"
            :key="item.key"
            v-motion
            class="rounded-[30px] border border-[#E6E9F5] bg-white p-10 lg:p-11 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          >
            <div class="text-[18px] font-bold text-indigo-700">
              {{ item.number }}
            </div>

            <h3 class="mt-8 text-[22px] font-bold leading-snug text-[#16164F]">
              {{ item.title }}
            </h3>

            <p class="mt-6 text-[18px] leading-9 text-slate-500">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
