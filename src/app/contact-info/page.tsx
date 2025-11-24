"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import ukr from "../../../public/static/ukr.svg";
import eng from "../../../public/static/eng.svg";
import spa from "../../../public/static/span.svg";
import pol from "../../../public/static/pl.svg";
import fra from "../../../public/static/fran.svg";
import rus from "../../../public/static/rus.svg";
import { useRouter } from "next/navigation";

const countries = [
  { code: "+34", flag: spa, name: "Spain" },
  { code: "+38", flag: ukr, name: "Ukraine" },
  { code: "+44", flag: eng, name: "UK" },
  { code: "+48", flag: pol, name: "Poland" },
  { code: "+33", flag: fra, name: "France" },
  { code: "+7", flag: rus, name: "Russia" },
];

export default function ContactInfo() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const [firstName, setFirstName] = useState("");
  const [nationality, setNationality] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", { firstName, nationality, phone: selectedCountry.code + phoneNumber });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/contactinfo.png"
          alt="Restaurant dining"
          fill
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.contactInfo.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.contactInfo.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.contactInfo.nameLabel')}
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                  placeholder={t('auth.contactInfo.namePlaceholder')}
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#9CA3AF]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="nationality" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.contactInfo.nationalityLabel')}
              </label>
              <div className="relative">
                <input
                  id="nationality"
                  name="nationality"
                  type="text"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                  placeholder={t('auth.contactInfo.nationalityPlaceholder')}
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-[#9CA3AF]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.contactInfo.phoneLabel')}
              </label>
              <div className="flex gap-2">
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 pl-4 pr-3 py-[14px] border border-[#D1D5DB] rounded-full bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
                  >
                    <Image 
                      src={selectedCountry.flag} 
                      width={24} 
                      height={24} 
                      alt={selectedCountry.name} 
                      className="rounded-full flex-shrink-0"
                    />
                    <span className="text-secondaryTextColor text-[14px] font-medium">{selectedCountry.code}</span>
                    <svg
                      className={`w-4 h-4 text-[#9CA3AF] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 w-48 bg-white rounded-2xl shadow-lg z-50 border border-[#D1D5DB]">
                      <ul className="py-2">
                        {countries.map((country) => (
                          <li
                            key={country.code}
                            className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                              selectedCountry.code === country.code ? 'bg-gray-50' : ''
                            }`}
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsDropdownOpen(false);
                            }}
                          >
                            <Image 
                              src={country.flag} 
                              width={28} 
                              height={28} 
                              alt={country.name} 
                              className="rounded-full"
                            />
                            <span className="text-secondaryTextColor text-[14px] font-medium">{country.code}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative flex-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                    placeholder={t('auth.contactInfo.phonePlaceholder')}
                  />
                  <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-[#9CA3AF]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#9CA3AF] mt-2 ml-1">
                {t('auth.contactInfo.twoFactorText')}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                onClick={() =>firstName && nationality &&phoneNumber && selectedCountry && agreeTerms && router.push("/login")}
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm"
              >
                {t('auth.contactInfo.createAccountButton')}
              </button>
            </div>

            <div className="flex items-start pt-2">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 text-mainColor focus:ring-mainColor border-[#D1D5DB] rounded mt-0.5 flex-shrink-0"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-[11px] text-[#6B7280] leading-relaxed">
                {t('auth.contactInfo.termsText')}{" "}
                <Link href="/terms" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.contactInfo.termsLink')}
                </Link>{" "}
                {t('auth.contactInfo.and')}{" "}
                <Link href="/privacy" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.contactInfo.privacyLink')}
                </Link>
              </label>
            </div>
          </form>

          <div className="text-center text-[11px] text-[#9CA3AF] mt-16">
            <p className="mb-1">{t('auth.footer.allRights')}</p>
            <p>{t('auth.footer.copyright')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
