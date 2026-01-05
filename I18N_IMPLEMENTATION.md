# Language Support (i18n) Implementation

Your Kumbh Mela application now supports both **English** and **Marathi** languages with easy language switching.

## 📁 File Structure

```
lib/i18n/
├── config.ts          # i18n configuration
├── context.tsx        # React Context for language state
└── translations.ts    # Translation utility functions

public/locales/
├── en/
│   └── common.json    # English translations
└── mr/
    └── common.json    # Marathi translations

components/
└── LanguageSwitcher.tsx  # Language toggle component
```

## 🌐 Supported Languages

- **English** (en)
- **Marathi** (मराठी) (mr)

## 💡 How to Use

### In Components

```tsx
'use client'

import { useI18n } from '@/lib/i18n/context'

export default function MyComponent() {
  const { t } = useI18n()
  
  return <h1>{t('home.heroTitle')}</h1>
}
```

### Adding New Translations

1. Add your English translation to `public/locales/en/common.json`:
```json
{
  "mySection": {
    "myKey": "My English Text"
  }
}
```

2. Add the corresponding Marathi translation to `public/locales/mr/common.json`:
```json
{
  "mySection": {
    "myKey": "माझा मराठी मजकूर"
  }
}
```

3. Use it in your component:
```tsx
const { t } = useI18n()
return <p>{t('mySection.myKey')}</p>
```

## 🎨 Language Switcher

The `LanguageSwitcher` component is automatically included in the header. Users can click the language buttons to switch between English and Marathi. The selected language preference is saved in localStorage.

## 📝 Translation Keys Structure

Translations are organized by sections:
- `header.*` - Navigation and header text
- `home.*` - Homepage content
- `volunteer.*` - Volunteer registration form
- `news.*` - News section
- `footer.*` - Footer content
- `admin.*` - Admin panel text

## 🚀 Features

- ✅ Easy language switching with visual toggle
- ✅ Language preference persists in localStorage
- ✅ React Context-based state management
- ✅ Supports nested translation keys (e.g., `home.features.card1Title`)
- ✅ Client-side rendering for smooth language switching
- ✅ All form labels and UI text translated

## 🔄 Persistence

When users select a language, it's automatically saved to their browser's localStorage. The next time they visit, their language preference is restored.

## 📱 Translation Coverage

The following sections have been translated:

### Completed Translations ✓
- Navigation (Header)
- Home Page
- Volunteer Registration Form
- Footer
- Admin Panel (Partial)
- News Section

### Marathi Translations Included
- All form labels and placeholders
- Button text
- Success/Error messages
- Page titles and descriptions
- Navigation links
- Shift timings (translated appropriately)

## 🎯 Next Steps

To add more content to Marathi:

1. Update the JSON files in `public/locales/`
2. Test with the language switcher in the header
3. Ensure proper Marathi text rendering (fonts support Devanagari)

## 🐛 Troubleshooting

**Language not switching?**
- Ensure you've wrapped your app with `<I18nProvider>` in the root layout
- Check browser console for errors
- Clear localStorage and try again

**Missing translations?**
- The `t()` function will return the key itself if translation is not found
- Check that your JSON files are properly formatted
- Ensure the key path matches exactly (case-sensitive)

## 📚 Reference

- **i18n Pattern**: React Context + JSON files
- **Locales Location**: `public/locales/[locale]/common.json`
- **Hook**: `useI18n()` - Import from `@/lib/i18n/context`
- **Translation Keys**: Dot notation (e.g., `header.home`)
