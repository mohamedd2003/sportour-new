/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f5',
          100: '#f0ede8',
          200: '#e1dbd1',
          300: '#cfc4b5',
          400: '#b8a896',
          500: '#9e8e78',
          600: '#8a7a6a',
          700: '#726459',
          800: '#5e534b',
          900: '#4d443e',
        },
        secondary: {
          50: '#f0f4f4',
          100: '#dae6e6',
          200: '#b8d0d0',
          300: '#8fb5b5',
          400: '#6a9999',
          500: '#456161',
          600: '#3d5555',
          700: '#334747',
          800: '#2a3a3a',
          900: '#233030',
        },
        accent: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f7f7f7',
          400: '#f3f3f3',
          500: '#ffffff',
          600: '#e6e6e6',
          700: '#bfbfbf',
          800: '#999999',
          900: '#7d7d7d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9e8e78 0%, #456161 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #456161 0%, #9e8e78 100%)',
        'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f8f7f5 100%)',
      }
    },
  },
  plugins: [],
}