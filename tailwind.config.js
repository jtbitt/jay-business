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
      backgroundImage: (theme) => ({
        xs: "url('../images/background/background-xs.webp')",
        md: "url('../images/background/background-md.webp')",
        lg: "url('../images/background/background-lg.webp')",
      }),
    },
  },
  plugins: [],
};
