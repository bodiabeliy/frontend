import { Locale } from '@/i18n/config';

// Map country codes to our supported locales
const countryToLocale: Record<string, Locale> = {
  UA: 'uk', // Ukraine
  US: 'en', // United States
  GB: 'en', // United Kingdom
  CA: 'en', // Canada
  AU: 'en', // Australia
  ES: 'sp', // Spain
  MX: 'sp', // Mexico
  AR: 'sp', // Argentina
  CO: 'sp', // Colombia
  PL: 'pl', // Poland
  FR: 'fr', // France
  BE: 'fr', // Belgium (French speaking)
  CH: 'fr', // Switzerland (French speaking)
  RU: 'ru', // Russia
  BY: 'ru', // Belarus
  KZ: 'ru', // Kazakhstan
};

export interface GeolocationData {
  country: string;
  locale: Locale;
  ip?: string;
}

/**
 * Detect user's locale based on IP geolocation
 * Uses a free IP geolocation API
 */
export async function detectLocaleByIP(): Promise<Locale> {
  try {
    console.log('🌍 Starting IP-based locale detection...');
    // Try multiple free geolocation services for redundancy
    const locale = await tryIpApiCom();
    console.log('✅ Successfully detected locale:', locale);
    return locale;
  } catch (error) {
    console.error('❌ Geolocation detection failed:', error);
    return 'uk'; // Fallback to Ukrainian
  }
}

/**
 * Primary service: ipapi.co (no API key required)
 */
async function tryIpApiCom(): Promise<Locale> {
  try {
    console.log('📡 Calling ipapi.co...');
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('📡 ipapi.co response status:', response.status);

    if (!response.ok) {
      throw new Error(`ipapi.co returned ${response.status}`);
    }

    const data = await response.json();
    console.log('📡 ipapi.co data:', data);
    const countryCode = data.country_code as string;

    if (countryCode) {
      const locale = countryToLocale[countryCode] || 'uk';
      console.log(`🗺️ Country detected: ${countryCode} → Locale: ${locale}`);
      return locale;
    }

    throw new Error('No country code in response');
  } catch (error) {
    console.warn('⚠️ ipapi.co failed:', error);
    // Try alternative service
    return tryIpifyOrg();
  }
}

/**
 * Fallback service: ipify + ip-api.com
 */
export async function tryIpifyOrg(): Promise<Locale> {
  try {
    console.log('📡 Trying fallback: ipify + ip-api.com...');
    // First get IP
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    console.log('📡 Detected IP:', ip);

    // Then get geolocation
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
    const geoData = await geoResponse.json();
    console.log('📡 ip-api.com data:', geoData);

    if (geoData.status === 'success' && geoData.countryCode) {
      const locale = countryToLocale[geoData.countryCode];
      console.log(`🗺️ Country detected (fallback): ${geoData.countryCode} → Locale: ${locale}`);
      return locale;
    }

    throw new Error('Geolocation fallback failed');
  } catch (error) {
    console.error('❌ Fallback geolocation service failed:', error);
    throw error;
  }
}

/**
 * Get stored locale preference from localStorage
 */
export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('preferredLocale');
    return stored as Locale | null;
  } catch {
    return null;
  }
}

/**
 * Store locale preference in localStorage (for user manual selection)
 */
export function storeLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('preferredLocale', locale);
  } catch (error) {
    console.warn('Failed to store locale preference:', error);
  }
}

/**
 * Store temporary detected locale (not a user preference)
 * This is used for IP-detected language on first visit
 */
export function storeTempDetectedLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('detectedLocale', locale);
  } catch (error) {
    console.warn('Failed to store detected locale:', error);
  }
}

/**
 * Get temporary detected locale
 */
export function getTempDetectedLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  
  try {
    return localStorage.getItem('detectedLocale') as Locale | null;
  } catch {
    return null;
  }
}

/**
 * Get the effective locale (user preference > detected > null)
 */
export function getEffectiveLocale(): Locale | null {
  const userPreference = getStoredLocale();
  if (userPreference) return userPreference;
  
  return getTempDetectedLocale();
}

/**
 * Clear stored locale preference
 */
export function clearStoredLocale(): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Clear both old and new keys
    localStorage.removeItem('preferredLocale');
    localStorage.removeItem('detectedLocale');
    localStorage.removeItem('language'); // Old key
    console.log('🗑️ Cleared all language preferences');
  } catch (error) {
    console.warn('Failed to clear locale preference:', error);
  }
}

/**
 * Force clear ALL language-related data
 * Use this for debugging
 */
export function forceClearAllLanguageData(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('preferredLocale');
    localStorage.removeItem('detectedLocale');
    localStorage.removeItem('language');
    sessionStorage.removeItem('language');
    sessionStorage.removeItem('preferredLocale');
    console.log('🧹 Force cleared ALL language data');
  } catch (error) {
    console.warn('Failed to force clear language data:', error);
  }
}
