import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        paper: "#ffffff",
        mist: "#f3f3f1",
        graphite: "#5c5c57",
      },
    },
  },
  plugins: [],
};

export default config;
