"use client";
import PriceList from "@/components/PriceList/PriceList";
import Countdown from "@/widgets/Countdown/Countdown";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";


const Price = () => {
    const { language } = useLanguage();
    const { t } = useTranslation(language, 'common');
    
    return ( 
    <>
      <div className="lg:w-[1300px] flex flex-col m-auto">
          <p className="sm:max-w-auto lg:max-w-[1200px] sm:text-3xl lg:text-6xl text-center text-secondaryColor font-extrabold sm:mt-10 lg:mt-[100px] sm:mb-5">
          {t('pricePage.mainTitle')} <span className="text-white">{t('pricePage.mainTitleHighlight')}</span> {t('pricePage.mainTitleEnd')}
          </p>
          <p className="sm:hidden lg:block sm:text-xl lg:text-3xl text-center sm:mb-0 lg:mb-6">
              {t('pricePage.mainSubtitle')}
          </p>
          
          <div className="sm:mt-[-50px] lg:mt-[-100px] sm:order-1 lg:order-2">
            <Countdown isVisible={false} />
          </div>
          
          <div className="sm:order-2 lg:order-1">
            <PriceList />
          </div>
      </div>
    </> );
}
 
export default Price;