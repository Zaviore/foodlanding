module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {
    //   // blue: "#40A2B1",
    //   // purple: "#405EB6",
    //   // pink: "#B23F74",
    //   // orange: "#ff7849",
    //   // green: "#8BAC3E",
    //   // "green-light": "#A4B441",
    //   // yellow: "#ffc82c",
    //   // "gray-dark": "#273444",
    //   // gray: "#8492a6",
    //   // "gray-light": "#d3dce6",
    // },

    extend: {
      colors: {
        "cs-blue": "#40A2B1",
        "cs-purple": "#405EB6",
        "cs-pink": "#B23F74",
        // orange: "#ff7849",
        "cs-green": "#8BAC3E",
        "cs-green-light": "#A4B441",
        "cs-green-soft": "#F9FFF6",
        // yellow: "#ffc82c",
        "cs-gray-dark": "#273444",
        // gray: "#8492a6",
        "cs-gray-light": "#ededed91",
      },
    },
  },
  plugins: [],
};
