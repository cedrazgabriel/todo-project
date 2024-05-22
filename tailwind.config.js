/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'purple-dark': '#5E60CE',
        'gray-700': '#0D0D0D',
        'gray-600': '#1A1A1A',
        'gray-500': '#262626',
        'gray-300': '#808080',
        'gray-100': '#F2F2F2',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

