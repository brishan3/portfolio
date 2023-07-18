/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'background': 'bg-color, background, background-color'
      },
      colors: ({colors}) => ({
        salmon: '#dd876c',
        white: '#ecf0f3'
      }),
      fontSize: { // by default, all the below sizes exactly match the Tailwind defaults -- we just include this here to make it easy to change the default sizes/line-heights should you want to
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.15rem', { lineHeight: '1.75rem' }],
        xl: ['1.3rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.6rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.45rem' }],
        '5xl': ['2.75rem', { lineHeight: '3rem' }],
        '6xl': ['3.75rem', { lineHeight: '3.65rem' }],
        '7xl': ['4.5rem', { lineHeight: '4.25rem' }],
        '8xl': ['6rem', { lineHeight: '5.5rem' }],
        '9xl': ['8rem', { lineHeight: '6.5rem' }],
      },
      screens: { // we add 'xs' and 'xmd' in with the default Tailwind breakpoints (order matters which is why 'xmd' is placed where it is)
        'xs': '475px',
        'sm': defaultTheme.screens.sm,
        'md': defaultTheme.screens.md,
        'xmd': '912px',
        'lg': defaultTheme.screens.lg,
        'xl': defaultTheme.screens.xl,
        'xls': '1320px',
        '2xl': defaultTheme.screens['2xl'],
      },
      fontFamily: {
        sans: ['Gilroy', 'Open sans', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
