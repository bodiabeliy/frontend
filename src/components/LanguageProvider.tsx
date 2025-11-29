'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { i18nConfig, type Locale } from '@/i18n/config';
import { detectLocaleByIP, getStoredLocale, storeLocale, storeTempDetectedLocale, getEffectiveLocale } from '@/services/geolocation';

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  isDetecting: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with effective locale (user pref > detected > default)
  const [language, setLanguageState] = useState<Locale>(() => {
    const effective = getEffectiveLocale();
    console.log('🎯 Initial language state:', effective || i18nConfig.defaultLocale);
    return effective || i18nConfig.defaultLocale;
  });
  const [isDetecting, setIsDetecting] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Make reset function available globally for debugging
    if (typeof window !== 'undefined') {
      (window as any).resetLanguage = () => {
        console.log('🔄 Resetting language...');
        localStorage.removeItem('language');
        localStorage.removeItem('preferredLocale');
        localStorage.removeItem('detectedLocale');
        sessionStorage.clear();
        console.log('✅ Language reset complete. Reload page to detect IP.');
        console.log('Run: location.reload()');
      };
    }

    if (initialized) return; // Prevent double initialization

    const initializeLanguage = async () => {
      console.log('🔄 Initializing language detection...');
      
      // Check if user has manually selected a language before
      const savedLanguage = getStoredLocale();
      console.log('💾 Checking user preference:', savedLanguage);
      
      if (savedLanguage && i18nConfig.locales.includes(savedLanguage)) {
        console.log('✅ Using user preference:', savedLanguage);
        setLanguageState(savedLanguage);
        setIsDetecting(false);
        setInitialized(true);
        return;
      }

      // No saved preference - detect by IP geolocation (first visit)
      try {
        console.log('🆕 First visit detected, detecting locale by IP...');
        const detectedLocale = await detectLocaleByIP();
        console.log('✅ Successfully detected locale:', detectedLocale);
        
        // Store detected locale (temporary, not user preference)
        storeTempDetectedLocale(detectedLocale);
        
        setLanguageState(detectedLocale);
      } catch (error) {
        console.error('❌ IP detection failed:', error);
        
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0] as Locale;
        console.log('🌐 Trying browser language:', browserLang);
        if (i18nConfig.locales.includes(browserLang)) {
          storeTempDetectedLocale(browserLang);
          setLanguageState(browserLang);
        } else {
          // Final fallback: default locale
          console.log('⚠️ Using default locale:', i18nConfig.defaultLocale);
          setLanguageState(i18nConfig.defaultLocale);
        }
      } finally {
        setIsDetecting(false);
        setInitialized(true);
      }
    };

    initializeLanguage();
  }, [initialized]);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    storeLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isDetecting }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
