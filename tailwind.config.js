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
        "white-base": "#f8f8f8",
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
      keyframes: {
        noiseBefore: {
          "0%": { clip: "rect(61px, 9999px, 52px, 0)" },
          "5%": { clip: "rect(33px, 9999px, 144px, 0)" },
          "10%": { clip: "rect(121px, 9999px, 115px, 0)" },
          "15%": { clip: "rect(144px, 9999px, 162px, 0)" },
          "20%": { clip: "rect(62px, 9999px, 180px, 0)" },
          "25%": { clip: "rect(34px, 9999px, 42px, 0)" },
          "30%": { clip: "rect(147px, 9999px, 179px, 0)" },
          "35%": { clip: "rect(99px, 9999px, 63px, 0)" },
          "40%": { clip: "rect(188px, 9999px, 122px, 0)" },
          "45%": { clip: "rect(154px, 9999px, 14px, 0)" },
          "50%": { clip: "rect(63px, 9999px, 37px, 0)" },
          "55%": { clip: "rect(161px, 9999px, 147px, 0)" },
          "60%": { clip: "rect(109px, 9999px, 175px, 0)" },
          "65%": { clip: "rect(157px, 9999px, 88px, 0)" },
          "70%": { clip: "rect(173px, 9999px, 131px, 0)" },
          "75%": { clip: "rect(62px, 9999px, 70px, 0)" },
          "80%": { clip: "rect(24px, 9999px, 153px, 0)" },
          "85%": { clip: "rect(138px, 9999px, 40px, 0)" },
          "90%": { clip: "rect(79px, 9999px, 136px, 0)" },
          "95%": { clip: "rect(25px, 9999px, 34px, 0)" },
          "100%": { clip: "rect(173px, 9999px, 166px, 0)" },
        },

        noiseAfter: {
          "0%": { clip: "rect(26px, 9999px, 33px, 0)" },
          "5%": { clip: "rect(140px, 9999px, 198px, 0)" },
          "10%": { clip: "rect(184px, 9999px, 89px, 0)" },
          "15%": { clip: "rect(121px, 9999px, 6px, 0)" },
          "20%": { clip: "rect(181px, 9999px, 99px, 0)" },
          "25%": { clip: "rect(154px, 9999px, 133px, 0)" },
          "30%": { clip: "rect(134px, 9999px, 169px, 0)" },
          "35%": { clip: "rect(26px, 9999px, 187px, 0)" },
          "40%": { clip: "rect(147px, 9999px, 137px, 0)" },
          "45%": { clip: "rect(31px, 9999px, 52px, 0)" },
          "50%": { clip: "rect(191px, 9999px, 109px, 0)" },
          "55%": { clip: "rect(74px, 9999px, 54px, 0)" },
          "60%": { clip: "rect(145px, 9999px, 75px, 0)" },
          "65%": { clip: "rect(153px, 9999px, 198px, 0)" },
          "70%": { clip: "rect(99px, 9999px, 136px, 0)" },
          "75%": { clip: "rect(118px, 9999px, 192px, 0)" },
          "80%": { clip: "rect(1px, 9999px, 83px, 0)" },
          "85%": { clip: "rect(145px, 9999px, 98px, 0)" },
          "90%": { clip: "rect(121px, 9999px, 154px, 0)" },
          "95%": { clip: "rect(156px, 9999px, 44px, 0)" },
          "100%": { clip: "rect(67px, 9999px, 122px, 0)" },
        },

        wiggle: {
          "0%": { transform: "skewX(24deg)" },
          "10%": { transform: "skewX(-8deg)" },
          "20%": { transform: "skewX(55deg)" },
          "30%": { transform: "skewX(-90deg)" },
          "40%": { transform: "skewX(29deg)" },
          "50%": { transform: "skewX(-90deg)" },
          "60%": { transform: "skewX(3deg)" },
          "70%": { transform: "skewX(-2deg)" },
          "80%": { transform: "skewX(1deg)" },
          "90%": { transform: "skewX(10deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
      },
      animation: {
        glitch:
          "noiseBefore 3s infinite linear alternate-reverse, noiseAfter 2s infinite linear alternate-reverse",
        wiggle: "wiggle 0.2s 2",
      },
    },
  },
  plugins: [],
};
