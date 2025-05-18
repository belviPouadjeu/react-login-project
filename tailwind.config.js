/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['Afacad', 'sans-serif'],
      
      },
      colors: {
        customRed: '#ac1e23',
        btnColor: "#0172F4",
        bgInput: "#F7FAFC",
        bgAvatar: "#e79f13",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
