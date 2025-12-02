"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import { useSignup } from "@/contexts/SignupContext";
import { OAuthButtons } from "@/components/OAuthButtons";

export default function CreateAccount() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const { signupData, setEmail: setEmailContext } = useSignup();
  const [email, setEmail] = useState(signupData.email || "");
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailContext(email);
      router.push('/create-password');
    }
  };

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white ">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/createemail.png"
          alt="Business professionals"
          fill
        //   className="object-cover"
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.createAccount.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.createAccount.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.createAccount.emailLabel')}
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                  placeholder={t('auth.createAccount.emailPlaceholder')}
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
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm"
              >
                {t('auth.createAccount.continueButton')}
              </button>

              <button
                type="button"
                onClick={() => router.push('/login')}
                className="w-full py-[14px] px-6 border-2 border-mainColor rounded-full text-[16px] font-semibold text-mainColor bg-white hover:bg-mainColor hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor transition-all"
              >
                {t('auth.createAccount.loginButton')}
              </button>
            </div>

            {/* OAuth Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">{t('auth.createAccount.orContinueWith')}</span>
              </div>
            </div>

            {/* OAuth Buttons */}
            <OAuthButtons />

            <div className="pt-4">
              <p className="text-center text-[11px] text-[#9CA3AF] leading-relaxed">
                {t('auth.createAccount.termsText')}{" "}
                <Link href="/terms" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.createAccount.termsLink')}
                </Link>{" "}
                {t('auth.createAccount.and')}{" "}
                <Link href="/privacy" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.createAccount.privacyLink')}
                </Link>
              </p>
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
