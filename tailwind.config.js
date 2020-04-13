module.exports = {
  theme: {
    // backgroundColor: {
    //   'bg-white-80': rgba(255,255,255,.8)
    // },
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      colors: {
        malachite: "#3e9795",
      },
    },
    textShadow: {
      default: "-1px 1px 1px #000",
      md: "0 2px 2px #000",
      h1: "0 0 3px #FF0000, 0 0 5px #0000FF",
      xl: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      none: "none",
    },
  },
  variants: {
    textShadow: ["responsive"],
  },
  plugins: [require("tailwindcss-textShadow")],
}
