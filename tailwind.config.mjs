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
      boxShadow: {
        custom: "1px 2px 5px rgb(18,18,18), 0 0 0 1px rgb(53,53,53)", // Custom shadow
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
          primary: "#eee", // A nice blue that works well for interactive elements
          secondary: "#efa5b8", // A complementary pink that pairs well with the blue

          "base-100": "#ffffff", // Keep white as main background
          "base-200": "#f3f4f6", // Subtle light gray for sections
          "base-300": "#e5e7eb", // Slightly darker gray for cards
          "base-content": "#1f2937", // Dark gray for text that meets accessibility standards
        },
        dark: {
          primary: "#121212", // Main brand color (for buttons, links, highlights)
          secondary: "#efa5b8", // Secondary brand color (used for accents)

          "base-100": "#121212", // Background color
          "base-200": "#1e1e1e", // Slightly darker background (for sections or containers)
          "base-300": "#2d2d2d", // Even darker background (for elements like cards)
          "base-content": "#eee", // Default text color
        },
      },
    ],
  },
};
