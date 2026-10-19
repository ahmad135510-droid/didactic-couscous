/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      colors: {
        mosque: {
          dark: '#0d3b2e',
          primary: '#1a6b4f',
          light: '#2d8f6f',
          accent: '#c9a84c',
          cream: '#f5f0e8',
        },
      },
    },
  },
  plugins: [],
}
