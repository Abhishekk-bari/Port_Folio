/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          '0%': {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          '100%': {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
