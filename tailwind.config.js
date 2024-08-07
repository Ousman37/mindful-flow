/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rmono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primaryLight: "#A8DADC",
        primary: "#457B9D",
        primaryDark: "#1D3557",
        accentLight: "#FFE8D6",
        accent: "#FFB4A2",
        accentDark: "#E63946",
        backgroundLight: "#F1FAEE",
        background: "#F8F9FA",
        backgroundDark: "#E5E5E5",
        textPrimary: "#333333",
        textSecondary: "#4F4F4F",
        textLight: "#FFFFFF",
        calmGreen: "#8FCB9B",
        peacefulPurple: "#8E7DBE",
        serenityYellow: "#FFE194",
      },
    },
  },
  plugins: [],
};
