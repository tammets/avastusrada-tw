/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: 'rgb(0, 170, 161)', // Custom color for buttons
          'primary-hover': 'rgb(0, 150, 143)', // Darker shade for hover
        }
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

