module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#C5C4FF",
        indigo: "#95A4FC",
        blue: "#B1E3FF",
        cyan: "#A8C5DA",
        mint: "#BAEDBD",
        green: "#A1E3CB",
        yellow: "#FFDD60",
        orange: "#FFB55B",
        red: "#FF4747",
        black: "#000000",
        white: "#FFFFFF",
        bkg: {
          1: "#FFFFFF",
          2: "#F7F9FB",
          3: "#E5ECF6",
          4: "#E3F5FF",
          5: "#E5ECF680",
          6: "#2A2A2A",
          7: "#FFFFFF0D",
        },
      },
      gridTemplateColumns: {
        "15": "repeat(15, minmax(0, 1fr))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "48px",
        "5xl": "64px",
      },
    },
  },
  plugins: [],
};
