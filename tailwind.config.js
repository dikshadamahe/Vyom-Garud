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
        'brand-orange': '#FF7B00',
        gray500: '#B9BCC0',
        success: '#6BAF77',
        warning: '#D9A441',
        error: '#C75454',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        96: '96px',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 123, 0, 0.15)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
