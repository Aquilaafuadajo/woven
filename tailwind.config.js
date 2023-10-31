/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,jsx,tsx,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#E4F7F5',
          200: '#4BDECA',
          400: '#188475',
          500: '#0D4840',
          600: '#0B3C35'
        },
        red: {
          50: '#F9EBED',
          100: 'FFE5E9',
          300: '#C94A5A',
          400: '#A63241',
          700: '#79242F'
        },
        orange: {
          400: '#EB8B1E'
        },
        black: {
          50: '#F9FAFB',
          300: '#A4A6A8',
          400: '#848688',
          500: '#646668',
          600: '#4E4E4E',
          700: '#4F4F4F',
          800: '#343434',
          900: '#000000'
        },
        gray: {
          100: '#EEF0F1',
          200: '#E4E6E8',
          300: '#F4F6F8'
        }
      }
    }
  },
  plugins: []
}
