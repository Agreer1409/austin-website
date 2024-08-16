/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        jet:["'JetBrains Mono'", 'monospace']
      }
    }
    
  },
  plugins: [],
}

