module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "5.5xl": ["3.375rem", { lineHeight: 1 }],
      },
      fontFamily: {
        "pt-sans": ["PT Sans", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
