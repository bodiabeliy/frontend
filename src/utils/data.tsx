import Benefit1 from "../../public/clock-fill.svg"
import Benefit2 from "../../public/briefcase-fill.svg"
import Benefit3 from "../../public/award-fill.svg"

import Reels1 from "../../public/Image.png"
import Reels2 from "../../public/image-2.png"
import Reels3 from "../../public/Image-3.png"
import Reels4 from "../../public/Image-4.png"
import Reels5 from "../../public/Image-5.png"
import Reels6 from "../../public/Image-6.png"
import Reels7 from "../../public/Image-7.png"
import Reels8 from "../../public/Image-8.png"
import Reels9 from "../../public/Image-9.png"

import AboutIcon1 from "../../public/cart.png"
import AboutIcon2 from "../../public/house-check-fill.svg"
import AboutIcon3 from "../../public/cup-hot-fill.svg"
import AboutIcon4 from "../../public/Union.svg"
import AboutIcon5 from "../../public/taxi-front.svg"
import AboutIcon6 from "../../public/raphael_people.svg"
import AboutIcon7 from "../../public/fuel-pump-fill.svg"
import AboutIcon8 from "../../public/gift-fill.svg"
import AboutIcon9 from "../../public/gift-fill.svg"

import HowItWorks1 from "../../public/Card-1 1.png"
import HowItWorks2 from "../../public/Card-1 2.png"
import HowItWorks3 from "../../public/Card-1 3.png"

import SubscribeIcon1 from "../../public/clock-history.svg"
import SubscribeIcon2 from "../../public/gift.svg"
import SubscribeIcon3 from "../../public/rocket-takeoff.svg"
import SubscribeIcon4 from "../../public/fire.svg"
import SubscribeIcon5 from "../../public/briefcase.svg"

import Partner1 from "../../public/icon-park-solid_copy-link.svg"
import Partner2 from "../../public/game-icons_two-coins.svg"

import Purchages1 from "../../public/mockcard.png"
import Purchages2 from "../../public/mockcard.png"
import Purchages3 from "../../public/mockcard.png"
import Purchages4 from "../../public/mockcard.png"
import Purchages5 from "../../public/mockcard.png"
import Purchages6 from "../../public/mockcard.png"
import Purchages7 from "../../public/mockcard.png"
import Purchages8 from "../../public/mockcard.png"
import Purchages9 from "../../public/mockcard.png"

export const benefitList =[
    {
        image:Benefit1,
        position:"Акційна підписка для перших 100 000 користувачів - долучайтесь до Azamaza та отримайте всі послуги назавжди",  },
    {
        image:Benefit2,
        position:"Інвестиція в майбутнє. Один платіж. Всього 199 гривень за безлімітний доступ до платформи «все-в-одному»",
    },
    {
        image:Benefit3,
        position:"Встигни долучитись. Обмежена пресейл пропозия діє для перших 100 000 підписників. Не переплачуй потім, заощаджуй вже зараз!",
    }
]

export const serviceList1 = [
    {author:Reels1, link:"/", name:"Усе, що ти шукав! Знижки до 70% на будь-який товар на нашому маркетплейсі", isEvenNumber:false, icon:AboutIcon1},
    {author:Reels2, link:"/", name:"Найкращі готелі  — за спеціальною ціною тільки для підписників", isEvenNumber:true, icon:AboutIcon2},
    {author:Reels3, link:"/", name:"Вечеря в ресторані зі знижкою до 50% з нашим сервісом", isEvenNumber:false, icon:AboutIcon3},
]


export const serviceList2 = [
    {author:Reels4, link:"/", name:"Тисячі екскурсій за спеціальними цінами для підписників платформи", isEvenNumber:false, icon:AboutIcon4},
    {author:Reels5, link:"/", name:"Орендуй авто, замовляй таксі -  значно дешевше з підпискою", isEvenNumber:true, icon:AboutIcon5},
    {author:Reels6, link:"/", name:"Знайомся, подорожуй, відпочивай — підписка відкриває доступ до івентів та нових знайомств", isEvenNumber:false, icon:AboutIcon6},
]

export const serviceList3 = [
    {author:Reels7, link:"/", name:"Економія на кожному кілометрі — знижки на АЗС по всій Європі та Україні", isEvenNumber:false, icon:AboutIcon7},
    {author:Reels8, link:"/", name:"Найкращі фотографи — за найнижчою ціною, але тільки для своїх", isEvenNumber:true, icon:AboutIcon8, markedMobile:true},
    {author:Reels9, link:"/", name:"Вигравай айфони, планшети, подорожі та інші цінні призи", isEvenNumber:false, icon:AboutIcon9},
]

export const howitworksList =[
    {
        name:"Sunny-Lu",
        description:"Ви оформляєте підписку по ціні від 199₴ і стаєте одним із 100 000 щасливчиків, які отримають першочерговий доступ до платформи, її можливостей та унікальних переваг",
        avatar:HowItWorks1
    },
    {
        name:"Gracy-Chen",
        description:"Запуск прoекту - початок 2026 року. Кожен учасник  отримає необмежений доступ до всіх послуг, сервісів і пропозицій без обмежень та додаткових витрат до 1 січня 2027",
        avatar:HowItWorks2
    },
    {
        name:"Jean-Charles",
        description:"Усі, хто придбає підписку на ранній доступ, гарантовано стануть учасниками суперрозіграшу цінних призів (iPhones, планшети, телевізори та ін.) від платформи Azamaza!",
        avatar:HowItWorks3
    }
]

export const SubscribeBenefitList =[
    {
        name:"Ранній доступ = ексклюзивні можливості",
        description:"Стаючи учасником на етапі запуску, ти отримуєш доступ до всього: ",
        subDescription:[
            "Персональні знижки",
            "Доступ до закритих пропозицій",
            "VIP-умови"
        ],
        avatar:SubscribeIcon1
    },
    {
        name:"Гарантована участь у суперрозіграші",
        description:"Кожен підписник раннього доступу автоматично бере участь у розіграші цінних і унікальних призів від Azamaza:",
        avatar:SubscribeIcon2,
        subDescription:[
            "Техніка, гаджети",
            "Підписки та подарунки від партнерів",
            "Несподівані бонуси, які приємно здивують"
        ],
    },
    {
        name:"Найнижча ціна — тільки зараз!",
        description:"зараз ти можеш зафіксувати найвигіднішу вартість на старті — без ризиків і переплат",
        avatar:SubscribeIcon3,
        subDescription:[],
    },
    {
        name:"Платформа, що змінює правила гри",
        description:"Azamaza — це не просто маркетплес:",
        avatar:SubscribeIcon4,
        subDescription:[
            "Перевірені продавці та послуги",
            "Знижки, які ти реально відчуєш",
            "Розумна підписка, яка окупається вже з першого замовлення"
        ],
    },
    {
        name:"Підсумок",
        description:"Придбати підписку зараз — означає виграти більше:",
        avatar:SubscribeIcon5,
        subDescription:[
            "Більше вигоди",
            "Більше привілеїв",
            "Більше можливостей стати частиною великого проєкту з самого старт"
        ],
    }
]

export const partnersList =[
    {
        name:"Sunny-Lu",
        description:"В один клік - генеруй та надсилай персональне посилання своїм рідним, друзям та іншим людям.",
        avatar:Partner1
    },
    {
        name:"Gracy-Chen",
        description:"Щойно реферал оплатить підписку ти отримаєш грошову винагороду на свій рахунок",
        avatar:Partner2
    }
]

export const purchagesList = [
    {author:Purchages1, link:"/", name:"Усе, що ти шукав! Знижки до 70% на будь-який товар на нашому маркетплейсі", isEvenNumber:false, icon:AboutIcon1},
    {author:Purchages2, link:"/", name:"Найкращі готелі  — за спеціальною ціною тільки для підписників", isEvenNumber:true, icon:AboutIcon2},
    {author:Purchages3, link:"/", name:"Вечеря в ресторані зі знижкою до 50% з нашим сервісом", isEvenNumber:false, icon:AboutIcon3},
    {author:Purchages4, link:"/", name:"Тисячі екскурсій за спеціальними цінами для підписників платформи", isEvenNumber:false, icon:AboutIcon4},
    {author:Purchages5, link:"/", name:"Орендуй авто, замовляй таксі -  значно дешевше з підпискою", isEvenNumber:true, icon:AboutIcon5},
    {author:Purchages6, link:"/", name:"Знайомся, подорожуй, відпочивай — підписка відкриває доступ до івентів та нових знайомств", isEvenNumber:false, icon:AboutIcon6},
    {author:Purchages7, link:"/", name:"Орендуй авто, замовляй таксі -  значно дешевше з підпискою", isEvenNumber:true, icon:AboutIcon5},
    {author:Purchages8, link:"/", name:"Знайомся, подорожуй, відпочивай — підписка відкриває доступ до івентів та нових знайомств", isEvenNumber:false, icon:AboutIcon6},
]



export const priceList =[
    {
        name:"Індивідуальні заняття",
        describing:["✅ англійська (А1-В2)", " ✅ французька (А1-В1)"],
        price:"400 грн/год"
    },
    {
        name:"Парні заняття",
        describing:["✅ англійська (А1-В2)", " ✅ французька (А1-В1)"],
        price:"250 грн/год 300 грн/год"
    },
    {
        name:"Групові заняття",
        describing:["✅ англійська (А1/A2/В1)"],
        price:"200 грн/год",
        astrix:"*",
        details:"час узгоджується"
    }
]