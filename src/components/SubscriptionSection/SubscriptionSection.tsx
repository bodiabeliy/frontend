import Image from "next/image"
import SubscriptionSectionImage from "@/../public/aboutFigure.png"
import SubscriptionSectionFigure from "@/../public/subscribeFigure.png"
import SubscribeMobileImage from "@/../public/parnterPhones.png"
import SubscribeMobileFigure from "@/../public/SubscribeMobileFigure.png"

import { SubscribeBenefitList } from "@/utils/data";
import { ActionButton } from "../buttons/ActionButton";



const SubscriptionSection = () => {
  return (
    <>
     <div className="max-w-[1200px] text-center justify-center mx-auto  sm:p-3 lg:p-0">
          <Image className=" sm:block lg:hidden" src={SubscribeMobileImage} alt={""} />
          <Image className="absolute sm:block lg:hidden top-[6300px] left-0 z-[-1]" src={SubscribeMobileFigure} alt={""} />
          <h2 className="sm:hidden lg:block sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Чому варто придбати підписку саме зараз?</h2>
          <p className="sm:hidden lg:block sm:text-xl lg:text-3xl text-center">Ти отримуєш безлімітний доступ після запуску, першим тестуєш нові функції та унікальні можливості</p>

          <h2 className="sm:block lg:hidden sm:text-4xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Чому варто <span className="text-white">придбати підписку саме</span>  зараз?</h2>
      </div>
      <div className="aboutWrapper relative sm:mt-[-40px] lg:mt-[-100px] flex justify-end mb-20 h-70% sm:m-h-[550px]">
      <Image className="absolute sm:hidden lg:flex lg:left-[-150px]  lg:top-[-360px] lg:scale-50" src={SubscriptionSectionImage} alt={""} />
      <Image className="absolute sm:hidden lg:flex lg:left-0  lg:top-0 z-[-1]" src={SubscriptionSectionFigure} alt={""} />
        <div id="subscribe" className="w-[640px] sm:mr-0 lg:mr-[60px] sm:mt-10 lg:mt-32 z-50">
          {/* <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Чому репетиторство?</p> */}
          <div className=" sm:mb-0 lg:mb-0 sm:p-5">
            {SubscribeBenefitList.map((subscribe, key) => {
              return (
                <>
                <div key={key} className="flex mb-4">
                  <Image className="sm:self-start lg:self-auto align-center mr-8 sm:w-6 lg:w-auto" src={subscribe.avatar} alt={subscribe.name}/>
                 <div className="">
                     <p className=" text-secondaryColor sm:text-[20px] lg:text-[28px] font-extrabold lg:leading-[40px] sm:overflow-y-scroll lg:overflow-y-auto">
                    {subscribe.name}
                  </p>
                  <p className=" sm:text-[20px] lg:text-[28px] lg:leading-[40px] sm:overflow-y-scroll lg:overflow-y-auto">
                    {subscribe.description}
                  </p>
                  {subscribe.subDescription && subscribe.subDescription.length > 0 && (
                    <ul className="list-disc ml-6 sm:text-[18px] lg:text-[24px] lg:leading-[36px] text-white">
                      {subscribe.subDescription.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                 </div>
                </div>
                </>
              )
            })}
          <ActionButton
            disabled={false}
            className="sm:flex lg:hidden bg-secondaryButton flex justify-center mb-0 sm:w-full mx-auto lg:w-[550px] mx-auto sm:p-4 lg:px-10 lg:py-6 rounded-[42px] text-white font-bold sm:text-lg lg:text-xl hover:shadow-[0_8px_16px_rgba(252,21,93,0.4)] transition-all border-2 border-secondaryColor"
            text="Переглянути призи"
        />
          </div>
        </div>
      </div>
        <ActionButton
          disabled={false}
          className="sm:hidden lg:flex bg-secondaryButton flex justify-center mb-14 sm:w-full mx-auto lg:w-[550px] mx-auto sm:p-4 lg:px-10 lg:py-6 rounded-[42px] text-white font-bold sm:text-lg lg:text-xl hover:shadow-[0_8px_16px_rgba(252,21,93,0.4)] transition-all border-2 border-secondaryColor"
          text="Переглянути призи"
        />
    </>
  );
};

export default SubscriptionSection;
