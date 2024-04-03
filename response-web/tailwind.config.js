/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true || '#app',
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'blue': {
        light: '',
        default: '',
        dark: ''
      }
    },
    fontFamily:{},
    extend: {
      space:{},
      borderRadius:{}
    },
  },
  plugins: [],
  // corePlugins: {
  //   'float': false
  // }
  corePlugins: ['float']
}






