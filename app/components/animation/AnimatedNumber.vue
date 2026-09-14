<script setup lang="ts">
const props = defineProps({
  to: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 1200
  },
  suffix: {
    type: String,
    default: ''
  }
})

const displayValue = ref(0)

if (import.meta.client) {
  onMounted(() => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / props.duration, 1)

      displayValue.value = Math.round(props.to * progress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  })
}
</script>

<template>
  <span>{{ displayValue.toLocaleString() }}{{ suffix }}</span>
</template>
