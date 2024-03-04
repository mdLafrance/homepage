const defaultTheme = require("tailwindcss/defaultTheme")

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
                Bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
                Kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
                Lora: ["Lora", ...defaultTheme.fontFamily.sans],
                Fredoka: ["Fredoka", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                default: '#1e1e2f',
                space_cadet: "#22223b",
                ultra_violet: "#4a4e69",
                rose_quartz: "#9a8c98",
                pale_dogwood: "#c9ada7",
                isabelline: "#f5ebdf",

                rich_black: '#0d1321ff',
                prussian_blue: '#1d2d44ff',
                paynes_gray: '#3e5c76ff',
                silver_lake_blue: '#748cabff',
                eggshell: '#f0ebd8ff',

                yinmn_blue: "#355070",
                chinese_violet: "#6d597a",
                china_rose: "#b56576",
                light_coral: "#e56b6f",
                bu: "#eaac8b",
            }
        },
    },
    plugins: [addVariablesForColors],
    darkMode: 'class'
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
