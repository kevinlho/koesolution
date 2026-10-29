// Restore the scroll position after a page refresh. The position is kept in
// sessionStorage per path, so it only applies to the same tab and page.
export default defineNuxtPlugin((nuxtApp) => {
  const key = () => `scroll:${window.location.pathname}`

  const save = () => {
    try {
      sessionStorage.setItem(key(), String(window.scrollY))
    } catch { /* storage unavailable */ }
  }

  window.history.scrollRestoration = 'manual'
  window.addEventListener('beforeunload', save)
  window.addEventListener('pagehide', save)

  nuxtApp.hook('app:suspense:resolve', () => {
    let y = 0
    try {
      y = Number(sessionStorage.getItem(key()) ?? 0)
    } catch { /* storage unavailable */ }
    if (y > 0) requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' }))
  })
})
