import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ["var(--font-noto-sans-jp)"],
        roboto: ["var(--font-roboto-condensed)"],
      },
    },
  },
};
export default config;
