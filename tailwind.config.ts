import type { Config } from "tailwindcss"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b2f",
        surface: "#141420",
        textPrimary: "#FFFFFF",
        textSecondary:"#b9b9c6",
        accent:{
          green:"#b6ff2e",
          red:"#ff2e2e",
          yellow:"#F4F93b",
        },
      },
      fontFamily:{
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}satisfies Config