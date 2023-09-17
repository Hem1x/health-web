/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        formShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.17)',
      },
    },
  },
  plugins: [],
};
