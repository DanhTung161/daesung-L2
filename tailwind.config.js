/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"'],
      },
      colors: {
        'cl-black': 'var(--cl-black)',
        'cl-red': 'var(--cl-red)',
        'cl-primary-50': 'var(--cl-primary-50)',
        'bkg-subtle': 'var(--bkg-subtle)',

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl:': '6rem',
        },
      },
    },
  },
  plugins: [],
}