import { subtle } from 'crypto';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff9ea",
        emerald: "#0E4037",
        EPGreen: "#616F64",
        DarUkrainianRed: "#910112",
      },
      fontFamily: {
        main: [ "Steravina", "Luminari", "Times New Roman", "serif"],
        hero: ["RussianLand", "Luminari", "Times New Roman", "serif"],
        hero2: ["Bazilikin", "Luminari", "Times New Roman", "serif"],
        fancy: ["Luminari", "Times New Roman", "serif"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Example shadow
        strong: "4px 4px 8px rgba(0, 0, 0, 0.75)", // Stronger shadow
        weak: "1px 1px 2px rgba(0, 0, 0, 0.25)", // Subtle shadow
      },
    },
  },

  plugins: [require("tailwindcss-textshadow")],
};

