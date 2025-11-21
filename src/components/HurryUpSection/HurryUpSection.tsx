"use client";
import { ActionButton } from "../buttons/ActionButton";
import { useTranslation } from "@/i18n";
import { useLanguage } from "../LanguageProvider";
import { useRouter } from "next/navigation";

const HurryUpSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const router = useRouter()
  return (
    <section className="relative w-full sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-20 sm:px-3 lg:px-0">
      <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="sm:text-4xl lg:text-7xl font-extrabold mb-6">
          {t('hurryUp.title')} 
          <br />
          <span className=" text-secondaryColor">
            {t('hurryUp.beFirst')} 
          </span>
          <br />
          {t('hurryUp.dontMiss')} 

        </h2>
      
        <p className="sm:text-xl lg:text-3xl font-semibold mb-8">
          {t('hurryUp.subtitle')}
        </p>
        <p className="sm:text-xl lg:text-3xl text-secondaryColor font-semibold mb-8">
          {t('hurryUp.description')}
        </p>

        <ActionButton
          disabled={false}
          onClick={()=>router.push('/price')}
          className="bg-primaryButton sm:w-full lg:w-auto sm:max-w-[500px] mx-auto sm:p-4 lg:px-12 lg:py-5 rounded-[42px] text-white font-bold sm:text-lg lg:text-2xl hover:shadow-[0_8px_16px_rgba(252,21,93,0.4)] transition-all"
          text={t('hurryUp.button')}
        />
      </div>
    </section>
  );
};

export default HurryUpSection;
