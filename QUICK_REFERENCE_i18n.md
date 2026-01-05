# 🌍 Quick Reference - Using Marathi Language Support

## For Developers

### Importing the Hook
```tsx
import { useI18n } from '@/lib/i18n/context'
```

### Using Translations in Components
```tsx
'use client'

export default function MyComponent() {
  const { t, locale } = useI18n()
  
  return (
    <>
      <h1>{t('home.heroTitle')}</h1>
      <p>Language: {locale}</p>
    </>
  )
}
```

### Adding New Translations

**Step 1: Add to English** (`public/locales/en/common.json`)
```json
{
  "mySection": {
    "myText": "Hello World"
  }
}
```

**Step 2: Add to Marathi** (`public/locales/mr/common.json`)
```json
{
  "mySection": {
    "myText": "नमस्कार जग"
  }
}
```

**Step 3: Use in Component**
```tsx
{t('mySection.myText')}
```

---

## For End Users

### How to Switch Languages

1. **Look for the language buttons** in the top navigation (right side)
2. **Click "EN"** for English
3. **Click "मराठी"** for Marathi
4. All website text will instantly switch!

### Your Language Preference

- Automatically saved in your browser
- Will remember your choice next time you visit
- Works on desktop and mobile

---

## Files & Structure

```
lib/i18n/
├── config.ts              # Language codes
├── context.tsx            # React Context & Hook
└── translations.ts        # Utilities

public/locales/
├── en/common.json         # English (100+ translations)
└── mr/common.json         # Marathi (100+ translations)

components/
└── LanguageSwitcher.tsx   # Language toggle buttons

app/
├── layout.tsx             # I18nProvider wrapper
├── ClientHome.tsx         # Home page with translations
├── page.tsx               # Dynamic import wrapper
└── volunteer/page.tsx     # Volunteer form with translations
```

---

## Translation Keys Reference

### Header & Navigation
- `header.home` - "Home" / "होम"
- `header.aboutUs` - "About us" / "आमच्या बद्दल"
- `header.newsAlerts` - "News & Alerts" / "बातमी आणि सतर्कता"
- `header.authorities` - "Authorities" / "अधिकारी"
- `header.volunteer` - "Volunteer" / "स्वयंसेवक"

### Home Page
- `home.heroTitle` - "Serve the Divine" / "दैवतेची सेवा करा"
- `home.heroSubtitle` - "Nashik Kumbh Mela 2027"
- `home.heroDescription` - Full hero description
- `home.volunteerBtn` - "Register as Volunteer →"
- `home.learnMore` - "Learn More" / "अधिक जाणून घ्या"
- `home.whatIsKumbhTitle` - "What is Kumbh Mela?"
- `home.whatIsKumbhSubtitle` - "The World's Largest Spiritual Gathering"
- `home.features.title` - "Why Volunteer with Us?"
- `home.features.card1Title` - "Spiritual Growth" / "आध्यात्मिक विकास"
- `home.features.card2Title` - "Community Service"
- `home.features.card3Title` - "Networking" / "नेटवर्किंग"

### Volunteer Form
- `volunteer.title` - "Volunteer Registration"
- `volunteer.fullName` - "Full Name" / "संपूर्ण नाव"
- `volunteer.email` - "Email Address"
- `volunteer.mobileNumber` - "Mobile Number"
- `volunteer.availableFrom` - "Available From"
- `volunteer.availableTo` - "Available To"
- `volunteer.preferredShift` - "Preferred Shift"
- `volunteer.skills` - "Special Skills"
- `volunteer.preferredRole` - "Preferred Role"
- `volunteer.languagesKnown` - "Languages Known"
- `volunteer.isLocalResident` - "Are you a local resident?"
- `volunteer.area` - "Area / Zone"
- `volunteer.emergencyContactName` - "Emergency Contact Name"
- `volunteer.emergencyContactNumber` - "Emergency Contact Number"
- `volunteer.medicalCondition` - "Any Medical Condition?"
- `volunteer.yes` - "Yes" / "होय"
- `volunteer.no` - "No" / "नाही"
- `volunteer.morning` - "Morning (6 AM - 12 PM)"
- `volunteer.afternoon` - "Afternoon (12 PM - 6 PM)"
- `volunteer.evening` - "Evening (6 PM - 12 AM)"
- `volunteer.night` - "Night (12 AM - 6 AM)"
- `volunteer.submit` - "Register" / "नोंदणी करा"
- `volunteer.success` - "Registration successful!"
- `volunteer.error` - "Registration failed"

### Footer
- `footer.about` - "About" / "आमच्या बद्दल"
- `footer.contact` - "Contact" / "संपर्क"
- `footer.volunteer` - "Volunteer"
- `footer.copyright` - "© 2027 Kumbh Mela. All rights reserved."

### Admin
- `admin.dashboard` - "Dashboard" / "डॅशबोर्ड"
- `admin.login` - "Login" / "लॉगिन"
- `admin.logout` - "Logout"
- `admin.news` - "News Management"

### News Section
- `news.title` - "News & Alerts"
- `news.viewAll` - "View All News"

---

## Component Examples

### Example 1: Simple Text
```tsx
<h1>{t('home.heroTitle')}</h1>
```

### Example 2: With Fallback
```tsx
<button>{t('volunteer.submit') || 'Submit'}</button>
```

### Example 3: Conditional Based on Language
```tsx
{locale === 'mr' && <p>Marathi content</p>}
{locale === 'en' && <p>English content</p>}
```

### Example 4: Dynamic Form Labels
```tsx
<label>{t('volunteer.fullName')} <span>*</span></label>
<input placeholder={t('volunteer.fullName')} />
```

---

## Troubleshooting

### Language not switching?
1. Check browser console for errors
2. Ensure component is wrapped with `'use client'`
3. Verify `useI18n()` is imported correctly
4. Clear localStorage and try again

### Missing translations showing as keys?
- Key is missing in one of the JSON files
- Check spelling and punctuation
- Verify JSON structure is valid

### Marathi text not displaying properly?
- Browser supports Devanagari fonts
- Font is loaded from system or CDN
- Text direction is correct (LTR for Marathi)

---

## How the System Works

```
User clicks language button
        ↓
LanguageSwitcher updates context
        ↓
I18nProvider saves to localStorage
        ↓
useI18n() hook in components
        ↓
{t('key')} returns translated text
        ↓
Component re-renders with new language
```

---

## Best Practices

✅ **Do:**
- Use nested keys (e.g., `home.features.title`)
- Keep translations in JSON files
- Use `useI18n()` in client components
- Test both languages before deploying

❌ **Don't:**
- Mix English and Marathi in code
- Put translations in component files
- Use hardcoded text in rendered JSX
- Forget to add both EN and MR translations

---

## Performance Notes

- Translations are loaded once on page load
- No API calls for language switching
- Language preference stored locally
- No additional network requests
- Instant UI updates

---

For detailed technical info, see `I18N_IMPLEMENTATION.md` ✨
