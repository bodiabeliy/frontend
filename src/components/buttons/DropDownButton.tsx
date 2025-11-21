"use client";
import { BtnDropDownProps } from "@/types";
import Image from "next/image";
import ukr from "@/../public/static/ukr.svg"
import eng from "@/../public/static/eng.svg"
import spa from "@/../public/static/span.svg"
import pol from "@/../public/static/pl.svg"
import fra from "@/../public/static/fran.svg"
import rus from "@/../public/static/rus.svg"

import { useRef, useEffect, useState, useCallback } from "react";
import { useLanguage } from "../LanguageProvider";
import { i18nConfig, type Locale } from "@/i18n/config";

const languages = [
  { code: "UKR", flag: ukr, name: "Ukrainian", locale: "uk" as Locale },
  { code: "ENG", flag: eng, name: "English", locale: "en" as Locale },
  { code: "SPA", flag: spa, name: "Spanish", locale: "sp" as Locale },
  { code: "POL", flag: pol, name: "Polish", locale: "pl" as Locale },
  { code: "FRA", flag: fra, name: "French", locale: "fr" as Locale },
  { code: "RUS", flag: rus, name: "Russian", locale: "ru" as Locale },
];

export const DropDownButton = (props:BtnDropDownProps) => {
  const { onClick, closeDropDown, disabled, isDropDownOpen, type, sendData, selectedValue } = props;
  const { language, setLanguage } = useLanguage();

  // Get language info from current i18n language
  const getCurrentLanguage = useCallback(() => {
    const lang = languages.find(l => l.locale === language);
    return lang || languages[0]; // Default to Ukrainian
  }, [language]);

  // Initialize with the correct flag based on current language or selectedValue
  const getInitialLanguage = () => {
    if (selectedValue) {
      const lang = languages.find(l => l.code === selectedValue);
      return lang || getCurrentLanguage();
    }
    return getCurrentLanguage();
  };

  const [currentLang, setCurrentLang] = useState(getInitialLanguage());

  // Sync with i18n language changes
  useEffect(() => {
    const lang = getCurrentLanguage();
    setCurrentLang(lang);
  }, [language, getCurrentLanguage]);

  // Sync with selectedValue prop changes
  useEffect(() => {
    if (selectedValue) {
      const lang = languages.find(l => l.code === selectedValue);
      if (lang) {
        setCurrentLang(lang);
        // Also update i18n language
        if (lang.locale !== language) {
          setLanguage(lang.locale);
        }
      }
    }
  }, [selectedValue, language, setLanguage]);

  const selectLanguage = useCallback((code: string, flag: any, locale: Locale) => {
    const lang = languages.find(l => l.code === code);
    if (lang) {
      setCurrentLang(lang);
      // Update i18n language
      setLanguage(locale);
      // Call parent callback if provided
      if (sendData) {
        sendData(code);
      }
      closeDropDown();
    }
  }, [setLanguage, sendData, closeDropDown]);

  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={` ${props.className} flex items-center gap-2`}
      >
        <Image src={currentLang.flag} width={32} height={32} alt={currentLang.name} className="rounded-full flex-shrink-0" />
        <span className="sm:text-white lg:text-mainColor sm:font-normal sm:text-lg lg:text-sm">{currentLang.code}</span>
      </button>
     
      {isDropDownOpen && (
        <div className="dropdown absolute sm:ml-[-25%] lg:ml-[290px] sm:mt-8 sm:mb-[-105px] lg:mb-0 lg:mt-20 z-[100] uppercase" >
          <ul className={`${type == "button"?"dropdown-content":""} mt-2 menu bg-white rounded-[20px] z-[1] w-52 p-2 shadow drop-shadow-lg`}>
            {languages.map((lang) => (
              <li 
                key={lang.code}
                className={`flex flex-row items-center p-3 hover:bg-overlay sm:text-xl lg:text-2xl cursor-pointer ${currentLang.code === lang.code ? 'bg-overlay' : ''}`}
                onClick={() => selectLanguage(lang.code, lang.flag, lang.locale)}
              >
                <Image className=" pr-2 rounded-full" src={lang.flag} width={40} height={40} alt={lang.name} />
                <p className="text-mainColor">{lang.code}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
