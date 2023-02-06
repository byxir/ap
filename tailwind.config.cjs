/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xls: "1420px",
      // => @media (min-width: 1400px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "2xls": "1670px",
      // => @media (min-width: 1660px) { ... }
    },
    extend: {
      borderRadius: {
        "4xl": "30px",
      },
      width: {
        104: "426px",
        34: "133px",
        68: "266px",
      },
      height: {
        "1/12": "1/12",
        34: "133px",
        68: "266px",
        104: "500px",
      },
      colors: {
        bg: "#1F1F1F",
        sidebarBg: "#1A1A1A",
        accentSolid: "#D72034 !important",
        subline: "#3A3A3A",
        subtext: "#989898",
        accentElement: "#262626",
        accentGradient: "#000000",
        accentText: "#FFFFFF",
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        equal: "0px 0px 20px 0px rgba(100, 100, 111, 0.2)",
      },
    },
  },
  plugins: [],
};
