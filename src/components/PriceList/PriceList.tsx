


"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import laptoPointer from "../../../public/laptop pointer 1.svg"

import { benefitList, priceList } from "@/utils/data";
import { BouncedLeftArrow } from "../icons/DoubleArrowLeft";
import { BouncedRightArrow } from "../icons/DoubleArrowRight";

const PriceList = () => {
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
      <div className={` relative pb-[30px]`}>
      <Image className="absolute sm:top-[-25%] lg:top-[-5%] sm:right-[-10%] lg:right-[15%] sm:scale-50 lg:scale-75 z-50" src={laptoPointer} alt={""} />

        <div id="pricelist" className="SpeakersWrapper w-full flex justify-center flex flex-col m-auto">
          {/* <Image className="absolute sm:left-[40%] lg:left-[37%] sm:top-[13%] mediumPhoneSize:top-[11.5%] lg:top-[10%] z-10 scale-75" src={Satisfaction} alt={""} /> */}
          <p className="sm:text-4xl lg:text-6xl text-center text-white font-bold sm:mt-10 lg:mt-[100px] sm:mb-5 lg:mt-[100px]">
          Прайс-лист
          </p>
          <div className=" mt-5 sm:flex lg:block sm:ml-[15px] lg:ml-0 sm:mr-[15px] lg:mr-0">
            <div className="PriceCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px]">
              <Slider className="flex justify-center" {...SpeakerSettings}>
                {priceList?.map((price: any) => {
                  return (
                    <>
                      <div className="cardsBtns-animate rounded-[20px] bg-primaryButton z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[300x]">
                          <div className="p-3 flex flex-col justify-center">
                            <p className="text-center sm:text-xl font-bold lg:text-3xl">
                              {price?.name}
                            </p>
                            <div className="text-center">
                              {price?.describing?.map((info:any, key:number) => (
                                // eslint-disable-next-line react/jsx-key
                               <div className="m-5">
                                <span>{info}</span>
                                <br />
                               </div>
                              ))}
                            </div>

                            <p className="text-center sm:text-2xl font-bold lg:text-4xl">
                              {price?.price}
                            </p>
                            <p className="secondaryTextColor text-center text-xl mt-5"><span className="text text-error">{price?.astrix}</span>{price?.details}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div className="animatedSliderButtons sm:flex lg:hidden text-white justify-center animate-shake">
                <BouncedLeftArrow className="mt-[11%] mr-[6%]" fill="white"/>
                 <span className=" text-2xl mt-[3.5%] text-center animate-shake animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both"> Свайп <br /> вліво або вправо</span>
                <BouncedRightArrow className="items-center	mt-[11%] ml-[6%]" fill="white" />
              </div>
            </div>
          </div>
        </div> 
        
      </div>
    </>
  );
};

export default PriceList;
