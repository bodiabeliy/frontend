"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";

export default function RecoverySuccess() {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const router = useRouter();

  const handleContinue = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen lg:max-w-[1440px] mx-auto flex items-center justify-center lg:justify-between bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative h-screen">
        <Image
          src="/static/successrecoverd.png"
          alt="Success"
          fill
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <Image
                src="/static/successrecoverd.svg"
                alt="Success"
                width={120}
                height={120}
                className="animate-[pulse_2s_ease-in-out_infinite]"
              />
            </div>

            <h1 className="text-[32px] lg:text-[36px] font-bold text-secondaryTextColor leading-tight mb-3">
              {t('auth.recoverySuccess.title')}
            </h1>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {t('auth.recoverySuccess.subtitle')}
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleContinue}
              className="w-full py-[14px] px-6 border-none rounded-full text-[16px] font-semibold text-secondaryTextColor bg-secondaryColor hover:bg-[#FFE44D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor transition-all shadow-sm"
            >
              {t('auth.recoverySuccess.continueButton')}
            </button>
          </div>

          <div className="text-center text-[11px] text-[#9CA3AF] mt-16">
            <p className="mb-1">{t('auth.footer.allRights')}</p>
            <p>{t('auth.footer.copyright')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
