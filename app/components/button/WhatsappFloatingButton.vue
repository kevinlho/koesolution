<script setup lang="ts">
interface Props {
  message?: string
  number?: string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  message: undefined,
  number: undefined,
  label: undefined
})

const { t } = useI18n()

const resolvedLabel = computed(() => props.label ?? t('whatsapp.label'))
const resolvedMessage = computed(() => props.message ?? t('whatsapp.defaultMessage'))

const { openWhatsapp } = useWhatsapp({ number: props.number })
</script>

<template>
  <button
    v-motion
    type="button"
    :aria-label="resolvedLabel"
    class="group fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:w-auto hover:justify-start hover:gap-3 hover:pr-5 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    :initial="{ opacity: 0, scale: 0, y: 20 }"
    :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 500, delay: 800, type: 'spring', stiffness: 150 } }"
    @click="openWhatsapp(resolvedMessage)"
  >
    <!-- Ping ring for attention -->
    <span class="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />

    <UIcon
      name="simple-icons:whatsapp"
      class="h-7 w-7 shrink-0"
    />

    <span class="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
      {{ resolvedLabel }}
    </span>
  </button>
</template>
