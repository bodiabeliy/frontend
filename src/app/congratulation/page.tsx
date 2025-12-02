"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import { ActionButton } from "@/components/buttons/ActionButton";
import laptopImage from "@/../public/static/laptop.png";
import dealImage from "@/../public/static/deal.png";

const Congratulation = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const router = useRouter();

  return (
    <>
      {/* Banner Section */}
      <div className="relative bg-mainColor overflow-hidden sm:h-auto lg:h-[500px]">
        <div className="lg:w-[1300px] mx-auto relative">
          <div className="bannerContent sm:ml-5 lg:ml-0 sm:ml-4 lg:w-full z-10 sm:pt-10 lg:pt-20">
            <div className="bannerTitle pl-0 sm:max-w-auto lg:max-w-[60%]">
              <h1 className="sm:text-center lg:text-left sm:text-4xl lg:text-6xl font-black uppercase z-[9999] text-secondaryColor">
                {t('congratulation.title')}
              </h1>
              <p className="sm:text-center lg:text-left sm:text-xl lg:text-2xl font-bold mt-4 text-white">
                {t('congratulation.subtitle')}
              </p>
              <p className="sm:text-center lg:text-left sm:text-base lg:text-lg mt-2 text-white">
                {t('congratulation.description1')}
              </p>
            </div>

            <div className="actionBtnWrapper lg:w-[60%] sm:mt-8 lg:mt-10 sm:pb-10 lg:pb-0 flex sm:flex-col lg:flex-row gap-4 sm:items-center lg:items-start">
              <ActionButton
                disabled={false}
                className="relative bg-primaryButton w-full lg:w-auto rounded-[42px] sm:p-3 lg:p-3 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
                text={t('congratulation.mainButtonText')}
                onClick={() => router.push("/")}
              />
              <ActionButton
                disabled={false}
                className="relative bg-secondaryColor text-secondaryTextColor w-full lg:w-auto rounded-[42px] sm:p-3 lg:p-3 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(255,228,77,0.3)]"
                text={t('congratulation.secondButtonText')}
                onClick={() => router.push("/profile")}
              />
            </div>
          </div>

          {/* Laptop Image */}
          <div className="sm:hidden lg:block absolute lg:right-[-5%] lg:top-[10%] lg:w-[600px]">
            <Image src={laptopImage} alt="Laptop" priority />
          </div>
          <Image
            className="sm:block lg:hidden w-full px-5 mt-8"
            src={laptopImage}
            alt="Laptop"
          />
        </div>
      </div>

      {/* Thank You Section */}
      <div className="lg:w-[1300px] mx-auto sm:px-5 lg:px-0 sm:py-10 lg:py-20">
        <div className="flex sm:flex-col lg:flex-row items-center gap-10">
          {/* Deal Image */}
          <div className="sm:w-full lg:w-1/2">
            <Image
              src={dealImage}
              alt="Deal"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="sm:w-full lg:w-1/2">
            <h2 className="sm:text-3xl lg:text-5xl font-extrabold text-secondaryColor sm:text-center lg:text-left mb-6">
              {t('congratulation.trustTitle')}
            </h2>
            <div className="space-y-4 text-white sm:text-base lg:text-lg">
              <p>{t('congratulation.trustDescription1')}</p>
              <p>{t('congratulation.trustDescription2')}</p>
              <p>{t('congratulation.trustDescription3')}</p>
              <p className="font-bold text-secondaryColor text-xl mt-6">
                {t('congratulation.exclusiveTitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
