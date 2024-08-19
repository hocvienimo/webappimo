import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-mulish)",
      secondary: "var(--font-playfairDisplay)",
    },
    extend: {
      colors: {
        primary: "#0C4476",
        secondary: "#3D91A0",
        thirdary: "#E56427",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config