// Use-case / application layer: takes the raw content data (data layer)
// and the active locale (via useI18n), and produces ready-to-render,
// localized view-models. Components only ever talk to this composable —
// they never import data/content.ts or translation keys directly, which
// keeps the presentation layer free of content and i18n plumbing.

import {
  navigation,
  stats,
  services,
  projects,
  valueProps,
  processSteps,
  testimonials
} from '~/data/content'
import { unsplashUrl, unsplashSrcset } from '~/utils/unsplash'

export const useSiteContent = () => {
  const { t } = useI18n()

  const localizedNavigation = computed(() =>
    navigation.map(item => ({
      key: item.key,
      link: item.link,
      label: t(item.labelKey)
    }))
  )

  const localizedStats = computed(() =>
    stats.map(item => ({
      key: item.key,
      value: item.value,
      suffix: item.suffix,
      label: t(item.labelKey)
    }))
  )

  const localizedServices = computed(() =>
    services.map(item => ({
      key: item.key,
      icon: item.icon,
      title: t(item.titleKey),
      description: t(item.descriptionKey)
    }))
  )

  const localizedProjects = computed(() =>
    projects.map(item => ({
      key: item.key,
      title: t(item.titleKey),
      description: t(item.descriptionKey),
      image: unsplashUrl(item.unsplashId, 700),
      srcset: unsplashSrcset(item.unsplashId, [700, 1400])
    }))
  )

  const localizedValueProps = computed(() =>
    valueProps.map(item => ({
      key: item.key,
      number: item.number,
      title: t(item.titleKey),
      description: t(item.descriptionKey)
    }))
  )

  const localizedProcessSteps = computed(() =>
    processSteps.map(item => ({
      key: item.key,
      icon: item.icon,
      title: t(item.titleKey),
      description: t(item.descriptionKey)
    }))
  )

  const localizedTestimonials = computed(() =>
    testimonials.map(item => ({
      key: item.key,
      name: t(item.nameKey),
      company: t(item.companyKey),
      quote: t(item.quoteKey)
    }))
  )

  return {
    navigation: localizedNavigation,
    stats: localizedStats,
    services: localizedServices,
    projects: localizedProjects,
    valueProps: localizedValueProps,
    processSteps: localizedProcessSteps,
    testimonials: localizedTestimonials
  }
}
