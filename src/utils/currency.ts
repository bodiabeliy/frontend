// Currency configuration for each locale
// Base currency is UAH (Ukrainian Hryvnia)
export const currencyConfig = {
  uk: { code: 'UAH', symbol: 'грн', rate: 1 },
  en: { code: 'USD', symbol: '$', rate: 0.024 }, // ~41.5 UAH per USD
  sp: { code: 'EUR', symbol: '€', rate: 0.022 }, // ~45 UAH per EUR
  pl: { code: 'PLN', symbol: 'zł', rate: 0.095 }, // ~10.5 UAH per PLN
  fr: { code: 'EUR', symbol: '€', rate: 0.022 }, // ~45 UAH per EUR
  ru: { code: 'RUB', symbol: '₽', rate: 2.3 }, // ~0.43 UAH per RUB
} as const;

export type CurrencyCode = keyof typeof currencyConfig;

// Convert price from UAH to target currency
export function convertPrice(priceInUAH: number, targetLocale: CurrencyCode): number {
  const config = currencyConfig[targetLocale];
  const convertedPrice = priceInUAH * config.rate;
  
  // Round to appropriate precision based on currency
  if (config.code === 'UAH' || config.code === 'RUB') {
    return Math.round(convertedPrice);
  }
  return Math.round(convertedPrice * 100) / 100;
}

// Format price with currency symbol
export function formatPrice(price: number, locale: CurrencyCode): string {
  const config = currencyConfig[locale];
  
  // For USD and EUR, show 2 decimal places with symbol prefix
  if (config.code === 'USD' || config.code === 'EUR') {
    return `${config.symbol}${price.toFixed(2)}`;
  }
  
  // For PLN, show 2 decimal places with symbol suffix
  if (config.code === 'PLN') {
    return `${price.toFixed(2)} ${config.symbol}`;
  }
  
  // For UAH and RUB, show whole numbers with symbol suffix
  return `${Math.round(price)} ${config.symbol}`;
}

// Get currency info for locale
export function getCurrencyInfo(locale: CurrencyCode) {
  return currencyConfig[locale];
}

// Extract numeric price from string (e.g., "199" from translation)
export function extractNumericPrice(priceString: string): number {
  const match = priceString.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

// Replace price mentions in text with converted currency
export function replacePriceInText(
  text: string,
  locale: CurrencyCode,
  pricePattern: RegExp = /(\d+)\s*(UAH|грн|₴|гривень|гривни|hryvnias|hrywien?)/gi
): string {
  return text.replace(pricePattern, (match, price) => {
    const numericPrice = parseInt(price, 10);
    const converted = convertPrice(numericPrice, locale);
    return formatPrice(converted, locale);
  });
}
