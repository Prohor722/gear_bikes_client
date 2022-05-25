module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7D716",

          secondary: "#F24C4C",

          accent: "#15133C",

          neutral: "#3BACB6",

          "base-100": "#FFFFFF",

          info: "#323232",

          success: "#019267",

          warning: "#FBBD23",

          error: "#F24C4C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
