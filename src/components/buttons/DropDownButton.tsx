import { BtnDropDownProps } from "@/types";
import Image from "next/image";
import ukr from "@/../public/ukr.svg"
import eng from "@/../public/eng.svg"
import spa from "@/../public/span.svg"
import pol from "@/../public/pl.svg"
import fra from "@/../public/fran.svg"
import rus from "@/../public/rus.svg"

import { useRef, useEffect, useState, useCallback } from "react";

const languages = [
  { code: "UKR", flag: ukr, name: "Ukrainian" },
  { code: "ENG", flag: eng, name: "English" },
  { code: "SPA", flag: spa, name: "Spanish" },
  { code: "POL", flag: pol, name: "Polish" },
  { code: "FRA", flag: fra, name: "French" },
  { code: "RUS", flag: rus, name: "Russian" },
];

export const DropDownButton = (props:BtnDropDownProps) => {
  const { onClick, closeDropDown, disabled, isDropDownOpen, type, sendData, selectedValue } = props;

  // Initialize with the correct flag based on selectedValue
  const getInitialFlag = () => {
    const lang = languages.find(l => l.code === (selectedValue || "UKR"));
    return lang ? lang.flag : ukr;
  };

  const [selectedLanguage, setSelectedLanguage] = useState<string>(selectedValue || "UKR")
  const [selectedFlag, setSelectedFlag] = useState<any>(getInitialFlag())

  useEffect(() => {
    if (selectedValue) {
      setSelectedLanguage(selectedValue);
      const lang = languages.find(l => l.code === selectedValue);
      if (lang) {
        setSelectedFlag(lang.flag);
      }
    }
  }, [selectedValue]);




  const selectLanguage = useCallback((code: string, flag: any) => {
    setSelectedLanguage(code);
    setSelectedFlag(flag);
    //  @ts-ignore
    sendData(code);
    closeDropDown();
  }, [sendData, closeDropDown])

  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={` ${props.className} flex items-center gap-2`}
      >
        <Image src={selectedFlag} width={32} height={32} alt={selectedLanguage} className="rounded-full flex-shrink-0" />
        <span className="sm:text-white lg:text-mainColor sm:font-normal sm:text-lg lg:text-sm">{selectedLanguage}</span>
      </button>
     
      {isDropDownOpen && (
        <div className="dropdown absolute sm:ml-[-25%] lg:ml-[290px] sm:mt-8 sm:mb-[-105px] lg:mb-0 lg:mt-20 z-[100] uppercase" >
          <ul className={`${type == "button"?"dropdown-content":""} mt-2 menu bg-white rounded-[20px] z-[1] w-52 p-2 shadow drop-shadow-lg`}>
            {languages.map((lang) => (
              <li 
                key={lang.code}
                className="flex flex-row items-center p-3 hover:bg-overlay sm:text-xl lg:text-2xl cursor-pointer"
                onClick={() => selectLanguage(lang.code, lang.flag)}
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
