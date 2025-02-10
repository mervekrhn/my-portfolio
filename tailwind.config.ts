import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tüm src dosyalarını tarar
  ],
  theme: {
    extend: {
      colors: {
        background: "#e0f7fa", // Krem tonunda açık renk
        primary: "#00a86b", // Soft yeşil
        secondary: "#0077b6", // Soft mavi
        accent: "#ffca3a", // Sarı tonları (vurgu)
        text: "#2d2d2d", // Koyu gri (yazı için)
        buttonHover: "#32cd9a", // Daha parlak yeşil hover
      },
    },
  },
  plugins: [],
};
