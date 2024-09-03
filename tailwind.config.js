/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-bg5": "rgba(229, 236, 246, 0.5)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-100": "#000",
      },
      spacing: {
        boundvariablesdata1: "24px",
        boundvariablesdata2: "8px",
        boundvariablesdata3: "16px",
        boundvariablesdata6: "40px",
        boundvariablesdata8: "4px",
      },
      fontFamily: {
        regular: "Inter",
      },
      borderRadius: {
        boundvariablesdata: "16px",
        boundvariablesdata5: "8px",
        boundvariablesdata7: "8px",
      },
    },
    fontSize: {
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
