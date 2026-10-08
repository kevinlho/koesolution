<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
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
</template>
