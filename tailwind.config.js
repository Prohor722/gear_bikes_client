module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7D716",

          secondary: "#F24C4C",

          accent: "#15133C",

          neutral: "#F24C4C",

          "base-100": "#FFFFFF",

          info: "#323232",

          success: "#EFEFEF",

          warning: "#FBBD23",

          error: "#F24C4C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
