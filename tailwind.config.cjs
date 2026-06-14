/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        // 'serif' = Fraunces, an Anthropic-style literary serif for display headings
        serif: ["Fraunces", "Spectral", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        // Legacy aliases kept so existing components compile.
        Header: ["IBM Plex Sans", "sans-serif"],
        Text2: ["IBM Plex Sans", "sans-serif"],
        About: ["IBM Plex Sans", "sans-serif"],
        Arimo: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        // Theme tokens. Switch via .light class on <html>.
        AAprimary: "var(--bg)",
        AAtertiary: "var(--bg-elev)",
        AAsurface: "var(--bg-soft)",
        MobileNavBarColor: "var(--bg-elev)",
        StartupBackground: "var(--bg)",
        ResumeButtonHover: "var(--bg-soft)",
        AAborder: "var(--border)",
        "AAborder-strong": "var(--border-strong)",
        AAtext: "var(--text)",
        AAmuted: "var(--muted)",
        AAsecondary: "var(--accent)",
        AAError: "var(--error)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
