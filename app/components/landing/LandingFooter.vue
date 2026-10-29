<script setup lang="ts">
</script>

<template>
  <footer class="border-t py-10">
    <div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
      <!-- Logo (same as header) -->
      <NuxtLink
        to="/"
        class="flex items-center"
      >
        <img
          :src="`${useRuntimeConfig().app.baseURL}image/icon/ic_logo_koebyte.png`"
          alt="Koebyte logo"
          width="300"
          height="100"
          class="h-10 w-auto"
        >
      </NuxtLink>

      <div class="text-slate-500">
        © 2026 Koebyte
      </div>
    </div>
  </footer>
</template>
