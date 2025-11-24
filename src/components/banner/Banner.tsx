"use client"
import Image from "next/image"

import { ActionButton } from "../buttons/ActionButton";
import BannerImage from "@/../public/static/banner video.png"
import BannerMobileImage from "@/../public/static/bannerMobile.png"
import BannerMobileFigure from "@/../public/static/BannerMobileFigure.png"

import BannerFigure from "@/../public/static/banner-figure.png"
import { useState } from "react";
import { useTranslation } from "@/i18n";
import { useLanguage } from "../LanguageProvider";
import { useRouter } from "next/navigation";

const Banner = () => {
    const { language } = useLanguage();
    const { t } = useTranslation(language, 'common');
    const router = useRouter()

  return (
    <>
    {/* <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} /> */}
        <div className="bannerContent sm:ml-5 lg:ml-0 lg:max-w-[46%] sm:mt-2 lg:mt-12 sm:ml-4 lg:ml-[0px] sm:text-center lg:text-left sm:w-[335px] lg:w-full">
            <Image className="absolute sm:hidden lg:block sm:left-0 sm:top-0 lg:left-[695px] lg:top-[-96px] z-[-1]" src={BannerFigure} alt={""} />
            <Image className="absolute sm:block lg:hidden sm:left-[-48px] sm:top-[920px] z-[-1]" src={BannerMobileFigure} alt={""} />

            <div className="bannerTitle sm:pl-[5px] lg:pl-0">
                <p className="authorName sm:text-5xl lg:text-8xl font-black tracking-tight">
                  {t('banner.title')}
                </p>
            </div>
            <div className="bannerContent serviceInfo lg:relative sm:text-xl lg:text-2xl sm:mt-4 lg:mt-2 sm:pl-[5px] lg:pl-0">
                <p className="sm:font-bold lg:font-extrabold">{t('banner.subtitle')}</p> 
                <p className="text-secondaryColor sm:font-bold lg:font-extrabold">{t('banner.description1')}</p> 
                <p className="text-lg">{t('banner.description2')}</p>
            </div>
            <div className="actionBtnWrapper sm:mt-[5%] sm:pb-[75px] lg:pb-0 lg:mt-2 sm:mb-0 sm:mb-0 lg:mb-10 gap-4 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between">
                <ActionButton
                    disabled={false}
                    onClick={() => router.push('/price')}
                    className={
                    "relative bg-primaryButton w-full sm:p-auto sm:mb-4 lg:mb-0 rounded-[42px] sm:p-3 lg:p-5 text-lg font-semibold hover:shadow-[0_4px_4px_rgba(252,21,93,0.3)]"
                    }
                    text={t('banner.button1')}
                    // onClick={() =>navigateTo("/#form")}
                />
                <ActionButton
                    disabled={false}
                    className={
                    " relative actionBtn sm:hidden lg:flex justify-center bg-secondaryButton w-full sm:p-auto lg:p-0 rounded-[42px] sm:p-3 lg:p-5 sm:mb-4 lg:mb-0 border-2 border-secondaryColor  text-lg font-semibold text-secondaryColor hover:shadow-[0_4px_4px_rgba(49,45,47,0.3)]"
                    }
                    text={t('banner.button2')}
                    // onClick={() =>navigateTo("/#form")}
                />
                <Image 
                    className="lg:hidden"
                    src={BannerMobileImage} 
                    alt={"AZAMAZA"} 
                    loading="lazy"
                />
                <ActionButton
                    disabled={false}
                    className={
                    " relative actionBtn lg:hidden  bg-secondaryButton w-full sm:p-auto lg:p-0 rounded-[42px] sm:p-3 lg:p-5 sm:mb-4 lg:mb-0 border-2 border-secondaryColor  text-lg font-semibold text-secondaryColor hover:shadow-[0_4px_4px_rgba(49,45,47,0.3)]"
                    }
                    text={t('banner.button2')}
                    // onClick={() =>navigateTo("/#form")}
                />
        </div>
            
        </div>
        <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[8%] lg:top-[21%] mt-3">
            <div className="relative w-[630px] h-[360px] rounded-lg overflow-hidden">
                <Image 
                    src={BannerImage} 
                    alt={"AZAMAZA"} 
                    fill
                    className="object-cover"
                    priority
                />
                {/* <iframe 
                    className="absolute inset-0 w-full h-full"
                    width="630"
                    height="360"
                    src="https://www.youtube.com/embed/r4u2ydFLbN4"
                    title="AZAMAZA Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                /> */}
            </div>
        </div>
        {/* <Image className=" mobileTutorImage sm:block lg:hidden absolute  sm:right-[0%] lg:top-[0%] lg:right-[0%] m-auto w-[90%] top-[230px] opacity-90 scale-100" src={Tutor} alt="" /> */}
    </>
  );
};

export default Banner;
