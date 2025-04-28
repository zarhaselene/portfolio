/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-bebas-neue)", "sans-serif"],
        main: ["var(--font-poppins), sans-serif;"],
      },
      boxShadow: {
        custom: "1px 2px 5px rgb(18,18,18), 0 0 0 1px rgb(53,53,53)",
      },
      screens: {
        xs: "300px",
        sm: "480px",
        md: "740px",
        lg: "1024px",
        xl: "1420px",
        xxl: "1800px",
        xxxl: "2200px",
      },
      keyframes: {
        moveAndFade: {
          "0%": { transform: "translateY(-35px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-10px)", opacity: "0" },
        },

        jelloHorizontal: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "25%": { transform: "scale3d(1.15, 0.85, 1)" },
          "50%": { transform: "scale3d(0.85, 1.15, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        moveAndFade: "moveAndFade 1.5s ease-in-out infinite 0.3s",
        jello: "jelloHorizontal 0.9s both",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#2d2d2d",
          secondary: "#efa5b8",
          "base-100": "#121212",
          "base-200": "#efa5b8",
          "base-300": "#2d2d2d",
          "base-content": "#eee",
        },

        green: {
          primary: "#DCD7C9",
          secondary: "#8C6249",
          "base-100": "#2C3930",
          "base-200": "#604936",
          "base-300": "#3F4F44",
          "base-content": "#DCD7C9",
        },
      },
    ],
  },
};
