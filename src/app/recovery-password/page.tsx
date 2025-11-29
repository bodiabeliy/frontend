"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import { usePasswordRecovery } from "@/contexts/PasswordRecoveryContext";
import { authService } from "@/services";

export default function RecoveryPassword() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const { setEmailOrPhone: setEmailOrPhoneContext } = usePasswordRecovery();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailOrPhone) {
      setError("Please enter your email or phone number");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authService.forgotPassword({
        email_or_phone: emailOrPhone,
      });

      if (response.success) {
        // Store email/phone in context
        setEmailOrPhoneContext(emailOrPhone);
        
        // Navigate to SMS confirmation page
        router.push("/sms-confirmation");
      }
    } catch (err: any) {
      console.error('Forgot password error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to send verification code. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/recovarypassword.png"
          alt="Person with phone and lock"
          fill
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 py-12">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.recoveryPassword.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.recoveryPassword.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="emailOrPhone" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.recoveryPassword.inputLabel')}
              </label>
              <div className="relative">
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  autoComplete="email"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                  placeholder={t('auth.recoveryPassword.inputPlaceholder')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-5 flex items-center"
                  onClick={() => setEmailOrPhone("")}
                >
                  <svg
                    className="h-5 w-5 text-[#9CA3AF] hover:text-[#6B7280] cursor-pointer"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : t('auth.recoveryPassword.continueButton')}
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
