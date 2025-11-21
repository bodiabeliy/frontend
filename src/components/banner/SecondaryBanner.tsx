"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { ActionButton } from "../buttons/ActionButton";

const SecondaryBanner = ({bannerImage, languge, navLink}:any) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (link:string) => {
   router.push(`${pathname}#${link}`);
  
  }


  return (
    <>
      <div className="bannerContent sm:ml-5 lg:ml-0 sm:ml-4 extra-loose  lg:w-full z-10 ">
        <div className="bannerTitle pl-0 sm:max-w-auto lg:max-w-[70%]">
          <p className="sm:text-center lg:text-left sm:text-2xl lg:text-5xl font-lora uppercase z-[9999] sm:mt-5 lg:mt-0">
            Поринь у захоплюючу подорож  <span className="font-bold uppercase"> {languge}</span>  разом зі мною!
          </p>
          {/* <Image
            className="absolute  sm:right-10 sm:top-[18%] lg:right-[35%] lg:top-[-6%] sm:scale-0 lg:scale-50"
            width={400}
            src={EngFrFlags}
            alt={""}
          /> */}
        </div>
        <div className="bannerContent font-lora font-bold lg:relative sm:text-xl lg:text-3xl sm:mt-4 lg:mt-9 sm:pl-[5px] lg:pl-0 ">
         
        </div>
        <div className="actionBtnWrapper lg:w-[40%] sm:mt-[83%] sm:pb-[75px] lg:pb-0 lg:mt-20 sm:mb-0 sm:mb-0 lg:mb-10 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between">
        <ActionButton
            disabled={false}
            className={
              "relative actionBtn font-grotesk sm:mt-[75px] lg:mt-0 rounded-[25px] border-white border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[300px] sm:h-auto lg:h-[80px] bg-mainOrange hover:bg-lightOrange  focus:bg-lightOrange text-white shadow-[0px_6px_1px_0px_darkOrange]"
            }
            text={"Дізнатись деталі"}
            onClick={() =>navigateTo(navLink)}
          />
        </div>
      </div>
      <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[-9%] lg:top-[3%] sm:scale-50 lg:scale-[50%]">
        <Image src={bannerImage} alt={"Winked"} />
      </div>
      <Image
        className="  sm:block lg:hidden absolute sm:flex lg:block justify-center sm:w-full lg:w-auto sm:right-[0%] lg:top-[0%] lg:right-[0%] m-auto w-[90%] top-[150px]  sm:scale-[0.9] lg:scale-100"
        src={bannerImage}
        alt=""
      />
    </>
  );
};

export default SecondaryBanner;
