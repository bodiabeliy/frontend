"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import { usePasswordRecovery } from "@/contexts/PasswordRecoveryContext";
import { authService } from "@/services";

export default function SmsConfirmation() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const { emailOrPhone, setVerificationCode: setVerificationCodeContext } = usePasswordRecovery();
  const [code, setCode] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef0 = useRef<HTMLInputElement>(null);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];
  const router = useRouter();

  useEffect(() => {
    // Redirect to recovery password page if email/phone is not set
    if (!emailOrPhone) {
      router.push('/recovery-password');
    }
  }, [emailOrPhone, router]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    
    if (fullCode.length !== 4) {
      setError("Please enter a complete 4-digit code");
      return;
    }

    if (!emailOrPhone) {
      setError("Session expired. Please start over.");
      router.push('/recovery-password');
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authService.verifyResetCode({
        email_or_phone: emailOrPhone,
        code: fullCode,
      });

      if (response.success) {
        // Store verification code in context
        setVerificationCodeContext(fullCode);
        
        // Navigate to new password page
        router.push('/new-password');
      }
    } catch (err: any) {
      console.error('Verify code error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Invalid or expired verification code. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    inputRef0.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}
            
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
                disabled={code.some((digit) => !digit) || isLoading}
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Verifying...' : t('auth.smsConfirmation.continueButton')}
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
