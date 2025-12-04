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
          50: '#f4fce8',
          100: '#e6f8c5',
          200: '#d1f28e',
          300: '#b8e84d',
          400: '#9cd91a',
          500: '#5DBC00',
          600: '#4fa000',
          700: '#3d7d00',
          800: '#336200',
          900: '#2b5200',
        },
      },
    },
  },
  plugins: [],
}
export default config
