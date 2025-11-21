"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { getBenefitList, getHowItWorksList, getServiceList1, getServiceList2, getServiceList3 } from "@/utils/translatedData";
import CircleUI from "@/../public/static/BannerFigure2.png"
import AboutFigure from "@/../public/static/AboutFigure2.png"
import AboutFigure3 from "@/../public/static/AboutFigure3.png"
import AboutFigure4 from "@/../public/static/AboutFigure4.png"

import AboutFigure5 from "@/../public/static/AboutFigure5.png"
import AboutFigure6 from "@/../public/static/AboutFigure6.png"
import AboutMobileFigure from "@/../public/static/AboutMobileFigure.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ActionButton } from "../buttons/ActionButton";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false);

  // Get translated data
  const benefitList = getBenefitList(t);
  const serviceList1 = getServiceList1(t);
  const serviceList2 = getServiceList2(t);
  const serviceList3 = getServiceList3(t);
  const howitworksList = getHowItWorksList(t);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  const SpeakerSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="BenefitsWrapper  relative sm:h-full lg:h-full sm:mt-[-80px] sm:overflow-x-hidden	lg:overflow-x-hidden sm:p-2 lg:p-0">
      <Image className="absolute sm:left-[-30%] lg:left-[-38px] sm:top-[512px] lg:top-[-62px]" src={CircleUI} alt={""} />
      <Image className="absolute sm:left-[-30%] lg:left-[-74px] sm:top-[512px] lg:top-[800px]" src={AboutFigure} alt={""} />
      <Image className="absolute sm:left-[-30%] lg:left-[605px] sm:top-[512px] lg:top-[960px]" src={AboutFigure3} alt={""} />
      <Image className="absolute sm:left-[-30%] lg:left-[-105px] sm:top-[512px] lg:top-[1200px]" src={AboutFigure4} alt={""} />
      <Image className="absolute sm:left-[-30%] lg:left-[-100px] sm:top-[512px] lg:top-[1600px]" src={AboutFigure5} alt={""} />
      <Image className="absolute sm:right-[-30%] lg:right-[-100px] sm:top-[512px] lg:top-[1600px]" src={AboutFigure6} alt={""} />

      <Image className="absolute sm:block lg:hidden left-[-65px] top-[900px] scale-125" src={AboutMobileFigure} alt={""} />


        <div id="benefits" className="SpeakersWrapper w-full sm:hidden lg:flex justify-center flex flex-col m-auto sm:mt-3 lg:mt-20">
          <div className=" mt-5 sm:flex lg:block sm:ml-[15px] lg:ml-0 sm:mr-[15px] lg:mr-0">
            <div className="SpeakersCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1300px]">
              <Slider className="flex justify-center" {...SpeakerSettings}>
                {benefitList?.map((benefitCard: any) => {
                  return (
                    <>
                      <div className="h-[150px] rounded-[20px] bg-backgroundCard border-1 border-borderCard z-10 p-1 w-full max-w-[400px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px]flex flex-col justify-center max-w-[400x]">
                          <div className="p-3 flex flex-row justify-center text-lg">
                            <Image className="mr-5" src={benefitCard.image} width={40} alt="" />
                            <p className="text-left">
                              {benefitCard?.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              {/* <div className="animatedSliderButtons sm:flex lg:hidden text-white justify-center animate-shake">
                <BouncedLeftArrow className="mt-[11%] mr-[6%]" fill="white"/>
                 <span className=" text-2xl mt-[3.5%] text-center animate-shake animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both"> Свайп <br /> вліво або вправо</span>
                <BouncedRightArrow className="items-center	mt-[11%] ml-[6%]" fill="white" />
              </div> */}

            </div>
          </div>
        </div> 
        <div id="about" className="SponsorsWrapper relative w-full flex justify-center flex flex-col sm:mt-4 lg:mt-16 m-auto">
          <p className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">
          {t('aboutSection.title')}
          </p>
        
          <div className="lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1300px] ">
                <p className="sm:text-xl lg:text-3xl text-center sm:mb-0 lg:mb-0">
                  {t('aboutSection.subtitle')}
                </p>
                {serviceList1?.map((about: any, index: number) => {
                  return (
                    <div key={index} className={`rounded-[20px] bg-testBtns z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-8 m-auto sm:mt-3 lg:mt-10`}>
                      <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-0 lg:mx-0">
                        <div className="p-1 flex flex-col items-center">
                          <Image className="w-full h-auto rounded-[20px] mb-1" src={about.author} alt={about.title} />
                          <p className={`text-center sm:text-base lg:text-lg p-3`}>{about.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                  <p className="sm:text-xl lg:text-3xl text-center sm:max-w-auto lg:max-w-[980px] mx-auto">
                  {t('aboutSection.description')}
                </p>
                 {serviceList2?.map((about: any, index: number) => {
                  return (
                    <div key={index} className={`rounded-[20px] bg-testBtns border-1 border-borderCard'} z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-8 m-auto sm:mt-3 lg:mt-10`}>
                      <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-0 lg:mx-0">
                        <div className="p-1 flex flex-col items-center">
                          <Image className="w-full h-auto rounded-[20px] mb-1" src={about.author} alt={about.title} />
                          <p className={`text-center sm:text-base lg:text-lg p-3`}>{about.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                  <p className="sm:text-xl lg:text-3xl text-center">
                    {t('aboutSection.summary')}
                  </p>
                 {serviceList3?.map((about: any, index: number) => {
                  return (
                    <div key={index} className={`rounded-[20px] bg-testBtns border-1 border-borderCard'} z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-8 m-auto sm:mt-3 lg:mt-10`}>
                      <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-0 lg:mx-0">
                        <div className="p-1 flex flex-col items-center">
                          <Image className="w-full h-auto rounded-[20px] mb-1" src={about.author} alt={about.title} />
                          <p className={`text-center sm:text-base lg:text-lg p-3`}>{about.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <p className="sm:text-xl lg:text-3xl text-center">
                    {t('services.finalNote')}
                </p>
              {/* </Slider> */}
            </div>
             
          </div>
           <ActionButton
              disabled={false}
              onClick={() => router.push('/price')}
              className={
              "relative bg-primaryButton sm:w-full lg:w-[550px] sm:p-auto sm:mt-4 lg:mt-16 rounded-[42px] mx-auto sm:p-3 lg:p-5 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
              }
              text={t('aboutSection.button')}
              // onClick={() =>navigateTo("/#form")}
            />
        </div>
        <div id="howitworks" className="SponsorsWrapper relative w-full flex justify-center flex flex-col sm:mt-8 lg:mt-16 m-auto sm:p-1 lg:p-0">
          <p className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">
          {t('aboutSection.howItWorksTitle')}
          </p>
        
          <div className="lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto justify-between sm:max-w-full lg:max-w-[1300px]">
                <p className="sm:text-xl lg:text-3xl text-center">
                  {t('howItWorks.intro')}
                </p>
                {howitworksList?.map((card: any) => {                  
                  return (
                    <>
                      <div className={`rounded-[20px] ${!card.isEvenNumber ? 'bg-cardsBtns' : 'bg-backgroundCard border-1 border-borderCard'} z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-8 m-auto sm:mt-3 lg:mt-10`}>
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-0 lg:mx-0">
                          <div className="p-1 flex flex-col items-center">
                            {/* <h2 className={`text-center font-bold sm:text-2xl lg:text-3xl mb-4 ${!card.isEvenNumber ? 'text-white' : 'text-primaryColor'}`}>{card.title}</h2> */}
                            <Image className="w-full h-auto rounded-[20px] mb-1" src={card.avatar} alt={card.title} />
                            <p className={`text-center sm:text-base lg:text-lg ${!card.isEvenNumber ? 'text-white' : 'text-gray-700'}`}>{card.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AboutSection;
