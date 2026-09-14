<script setup lang="ts">
const props = defineProps({
  heightVh: {
    type: Number,
    default: 60
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/image/background/bg_landing.jpg'
  },
  overlay: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <section
    class="relative w-full overflow-hidden"
    :style="{ height: `${heightVh}vh` }"
  >
    <!-- Background Image -->
    <img
      :src="props.image"
      class="w-full h-full object-cover"
      alt="Hero background"
    >

    <!-- Overlay -->
    <div
      v-if="overlay"
      class="absolute inset-0 bg-black/40 z-10"
    />

    <!-- Content -->
    <div class="absolute inset-0 flex items-center justify-center px-4 z-20">
      <div class="flex flex-col gap-6 max-w-5xl w-full text-left">
        <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
          {{ title }}
        </h1>

        <h5
          v-if="subtitle"
          class="text-base md:text-lg leading-snug text-gray-200 max-w-md whitespace-pre-line"
        >
          {{ subtitle }}
        </h5>
      </div>
    </div>
  </section>
</template>
