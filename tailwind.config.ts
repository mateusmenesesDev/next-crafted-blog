import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      base: "#F5F5F5",
      text: "#1A1A1A",
      accent: "#6941C6",
      secondary: "#667085",
      "base-dark": "#090D1F",
      "secondary-dark": "#C0C5D0",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
