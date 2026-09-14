// Domain layer: framework-agnostic shapes describing the content this site
// renders. Nothing here knows about Vue, i18n, or how content is stored —
// it just describes what a "Stat", "Project", etc. *is*.

export interface NavLink {
  key: string
  link: string
  labelKey: string
}

export interface StatMetric {
  key: string
  value: number
  suffix: string
  labelKey: string
}

export interface ServiceOffering {
  key: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export interface PortfolioProject {
  key: string
  /** Unsplash photo id used to derive a resized image URL. */
  unsplashId: string
  titleKey: string
  descriptionKey: string
}

export interface ValueProposition {
  key: string
  number: string
  titleKey: string
  descriptionKey: string
}

export interface ProcessStep {
  key: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export interface Testimonial {
  key: string
  nameKey: string
  companyKey: string
  quoteKey: string
}
