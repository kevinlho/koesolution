<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { t, locale, locales, setLocale } = useI18n()
const { navigation } = useSiteContent()

const availableLocales = computed(() =>
  (locales.value as Array<{ code: string, name?: string }>).map(l => ({
    code: l.code,
    label: l.code.toUpperCase()
  }))
)

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed top-2 left-4 right-4 z-50">
    <div
      :class="[
        'mx-auto max-w-7xl transition-all duration-250',
        isScrolled
          ? 'rounded-3xl border-slate-200 bg-white/80 shadow-xl backdrop-blur-xl'
          : 'rounded-3xl bg-white/10 backdrop-blur-sm'
      ]"
    >
      <div class="flex items-center justify-between px-5 py-4 sm:px-8">
        <!-- Logo -->
        <div class="text-xl font-bold">
          <span class="text-indigo-600">{{ t('header.logoPrefix') }}</span>{{ t('header.logoSuffix') }}
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-8 md:flex">
          <a
            v-for="nav in navigation"
            :key="nav.key"
            :href="nav.link"
            class="font-medium text-slate-700 transition hover:text-indigo-600"
          >
            {{ nav.label }}
          </a>
        </nav>

        <!-- Desktop CTA + Language Switcher -->
        <div class="hidden items-center gap-4 md:flex">
          <div class="flex items-center rounded-full border border-slate-200 bg-white/60 p-1 text-xs font-semibold">
            <button
              v-for="loc in availableLocales"
              :key="loc.code"
              type="button"
              class="rounded-full px-3 py-1 transition"
              :class="locale === loc.code ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'"
              @click="setLocale(loc.code as 'en' | 'id')"
            >
              {{ loc.label }}
            </button>
          </div>

          <button class="rounded-xl bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700">
            {{ t('header.cta') }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="rounded-xl p-2 transition hover:bg-slate-100 md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <!-- Hamburger -->
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- Close -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="mx-3 mb-3 rounded-2xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl md:hidden"
        >
          <nav class="flex flex-col p-4">
            <a
              v-for="nav in navigation"
              :key="nav.key"
              :href="nav.link"
              class="rounded-xl px-4 py-3 transition hover:bg-slate-100"
              @click="mobileMenuOpen = false"
            >
              {{ nav.label }}
            </a>

            <div class="mt-2 flex items-center justify-center gap-1 rounded-full border border-slate-200 p-1 text-xs font-semibold">
              <button
                v-for="loc in availableLocales"
                :key="loc.code"
                type="button"
                class="flex-1 rounded-full px-3 py-2 transition"
                :class="locale === loc.code ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'"
                @click="setLocale(loc.code as 'en' | 'id')"
              >
                {{ loc.label }}
              </button>
            </div>

            <button class="mt-4 rounded-xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700">
              {{ t('header.cta') }}
            </button>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>
