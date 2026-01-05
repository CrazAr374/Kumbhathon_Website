'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Locale } from './config'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  translations: Record<string, any>
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ 
  children, 
  initialLocale = 'en',
  translations 
}: { 
  children: React.ReactNode
  initialLocale?: Locale
  translations: Record<string, any>
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [clientTranslations, setClientTranslations] = useState(translations)

  useEffect(() => {
    // Save locale preference to localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale')
      if (saved) {
        setLocale(saved as Locale)
      }
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = clientTranslations[locale]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <I18nContext.Provider value={{ 
      locale, 
      setLocale: handleSetLocale, 
      t,
      translations: clientTranslations
    }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
