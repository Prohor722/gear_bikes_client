module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7D716",

          secondary: "#293462",

          accent: "#777777",

          neutral: "#F24C4C",

          "base-100": "#FFFFFF",

          info: "#15133C",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
