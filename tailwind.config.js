/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alice: ['Alice', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'green-dark': '#10332d',
        'green-light': '#29534e',
        'yellow-cream': '#ede6cc',
      },
    },
  },
  plugins: [],
};
