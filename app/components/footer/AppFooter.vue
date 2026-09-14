<script setup>
import { navItems, itservices, eduservices } from '~/utils/navigation'
import { redirectToInstagram, redirectToYouTube } from '@/utils/redirect'
</script>

<template>
  <footer class="bg-[#296aaf] text-white px-4 py-12">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
      <!-- Logo + Social -->
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-4">
          <img
            src="/image/icon/ic_logo.png"
            alt="Designerworks Logo"
            width="80"
            height="80"
            class="w-16 h-16"
          >
          <h2 class="text-2xl font-bold">
            Designerworks
          </h2>
        </div>

        <p class="text-sm text-gray-300 mb-6 max-w-sm">
          Your Trusted One-Stop Technology Partner
        </p>

        <div class="flex items-center gap-4">
          <button
            class="group"
            @click="redirectToInstagram"
          >
            <Icon
              name="simple-icons:instagram"
              class="w-8 h-8 text-white group-hover:text-gray-300 transition-colors duration-200"
            />
          </button>

          <button
            class="group"
            @click="redirectToYouTube"
          >
            <Icon
              name="simple-icons:youtube"
              class="w-8 h-8 text-white group-hover:text-gray-300 transition-colors duration-200"
            />
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-10">
        <div>
          <h3 class="text-lg font-semibold border-b-2 border-blue-600 inline-block mb-4">
            Navigation
          </h3>

          <ul class="space-y-2 text-sm text-gray-300">
            <li
              v-for="item in navItems"
              :key="item.label"
            >
              <NuxtLink
                :to="item.to"
                class="hover:text-blue-500"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-10">
        <div>
          <h3 class="text-lg font-semibold border-b-2 border-blue-600 inline-block mb-4">
            IT Services
          </h3>

          <ul class="space-y-2 text-sm text-gray-300">
            <li
              v-for="item in itservices"
              :key="item.title"
            >
              <NuxtLink
                :to="item.redirect"
                class="hover:text-blue-500"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-10">
        <div>
          <h3 class="text-lg font-semibold border-b-2 border-blue-600 inline-block mb-4">
            Education
          </h3>

          <ul class="space-y-2 text-sm text-gray-300">
            <li
              v-for="item in eduservices"
              :key="item.title"
            >
              <NuxtLink
                :to="item.redirect"
                class="hover:text-blue-500"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-white/20 my-10" />

    <!-- Bottom Section -->
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-6 text-sm text-gray-400">
      <div class="text-center space-y-1">
        <p>
          © <a
            href="#"
            class="text-blue-500 hover:underline"
          >Designerworks</a> 2026.
          All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
