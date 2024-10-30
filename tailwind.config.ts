import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        "primary": {
          "0": "#fee2e2",
          "1": "#fecaca",
          "2": "#fca5a5",
          "3": "#f87171",
          "4": "#ef4444",
          "5": "#dc2626",
          "6": "#b91c1c",
          "7": "#991b1b",
          "8": "#7f1d1d",
          "9": "#450a0a",
        },
        "secondary": {
          "0": "#fafafa",
          "1": "#f4f4f5",
          "2": "#e4e4e7",
          "3": "#d4d4d8",
          "4": "#a1a1aa",
          "5": "#71717a",
          "6": "#52525b",
          "7": "#3f3f46",
          "8": "#27272a",
          "9": "#18181b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
