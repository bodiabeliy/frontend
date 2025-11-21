
"use client";
import Logo from "../../public/static/azamaza.com.svg";
import Link from "next/link";
import tiktok from "../../public/static/tiktok.svg"
import instagram from "../../public/static/instagram.svg"
import telegram from "../../public/static/telegram.svg"
import facebook from "../../public/static/Facebook.svg"
import visa from "../../public/static/visa-logo.png"
import mastercard from "../../public/static/master card.png"
import maestro from "../../public/static/maestro.png"
import paypal from "../../public/static/PayPal.png"
import gpay from "../../public/static/GooglePay.png"
import applepay from "../../public/static/ApplePay.png"
import liqpay from "../../public/static/liqpay-logo-Photoroom 1.png"
import { useTranslation } from "@/i18n";
import { useLanguage } from "./LanguageProvider";

export const Footer = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language, 'common');
  return (
    <footer className="w-full bg-footer sm:mt-10 lg:mt-20">
      <div className="max-w-[1300px] mx-auto sm:px-4 lg:px-8 sm:py-8 lg:py-12">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8 px-6">
          {/* Navigation Links - Mobile */}
          <nav className="flex flex-col items-center space-y-4 w-full">
            <Link href="#about" className="text-white text-base font-normal uppercase tracking-wide">
              {t('navigation.about')}
            </Link>
            <Link href="#howitworks" className="text-white text-base font-normal uppercase tracking-wide">
              {t('navigation.howItWorks')}
            </Link>
            <Link href="#service" className="text-white text-base font-normal uppercase tracking-wide">
              {t('navigation.subscription')}
            </Link>
            <Link href="#referral" className="text-white text-base font-normal uppercase tracking-wide">
              {t('navigation.referral')}
            </Link>
            <Link href="#contact" className="text-white text-base font-normal uppercase tracking-wide">
              {t('footer.writeToUs')}
            </Link>
          </nav>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center gap-4">
            <Link className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform" href={"https://tiktok.com"}>
              <img src={tiktok.src} alt="TikTok" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform" href={"https://instagram.com"}>
              <img src={instagram.src} alt="Instagram" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform" href={"https://facebook.com"}>
              <img src={facebook.src} alt="Facebook" width={14} height={14} />
            </Link>
            <Link className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform" href={"https://telegram.org"}>
              <img src={telegram.src} alt="Telegram" width={24} height={24} />
            </Link>
          </div>

          {/* Contact Info - Mobile */}
          <div className="text-white text-sm space-y-1">
            <p>Україна, м.Київ, проспект Оболонський 26</p>
            <p>Email: azamazaproject@gmail.com</p>
          </div>

          {/* Payment Methods - Mobile */}
          <div className="w-full space-y-3">
            <div className="flex justify-center items-center gap-3">
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={visa.src} alt="VISA" className="h-auto w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={mastercard.src} alt="MasterCard" className="h-auto w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={maestro.src} alt="Maestro" className="h-auto w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={paypal.src} alt="PayPal" className="h-auto w-full object-contain" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={gpay.src} alt="Google Pay" className="h-auto w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={applepay.src} alt="Apple Pay" className="h-auto w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-[52px] w-[80px]">
                <img src={liqpay.src} alt="LiqPay" className="h-auto w-full object-contain" />
              </div>
            </div>
          </div>

          {/* Footer Links Grid - Mobile */}
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-3 text-white text-xs pt-4">
            <Link href="/terms" className="text-left underline">
              {t('footer.usageTerms')}
            </Link>
            <Link href="/privacy" className="text-right underline">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/privacy" className="text-left underline">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/cookies" className="text-right underline">
              {t('footer.cookiePolicy')}
            </Link>
            <Link href="/terms" className="text-left underline">
              {t('footer.aboutService')}
            </Link>
            <Link href="/delivery" className="text-right underline">
              {t('footer.serviceTerms')}
            </Link>
            <Link href="/contact" className="text-left underline">
              Контактна інформація
            </Link>
            <Link href="/about" className="text-right underline">
              Про сервіс Azamaza
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-8 mb-8">
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
               <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"https://tiktok.com"}>
              <img src={tiktok.src} alt="TikTok" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"https://instagram.com"}>
              <img src={instagram.src} alt="Instagram" width={24} height={24} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 w-[40px] max-h-[40px] transition-transform" href={"https://facebook.com"}>
              <img src={facebook.src} className="mt-auto mx-auto" alt="Facebook" width={12} />
            </Link>
            <Link className="bg-white rounded-full p-2 hover:scale-110 max-h-[40px] transition-transform" href={"https://telegram.org"}>
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

        {/* Copyright - Desktop Only */}
        <div className="hidden lg:block border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

