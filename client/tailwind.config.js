/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ali: '#00BFFF',
        primary: {
          DEFAULT: '#00BFFF',
          foreground: '#FFFFFF',
        },
        blue: {
          DEFAULT: '#00BFFF',
          hover: '#0099CC',
          glow: 'rgba(0,191,255,0.15)',
        },
        surface: '#0A0A0F',
      },
      fontFamily: {
        display: ['Anta', 'sans-serif'],
        logo: ['"Krona One"', 'sans-serif'],
        baumans: ['Baumans', 'cursive'],
        mozilla: ['"Mozilla Text"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
