import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        sidebar: "var(--sidebar)",
        "sidebar-muted": "var(--sidebar-muted)",
        primary: "var(--primary)",
        "primary-soft": "var(--primary-soft)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        ai: "var(--ai)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)"
      },
      boxShadow: {
        card: "0 14px 30px rgba(17, 24, 39, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
