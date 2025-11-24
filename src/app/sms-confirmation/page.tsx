"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";

export default function SmsConfirmation() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const router = useRouter()

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    for (let i = 0; i < pastedData.length && i < 4; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);

    // Focus on the next empty input or last input
    const nextEmptyIndex = newCode.findIndex((digit) => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs[nextEmptyIndex].current?.focus();
    } else {
      inputRefs[3].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length === 4) {
      console.log("Code:", fullCode);
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/smsrecieve.png"
          alt="Person working on laptop"
          fill
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 py-12">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.smsConfirmation.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.smsConfirmation.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-3 mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-[60px] h-[60px] text-center text-[24px] font-semibold text-secondaryTextColor border-2 border-[#D1D5DB] rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white transition-all"
                />
              ))}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={code.some((digit) => !digit)}
                onClick={() =>router.push('/login')}
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('auth.smsConfirmation.continueButton')}
              </button>
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
