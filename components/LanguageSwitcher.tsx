'use client'

import { useI18n } from '@/lib/i18n/context'
import { Locale } from '@/lib/i18n/config'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const languages: { code: Locale; name: string }[] = [
    { code: 'en', name: '🇬🇧 English' },
    { code: 'mr', name: '🇮🇳 मराठी' },
  ]

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
            locale === lang.code
              ? 'bg-orange-500 text-white shadow-md'
              : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
          }`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.name.split(' ')[1]}
        </button>
      ))}
    </div>
  )
}
