/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        3: "3",
        5: "5",
      },
    },
  },
  darkMode: "false",
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".line-clamp-2": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "2",
          "text-overflow": "ellipsis",
        },
        ".line-clamp-3": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "3",
          "text-overflow": "ellipsis",
        },
        ".line-clamp-5": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "5",
          "text-overflow": "ellipsis",
        },
        ".overlay-dark": {
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "10",
          },
        },
      })
    },
  ],
}
