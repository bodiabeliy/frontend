"use client";
import Image from "next/image"
import { ActionButton } from "@/components/buttons/ActionButton";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

import timerFigure1 from "@/../public/timerFigure1.png"
import timerFigure2 from "@/../public/timerFigure2.png"


const CountdownTimer = () => {
   const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 5000);
  }, [counter]);

  
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <></>;
    } else {
      // Render a countdown
      return (
        <>
          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] border-r-4 border-white sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(days).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] border-r-4 border-white sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(hours).padStart(2, '0')[1]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] border-r-4 border-white sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(minutes).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] border-r-4 border-white sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(minutes).padStart(2, '0')[1]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] border-r-4 border-white sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(seconds).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative rounded-[0px] sm:w-[45px] sm:h-[140px] lg:w-[100px] lg:h-[260px] flex items-center justify-center overflow-hidden  lg:border-r-5 border-white/40">
              <div className="absolute top-4 left-0 right-0 h-[15%] bg-countdownGradient"></div>
              <div className="absolute bottom-4 left-0 right-0 h-[15%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[64px] lg:text-[125px] leading-none">{String(seconds).padStart(2, '0')[1]}</span>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="countdownWrapper  flex justify-center w-full sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-16">
      <Image className="absolute sm:hidden lg:block sm:left-0 sm:top-0 lg:left-[-47px] lg:top-[3200px] z-[-1]" src={timerFigure1} alt={""} />
      <Image className="absolute sm:hidden lg:block sm:top-0 lg:right-[-47px] lg:top-[3200px] z-[-1]" src={timerFigure2} alt={""} />

        <div className="countdownContent sm:max-w-[95%] lg:max-w-[750px] w-full flex flex-col m-auto">
          <div className="text-center  sm:mb-4 lg:mb-6">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto justify-between sm:max-w-full lg:max-w-[1300px]">

            </div>
            <h2 className="sm:mt-[-50px] lg:mt-0 sm:text-4xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Поспішайте!</h2>
            <p className="sm:text-xl lg:text-3xl text-center">Кількість акційних підписок обмежена</p>
            <p className="sm:text-xl lg:text-3xl text-secondaryColor text-center font-extrabold z-50 mt-8">Залишилося <span className="text-white">підписок</span></p>
          </div>
          
          <div className="relative bg-countdownBg shadow-[0px_0px_100px_rgba(0,0,0,0.4)] sm:rounded-[32px] lg:rounded-[70px] sm:p-0 lg:p-0 sm:border-[8px] lg:border-[18px] border-white shadow-lg">
            <div className="countdown flex sm:gap-2 lg:gap-3 justify-center items-center">
              <Countdown date={"August 13, 2028 18:30:00"} renderer={renderer} />   
                
            </div>
          </div>
           <ActionButton
                  disabled={false}
                  className={
                  "relative bg-primaryButton sm:w-full lg:w-[550px] sm:p-auto sm:mb-4 lg:mb-0 mt-10 mx-auto rounded-[42px] sm:p-3 lg:p-5 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
                  }
                  text={"Підписатися зараз зі знижкою"}
                  // onClick={() =>navigateTo("/#form")}
                />    
        </div>
        
      </div>
    </>
  );
};

export default CountdownTimer;
