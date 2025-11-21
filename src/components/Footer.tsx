
"use client";
import Logo from "../../public/static/azamaza.com.svg";
import Link from "next/link";
import tiktok from "../../public/static/tiktok.svg"
import instagram from "../../public/static/instagram.svg"
import telegram from "../../public/static/telegram.svg"
import facebook from "../../public/static/Facebook.svg"
import { useTranslation } from "@/i18n";
import { useLanguage } from "./LanguageProvider";

export const Footer = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  return (
    <footer className="w-full bg-footer sm:mt-10 lg:mt-20">
      <div className="max-w-[1300px] mx-auto sm:px-4 lg:px-8 sm:py-8 lg:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-4">AZAMAZA.COM</h3>
            <p className="text-white/80 text-sm mb-4">
              {t('footer.companyInfo')}
            </p>
            <a href="mailto:azamazaproject@gmail.com" className="text-white/80 text-sm hover:text-white">
              azamazaproject@gmail.com
            </a>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
               <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] max-h-[40px] transition-transform" href={"#about"}>
              <img src={tiktok.src} alt="TikTok" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#benefits"}>
              <img src={instagram.src} alt="Instagram" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 w-[40px] max-h-[40px] transition-transform" href={"#service"}>
              <img src={facebook.src} className="mt-auto mx-auto" alt="Facebook" width={12} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"#pricelist"}>
              <img src={telegram.src} alt="Telegram" width={24} height={24} />
            </Link>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.navigationTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white text-sm">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="#howitworks" className="text-white/80 hover:text-white text-sm">
                  {t('navigation.howItWorks')}
                </Link>
              </li>
              <li>
                <Link href="#service" className="text-white/80 hover:text-white text-sm">
                  {t('navigation.subscription')}
                </Link>
              </li>
              <li>
                <Link href="#referral" className="text-white/80 hover:text-white text-sm">
                  {t('navigation.referral')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white text-sm">
                  {t('footer.writeToUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Rules Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.rulesTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white text-sm">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/80 hover:text-white text-sm">
                  {t('footer.cookiePolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white text-sm">
                  {t('footer.aboutService')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Clients Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.clientsTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/delivery" className="text-white/80 hover:text-white text-sm">
                  {t('footer.serviceTerms')}
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-white/80 hover:text-white text-sm">
                  {t('footer.paymentPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/usage" className="text-white/80 hover:text-white text-sm">
                  {t('footer.usageTerms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.contactTitle')}</h4>
            <p className="text-white/80 text-sm mb-2">azamazaproject@gmail.com</p>
            <p className="text-white/80 text-sm">azamazasupport@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

