import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ed',
          100: '#c0f0d1',
          200: '#99e7b5',
          300: '#73de99',
          400: '#4dd57d',
          500: '#00B341',
          600: '#00a03a',
          700: '#008d33',
          800: '#007a2c',
          900: '#006725',
        },
      },
    },
  },
  plugins: [],
}
export default config
