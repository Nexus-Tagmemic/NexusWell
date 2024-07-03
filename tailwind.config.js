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
    },
  },
  plugins: [],
};
