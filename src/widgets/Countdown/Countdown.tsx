"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";


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
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(days).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(hours).padStart(2, '0')[1]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(minutes).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(minutes).padStart(2, '0')[1]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(seconds).padStart(2, '0')[0]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:w-[45px] lg:w-[100px]">
            <div className="relative bg-countdownBg rounded-[16px] sm:w-[45px] sm:h-[60px] lg:w-[100px] lg:h-[140px] flex items-center justify-center overflow-hidden sm:border-[1.5px] lg:border-5 border-white/40">
              <div className="absolute top-0 left-0 right-0 h-[35%] bg-countdownGradient"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-countdownGradient rotate-180"></div>
              <span className="relative z-10 text-white font-manrope font-bold sm:text-[40px] lg:text-[90px] leading-none">{String(seconds).padStart(2, '0')[1]}</span>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="countdownWrapper flex justify-center w-full sm:mt-10 lg:mt-20 sm:mb-10 lg:mb-16">
        <div className="countdownContent sm:max-w-[95%] lg:max-w-[750px] w-full flex flex-col m-auto">
          <div className="text-center sm:mb-4 lg:mb-6">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto justify-between sm:max-w-full lg:max-w-[1300px]">

            </div>
            <h2 className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Поспішайте!</h2>
            <p className="sm:text-xl lg:text-3xl text-center">Кількість акційних підписок обмежена</p>
            <p className="sm:text-xl lg:text-3xl text-secondaryColor text-center font-extrabold z-50 mt-8">Залишилося підписок</p>
          </div>
          
          <div className="relative bg-mainColor rounded-[32px] sm:p-4 lg:p-6 border-8 border-white shadow-lg">
            <div className="countdown flex sm:gap-2 lg:gap-3 justify-center items-center">
              <Countdown date={"August 13, 2028 18:30:00"} renderer={renderer} />         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
