// Data layer: the site's static content, expressed as data rather than
// hardcoded inside components. Each entry points at an i18n key instead of
// holding raw copy, so the same structure serves every locale. If this ever
// moves to a CMS/API, only this file (and useSiteContent, which reads it)
// would need to change — components and pages stay untouched.

import icSoftware from '~/assets/image/icon/ic_software.png'
import icAppSoftware from '~/assets/image/icon/ic_app_software.png'
import icUx from '~/assets/image/icon/ic_ux.png'
import icAnalysis from '~/assets/image/icon/ic_analysis.png'
import type {
  NavLink,
  StatMetric,
  ServiceOffering,
  PortfolioProject,
  ValueProposition,
  ProcessStep,
  Testimonial
} from '~/domain/types'

export const navigation: NavLink[] = [
  { key: 'services', link: '#services', labelKey: 'header.nav.services' },
  { key: 'portfolio', link: '#portfolio', labelKey: 'header.nav.portfolio' },
  { key: 'about', link: '#about', labelKey: 'header.nav.about' },
  { key: 'contact', link: '#contact', labelKey: 'header.nav.contact' }
]

export const stats: StatMetric[] = [
  { key: 'projects', value: 150, suffix: '+', labelKey: 'stats.projects' },
  { key: 'clients', value: 60, suffix: '+', labelKey: 'stats.clients' },
  { key: 'experience', value: 8, suffix: '+', labelKey: 'stats.experience' },
  { key: 'team', value: 15, suffix: '', labelKey: 'stats.team' }
]

export const services: ServiceOffering[] = [
  { key: 'web', icon: icSoftware, titleKey: 'services.web.title', descriptionKey: 'services.web.description' },
  { key: 'mobile', icon: icAppSoftware, titleKey: 'services.mobile.title', descriptionKey: 'services.mobile.description' },
  { key: 'automate', icon: icAnalysis, titleKey: 'services.automate.title', descriptionKey: 'services.automate.description' },
  { key: 'ecommerce', icon: icUx, titleKey: 'services.ecommerce.title', descriptionKey: 'services.ecommerce.description' }
]

export const projects: PortfolioProject[] = [
  { key: 'healthcare', unsplashId: 'photo-1460925895917-afdab827c52f', titleKey: 'portfolio.healthcare.title', descriptionKey: 'portfolio.healthcare.description' },
  { key: 'fintech', unsplashId: 'photo-1551288049-bebda4e38f71', titleKey: 'portfolio.fintech.title', descriptionKey: 'portfolio.fintech.description' },
  { key: 'ecommerce', unsplashId: 'photo-1556740749-887f6717d7e4', titleKey: 'portfolio.ecommerce.title', descriptionKey: 'portfolio.ecommerce.description' }
]

export const valueProps: ValueProposition[] = [
  { key: 'team', number: '01', titleKey: 'why.team.title', descriptionKey: 'why.team.description' },
  { key: 'growth', number: '02', titleKey: 'why.growth.title', descriptionKey: 'why.growth.description' },
  { key: 'onTime', number: '03', titleKey: 'why.onTime.title', descriptionKey: 'why.onTime.description' },
  { key: 'partner', number: '04', titleKey: 'why.partner.title', descriptionKey: 'why.partner.description' }
]

export const processSteps: ProcessStep[] = [
  { key: 'contact', icon: 'lucide:mail', titleKey: 'process.contact.title', descriptionKey: 'process.contact.description' },
  { key: 'planning', icon: 'lucide:message-circle', titleKey: 'process.planning.title', descriptionKey: 'process.planning.description' },
  { key: 'development', icon: 'lucide:laptop', titleKey: 'process.development.title', descriptionKey: 'process.development.description' },
  { key: 'launch', icon: 'lucide:rocket', titleKey: 'process.launch.title', descriptionKey: 'process.launch.description' }
]

export const testimonials: Testimonial[] = [
  { key: 'john', nameKey: 'testimonials.john.name', companyKey: 'testimonials.john.company', quoteKey: 'testimonials.john.quote' },
  { key: 'sarah', nameKey: 'testimonials.sarah.name', companyKey: 'testimonials.sarah.company', quoteKey: 'testimonials.sarah.quote' },
  { key: 'michael', nameKey: 'testimonials.michael.name', companyKey: 'testimonials.michael.company', quoteKey: 'testimonials.michael.quote' }
]
