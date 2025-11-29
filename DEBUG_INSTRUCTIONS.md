# 🔧 DEBUGGING IP DETECTION ISSUE

## Problem
Language stays Ukrainian even though IP is in Poland.

## Solution Steps

### Step 1: Clear Old localStorage Keys

Open your browser's DevTools (F12) and run these commands in the Console:

```javascript
// Clear ALL language-related keys
localStorage.removeItem('language');          // Old key
localStorage.removeItem('preferredLocale');   // New key
localStorage.clear();                         // Nuclear option - clears everything

// Then refresh the page
location.reload();
```

### Step 2: Use Test Page

Visit the test page to debug:
```
http://localhost:3000/test-geo
```

This page will help you:
- Test IP detection manually
- See what country is detected
- Check stored preferences
- Clear preferences easily
- See detailed console logs

### Step 3: Check Console Logs

After clearing localStorage and refreshing, you should see these logs in console:

**Expected logs:**
```
🌍 Starting IP-based locale detection...
📡 Calling ipapi.co...
📡 ipapi.co response status: 200
📡 ipapi.co data: {country_code: "PL", ...}
🗺️ Country detected: PL → Locale: pl
✅ Successfully detected locale: pl
First visit detected, detecting locale by IP...
Detected locale by IP: pl
```

### Step 4: If Still Not Working

1. **Check if old key exists:**
```javascript
console.log('Old key:', localStorage.getItem('language'));
console.log('New key:', localStorage.getItem('preferredLocale'));
```

2. **Manually test API:**
```javascript
fetch('https://ipapi.co/json/')
  .then(r => r.json())
  .then(data => console.log('Your location:', data));
```

3. **Check if API is blocked:**
- Open DevTools → Network tab
- Refresh page
- Look for requests to `ipapi.co` or `ip-api.com`
- If they're red/blocked, your network or ad blocker is blocking them

4. **Try incognito/private browsing:**
- Open new incognito window
- Visit your site
- Should detect Poland correctly

### Step 5: Force Polish Language (Workaround)

If IP detection keeps failing, you can force it:

```javascript
// In browser console:
localStorage.setItem('preferredLocale', 'pl');
location.reload();
```

## Common Issues

### Issue 1: Old localStorage Key
**Problem:** Old 'language' key from previous implementation
**Solution:** Clear both keys (see Step 1)

### Issue 2: API Blocked
**Problem:** Corporate firewall or ad blocker blocking geolocation APIs
**Solution:** 
- Disable ad blocker temporarily
- Use VPN
- Or manually select language (will persist)

### Issue 3: Mixed HTTP/HTTPS
**Problem:** ip-api.com uses HTTP, might be blocked on HTTPS site
**Solution:** The code already handles this with fallback

### Issue 4: Browser Cache
**Problem:** Cached version of old code
**Solution:** 
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cache

## Expected Behavior After Fix

### First Visit (No Preferences):
1. Loading spinner shows (~0.5s)
2. IP detected → Poland
3. Language switches to Polish
4. All prices show in PLN (zł)
5. Console shows: "Detected locale by IP: pl"

### Return Visit (Has Preference):
1. Instant load (no spinner)
2. Uses saved preference
3. Console shows: "Using saved language preference: pl"

### After Manual Change:
1. User selects language from dropdown
2. Language changes immediately
3. Preference saved
4. Console shows: "User manually changed language to: pl"
5. Future visits use this preference

## Testing Checklist

Run through these tests:

- [ ] Visit `/test-geo` page
- [ ] Click "Clear All Preferences"
- [ ] Click "Test IP Detection" - should show "pl"
- [ ] Check console - should show Poland detected
- [ ] Go back to home page (refresh)
- [ ] Should load in Polish with PLN currency
- [ ] Change language manually to English
- [ ] Refresh page
- [ ] Should stay in English (preference saved)

## Debug Information to Share

If still not working, share these details:

```javascript
// Run in console and share output:
console.log('=== DEBUG INFO ===');
console.log('Old key:', localStorage.getItem('language'));
console.log('New key:', localStorage.getItem('preferredLocale'));
console.log('All localStorage:', JSON.stringify(localStorage));
console.log('Browser language:', navigator.language);
console.log('===================');

// Test API directly:
fetch('https://ipapi.co/json/')
  .then(r => r.json())
  .then(data => console.log('API Response:', data))
  .catch(err => console.error('API Error:', err));
```

---

**Most Common Solution:** Just run `localStorage.clear()` and refresh! 🎯
