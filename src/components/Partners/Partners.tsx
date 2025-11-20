import Image from "next/image"
import PartnersImage from "@/../public/parnterPhones.png"
import PartnersFigure from "@/../public/partnerFigure.png"
import PartnersMobileFigure from "@/../public/partnerMobileFigure.png"

import { partnersList } from "@/utils/data";
import { ActionButton } from "../buttons/ActionButton";



const Partners = () => {
  return (
    <>
     <div className="max-w-[1300px] text-center justify-center mx-auto  sm:p-2 lg:p-0">
        <h2 className="sm:hidden lg:flex sm:text-3xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Стань нашим партнером та отримай винагороду!</h2>
        <p className="sm:hidden lg:flex sm:text-xl lg:text-3xl text-center">Ділися особистим посиланням з іншими, розміщуй його у своїх соцмережах і платформах! Отримуй грошову винагороду за кожного нового підписника!</p>
                
        <h2 className="sm:block lg:hidden sm:text-4xl lg:text-5xl text-secondaryColor text-center font-extrabold z-50">Стань нашим <span className="text-white">партнером та отримай</span>  винагороду!</h2>
        <p className="sm:flex lg:hidden mt-8 sm:text-xl lg:text-3xl text-center">Ділися особистим посиланням з іншими, розміщуй його у своїх соцмережах і платформах! Отримуй грошову винагороду за кожного нового підписника!</p>
        <p className="sm:flex lg:hidden justify-center mt-8  sm:text-2xl lg:text-3xl text-center font-bold">Як це працює?</p>

      </div>
      <div className="partnerWrapper relative bg-bottom flex justify-start sm:mb-1 lg:mb-10 h-70% sm:m-h-[550px]">
      <Image className="absolute sm:hidden lg:flex lg:right-[-150px]  lg:top-[-300px] lg:scale-50" src={PartnersImage} alt={""} />
      <Image className="absolute sm:hidden lg:flex lg:right-[-50px]  lg:top-[-150px] z-[-1]" src={PartnersFigure} alt={""} />
      <Image className="absolute sm:block lg:hidden lg:right-[-25px]  lg:top-[-270px] z-[-1]" src={PartnersMobileFigure} alt={""} />

        <div id="partners" className="w-[640px] sm:ml-0 lg:ml-[60px] sm:mt-0 lg:mt-32 z-50">
          <div className=" sm:mb-0 lg:mb-0 sm:p-5">
            {partnersList.map((partner, key) => {
              return (
                <>
                <div key={key} className="flex mb-8 sm:ml-0 lg:ml-16">
                  <div className="flex items-start sm:gap-4 lg:gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center sm:w-[130px] sm:h-[130px] lg:w-[190px] lg:h-[190px] rounded-[20px] bg-cardsBtns">
                      <Image className="sm:w-[80px] sm:h-[80px] lg:w-[0px] lg:h-[120px]" src={partner.avatar} alt={partner.name} />                                
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
      <div className="sm:p-2 lg:p-0">
            <ActionButton
              disabled={false}
              className={
              "actionBtn bg-thirdBtns flex justify-center mx-auto sm:w-full lg:w-[550px] sm:p-auto lg:p-0 rounded-[42px] sm:p-3 lg:p-5 sm:mt-0 lg:mt-20 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(8,210,150,0.3)]"
              }
              text={"Згенерувати посилання"}
              // onClick={() =>navigateTo("/#form")}
            />
      </div>
       
    </>
  );
};

export default Partners;
