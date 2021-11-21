const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Base colors
    colors: {
      foreground: "#000",
      background: {
        light: "#fff",
        DEFAULT: "#fafafa",
      },
      purple: "#f81ce5",
      // Success
      success: {
        lighter: "#d3e5ff",
        light: "#3291ff",
        DEFAULT: "#0070f3",
        dark: "#0761d1",
      },
      // Error
      error: {
        lighter: "#f7d4d6",
        light: "#ff1a1a",
        DEFAULT: "#e00",
        dark: "#c50000",
      },
      // Warning
      warning: {
        lighter: "#ffefcf",
        light: "#f7b955",
        DEFAULT: "#f5a623",
        dark: "#ab570a",
      },
      // Violet
      violet: {
        lighter: "#e3d7fc",
        light: "#8a63d2",
        DEFAULT: "#7928ca",
        dark: "#4c2889",
      },
      // Cyan
      cyan: {
        lighter: "#aaffec",
        light: "#79ffe1",
        DEFAULT: "#50e3c2",
        dark: "#29bc9b",
      },
      // Highlight
      highlight: {
        purple: "#f81ce5",
        magenta: "#eb367f",
        pink: "#ff0080",
        yellow: "#fff500",
      },
      accents: {
        1: "#fafafa",
        2: "#eaeaea",
        3: "#999",
        4: "#888",
        5: "#666",
        6: "#444",
        7: "#333",
        8: "#111",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "20px",
        lg: "20px",
        xl: "20px",
        "2-xl": "20px",
      },
    },
    fontFamily: {
      sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
    },
    boxShadow: {
      sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
      md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      lg: "0 30px 60px rgba(0, 0, 0, 0.12)",
    },
    extend: {
      maxWidth: {
        "120-ch": "120ch",
        900: "900px",
      },
      height: {
        400: "400px",
        450: "450px",
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
