/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 0%)",
        foreground: "hsl(0 0% 100%)",
        card: {
          DEFAULT: "hsl(0 0% 6%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 25%)",
          foreground: "hsl(0 0% 70%)",
        },
        border: "hsl(0 0% 25%)",
        input: "hsl(0 0% 25%)",
        primary: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 0%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(0 0% 100%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 15%)",
          foreground: "hsl(0 0% 100%)",
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
