/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-dotted-background'), require('daisyui')],
  mode: 'jit',
  // daisyui: {
  //   themes: [
  //     {
  //       dark: {
  //         ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
  //         primary: '#26bf3d',
  //         'primary-focus': 'mediumblue',
  //       },
  //     },
  //   ],
  // },
}
