/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0C0C0C',
        steel: {
          900: '#1A1A1D',
          800: '#2C2C30',
        },
        'line-gray': '#2F2F2F',
        whitesoft: '#F5F5F7',
        white: '#FFFFFF',
        'brand-orange': '#FF7B00',
        gray500: '#B9BCC0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
