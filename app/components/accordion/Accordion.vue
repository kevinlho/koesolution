<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  defaultOpen: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['toggle'])

const internalOpen = ref(props.defaultOpen)

const isActive = computed(() =>
  props.isOpen !== undefined ? props.isOpen : internalOpen.value
)

const toggle = () => {
  if (props.isOpen !== undefined) {
    emit('toggle')
  } else {
    internalOpen.value = !internalOpen.value
  }
}
</script>

<template>
  <div
    :id="id"
    class="rounded-lg mb-4 overflow-hidden"
  >
    <button
      class="w-full px-6 py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
      @click="toggle"
    >
      <span class="font-semibold text-left text-black text-2xl">{{ title }}</span>
      <span class="text-xl">
        {{ isActive ? '−' : '+' }}
      </span>
    </button>

    <transition name="accordion">
      <div
        v-show="isActive"
        class="px-6 py-6 bg-white text-black"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
