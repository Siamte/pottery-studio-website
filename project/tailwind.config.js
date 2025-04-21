/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'clay-primary': {
          50: '#FCF8F5',
          100: '#F5EBE0',
          200: '#EBD6C0',
          300: '#E0C2A0',
          400: '#D4A373',
          500: '#C89364',
          600: '#B67D4A',
          700: '#9A6639',
          800: '#7D522E',
          900: '#5F3F23',
        },
        'terracotta': {
          50: '#FAEEEF',
          100: '#F6DCDE',
          200: '#EBBABF',
          300: '#DF989F',
          400: '#D3767F',
          500: '#C16E70',
          600: '#A85F61',
          700: '#8F5152',
          800: '#764243',
          900: '#5C3334',
        },
        'studio-blue': {
          50: '#EFF1F3',
          100: '#DEE3E7',
          200: '#BDC7CF',
          300: '#9CAAB7',
          400: '#7B8E9F',
          500: '#617181',
          600: '#495867',
          700: '#3A4652',
          800: '#2B343E',
          900: '#1C222A',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};