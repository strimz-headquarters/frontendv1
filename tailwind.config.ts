import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strimzBrandAccent: "#02C76A",
        strimzPrimary: "#050020",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sora: ["Sora", "serif"],
        poppins: ["Poppins", "serif"],
      },
      boxShadow: {
        navbarShadow:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
        joinWaitlistBtnShadow:
          "0px -4px 4px 0px rgba(0, 0, 0, 0.2) inset, 0px 4px 4px 0px rgba(225, 225, 225, 0.25) inset, 0px 0px 0px 1px rgba(2, 199, 106, 0.25)",
        strimzLogoShadow:
          "0px 25px 40px 0px #02C76A99, 0px -9px 15px 0px #00000033 inset",
        circleShadow: "0px 10px 10px 0px #0000000A, 0px 20px 25px -5px #0000001A",
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
