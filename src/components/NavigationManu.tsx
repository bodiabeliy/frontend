"use client";
import { useCallback, useState } from "react";
import Logo from "../../public/static/azamaza.com.svg";
import Link from "next/link";
import tiktok from "../../public/static/tiktok.svg"
import instagram from "../../public/static/instagram.svg"
import facebook from "../../public/static/facebook.svg"
import telegram from "../../public/static/telegram.svg"
import { DropDownButton } from "./buttons/DropDownButton";
import { useTranslation } from "@/i18n";
import { useLanguage } from "./LanguageProvider";


export const NavigationManu = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const [opened, setOpened] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("UKR")


  const OpenDropDown = useCallback(() => {
    setIsDropDownOpen(!isDropDownOpen);
  }, [isDropDownOpen]);

  const CloseDropDown = useCallback(() => {
    setIsDropDownOpen(false);
  }, []);

  const handleDataFromChild = useCallback((value: string) => {
    console.log("selected language", value);
    setSelectedLanguage(value);
  }, []);
  
  return (
    <div className="lg:w-[1300px] sm:w-full rounded-full lg:justify-center sm:mt-0 lg:mt-8 flex-col m-auto lg:bg-[#FFFFFFA1]">
      <div className="flex justify-between w-full sm:pt-0 lg:py-5 items-center lg:px-12 sm:px-4">
        {/* Desktop Navigation - Left Side */}
        <div className="navbarDesktop sm:hidden md:block text-secondaryTextColor">
          <ul className="flex gap-10 text-lg tracking-navigateLink justify-end pr-10">
            <Link className=" hover:text-white" href={"#about"}>
              {t('navigation.about')}
            </Link>
            <Link className=" hover:text-white" href={"#howitworks"}>
              {t('navigation.howItWorks')}
            </Link>
            <Link className=" hover:text-white" href={"#subscribe"}>
              {t('navigation.subscription')}
            </Link>
          </ul>
        </div>

        {/* Logo - Desktop */}
        <img
          className="sm:hidden lg:flex sm:mt-[15px] ml-16 lg:mt-0 flex-shrink-0"
          src={Logo.src}
          alt="AZAMAZA.COM"
        />

        {/* Desktop Navigation - Right Side */}
        <div className="navbarDesktop sm:hidden md:block text-mainColor flex-1">
          <ul className="flex gap-4 text-lg tracking-navigateLink justify-end pl-10">
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] max-h-[40px] transition-transform" href={"#about"}>
              <img src={tiktok.src} alt="TikTok" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#benefits"}>
              <img src={instagram.src} alt="Instagram" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 w-[40px] max-h-[40px] transition-transform" href={"#service"}>
              <img src={facebook.src} className="mt-auto mx-auto" alt="Facebook" width={12} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#pricelist"}>
              <img src={telegram.src} alt="Telegram" width={24} height={24} />
            </Link>
            <DropDownButton
              type="button"
              disabled={false}
              onClick={() => {
                OpenDropDown();
              }}
              sendData={handleDataFromChild}
              closeDropDown={CloseDropDown}
              isDropDownOpen={isDropDownOpen}
              selectedValue={selectedLanguage}
              className={
                " relative rounded-full p-2 max-h-[40px]"
              }
              text={"Select Language"}
          />
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="navbarMobile mt-3 sm:flex md:hidden w-full items-center justify-between">
          {/* Hamburger Menu */}
          <div
            className={`tham tham-e-squeeze tham-w-6 ${
              opened && "tham-active"
            } z-50 cursor-pointer`}
            onClick={() => setOpened(!opened)}
          >
            <div className="tham-box">
              <div className="tham-inner bg-mainColor"></div>
            </div>
          </div>

          {/* Language Selector */}
          <div className="ml-auto">
            <DropDownButton
              type="button"
              disabled={false}
              onClick={() => {
                OpenDropDown();
              }}
              sendData={handleDataFromChild}
              closeDropDown={CloseDropDown}
              isDropDownOpen={isDropDownOpen}
              selectedValue={selectedLanguage}
              className="relative bg-lightBlue rounded-full px-3 py-2 flex items-center gap-2"
              text={"Select Language"}
            />
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`${
              opened ? "flex" : "hidden"
            } absolute left-4 right-4 top-[70px] bg-white rounded-[20px] flex-col p-6 z-40 shadow-xl`}
          >
            <h2 className="text-mainColor text-2xl font-bold mb-4 pb-4 border-b border-gray-200">{t('navigation.menu')}</h2>
            <ul className="flex flex-col space-y-1">
              <li className="border-b border-gray-200">
                <Link 
                  className="py-3 block text-mainColor hover:text-primaryButton text-lg" 
                  href={"#about"} 
                  onClick={() => setOpened(false)}
                >
                  {t('navigation.about')}
                </Link>
              </li>
              <li className="border-b border-gray-200">
                <Link 
                  className="py-3 block text-mainColor hover:text-primaryButton text-lg" 
                  href={"#howitworks"} 
                  onClick={() => setOpened(false)}
                >
                  {t('navigation.howItWorks')}
                </Link>
              </li>
              <li className="border-b border-gray-200">
                <Link 
                  className="py-3 block text-mainColor hover:text-primaryButton text-lg" 
                  href={"#subscribe"} 
                  onClick={() => setOpened(false)}
                >
                  {t('navigation.subscription')}
                </Link>
              </li>
              <li className="border-b border-gray-200">
                <Link 
                  className="py-3 block text-mainColor hover:text-primaryButton text-lg" 
                  href={"#referral"} 
                  onClick={() => setOpened(false)}
                >
                  {t('navigation.referral')}
                </Link>
              </li>
              <li className="border-b border-gray-200">
                <Link 
                  className="py-3 block text-mainColor hover:text-primaryButton text-lg" 
                  href={"#contact"} 
                  onClick={() => setOpened(false)}
                >
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-6 mt-6 pt-4 justify-start">
               <Link className="bg-white border-2 border-mainColor rounded-full p-2 hover:scale-110 max-h-[40px] max-h-[40px] transition-transform" href={"#about"}>
              <img src={tiktok.src} alt="TikTok" width={24} height={24} />
            </Link>
            <Link className="bg-white border-2 border-mainColor rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#benefits"}>
              <img src={instagram.src} alt="Instagram" width={24} height={24} />
            </Link>
            <Link className="bg-white border-2 border-mainColor rounded-full p-2 hover:scale-110 w-[40px] max-h-[40px] transition-transform" href={"#service"}>
              <img src={facebook.src} className="mt-auto mx-auto" alt="Facebook" width={12} />
            </Link>
            <Link className="bg-white border-2 border-mainColor rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#pricelist"}>
              <img src={telegram.src} alt="Telegram" width={24} height={24} />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
