/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-100": "#000",
        "background-bg3": "#e5ecf6",
        "background-bg2": "#f7f9fb",
        gray: "rgba(0, 0, 0, 0.2)",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "secondary-indigo": "#95a4fc",
        cornflowerblue: "#8a8cd9",
        honeydew: "#def8ee",
        mediumaquamarine: "#4aa785",
      },
      spacing: {
        boundvariablesdata: "8px",
        boundvariablesdata1: "24px",
        boundvariablesdata7: "16px",
        boundvariablesdata9: "24px",
        boundvariablesdata10: "4px",
        boundvariablesdata12: "8px",
        boundvariablesdata14: "24px",
        boundvariablesdata18: "40px",
        boundvariablesdata19: "12px",
      },
      fontFamily: {
        regular: "Inter",
      },
      borderRadius: {
        "61xl": "80px",
        boundvariablesdata2: "16px",
        boundvariablesdata3: "8px",
        boundvariablesdata4: "8px",
        boundvariablesdata8: "80px",
        boundvariablesdata11: "4px",
        boundvariablesdata13: "16px",
        boundvariablesdata16: "4px",
        boundvariablesdata20: "80px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
