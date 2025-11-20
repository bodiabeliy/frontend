
import Logo from "../../public/azamaza.com.svg";
import Link from "next/link";
import tiktok from "../../public/tiktok.svg"
import instagram from "../../public/instagram.svg"
import telegram from "../../public/telegram.svg"
import facebook from "../../public/Facebook.svg"

export const Footer = () => {
  return (
    <footer className="w-full bg-footer sm:mt-10 lg:mt-20">
      <div className="max-w-[1300px] mx-auto sm:px-4 lg:px-8 sm:py-8 lg:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-4">AZAMAZA.COM</h3>
            <p className="text-white/80 text-sm mb-4">
              Україна, м.Київ, проспект Оболонський 26
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
            <h4 className="text-white font-bold text-lg mb-4">Навігація</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white text-sm">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="#howitworks" className="text-white/80 hover:text-white text-sm">
                  Як це працює
                </Link>
              </li>
              <li>
                <Link href="#service" className="text-white/80 hover:text-white text-sm">
                  Єдина підписка
                </Link>
              </li>
              <li>
                <Link href="#referral" className="text-white/80 hover:text-white text-sm">
                  Реферальна програма
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white text-sm">
                  Напишіть нам
                </Link>
              </li>
            </ul>
          </div>

          {/* Rules Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Правила</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white text-sm">
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/80 hover:text-white text-sm">
                  Політика щодо cookie-файлів
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white text-sm">
                  Про сервіс Azamaza
                </Link>
              </li>
            </ul>
          </div>

          {/* Clients Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Клієнтам</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/delivery" className="text-white/80 hover:text-white text-sm">
                  Умови надання послуг клієнтам
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-white/80 hover:text-white text-sm">
                  Політика оплати та повернення
                </Link>
              </li>
              <li>
                <Link href="/usage" className="text-white/80 hover:text-white text-sm">
                  Умови використання
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Контакти</h4>
            <p className="text-white/80 text-sm mb-2">azamazaproject@gmail.com</p>
            <p className="text-white/80 text-sm">azamazasupport@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © All rights reserved Azamaza.com 2024-2025
          </p>
        </div>
      </div>
    </footer>
  );
};

