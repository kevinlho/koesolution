<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { navItems } from '@/utils/navigation'
import {
  redirectToInstagram,
  redirectToWhatsappIt,
  redirectToYouTube
} from '~/utils/redirect'

/* --------------------------
   STATE
-------------------------- */
const mobileMenuOpen = ref(false)
const isSticky = ref(false)

/* --------------------------
   METHODS
-------------------------- */
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 80
}

/* --------------------------
   EFFECTS
-------------------------- */
watch(mobileMenuOpen, (val) => {
  document.body.classList.toggle('overflow-hidden', val)
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- HEADER -->
  <header
    :class="[
      'w-full px-4 py-4 z-50 transition-all duration-300',
      isSticky
        ? 'fixed top-0 left-0 bg-white/95 backdrop-blur shadow-lg'
        : 'absolute top-0 left-0 bg-transparent'
    ]"
  >
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <!-- LOGO -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <img
          :src="isSticky ? '/image/icon/ic_logo_dark.webp' : '/image/icon/ic_logo_light.webp'"
          alt="Designerworks Logo"
          width="80"
          height="80"
          class="w-16 h-16"
        >
        <span
          :class="[
            'font-bold text-xl transition-colors',
            isSticky ? 'text-black' : 'text-white'
          ]"
        >
          Designerworks
        </span>
      </NuxtLink>

      <!-- DESKTOP NAV -->
      <nav
        :class="[
          'hidden lg:flex gap-6 font-semibold transition-colors',
          isSticky ? 'text-black' : 'text-white'
        ]"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="hover:text-blue-500 transition"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- CTA + MOBILE -->
      <div class="flex items-center gap-4">
        <button
          class="hidden lg:block bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
          @click="redirectToWhatsappIt"
        >
          Talk to us
        </button>

        <button
          class="lg:hidden p-2 rounded bg-gray-100 hover:bg-gray-200 transition"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- HEADER SPACER (prevents jump) -->
  <div
    v-if="isSticky"
    class="h-[96px]"
  />

  <!-- MOBILE MENU -->
  <div
    v-if="mobileMenuOpen"
    class="fixed inset-0 z-[9999] bg-white flex flex-col px-4 py-4 lg:hidden"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img
          src="/image/icon/ic_logo_dark.webp"
          alt="Designerworks Logo"
          width="80"
          height="80"
          class="w-16 h-16"
        >
        <span class="font-bold text-xl text-black">
          Designerworks
        </span>
      </div>

      <button
        class="p-2 rounded bg-gray-100 hover:bg-gray-200"
        @click="toggleMobileMenu"
      >
        <svg
          class="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <line
            x1="4"
            y1="6"
            x2="20"
            y2="6"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
          />
          <line
            x1="4"
            y1="18"
            x2="20"
            y2="18"
          />
        </svg>
      </button>
    </div>

    <!-- MOBILE NAV -->
    <nav class="mt-8 flex flex-col gap-4 font-semibold text-gray-800">
      <NuxtLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="hover:text-blue-500 transition"
        @click="mobileMenuOpen = false"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <!-- SOCIAL -->
    <div class="mt-auto pb-10">
      <p class="font-bold mb-2 text-black">
        Follow us
      </p>
      <div class="flex gap-3">
        <button
          class="group"
          @click="redirectToInstagram"
        >
          <Icon
            name="simple-icons:instagram"
            class="w-8 h-8 text-black group-hover:text-gray-300 transition-colors duration-200"
          />
        </button>
        <button
          class="group"
          @click="redirectToYouTube"
        >
          <Icon
            name="simple-icons:youtube"
            class="w-8 h-8 text-black group-hover:text-gray-300 transition-colors duration-200"
          />
        </button>
      </div>
    </div>
  </div>
</template>
