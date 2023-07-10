/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#9ca2f4',
          100: '#8c94f3',
          200: '#7d86f1',
          300: '#6e78ef',
          400: '#5e69ee',
          500: '#4f5bec',
          600: '#404dea',
          700: '#303ee9',
          800: '#2130e7',
          900: '#1827df',
        },
        blue: {
          50: '#9ca2f4',
          100: '#8c94f3',
          200: '#7d86f1',
          300: '#6e78ef',
          400: '#5e69ee',
          500: '#4f5bec',
          600: '#404dea',
          700: '#303ee9',
          800: '#2130e7',
          900: '#1827df',
        },
      },
    },
  },
  plugins: [],
});
