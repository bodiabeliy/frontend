"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/i18n";


interface PriceCardProps {
  tier: "lite" | "pro" | "elite";
  title: string;
  description: string;
  subtitle: string;
  price: string;
  currency: string;
  originalPrice: string;
  features: {
    icon: string;
    text: string;
  }[];
  buttonText: string;
  accentColor: string;
  bgColor: string;
  textColor?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  tier,
  title,
  subtitle,
  price,
  currency,
  description,
  originalPrice,
  features,
  buttonText,
  accentColor,
  bgColor,
  textColor = "text-secondaryTextColor",
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  
  const getBadgeStyles = () => {
    switch (tier) {
      case "lite":
        return "bg-mainColor";
      case "pro":
        return "bg-cardBadgePro";
      case "elite":
        return "bg-cardBadgeElite";
      default:
        return "bg-mainColor";
    }
  };

  const getButtonStyles = () => {
    switch (tier) {
      case "lite":
        return "bg-mainColor hover:bg-[#0D47C7]";
      case "pro":
        return "bg-cardBadgePro hover:bg-[#7C3AED]";
      case "elite":
        return "bg-cardBadgeElite hover:bg-[#DB2777]";
      default:
        return "bg-mainColor hover:bg-[#0D47C7]";
    }
  };

  

  return (
    <div className={`${bgColor} rounded-[24px] shadow-lg p-6 flex flex-col max-w-[360px] w-full h-full min-h-[600px]`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-2xl font-bold text-mainColor">Azamaza</h3>
        <span className={`${getBadgeStyles()} px-4 py-1 rounded-[12px] text-xl font-semibold`}>
          {tier.charAt(0).toUpperCase() + tier.slice(1)}
        </span>
      </div>

      {/* Price */}
      <div className="mb-4">
       <div className="flex gap-5">
         <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-cardPrice">{price}</span>
          <span className="text-xl font-medium text-cardPrice mb-2">{currency}</span>
        </div>
        <div>
            <p className={`${textColor}`}>{subtitle}</p>
            <p className={`${textColor}`}>{originalPrice}</p>
        </div>
       </div>
      </div>

      {/* Button */}
      <button
        className={`${getButtonStyles()} w-full font-semibold py-4 rounded-full mb-6 transition-all duration-300 hover:shadow-lg`}
      >
        {buttonText}
      </button>

      {/* Features Title */}
      <h4 className="text-mainColor text-xl font-bold mb-1">{t('pricePage.suitableFor')}</h4>
        <p className={`${textColor} font-bold mb-1`}>{description}</p>

      {/* Features List */}
      <div className="flex-1">

        {features.map((feature, index) => {
          return (
            <div key={index} className="flex gap-3 mb-4">
              <div className="flex-shrink-0 w-6 h-6 mt-1">
               <Image src={feature.icon} alt={""} />
              </div>
              <p className={`${textColor} text-sm leading-relaxed flex-1`}>
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Read More Link */}
      <button className="text-mainColor font-semibold text-center py-3 border-2 border-mainColor rounded-full mt-4 hover:bg-mainColor hover:text-white transition-all duration-300">
        Читати далі
      </button>
    </div>
  );
};

export default PriceCard;
