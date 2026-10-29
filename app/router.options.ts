import type { RouterConfig } from '@nuxt/schema'

// Keep the current scroll position when navigating within the landing page
// (e.g. switching language between / and /en) instead of jumping to the top
// or to a #hash section.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.name !== from.name && !String(to.name ?? '').startsWith('index')) {
      return { top: 0 }
    }
    return false
  }
}
