import type { Config } from 'tailwindcss'
import { SCREENS } from "./lib/screens";
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        firaSans: ['var(--font-firaSans)'],

        // oswald: ['Oswald , sans-serif'],
        // firaSans: ['"Fira Sans", sans-serif', ],

      },
      colors: {
        overlay: "#173D3340",
        primaryBg: "#F3F5FA",
        secondaryBg: "#EAEDF1",
        primary: "#173D33",
        some: "#DCEFD8",
        accent: "#97D28B",
        secondary: "#292D32",
        error: "#D28B8B",
        white: {
          '25': "#FFFFFF40",
          '100':"#FFFFFF"
        }
      },
fontSize: {
      '12xl': ['12px', {
        lineHeight: '14px',
        letterSpacing: '-0.48px',
        fontWeight: '400',
      }], 
      '14xl': ['14px', {
        lineHeight: '17px',
        letterSpacing: '-0.56px',
        fontWeight: '400',
      }],
      '16xl': ['16px', {
        lineHeight: '19px',
        letterSpacing: '-0.64px',
        fontWeight: '400',
        }],
      '18xl': ['18px', {
        lineHeight: '22px',
        letterSpacing: '-0.72px',
        fontWeight: '400',
  }],
           '016xl': ['16px', {
        lineHeight: '24px',
        fontWeight: '400',
        }],
      '018xl': ['18px', {
        lineHeight: '24px',
        fontWeight: '400',
        }],
      '20xl': ['20px', {
        lineHeight: '24px',
        letterSpacing: '-0.8px',
        fontWeight: '400',
      }],
      '24xl': ['24px', {
        lineHeight: '27px',
        letterSpacing: '-0.96px',
        fontWeight: '400',
      }],
      '024xl': ['24px', {
        lineHeight: '24px',
        fontWeight: '400',
        }],
      
        '28xl': ['28px', {
        lineHeight: '34px',
        letterSpacing: '-1.12px',
        fontWeight: '300',
        }],
        '028xl': ['28px', {
        lineHeight: '28px',
        fontWeight: '400',
        }],
        '032xl': ['32px', {
        lineHeight: '48px',
        fontWeight: '400',
        }],
        '036xl': ['36px', {
        lineHeight: '36px',
        fontWeight: '400',
        }],
        '048xl': ['48px', {
        lineHeight: '48px',
        fontWeight: '400',
        }],
        '064xl': ['64px', {
        lineHeight: '64px',
        fontWeight: '400',
        }],
        '0100xl': ['100px', {
        lineHeight: '100px',
        fontWeight: '700',
        }],
        '0164xl': ['164px', {
        lineHeight: '164px',
        fontWeight: '700',
        }],
            
    },
    },
    content: {
        'check': 'url("/assets/icons/check.svg")',
        'star': 'url("/assets/icons/star.svg")',
        'arrow': 'url("/assets/icons/arrow-right.svg")',
      },
    
        screens: {
      d: `${SCREENS.d}px`,
      t: `${SCREENS.t}px`,
      m:`${SCREENS.m}px`,
    },
  },
  plugins: [],
}
export default config
