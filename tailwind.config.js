/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          50: '#eef2f7',
          100: '#d5dde8',
          200: '#a8b9cf',
          300: '#7a94b6',
          400: '#4d6f9d',
          500: '#2a4a73',
          600: '#1a3554',
          700: '#102540',
          800: '#0A192F',
          900: '#06101f',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#D4B876',
          dark: '#927238',
          50: '#faf6ee',
          100: '#f3e9d3',
        },
        ivory: '#FAF9F6',
        slateink: '#1A2A3A',
        warmgray: '#F8F9FA',
      },
      fontFamily: {
        // Persian UI/body face, then a Persian-safe fallback stack.
        sans: ['Vazirmatn', 'Tahoma', 'system-ui', 'sans-serif'],
        // Persian display face for headlines (falls back to Vazirmatn if a glyph
        // such as a Persian digit is missing).
        serif: ['"Markazi Text"', 'Vazirmatn', 'Georgia', 'serif'],
      },
      fontSize: {
        // Persian script needs more leading than Latin, never negative tracking
        // (letter-spacing visually breaks the joined letters of the script).
        'hero': ['clamp(2rem, 4.6vw, 4rem)', { lineHeight: '1.35', letterSpacing: '0' }],
        'section': ['clamp(1.6rem, 3.2vw, 2.6rem)', { lineHeight: '1.45', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
