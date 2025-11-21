import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      "aboutSection":"auto 111%"
    },
    fontFamily: {
      onset:[
        '"Onest", sans-serif',
      ],
      manrope:[
        '"Manrope", sans-serif'
      ]
    },
    letterSpacing: {
      navigateLink: '1px',
      tight: '2px',
     
    },
    backgroundPosition: {
      bottom:"0% -82px"
    },
    screens: {
      sm: '320px',
      //=> @media (min-width: 360px) { ... }
      lightPhoneSize:"361px",
      mediumPhoneSize:"374px",
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '820px',
      // => @media (min-width: 820px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      white:"#fff",
      transparent:"transparent",
      error:"#FF8B16",

      secondaryTextColor:"#364153",
      mainOrange:"#eda551",
      overlay:"#e3e3e3",
      darkOrange:"#F2B46C",
      darkOrangeMoble:"#F7C285",

      mainColor:"#155DFC",
      primaryShadow:"rgba(252, 21, 93, 0.3)",
      secondaryColor:"#FFDF20",
      secondaryButton:"rgba(255, 184, 106, 0.3)",
      backgroundCard:"rgba(3, 202, 252, 0.55)",
      borderCard:"rgba(3, 202, 252, 0.1)",
      countdownBg:"#2B7FFF",
      formFieldColor:"#BEDBFF",
      formTextColor:"#6A7282",
      formBorderColor:"#888A90",
      footer:"#1447E6",
      // price
      cardBadgePro:"#7F22FE",
      cardBadgeElite:"#E60076",
      cardPrice:"#FB2C36"

    },
    backgroundImage: {

      primaryButton:"linear-gradient(180deg, rgba(179, 159, 3, 0.99) 0%, #D23108 110.81%)", 
      testBtns:"linear-gradient(95.06deg, #12A5C8 1.83%, #0D5BB5 44.61%, #2B7FFF 76.02%, #0078A4 98.28%);",
      cardsBtns:"linear-gradient(93.28deg, #1CB9DE 0.28%, #316199 100%)",
      secondaryBtns:"linear-gradient(95.06deg, #15D0FC 1.83%, #51A2FF 44.61%, #2B7FFF 76.02%, #0078A4 98.28%)",
      thirdBtns:"linear-gradient(180deg, #04986C 0%, #08D296 110.81%)",
      countdownGradient:"linear-gradient(180deg, #FFDF20 0%, rgba(255, 223, 32, 0) 100%)"
      // topicsList:"linear-gradient(-180deg, rgba(44, 7, 58, 33) 0%, rgba(75, 210, 253, 35) 75%, rgba(67, 61, 193, 64) 69%, rgba(44, 7, 58, 33) 100%)"
  
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.74rem',
      },
      height: {
        '2screens': '200vh',
      },
      blur: {
        xs: '2px',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 5s ease-in-out infinite',
      },
    }
    
  },
  plugins: [
    require('tailwind-hamburgers')
  ],
}
export default config
