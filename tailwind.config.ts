import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mint: {
          primary: "#2af471",
          secondary: "#1db452",
          accent: "#72f891",
          neutral: "#373737",
          "base-100": "#080808",
          "base-content": "#e0e0e0",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
export default config;
