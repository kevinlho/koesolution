export interface WhatsappOptions {
  /** Destination phone number, with country code (e.g. "+628129991699"). */
  number?: string
  /** Default pre-filled message used when openWhatsapp() is called with no argument. */
  message?: string
}

const DEFAULT_NUMBER = '+628129991699'
const DEFAULT_MESSAGE = 'Hello KOEsolutions, I\'d like to know more about your services!'

/**
 * Vue composable for linking out to WhatsApp chat.
 *
 * const { openWhatsapp } = useWhatsapp()
 * openWhatsapp() // opens wa.me with the default number/message
 * openWhatsapp('Custom message') // override the message for this call
 */
export const useWhatsapp = (options: WhatsappOptions = {}) => {
  const number = (options.number ?? DEFAULT_NUMBER).replace(/[^\d+]/g, '')

  const buildUrl = (message?: string) => {
    const text = message ?? options.message ?? DEFAULT_MESSAGE
    const query = text ? `?text=${encodeURIComponent(text)}` : ''
    return `https://wa.me/${number.replace('+', '')}${query}`
  }

  const openWhatsapp = (message?: string) => {
    if (import.meta.client) {
      window.open(buildUrl(message), '_blank', 'noopener,noreferrer')
    }
  }

  return {
    number,
    buildUrl,
    openWhatsapp
  }
}
