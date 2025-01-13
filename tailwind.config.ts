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
        circleShadow:
          "0px 10px 10px 0px #0000000A, 0px 20px 25px -5px #0000001A",
        authCardShadow:
          "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
        verifyMShadow:
          "0px 2.8px 5.6px -2.8px #0000000D, 0px 5.6px 8.4px -1.4px #0000001A, 0px -2.8px 5.6px 0px #0000001A inset",
        subCardShadow: "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
        sidebarLinkShadow:
          "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
        subIconShadow:
          "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A, 0px -2px 4px 0px #0000001A inset",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};
export default config;
