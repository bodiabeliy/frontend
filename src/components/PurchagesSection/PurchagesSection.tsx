"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { purchagesList} from "@/utils/data";
import Link from "next/link";
import { ActionButton } from "../buttons/ActionButton";
import PurchagesFigure from "@/../public/static/PurchagesFigure.png"
import PurchagesFigure2 from "@/../public/static/PurchagesFigure2.png"
import { useTranslation } from "@/i18n";
import { useLanguage } from "../LanguageProvider";
import { useRouter } from "next/navigation";


const PurchagesSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  return (
    <>
      <div className="PurchagesWrapper  relative sm:h-full lg:h-full sm:mt-5 lg:mt-20 sm:p-2 lg:p-0">
        <Image className="absolute scale-125 sm:hidden lg:block sm:left-0 sm:top-0 lg:left-[-78px] lg:top-[350px] z-[-1]" src={PurchagesFigure} alt={""} />
        <Image className="absolute sm:hidden lg:block sm:left-0 sm:top-0 lg:left-[-190px] lg:top-[80%] z-[-1]" src={PurchagesFigure2} alt={""} />
        {/* <Image className="absolute sm:hidden lg:block sm:left-0 sm:top-0 lg:right-[190px] lg:top-[80%] z-[-1]" src={PurchagesFigure2} alt={""} /> */}

        <div id="purchages" className="SponsorsWrapper relative w-full flex justify-center flex flex-col sm:mt-4 lg:mt-2 m-auto">
          <p className="sm:hidden lg:block sm:text-3xl lg:text-5xl mb-2 text-secondaryColor text-center font-extrabold lg:leading-[60px] z-50">
          {t('purchases.title')}
          </p>
        
        <h2 className="sm:block lg:hidden sm:text-4xl lg:text-5xl text-secondaryColor text-center font-extrabold lg:leading-[60px] z-50">{t('purchases.titleMobile')}</h2>
          <p className="sm:text-xl lg:text-3xl text-center">
             {t('purchases.subtitle')}
          </p>

          <div className="lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">

          </div>
        
          <div className="lg:max-h-full mt-5 lg:ml-0">
            <div className="sm:grid sm:grid-cols-2 sm:gap-3 lg:flex lg:flex-row lg:flex-wrap SponsorsCards m-auto justify-between sm:max-w-full lg:max-w-[1300px]">
                {purchagesList?.map((purchages: any) => {
                  return (
                    <>
                      <div className={` z-10 w-full sm:max-w-none lg:max-w-[300px] sm:mb-0 lg:mb-8 m-auto overflow-hidden`}>
                        <div className="flex flex-col justify-center relative">
                          <div className="relative w-full">
                            <Image className="w-full h-auto" src={purchages.author} alt={purchages.name} />
                          </div>
                          <Link className="absolute inset-0" href={purchages.link}></Link>
                        </div>
                      </div>
                    </>
                  );
                })}
               <p className="sm:hidden lg:block sm:text-xl lg:text-4xl font-extrabold text-center">
                    {t('purchases.description')}
                </p>
              {/* </Slider> */}
            </div>
             
          </div>
           <p className="sm:block lg:hidden sm:text-xl lg:text-5xl text-secondaryColor text-center font-extrabold lg:leading-[60px] z-50">
                    {t('purchases.descriptionMobile')}
                </p>
           <ActionButton
              disabled={false}
              onClick={() =>router.push('/price')}
              className={
              "relative bg-primaryButton sm:w-full lg:w-[550px] sm:p-auto sm:mt-4 lg:mt-16 rounded-[30px] mx-auto sm:p-3 lg:p-5 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
              }
              text={t('purchases.button')}
              // onClick={() =>navigateTo("/#form")}
            />
        </div>
      </div>
    </>
  );
};


export default PurchagesSection;
