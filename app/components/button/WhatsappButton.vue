<script setup>
import { redirectToWhatsappIt } from '@/utils/redirect'

const props = defineProps({
  title: {
    type: String,
    default: 'Consult Now!'
  }
})
</script>

<template>
  <button
    class="bg-lime-200 text-gray-900 font-semibold rounded px-5 py-2 hover:bg-lime-300 transition"
    @click="redirectToWhatsappIt"
  >
    {{ props.title }}
  </button>
</template>
