export const defaultLocale = 'en'
export const locales = ['en', 'mr'] as const
export type Locale = (typeof locales)[number]

export const i18nConfig = {
  defaultLocale,
  locales,
} as const
