import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Warna custom
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Animasi typewriter
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        // Animasi fade in
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(40) 1 normal both, blink 0.7s infinite step-end',
        fadeIn: 'fadeIn 1s ease-in-out', // Menambahkan animasi fadeIn
      },
    },
  },
  plugins: [],
};

export default config;
