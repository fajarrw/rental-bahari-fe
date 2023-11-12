/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'admin-login': 'url(/assets/admin-login-bg-image.png)',
        'user-login': 'url(/assets/user-login-bg2.png)',
        'reg-bg': 'url(/assets/reg-bg.png)'
      },
      colors: {
        'dark-green-1': '#045757',
        'dark-green-2': '#044343',
        'main-white': '#E4E4E4',
        'main-black': '#222222'
      }
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()]
}
