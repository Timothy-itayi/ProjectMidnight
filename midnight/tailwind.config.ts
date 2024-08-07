import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**.{js,ts,jsx,tsx}",
    "./src/components/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fade:'fade 1s east-out',
        shimmer: "shimmer 2s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
          
     
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      
        shimmer:{
          from:{
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0"
          },
        },
      },
      variants: {
        grayscale: ['responsive', 'hover'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;