# Testing IP-Based Language Detection

## Quick Test Instructions

### Test 1: First Visit Detection (Clear Storage)

1. Open browser DevTools (F12)
2. Go to Console tab
3. Run this command:
   ```javascript
   localStorage.clear()
   ```
4. Refresh the page (F5)
5. You should see:
   - Loading spinner appears briefly
   - Console logs: "First visit detected, detecting locale by IP..."
   - Console logs: "Detected location: XX → locale: xx"
   - Page loads with detected language

**Expected Result**: 
- If in Poland → Polish language (POL flag), prices in PLN (zł)
- If in Ukraine → Ukrainian language (UKR flag), prices in грн
- If in US/UK → English language (ENG flag), prices in $ (USD)

### Test 2: Saved Preference (Return Visit)

1. Select a language manually from dropdown
2. Note which language you selected
3. Refresh page (F5)
4. You should see:
   - No loading spinner (instant load)
   - Same language as you selected
   - Console logs: "Using saved language preference: xx"

**Expected Result**: Your manually selected language persists

### Test 3: Manual Language Change

1. Click the language dropdown (flag button in top right)
2. Select a different language (e.g., ENG for English)
3. Observe:
   - Language changes immediately
   - All text translates
   - All prices convert to correct currency
   - Console logs: "User manually changed language to: en"

**Expected Result**: 
- Language changes instantly
- Prices update (e.g., "199 грн" → "$4.78")
- Preference saved for next visit

### Test 4: Currency Conversion Verification

After selecting each language, verify prices convert correctly:

| Language | Expected Price Display |
|----------|----------------------|
| UKR (Ukrainian) | 199 грн, 499 грн, 1399 грн |
| ENG (English) | $4.78, $11.98, $33.58 |
| POL (Polish) | 18.91 zł, 47.41 zł, 132.91 zł |
| SPA (Spanish) | €4.38, €10.98, €30.78 |
| FRA (French) | €4.38, €10.98, €30.78 |
| RUS (Russian) | 458 ₽, 1148 ₽, 3217 ₽ |

### Test 5: API Failure Handling

Simulate API failure:

1. Open DevTools → Network tab
2. Check "Offline" mode
3. Clear localStorage: `localStorage.clear()`
4. Refresh page
5. Should see:
   - Console: "IP detection failed, falling back to browser language"
   - Falls back to browser's language setting
   - Site still works normally

### Test 6: Check All Pages

Visit each page and verify currency displays correctly:

- [ ] Home page (/) - Banner section "199 UAH" converts
- [ ] About section - "Only 199 hryvnias" converts
- [ ] How It Works - "subscription from 199₴" converts
- [ ] Price page (/price) - All 3 subscription cards show correct currency

### Console Commands for Testing

```javascript
// Clear all data and test fresh
localStorage.clear();
location.reload();

// Force specific language (bypass IP detection)
localStorage.setItem('preferredLocale', 'pl'); // Polish
location.reload();

// Check current saved preference
console.log(localStorage.getItem('preferredLocale'));

// Check what language system detected
// (Look for console logs after clearing storage and refreshing)
```

## Expected Console Logs

### First Visit (No Saved Preference)
```
First visit detected, detecting locale by IP...
Detected locale by IP: pl
```

### Return Visit (Has Saved Preference)
```
Using saved language preference: pl
```

### Manual Language Change
```
User manually changed language to: en
```

## Troubleshooting

### Problem: Always shows Ukrainian
**Solution**: 
1. Check if localStorage has old 'language' key (old system)
2. Clear it: `localStorage.removeItem('language')`
3. Clear new key: `localStorage.removeItem('preferredLocale')`
4. Refresh

### Problem: Loading spinner never disappears
**Solution**:
1. Check console for API errors
2. Check network tab - are requests being blocked?
3. Try disabling ad blocker
4. Check if behind corporate firewall

### Problem: Wrong country detected
**Solution**:
1. This is due to VPN or proxy
2. The detection is based on IP address
3. Manually select correct language - it will persist

### Problem: Prices not converting
**Solution**:
1. Check if "How It Works" section shows converted price
2. Check browser console for errors
3. Verify currency.ts regex includes all patterns (UAH, грн, ₴, etc.)

## Manual Testing Checklist

- [ ] IP detection works on first visit
- [ ] Correct language selected for location
- [ ] Currency matches language (PLN for Polish, etc.)
- [ ] Manual language change works
- [ ] Language preference persists after refresh
- [ ] All prices convert correctly
- [ ] Loading spinner shows during detection
- [ ] Fallback works when API fails
- [ ] Console logs are informative
- [ ] No JavaScript errors in console

## Automated Testing (Future)

Could add these tests:
- Unit tests for geolocation service
- Mock API responses
- Test country-to-locale mappings
- Test localStorage persistence
- Integration tests for full flow

---

✅ Use this guide to verify the IP detection feature works correctly!
