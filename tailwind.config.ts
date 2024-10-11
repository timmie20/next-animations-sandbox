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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "ease-in-quad": "(var(--ease-in-quad))",
        "ease-in-cubic": "var(--ease-in-cubic)",
        //   --ease-in-quart
        //   --ease-in-quint
        //   --ease-in-expo
        //   --ease-in-circ

        //   --ease-out-quad
        //   --ease-out-cubic
        //   --ease-out-quart
        //   --ease-out-quint
        //   --ease-out-expo
        //   --ease-out-circ

        //   --ease-in-out-quad
        //   --ease-in-out-cubic
        //   --ease-in-out-quart
        //   --ease-in-out-quint
        //   --ease-in-out-expo
        //   --ease-in-out-circ
        // }
      },
    },
  },
  plugins: [],
};
export default config;
