/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: ["48px", "1.2"],
        h2: ["40px", "1.2"],
        h3: ["32px", "1.3"],
        h4: ["24px", "1.4"],
        h5: ["22px", "1.5"],
        h6: ["20px", "1.5"],
        s1: ["22px", "1.4"],
        s2: ["20px", "1.5"],
        s3: ["18px", "1.5"],
        b1: ["16px", "1.6"],
        b2: ["14px", "1.6"],
        c1: ["13px", "1.5"],
        c2: ["11px", "1.5"],
      },
    },
  },
  plugins: [],
};
