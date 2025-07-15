import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navsari': {
          50: '#fef7ee',
          100: '#fdecd6',
          200: '#fad5ad',
          300: '#f7b878',
          400: '#f39441',
          500: '#f0761b',
          600: '#e15d11',
          700: '#ba4710',
          800: '#943914',
          900: '#783013',
          950: '#411508',
        },
        'heritage': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        }
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'gujarati': ['Noto Sans Gujarati', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navsari-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"heritage\" patternUnits=\"userSpaceOnUse\" width=\"20\" height=\"20\"><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"%23f39441\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23heritage)\"/></svg>')"
      }
    },
  },
  plugins: [],
}
export default config 