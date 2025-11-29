"use client";
import React, { createContext, useContext, useMemo } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  convertPrice, 
  formatPrice, 
  getCurrencyInfo, 
  extractNumericPrice,
  replacePriceInText,
  type CurrencyCode 
} from '@/utils/currency';
import type { Locale } from '@/i18n/config';

interface CurrencyContextType {
  convertAndFormat: (priceInUAH: number) => string;
  convert: (priceInUAH: number) => number;
  format: (price: number) => string;
  replaceInText: (text: string) => string;
  currencyCode: string;
  currencySymbol: string;
  locale: CurrencyCode;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  
  const currencyContext = useMemo(() => {
    const locale = language as CurrencyCode;
    const currencyInfo = getCurrencyInfo(locale);
    
    return {
      convertAndFormat: (priceInUAH: number) => {
        const converted = convertPrice(priceInUAH, locale);
        return formatPrice(converted, locale);
      },
      convert: (priceInUAH: number) => convertPrice(priceInUAH, locale),
      format: (price: number) => formatPrice(price, locale),
      replaceInText: (text: string) => replacePriceInText(text, locale),
      currencyCode: currencyInfo.code,
      currencySymbol: currencyInfo.symbol,
      locale,
    };
  }, [language]);

  return (
    <CurrencyContext.Provider value={currencyContext}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
