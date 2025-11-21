import { TFunction } from 'i18next';
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

import HowItWorks1 from '../../public/Card-1 1.png';
import HowItWorks2 from '../../public/Card-1 2.png';
import HowItWorks3 from '../../public/Card-1 3.png';

import SubscribeIcon1 from "../../public/clock-history.svg"
import SubscribeIcon2 from "../../public/gift.svg"
import SubscribeIcon3 from "../../public/rocket-takeoff.svg"
import SubscribeIcon4 from "../../public/fire.svg"
import SubscribeIcon5 from "../../public/briefcase.svg"

import Partner1 from "../../public/icon-park-solid_copy-link.svg"
import Partner2 from "../../public/game-icons_two-coins.svg"

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
