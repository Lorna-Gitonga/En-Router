/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#569B9B', 
        'secondary': '#CBE5F1',
        'card': '#F0F8FF',
         accent: "#3C8D8A",
        'background': '#ffffff',
        'textDark': '#1c1c1c',
      },
      fontFamily: {
        'sans': ['inria', 'Inria Serif'],
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '30px',    
    },  

        boxShadow: {
          soft: "0 8px 20px rgba(0, 0, 0, 0.08)",
        },
    },
  },
  plugins: [],
}

