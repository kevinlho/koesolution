<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  fit?: 'cover' | 'contain'
  wrapperClass?: string
  imgClass?: string
  aspectRatio?: string
  /** Set for above-the-fold images (e.g. the hero) so they load immediately
   * at high priority instead of being deferred like below-the-fold images. */
  eager?: boolean
  srcset?: string
  sizes?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  fit: 'cover',
  wrapperClass: '',
  imgClass: '',
  aspectRatio: undefined,
  eager: false,
  srcset: undefined,
  sizes: undefined
})

const loaded = ref(false)
const errored = ref(false)

const onLoad = () => {
  loaded.value = true
}

const onError = () => {
  errored.value = true
  loaded.value = true
}

watch(() => props.src, () => {
  loaded.value = false
  errored.value = false
})
</script>

<template>
  <div
    class="relative overflow-hidden bg-slate-100"
    :class="wrapperClass"
    :style="aspectRatio ? { aspectRatio } : undefined"
  >
    <!-- Shimmer skeleton, shown until the image finishes loading -->
    <div
      v-if="!loaded"
      class="absolute inset-0 animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 bg-[length:200%_100%]"
      aria-hidden="true"
    />

    <img
      v-if="!errored"
      :src="src"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      class="h-full w-full transition-opacity duration-500 ease-out"
      :class="[
        imgClass,
        fit === 'cover' ? 'object-cover' : 'object-contain',
        loaded ? 'opacity-100' : 'opacity-0'
      ]"
      @load="onLoad"
      @error="onError"
    />

    <div
      v-else
      class="absolute inset-0 flex items-center justify-center text-xs text-slate-400"
    >
      Image unavailable
    </div>
  </div>
</template>
