const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        appear: "appear 5s ease-in-out",
        fade:"fade 2s ease-in-out",
        faderight:"faderight 2s ease-in-out",
        fadeleft:"fadeleft 2s ease-in-out",
        fadetop:"fadetop 1s ease-in-out"
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fade:{
          "0%":{
            transform:"translateY(100px)",
            opacity:"0"
          },
          "50%":{
            opacity:"0"
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:"1"
          }
        },
        faderight:{
          "0%":{
            transform:"translateX(-200px)",
           
          },
          "100%":{
            transform:"translateX(0px)",
            
          }
        },
        fadeleft:{
          "0%":{
            transform:"translateX(200px)",
            
          },
          "100%":{
            transform:"translateX(0px)",
            
          }
        },
        fadetop:{
          "0%":{
           transform:"translateY(-100px)" 
          },
          "80%":{
            transform:"translateY(10px)"
          },
          "90%":{
            transform:"translateY(5px)"
          },
          "100%":{
            transform:"translateY(0px)"
          },
          "100%":{
            transform:"translateY(0px)"
          },
          "0%":{
            transform:"translateY(-100px)"
          }
        }
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
