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
        "dark-base": "#1b1b1b",
        "black-primary": "#333",
        "light-gray": "#999",
      },
      fontFamily: {
        // font-wight:100-900 main→600 sub→400
        geologica: ["var(--font-geologica)"],
        // font-wight:regular:400 medium:500
        zenKakuNew: ["var(--font-zen-kaku-new)"],
      },
      fontSize: {
        // 320px-1440px
        "small-size": "clamp(0.75rem, 0.714rem + 0.18vw, 0.875rem)",
        "base-size": "clamp(0.875rem, 0.839rem + 0.18vw, 1rem)",
        "medium-size": "clamp(1rem, 0.929rem + 0.36vw, 1.25rem)",
        "title-size": "clamp(2rem, 1.429rem + 2.86vw, 4rem)",
        "large-size": "clamp(2.5rem, 0.714rem + 8.93vw, 8.75rem)",
      },
    },
  },
  plugins: [],
};
