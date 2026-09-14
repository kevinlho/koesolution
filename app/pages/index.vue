<script setup lang="ts">
import LandingHeader from '~/components/header/LandingHeader.vue'
import LandingHero from '~/views/landing/LandingHero.vue'
import LandingService from '~/views/landing/LandingService.vue'
import AnimatedNumber from '~/components/animation/AnimatedNumber.vue'
import LazyImage from '~/components/image/LazyImage.vue'
import WhatsappFloatingButton from '~/components/button/WhatsappFloatingButton.vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { t } = useI18n()
const { stats, projects, valueProps, processSteps, testimonials } = useSiteContent()
</script>

<template>
  <div class="bg-white text-slate-900">
    <LandingHeader />

    <!-- Hero -->
    <LandingHero />

    <!-- Services -->
    <LandingService />

    <!-- Stats -->
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

    <!-- Portfolio -->
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

    <!-- Process -->
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

    <!-- Testimonials -->
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

    <!-- CTA -->
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

    <!-- Footer -->
    <footer class="border-t py-10">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 md:flex-row">
        <div>
          <div class="text-xl font-bold">
            {{ t('site.title') }}
          </div>

          <p class="mt-2 text-slate-500">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <div class="text-slate-500">
          © 2026 {{ t('site.title') }}
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp CTA -->
    <WhatsappFloatingButton />
  </div>
</template>
