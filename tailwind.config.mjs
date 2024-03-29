import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        // md: "640px", // "768px
        lg: "896px",
      },
    },
    extend: {
      colors: {
        default: {
          DEFAULT: "var(--default)",
          100: "var(--default-100)",
        },
        background: "var(--background)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["'Montserrat Variable'", ...defaultTheme.fontFamily.sans],
      },
      content: {
        dot: "'•'",
        slash: "'/'",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
