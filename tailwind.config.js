// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#f9f9ff",
        "on-surface": "#141b2b",
        "on-surface-variant": "#404940",
        primary: "#004c22",
        "primary-container": "#166534",
        "on-primary": "#ffffff",
        "primary-fixed": "#a6f4b5",
        "on-primary-fixed": "#00210b",
        "surface-container": "#e9edff",
        "surface-container-low": "#f1f3ff",
        "surface-container-lowest": "#ffffff",
        outline: "#707a6f",
        "outline-variant": "#bfc9bd",
      },
      borderRadius: {
        "2xl": "16px",
        xl: "12px",
      },
    },
  },
  plugins: [],
};