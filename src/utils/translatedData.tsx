import { TFunction } from 'i18next';
import Benefit1 from "../../public/static/clock-fill.svg"
import Benefit2 from "../../public/static/briefcase-fill.svg"
import Benefit3 from "../../public/static/award-fill.svg"

import Reels1 from "../../public/static/Image.png"
import Reels2 from "../../public/static/Image-2.png"
import Reels3 from "../../public/static/Image-3.png"
import Reels4 from "../../public/static/Image-4.png"
import Reels5 from "../../public/static/Image-5.png"
import Reels6 from "../../public/static/Image-6.png"
import Reels7 from "../../public/static/Image-7.png"
import Reels8 from "../../public/static/Image-8.png"
import Reels9 from "../../public/static/Image-9.png"

import HowItWorks1 from '../../public/static/Card-1 1.png';
import HowItWorks2 from '../../public/static/Card-1 2.png';
import HowItWorks3 from '../../public/static/Card-1 3.png';

import SubscribeIcon1 from "../../public/static/clock-history.svg"
import SubscribeIcon2 from "../../public/static/gift.svg"
import SubscribeIcon3 from "../../public/static/rocket-takeoff.svg"
import SubscribeIcon4 from "../../public/static/fire.svg"
import SubscribeIcon5 from "../../public/static/briefcase.svg"

import Partner1 from "../../public/static/icon-park-solid_copy-link.svg"
import Partner2 from "../../public/static/game-icons_two-coins.svg"

import FlameIcon from "../../public/static/fire-blue.svg"
import PackageIcon from "../../public/static/db.svg"
import EnvilopeIcon from "../../public/static/envelope.svg"
import GlobeIcon from "../../public/static/globe.svg"
import HeadSetIcon from "../../public/static/headset.svg"
import LaptopIcon from "../../public/static/laptop.svg"
import GemIcon from "../../public/static/gem.svg"
import CommentIcon from "../../public/static/chat-text.svg"

// Benefits list
export const getBenefitList = (t: TFunction) => [
  {
    image: Benefit1,
    position: t('benefits.benefit1'),
  },
  {
    image: Benefit2,
    position: t('benefits.benefit2'),
  },
  {
    image: Benefit3,
    position: t('benefits.benefit3'),
  },
];

// Service lists
export const getServiceList1 = (t: TFunction) => [
  { title: t('services.service1'), author:Reels1 },
  { title: t('services.service2'), author:Reels2 },
  { title: t('services.service3'), author:Reels3},
];

export const getServiceList2 = (t: TFunction) => [
  { title: t('services.service4'), author:Reels4},
  { title: t('services.service5'), author:Reels5},
  { title: t('services.service6'), author:Reels6},
];

export const getServiceList3 = (t: TFunction) => [
  { title: t('services.service7'), author:Reels7},
  { title: t('services.service8'), author:Reels8},
  { title: t('services.service9'), author:Reels9},
];

// How it works list
export const getHowItWorksList = (t: TFunction) => [
  { 
    title: '1', 
    description: t('howItWorks.step1'),
    avatar: HowItWorks1,
    isEvenNumber: false
  },
  { 
    title: '2', 
    description: t('howItWorks.step2'),
    avatar: HowItWorks2,
    isEvenNumber: true
  },
  { 
    title: '3', 
    description: t('howItWorks.step3'),
    avatar: HowItWorks3,
    isEvenNumber: false
  },
];

// Subscription benefits list
export const getSubscribeBenefitList = (t: TFunction) => [
  {
    avatar:SubscribeIcon1,
    title: t('subscriptionBenefits.benefit1Title'),
    description: t('subscriptionBenefits.benefit1Description'),
    items: [
      t('subscriptionBenefits.benefit1Item1'),
      t('subscriptionBenefits.benefit1Item2'),
      t('subscriptionBenefits.benefit1Item3'),
    ],
  },
  {
    avatar:SubscribeIcon2,
    title: t('subscriptionBenefits.benefit2Title'),
    description: t('subscriptionBenefits.benefit2Description'),
    items: [
      t('subscriptionBenefits.benefit2Item1'),
      t('subscriptionBenefits.benefit2Item2'),
      t('subscriptionBenefits.benefit2Item3'),
    ],
  },
  {
    avatar:SubscribeIcon3,
    title: t('subscriptionBenefits.benefit3Title'),
    description: t('subscriptionBenefits.benefit3Description'),
    items: [],
  },
  {
    avatar:SubscribeIcon4,
    title: t('subscriptionBenefits.benefit4Title'),
    description: t('subscriptionBenefits.benefit4Description'),
    items: [
      t('subscriptionBenefits.benefit4Item1'),
      t('subscriptionBenefits.benefit4Item2'),
      t('subscriptionBenefits.benefit4Item3'),
    ],
  },
  {
    avatar:SubscribeIcon5,
    title: t('subscriptionBenefits.benefit5Title'),
    description: t('subscriptionBenefits.benefit5Description'),
    items: [
      t('subscriptionBenefits.benefit5Item1'),
      t('subscriptionBenefits.benefit5Item2'),
      t('subscriptionBenefits.benefit5Item3'),
    ],
  },
];

// Partners list
export const getPartnersList = (t: TFunction) => [
  { description: t('partnersData.partner1'), icon:Partner1},
  { description: t('partnersData.partner2'), icon:Partner2 },
];

// Subscription plans list
export const getSubscriptionPlans = (t: TFunction) => [
  {
    tier: "lite" as const,
    title: "Azamaza",
    subtitle: t('pricePage.priceAfterLaunch'),
    price: t('pricePage.lite.price'),
    currency: t('pricePage.lite.currency'),
    originalPrice: t('pricePage.lite.originalPrice'),
    description: t('pricePage.lite.description'),
    buttonText: t('pricePage.lite.button'),
    features: [
      {
        icon: FlameIcon,
        text: t('pricePage.lite.feature1')
      },
      {
        icon: PackageIcon,
        text: t('pricePage.lite.feature2')
      },
      {
        icon: EnvilopeIcon,
        text: t('pricePage.lite.feature3')
      },
      {
        icon: GlobeIcon,
        text: t('pricePage.lite.feature4')
      }
    ],
    accentColor: "#155DFC",
    bgColor: "bg-white"
  },
  {
    tier: "pro" as const,
    title: "Azamaza",
    subtitle: t('pricePage.priceAfterLaunch'),
    price: t('pricePage.pro.price'),
    currency: t('pricePage.pro.currency'),
    originalPrice: t('pricePage.pro.originalPrice'),
    description: t('pricePage.pro.description'),
    buttonText: t('pricePage.pro.button'),
    features: [
      {
        icon: FlameIcon,
        text: t('pricePage.pro.feature1')
      },
      {
        icon: PackageIcon,
        text: t('pricePage.pro.feature2')
      },
      {
        icon: HeadSetIcon,
        text: t('pricePage.pro.feature3')
      },
      {
        icon: LaptopIcon,
        text: t('pricePage.pro.feature4')
      }
    ],
    accentColor: "#8B5CF6",
    bgColor: "bg-white"
  },
  {
    tier: "elite" as const,
    title: "Azamaza",
    subtitle: t('pricePage.priceAfterLaunch'),
    price: t('pricePage.elite.price'),
    currency: t('pricePage.elite.currency'),
    originalPrice: t('pricePage.elite.originalPrice'),
    description: t('pricePage.elite.description'),
    buttonText: t('pricePage.elite.button'),
    features: [
      {
        icon: PackageIcon,
        text: t('pricePage.elite.feature1')
      },
      {
        icon: GemIcon,
        text: t('pricePage.elite.feature2')
      },
      {
        icon: CommentIcon,
        text: t('pricePage.elite.feature3')
      }
    ],
    accentColor: "#EC4899",
    bgColor: "bg-white"
  }
];
