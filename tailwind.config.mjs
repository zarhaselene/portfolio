/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "25%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "50%": {
            transform: "scale3d(0.85, 1.15, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
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
          primary: "#ffffff", // Main brand color (for buttons, links, highlights)
          secondary: "#efa5b8", // Secondary brand color (used for accents)

          "base-100": "#ffffff", // Background color
          "base-200": "#d2d2d2", // Slightly darker background (for sections or containers)
          "base-300": "#b3b3b3", // Even darker background (for elements like cards)
          "base-content": "#121212", // Default text color
        },
        dark: {
          primary: "#121212", // Main brand color (for buttons, links, highlights)
          secondary: "#efa5b8", // Secondary brand color (used for accents)

          "base-100": "#121212", // Background color
          "base-200": "#1e1e1e", // Slightly darker background (for sections or containers)
          "base-300": "#2d2d2d", // Even darker background (for elements like cards)
          "base-content": "#ffffff", // Default text color
        },
      },
    ],
  },
};
