/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster Two"', 'sans-serif']
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  variants: {
    outline: ['responsive', 'focus'],
    ringColor: ['responsive', 'focus'],
    extend: {
      // opacity: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('autoprefixer')
  ]
}
