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
        "secondary-color": "#CF9784",
        "hovered-color": "#D19C88",
        "footer-bg": "#F6F6F8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        primary: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lemon: ["var(--font-lemon)"],
      },
    },
  },
  plugins: [],
};
export default config;
