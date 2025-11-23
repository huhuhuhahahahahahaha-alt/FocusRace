export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#9333ea",
        accent: "#14b8a6"
      },
      animation: {
        pulseSlow: "pulse 2.5s infinite"
      }
    }
  },
  plugins: []
};
