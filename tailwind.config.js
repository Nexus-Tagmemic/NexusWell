/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors here
        green: {
          50: "#F1F8E8",
          100: "#D8EFD3",
          200: "#95D2B3",
          300: "#55AD9B",
        },
        navy: "#001f3f",
        ivory: "#FFFFF0",
        "gradient-bg": {
          DEFAULT: "linear-gradient(180deg, #0074D9 0%, #001F3F 100%)", // Gradient background
          reverse: "linear-gradient(180deg, #FFFFF0 0%, #F5F5DC 100%)", // Reverse gradient
        },
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(180deg, #0074D9 0%, #001F3F 100%)",
        "gradient-bg-reverse":
          "linear-gradient(180deg, #FFFFF0 0%, #F5F5DC 100%)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
