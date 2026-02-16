/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heroFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": {
            transform: "translateY(-10px) translateX(2px) rotate(-1deg)",
          },
        },
      },
      animation: {
        "hero-float": "heroFloat 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
