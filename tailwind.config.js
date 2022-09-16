/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      orange: '0px 20px 20px -15px rgba(245,56,56,0.81)',
      gray: '0px 20px 20px -15px #222121cf',
      'orange-md': '0px 20px 40px -15px rgba(245,56,56,0.81) ',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stone: colors.stone,
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.pink,
      orange: colors.orange,
      rose: colors.rose,
      primary: colors.rose,
      secondary: colors.green,
    },
    transitionProperty: {
      width: 'width',
      opacity: 'opacity',
      position: 'top',
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
};
