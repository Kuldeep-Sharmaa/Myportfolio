/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#fcfcfc", // not pure white
          surface: "#f5f5f5", // softer than before
          border: "#e2e2e2", // lighter border
          text: {
            primary: "#111111", // softer black
            secondary: "#555555",
            tertiary: "#777777",
          },
        },
        dark: {
          bg: "#0f0f10", // near-black, not gray
          surface: "#1a1a1b",
          border: "#2a2a2a", // subtle, not loud
          text: {
            primary: "#f5f5f5",
            secondary: "#b0b0b0",
            tertiary: "#8a8a8a",
          },
        },
        accent: {
          subtle: "#3b82f6", // muted blue (used VERY sparingly)
        },
      },
    },
  },
  plugins: [],
};
