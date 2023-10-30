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
      },
      animation: {
        scroll_mouse: "scroll_mouse 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
