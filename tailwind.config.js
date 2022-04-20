module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#F0F0F0",
      },
      minWidth: {
        "1/2": "50%",
        "4/5": "80%",
        wide: "1500px",
      },
      minHeight: {
        "1/2": "50%",
        "4/5": "80%",
      },
      maxWidth: {
        "1/2": "50%",
        "4/5": "80%",
        wide: "1500px",
      },
      maxHeight: {
        "1/2": "50%",
        "4/5": "80%",
      },
      height: {
        half: "50vh",
      },
    },
  },
  plugins: [],
};
