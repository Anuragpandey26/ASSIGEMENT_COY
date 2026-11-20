import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "text-primary": "var(--color-text-primary)",
        "accent-rose": "var(--color-accent-rose)",
        "accent-rose-hover": "#e62b54",
        "surface-muted": "var(--color-surface-muted)",
        "surface-muted-hover": "#fed7aa",
        surface: "var(--color-surface)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",

        // Official Coy Neo-Brutalist Pop Palette from Screenshots
        coy: {
          pink: "#FF3864",
          "pink-hover": "#E62854",
          "pink-soft": "#FFDFEA",
          yellow: "#FFF066",
          "yellow-badge": "#FEF08A",
          lilac: "#E0DEFF",
          peach: "#FFE1C6",
          mint: "#D1FADF",
          green: "#25D366",
          "green-hover": "#1EBE5D",
          blue: "#BAE6FD",
          black: "#0F0F12",
          dark: "#0B0A0F",
          cream: "#FFFDF9",
          gray: "#5A5551",
          border: "#000000",
        },
      },
      borderRadius: {
        card: "24px",
        control: "9999px",
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        "coy-xs": "1.5px 1.5px 0px 0px #000000",
        "coy-sm": "2px 2px 0px 0px #000000",
        coy: "3px 3px 0px 0px #000000",
        "coy-md": "4px 4px 0px 0px #000000",
        "coy-lg": "6px 6px 0px 0px #000000",
        "coy-xl": "8px 8px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};

export default config;
