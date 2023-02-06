/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transition: {
        fade: "max-height .3s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
