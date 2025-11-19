import Image from "next/image"
import PartnersImage from "@/../public/parnterPhones.png"
import PartnersFigure from "@/../public/partnerFigure.png"

import { partnersList } from "@/utils/data";



const Partners = () => {
  return (
    <>
     <div className="max-w-[1300px] text-center justify-center mx-auto  sm:p-3 lg:p-0">
         <h2 className="sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Стань нашим партнером та отримай винагороду!</h2>
            <p className="sm:text-xl lg:text-3xl text-center">Ділися особистим посиланням з іншими, розміщуй його у своїх соцмережах і платформах! Отримуй грошову винагороду за кожного нового підписника!</p>
      </div>
      <div className="partnerWrapper relative bg-bottom flex justify-start mb-20 h-70% sm:m-h-[550px]">
      <Image className="absolute sm:hidden lg:flex lg:right-[-150px]  lg:top-[-300px] lg:scale-50" src={PartnersImage} alt={""} />
      <Image className="absolute sm:hidden lg:flex lg:right-[-50px]  lg:top-[-150px] z-[-1]" src={PartnersFigure} alt={""} />

        <div id="partners" className="w-[640px] sm:ml-0 lg:ml-[60px] sm:mt-10 lg:mt-32 z-50">
          {/* <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Чому репетиторство?</p> */}
          <div className=" sm:mb-80 lg:mb-0 sm:p-5">
            {partnersList.map((partner, key) => {
              return (
                <>
                <div key={key} className="flex mb-8">
                  <div className="flex items-start sm:gap-4 lg:gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-[20px] bg-cardsBtns">
                      <Image className="sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px]" src={partner.avatar} alt={partner.name} />                                
                    </div>
                    <div className="flex-1">
                      <p className="text-white sm:text-[18px] lg:text-[24px] sm:leading-[28px] lg:leading-[36px]">
                        {partner.description}
                      </p>
                    </div>
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

export default Partners;
