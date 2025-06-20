/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ✅ enables dark mode using a class on <html> or <body>
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: "#0f0f0f",
        accent: "#00FFFF",
      },
      animation: {
        "pulse-slow": "pulse 2s ease-in-out infinite",       // your existing animation
        "pulse-slower": "pulse 6s ease-in-out infinite",    // slower pulse for blobs
        "pulse-slower-delay": "pulse 6s ease-in-out infinite 3s", // slower pulse with delay
      },
    },
  },
  plugins: [],
};
