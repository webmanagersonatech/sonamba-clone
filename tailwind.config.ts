import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // 👈 added here
      },
      colors: {
        maroon: {
          DEFAULT: "#006466",
          900: "#001E1F",
          800: "#002F30",
          700: "#003F41",
          600: "#00575A",
          500: "#007276",
          400: "#1A8588",
          300: "#4DA6A9",
          200: "#7FC7C9",
          100: "#B2E3E4",
        },

        grayText: "#73737eff",
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)",
      },

    },
  },
  plugins: [],
};

export default config;
