import Image from "next/image"
import AboutImage from "@/../public/aboutFigure.png"
import AboutFigure from "@/../public/subscribeFigure.png"

import { SubscribeBenefitList } from "@/utils/data";



const About = () => {
  return (
    <>
     <div className="max-w-[1300px] text-center justify-center mx-auto  sm:p-3 lg:p-0">
         <h2 className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Чому варто придбати підписку саме зараз?</h2>
            <p className="sm:text-xl lg:text-3xl text-center">Ти отримуєш безлімітний доступ після запуску, першим тестуєш нові функції та унікальні можливості</p>
      </div>
      <div className="aboutWrapper relative bg-bottom flex justify-end mb-20 h-70% sm:m-h-[550px]">
      <Image className="absolute sm:hidden lg:flex lg:left-[-150px]  lg:top-[-500px] lg:scale-50" src={AboutImage} alt={""} />
      <Image className="absolute sm:hidden lg:flex lg:left-0  lg:top-0 z-[-1]" src={AboutFigure} alt={""} />
        <div id="subscribe" className="w-[640px] sm:mr-0 lg:mr-[60px] sm:mt-10 lg:mt-32 z-50">
          {/* <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Чому репетиторство?</p> */}
          <div className=" sm:mb-0 lg:mb-0 sm:p-5">
            {SubscribeBenefitList.map((subscribe, key) => {
              return (
                <>
                <div key={key} className="flex mb-4">
                  <Image className="align-center mr-8" src={subscribe.avatar} alt={subscribe.name}/>
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
           
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
