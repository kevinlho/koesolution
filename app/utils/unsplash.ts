// Infrastructure helper: turns an Unsplash photo id into a resized,
// compressed CDN URL instead of the multi-MB original. Isolated here so
// the data layer stays free of "how images are fetched" details.
export const unsplashUrl = (id: string, width: number, quality = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`

export const unsplashSrcset = (id: string, widths: number[], quality = 70) =>
  widths.map(w => `${unsplashUrl(id, w, quality)} ${w}w`).join(', ')
