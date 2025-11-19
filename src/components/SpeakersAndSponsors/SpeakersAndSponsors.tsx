"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { benefitList, howitworksList, serviceList1, serviceList2, serviceList3 } from "@/utils/data";
import CircleUI from "@/../public/BannerFigure2.png"
import play from "../../../public/play-3-1.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ActionButton } from "../buttons/ActionButton";

const SpeakersAndSponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      <div className="BenefitsWrapper  relative sm:h-full lg:h-full sm:mt-[-80px] sm:overflow-x-hidden	lg:overflow-x-hidden">
      <Image className="absolute sm:left-[-30%] lg:left-[-38px] sm:top-[512px] lg:top-[-32px]" src={CircleUI} alt={""} />

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
        <div id="service" className="SponsorsWrapper relative w-full flex justify-center flex flex-col sm:mt-4 lg:mt-2 m-auto">
          <p className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">
          Про нас
          </p>
        
          <div className="lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1300px] ">
                <p className="sm:text-xl lg:text-3xl text-center">
                  Мільйони товарів з максимальними знижками + тисячі різноманітних послуг напряму від виконавців, без комісій, посередників та додаткових витрат
                </p>
                {serviceList1?.map((service: any) => {
                  return (
                    <>
                      <div className={`rounded-[20px] z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-0 m-auto`}>
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-3 lg:mx-0">
                          <div className={`sm:flex lg:block sm:gap-3 ${!service.isEvenNumber ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="relative sm:w-[70%] lg:w-full">
                              <Image className="servicePreview w-full h-auto rounded-[20px]" src={service.author} alt={service.name} />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-[20px]">
                                <p className="text-white text-base font-semibold text-center">{service.name}</p>
                              </div>
                            </div>
                            <div className={`sm:flex lg:hidden items-center justify-center sm:w-[30%] rounded-[20px] bg-cardsBtns sm:h-[100px] sm:self-center ${service?.markedMobile ? "sm:hidden":"sm:flex"}`}>
                              <Image className="w-[60px] h-[60px]" src={service.icon} alt={service.name} />                                
                            </div>
                            <Link className="absolute inset-0" href={service.link}></Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                  <p className="sm:text-xl lg:text-3xl text-center">
                  Сервіс, що надає максимальні знижки на послуги та товари. Екскурсії, фотосесії, ресторани, маркетплейс, прокат, 
                  бронювання готелів, трансфери,  подарунки, — усе в одному місці
                </p>
                 {serviceList2?.map((service: any) => {
                  return (
                    <>
                      <div className={`rounded-[20px] z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-0 m-auto`}>
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-3 lg:mx-0">
                          <div className={`sm:flex lg:block sm:gap-3 ${!service.isEvenNumber ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className={`relative ${service?.markedMobile ? 'sm:w-full' : 'sm:w-[70%]'} lg:w-full`}>
                              <Image className="servicePreview w-full h-auto rounded-[20px]" src={service.author} alt={service.name} />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-[20px]">
                                <p className="text-white text-base font-semibold text-center">{service.name}</p>
                              </div>
                            </div>
                            <div className={`${service?.markedMobile ? 'sm:hidden' : 'sm:flex'} lg:hidden items-center justify-center sm:w-[30%] rounded-[20px] bg-cardsBtns sm:h-[100px] sm:self-center`}>
                              <Image className="w-[60px] h-[60px]" src={service.icon} alt={service.name} />                                
                            </div>
                            <Link className="absolute inset-0" href={service.link}></Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                  <p className="sm:text-xl lg:text-3xl text-center">
                    Замовляй, орендуй, купуй на маркетплейсі без зайвих додатків та переходів на сторонні ресурси. Єдиний кабінет для управління всіма сервісами
                  </p>
                 {serviceList3?.map((service: any) => {
                  return (
                    <>
                      <div className={`rounded-[20px] z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-0 m-auto`}>
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-3 lg:mx-0">
                          <div className={`sm:flex lg:block sm:gap-3 ${!service.isEvenNumber ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="relative sm:w-[70%] lg:w-full">
                              <Image className={`servicePreview w-full h-auto rounded-[20px]`} src={service.author} alt={service.name} />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-[20px]">
                                <p className="text-white text-base font-semibold text-center">{service.name}</p>
                              </div>
                            </div>
                            <div className={`sm:flex lg:hidden items-center justify-center sm:w-[30%] rounded-[20px] bg-cardsBtns sm:h-[100px] sm:self-center`}>
                              <Image className={`w-[60px] h-[60px]`} src={service.icon} alt={service.name} />                                
                            </div>
                            <Link className="absolute inset-0" href={service.link}></Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <p className="sm:text-xl lg:text-3xl text-center">
                    Azamaza - не просто платформа. Це сервіс з яким легко купувати, подорожувати, знайомитись, отримувати нові можливості та насолоджуватись життям
                </p>
              {/* </Slider> */}
            </div>
             
          </div>
           <ActionButton
              disabled={false}
              className={
              "relative bg-primaryButton max-w-[550px] sm:p-auto sm:mt-4 lg:mt-16 rounded-[42px] mx-auto sm:p-3 lg:p-5 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
              }
              text={"Отримати доступ зі знижкою"}
              // onClick={() =>navigateTo("/#form")}
            />
        </div>
        <div id="howitworks" className="SponsorsWrapper relative w-full flex justify-center flex flex-col sm:mt-8 lg:mt-16 m-auto">
          <p className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">
          Як це працює?
          </p>
        
          <div className="lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto justify-between sm:max-w-full lg:max-w-[1300px]">
                <p className="sm:text-xl lg:text-3xl text-center">
                  З Azamaza ви купуєте не просто підписку, а зручність та економію. Підписка дає вам доступ до самих різноманітних послуг на максимально вигідних умовах, а також можливість купувати товари без роздрібної націнки та додаткових витрат
                </p>
                {howitworksList?.map((card: any) => {                  
                  return (
                    <>
                      <div className={`rounded-[20px] ${!card.isEvenNumber ? 'bg-cardsBtns' : 'bg-backgroundCard border-1 border-borderCard'} z-10 p-1 w-full max-w-[420px] sm:mb-8 lg:mb-8 m-auto sm:mt-3 lg:mt-10`}>
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[420px] relative overflow-hidden sm:mx-3 lg:mx-0">
                          <div className="p-4 flex flex-col items-center">
                            <h2 className={`text-center font-bold sm:text-2xl lg:text-3xl mb-4 ${!card.isEvenNumber ? 'text-white' : 'text-primaryColor'}`}>{card.title}</h2>
                            <Image className="w-full h-auto rounded-[20px] mb-4" src={card.avatar} alt={card.title} />
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


export default SpeakersAndSponsors;
