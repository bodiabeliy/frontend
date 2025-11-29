"use client";
import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { useCurrency } from '@/contexts/CurrencyContext';

/**
 * Demo component showing currency conversion in action
 * This can be placed anywhere to show current currency info
 */
export const CurrencyDisplay = () => {
  const { language } = useLanguage();
  const { currencyCode, currencySymbol, convertAndFormat } = useCurrency();

  const basePrices = {
    lite: 199,
    pro: 499,
    elite: 1399,
  };

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md max-w-md">
      <h3 className="font-bold text-lg mb-3">Current Currency: {currencyCode}</h3>
      <p className="text-sm text-gray-600 mb-4">Symbol: {currencySymbol} | Locale: {language}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold">Plan</span>
          <span className="font-semibold">Price</span>
        </div>
        <div className="flex justify-between">
          <span>Lite</span>
          <span className="text-blue-600 font-bold">{convertAndFormat(basePrices.lite)}</span>
        </div>
        <div className="flex justify-between">
          <span>Pro</span>
          <span className="text-purple-600 font-bold">{convertAndFormat(basePrices.pro)}</span>
        </div>
        <div className="flex justify-between">
          <span>Elite</span>
          <span className="text-pink-600 font-bold">{convertAndFormat(basePrices.elite)}</span>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Base prices in UAH: {basePrices.lite} / {basePrices.pro} / {basePrices.elite}
      </div>
    </div>
  );
};

export default CurrencyDisplay;
