/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{html,js}"],
  theme: {
    colors: {
      main: "hsl(233, 47%, 7%)",
      card: "hsl(244, 38%, 16%)",
      overlay: "hsl(277, 64%, 61%)",
      white: " hsl(0, 0%, 100%)",
      paragraph: "hsla(0, 0%, 100%, 0.75)",
      stats: "hsla(0, 0%, 100%, 0.6)",
    },
    screens: {
      md: "470px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        Lexend: ["Lexend Deca"],
        Inter: ["Inter"],
      },
      backgroundImage: {
        mobile: "url('/images/image-header-mobile.jpg')",
        desktop: "url('/images/image-header-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
