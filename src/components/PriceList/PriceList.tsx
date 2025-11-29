


"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PriceCard from "../PriceCard/PriceCard";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";
import { getSubscriptionPlans } from "@/utils/translatedData";
import type { CurrencyCode } from "@/utils/currency";

import PriceFigure1 from "../../../public/static/pricefigure1.png"
import PriceFigure2 from "../../../public/static/pricefigure2.png"

import PriceMobileFigure1 from "../../../public/static/PriceMobileFigure1.png"
import PriceMobileFigure2 from "../../../public/static/PriceMobileFigure2.png"

const PriceList = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  const SpeakerSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
  };

  // Get subscription plans with translations and currency conversion
  const subscriptionPlans = getSubscriptionPlans(t, language as CurrencyCode);

  return (
    <>
      <div className="pb-[30px]">
      <Image className="absolute sm:hidden lg:block  lg:top-[-50px] lg:left-[-14px] z-[-1]" src={PriceFigure1} alt={""} />
      <Image className="absolute sm:hidden lg:block lg:top-[0px] lg:left-[1100px] z-[-1]" src={PriceFigure2} alt={""} />

      <Image className="absolute sm:block lg:hidden  sm:top-[100px] sm:left-[-14px] z-[-1]" src={PriceMobileFigure1} alt={""} />
      <Image className="absolute sm:block lg:hidden sm:top-[300px] z-[-1]" src={PriceMobileFigure2} alt={""} />

        <div id="pricelist" className="SpeakersWrapper w-full flex justify-center flex flex-col m-auto">
        
          <div className=" mt-10 sm:ml-[15px] lg:ml-0 sm:mr-[15px] lg:mr-0">
            <div className="PriceCards m-auto justify-between sm:max-w-full lg:max-w-[1200px]">
              {isMobile ? (
                // Desktop view - show all cards
                <div className="flex gap-6 justify-center flex-wrap">
                 
                  {subscriptionPlans?.map((plan, index) => {
                    return (
                      <div key={index} className="flex-1 min-w-[320px] max-w-[360px] gap-4">
                        <PriceCard
                          tier={plan.tier}
                          title={plan.title}
                          description={plan.description}
                          subtitle={plan.subtitle}
                          price={plan.price}
                          currency={plan.currency}
                          originalPrice={plan.originalPrice}
                          features={plan.features}
                          buttonText={plan.buttonText}
                          accentColor={plan.accentColor}
                          bgColor={plan.bgColor}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                 <p className="sm:block lg:hidden sm:text-2xl text-secondaryColor text-center font-extrabold lg:leading-[32px] z-50 mt-[-40px]">
                    {t('pricePage.mobileTitle')}
                  </p>
                  <p className="sm:block lg:hidden sm:text-xl lg:text-3xl text-center sm:mb-6 lg:mb-6">
                    {t('pricePage.mainSubtitle')}
                  </p>
                 {subscriptionPlans?.map((plan, index) => {
                    return (
                      <div key={index} className="sm:mb-4 flex-1 min-w-[320px] max-w-[380px]">
                        <PriceCard
                          tier={plan.tier}
                          title={plan.title}
                          description={plan.description}
                          subtitle={plan.subtitle}
                          price={plan.price}
                          currency={plan.currency}
                          originalPrice={plan.originalPrice}
                          features={plan.features}
                          buttonText={plan.buttonText}
                          accentColor={plan.accentColor}
                          bgColor={plan.bgColor}
                        />
                      </div>
                    );
                  })}
                </>   
              )}
            </div>
          </div>
        </div> 
        
      </div>
    </>
  );
};

export default PriceList;
