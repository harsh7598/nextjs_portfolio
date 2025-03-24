// /** @type {import('tailwindcss').Config} */
// const config = {
//   theme: {
//     extend: {
//       colors: {
//         lightHover: "#fcf4ff",
//         darkHover: "#2a004a",
//         darkTheme: "#11001F",
//       },
//       fontFamily: {
//         ovo: ["Ovo", "serif"],
//         outfit: ["Outfit", "sans-serif"],
//       },
//       boxShadow: {
//         'black': '4px 4px 0 #000',
//         'white': '4px 4px 0 #fff',
//       },
//       gridTemplateColumns:{
//         auto: 'repeat(auto-fit, minmax(200px, 1fr))',
//       }
//     },
//   },
//   darkMode:'selector',
//   plugins: [],
// };

// export default config;
module.exports = {
  darkMode: "class", // Enables dark mode
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightHover: "var(--color-lightHover)",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};