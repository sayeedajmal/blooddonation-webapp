/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "white-color": "var(--white-color)",
        "dark-gray": "var(--dark-gray)",
        "background-color": "var(--background-color)",
        "light-gray": "var(--light-gray)",
        "accent-color": "var(--accent-color)",
      },
    },
  },
  plugins: [],
};
