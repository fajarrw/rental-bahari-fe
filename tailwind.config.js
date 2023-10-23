/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'admin-login': 'url(/assets/admin-login-bg-image.png)'
      },
      colors: {
        'dark-green-1': '#045757',
        'dark-green-2': '#044343',
        'main-white': '#E4E4E4',
        'main-black': '#222222'
      }
    },
  },
  plugins: [],
}
