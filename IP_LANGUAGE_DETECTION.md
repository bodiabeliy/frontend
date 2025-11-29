# IP-Based Language Detection

## Overview

The application now automatically detects the user's language based on their IP address location on their first visit. This provides a localized experience right from the start.

## How It Works

### Detection Priority

The language detection follows this priority order:

1. **Saved User Preference** (Highest Priority)
   - If the user has previously selected a language, that preference is used
   - Stored in `localStorage` as `preferredLocale`
   - Ensures user choice is respected across sessions

2. **IP Geolocation** (First Visit)
   - On first visit (no saved preference), detects user's country via IP
   - Uses free geolocation APIs to determine location
   - Maps country code to appropriate language

3. **Browser Language** (Fallback)
   - If IP detection fails, uses browser's language setting
   - Extracted from `navigator.language`

4. **Default Language** (Final Fallback)
   - If all else fails, defaults to Ukrainian (`uk`)

### Country to Language Mapping

| Country | Language |
|---------|----------|
| 🇺🇦 Ukraine | Ukrainian (uk) |
| 🇵🇱 Poland | Polish (pl) |
| 🇺🇸 US, 🇬🇧 UK, 🇨🇦 Canada, 🇦🇺 Australia | English (en) |
| 🇪🇸 Spain, 🇲🇽 Mexico, 🇦🇷 Argentina, 🇨🇴 Colombia | Spanish (sp) |
| 🇫🇷 France, 🇧🇪 Belgium, 🇨🇭 Switzerland | French (fr) |
| 🇷🇺 Russia, 🇧🇾 Belarus, 🇰🇿 Kazakhstan | Russian (ru) |

More countries can be easily added in `src/services/geolocation.ts`.

## Files Created/Modified

### New Files

1. **`src/services/geolocation.ts`**
   - Core geolocation detection service
   - Functions:
     - `detectLocaleByIP()` - Main detection function
     - `getStoredLocale()` - Get saved preference
     - `storeLocale()` - Save user preference
     - `clearStoredLocale()` - Clear preference

2. **`src/components/LoadingSpinner.tsx`**
   - Loading indicator shown during IP detection
   - Displays while API call is in progress

### Modified Files

1. **`src/components/LanguageProvider.tsx`**
   - Added IP detection on mount
   - Added `isDetecting` state
   - Integrated with geolocation service

2. **`src/app/layout.tsx`**
   - Shows loading spinner during detection
   - Wraps content in `LayoutContent` component

## API Services Used

### Primary: ipapi.co
- Free tier: 1,000 requests/day
- No API key required
- Returns country code from IP
- Endpoint: `https://ipapi.co/json/`

### Fallback: ip-api.com + ipify
- If primary fails, uses this combination
- ipify.org gets user's IP address
- ip-api.com gets geolocation from IP
- Also free, no API key needed

## User Experience Flow

### First Visit (No Saved Preference)
```
1. User visits site
   ↓
2. Loading spinner appears
   ↓
3. IP geolocation API call
   ↓
4. Country detected (e.g., Poland)
   ↓
5. Language set to Polish (pl)
   ↓
6. Currency set to PLN (zł)
   ↓
7. Site loads with Polish language and PLN prices
```

### Subsequent Visits (Has Saved Preference)
```
1. User visits site
   ↓
2. Saved preference loaded immediately
   ↓
3. No API call made
   ↓
4. Site loads instantly with saved language
```

### Manual Language Change
```
1. User clicks language selector
   ↓
2. Selects new language
   ↓
3. Language changes immediately
   ↓
4. Preference saved to localStorage
   ↓
5. Future visits use this preference (no IP detection)
```

## Testing

### Test IP Detection

To test from different locations:

1. **Using VPN**
   - Connect to VPN in different country
   - Clear localStorage: `localStorage.removeItem('preferredLocale')`
   - Refresh page
   - Should detect VPN country

2. **Manual Testing**
   - Open browser console
   - Run: `localStorage.removeItem('preferredLocale')`
   - Refresh page
   - Check console logs for detected country

3. **Simulate Specific Location**
   ```javascript
   // In browser console
   localStorage.setItem('preferredLocale', 'pl'); // Polish
   window.location.reload();
   ```

### Debug Logs

The system logs detection process to console:
- "Using saved language preference: pl"
- "First visit detected, detecting locale by IP..."
- "Detected location: PL → locale: pl"

## Configuration

### Add New Country Mapping

Edit `src/services/geolocation.ts`:

```typescript
const countryToLocale: Record<string, Locale> = {
  // ... existing mappings
  IT: 'sp', // Italy → Spanish (or add 'it' locale)
  DE: 'en', // Germany → English (or add 'de' locale)
  // etc.
};
```

### Change Default Fallback

Edit `src/services/geolocation.ts`:

```typescript
export async function detectLocaleByIP(): Promise<Locale> {
  try {
    // ... detection logic
  } catch (error) {
    return 'en'; // Change default to English instead of Ukrainian
  }
}
```

## Performance Considerations

- **First Visit**: ~200-500ms delay for API call
- **Return Visits**: Instant (no API call)
- **Loading Spinner**: Provides visual feedback during detection
- **Timeout**: If API takes >5 seconds, falls back to browser language
- **Offline**: Automatically falls back to browser language

## Privacy & GDPR

- Only IP-based geolocation (no personal data collected)
- No cookies used
- Data stored: Only language preference in localStorage
- Can be cleared by user at any time
- Compliant with GDPR requirements

## Troubleshooting

### Language Not Detecting Correctly

1. Check browser console for error messages
2. Verify API services are accessible (not blocked by firewall)
3. Clear localStorage and test again
4. Check if VPN/proxy is interfering

### Always Shows Default Language

1. Clear localStorage: `localStorage.clear()`
2. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
3. Check if API quota exceeded (unlikely with free tiers)

### API Blocked by Ad Blocker

- Some ad blockers may block geolocation APIs
- Fallback to browser language will activate automatically
- User can still manually select language

## Future Enhancements

- [ ] Add more country mappings
- [ ] Implement rate limiting/caching
- [ ] Add user permission prompt for location access
- [ ] Integrate with backend for more accurate detection
- [ ] Add analytics to track detection accuracy
- [ ] Implement A/B testing for detection methods

---

**Status**: ✅ Implemented and Working
**Date**: November 2024
