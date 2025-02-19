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
        textScroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        jelloHorizontal: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "25%": { transform: "scale3d(1.15, 0.85, 1)" },
          "50%": { transform: "scale3d(0.85, 1.15, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        moveAndFade: "moveAndFade 1.5s ease-in-out infinite 0.3s",
        textScroll: "textScroll 8s linear infinite",
        jello: "jelloHorizontal 0.9s both",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3D3A4A",
          secondary: "#efa5b8",
          "base-100": "#FFF5E1",
          "base-200": "#FFD9E8",
          "base-300": "#d9cfba",
          "base-content": "#3D3A4A",
        },
        dark: {
          primary: "#2d2d2d",
          secondary: "#efa5b8",
          "base-100": "#121212",
          "base-200": "#1e1e1e",
          "base-300": "#2d2d2d",
          "base-content": "#eee",
        },

        green: {
          primary: "#DCD7C9",
          secondary: "#A27B5C",
          "base-100": "#2C3930",
          "base-200": "#586e5e",
          "base-300": "#3F4F44",
          "base-content": "#DCD7C9",
        },

        yellow: {
          primary: "#FF6347",
          secondary: "#FFD700",
          "base-100": "#FFF5E1",
          "base-200": "#FFD9E8",
          "base-300": "#d9cfba",
          "base-content": "#3D3A4A",
        },
      },
    ],
  },
};
