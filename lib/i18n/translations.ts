import { Locale } from './config'

type TranslationKeys = {
  [key: string]: string | TranslationKeys
}

let translations: Record<Locale, TranslationKeys> = {
  en: {},
  mr: {},
}

// Load translations synchronously
export function loadTranslations() {
  try {
    // Note: In Next.js, you'll typically load these at build time or use dynamic imports
    // This is a placeholder that shows the structure
    return translations
  } catch (error) {
    console.error('Failed to load translations:', error)
    return translations
  }
}

export function getNestedProperty(obj: any, path: string): string {
  return path.split('.').reduce((current, prop) => current?.[prop], obj) || path
}

export function t(locale: Locale, key: string, translations: Record<Locale, TranslationKeys>): string {
  const localeData = translations[locale] || {}
  return getNestedProperty(localeData, key)
}
