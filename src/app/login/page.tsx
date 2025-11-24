"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";

export default function Login() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email, "Password:", password, "Remember:", rememberMe);
  };

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/login.png"
          alt="Business buildings"
          fill
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.login.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.login.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.login.emailLabel')}
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
                  placeholder={t('auth.login.emailPlaceholder')}
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

            <div>
              <label htmlFor="password" className="block text-[12px] font-normal text-[#9CA3AF] mb-2">
                {t('auth.login.passwordLabel')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-5 pr-12 py-[14px] border border-[#D1D5DB] placeholder:text-[#9CA3AF] text-secondaryTextColor text-[14px] rounded-full focus:outline-none focus:ring-2 focus:ring-secondaryColor focus:border-transparent bg-white"
                  placeholder={t('auth.login.passwordPlaceholder')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center"
                >
                  <svg
                    className="h-5 w-5 text-[#9CA3AF] hover:text-[#6B7280]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {showPassword ? (
                      <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    ) : (
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-mainColor focus:ring-mainColor border-[#D1D5DB] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-[14px] text-[#6B7280]">
                {t('auth.login.rememberMe')}
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm"
              >
                {t('auth.login.loginButton')}
              </button>
            </div>

            <div className="text-center">
              <Link
                href="/recovery-password"
                className="text-[14px] text-mainColor hover:text-mainColor/80 underline"
              >
                {t('auth.login.forgotPassword')}
              </Link>
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
                {t('auth.login.termsText')}{" "}
                <Link href="/terms" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.login.termsLink')}
                </Link>{" "}
                {t('auth.login.and')}{" "}
                <Link href="/privacy" className="text-mainColor hover:text-mainColor/80 underline">
                  {t('auth.login.privacyLink')}
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
