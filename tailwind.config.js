/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily:{
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      screens:{
        "1000px":"1050px",
        "1100px":"1100px",
        "800px":"800px",
        "1300px":"1300px",
        "400px":"400px",
      },
      boxShadow: {
        '3xl': '0 0 27px -10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

