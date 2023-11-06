import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        saira: ["var(--font-saira)"],
        nunito: ["var(--font-nunito)"],
      },
      keyframes: {
        scroll_mouse: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(15px)" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blink: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        scroll_mouse: "scroll_mouse 1s infinite",
        fadeInUp: "fadeInUp 0.6s ease-in both",
        blink: "blink 1s infinite",
        fadeIn: "fadeIn 0.2s ease-in both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
