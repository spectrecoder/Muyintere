module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "custom-sm": "600px",
        "custom-lg": "1073px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
