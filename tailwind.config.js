/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins','sans-serif'],
        'oswald': ['Oswald',],
      },
      backgroundImage:{
        'texture':"linear-gradient(180deg, rgba(45, 43, 43, 0.95) 50%, rgba(16, 16, 16, 0.90) 100%), url('../assets/teste.jpg')",
      }
    },
  },
  plugins: [],
}

