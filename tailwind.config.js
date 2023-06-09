/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandDark: "#363636",
        brandYellow: "#fcc35c",
        yellow2: "#fdde7e",
        yellow3: "#fceda7",
        brandPink: "#ea4b6a",
        brandPink2: "#ec5d79",
        brandPink3: "#ee6f88",
        brandPink4: "#f08197",
        brandPink5: "#fce6ea",
        brandPurpleDark: "#612a7b",
        brandPurple: "#b67e9f",
        brandPurple2: "#d3b4d7",
        BlueDark: "#0D4b6",
        blue2: "4c95b2",
        blue3: "#78b6e2",
        BrandCyan: "",
        cyan2: "#98d2be",
        cyan3: "#cae7d9",
        brandliteGray: "#6c7471",
      },
      fontFamily: {
        heading: "B612",
        content: "Nunito",
        dm: "DM Sans",
      },
    },
  },
  plugins: [],
};
