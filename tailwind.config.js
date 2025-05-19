/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        practicas: "#10b981", // verde
        taller: "#f59e42",    // naranja
        tecno: "#2563eb"      // azul
      }
    },
  },
  plugins: [],
}